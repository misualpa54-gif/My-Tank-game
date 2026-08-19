# Tank Realms

Tank Realms is a Three.js tank battle game being prepared as a full-screen, offline Android APK.

## Current milestone

Phases 1–7 now provide the stabilized offline APK, optimized rendering, consistent timing/collision, portrait controls, continuation, choice upgrades, combo economy, and three-tank garage. Phase 8 adds player-controlled rendering quality:

- Low, Medium, and High cycle from the settings panel and save permanently;
- Low uses pixel ratio 0.8, basic 512 shadows, 35% distant/ambient detail, 50% effect particles, and no optional point lights;
- Medium is the default with pixel ratio 1.0, PCF shadows, 65–67% distant/ambient detail, 75% effect particles, and optional lights;
- High retains full Phase 7 detail, soft shadows, all particles/decorations/lights, and pixel ratio up to 1.25;
- foreground trees, rocks, colliders, enemies, stats, spawn rules, hitboxes, XP, score, coins, and garage prices never change with quality;
- quality switches existing instanced scene counts without rebuilding or moving the biome;
- older profiles safely default to Medium;
- all earlier saving, upgrade, portrait, performance, consistency, economy, offline, and Android behavior remains active.

Detailed reports are in:

- `docs/phase3-performance-report.md`
- `docs/phase4-consistency-report.md`
- `docs/phase5-portrait-layout-report.md`
- `docs/phase6-save-upgrade-report.md`
- `docs/phase7-garage-economy-report.md`
- `docs/phase8-quality-report.md`

The complete arcade sci-fi audio set remains for the next phase. Final-release signing, icons, splash artwork, and store work are intentionally not part of Phase 8.

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
