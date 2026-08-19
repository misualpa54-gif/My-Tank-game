# Tank Realms

Tank Realms is a Three.js tank battle game being prepared as a full-screen, offline Android APK.

## Current milestone

Phases 1–6 stabilized, packaged, optimized, normalized, adapted, and added reliable continuation/upgrades. Phase 7 now adds the approved permanent economy and tank collection:

- connected kills within three seconds increase score and coin rewards by +0.2, capped at ×3;
- XP remains based on the original enemy value and is never combo-multiplied;
- permanent coins save after every kill;
- the menu-only garage contains Verdant Vanguard, Ember Warden, and Azure Bastion;
- all three tanks have equal unupgraded gameplay stats;
- body details, colors, projectile colors, and projectile shapes are visually distinct without changing hitboxes or projectile behavior;
- Ember Warden costs 750 coins and Azure Bastion costs 1,800 coins;
- Hull, Damage, Speed, Armor, and Fire rate have five separately purchased tiers for every tank;
- garage purchases are rejected during active combat and affect the next new adventure;
- coins, unlocks, selection, and per-tank tiers are added safely to the existing versioned profile;
- all earlier saving, upgrade-choice, portrait, performance, consistency, offline, and Android behavior remains active.

Detailed reports are in:

- `docs/phase3-performance-report.md`
- `docs/phase4-consistency-report.md`
- `docs/phase5-portrait-layout-report.md`
- `docs/phase6-save-upgrade-report.md`
- `docs/phase7-garage-economy-report.md`

Low/Medium/High quality levels and the complete arcade sci-fi audio set remain for later phases.

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
