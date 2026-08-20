# Provenance — Deep Comparison of the Two Ancestor Builds

> This document is the design record for **Thiltete Tank Game**. It analyses the two
> earlier builds this repo was merged from, and justifies every decision in the merge.
> Build B is the foundation of this repo; Build A contributed the horizon ring.

**Build A — "Prototype"** · `tank_realms_debugged_hud.html` · 124 KB · 3,154 lines · 59 functions
**Build B — "v25"** · `comparison/tank_realms_v25_standalone (1).html` · 885 KB · 5,413 lines · 119 functions

Method: extracted every `<script>` block from both files, parsed out all top-level functions with a brace-matcher, and diffed them by name and by body. Also diffed the CSS selector sets and the HTML structure.

---

## PART 1 — Shared DNA (they are the same game)

These two are **not independent projects**. Build B is a direct descendant of Build A. 47 of the prototype's 59 functions survive into v25 **by the same name**, and many are byte-identical.

### 1.1 Functions identical in both (zero lines changed)

```
closeSettings      ensureAudioContext   getSpawnMultiplier   openSettings
playPauseSound     playTone             playUISound          resetTransientUI
setPauseUIVisible  setScreenVisibility  showEnemyIntro       showScorePopup
showUpgradeNotification  toggleCameraMode  toggleControlAssist  togglePause
toggleSound        updateCombo          updateKeyboardInput
```

19 functions carried over untouched. The prototype's DNA is fully intact in v25.

### 1.2 Identical core tuning constants

```js
CONFIG = { playerSpeed: 18, bulletSpeed: 60, fireRate: 0.25, baseDamage: 22 }
```
**Byte-for-byte identical in both.** The fundamental game feel — how fast you drive, how fast shells fly, cadence of fire — was locked in at the prototype stage and never changed across 25 versions. That's a strong signal it was right.

### 1.3 Identical state shape

```js
playerStats: { speed:100, damage:100, fireRate:100, armor:0, regen:0, maxHp:100, multishot:0 }
gamePhase: 'menu' | 'playing' | 'paused' | 'gameover'
```
Same seven stats, same phase machine, same `state.input {x, y, isFiring}` model.

### 1.4 Shared design concepts

| Concept | Both builds |
|---|---|
| **Genre** | Mobile-first 3D arena survival auto-shooter |
| **Camera** | Third-person chase, Follow/Wide toggle, `lookAt` ahead of player, shake on impact |
| **Controls** | Left-half virtual joystick, right-half auto-fire, keyboard fallback |
| **Auto-aim** | Nearest-enemy targeting with **25% stickiness bias** (`dist *= 0.75` on current target) — identical algorithm |
| **Assist toggle** | Turret tracking 0.25 (on) vs 0.14 (off) — identical constants |
| **Biome rotation** | New realm every 3 levels |
| **XP curve** | `xpToNext *= 1.4` starting at 100 |
| **Kill XP** | `points / 2` |
| **Terrain** | 3 octaves of sin/cos, `hasDunes` / `hasSpikes` modifiers, origin flattened for safe spawn |
| **Combo** | +1 per kill, 3s decay, `points × (1 + 0.2 × combo)` |
| **Audio** | 100% synthesized WebAudio, no files |
| **Art** | Low-poly flat-shaded, primitive-built tanks, ACES tone mapping, per-biome fog |
| **UI** | Dark glassmorphism, `#667eea → #764ba2` indigo-violet gradient, Segoe UI |
| **Persistence** | `localStorage` key `tank_save` |
| **Delivery** | Single self-contained HTML file |

### 1.5 Shared enemy roster (the first 6)

Scout, Soldier, Heavy, Sniper, Medic, Berserker — **identical stats in both builds**:

| Type | Color | HP | Spd | Dmg | Pts |
|---|---|---|---|---|---|
| Scout | gold | 25 | 1.5 | 8 | 50 |
| Soldier | red | 50 | 1.0 | 12 | 100 |
| Heavy | brown | 120 | 0.5 | 25 | 200 |
| Sniper | purple | 35 | 0.6 | 30 | 175 |
| Medic | green | 60 | 0.8 | 5 | 150 |
| Berserker | pink | 80 | 1.3 | 18 | 250 |

Even the AI branches are the same code: healer seeks wounded allies and retreats under 20u, sniper holds 25–30u, berserker charges and only fires under 18u.

### 1.6 Shared first 6 biomes

