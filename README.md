# Tank Realms

Tank Realms is a Three.js tank battle game being prepared as a full-screen, offline Android APK.

## Current milestone

Phases 1–10 provide the stable offline APK, optimization, portrait controls, saving, upgrades, economy, garage, quality, audio/accessibility, and Realm Guardians. Phase 11 adds strategic combat roles and realm objectives:

- Shield Tanks, Artillery, Mine Layers, Commanders, Drone Carriers, Attack Drones, and Reflectors enter at controlled later levels;
- visible shields, auras, equipment pods, artillery warning rings, and armed mines explain each role;
- artillery uses a 1.5-second warning, mines are capped at eight, and all minions obey the global enemy cap;
- Commander speed/damage buffs and Reflector shield windows create target-priority decisions;
- one objective at a time asks for a marked Heavy, survival, Medic kills, combo, beacon defense, no-damage play, or a score target;
- objectives reward permanent coins and a 15% repair;
- a pending guardian waits until the objective succeeds or fails while normal spawning continues;
- objective type, progress, timing, score baseline, beacon health, and marked target survive Continue/reload;
- all previous guardian, quality, saving, garage, portrait, performance, consistency, audio, accessibility, offline, and Android behavior remains active.

Detailed reports are in:

- `docs/phase3-performance-report.md`
- `docs/phase4-consistency-report.md`
- `docs/phase5-portrait-layout-report.md`
- `docs/phase6-save-upgrade-report.md`
- `docs/phase7-garage-economy-report.md`
- `docs/phase8-quality-report.md`
- `docs/phase9-polish-balance-report.md`
- `docs/phase10-realm-guardians-report.md`
- `docs/phase11-strategic-enemies-objectives-report.md`

The next approved stage is upgrade evolutions and trade-off upgrades, followed by tank mastery/achievements, daily challenges, and extra modes. Final-release signing and store work remain separate.

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
