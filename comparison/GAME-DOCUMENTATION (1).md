# TANK REALMS — Complete Game Documentation (v25)
### A full technical + design reference for AI/LLM review

> **Purpose of this document:** Everything needed to understand, review, extend, or port this game. Written against the shipped build `tank_realms_v25_standalone.html` (~1.5 MB single file, self-contained).

---

## 1. GAME CONCEPT & IDENTITY

**Genre:** Mobile-first 3D arena survival / roguelite auto-shooter with meta-progression.
**Pitch:** You drive one tank in an infinite, procedurally generated world split into 10 themed "realms" (biomes). Enemies spawn endlessly in a ring around you. Every kill grants XP; every level-up deals a 3-card upgrade choice; every 5th level summons a boss. Death banks coins into a permanent Armory economy. Two modes: endless **Casual** (with mid-run named save slots) and configurable **Level Mode**.

**Platform & delivery:** A single HTML file. The Three.js r128 engine is **inlined** into the file (~600 KB), so the game runs with zero network dependency — offline, from a file, in sandboxed previews, anywhere. Ships as an installable PWA (manifest + service worker + icons).

**Art direction:** Low-poly / flat-shaded 3D with vertex-colored terrain, toon-ish tanks built from primitive geometry (boxes/cylinders/cones), warm rim lighting, distance fog per realm, cinematic ACES tone mapping. UI is dark glassmorphism (blurred dark panels, indigo-purple gradient accents).

---

## 2. TECHNICAL FOUNDATION

| Layer | Implementation |
|---|---|
| Rendering | Three.js **r128** (inlined). Single WebGL renderer, ACESFilmicToneMapping, per-biome exposure 1.06–1.26, pixel ratio capped at 1.25 (1.0 in Low quality). PCFSoftShadowMap at 2048² on High. |
| File format | ONE html file: inline CSS → inline engine → game script (~4,700 lines) → service-worker registration. No external requests. |
| Persistence | `localStorage` key `tank_save` (JSON, format `v3`), accessed through a **resilient `store` wrapper** that falls back to in-session memory where storage is blocked (sandboxed iframes, private mode) and shows a warning banner. |
| PWA | `manifest.webmanifest` (fullscreen, any orientation, theme `#1a0a2e`), `sw.js` — **network-first for the page** (fresh build on every open, never a stale version), cache-first for assets. Cache version currently `tank-realms-v25`. |
| Audio | 100% synthesized WebAudio (no files): one-shot SFX, engine hum, per-biome ambience, generative music. |
| Testing culture | Every feature was shipped with a Puppeteer browser test suite (`analysis/*.js`) driving the real game; verified behaviors cited throughout. |

**Core loop architecture:** `requestAnimationFrame(animate)` → per frame: `runChunkTasks(3ms budget)` (world streaming) → if `gamePhase === 'playing'` → `updatePhysics(dt)` (which is monkey-patched once: `if (state.isChoosingUpgrade) return; updateCombo(dt); …` to freeze the world while upgrade cards are open). Rendering is **gated** (`needsRender`) — the scene renders only while playing or when something changed, saving battery in menus/pause.

**Delta-time discipline:** all motion uses dt and is normalized (`1 - Math.pow(1-k, dt*60)` smoothing); enemy fire chances are per-second (`chance × dt × 60`); dt clamped to 0.1s.

---

## 3. VISUAL LANGUAGE & COLOR SYSTEM

