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

function getSceneStats(scene) {
  const stats = { objects: 0, meshes: 0, instancedMeshes: 0, lights: 0 };
  const geometries = new Set();
  const materials = new Set();
  scene.traverse((object) => {
    stats.objects += 1;
    if (object.isMesh) {
      stats.meshes += 1;
      if (object.geometry) geometries.add(object.geometry);
      const objectMaterials = Array.isArray(object.material) ? object.material : [object.material];
      objectMaterials.filter(Boolean).forEach((material) => materials.add(material));
    }
    if (object.isInstancedMesh) stats.instancedMeshes += 1;
    if (object.isLight) stats.lights += 1;
  });
  stats.uniqueGeometries = geometries.size;
  stats.uniqueMaterials = materials.size;
  return stats;
}

function collectResources(roots) {
  const geometries = new Set();
  const materials = new Set();
  roots.forEach((rootObject) => {
    rootObject.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      const objectMaterials = Array.isArray(object.material) ? object.material : [object.material];
      objectMaterials.filter(Boolean).forEach((material) => materials.add(material));
    });
  });
  return { geometries, materials };
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
      scene: () => scene,
      bullets: () => bullets,
      bulletPool: () => bulletPool,
      environmentColliders: () => environmentColliders,
      environmentObjects: () => environmentObjects,
      environmentParticles: () => environmentParticles,
      environmentRoots: () => [
        ...environmentObjects,
        ...environmentParticleBatches,
        groundMesh,
        waterMesh,
        ...lavaMeshes,
        ambientLight,
        dirLight,
        hemisphereLight
      ].filter(Boolean),
      startGame,
      pauseGame,
      resumeGame,
      openSettings,
      closeSettings,
      endGame,
      quitToMenu,
      loadBiome,
      shoot,
      acquireBulletVisual,
      releaseBulletVisual,
      releaseBulletAt,
      updatePhysics,
      getFrameEquivalentAlpha,
      getFrameEquivalentMultiplier,
      getFrameEquivalentChance,
      getSegmentCylinderHitTime,
      getArenaBoundaryHitTime,
      getSpawnRateForLevel,
      getTouchControlTop,
      makeEnemy: (type, x, z) => {
        const enemy = new Tank(ENEMY_TYPES[type].color, false, type);
        enemy.mesh.position.set(x, 0, z);
        enemies.push(enemy);
        return enemy;
      },
      measureTankMovement: (fps, seconds) => {
        const tank = new Tank(0x22c55e, true);
        tank.mesh.position.set(0, 0, 0);
        const input = new THREE.Vector2(0, 1);
        for (let frame = 0; frame < fps * seconds; frame++) {
          tank.move(1 / fps, input);
        }
        const distance = tank.mesh.position.z;
        removeAndDisposeObject(tank.mesh);
        return distance;
      }
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

  await t.test('batches dense scenery and keeps only gameplay colliders', () => {
    const stats = getSceneStats(api.scene());
    if (process.env.TANK_PERF_REPORT === '1') {
      process.stdout.write(`\nPHASE3_SCENE_STATS ${JSON.stringify(stats)}\n`);
    }
    assert.ok(stats.meshes < 250, `expected fewer than 250 meshes, found ${stats.meshes}`);
    assert.ok(
      stats.instancedMeshes >= 7,
      'forest should instance trees, background rocks, grass, and environment particles'
    );
    assert.equal(api.environmentColliders().length, 80);
  });

  await t.test('disposes old biome geometries, materials, and background texture', () => {
    const resources = collectResources(api.environmentRoots());
    const oldBackground = api.scene().background;
    let disposedGeometries = 0;
    let disposedMaterials = 0;
    let disposedBackgrounds = 0;

    resources.geometries.forEach((geometry) => {
      geometry.addEventListener('dispose', () => { disposedGeometries += 1; });
    });
    resources.materials.forEach((material) => {
      material.addEventListener('dispose', () => { disposedMaterials += 1; });
    });
    oldBackground.addEventListener('dispose', () => { disposedBackgrounds += 1; });

    api.loadBiome(1);
    assert.equal(disposedGeometries, resources.geometries.size);
    assert.equal(disposedMaterials, resources.materials.size);
    assert.equal(disposedBackgrounds, 1);
    assert.notEqual(api.scene().background, oldBackground);
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

  await t.test('reserves the upper portrait area for HUD controls', () => {
    assert.equal(api.getTouchControlTop(), 844 * 0.3);
  });

  await t.test('releases firing and movement when touches are cancelled', () => {
    api.startGame();
    const inputLayer = document.getElementById('input-layer');

    // HUD-area touches must not start movement or firing.
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 90, clientX: 50, clientY: 100 },
      { identifier: 91, clientX: 320, clientY: 100 }
    ]));
    assert.equal(api.state().input.isFiring, false);
    assert.equal(document.getElementById('joystick-base').style.display, 'none');

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

  await t.test('matches 60 FPS behavior at 30, 60, and 120 FPS', () => {
    const chanceAt60 = 0.008;
    const chanceAt30 = api.getFrameEquivalentChance(chanceAt60, 1 / 30);
    const chanceAt120 = api.getFrameEquivalentChance(chanceAt60, 1 / 120);
    assert.ok(Math.abs(chanceAt30 - (1 - Math.pow(1 - chanceAt60, 2))) < 1e-12);
    assert.ok(Math.abs((1 - Math.pow(1 - chanceAt120, 2)) - chanceAt60) < 1e-12);

    const movement30 = api.measureTankMovement(30, 1);
    const movement60 = api.measureTankMovement(60, 1);
    const movement120 = api.measureTankMovement(120, 1);
    assert.ok(Math.abs(movement30 - movement60) < 1e-8);
    assert.ok(Math.abs(movement120 - movement60) < 1e-8);
  });

  await t.test('detects collisions across the complete projectile path', () => {
    const start = new window.THREE.Vector3(0, 2, 8.45);
    const end = new window.THREE.Vector3(0, 2, 14.45);
    const target = new window.THREE.Vector3(0, 0, 11.5);
    assert.ok(start.distanceTo(target) > 2.6);
    assert.ok(end.distanceTo(target) > 2.6);
    assert.notEqual(api.getSegmentCylinderHitTime(start, end, target, 2.6, 6), null);
    assert.ok(Math.abs(
      api.getArenaBoundaryHitTime(
        new window.THREE.Vector3(45, 2, 0),
        new window.THREE.Vector3(51, 2, 0)
      ) - (1 / 6)
    ) < 1e-12);
  });

  await t.test('prevents a stalled frame from tunnelling through an enemy', () => {
    api.startGame();
    const enemy = api.makeEnemy('soldier', 0, 11.5);
    enemy.move = () => {};
    enemy.aimAt = () => {};
    const oldRandom = window.Math.random;
    window.Math.random = () => 1;

    api.shoot(api.player());
    api.updatePhysics(0.1);
    api.updatePhysics(0.1);

    window.Math.random = oldRandom;
    assert.equal(enemy.hp, 28);
    assert.equal(api.bullets().length, 0);
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

  await t.test('reuses projectile objects instead of allocating every shot', () => {
    api.startGame();
    api.shoot(api.player());
    assert.equal(api.bullets().length, 1);
    const firstBulletGroup = api.bullets()[0].group;

    api.releaseBulletAt(0);
    assert.equal(api.bullets().length, 0);
    assert.equal(api.bulletPool().length, 1);

    api.shoot(api.player());
    assert.equal(api.bullets()[0].group, firstBulletGroup);
    api.releaseBulletAt(0);
  });

  await t.test('caps the projectile pool during a 200-projectile stress release', () => {
    const stressBullets = Array.from(
      { length: 200 },
      () => api.acquireBulletVisual(0x00ffff)
    );
    let overflowGeometryDisposals = 0;
    stressBullets[stressBullets.length - 1].group.children[0].geometry.addEventListener(
      'dispose',
      () => { overflowGeometryDisposals += 1; }
    );

    stressBullets.forEach((bullet) => api.releaseBulletVisual(bullet));
    assert.equal(api.bulletPool().length, 128);
    assert.equal(overflowGeometryDisposals, 1);
  });

  await t.test('stays within the mesh budget through 30 biome transitions', () => {
    api.startGame();
    for (let i = 0; i < 30; i += 1) {
      api.loadBiome(i % 6);
      const stats = getSceneStats(api.scene());
      assert.ok(stats.meshes < 350, `biome ${i % 6} created ${stats.meshes} meshes`);
      assert.ok(api.environmentColliders().length <= 100);
    }
  });

  await t.test('can restart 50 times and return cleanly to the menu', () => {
    for (let i = 0; i < 50; i += 1) api.startGame();
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
