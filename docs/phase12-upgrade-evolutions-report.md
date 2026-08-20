# Phase 12 Upgrade Evolutions and Trade-Off Builds

## Scope

Phase 12 expands temporary run builds with projectile, defense, repair, movement, dash, and trade-off upgrades. Related high-tier upgrades automatically evolve into one of five named build evolutions.

All upgrades remain temporary and reset after defeat. Permanent Garage stats remain separate.

## Projectile upgrades

| Upgrade | Tiers | Effect |
|---|---:|---|
| Piercing Plasma | 2 | Each projectile passes through one additional enemy per tier |
| Explosive Impact | 3 | Enemy hits deal 15% area damage per tier within radius 5 |
| Ricochet | 2 | Projectiles bounce from arena walls once per tier |
| Homing Guidance | 3 | Projectiles steer toward an unhit target, +0.08 guidance per tier |
| Critical Core | 5 | +5% critical chance per tier; standard criticals deal ×2 damage |

Projectile-pool objects reset hit history, visual scale, and special counters before reuse.

## Defense and repair upgrades

| Upgrade | Tiers | Effect |
|---|---:|---|
| Emergency Shield | 1 | Halves a dangerous low-health hit; 20-second recharge |
| Reactive Armor | 1 | Reduces one incoming hit to 55%; 8-second recharge |
| Last Stand | 1 | +30% fire rate below 25% health |
| Repair Burst | 3 | Every fifth kill restores 3% maximum health per tier |

Recharge timers use elapsed time and are saved with a living run.

## Movement and trade-offs

| Upgrade | Tiers | Effect |
|---|---:|---|
| Turbo Tracks | 1 | +15% movement speed after five seconds without damage |
| Phase Dash | 1 | Double-tap the movement zone to dash six units; four-second recharge |
| Lightweight Frame | 1 | +25% speed but −20 maximum health |

Phase Dash works with both Standard and Left-handed control zones and clamps the destination inside the arena.

## Evolutions

Evolutions unlock automatically when both requirements are met.

| Evolution | Requirements | Result |
|---|---|---|
| Plasma Barrage | Damage tier 3 + Triple Shot | Player fires five projectiles |
| Fortress Protocol | Armor tier 4 + Max Health tier 4 | +30 max HP, +5 armor, then 20% less post-armor damage |
| Mobile Repair Unit | Speed tier 3 + Regeneration tier 3 | +2 health regeneration per second |
| Inferno Cannon | Fire Rate tier 3 + Explosive tier 2 | Explosion radius grows to 7 and gains +20% area damage |
| Railgun Core | Piercing tier 2 + Critical tier 3 | +2 additional piercing and critical damage becomes ×2.5 |

An evolution announcement appears in the level-up notification and uses the tank-unlock sound.

## Damage and reward handling

Area-damage kills now use the same centralized enemy-defeat path as direct projectile kills. They correctly grant:

- score and combo multiplier;
- permanent coins;
- XP;
- objective credit;
- guardian rewards and realm transitions.

Each bullet tracks enemies already hit so piercing or homing cannot damage the same enemy repeatedly.

## Saving

The active run stores:

- expanded temporary tiers;
- derived evolution IDs;
- damage-avoidance timer;
- reactive and emergency shield recharge;
- dash recharge.

Evolution IDs are safely derived again from sanitized tiers when loading, preventing edited save data from unlocking impossible combinations.

## Verification

- 51 automated tests pass.
- All five evolution requirement combinations pass.
- Lightweight speed/health trade-off passes.
- Fortress and Mobile Repair stat bonuses pass.
- Phase Dash movement, arena clamp, and cooldown pass.
- Piercing, explosive, ricochet, homing, critical, Railgun, and Inferno projectile configuration pass.
- Expanded save-value caps and evolution-derived maximum stats pass.
- Existing strategic enemy, objective, guardian, performance, quality, timing, collision, save, tutorial, results, accessibility, garage, economy, offline, and Android checks continue to pass.
- Dependency audit reports zero known vulnerabilities.