**UI palette (CSS):**
- Primary gradient: `#667eea → #764ba2` (indigo → violet) — used for main buttons, level badge, XP bar, card highlights.
- Screen backdrop: `linear-gradient(135deg, rgba(20,30,40,0.97) → rgba(10,15,25,0.99))` + `backdrop-filter: blur(20px)`.
- Panels/chips: `rgba(0,0,0,0.5–0.55)` + 1px `rgba(255,255,255,0.08–0.12)` border, radius 10–15px, `backdrop-filter: blur(8–10px)`.
- Restart/destructive: orange `#f97316 → #ea580c`. Armory: blue `#0ea5e9 → #0369a1`. Level Mode: green `#10b981 → #047857`. Awards: amber `#f59e0b → #b45309`.
- Reward/gold text: `#fbbf24`. Success/done: `#4ade80`. Danger: `#dc2626/#ef4444`. Kill feed: mint `#a7f3d0`.
- Typography: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`; title 3rem/700 with 6px letter-spacing + glow; all HUD text carries `text-shadow: 0 1px 3px rgba(0,0,0,0.95)`.
- Player identity color: **amber `0xf59e0b`** (changed from grass-green in v3 for contrast); enemies use saturated identity colors (see §8).

**In-world palette:** each realm defines `skyTop/skyBottom` (vertical gradient sky texture painted on a 2×512 canvas), `fogColor/near/far`, `groundColor/grassColor` (vertex-blended + procedural dry-patch tint), `ambientLight/sunColor/sunIntensity`. The sky canvas also receives celestial details per realm type (sun+clouds for day realms, glow clouds for embers, stars for sparkles).

---

## 4. MAIN MENU (HOME SCREEN) — exact layout

The home screen (`#start-screen`, class `.screen`) is a full-screen flex column, centered, dark blurred backdrop. From top to bottom:

1. **Floating logo** — `⚔️` emoji, 64px, gentle 3s bob animation (`homeFloat`), indigo glow shadow.
2. **Title** `TANK REALMS` (h1) + subtitle `Conquer Every Biome` (h2).
3. **Stats row** — three cards side by side (34px gap): `Best · Casual`, `Best · Levels`, `💰 Coins` — numbers 24px/800, labels 11px uppercase gray. Live from the save.
4. **Button stack** (all `.btn`: 50px pill radius, 18px padding, 16px uppercase 3px-spaced text, entrance on tap, gradients listed in §3):
   - `▶ Casual` — opens the **Casual hub** (§5.1)
   - `🎯 Level Mode` (green) — opens the **mission config** (§5.2)
   - `🛒 Armory` (blue) — the shop (§5.3)
   - `🏆 Awards` (amber, slightly smaller 44px padding) — achievements/dailies screen (§5.4)
5. **Hint text** (`.game-info`, 12px, 40% white): control summary.
6. **Version tag** bottom-right (`v25`, 30% white) — build identifier for support.
7. **Conditional:** `#storage-warning` red banner if localStorage is blocked.

All full-screen overlays use `.screen` + `.hidden` (`visibility:hidden`, opacity transition, `transform: scale(1.02)`) — hidden screens cannot receive taps (this exact bug — invisible buttons eating taps — was found and fixed in Tier 1).

---

## 5. MENUS & SCREENS (complete inventory)

### 5.1 Casual hub (`#casual-screen`)
Settings-panel card (min(94vw,480px)). Shows best score, `▶ New Casual Run` primary button, then **💾 Saved runs** list (max 12 rows + 🔄 Autosave): each row = name (17px bold), meta line `Lv 12 · 4,500 pts · 3:24 · 8/20`, `Load` (green) and `🗑` (red) buttons. Empty state explains how to save. Back button returns home.

### 5.2 Level Mode config (`#levels-screen`)
Three setting groups as chip rows (`.cfg-chip`, selected = indigo gradient):
- **Enemy density:** Light 6 / Normal 10 / Heavy 14 / Chaos 18 (max concurrent enemies)
- **Difficulty:** Easy (0.7× enemy damage, 0.75× fire rate) / Normal / Hard (1.3×/1.25×) / Nightmare (1.6×/1.5×)
- **Starting level:** slider 1–30, **capped at your highest cleared level** (`progress.maxCleared`, auto-saved on level-up; label shows "(unlocked up to Lv X)")
Then `▶ Deploy` and Back. Starting at level N also starts in the appropriate realm (biome = floor((N-1)/3)).