Enchanted Forest, Frozen Tundra, Volcanic Wasteland, Golden Desert, Mystic Swamp, Crystal Caverns — same names, same palettes, same terrain amplitudes.

---

## PART 2 — Where they diverge

### 2.1 Scale summary

| Dimension | Prototype | v25 | Verdict |
|---|---|---|---|
| Biomes | 6 | 10 | v25 |
| Enemy types | 6 | 9 (+Bomber, Phantom, Gunner) | v25 |
| Bosses | **0** | 6 | v25 |
| Upgrades | 11 fixed, auto-applied | 17-card, drafted 3-at-a-time | v25 |
| Screens | 4 | 8 | v25 |
| Meta-progression | none | coins, Armory, skins, perma-upgrades | v25 |
| Achievements | none | 14 + 3 daily | v25 |
| Save data | 3 fields | v3 schema, named slots, autosave, migration | v25 |
| CSS selectors | 38 | 97 (**superset — 0 proto-only**) | v25 |
| Runtime | **crashes on load** | healthy | v25 |

### 2.2 The single biggest design divergence: **bounded arena vs infinite world**

This is the one genuinely interesting architectural fork.

**Prototype — bounded arena:**
```js
terrainData = { heights: [], size: 100, segments: 80 }   // one 100×100 heightmap
createWalls():  4 walls at ±48   // hard boundary
getTerrainHeight(x,z):  bilinear interpolation of a stored height array (38 lines)
```
One `PlaneGeometry(100,100,80,80)` baked once per biome, heights cached in an array, sampled by bilinear interpolation. Outside ±50 returns `-2`.

**v25 — infinite streamed world:**
```js
CHUNK = 48, CHUNK_TILES = 5      // 5×5 ground tiles that re-anchor around the player
CHUNK_ENV_RADIUS = 2             // env chunks within radius 2 exist
getTerrainHeight(x,z) → blendedHeight(x,z) → terrainHeightRaw()  // analytic, 3 lines
```
No stored heightmap at all — height is a **pure analytic function**, so the world is infinite and deterministic. Chunks are seeded (`cx*73856093 ^ cz*19349663 ^ biome*83492791`) so revisits regenerate identically.

**Trade-off:** the prototype's baked heightmap allows *arbitrary* terrain (you could hand-author or erode it). v25's analytic function is infinite but can only ever produce sin/cos interference patterns. v25 clearly won on scope, but it gave up authored-terrain capability.

### 2.3 Performance engineering — v25 is in a different league

| | Prototype | v25 |
|---|---|---|
| Bullet geometry | **new geometry + 4 materials + a PointLight per shot** | cached `SHARED_GEO`, `bulletMatCache`, **shared muzzle light** |
| Grass | `Group` of 5 `Mesh` per clump, 250 clumps = **1,250 draw calls** | `InstancedMesh` |
| Trees | individual meshes | geometry **merged per material bucket** per chunk |
| Chunk building | n/a (all at once on biome load) | **micro-op scheduler, 2–4 ms/frame budget** |
| Rendering | every frame unconditionally | **gated by `needsRender`** — idles in menus |
| Shadow map | 1024², cam ±80 | 2048², cam ±115, `bias -0.0005` |
| Disposal | `scene.remove()` only — **leaks GPU memory** | `disposeObject3D`, `markShared`, shadow-map dispose |
| Quality tiers | none | Auto/High/Low, samples 240 frames of real FPS |

The prototype's `shoot()` allocated **1 group + 4 meshes + 4 materials + 4 geometries + 1 PointLight, every single shot**, and never disposed them. At 4 shots/sec that's a severe leak, and the per-bullet PointLight is what the v25 notes describe as causing shader-recompile churn (6→169 programs).

v25's `shoot()` is 67 lines shorter because it delegates to `spawnBullet()` using cached resources.

### 2.4 Robustness

| Area | Prototype | v25 |
|---|---|---|
| Load | **`ReferenceError: update is not defined` — fatal** | boots clean |
| Three.js | CDN — needs internet | inlined r128 — offline |
| Duplicated code | core-loop block pasted twice, one copy inside a `<script src>` (silently dead) | single copy, correct |
| Kill rewards | `enemies.push` wrapper — **dead code**, `startGame()` reassigns the array | wired at real kill sites |
| Upgrade cards | `oldLevelUp` assigned, **never called** — UI unreachable | fully wired |
| Difficulty ramp | `setInterval` runs in menus and pause | gated on `isPlaying && gamePhase==='playing'` |
| Corrupt save | `JSON.parse` unguarded — crashes boot | try/catch |
| Blocked storage | crashes | `store` wrapper falls back to memory + warning banner |
| Enemy fire rate | `Math.random() < 0.012` — **frame-rate dependent** | `enemyFireRoll(chance, dt)` — per-second |
| Vector allocation | `new THREE.Vector3()` in hot loops | `_tv4`, `_sv1` scratch vectors |

