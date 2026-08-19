const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const ThreeBase = require('three');

const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'index.html');
const gamePath = path.join(root, 'assets/js/game.js');

function createTouchEvent(window, type, touches) {
  const event = new window.Event(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'changedTouches', { value: touches });
  return event;
}

function createHarness() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const gameSource = fs.readFileSync(gamePath, 'utf8');
  const dom = new JSDOM(html, {
    url: 'http://localhost/tank-realms',
    pretendToBeVisual: true,
    runScripts: 'outside-only'
  });
  const { window } = dom;

  Object.defineProperty(window, 'innerWidth', { value: 390, writable: true });
  Object.defineProperty(window, 'innerHeight', { value: 844, writable: true });
  Object.defineProperty(window, 'devicePixelRatio', { value: 3, writable: true });

  const canvasContext = {
    createLinearGradient() {
      return { addColorStop() {} };
    },
    fillRect() {},
    fillStyle: null
  };
  window.HTMLCanvasElement.prototype.getContext = function getContext(type) {
    return type === '2d' ? canvasContext : null;
  };

  const animationFrames = [];
  const intervals = [];
  window.requestAnimationFrame = (callback) => {
    animationFrames.push(callback);
    return animationFrames.length;
  };
  window.cancelAnimationFrame = () => {};
  window.setTimeout = () => 1;
  window.clearTimeout = () => {};
  window.setInterval = (callback, delay) => {
    intervals.push({ callback, delay });
    return intervals.length;
  };
  window.clearInterval = () => {};

  class FakeRenderer {
    constructor() {
      this.domElement = window.document.createElement('canvas');
      this.shadowMap = {};
      this.renderCount = 0;
    }

    setSize(width, height) {
      this.width = width;
      this.height = height;
    }

    setPixelRatio(pixelRatio) {
      this.pixelRatio = pixelRatio;
    }

    render() {
      this.renderCount += 1;
    }
  }

  window.THREE = { ...ThreeBase, WebGLRenderer: FakeRenderer };

  const testApi = `
    window.__tankTest = {
      state: () => state,
      player: () => player,
      renderer: () => renderer,
      startGame,
      pauseGame,
      resumeGame,
      openSettings,
      closeSettings,
      endGame,
      quitToMenu,
      getSpawnRateForLevel
    };
  `;

  window.eval(`${gameSource}\n${testApi}`);
  return { dom, window, api: window.__tankTest, animationFrames, intervals };
}

