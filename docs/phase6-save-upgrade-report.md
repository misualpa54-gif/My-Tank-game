# Phase 6 Save and Upgrade Report

## Scope

Phase 6 adds reliable local progress saving, living-run continuation, and the approved three-choice temporary upgrade system. Coins, combo rewards, the garage, purchasable tanks, and permanent per-tank upgrades remain reserved for Phase 7.

## Save structure

The game now uses two versioned local records.

### Permanent profile

Key: `tank_realms_profile_v1`

Saved permanently on the phone:

- best score;
- best level;
- sound setting;
- camera mode;
- control-assist setting;
- save-format version.

Best score and level are updated during autosaves as well as at defeat, so starting a new adventure cannot erase a record from a living run.

### Active run

Key: `tank_realms_active_run_v1`

Saved while the player is alive:

- score, XP, level, and next-level requirement;
- current biome;
- player health and position;
- temporary upgrade tiers;
- living enemy types, health, positions, and rotation;
- already introduced enemy types;
- pending level-up count;
- currently displayed upgrade choices;
- save timestamp and format version.

Transient bullets, smoke, debris, muzzle flashes, and camera shake are intentionally not saved.

## Save timing

A living run is saved:

- immediately when a new run starts;
- every five seconds during active combat;
- when the game is paused;
- when the player quits to the menu;
- when an upgrade choice opens or is selected;
- when the browser page or Android app is backgrounded;
- when the page is closed.

## Continue and defeat behavior

A **Continue Run** button appears only when a valid living save exists.

Continuing restores the battle state and recreates the player and living enemies. A pending upgrade selection reopens with the same choices.

After defeat:

- the active run save is deleted;
- level, XP, health, and temporary upgrades reset on the next adventure;
- best score, best level, and settings remain;
- the Continue button disappears.

Local data normally remains when installing a newer APK with the same package and signing key. Uninstalling the app normally removes it.

## Save safety

Every loaded number is checked and clamped to a safe range. The loader rejects or removes:

- broken JSON;
- unsupported save versions;
- dead-player active saves;
- unknown enemy types;
- invalid upgrade IDs;
- non-finite numbers;
- positions outside the arena;
- stat tiers above their caps;
- impossible health values.

If local storage is unavailable, the game continues without crashing; only persistence is disabled for that session.

## Three-choice upgrades

Each level-up pauses combat and presents up to three unique available choices. Enemies, bullets, spawning, regeneration, and movement stop until a selection is made. Android Back cannot dismiss the required choice.

The old fixed automatic upgrade schedule has been removed, so a level grants one selected upgrade rather than an automatic upgrade plus a choice.

| Upgrade | Per tier | First available | Maximum tier | Maximum run value |
|---|---:|---:|---:|---:|
| Movement speed | +15% | Level 2 | 7 | 205% |
| Damage | +20% | Level 2 | 10 | 300% |
| Fire rate | +15% | Level 2 | 8 | 220% |
| Maximum health | +20 | Level 2 | 10 | 300 HP |
| Regeneration | +1/s | Level 4 | 10 | 10/s |
| Armor | +5 | Level 5 | 8 | 40 |
| Triple shot | Unlock | Level 10 | 1 | Three projectiles |

Choices are generated without duplicates. Capped upgrades are removed from the pool. If every upgrade is capped, level progression continues without opening an unusable choice screen.

## Verification

- 33 automated tests pass.
- Three unique level-up choices pass.
- Required choice and Android Back handling pass.
- Choice application and tier tracking pass.
- Living-run menu continuation passes.
- Full page-reload continuation passes.
- Enemy, player-health, and position restoration pass.
- Pending choices survive reload with the same IDs.
- Defeat clears active progress and preserves best records.
- Corrupt and outdated save recovery passes.
- Extreme edited values are clamped to safe caps.
- Settings persistence passes.
- Phase 3 performance, Phase 4 timing/collision, and Phase 5 portrait tests continue to pass.
- Offline build and Android configuration checks pass.
- Dependency audit reports zero known vulnerabilities.
