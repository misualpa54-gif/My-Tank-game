# Tank Realms

Tank Realms is a Three.js tank battle game being prepared as a full-screen, offline Android APK.

## Current milestone

Phases 1–14 provide the stable offline APK plus optimization, saving, economy, tanks, quality, accessibility, guardians, strategic enemies, objectives, evolutions, mastery, achievements, and the deterministic offline Daily Challenge. Phase 15 adds the approved additional game modes:

- **Boss Hunt** battles all six established Realm Guardians in order without normal enemy waves;
- **Last Stand** uses an endless, capped survival curve that increases spawn pressure every 20–30 seconds;
- **Realm Rush** rotates through all six biomes during a fixed three-minute score-and-level challenge;
- **One-Tank Challenge** keeps the selected tank and temporary upgrades while disabling permanent stat upgrades;
- **Custom Practice** lets the player choose a biome, starting level, and any combination of 12 normal enemy types;
- Practice cannot alter coins, best records, mastery, achievements, lifetime statistics, or a preserved living run;
- every reward mode stores its mode-specific state for Continue, including the active Boss Hunt guardian and Realm Rush timer;
- a compact portrait-safe mode HUD shows guardian order, threat tier, countdown, or special rules;
- Adventure and Daily behavior remains unchanged;
- no internet, account, ads, real-money purchases, or network permission is added.

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
- `docs/phase12-upgrade-evolutions-report.md`
- `docs/phase13-mastery-achievements-report.md`
- `docs/phase14-offline-daily-challenge-report.md`
- `docs/phase15-additional-game-modes-report.md`

The approved gameplay roadmap is now complete through the additional game modes package. Final-release signing, app icon/splash replacement, and store work remain separate.

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
