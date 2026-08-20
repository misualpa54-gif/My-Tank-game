# Tank Realms — v25 Alternative vs Current Phase 16 Comparison Audit

**Audit date:** 20 August 2026  
**Current implementation reviewed:** branch `arena/01a01b73-my-tank-game`, Phase 16  
**Alternative files reviewed from `main/comparison`:**

- `GAME-DOCUMENTATION (1).md` — 24,050 bytes, 278 lines
- `tank_realms_v25_standalone (1).html` — 885,455 bytes, 5,412 lines

## 1. Audit method

The alternative documentation was not treated as proof by itself. The standalone HTML was downloaded separately, its four script blocks were extracted, and the actual game script was syntax-checked. A JSDOM/Three.js renderer-stub harness then executed the real alternative code through initialization and basic play.

Observed alternative runtime inventory:

- 10 biome definitions
- 9 normal enemy definitions
- 6 boss definitions
- 16 level-up card definitions
- 7 permanent Armory upgrades
- 6 color skins
- 14 achievements
- 9 possible daily contract definitions
- basic menu/startup execution succeeded in the synthetic harness
- initial streamed world contained 25 chunks and 589 cover colliders

The alternative is therefore a substantial working evolution of the same original Tank Realms ancestor, not merely a design document. However, several documentation claims do not match the supplied code, and several important runtime defects remain.

---

## 2. Shared concept and code lineage

The two versions clearly descend from the same original game. Shared identity is much stronger than superficial genre similarity.

### Exact or near-exact common foundations

- Three.js r128.
- Procedural tanks constructed from boxes, cylinders, cones, tracks, wheels, turret, barrel, hatch, and antenna.
- ACES filmic tone mapping.
- Canvas-generated vertical sky gradients.
- Fog, terrain, procedural particles, rocks, trees, water/lava/crystals.
- Dark glassmorphism UI.
- Primary `#667eea → #764ba2` indigo/violet gradient.
- Orange retry/destructive gradient.
- Segoe UI/Tahoma/Geneva/Verdana font stack.
- Floating lower-left joystick and lower-right hold-to-fire concept.
- Auto-aim with a 25% sticky-target bias.
- WASD + Space desktop controls.
- Base gameplay constants: player speed 18, projectile speed 60, base interval 0.25s, base damage 22.
- XP begins at 100 and multiplies by 1.4.
- Three-card level-up concept.
- Three-second combo window.
- The first six original normal enemies have the same names, colors, HP, speed, damage, and score values.
- The first six original biomes share the same conceptual identity and many base palette/config values.
- Procedural WebAudio effects.
- localStorage persistence.
- pause/background protection.
- quality controls.
- explicit Three.js disposal/performance work.

### Shared high-level loop

Both versions follow:

`menu → select run → move/fire with auto-aim → destroy enemies → score/coins/XP → pause for card choice → escalate biome/enemy pressure → boss encounter → defeat/results → spend permanent currency → retry`

The split occurred in what each AI prioritized after stabilizing the original:

- **Current Phase 16** prioritized a real portrait Android APK, exact Continue, safe progression, biome Guardians/objectives, strategic enemies, evolutions, per-tank identity/mastery, deterministic Daily mode, five additional modes, accessibility, collision correctness, and automated regression safety.
- **Alternative v25** prioritized infinite exploration, broader environmental presentation, a slim arcade HUD, generic rotating bosses, a very deep global Armory, named browser saves, daily contracts, music/ambience, and more aggressive long-term economy/content expansion.

---

## 3. Direct comparison matrix

