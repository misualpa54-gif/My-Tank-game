# Phase 11 Strategic Enemies and Realm Objectives

## Scope

Phase 11 adds six strategic enemy roles, one support Drone type, telegraphed artillery and mine hazards, commander buffs, reflector shields, and one saved realm objective at a time.

## Strategic enemies

| Enemy | Unlock level | Role |
|---|---:|---|
| Shield Tank | 8 | Front shield receives only 25% projectile damage; rear and side damage remain normal |
| Artillery | 10 | Maintains distance and creates a 1.5-second ground warning before a radius strike |
| Mine Layer | 11 | Places visible proximity mines capped at eight with a 15-second lifetime |
| Commander | 13 | Gives nearby non-boss allies +18% speed and +20% damage |
| Drone Carrier | 14 | Deploys two small attack Drones while respecting the global enemy cap |
| Reflector | 16 | Shows a visible energy sphere and periodically absorbs incoming plasma |

Attack Drone is a carrier-only support type with low health, high movement speed, low damage, and a small coin/score reward.

### Visual clarity

- Shield Tanks have a large blue front plate.
- Artillery, Mine Layers, and Drone Carriers have rear equipment pods.
- Commanders display a rotating red aura showing the buff range.
- Reflectors display their active wireframe energy sphere.
- Artillery strikes show a rotating red ground ring.
- Mines have a dark body and red arming light.

## Hazard safety and performance

- Artillery attacks are warned for 1.5 seconds.
- Mines arm after 0.8 seconds, expire after 15 seconds, and are capped at eight.
- Drone and boss minions obey the existing 12-enemy cap.
- Hazards use the existing diminishing armor, damage feedback, reduced-flash, sound, haptic, and disposal systems.
- Artillery and mine objects are transient and intentionally not included in Continue saves.

## Realm objectives

One objective begins near the middle of each realm. If the guardian becomes pending while the objective remains active, normal spawning continues and the guardian waits until the objective succeeds or fails.

| Realm cycle | Objective | Requirement | Coin reward |
|---:|---|---|---:|
| 1 | Priority Target | Destroy a gold-marked Heavy | 75 |
| 2 | Hold the Line | Survive 30 seconds | 100 |
| 3 | Cut the Supply | Destroy 3 Medics | 125 |
| 4 | Combo Trial | Reach a 5-kill combo | 150 |
| 5 | Defend the Beacon | Keep the central beacon alive for 30 seconds | 175 |
| 6 | Untouchable | Avoid all damage for 25 seconds | 200 |
| 7 | Score Assault | Earn 1,000 score during the objective | 225 |

The sequence repeats in later realm cycles.

### Objective rewards

Completion provides:

- permanent coins;
- a 15% health repair;
- sound and haptic feedback;
- guardian entry if one is pending.

Taking damage fails Untouchable. Enemies close to the central beacon drain its health during Defend the Beacon. Objective coin rewards are included in run-result coin totals.

## Saving

The active run now stores:

- active objective type;
- progress and elapsed time;
- score baseline;
- beacon health;
- last realm that received an objective;
- marked objective-target status for enemies.

Continue restores the same objective HUD and recreates a missing marked Heavy or defense beacon when necessary.

## Verification

- 48 automated tests pass.
- All six strategic roles and support Drone are configured.
- Shield front/rear detection passes.
- Artillery warning and impact damage pass.
- Mine arming and proximity damage pass.
- All seven realm objectives activate one at a time.
- Objective completion and reward flow pass.
- Objective save/reload restoration passes.
- Guardian progression waits for active objectives.
- Existing guardian, performance, quality, timing, collision, saving, tutorial, results, accessibility, garage, economy, offline, and Android checks continue to pass.
- Dependency audit reports zero known vulnerabilities.