The frame-rate dependency is subtle but important: in the prototype, enemies fire ~2× as often at 120fps as at 60fps.

### 2.5 HUD philosophy — a real design disagreement

**Prototype:** three panels across the top. Score + speed% + damage% on the left, Level + XP bar centre, Health + armor + regen on the right. **All stats visible during combat.**

**v25:** slim chips. `🏆 score · 💰 coins` + kill feed left, `LV n` + XP centre, **minimap** right, HP bar moved to the **bottom**. Stat numbers moved **out of combat** onto the pause screen ("YOUR BUILD" chips).

The v25 comments say this was deliberate (v7/v8, "reduce clutter"). It's the right call for a mobile action game — but the prototype's at-a-glance build readout has genuine value. **This is a legitimate "take the best of both" opportunity: v25's clean layout + an optional toggle to surface stats.**

---

## PART 3 — What the prototype does that v25 LOST

This is the important part. v25 is better in almost every way, but three things were genuinely dropped.

### 3.1 ⭐ Distant scenery ring — the real regression

The prototype had:
```js
function createBackgroundDecorations(biome) {
    const outerCount = biome.treeCount * 5 + 80;   // ~330 objects
    // spawn in a ring from radius 50 to 120, simplified geometry (5 segments not 8),
    // no shadow casting — pure visual horizon filler
}
```
A dense ring of cheap, shadowless, low-segment trees and rocks from **radius 50 to 120**, purely to fill the horizon. **v25 has no equivalent** — the only match for "backdrop/horizon/distant" in the entire v25 script is one unrelated word.

**This creates a measurable visual bug in v25.** Scenery only exists within `CHUNK_ENV_RADIUS(2) × CHUNK(48) = 96u`, but fog reaches much further:

| Biome | fogFar | Scenery ends | Bare ground visible |
|---|---|---|---|
| Golden Desert | 225 | 96 | **+129u** |
| Enchanted Forest | 185 | 96 | **+89u** |
| Autumn Grove | 165 | 96 | +69u |
| Frozen Tundra | 155 | 96 | +59u |
| Sakura Valley | 150 | 96 | +54u |
| Volcanic Wasteland | 140 | 96 | +44u |
| Blood Moon Canyon | 130 | 96 | +34u |
| Crystal Caverns | 125 | 96 | +29u |
| Mystic Swamp | 108 | 96 | ok |
| Neon Void | 110 | 96 | ok |

Ground tiles extend to ±120u, so in 8 of 10 realms you see a **bare, empty ground plane** between 96u and the fog line. In the Golden Desert that's a 129-unit dead zone. The prototype's cheap ring solved exactly this.

### 3.2 Baked heightmap terrain
The prototype's `terrainData.heights` array + bilinear sampling supports **authored or eroded terrain**. v25's analytic function cannot — it's locked to sin/cos interference. Not a bug, but a lost capability if you ever want hand-designed landmarks.

### 3.3 Combat stat readout
Covered in 2.5 — v25 moved stats off the combat HUD entirely.

### 3.4 What is NOT lost (I checked)

- **CSS:** zero prototype-only selectors. v25's stylesheet is a strict superset.
- **World-gen features:** `createWater`/`createLava`/`createCrystals`/`createSpikes` all have v25 chunk equivalents (`buildChunkWater`, `buildChunkLava`, `buildChunkCrystalCluster`, `buildChunkSpikes`).
- **Grass:** not lost, upgraded to `InstancedMesh`.
- **Trees:** not lost, upgraded — v25 trees are shorter (tanks stay visible), have per-tree height variance, biome-specific variants for Autumn/Sakura, dark spruce w/ snow caps in Tundra, **and are destructible cover with HP**.
- **`createWalls`:** intentionally dropped — an infinite world has no walls.

---

## PART 4 — Recommended merge strategy

**Foundation: v25, unambiguously.** It is a 25-iteration evolution of the prototype with every prototype bug fixed. The prototype has no working code worth porting — it doesn't even boot.

Then selectively restore/fix:

