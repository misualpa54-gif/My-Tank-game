# Phase 13 Tank Mastery and Achievements

## Scope

Phase 13 adds separate permanent mastery progression for every owned tank, visible mastery cosmetics, a garage mastery bar, ten offline achievements, and permanent coin rewards.

Mastery cosmetics do not change damage, health, speed, armor, hitboxes, or enemy behavior.

## Tank mastery

Every tank tracks its own:

- enemies destroyed;
- total score earned;
- guardians defeated;
- highest level;
- highest combo;
- completed runs.

Mastery points are calculated as:

`kills + floor(score ÷ 100) + guardians × 25 + highest level × 5 + highest combo × 3 + completed runs × 20`

## Mastery levels and cosmetics

| Level | Required points | Cosmetic reward |
|---:|---:|---|
| 1 | 0 | Base tank appearance |
| 2 | 100 | Accent hull stripes / alternate paint detail |
| 3 | 300 | Colored track underglow ring |
| 4 | 700 | Antenna beacon light |
| 5 | 1,200 | Bright mastery projectile trail |
| 6 | 2,000 | Gold mastery crown and MAX garage badge |

The mastery level active when a run begins is saved with that run. New mastery cosmetics appear on the next new adventure, preventing mid-run visual resource changes.

The Garage now displays a separate mastery level and progress bar for each tank.

## Offline achievements

| Achievement | Requirement | Reward |
|---|---|---:|
| Tank Hunter | Destroy 100 enemies | 200 coins |
| Realm Veteran | Reach level 10 | 150 coins |
| Realm Legend | Reach level 20 | 300 coins |
| Combo Master | Reach a ×3 combo | 150 coins |
| Untouchable Guardian | Defeat a guardian without taking damage | 300 coins |
| Full Garage | Own all three tanks | 500 coins |
| Fully Tuned | Max every permanent upgrade on one tank | 500 coins |
| Triple Tour | Complete a run with every tank | 250 coins |
| Realm Explorer | Visit all six biomes | 400 coins |
| Supply Breaker | Destroy 10 Medics | 200 coins |

Total one-time achievement rewards: 2,950 coins.

## Achievement screen

A new main-menu Achievements screen shows:

- locked and completed states;
- achievement name and description;
- coin reward;
- current permanent coin balance.

Rewards are granted only once. Rechecking completed achievements cannot duplicate coins.

## Flawless guardian tracking

Run statistics now store total damage taken. Guardian entry stores the current damage baseline. A guardian is considered flawless only when the damage total has not increased before defeat.

All damage sources—including bullets, mines and artillery—update the same statistic.

## Saving

The permanent profile now stores:

- mastery record for all three tanks;
- unlocked achievement IDs;
- lifetime kills and Medic kills;
- guardian and flawless-guardian totals;
- maximum combo and highest level;
- visited biome IDs;
- tanks with completed runs.

Missing or edited values receive safe defaults and numeric limits.

## Verification

- 53 automated tests pass.
- Independent tank mastery level calculation passes.
- Mastery cosmetic level is applied to a new tank instance.
- All ten achievements unlock from their requirements.
- One-time reward total of 2,950 coins passes.
- Rechecking achievements cannot duplicate rewards.
- Achievement screen renders all completed states.
- Guardian bonus tests remain isolated from achievement rewards.
- Existing evolution, strategic enemy, objective, guardian, quality, saving, performance, timing, collision, tutorial, audio, accessibility, garage, economy, offline and Android checks continue to pass.
- Dependency audit reports zero known vulnerabilities.
