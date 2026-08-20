# Phase 14 Offline Daily Challenge

## Scope

Phase 14 adds a deterministic date-based Daily Challenge with no server, internet permission, online account, leaderboard, or real-time clock service.

## Deterministic setup

The phone's local calendar date is converted to `YYYY-MM-DD` and hashed with a Tank Realms namespace. That seed controls:

- daily modifier;
- starting biome and rotated biome order;
- strategic enemy sequence;
- random upgrade-choice order;
- realm-objective rotation.

Enemy and upgrade sequences use separate deterministic indexes so audio, visual particles, quality mode, and device FPS cannot change challenge gameplay.

## Daily modifiers

| Modifier | Effect |
|---|---|
| Scout Swarm | Fixed enemy sequence strongly favors fast Scouts |
| Heavy Armor Day | Non-boss enemies begin with 35% more health |
| No Regeneration | Repair Nanites are removed from daily upgrade choices |
| Double Combo Coins | All combo-adjusted kill coin rewards are doubled |
| Sniper Realm | Snipers appear frequently after the opening levels |
| Fast Enemy Day | Non-boss enemies move 20% faster |

One modifier is selected for the entire date.

## Fair setup

A Daily Challenge keeps the player's selected tank design and mastery cosmetics but disables all permanent per-tank stat upgrades for that run. Every player/device therefore receives the same base combat stats, enemy sequence, choices, modifier, biome rotation, objectives and guardians for that date.

Temporary run upgrades remain active and follow the fixed daily choice sequence.

## Daily menu

The main menu now includes Daily Challenge. Its preview displays:

- local date;
- modifier name and description;
- starting biome;
- local best score;
- local best level;
- number of attempts;
- offline/fixed-sequence explanation.

Starting a Daily Challenge uses the same living-run overwrite protection as Adventure mode.

## Saving and retry

The living-run save includes:

- daily mode flag;
- challenge date;
- deterministic seed and modifier;
- biome rotation offset;
- enemy-sequence index;
- upgrade-sequence index.

Continue resumes the exact sequence position. Try Again after defeat restarts the same date's challenge rather than switching to Adventure.

## Local records

The permanent profile stores best score, best level and attempts per date. Records are local only. On profile load, valid records are sanitized and limited to the latest 30 date keys.

The results screen announces a new daily best before updating the stored record.

## Verification

- 56 automated tests pass.
- Independent sessions generate the same date, modifier, biome and enemy sequence.
- Independent sessions generate the same upgrade choices.
- Daily permanent-stat removal passes.
- Enemy and upgrade deterministic indexes survive Continue/reload.
- Daily best score, best level and attempts save locally.
- Existing mastery, achievements, evolutions, objectives, strategic enemies, guardians, quality, performance, saving, tutorial, audio, accessibility, garage, economy, offline and Android checks continue to pass.
- Dependency audit reports zero known vulnerabilities.