### 5.3 Armory (`#shop-screen`)
From home or game-over (remembers return target). Coin balance in header. Three sections:
- **Tank Skins** — 6 swatch rows: Amber Strike (default/free), Crimson Fang 2,000, Emerald Guard 3,500, Glacier 5,000, Void Walker 7,500, 24k Commander 12,000. Buy → auto-equip; Equip swaps selected; EQUIPPED state shown. Skin changes the player tank's hull color + its hit-explosion color (verified color-exact).
- **Consumables (next run)** — 🍀 Lucky Charm (+20% coins, 300, ×5) / 🚀 Head Start (+1 free card, 450, ×3). Bought stacks show ×N; consumed at next run start.
- **Permanent Upgrades** — 7 rows with `●●●○○ level x/10` pips and **exponential prices** `base × 1.5–4.0^level`:
  - ❤️ Reinforced Chassis +20 Max HP ×10 (250 → 43,980; total ≈117k)
  - 💥 Machined Barrels +8% damage ×10 (300, growth 1.6)
  - ⚡ Turbine Engine +6% speed ×8 · 🛡️ Spacer Plating +4 armor ×6 · 🔄 Repair Kit +1 regen/s ×6
  - ✨ Second Wind ×2 (1,500 / 6,000 — lvl 2 revives at 75% HP instead of 50%)
  - 🃏 Extra Choice ×2 (2,500 / 8,000 — 4 then 5 level-up cards)

### 5.4 Awards (`#awards-screen`)
- **📅 Daily challenges** — 3 per day, seeded deterministically from the date (pool of 9: kill 25/60, 15 crits, destroy 10 cover, defeat a boss, reach lvl 10/15, 800 coins or 400 units in one run). Progress bars, auto-claim with coin payout + toast.
- **🎖️ Achievements** — 14 (First Blood → Exterminator 500 kills, Boss Slayer → Realm Warlord 10 bosses, Nightmare Hunter, Legend lvl 30, Combo King ×8, Collector 3 skins…). Progress bars; unlock grants coins + fanfare.

### 5.5 Settings (`#settings-screen`) — reached from pause
2×2 grid of wide chips: `Sound: On/Off`, `Music: On/Off` (both persisted), `Camera: Follow/Wide`, `Assist: On/Off` (turret tracking speed 0.25 vs 0.14). Plus `Graphics: Auto/High/Low` (v25). Explanatory notes below each label. All defaults initialized in state (sound+music on, follow, assist on).

### 5.6 Pause (`#pause-screen`)
`⏸ Paused` title, **YOUR BUILD** chip row (⚡speed% 💥damage% 🛡️armor 🔄regen 🎯crit 🔱multishot — the stat panel was moved OUT of the combat HUD in v7/v8 to reduce clutter), then buttons: `Resume`, `⚙ Settings`, `💾 Save` (**Casual only** — hidden in Level Mode since progression auto-saves), `Quit to Menu`.

**Save dialog** (`#save-dialog`): overlay card with run summary (`Lv 12 · 4,500 pts · 3:24`), text input pre-filled `Run Lv12`, `💾 Save`/`Cancel`. Saving never overwrites: duplicate names get `(2)`, `(3)` suffixes. Stays paused after saving.

### 5.7 Game over (`#game-over-screen`)
`💀 Defeated`, score+level headline, **4-stat row** (Kills / Survived m:ss / Coins earned / Best score) + `★ NEW BEST! ★` pulsing badge, `Try Again` (orange, repeats same mode+config), `🛒 Armory · 💰 balance` (blue).

### 5.8 Level-up card choice (`#upgrade-choice`)
Full-screen dim (0.82) + blur overlay; `🌟 LEVEL N` title, "Choose an upgrade", then **3 cards** (4–5 with Extra Choice): 150×170px glass cards with 40px icon, name, description; tap → picked card glows green/scales, others fade, gameplay resumes 400ms later. Multi-level-ups queue (`pendingChoices`) and re-deal consecutively. See §10 for the 17-card pool.