| Area | Current Phase 16 | Alternative v25 |
|---|---|---|
| Primary delivery | Capacitor Android APK plus Vite preview | Standalone browser HTML; claims PWA support |
| Android readiness | Real package ID, portrait lock, Java 21 build, no Internet permission, successful APK | No supplied Android project or APK configuration |
| Orientation | Approved portrait-only | PWA documentation says any orientation; no portrait media queries in supplied CSS |
| Source architecture | Split HTML/CSS/JS/native bridge, ESLint, build pipeline | One 885 KB HTML with inline Three.js, CSS, game, legacy patches |
| Startup recovery | Loading screen, renderer fallback, error/reset flow, WebView stale-cache protection | Direct renderer creation; no startup recovery or WebGL context-loss handling |
| World | Bounded 100-unit arena, tank clamp ±44, walls around ±46 | Infinite analytic terrain with 5×5 streamed 48-unit tiles/chunks, no walls |
| Biomes | 6 | 10: shared 6 plus Autumn, Sakura, Blood Moon, Neon Void |
| Realm transition | Explicit resource disposal and immediate biome rebuild/load | Intended 8-second visual morph with terrain/sky/fog/light blending and radial rebuild |
| Main menu | Continue, Garage, Achievements, Daily, Game Modes, Adventure | Floating logo, stats row, Casual, Level Mode, Armory, Awards, version tag |
| Combat HUD | Three top stat panels, quickbar, biome/mode/combo/objective/boss HUD | Slim score/coin, level/XP, bottom HP, minimap, kill feed, damage direction, boss banner/bar |
| Touch safety | Upper 30% cannot start combat input; Left-handed mode; firing finger latch protected | Entire left/right halves respond; no upper HUD exclusion; no Left-handed option; second firing touch can replace first |
| Camera | Fixed Follow/Wide offsets, user shake Off/Reduced/Full | Follow/Wide plus automatic combat/roaming/boss/speed zoom |
| Base enemies | 12 spawnable strategic types plus carrier Drone | 9 normal types |
| Unique v25 enemies | — | Bomber, Phantom, Gunner |
| Unique current enemies | Shield, Artillery, Mine Layer, Commander, Drone Carrier, Drone, Reflector | — |
| Bosses | 6 realm-specific Guardians tied to biome progression | 6 generic rotating bosses every fifth level |
| Objectives | 7 realm objectives | No realm objectives; 3 daily contracts instead |
| Temporary upgrades | 19 capped/level-gated upgrades + 5 evolutions | 16 uncapped random cards, some behavior-capped |
| Shared upgrade ideas | speed, damage, fire rate, HP, regen, armor, multishot, piercing, crit, splash/explosion, homing/defense/repair concepts | same family |
| Unique v25 cards | XP bonus, coin bonus, on-kill heal, on-kill speed, autonomous Missile Pod, periodic full-hit Shield | — or only partial equivalents |
| Unique current cards | ricochet, Phase Dash, trade-off frame, reactive/emergency defense, Turbo Tracks, Repair Burst, 5 named evolutions | — |
| Permanent progression | 3 actual tank designs, separate five-track tuning, mastery cosmetics | 6 paint recolors, 7 global exponential upgrades, consumables, revive, extra card choices |
| Achievements | 10, 2,950 total coins | 14, broader lifetime statistics |
| Daily | Full deterministic seeded run with modifier/biome/enemy/cards/objectives | Three seeded daily task contracts drawn from a pool of 9 |
| Modes | Adventure, deterministic Daily, Boss Hunt, Last Stand, Realm Rush, One-Tank, Practice | Casual and configurable Level Mode |
| Continue | One exact active run: enemies, objective, boss, mode timer/index, cooldowns, choices, tank snapshot | Autosave + up to 12 named partial snapshots; rebuilds world/enemies on load |
| Save safety | Versioned, clamped, ID-validated, forged data sanitized | Corrupt JSON caught but values/shapes mostly trusted without bounds |
| Armor | Diminishing formula | Flat subtraction, minimum 1 |
| Collision | Swept collision across full projectile segment | Point-at-new-position checks; tunnelling remains possible |
| Cover | Static foreground cover blocks shots | Destructible tree/rock cover blocks both sides |
| Rendering while menu/paused | RAF continues rendering | `needsRender` gates static menu/pause rendering |
| Quality | Manual Low/Medium/High, exact protected presets | Auto/High/Low; auto samples 240 frames and may silently choose Low |
| Audio | Procedural SFX, no music by approved choice, optional haptics/volume | SFX, engine hum, biome ambience, generative music; sound/music default On |
| Accessibility | handedness, HUD scale, volume, haptics, reduced flashes, shake modes, tutorial replay | Camera/assist/sound/music/quality; lacks the current comfort suite |
| Offline integrity | Bundled local build, no external URLs, no Internet permission | Three.js inline, but supplied HTML contains Cloudflare external script and missing PWA companion files |
| Verified tests | 68 current tests plus successful cloud Android build | Documentation references Puppeteer suites, but those suites/results were not supplied in `comparison` |