test('Tank Realms stabilized runtime smoke test', async (t) => {
  const harness = createHarness();
  const { window, api } = harness;
  const document = window.document;

  await t.test('starts without the old core-loop exception', () => {
    const state = api.state();
    assert.equal(state.gamePhase, 'menu');
    assert.equal(state.soundEnabled, false);
    assert.equal(state.cameraMode, 'follow');
    assert.equal(state.controlAssist, false);
    assert.equal(harness.intervals.length, 0);
    assert.equal(api.renderer().pixelRatio, 1.25);
    assert.equal(harness.animationFrames.length, 1);
  });

  await t.test('moves through playing, paused, settings, and game-over states', () => {
    api.startGame();
    assert.equal(api.state().gamePhase, 'playing');
    assert.equal(api.state().isPlaying, true);
    assert.ok(api.player());

    api.openSettings();
    assert.equal(api.state().gamePhase, 'paused');
    assert.equal(api.state().settingsOpen, true);
    assert.equal(document.getElementById('settings-screen').classList.contains('hidden'), false);
    assert.equal(document.getElementById('btn-pause').classList.contains('show'), false);
    assert.equal(document.getElementById('hud-quickbar').classList.contains('show'), false);

    api.closeSettings();
    assert.equal(api.state().settingsOpen, false);
    assert.equal(document.getElementById('settings-screen').classList.contains('hidden'), true);
    assert.equal(document.getElementById('btn-pause').classList.contains('show'), true);

    api.resumeGame();
    assert.equal(api.state().gamePhase, 'playing');

    api.endGame();
    assert.equal(api.state().gamePhase, 'gameover');
    assert.equal(api.state().isPlaying, false);
    assert.equal(document.getElementById('game-over-screen').classList.contains('hidden'), false);
    assert.equal(document.getElementById('btn-pause').classList.contains('show'), false);
    assert.equal(document.getElementById('hud-quickbar').classList.contains('show'), false);
  });

  await t.test('releases firing and movement when touches are cancelled', () => {
    api.startGame();
    const inputLayer = document.getElementById('input-layer');

    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 1, clientX: 300, clientY: 700 }
    ]));
    assert.equal(api.state().input.isFiring, true);

    // A second firing finger is ignored and cannot replace the first one.
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 2, clientX: 320, clientY: 720 }
    ]));
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchcancel', [
      { identifier: 2, clientX: 320, clientY: 720 }
    ]));
    assert.equal(api.state().input.isFiring, true);

    inputLayer.dispatchEvent(createTouchEvent(window, 'touchcancel', [
      { identifier: 1, clientX: 300, clientY: 700 }
    ]));
    assert.equal(api.state().input.isFiring, false);

    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 3, clientX: 50, clientY: 700 }
    ]));
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchmove', [
      { identifier: 3, clientX: 90, clientY: 730 }
    ]));
    assert.notEqual(api.state().input.x, 0);

    inputLayer.dispatchEvent(createTouchEvent(window, 'touchcancel', [
      { identifier: 3, clientX: 90, clientY: 730 }
    ]));
    assert.equal(api.state().input.x, 0);
    assert.equal(api.state().input.y, 0);
  });

  await t.test('clears active controls if the app loses focus', () => {
    const inputLayer = document.getElementById('input-layer');
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 4, clientX: 300, clientY: 700 }
    ]));
    assert.equal(api.state().input.isFiring, true);

    window.dispatchEvent(new window.Event('blur'));
    assert.equal(api.state().input.isFiring, false);
  });

  await t.test('uses deterministic spawn timing instead of a background interval', () => {
    const levelOneExpected = 3.35 / 1.11;
    assert.ok(Math.abs(api.getSpawnRateForLevel(1) - levelOneExpected) < 1e-10);
    assert.ok(api.getSpawnRateForLevel(10) < api.getSpawnRateForLevel(1));
    assert.equal(harness.intervals.length, 0);
  });

  await t.test('responds safely to native app background and Back events', () => {
    api.startGame();
    window.TankRealmsApp.handleAppStateChange(false);
    assert.equal(api.state().gamePhase, 'paused');

    assert.equal(window.TankRealmsApp.handleBackButton(), true);
    assert.equal(api.state().gamePhase, 'playing');

    assert.equal(window.TankRealmsApp.handleBackButton(), true);
    assert.equal(api.state().gamePhase, 'paused');

    api.quitToMenu();
    assert.equal(window.TankRealmsApp.handleBackButton(), false);
  });

  await t.test('can restart repeatedly and return cleanly to the menu', () => {
    for (let i = 0; i < 10; i += 1) api.startGame();
    assert.equal(api.state().gamePhase, 'playing');

    api.quitToMenu();
    assert.equal(api.state().gamePhase, 'menu');
    assert.equal(api.state().isPlaying, false);
    assert.equal(api.player(), null);
    assert.equal(document.getElementById('start-screen').classList.contains('hidden'), false);
  });

  harness.dom.window.close();
});

test('document uses local build entry points and has no broken core block', () => {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const gameSource = fs.readFileSync(gamePath, 'utf8');

  assert.match(html, /assets\/css\/game\.css/);
  assert.match(html, /src\/main\.js/);
  assert.doesNotMatch(html, /https?:\/\//);
  assert.doesNotMatch(html, /NEW CORE LOOP SYSTEM/);
  assert.doesNotMatch(gameSource, /oldUpdateLoop|oldEnemiesPush|oldLevelUp/);
  assert.equal(fs.existsSync(path.join(root, 'assets/css/game.css')), true);
  assert.equal(fs.existsSync(path.join(root, 'src/main.js')), true);
  assert.equal(fs.existsSync(gamePath), true);
});
