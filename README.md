# Tank Realms

Tank Realms is a Three.js tank battle game being prepared as a full-screen, offline Android APK.

## Current milestone

Phase 1 stabilized the original game. Phase 2 created the offline Android APK. Phase 3 reduced rendering and memory pressure. Phase 4 normalized timing and collision. Phase 5 now provides the approved portrait controls and responsive HUD:

- score, level/XP, and health panels use a compact non-overlapping portrait grid;
- quick settings and pause controls sit on a separate row below the HUD;
- the biome, upgrade, and enemy notices fit narrow portrait screens;
- the upper 30% is reserved for HUD interaction and cannot accidentally move or fire;
- the lower-left floating joystick and lower-right hold-to-fire zones remain invisible;
- all four safe-area insets, dynamic viewport height, narrow widths, and short screens are handled;
- automated layout budgets cover 320–600 pixel portrait widths and 640–915 pixel heights;
- Phase 3 performance and Phase 4 consistency improvements remain active;
- the browser and APK remain fully offline;
- Android identity remains `com.thiltete.tankrealms`, portrait-only, with Android 9 as the minimum.

Detailed reports are in:

- `docs/phase3-performance-report.md`
- `docs/phase4-consistency-report.md`
- `docs/phase5-portrait-layout-report.md`

The approved random upgrades, combo, coins, garage, three tank designs, saving, quality levels, and complete audio will be built in later phases.

## Project structure

- `index.html` — main game screen used by Vite and Android
- `assets/css/game.css` — existing visual styling
- `assets/js/game.js` — game and Three.js logic
- `src/main.js` — local Three.js and Capacitor startup bridge
- `capacitor.config.json` — Android app name, package ID, and web directory
- `android/` — native Android project
- `tests/` — runtime, offline-build, and Android-configuration checks
- `tank_realms_debugged_hud.html` — compatibility link to `index.html`

## Run the checks

Install development tools once:

```bash
npm install
```

Run JavaScript checks, HTML checks, an offline production build, and all tests:

```bash
npm run check
```

## Run the browser preview

```bash
npm run dev
```

Vite displays the local preview address. The preview and APK use bundled Three.js rather than the old internet CDN.

## Build and synchronize Android

Build the offline web files and copy them into the Android project:

```bash
npm run android:sync
```

Build a debug APK on a computer with Java 21 and the Android SDK installed:

```bash
npm run android:apk
```

The helper copies the result to:

`apk/TankRealms-debug.apk`

A ready-made GitHub Actions build template is stored at:

`docs/android-debug-workflow.yml`

Arena's GitHub App cannot create workflow files because it has read-only Actions permission. To activate the cloud APK build, use GitHub's website to create `.github/workflows/android-debug.yml` on this branch and paste the template into it. GitHub will then build the APK and publish it as a downloadable artifact named **TankRealms-debug-apk**.

## Android identity

- App name: **Tank Realms**
- Publisher: **Thiltete**
- Package ID: `com.thiltete.tankrealms`
- First target: offline sideloadable APK using Capacitor
- Orientation: portrait
- Minimum target: Android 9, approximately 4 GB RAM