---

## 4. Strong ideas in the alternative worth preserving conceptually

These should be considered as design inputs, not copied wholesale.

### 4.1 World presentation

- Four additional realm themes are visually compatible with Tank Realms.
- Celestial sky details, exposure per biome, vertex-colored terrain patches, procedural detail/normal textures, and improved snow/foliage treatment could make current realms richer.
- Smooth realm morphing is more cinematic than an abrupt rebuild.
- Deterministic chunk revisits are a strong exploration concept.

### 4.2 Combat awareness and game feel

- 84px player-centered minimap.
- Directional damage arc.
- Two-line kill feed with crit/combo labels.
- Bottom-center HP with low-health pulse.
- Boss arrival/defeat/reinforcement banners.
- Adaptive camera framing.
- Engine hum and realm ambience.

### 4.3 Enemy/boss ideas

- Bomber: readable close-range kamikaze threat.
- Phantom: opacity-based cloaked skirmisher.
- Gunner: telegraphed burst-fire support.
- Warlord fan barrage.
- Tempest teleport volley.
- Titan ground slam.
- Nova radial attack/cloak.
- Fortress spiral pattern.

These can coexist with the current strategic roster if introduced at controlled levels and with explicit visual warnings.

### 4.4 Progression ideas

- Missile Pod is meaningfully different from steering plasma.
- On-kill movement burst is more active than passive speed.
- XP/coin specialization allows economy-oriented builds.
- Second Wind can create a high-value comeback moment.
- Extra card choices are an understandable permanent luxury upgrade.
- Paint palettes could sit on top of current actual tank designs rather than replace them.
- Lifetime statistics, home best-stat cards, and daily contracts give players short/long goals.

### 4.5 Internal engineering ideas

- Render gating in static screens can save battery.
- Shared persistent muzzle/explosion light pools reduce shader churn.
- Cached hot DOM references reduce repeated lookup work.
- Scratch-vector reuse can reduce garbage collection.
- Storage-unavailable warning is user-friendly.

---

## 5. Current implementation strengths that must remain the foundation

### Product/platform

- It is already a real installable offline Android app.
- Portrait behavior, Android Back, immersive fullscreen, screen-awake, cache recovery, and API 28 support are implemented and built successfully.
- The supplied v25 PWA idea does not replace this requirement.

### Controls and accessibility

- Current top-30% input exclusion prevents accidental movement/fire behind HUD controls.
- Left-handed mode, first-firing-finger protection, touch-cancel handling, large HUD, haptic toggle, effects volume, reduced flashes, and camera-shake modes are more complete.

### Combat correctness

- Swept projectile collision is safer at low FPS.
- Diminishing armor prevents practical invulnerability.
- Projectile pool is capped at 128.
- Current upgrade effects are capped and sanitized.
- Centralized defeat processing gives direct, splash, evolution, and boss kills consistent rewards/objective/mastery behavior.

### Progression/content