### 5.9 In-run overlays
- **Boss banner** (`#boss-banner`): top 26%, red glow 24px/900 weight text, punch-in animation: `⚠ WARLORD INCOMING ⚠` / `🏆 DEFEATED!` / `⚔ CALLS REINFORCEMENTS!`. Auto-hide 2.4s.
- **Boss health bar**: 86px from top, 64vw wide red gradient track with name label (12px letterspaced) — visible only while a boss lives.
- **Toast stack** (top 15%): stacked glass toasts for achievements/dailies/tutorial (slide+fade, 4s).

---

## 6. IN-GAME HUD — exact geometry (v8 slimmed layout)

| Element | Position & style |
|---|---|
| **Score/coins chip** | Absolute top-left (safe-area inset), 13px bold, `🏆 12,450 · 💰 260`, dark pill |
| **Kill feed** | Under score chip, max **2** entries, mint text, e.g. `+100 Scout ⚡CRIT ×3`, 1.3s life |
| **Level chip** | Absolute top-center: `LV 7` + 56×4px XP bar (indigo gradient fill) |
| **Minimap** | 84px circle, top-right 56px below pause button; **player-centered radar** (65-unit radius): green player arrow (rotates with hull), red enemy dots (target = brighter, boss = orange 5px), realm-tinted background, white border |
| **Pause button** | Fixed top-right, 48×48, radius 16, indigo gradient, `⏸` |
| **HP pill** | Bottom-center (safe-area): 110×9px bar (green→yellow `#eab308` <60% →red `#dc2626` <30%) + `❤️ 87`; **pulsing red glow** below 25% |
| **Damage direction arc** | Centered 150px conic-gradient red wedge rotated to the shooter's bearing, fades 0.55s |
| **Vignette** | Full-screen radial darkening (52%→edges 34% black) |
| **Biome indicator** | Top 90px pill, realm name uppercase, 3s fade |

---

## 7. CORE GAMEPLAY MECHANICS

### 7.1 Controls
- **Touch:** left half drag = virtual joystick (120px base, 50px knob, 50px max throw); right half hold = fire (auto-aim). `touchcancel` handled.
- **Keyboard:** WASD + Space (desktop testing).
- **Firing:** `CONFIG.fireRate 0.25s ÷ fireRate%`; bullets = cached shared meshes (white core + 2 glow shells + 2.7-unit trail), speed 60, lifetime 1.2s.
- **Auto-aim:** nearest enemy with 25% stickiness bias on current target; turret tracks at 0.25/frame (assist) toward it; aims along movement direction if no enemies.

### 7.2 Damage model
- Player shell: `22 × damage%`; crits ×2 (chance = crit stat); pierce stat lets bullets pass through N extra enemies (per-bullet hit-memory).
- **Splash** card: 50% damage in 3.5–6-unit radius on bullet impact. **Missile Pod**: independent homing missile every `5/N` s at the current target — cubic-lerp steering, retargets on death, 2.5× damage 6.5-unit blast.
- Enemy shells damage the player through `difficulty.dmg` multiplier; armor subtracts flat per hit (min 1). **Shield Generator** absorbs one full hit every 18/N s (blue ring shows ready).
- **Trees and rocks are destructible cover**: HP by size (tree `4+scale×6`, rock `2+size×2.4`); they block *both* sides' bullets (verified: enemy behind a tree takes 0 damage); on destruction, wood-shard/rock-chunk explosion + the chunk mesh is surgically rebuilt without them (colliders removed).

### 7.3 Movement & camera
Tank max speed 18 u/s × speed%; velocity exponential smoothing; hull rotates 8rad/s toward movement; terrain-following with bilinear-interpolated analytic heights; suspension tilt from terrain normals. **Dynamic camera (v17):** base offset (0,27,34) follow / (0,35,47) wide, × adaptive zoom factor `camF`: 0.90 when nearest enemy <24u, 1.14 roaming, 1.18 boss fights, +speed widening; adapts at 1.1/s; camera shake on impacts; lookAt 6u ahead of player.

