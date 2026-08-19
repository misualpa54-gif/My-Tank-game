# Tank Realms

Tank Realms is a Three.js tank battle game being prepared as a full-screen, offline Android APK.

## Current milestone

Phase 1 stabilized the game, Phase 2 created the offline APK, Phase 3 optimized rendering, Phase 4 normalized timing/collision, and Phase 5 added the portrait HUD. Phase 6 now adds reliable progress and temporary upgrade choices:

- permanent profile and living-run data use separate versioned local saves;
- a Continue Run button appears only for a valid living run;
- player health/position, enemies, XP, level, biome, and temporary upgrades restore after closing the app;
- autosave runs every five seconds and on pause, menu exit, upgrade choice, page close, and Android backgrounding;
- defeat clears temporary run progress but preserves best score, best level, and settings;
- corrupt, outdated, edited, or impossible save values are safely rejected or clamped;
- every level-up freezes combat and shows three unique available choices;
- speed, damage, fire rate, max health, regeneration, armor, and triple shot have safe tier caps;
- the old fixed automatic upgrade schedule is removed so each level grants one chosen upgrade;
- all earlier performance, consistency, portrait, offline, and Android behavior remains active.

Detailed reports are in:

- `docs/phase3-performance-report.md`
- `docs/phase4-consistency-report.md`
- `docs/phase5-portrait-layout-report.md`
- `docs/phase6-save-upgrade-report.md`

Combo rewards, coins, the garage, three tank designs, permanent per-tank upgrades, quality levels, and complete audio will be built in later phases.

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