- Current objectives and biome Guardians give the six realms structure.
- Current strategic enemies create tactical interactions beyond raw damage.
- Evolutions reward build planning.
- Three actual tank silhouettes/projectiles and mastery cosmetics are stronger identity than recolor-only skins.
- The deterministic Daily Challenge and five additional modes are much broader than v25's two modes.

### Save/stability

- Current Continue is substantially more exact.
- Save data is clamped and validated.
- Practice cannot pollute permanent progression.
- Phase 16 includes visible load recovery, safe run reset, WebGL fallback/context loss, and stale APK cache protection.
- Current modular source and regression suite are safer to extend.

---

## 6. Documentation claims that do not match the supplied v25 code

### 6.1 Not actually self-contained/offline as supplied

The HTML links `manifest.webmanifest` and registers `sw.js`, but neither file exists in the uploaded comparison folder or the repository root. The PWA package therefore cannot be validated or installed from the supplied files.

The HTML also ends with an injected Cloudflare challenge script that requests:

`/cdn-cgi/challenge-platform/scripts/jsd/main.js`

That contradicts the claim of “zero external requests” and must never be copied into the current offline APK.

### 6.2 Upgrade count mismatch

Documentation says 17 cards; actual `CHOICE_UPGRADES` contains 16.

### 6.3 Armory limits mismatch

Documentation describes Reinforced Chassis and Machined Barrels as ×10. Actual code sets both to maximum 12. Therefore documented totals/prices are not exact.

### 6.4 Test evidence unavailable

Documentation states every feature is backed by Puppeteer suites and result JSON. Those files are not in the supplied comparison folder or repository root. The claims cannot be independently accepted without the tests.

### 6.5 PWA orientation conflicts with the approved product

Documentation says the manifest uses “any orientation.” Current Tank Realms is approved and implemented as portrait-only.

### 6.6 Mobile responsiveness is overstated

The supplied CSS has no `@media` rules. Full-screen screens remain vertically centered and do not receive the current short-height/narrow-width portrait protections. The larger v25 menu can clip similarly to the issue fixed in current Phase 16.

---

## 7. Important defects confirmed in the supplied v25 code

### 7.1 Saved home stats load into state but remain displayed as zero

`updateHomeStats()` runs before `loadGame()`. After the save loads, it is not called again during boot.

The audit seeded coins `9,876` and Casual best `4,321`:

- internal state correctly became 9,876 / 4,321;
- displayed home Coins and Casual Best remained `0` / `0`.

### 7.2 Missile/splash boss kills can permanently block future boss progression

Direct shell kills contain special boss cleanup. Missile and splash kill paths do not centralize through that logic.

The audit forced Missile Pod to kill a boss and confirmed:

- the boss died;
- it was removed from `enemies`;
- `state.bossActive` still pointed at the dead boss.

Future boss spawning checks `!state.bossActive`, so later bosses can remain permanently blocked. Boss heal/banner/down-state cleanup is also skipped.

### 7.3 The Pause-screen Quit button bypasses the complete cleanup function

A good `quitToMenu()` function exists but is never called. The `btn-quit` handler contains a second incomplete implementation.

The audit quit with one boss and one missile active and confirmed after returning to menu:

- one enemy remained in the array;
- one missile remained;
- the player reference remained;
- audio stop and profile save from the good cleanup function were bypassed.

This can leak old combat objects/audio into the menu or next run and lose coins since the last save.

### 7.4 Duplicate chunk-stream functions override the intended micro-op implementation

`disposeEnvChunk`, `streamChunks`, and `updateChunkStream` are each declared twice. JavaScript function hoisting means the later declarations win.

The later `updateChunkStream` calls a whole synchronous `buildEnvChunk` once per frame instead of routing new chunks through the documented micro-op task budget. The earlier carefully budgeted version is dead code. This undermines the documentation's hitch-prevention claim and would be rejected by the current ESLint `no-redeclare` rule.

### 7.5 No swept projectile collision

