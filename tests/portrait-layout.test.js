const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'assets/css/game.css'), 'utf8');
const gameSource = fs.readFileSync(path.join(root, 'assets/js/game.js'), 'utf8');

test('portrait HUD has dedicated score, level, and health panels', () => {
  assert.match(html, /id="hud-score-panel"/);
  assert.match(html, /id="hud-level-panel"/);
  assert.match(html, /id="hud-health-panel"/);
  assert.match(html, /Lower left: Move • Lower right: Hold to fire/);

  assert.match(css, /@media \(orientation: portrait\)/);
  assert.match(css, /grid-template-columns: minmax\(0, 1fr\) auto minmax\(0, 1fr\)/);
  assert.match(css, /#hud-score-panel/);
  assert.match(css, /#hud-level-panel/);
  assert.match(css, /#hud-health-panel/);
});

test('portrait layout accounts for notches, system edges, and dynamic height', () => {
  for (const inset of ['top', 'right', 'bottom', 'left']) {
    assert.match(css, new RegExp(`env\\(safe-area-inset-${inset}\\)`));
  }
  assert.match(css, /100dvh/);
  assert.match(css, /max-height: calc\(100dvh/);
  assert.match(css, /@media \(orientation: portrait\) and \(max-width: 360px\)/);
  assert.match(css, /@media \(orientation: portrait\) and \(max-height: 680px\)/);
});

test('common Android portrait widths have non-overlapping HUD and control budgets', () => {
  for (const width of [320, 360, 390, 412, 480, 600]) {
    const horizontalPadding = width <= 360 ? 12 : 16;
    const gap = width <= 360 ? 4 : 5;
    const centerWidth = Math.min(width * (width <= 360 ? 0.26 : 0.27), width <= 360 ? 94 : 112);
    const sideTrackWidth = (width - horizontalPadding - centerWidth - gap * 2) / 2;
    assert.ok(sideTrackWidth >= 100, `${width}px viewport leaves only ${sideTrackWidth}px per side HUD`);

    const buttonSize = width <= 360 ? 40 : 44;
    const buttonGap = width <= 360 ? 5 : 6;
    const edge = width <= 360 ? 6 : 8;
    const quickbarEnd = edge + buttonSize * 4 + buttonGap * 3;
    const pauseStart = width - edge - buttonSize;
    assert.ok(quickbarEnd < pauseStart, `${width}px viewport overlaps quickbar and pause button`);
  }
});

test('garage and combo UI are present in the portrait-safe layout', () => {
  assert.match(html, /id="btn-garage"/);
  assert.match(html, /id="garage-screen"/);
  assert.match(html, /id="garage-list"/);
  assert.match(html, /id="combo-indicator"/);
  assert.match(html, /id="coins"/);
  assert.match(html, /id="toggle-quality-panel"/);
  assert.match(html, /id="tutorial-screen"/);
  assert.match(html, /id="new-run-confirm-screen"/);
  assert.match(html, /id="result-coins"/);
  assert.match(html, /id="effects-volume"/);
  assert.match(html, /id="boss-hud"/);
  assert.match(html, /id="boss-warning"/);
  assert.match(html, /id="achievements-screen"/);
  assert.match(html, /id="btn-achievements"/);
  assert.match(css, /\.garage-panel/);
  assert.match(css, /\.achievement-card/);
  assert.match(css, /#boss-health-fill/);
  assert.match(css, /\.results-grid/);
  assert.match(css, /\.tank-upgrades/);
  assert.match(css, /#combo-indicator/);
});

test('touch controls begin below the compact HUD', () => {
  assert.match(gameSource, /touchControlTopRatio: 0\.3/);
  assert.match(gameSource, /touch\.clientY >= getTouchControlTop\(\)/);
  for (const height of [640, 720, 800, 844, 915]) {
    const controlTop = height * 0.3;
    assert.ok(controlTop >= 192);
    assert.ok(height - controlTop >= 448);
  }
});
