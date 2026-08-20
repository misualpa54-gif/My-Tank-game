# Tank Realms — Living Godot 4 Native Port Specification

This document is updated after every prototype package. It maps finalized web behavior to future Godot 4 typed-GDScript architecture. It is not yet a Godot implementation.

## Native target

- Godot 4
- typed GDScript
- portrait Android
- Mobile renderer after profiling; Compatibility fallback for weak/older drivers
- Android 9+ target baseline
- approximately 4 GB RAM target
- MultiMesh for repeated scenery
- pooled projectiles/enemies/effects
- deterministic local saves/resources
- native audio buses, touch input, haptics/plugins

## Proposed native scene architecture

```text
Main.tscn
├── AppState
├── SaveService
├── AudioService
├── WorldManager
│   ├── GroundTilePool
│   ├── ChunkStreamer
│   ├── RealmEnvironment
│   └── ColliderRegistry
├── RunManager
│   ├── ModeController
│   ├── ObjectiveController
│   ├── BossController
│   ├── SpawnController
│   └── RewardController
├── CombatRoot
│   ├── PlayerTank
│   ├── EnemyPool
│   ├── ProjectilePool
│   ├── HazardPool
│   └── EffectPool
└── UI
    ├── ScreenRouter
    ├── CombatHUD
    ├── Pause
    ├── Garage
    ├── Awards
    └── Results
```

## Data resources

Future Godot resources should mirror prototype tables rather than hard-code behavior:

- `RealmDefinition.tres`
- `EnemyDefinition.tres`
- `GuardianDefinition.tres`
- `InvasionBossDefinition.tres`
- `TemporaryUpgradeDefinition.tres`
- `EvolutionDefinition.tres`
- `TankDefinition.tres`
- `PermanentUpgradeDefinition.tres`
- `ObjectiveDefinition.tres`
- `ModeDefinition.tres`
- `AchievementDefinition.tres`
- `ContractDefinition.tres`
- `PaintDefinition.tres`
- `QualityPreset.tres`

## Phase 17 world mapping

Prototype constants to preserve initially:

```text
chunk_size = 48
active_radius = 2
retained_radius = 3
ground_segments_low = 16
ground_segments_medium = 20
ground_segments_high = 24
max_coordinate = 1,000,000
enemy_reposition_distance = 100
enemy_spawn_ring = 42..64
player_cover_radius = 1.7
chunk_build_budget_web = 2.5 ms
recent_destroyed_cover_cap = 600
```

Godot implementation mapping:

- `WorldManager` owns `world_seed`, active realm, player anchor, and deterministic hash.
- `GroundTilePool` reuses 25 Medium/Low or 49 High mesh tiles.
- Native terrain can use ArrayMesh/SurfaceTool or a pooled grid Mesh with updated vertices/normals/colors.
- `ChunkStreamer` maintains deterministic chunk records keyed by `Vector2i`.
- Gameplay chunks use radius 2.
- High decorative ring has no physics bodies.
- `MultiMeshInstance3D` batches trunks, foliage, cactus, rocks, grass, crystals, spikes.
- Major cover gets lightweight collision/avoidance records; do not create a heavy CharacterBody for every grass/prop.
- Old retained chunks remain until new chunks commit.
- Chunk generation should be split across frames/WorkerThreadPool tasks where safe; scene-tree commits remain main-thread.
- Player uses CharacterBody3D collision/sliding against major cover in native version.
- Enemies use simple avoidance/steering; no navigation mesh is required for the first native port.

## Deterministic terrain formula

The web formula combines three sin/cos octaves using realm amplitude/frequency, seed-derived X/Z phases, optional dunes/spikes, and origin flattening. Godot must reproduce numerically close visual terrain, but exact floating-point vertex equality with JavaScript is not required after the final visual freeze.

The native save stores the seed and world coordinates, never the complete terrain mesh.

## Living run save fields introduced by Phase 17

- `world_seed: uint32`
- player X/Z world coordinates
- active realm and realm progress
- objective local anchor X/Z
- capped recent destroyed cover IDs
- existing player/enemy/objective/boss/mode/upgrade/cooldown state

Native migration imports only validated permanent prototype progress. Active web runs are not imported into Godot.

## Mode/world rules currently frozen

- No hard world walls.
- All modes use streamed terrain.
- Normal enemies spawn around current player.
- Non-boss/non-objective enemies beyond 100 units reposition with HP/type preserved.
- Bosses/objective targets never reposition.
- Guardian/objective anchors are local to player position.
- Ricochet uses hard cover, not world boundaries.
- Daily world seed derives from date seed.

## Test cases to reproduce natively

1. Same seed/chunk/realm creates the same cover IDs and positions.
2. Moving across chunk boundaries never exposes a hole beneath the player.
3. Medium retains 5×5 ground/gameplay neighborhood.
4. High adds a decorative radius-three ring without gameplay collision.
5. Low reduces detail but does not change gameplay cover IDs.
6. Continue restores seed, player position, local objective anchor, and nearby event state.
7. Major cover blocks/slides player and steers enemies.
8. Distant enemy reposition grants no reward and preserves type/HP percentage.
9. Swept plasma collision works across streamed chunk boundaries.
10. No mode depends on a box wall.
11. Chunk disposal releases mesh/material/collision resources.
12. 60 FPS Medium target and 30 FPS Low floor are measured on representative hardware.

## Update requirement

Every later package must append:

- finalized data fields;
- state transitions;
- formulas/caps;
- scene/resource mapping;
- save migration fields;
- native test cases;
- plugin/platform assumptions.
