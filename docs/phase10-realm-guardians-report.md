# Phase 10 Realm Guardians Report

## Scope

Phase 10 adds one Realm Guardian for each biome, boss warnings and health UI, guardian-specific behavior, bonus rewards, save/continue support, and guardian-gated biome progression.

## Progression gate

Every three levels now prepares the guardian of the current realm instead of changing biome immediately.

1. The player completes any pending level-up choice.
2. A Realm Guardian warning appears.
3. Normal automatic spawning pauses while the guardian is alive.
4. The guardian and any guardian-created minions fight the player.
5. Defeating the guardian awards score, XP, normal combo coins, and bonus realm coins.
6. The next biome loads.

Realm progress is tracked separately from level so a large XP reward cannot skip an undefeated guardian.

## Guardians

| Realm | Guardian | HP | Base damage | Score | Bonus coins | Main behavior |
|---|---|---:|---:|---:|---:|---|
| Enchanted Forest | Rootbound Guardian | 500 | 14 | 800 | 100 | Three-shot spread and Scout summons |
| Frozen Tundra | Frozen Fortress | 650 | 22 | 1,000 | 140 | Slow high-damage cannon |
| Volcanic Wasteland | Volcanic Behemoth | 700 | 18 | 1,200 | 180 | Aggressive movement and five-shot fire spread |
| Golden Desert | Desert Mirage | 560 | 16 | 1,400 | 220 | Fast strafing, narrow triple shots, Scout decoy |
| Mystic Swamp | Swamp Colossus | 780 | 17 | 1,600 | 260 | Triple shots, self-repair, Medic summon |
| Crystal Caverns | Crystal Core | 950 | 20 | 2,000 | 350 | Stationary seven-shot crystal pattern |

Guardian XP uses a separate controlled value so score rewards do not automatically create excessive level jumps.

## Boss presentation

Guardians receive:

- larger procedural tank bodies;
- a rotating red guardian ring;
- an emissive warning beacon;
- a realm-warning overlay and warning sound/haptic;
- a persistent name and health bar;
- a larger hit radius matching the larger visual body.

Player auto-aim gives a guardian priority over nearby minions without making regular enemies untargetable.

## Attack timing

Guardian attacks use elapsed-time cooldowns rather than per-frame random chances, keeping boss pressure consistent across 30–120 FPS.

Existing swept projectile collision applies to boss hitboxes and boss projectiles.

## Saving

The active run now stores:

- realm progression count;
- whether a guardian is pending;
- active guardian type, health, position, and rotation as part of living enemies.

A continued guardian battle restores its health bar and attack timers. Defeating a guardian saves the newly unlocked biome immediately.

## Performance protections

- Only one active guardian exists at a time.
- Guardian minions respect the existing 12-enemy cap.
- Normal spawning pauses during guardian fights.
- Boss effects continue to obey Low, Medium, and High quality budgets.
- Boss resources use the existing disposal and projectile-pooling systems.

## Verification

- 45 automated tests pass.
- Level-three guardian gating passes.
- Biome remains locked until guardian defeat.
- Guardian health UI visibility passes.
- Guardian bonus coins and next-biome transition pass.
- All six guardian definitions are present.
- Active guardian save/reload restoration passes.
- Existing quality, performance, swept collision, frame timing, saving, tutorial, results, accessibility, garage, economy, and offline checks continue to pass.
- Dependency audit reports zero known vulnerabilities.
