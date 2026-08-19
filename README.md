# Tank Realms

Tank Realms is a Three.js tank battle game being prepared for an offline Android APK.

## Current milestone

Phase 1 stabilizes the existing game without redesigning its combat or visuals:

- removed the broken duplicated core-loop code;
- fixed game, pause, settings, game-over, and menu states;
- fixed cancelled/stuck mobile touches;
- made spawn timing deterministic;
- separated HTML, CSS, and JavaScript;
- added automated smoke tests.

The approved random upgrades, combo, coins, garage, three tank designs, saving, quality levels, complete audio, portrait layout, and Capacitor APK will be built in later phases.

## Open the current game

The entry file is:

`tank_realms_debugged_hud.html`

For local development, serve the repository with a small web server instead of opening the file directly.

## Run the checks

Install the development tools once:

```bash
npm install
```

Run all code, HTML, and runtime checks:

```bash
npm run check
```

A successful check reports eight passing tests and no failures.

## Project structure

- `tank_realms_debugged_hud.html` — game screen structure
- `assets/css/game.css` — existing visual styling
- `assets/js/game.js` — game and Three.js logic
- `tests/smoke.test.js` — automated startup, state, restart, and touch tests

## Android direction

The planned Android identity is:

- App name: **Tank Realms**
- Publisher: **Thiltete**
- Package ID: `com.thiltete.tankrealms`
- First target: offline sideloadable APK using Capacitor
- Orientation: portrait
- Minimum target: Android 9, approximately 4 GB RAM
