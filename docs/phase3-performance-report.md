# Phase 3 Performance Report

## Scope

Phase 3 reduces memory growth, scene-management cost, and mobile draw-call pressure without changing enemy counts, damage, movement, biome density, hitboxes, colors, upgrade balance, or firing controls.

The measurements below use the automated Three.js scene harness with a renderer stub. They are reliable for object/resource counts and JavaScript workload, but a physical Android phone is still required for final GPU and FPS measurements.

## Implemented improvements

### Resource cleanup

The game now explicitly releases:

- biome geometry and materials;
- sky textures;
- water, lava, trees, rocks, grass, crystals, and decorations;
- shadow render targets;
- tank geometry and materials;
- expired combat particles;
- completed muzzle flashes and shockwaves;
- projectile resources that exceed the pool limit.

Removing an object from a Three.js scene does not release its GPU memory. The new cleanup system performs both operations and avoids disposing the same shared resource more than once in a cleanup pass.

### Instanced scenery

Repeated objects now use `THREE.InstancedMesh` while retaining the same transforms, colors, shapes, density, and shadow behavior:

- foreground trees;
- background trees;
- background rocks;
- all grass blades;
- ambient biome particles.

Instancing lets one mesh draw many copies instead of maintaining a separate draw call and scene object for each copy.

### Projectile pooling

Projectile groups are reused by color. The pool is capped at 128 projectiles. Objects above that limit are disposed rather than being retained forever.

### Collision list

Projectile scenery collision now checks only the foreground trees and rocks that can actually be hit. It no longer scans grass, lights, walls already handled by the arena boundary, or unreachable background decorations.

## Before and after: Enchanted Forest at menu

| Measurement | Before Phase 3 | After Phase 3 | Reduction |
|---|---:|---:|---:|
| Scene objects | 3,059 | 77 | 97.5% |
| Mesh objects / potential draw submissions | 2,395 | 43 | 98.2% |
| Unique geometries | 1,146 | 43 | 96.2% |
| Unique materials | 1,143 | 40 | 96.5% |
| Ambient-particle meshes | 120 | 2 instanced batches | 98.3% |
| Scenery entries scanned per projectile | 664 environment entries | 80 real colliders | 88.0% |

The after result contains eight instanced meshes. Each one still renders many visible copies, so the visual density is not represented by the mesh count alone.

## Stress results

- 30 consecutive biome transitions passed.
- Every biome stayed below the automated 350-mesh safety budget, including the player and existing transient test effects.
- The 30-transition synthetic CPU test completed in approximately 840 ms, compared with approximately 1,352 ms in the original audit environment.
- 50 consecutive game restarts passed in approximately 1.36 seconds in the synthetic harness.
- Old biome geometry, materials, and sky background emitted confirmed disposal events.
- A 200-projectile pool-release test retained only the configured 128 objects and disposed overflow resources.
- All game-state, touch-cancellation, native bridge, offline build, and Android configuration tests continue to pass.

## Remaining performance work

Phase 3 substantially lowers rendering and memory pressure, but these tasks remain for later phases:

- normalize frame-dependent enemy firing and animation in Phase 4;
- add swept projectile collision in Phase 4;
- add Low, Medium, and High quality settings;
- profile real GPU frame time and memory on the target Android 9 / 4 GB device;
- consider pooling high-volume explosion debris if real-device testing shows additional allocation spikes.