### 7.4 Spawning & difficulty
Enemies spawn in a **ring 38–64u around the player** (works anywhere in the infinite world). Casual: `maxEnemies min(14, 3+level)`, spawn interval `max(1.5, 3.5−0.15×level)`; **endless ramp past level 20**: enemy HP ×(1+0.04/level), cap 18, floor 1.2s. Level Mode: density = chosen constant.

---

## 8. ENEMY ROSTER (9 types — stats & AI)

Spawn pool unlocks by level: scout/soldier (1), heavy (3), sniper (4), bomber (6), healer (5), berserker (7), phantom (8), gunner (10).

| Type | Color | HP | Spd | Dmg | Pts | Behavior |
|---|---|---|---|---|---|---|
| Scout | gold | 25 | 1.5 | 8 | 50 | fast harasser |
| Soldier | red | 50 | 1.0 | 12 | 100 | approaches to 18u, fires 0.48/s |
| Heavy | brown | 120 | 0.5 | 25 | 200 | slow bruiser |
| Sniper | purple | 35 | 0.6 | 30 | 175 | keeps 25–30u, 0.48/s |
| Medic | green | 60 | 0.8 | 5 | 150 | heals wounded ally 8HP/2s (any range) |
| Berserker | pink | 80 | 1.3 | 18 | 250 | charges, fires only <18u |
| **Bomber** | rose | 40 | 1.6 | 30 | 150 | kamikaze — detonates at 4.5u (AoE + direction arc) |
| **Phantom** | slate | 55 | 1.2 | 14 | 220 | cloaks 15–75% opacity shimmer, skirmishes at 20u |
| **Gunner** | violet | 90 | 0.7 | 10 | 180 | 3-round bursts (0.18s apart) every ~5.5s |

Enemy bullets: red (green for Medic, cyan for player), same ballistics; fire probabilities are per-second-scaled and multiplied by difficulty.

## 9. BOSS ROSTER (6, rotate on bossCount, every 5th level)

All: spawn ring 45u from player, HP ×(1+level×0.03), banner + alarm + bar + minimap orange dot; death = giant explosion, shake 0.8, **+25% HP loot-heal**, 1,500–2,600 score (≈2× that in coins via combo).

| # | Boss | Color/HP | Interval | Pattern (all verified live) |
|---|---|---|---|---|
| 1 | **WARLORD** | dk-red 600 | 3.2s | 5-shell fan barrage (±0.6rad) toward player; holds 14–24u |
| 2 | **TEMPEST** | sky-blue 650 | 3.0s | **teleports** to a new 16–24u bearing each cycle + 3-round point-blank volley |
| 3 | **COLOSSUS** | violet 750 | 3.8s | 3-round bursts; **summons 2 minions at 66% and 33% HP** |
| 4 | **TITAN** | navy 950 | 4.6s | closes to 16u then **ground-slam**: expanding shockwave ring, 35 dmg (full <7u, 60% <14u), shake 0.7 |
| 5 | **NOVA** | grey 550 | 4.2s | **cloaks to ~15% opacity** between attacks; fires **8-way nova ring** |
| 6 | **FORTRESS** | bronze 850 | 3.4s | creeping **rotating double-spiral** (2 bullets/0.22s × 22 shots) then a rest cycle |

---

## 10. PROGRESSION SYSTEM

### 10.1 In-run leveling
Kills grant `points/2` XP; XP curve `xpToNext ×= 1.4` from 100. Each level-up: fanfare + **3-card choice** (gameplay freezes via the physics wrapper — enemies, bullets, missiles all halt). Realm morph every 3 levels; boss every 5 (queued behind card selection so they never overlap the choice UI).

