# Phase 7 Garage and Economy Report

## Scope

Phase 7 adds the approved combo rewards, permanent coins, menu-only garage, three equal-base-stat tank designs, tank unlocking and selection, distinct projectile appearances, and separate capped permanent upgrades for every tank.

No advertisements, real-money purchases, online store, or gameplay internet connection were added.

## Combo rewards

A kill starts a three-second combo window. Every further kill inside that window increases the multiplier by 0.2, capped at ×3.0.

- First kill: ×1.0
- Second kill: ×1.2
- Third kill: ×1.4
- Eleventh and later connected kills: ×3.0

The multiplier affects:

- displayed score reward;
- permanent coin reward.

XP deliberately continues to use the enemy's unmultiplied base value, so a combo cannot make level progression or temporary upgrades accelerate unpredictably.

### Base coin rewards

Before the combo multiplier:

| Enemy | Score points | Base coins |
|---|---:|---:|
| Scout | 50 | 5 |
| Soldier | 100 | 10 |
| Heavy | 200 | 20 |
| Sniper | 175 | 17 |
| Medic | 150 | 15 |
| Berserker | 250 | 25 |

Coins are written to the permanent profile after every kill.

## Tank collection

All tanks begin with identical gameplay stats. Their differences are visual until the player buys permanent upgrades for an individual tank.

| Tank | Unlock cost | Visual identity | Projectile |
|---|---:|---|---|
| Verdant Vanguard | Free | Original green classic armor | Cyan plasma orb |
| Ember Warden | 750 coins | Orange angular side armor and turret fins | Orange octahedral bolt |
| Azure Bastion | 1,800 coins | Blue shield plate and turret pods | Violet crystal plasma |

Cosmetic armor pieces do not change collision hitboxes. Projectile shape and color do not change projectile speed, damage, radius, or lifetime.

## Garage behavior

The garage is available from the main menu only. It shows:

- current permanent coin balance;
- three visual tank previews;
- lock, select, and equipped states;
- unlock cost;
- five independent permanent upgrade tracks per tank.

Transactions are rejected by game logic while a battle is active, even if a function is called outside the normal UI.

A living Continue save keeps the tank and permanent tiers that were active when that run started. Purchases and selection changes apply to the next new adventure, preventing mid-run shop changes from altering combat balance.

## Per-tank permanent upgrades

Every tank has separate levels. All tracks have five tiers.

| Track | Increase per tier | Maximum permanent increase | Tier costs |
|---|---:|---:|---|
| Hull | +5 HP | +25 HP | 120, 240, 360, 480, 600 |
| Damage | +4% | +20% | 150, 300, 450, 600, 750 |
| Speed | +3% | +15% | 140, 280, 420, 560, 700 |
| Armor | +2 | +10 | 130, 260, 390, 520, 650 |
| Fire rate | +3% | +15% | 160, 320, 480, 640, 800 |

Permanent stats form the base of a new run. Temporary Phase 6 choices are then added on top and retain their existing safety caps.

## Save data

The versioned permanent profile now also stores:

- coins;
- owned tank IDs;
- selected tank ID;
- five upgrade tiers for each of the three tanks.

The active-run save stores a snapshot of:

- selected run tank;
- permanent tiers active when the run began;
- combo count and remaining combo time.

Old Phase 6 profiles remain compatible because missing garage fields receive safe defaults.

## Verification

- 36 automated tests pass.
- Three tank cards render in the garage.
- Unlock price and coin subtraction pass.
- Selection and equipped state pass.
- Per-tank upgrade separation passes.
- Permanent upgrade costs and stat application pass.
- Purchases during an active run are rejected.
- Tank selection, projectile style, and active-run snapshot pass.
- Garage profile survives a complete reload.
- Combo score and coin multipliers pass.
- Combo ×3 cap and three-second expiry pass.
- Combo does not alter XP.
- Phase 3 performance, Phase 4 timing/collision, Phase 5 portrait layout, and Phase 6 continuation/choice tests continue to pass.
- Offline web build and Android configuration checks pass.
- Dependency audit reports zero known vulnerabilities.