### Tier 1 — Restore from prototype (real losses)
1. **Distant scenery ring** — port `createBackgroundDecorations` as a chunk-aware horizon band filling 96u → fogFar. Cheap geometry, no shadows, instanced. Fixes a visible bug in 8/10 realms.
2. **Optional combat stat chips** — v25's clean HUD by default, prototype's at-a-glance stats behind a settings toggle.

### Tier 2 — Fix v25's own defects
3. **Strip the Cloudflare bot-challenge script** (line 5412) — foreign code, requests a 404 from your origin, breaks the offline guarantee.
4. **Rebuild the missing PWA pack** — `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` are all referenced but absent.

### Tier 3 — Repo hygiene
5. Ship as `index.html` at root, real README, `.gitignore`, GitHub Pages ready.
6. Optionally split the 885 KB monolith into `src/` modules with a build step that emits the single-file artifact.

### Tier 4 — New opportunities (neither build has these)
7. Reinstate the `analysis/` test harness the docs reference (it's missing).
8. Authored-terrain hook — blend a sparse hand-placed landmark layer over the analytic base, recovering the prototype's baked-heightmap capability without giving up infinity.


---

## PART 5 — What was actually shipped in this repo

Decisions taken, against the plan in Part 4:

| Item | Decision | Status |
|---|---|---|
| Foundation | Build B (v25) | shipped |
| Three.js | vendored in `vendor/`, inlined at build time | shipped |
| Horizon ring | faithful port of the prototype's idea, re-implemented as 2 InstancedMesh | shipped |
| Scope | parity + merge fixes only, no new gameplay | shipped |
| Source layout | split into `src/` + `tools/build.js` | shipped |
| Artifact | `dist/ThilteteTankGame.html` committed | shipped |
| In-game name | renamed to Thiltete; `tank_save` storage key kept so old progress survives | shipped |

### The horizon ring as built

The prototype spawned ~330 individual `Group`s in a ring from radius 50 to 120 — cheap
per-object, but ~330 draw calls. This repo keeps the *idea* and rebuilds the *mechanism*:

- two `InstancedMesh` objects (cones for trees, dodecahedrons for rocks) — **2 draw calls**
- inner radius `CHUNK_ENV_RADIUS × CHUNK × 0.92` ≈ 88u, just inside real scenery
- outer radius `fogFar × 1.06`, so it always reaches past the fog line
- density derived from the actual annulus area, capped at 420 instances
- placement seeded from the chunk anchor — walk away and back, same skyline
- never casts or receives shadows, never enters the collision or hit-test systems
- disabled entirely on Low quality
- rebuilt on chunk crossing and at the end of a realm morph

Verified coverage — every realm's ring now reaches beyond its fog:

| Realm | fogFar | Ring outer | Instances |
|---|---|---|---|
| Enchanted Forest | 185 | 196 | 420 |
| Frozen Tundra | 155 | 164 | 317 |
| Volcanic Wasteland | 140 | 148 | 235 |
| Golden Desert | 225 | 239 | 420 |
| Mystic Swamp | 108 | 114 | 88 |
| Crystal Caverns | 125 | 133 | 161 |
| Autumn Grove | 165 | 175 | 377 |
| Sakura Valley | 150 | 159 | 289 |
| Blood Moon Canyon | 130 | 138 | 185 |
| Neon Void | 110 | 117 | 96 |

Worst case (Desert/Forest): 420 instances, **2 draw calls, ~7,500 triangles**.

### Bonus fix found during the merge

While splitting the sources, three functions turned out to be declared **twice** in the
v25 build: `disposeEnvChunk`, `streamChunks`, and `updateChunkStream`. Because JavaScript
function declarations hoist and the *last* one wins, the older synchronous implementations
were silently overriding the newer v22 micro-op versions defined ~60 lines earlier.

The practical consequence: the entire "2 ms per frame chunk budget" system — the thing
that exists specifically to prevent frame hitches while roaming — **was dead code**.
Chunks were being built one whole chunk per frame, synchronously.

The stale duplicates have been removed, which activates the budgeted streamer for the
first time. This was not on the original plan; it was found by diffing.

### Verification note

Automated browser testing could not be run in the authoring environment — Chrome and
Chromium downloads are blocked there. The following were verified instead:

- `node --check` on every source file and on the assembled artifact's scripts
- no duplicate function declarations remain
- zero external URLs and zero Cloudflare remnants in the built file
- the ring's geometry/coverage/determinism math executed directly against the real
  biome table (all 10 realms pass; same anchor reproduces the same skyline)

Play-testing in a real browser is the remaining step.