### 10.2 The 17 upgrade cards
| Icon | Card | Effect (stacks) |
|---|---|---|
| ⚡ Overdrive | speed +10% | 💥 Heavy Rounds damage +15% | 🔥 Rapid Loader fire rate +12% |
| ❤️ Reinforced Hull | +20 maxHP & heal | 🔄 Nano Repair +2 regen/s | 🛡️ Composite Armor +8 |
| 🎯 Precision Optics | crit +10% (2× dmg) | 🔱 Split Cannon +1 projectile (max 5 fan) |
| 🔩 Piercing Rounds | punch through +1 enemy | 🧲 Scavenger +25% coins | 🎖️ Bounty Hunter +20% XP |
| 💗 Field Medic | heal 3 HP/kill | 💨 Adrenaline +25% speed 1.5s/kill |
| 🚀 Missile Pod | homing missile every 5/N s | 💥 Shell Shock splash 3.5+1.2N u | 🛡️ Shield Generator block 1 hit/18N s |

### 10.3 Kill rewards & combo
`combo` +1 per kill, decays after 3s; coin payout = `points × (1+0.2×combo) × 0.5 × (1+LuckyCharm bonus)`. Bosses ≈750–1,300 coins each. Kill feed shows combo multipliers; crits flagged ⚡CRIT.

---

## 11. SAVE SYSTEM (v3 format)

```json
{ "v":3, "coins":0, "meta":{...armory levels}, "skins":{owned,selected},
  "casual":{"best":0,"auto":<snapshot|null>,"saves":[<12 named snapshots>]},
  "levels":{"best":0}, "progress":{"maxCleared":1},
  "consumables":{"lucky":0,"headstart":0},
  "stats":{kills,bossKills,crits,destroyed,distance,coinsEarned,maxLevel,maxCombo,playTime,bossNightmare,skins,runs},
  "achUnlocked":[ids], "daily":{date,picks,progress,done},
  "musicEnabled":true, "quality":"auto", "tutorialTips":{...} }
```
- **Casual snapshots** capture level/XP/score/kills/time/coins/full playerStats/HP/position/realm; resuming rebuilds the world around that position.
- **Autosave slot** (🔄) written on app-background (`visibilitychange` + window `blur` auto-pauses first); named saves survive death; best scores never regress (bug found & fixed in v10).
- Legacy save migration: v1 (coins+stats) and v2 (single snapshot) auto-upgrade.

---

## 12. AUDIO DESIGN (all synthesized)

**One-shots** (`SFX.*`): shoot (190→90Hz square + noise click), enemyShoot, hit tick, crit double-chime, kill arpeggio, explosion (noise sweep + 64→30Hz sub, sized by blast), shatterWood/shatterRock, hurt (saw thud + **vibration 35ms**), heal, levelUp (4-note fanfare), cardPick, coin, bossAlarm (dual saw blasts + vibrate), bossDown (5-note fanfare), revive shimmer, achievement chime.

**Engine hum:** sawtooth 38–84Hz through lowpass, gain/pitch follow speed live.
**Ambience per realm:** bandpass wind bed (stronger in snow/sand/embers) + biome accents every 2.6s (bird chirps in forests/sakura, rumbles in volcanic, sparkle tones in crystals).
**Generative music:** 260ms scheduler — bass pulse (saw, root 55Hz major / 49Hz minor realms), pad chord every 8 steps, triangle arpeggios from a pentatonic scale with density driven by **intensity** (0.25 roaming → 0.55 heavy fighting → 1.0 boss + menace stab). Silences during pause/cards; full lifecycle start/pause/resume/quit verified. Separate Music toggle.

---

## 13. WORLD GENERATION (infinite, deterministic)

