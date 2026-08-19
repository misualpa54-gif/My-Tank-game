# Phase 4 Frame-Rate and Collision Report

## Scope

Phase 4 makes combat and animation timing consistent across 30, 60, 90, and 120 FPS while preserving the original 60 FPS balance. It also prevents fast projectiles from skipping through hitboxes during a short frame stall.

No enemy count, damage, speed, fire-rate setting, hitbox radius, armor value, XP reward, score reward, biome density, or control rule was changed.

## Frame-rate calibration

The original game used several values once per rendered frame. A faster phone therefore applied those values more often. Phase 4 converts them to elapsed-time formulas whose reference point is exactly 60 FPS.

The following systems are now time-based:

- enemy firing probability;
- player and enemy movement smoothing;
- movement deceleration state;
- turret aiming assistance;
- suspension tilt smoothing;
- camera follow smoothing;
- normal particle shrinking;
- smoke expansion and velocity damping;
- gravity particle trajectories;
- barrel recoil return;
- muzzle-flash fading;
- shockwave growth and fading;
- temporary impact-light fading.

At a 1/60-second update, the new formulas return the exact original values.

## Enemy firing example

A soldier previously had a 0.0048 firing chance every rendered frame. The equivalent expected decisions over 100 seconds are now nearly identical:

| Simulated rate | Time-adjusted chance per update | Expected shots per 100 seconds |
|---:|---:|---:|
| 30 FPS | 0.00957696 | 28.73088 |
| 60 FPS | 0.0048 | 28.8 |
| 120 FPS | 0.00240289 | 28.83464 |

Small differences come from the fact that one update can create at most one shot. The important result is that a 120 Hz phone is no longer approximately four times as aggressive as a 30 Hz phone.

## Movement equivalence

Tank velocity is now stored in world units per second. The original 60 FPS smoothing curve is integrated over each complete time step rather than approximated from frame count.

The automated one-second movement test produced the same approximately 16.300099 world-unit distance at:

- 30 FPS;
- 60 FPS;
- 120 FPS.

The test tolerance is 0.00000001 world units.

## Swept projectile collision

The old code checked only the projectile's position after movement. At the maximum 0.1-second frame step, a projectile travels six world units and could jump from one side of a target to the other.

Phase 4 tests the complete line segment between the old and new projectile positions against the existing cylindrical hitboxes for:

- enemies;
- the player;
- foreground trees;
- foreground rocks;
- arena walls.

Existing radii and height limits are unchanged. Impact effects are moved to the detected contact position.

### Confirmed stall case

The regression test places a soldier where neither endpoint of a six-unit projectile step is inside the 2.6-unit enemy radius. Two 0.1-second updates now correctly detect the path crossing:

- Enemy HP before: 50
- Enemy HP after: 28
- Damage: unchanged at 22
- Projectile removed after impact: yes

The original point-only test missed this target entirely.

## Verification

- 20 automated checks pass.
- 30 biome transitions pass.
- 50 game restarts pass.
- 200-projectile pool stress passes.
- Offline web build passes.
- Android configuration checks pass.
- JavaScript and HTML validation pass.
- Dependency audit reports zero known vulnerabilities.

A physical Android device is still required to judge subjective aiming feel, heat, battery usage, and visual smoothness under real GPU load.
