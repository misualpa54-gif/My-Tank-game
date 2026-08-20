# Phase 17 — Infinite World Architecture and Streaming Foundation

## Scope

Phase 17 is the first approved package in the definitive combined roadmap. It replaces the bounded box arena with a deterministic, streamed, unbounded world while preserving the existing six realms, Guardians, objectives, tanks, upgrades, modes, economy, portrait controls, accessibility, and offline Android behavior.

This package deliberately does **not** yet add the four new realms, eight-second realm morph, terrain hazards, destructible cover health, slim HUD/radar, new enemies, Invasion bosses, new cards, paints, contracts, PWA, or monetization. Those remain later approval checkpoints.

## Infinite world model

- No gameplay wall or visible box remains.
- Terrain height is analytic at every world coordinate.
- Every run receives a 32-bit world seed.
- Daily Challenge uses its existing date seed as the world seed.
- Other modes create a new run seed and save it for Continue.
- Terrain combines three sine/cosine octaves with realm amplitude/frequency plus existing dune/spike shaping.
- A gentle plateau remains around world origin so every new run starts in readable terrain.
- Coordinates are safety-clamped only at ±1,000,000 rather than the old ±44 arena edge.

## Ground streaming

- Chunk size: 48 world units.
- Low and Medium ground neighborhood: 5×5 tiles.
- High ground neighborhood: 7×7 tiles, adding a farther visual ring.
- Low tile resolution: 16 segments.
- Medium: 20 segments.
- High: 24 segments.
- Tiles are pooled and repositioned/rebaked as the player crosses chunk boundaries.
- Height and vertex colors use world coordinates so seams remain continuous.
- Moving beyond the old arena no longer drops the player below terrain or leaves empty black space.

## Scenery chunks

Each active chunk is generated deterministically from:

`worldSeed + chunkX + chunkZ + activeBiome`

Chunk content includes quality-scaled combinations of:

- clustered tree groves;
- Frozen spruce forms;
- Desert cactus forms;
- Volcanic dead trunks;
- rocks;
- grass instances;
- crystal pillars;
- spikes;
- local water pools;
- local lava pools.

Gameplay chunks exist in a radius of two (5×5). High quality adds a radius-three decorative ring. Decorative ring chunks do not add gameplay collision. Chunks outside the retained radius are explicitly disposed.

When movement requests new chunks:

- old retained chunks remain visible;
- missing chunks are sorted nearest-first;
- at most one new chunk commits per update budget;
- terrain tiles are always available beneath the player;
- no loading pause is introduced.

## Open fields and cover

- Deterministic tree groves create natural clusters rather than a uniform grid.
- The origin has a guaranteed cover-free start radius.
- Rocks and groves leave open movement/combat lanes.
- Major trees, rocks, cactus, and crystal pillars receive world-space collider records.
- Collision queries inspect only nearby chunk grids instead of scanning the complete streamed world.

Destructible-cover IDs and a capped save list are scaffolded now. Actual cover HP/destruction effects are intentionally deferred to the approved combat/cover package.

## Player and enemy movement

### Player

- The old ±44 movement clamp is removed.
- Major cover blocks player movement.
- Collision resolution attempts full movement, then X/Z sliding, then holds the previous position.
- Phase Dash also respects streamed cover and world safety bounds.
- Terrain following/tilt uses the analytic height and normal at any coordinate.

### Enemies

- Enemy movement receives simple forward cover avoidance.
- Normal enemies spawn in a 42–64 unit ring around the current player position.
- Guardians spawn approximately 46 units from the current player position.
- Normal non-objective/non-boss enemies beyond 100 units are repositioned into the player spawn ring.
- Repositioning keeps type and HP, grants no reward, and shows a rate-limited regrouping warning until the approved radar-edge pulse is added.
- Bosses and marked objective targets never reposition.

## Local objectives in an infinite world

The seven existing objectives remain unchanged in rewards and completion rules, but their world placement is no longer tied to `(0,0)`:

- every objective snapshots a local `anchorX`/`anchorZ` near the player;
- marked Heavy spawns around that anchor;
- defense beacon appears at that anchor and follows local terrain height;
- beacon proximity checks use distance from the saved anchor;
- objective anchors survive Continue.

## Guardians and modes

All current modes now use the streamed environment and world-coordinate saves:

- Adventure
- deterministic Daily Challenge
- Boss Hunt
- Last Stand
- Realm Rush
- One-Tank Challenge
- Custom Practice

Current mode timing and rewards are unchanged in this foundation package. Later approved packages will adapt Last Stand realm timing, five-minute ten-realm Realm Rush, ten-Guardian Boss Hunt, manual Practice morph controls, and Invasion Hunt.

## Ricochet migration

The old Ricochet card depended on arena walls. Phase 17 preserves the card by changing collision behavior:

- the infinite world has no wall collision;
- hard rocks and crystal pillars can reflect player plasma;
- trees/cactus absorb plasma rather than reflecting it;
- existing ricochet tier counts remain;
- reflection still uses swept collision and projectile pooling.

## Save additions and compatibility

Living-run save now includes:

- `worldSeed`
- unrestricted world `x/z` within the safety bound
- `destroyedCoverIds` capped to 600 recent/session IDs
- objective world anchors

Existing version-1 bounded saves remain loadable. Missing world seeds derive a deterministic legacy seed. Old ±44 coordinates remain valid coordinates inside the new world.

Practice remains reward-free and does not overwrite a living reward-mode run.

## Removed bounded architecture

The old fixed systems were removed from the production path:

- one 100×100 terrain grid;
- four arena wall meshes;
- origin-bound tree/rock/grass creation;
- background decoration ring;
- origin-bound water/lava/crystal/dune/spike placement;
- global wall collision in the projectile loop.

The pure arena-boundary math helper remains only for historical regression tests and is not called by live gameplay.

## Performance result

Synthetic Medium menu scene after Phase 17:

- scene objects: 129
- meshes: 99
- instanced meshes: 74
- lights: 3
- 25 gameplay world chunks
- 25 ground tiles

Although the streamed view covers substantially more world area than the old arena, it remains below the automated 250-mesh menu budget and avoids per-object grass/tree meshes.

Performance policy remains:

- target 60 FPS on representative 4 GB Android hardware at Medium where possible;
- Low must remain at least 30 FPS under capped heavy combat;
- no automatic quality switching;
- physical-device profiling is still required.

## Verification

The suite now contains **72 passing tests** with 0 failures.

New coverage verifies:

- deterministic chunk cover regeneration from the same seed;
- streaming around coordinates far outside the old ±44 arena;
- 5×5 Medium and 7×7 High ground neighborhoods;
- High decorative chunks do not replace the gameplay core;
- player-following objectives;
- distant enemy repositioning preserves HP and uses the approved ring;
- world seed and coordinates survive a page reload/Continue;
- 30 biome rebuilds remain under scene/collider budgets;
- all previous mode, save, collision, mastery, economy, Android, portrait, and offline tests still pass.

## Next approved package

Package 2 is the slim HUD, north-up radar, damage arc, two-line kill feed, compact expandable build strip, Follow/Wide/Adaptive camera, loading-safe render gating, and home stats/version/storage-warning presentation.
