# Phase 15 — Additional Game Modes

## Scope

Phase 15 completes the approved gameplay roadmap package with five offline modes while preserving the established Adventure and Daily Challenge systems.

This phase does **not** include final-release signing, a release APK/AAB, icon or splash replacement, Play Store setup, store artwork, or store listing work.

## Player-facing menu

The main menu now includes **Game Modes**. It opens a portrait-safe glass panel with:

1. Boss Hunt
2. Last Stand
3. Realm Rush
4. One-Tank Challenge
5. Custom Practice

Adventure and Daily Challenge remain available from their existing main-menu buttons.

A compact mode HUD displays only during a non-Adventure run. Depending on the mode, it shows the current guardian, survival threat tier, remaining time, disabled permanent-stat rule, Practice level/reward rule, or Daily modifier.

## Mode rules

### Boss Hunt

- Battles the six existing Realm Guardians in biome order.
- Uses each Guardian's established health, attacks, score, XP, and coin reward; Adventure balance is not changed.
- Normal level-gated enemy waves and Realm Objectives are disabled.
- Guardian-specific summoned Scouts and Medics remain part of the established boss attacks.
- Remaining summoned minions are cleared after their Guardian is defeated.
- The player repairs 20% of maximum health between Guardians.
- Temporary level-up upgrades remain available.
- Defeating the Crystal Core completes the hunt and opens a victory result screen.
- Guardian index, active Guardian health, position, temporary upgrades, and other active-run state survive Continue.

### Last Stand

- Endless survival run with no Realm Objectives or Guardian gate.
- Normal spawn interval begins at 2.5 seconds.
- The interval shortens by 0.014 seconds per survived second, with a protected minimum of 0.55 seconds.
- The enemy cap begins at four and rises by one every 20 seconds, capped at the existing safe maximum of 12.
- Enemy availability also advances with survival time, even if XP level progression is slower.
- Threat tier rises every 30 seconds and is displayed in the mode HUD.
- Existing temporary upgrades, permanent garage upgrades, rewards, mastery, achievements, pooling, and performance caps remain active.

### Realm Rush

- Fixed duration: 180 seconds (three minutes).
- Goal: maximize score and level before time expires.
- Each of the six biomes receives a 30-second segment.
- Normal waves spawn 25% faster than the established level curve, with a 0.8-second safety floor and the existing 12-enemy cap.
- Realm Objectives and Guardians are disabled so upgrade choices and combat remain the focus.
- Timer and current biome segment survive Continue.
- Expiration opens a completed-run result screen rather than a defeat message.

### One-Tank Challenge

- Uses the selected owned tank's procedural appearance and mastery cosmetics.
- All permanent stat tiers are set to zero for the run and are re-sanitized to zero on Continue.
- Temporary upgrades, evolutions, Guardians, objectives, progression, rewards, mastery, and achievements remain active.
- Adventure rules and difficulty are otherwise unchanged.

### Custom Practice

The setup screen allows:

- any of the six biomes;
- starting level 1–30;
- any combination of the 12 normal spawnable enemy types.

Practice protections:

- no permanent coins;
- no best-score or best-level updates;
- no tank mastery changes;
- no achievement or lifetime-stat changes;
- no active Practice save;
- if a living reward-mode run already exists, Practice preserves it unchanged for Continue;
- score, combo, XP, and temporary upgrades still work inside the training session;
- selected tank appearance, mastery cosmetics, and current garage build can be tested.

## Save and compatibility work

The existing active-run format remains version 1 and now additionally stores:

- `gameMode`;
- `modeState.guardianIndex` for Boss Hunt;
- `modeState.timeRemaining` and `modeState.realmIndex` for Realm Rush.

Compatibility behavior:

- older normal saves without `gameMode` load as Adventure;
- older Daily saves load as Daily when their valid date seed is present;
- invalid mode IDs fall back safely;
- a forged Practice active save is rejected;
- One-Tank and Daily permanent tiers are rebuilt as zero during save sanitization;
- impossible mode timers and indexes are clamped;
- the Continue button names the saved mode.

## Preserved systems

The package keeps:

- portrait-only invisible movement/fire regions;
- auto-aim and Left-handed swapping;
- all three procedural tank designs and mastery cosmetics;
- all existing temporary upgrades and evolutions;
- Realm Guardian attacks and strategic enemies;
- diminishing armor, combo, XP, and coin formulas;
- Low/Medium/High manual quality presets;
- projectile pooling, enemy cap, disposal, swept collision, and frame-rate normalization;
- procedural offline sound effects and optional haptics;
- Android 9+ portrait/fullscreen behavior;
- fully bundled offline operation with no Internet permission.

## Automated coverage

The test suite now contains **63 passing tests**. New coverage verifies:

- all four reward modes start and write their mode ID;
- the Game Modes menu renders;
- Boss Hunt starts exactly one Guardian and disables normal spawns/objectives;
- Last Stand pressure and threat increase predictably;
- Realm Rush timer/biome state survive Continue and expire correctly;
- One-Tank ignores permanent tiers while retaining temporary upgrade choices;
- Custom Practice honors biome, level, and enemy selection;
- Practice returns zero coins and cannot alter mastery, records, or a preserved active save;
- additional UI remains in the portrait-safe/offline build.

The complete verification command is:

```bash
npm run check
npm audit
git diff --check
```

## Offline Android artifact

The debug APK is generated by the existing GitHub Actions workflow using Java 21 after this phase is committed and pushed. The resulting workflow run, artifact link, APK size, and SHA-256 are recorded in the completion report delivered with the phase.