- **Analytic terrain:** height = 3 octaves of sin/cos × biome amplitude (1.0–5.5) + dunes/spikes mods, origin flattened 26u for a safe spawn. No grid — infinite in all directions.
- **Ground tiles:** 5×5 grid of 48u tiles (24² segments each) that re-anchor around the player and re-bake heights+vertex colors (world-space UVs keep the noise/normal-map seamless).
- **Environment chunks:** 48u chunks; radius-2 ring exists around the player. Each chunk is **seeded** (`cx*73856093 ^ cz*19349663 ^ biome*83492791` — revisits regenerate identically, verified 59/59 colliders). Trees grow in **groves** (0–2 per chunk, 2–5 trees, squared-distance clustering; ~54% of chunks are open fields); heights 0.75–1.15 scale, 2–3 foliage layers (max ~14u — tuned so tanks stay visible); Tundra grows dark spruce `#2F5D50` with white snow-caps against softened `#DDE9EF` ground.
- **Streaming:** the **micro-op chunk builder** decomposes each chunk into ~20 operations (per-tree geometry → per-bucket merge → grass instancing → commit), executed inside a **2–4ms/frame budget**; new chunks build off-screen and swap in atomically (old realm scenery stays visible until replaced). Worst measured frame during full world churn: **6.5–8ms in a software renderer** (≈2–3ms on hardware).
- **Features per chunk:** water ponds (40% in water realms), lava pools with glow lights (50%×2), crystal clusters with emissive + lights, obsidian spikes.

### 13.1 The 10 realms (rotate every 3 levels)
Enchanted Forest → Frozen Tundra → Volcanic Wasteland → Golden Desert → Mystic Swamp → Crystal Caverns → Autumn Grove (orange foliage/leaves) → Sakura Valley (pink petals + ponds) → Blood Moon Canyon (red embers, spikes+dunes, roughest terrain 5.5) → Neon Void (magenta crystals + teal sparkles, near-black sky) → wraps.

### 13.2 Realm transition (the "morph")
No fade. On crossing (after cards close + 700ms grace): an **8-second blend** — terrain heights, ground vertex colors, sky gradient+celestial, fog, all three lights and exposure lerp with smoothstep; ambient particles + ambience swap at t=0.5; scenery rebuilds as a **radial wave** from the player (nearest chunks first). Self-throttling: skips work after heavy frames (never >3 consecutive), "finish strong" budget at t>0.8.

---

## 14. QUALITY & UX SYSTEMS

- **Auto-graphics (v25):** samples 240 frames of real FPS (~4s of play); avg <40 → Low (shadows off, pixel ratio 1, 60% less grass, 58% fewer ambient particles, no dust) with a notice; else locks High. Manual Auto/High/Low in settings; persisted.
- **First-run tutorial:** contextual once-only tips (move/fire at start, cards at lvl 2, boss cover advice, low-HP advice) shown as toasts on the first run only; persisted flags.
- **Pause hardening:** auto-pause on `visibilitychange` **and** window blur; overlays/popups cleared on pause; resume re-arms fire/spawn timers (no burst); card-selection state can never leak between runs (was a real bug).

---

## 15. GAME-FEEL DETAILS WORTH KNOWING

- Muzzle flash + shared muzzle light (no per-bullet lights — that caused shader-recompile churn, 6→169 programs, fixed in Tier 3).
- Screen shake scaled by blast size and camera mode; damage arcs, kill feed, score popups at kill sites (world→screen projected).
- Upgrade notifications sit at lower-third (out of combat sightline).
- Coins HUD ticks live via 500ms poll; the 💰 0 counter appears only once coins exist (income is halved by design — the Armory is a ~250k-coin long-term sink).
- Enemy intro card ("New: Phantom — cloaked striker") first time each type appears.

## 16. FILE INVENTORY (workspace)

| File | Role |
|---|---|
| `tank_realms_v25_standalone.html` | **The game** (canonical build) |
| `manifest.webmanifest`, `sw.js`, `icon-192/512.png` | PWA pack |
| `DEPLOY-GITHUB-PAGES.md` | Publishing guide |
| `analysis/REPORT.md`, `PLAN-v2.md`, `tier*.diff`, `*-results.json`, test suites | Full audit trail: every claim in this doc is backed by an automated test |

*Document compiled from 25 shipped, individually verified versions (original buggy upload → infinite-world roguelite).*
