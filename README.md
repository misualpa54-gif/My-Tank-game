# Tank Realms

Tank Realms is a Three.js tank battle game being prepared as a full-screen, offline Android APK.

## Current milestone

Phases 1–8 provide the stable offline APK, optimization, consistent combat, portrait controls, continuation, choice upgrades, economy, garage, tanks, and quality modes. Phase 9 completes the recommended polish and balance foundation:

- offline procedural arcade sci-fi effects cover three player weapons, enemies, impacts, explosions, damage, combos, coins, upgrades, garage actions, UI, and game over;
- official optional Android haptics are rate-limited and saved;
- effects volume, camera-shake mode, reduced flashes, Left-handed controls, and Large HUD are available in Settings;
- a four-step first-run tutorial follows the selected handedness and can be replayed;
- living saves are protected by Continue, Replace, and Cancel confirmation;
- defeat shows coins, kills, best combo, survival time, tank, upgrade count, and new records;
- local run statistics persist through Continue and provide data for future economy tuning;
- armor now uses diminishing protection instead of direct subtraction, preventing armor/regeneration invulnerability;
- all previous quality, saving, garage, portrait, performance, consistency, offline, and Android behavior remains active.

Detailed reports are in:

- `docs/phase3-performance-report.md`
- `docs/phase4-consistency-report.md`
- `docs/phase5-portrait-layout-report.md`
- `docs/phase6-save-upgrade-report.md`
- `docs/phase7-garage-economy-report.md`
- `docs/phase8-quality-report.md`
- `docs/phase9-polish-balance-report.md`

The next approved content stage is Realm Guardian bosses, followed by strategic enemies, upgrade evolutions, mastery/achievements, daily challenges, and extra modes. Final-release signing and store work remain separate.

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