Bullets move first and test only their resulting point against cover/tanks. At speed 60 and dt cap 0.1, a bullet can move six units and skip a 2.6-unit target. Current Phase 16 already protects against this.

### 7.6 Touch-control regressions

- No top HUD exclusion: touches anywhere on the left/right half can begin movement/fire behind HUD space.
- No Left-handed mode.
- Every new right-half touch overwrites `fireTouch`; a second firing finger can replace the first, producing inconsistent release behavior.

### 7.7 Flat armor can become practical invulnerability

Damage is `max(1, incoming − armor)`. Permanent armor plus repeatedly selectable +8 Armor cards can reduce almost every normal attack to one damage. Current diminishing armor is safer.

### 7.8 Upgrade cards have no availability/tier caps

The 16-card pool is reshuffled without filtering capped or saturated effects. For example multishot behavior caps at five projectiles, but the card can continue appearing and increasing a stat with no additional firing benefit. Crit, armor, regen, missile frequency, and economic bonuses can also escalate without the current controlled limits.

### 7.9 Partial named saves are exploitable and not exact Continue

Snapshots omit enemies, bosses, bullets, missiles, combo, boss state, card state, and several cooldowns. Named saves survive death and can be loaded repeatedly while permanent coins remain current, enabling repeated farming from an old favorable snapshot.

Save names are inserted through `innerHTML` without escaping, allowing user-entered markup to break the save-list UI.

### 7.10 Saved settings are incomplete

`saveGame()` persists music and quality but does not persist sound, camera, or aim assist despite documentation language suggesting settings persistence. Loaded quality is assigned to state after renderer initialization, but the saved Low preset is not applied to the renderer during boot.

### 7.11 Level Mode is not a finite level/mission system

It is an endless run with configurable density/damage/fire multipliers and a separate best score. Starting at a high level resets `xpToNext` to 100 and grants no equivalent prior temporary upgrades, creating inconsistent difficulty/progression.

### 7.12 Remaining frame-dependent effects

Core tank motion is dt-aware, but some recoil, flash, shockwave, particle scaling, and missile steering use fixed per-frame increments/lerps. The claim that all motion is normalized is too broad.

### 7.13 Timer/interval technical debt

The final “NEW CORE LOOP SYSTEM” monkey-patches `updatePhysics` and uses a one-second interval that directly subtracts from `lastSpawnTime`. It currently executes, unlike the original broken patch, but it duplicates responsibility and makes the effective spawn curve harder to reason about/test. Current code keeps timing in the main update path.

---

## 8. Recommended combined design

Do not replace the current project with the standalone HTML. Use current Phase 16 as the only foundation and port selected ideas as newly tested modules.

### Package A — UI, feedback, and battery polish (lowest risk)

Potential features:

- Home best-score/level/coins cards.
- Optional floating logo and visible build version.
- Directional damage arc.
- Two-entry kill feed.
- Low-health pulse.
- “Your Build” summary in Pause/results.
- Contextual one-time tips.
- Render gating while menu/pause is static.
- Shared effect-light pool and additional hot-path DOM/vector reuse.

Recommended: adopt most of this while keeping current safe-area/input protections.

### Package B — tactical combat expansion

Potential features:

- Bomber, Phantom, and Gunner as new level-gated enemies.
- Destructible cover with both player and enemy bullets able to damage it.
- Missile Pod as a capped temporary upgrade.
- Optional on-kill Adrenaline upgrade.
- Additional telegraphed boss attack patterns.

Recommended: add the three enemies and selected patterns, but route every kill through current centralized defeat handling and keep swept collision/caps.

### Package C — visual realm expansion

Potential features:

- Autumn Grove, Sakura Valley, Blood Moon Canyon, Neon Void.
- Celestial sky details.
- Ground vertex patches and conservative procedural detail/normal texture.
- Smooth realm transition.

