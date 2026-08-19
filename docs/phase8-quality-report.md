# Phase 8 Quality Settings Report

## Scope

Phase 8 adds the approved player-selected Low, Medium, and High quality modes. It does not include or modify final-release signing, store setup, application icons, splash artwork, package identity, or Play Store assets.

Quality changes are visual and rendering-only. Enemy counts, spawn timing, player/enemy stats, foreground colliders, terrain, XP, score, coins, upgrade choices, hitboxes, projectile behavior, and garage prices remain identical.

## Quality modes

| Setting | Maximum pixel ratio | Shadows | Distant decoration | Ambient particles | Combat-effect particles | Optional point lights |
|---|---:|---|---:|---:|---:|---|
| Low | 0.8 | Basic, 512 map | 35% | 35% | 50% | Off |
| Medium | 1.0 | PCF, 1024 map | 65% | 67% | 75% | On |
| High | 1.25 | Soft PCF, 1024 map | 100% | 100% | 100% | On |

Medium is the default for new and older profiles.

### Low

Designed for Android 9 budget phones and battery savings:

- renders fewer off-arena background tree/rock instances;
- renders fewer ambient snow, leaves, embers, sand, fireflies, or sparkles;
- reduces smoke, debris, heal, spark, and explosion particle counts;
- uses lower internal resolution and basic shadows;
- disables optional bullet, muzzle, lava, crystal, and impact point lights;
- retains visible projectile meshes, muzzle flashes, shockwaves, gameplay scenery, and all colliders.

### Medium

Balanced default:

- moderate distant decoration and ambient particles;
- 75% combat-effect particle counts;
- PCF shadows and full optional point lights;
- rendering capped to device pixel ratio 1.0.

### High

Preserves the full Phase 7 visual detail:

- all distant decorations;
- all ambient and combat particles;
- soft shadows;
- all optional lights;
- rendering capped at 1.25 device pixel ratio.

## Runtime switching

The settings panel now contains a Quality button. Each press cycles:

`Low → Medium → High → Low`

Changes apply immediately while the settings screen has the game paused. Existing instanced meshes change their rendered instance count without rebuilding the biome or moving foreground trees and rocks. This avoids changing gameplay collision placement when quality changes.

## Persistence

`qualityMode` is stored in the existing versioned permanent profile. Missing or invalid values safely fall back to Medium. The selected mode is restored before the renderer and first biome are initialized.

## Verification

- 37 automated tests pass.
- Low, Medium, and High pixel-ratio limits pass.
- Ambient-particle instance budgets pass.
- Gameplay collider count remains unchanged across all quality modes.
- Low-quality effect count reduction passes.
- Low-quality optional-light disabling passes.
- Quality cycling and profile persistence pass.
- Old profiles without quality data default to Medium.
- Phase 3 performance, Phase 4 timing/collision, Phase 5 portrait, Phase 6 saving/upgrades, and Phase 7 economy/garage tests continue to pass.
- Offline web build and Android configuration checks pass.
- Dependency audit reports zero known vulnerabilities.

## Real-device checks still required

The quality setting should be compared on the target phone for:

- sustained FPS and frame-time stability;
- heat and battery use;
- text/UI sharpness at 0.8 and 1.0 pixel ratio;
- shadow appearance;
- explosion clarity;
- whether Medium or Low should be recommended for that specific device.