Recommended first target: ten **bounded** realms with a controlled transition. Infinite streaming should remain a separate experimental mode until real Android profiling proves it safe.

### Package D — goals and optional challenge configuration

Potential features:

- Three daily contracts alongside, not replacing, the current deterministic Daily run.
- Expanded lifetime statistics and achievements.
- A configurable challenge screen for density/difficulty/starting level.

Recommended: make configuration reward-free in Custom Practice first. A reward-enabled difficulty mode requires anti-farming and reward scaling approval.

### Package E — optional meta additions

Potential features:

- Paint palettes layered over the three current tank designs.
- Second Wind with strict charges/cooldown/balance.
- One extra card choice as an expensive capped luxury.
- Carefully limited consumables.

Recommended: do not copy the alternative exponential economy or values. Any meta additions need a coin-income/cost review using current results data.

### Package F — audio ambience

Potential features:

- Engine hum tied to speed.
- Realm wind/birds/rumble/sparkle ambience.
- Optional generative music.

Recommended: engine/realm ambience can improve feel while respecting offline operation. Music conflicts with the previously approved “no music” direction and requires explicit reversal.

### Package G — world streaming experiment (highest risk)

Potential features:

- Infinite analytic terrain.
- Deterministic chunk revisits.
- Player-centered spawn rings.
- Dynamic camera and minimap for exploration.

Risks:

- conflicts with current walls and Ricochet;
- requires rethinking central beacon/objective locations;
- requires boss/Guardian arena logic;
- changes save size/position validation;
- introduces chunk lifecycle/destruction persistence questions;
- must be profiled on the Android 9 / 4 GB target;
- the supplied implementation's duplicate functions must not be reused.

Recommended: do not make the core game infinite in the next package. If approved, build a separate prototype/Exploration mode after lower-risk upgrades.

---

## 9. Features recommended not to copy

- The raw monolithic file or monkey-patch architecture.
- Cloudflare injected script or any external runtime request.
- Missing/unchecked PWA support as a replacement for Android.
- Any-orientation design.
- Flat subtractive armor.
- Unlimited uncapped card stacking.
- Unbounded combo economy.
- The supplied Armory prices/reward rates without current economy analysis.
- Repeatable named snapshots that survive death and preserve current permanent coins.
- Automatic quality reduction unless the user explicitly changes the approved manual-quality rule.
- Generative music unless the user explicitly reverses the no-music decision.
- Infinite world as a direct merge into Adventure without a prototype and device profiling.

---

## 10. Proposed final direction

A strong combined Tank Realms would be:

> The current stable portrait Android game, retaining its controls, three tank identities, safe saves, objectives, Guardians, modes, evolutions, mastery, accessibility, and offline APK foundation—enhanced with the alternative's strongest feedback UI, three unique enemies, selected boss patterns, richer skies/terrain, four additional realms, destructible cover, optional missile/engine ambience, daily contracts, and battery-saving rendering. Infinite streaming, music, named saves, and major economy changes remain separately optional and require explicit approval.

Implementation should be staged, with a new APK and regression report after each package. No combined “giant merge” is recommended.

---

## 11. Confirmation process

No feature from the alternative should be implemented until all decision rounds are complete.

Planned confirmation rounds:

1. Foundation: world scope, HUD, enemies, bosses, goals/modes, audio direction.
2. Combat details: cover, Missile Pod, camera, minimap, damage arc, kill feed, Second Wind.
3. Realm details: which four realms, transition style/duration, order, objectives/Guardians.
4. Meta/economy: paint palettes, card-choice upgrade, consumables, achievements/contracts, reward rules.
5. Save/platform/quality: named saves, PWA, manual vs Auto quality, portrait rule, offline requirements.
6. Exact balance: unlock levels, HP/damage, cooldowns, costs, rewards, caps, and quality budgets.
7. Final scope/order: package boundaries, test requirements, and APK checkpoints.

The implementation begins only after the user confirms every round.
