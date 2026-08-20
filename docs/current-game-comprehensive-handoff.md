# Tank Realms — Comprehensive Current-State Review and AI Handoff

**Documentation date:** 20 August 2026<br>
**Current gameplay milestone:** Phase 17 infinite-world foundation plus performance/ground/tutorial hotfix<br>
**Repository:** `misualpa54-gif/My-Tank-game`<br>
**Working/review branch:** `arena/01a01b73-my-tank-game`<br>
**Phase 15 gameplay baseline:** `eeed271f4bb25ad0bd5434b66d07517145426dc9`<br>
**Current source:** latest commit on the working/review branch<br>
**Current automated result:** 74 tests passing, 0 failures, 0 npm vulnerabilities<br>
**Current Android status:** successful offline portrait debug APK build

This document is intentionally detailed. It is meant to let another AI model, developer, designer, or reviewer understand the game without first reconstructing fifteen phases of conversation.

---

## 1. Current development level

Tank Realms is no longer a simple prototype. It is currently a **feature-complete gameplay beta/debug build** for the approved roadmap. It has:

- a complete playable combat loop;
- six procedural 3D biomes;
- three player tank designs;
- normal, specialist, and boss enemies;
- permanent Garage progression;
- temporary roguelite run builds;
- objectives, bosses, mastery, achievements, Daily Challenge, and five additional game modes;
- local save/Continue support;
- portrait mobile controls;
- procedural sound and haptics;
- selectable quality and accessibility settings;
- an offline Android wrapper and successful debug APK.

The gameplay roadmap is complete through Phase 15. Phase 16 adds startup recovery, Android stale-cache protection, WebGL fallback/context recovery, short-screen menu protection, record/save fixes, clean Guardian transitions, restored enemy cooldowns, and UI timer/race protections. The project is **not yet a final commercial release**. It still needs physical-device QA and, only after explicit approval, separate final-release work such as permanent signing, final icon and splash art, versioning, store artwork, and Play Store submission.

A useful status label is:

> **Gameplay-complete offline Android debug beta, ready for real-device QA; not yet release-signed or store-ready.**

---

## 2. Product concept and intended experience

Tank Realms is a portrait-oriented, offline, arcade sci-fi tank survival game with roguelite and permanent-progression systems.

The player controls one procedural 3D tank across a deterministic, unbounded streamed world. Movement is controlled with the lower thumb area, while firing is hold-based and auto-aimed. Enemies continuously enter a ring around the moving player. Destroying enemies grants:

- score;
- XP;
- permanent coins in reward-enabled modes;
- combo growth;
- tank mastery progress;
- objective and achievement progress.

Leveling pauses combat and presents three temporary upgrade choices. The normal Adventure flow moves through six realms. Each realm contains an objective and ends with a Realm Guardian. Defeating the Guardian unlocks the next biome.

The game mixes three layers of progression:

1. **In-run progression:** level, XP, temporary upgrades, evolutions, combo, health, score, and current realm.
2. **Permanent progression:** coins, owned tanks, five permanent upgrade tracks per tank, mastery, achievements, and records.
3. **Mode progression:** Adventure realms, Daily seed state, Boss Hunt guardian order, Last Stand survival pressure, or Realm Rush time/biome segment.

The product is intentionally:

- offline;
- single-player;
- portrait-only on Android;
- free of ads;
- free of real-money purchases;
- free of login/account requirements;
- free of gameplay network dependencies;
- free of external/CDN assets.

The primary deliverable is an installable Android APK, not a browser-only game. The browser build exists for development and preview, while Capacitor packages the same local game into Android.

---

## 3. Technology and project architecture

### Main technology

- **Rendering/gameplay:** Three.js `0.128.0`
- **Web build:** Vite `8.2.1`
- **Android wrapper:** Capacitor 8
- **Android package:** `com.thiltete.tankrealms`
- **App name:** Tank Realms
- **Publisher name:** Thiltete
- **Minimum Android:** API 28 / Android 9
- **Compile/target SDK:** 36
- **Android build Java:** Java 21
- **Orientation:** portrait locked

### Important source files

- `index.html` — all menus, HUD containers, overlays, modal screens, and accessibility labels.
- `assets/css/game.css` — full visual identity, portrait layout, safe areas, panels, cards, HUD, transitions, and responsive breakpoints.
- `assets/js/game.js` — the complete game simulation, Three.js scene, tanks, projectiles, enemies, progression, modes, saves, UI behavior, input, and audio.
- `src/main.js` — imports local Three.js and Capacitor/native bridge behavior.
- `vite.config.mjs` — builds an offline relative-path web bundle into `www`.
- `capacitor.config.json` — app identity, local web directory, Android scheme, black background, and mixed-content prohibition.
- `android/` — native Android project.
- `tests/` — runtime, save, performance, layout, offline-build, and Android configuration tests.

### Offline structure

Vite uses `base: './'` and outputs into `www`. Three.js and Capacitor code are bundled locally. There are no HTTP/CDN references in the game page. The Android manifest intentionally does not request `android.permission.INTERNET`.

### Android shell behavior

The native Android activity:

- locks portrait orientation;
- uses hardware acceleration;
- requires OpenGL ES 2.0 or later;
- enters immersive fullscreen;
- hides status and navigation bars;
- allows system bars to appear temporarily by edge swipe;
- keeps the screen awake during play;
- handles Android Back through the JavaScript bridge;
- pauses/saves when the app moves into the background;
- disables/clears only the WebView HTTP resource cache at launch to prevent stale APK assets, without clearing localStorage progression.

---

## 4. Overall visual identity

### Core visual language

The UI uses a consistent sci-fi glass-panel style:

- dark black/navy backgrounds;
- translucent panels with blur;
- thin low-opacity white borders;
- rounded corners;
- soft shadows;
- purple/blue gradients for primary actions;
- white text with muted translucent secondary text;
- icon-led labels using emoji/symbols;
- green for health/Continue;
- gold for coins and achievements;
- orange for warnings/retry/Daily accents;
- red for damage, enemy fire, and boss warnings;
- cyan, violet, green, orange, and blue for tank/projectile identity.

The default page font stack is:

`Segoe UI, Tahoma, Geneva, Verdana, sans-serif`

### Full-screen screen layer

Menu and modal screens are absolute full-screen overlays. Their standard background is a dark diagonal gradient:

- start: approximately `rgba(20,30,40,0.95)`;
- end: approximately `rgba(10,15,25,0.98)`.

They use a strong `backdrop-filter: blur(20px)`, so the live 3D world remains faintly visible behind the interface.

Visible/hidden screen transitions are implemented with a shared `.hidden` class:

- visible screen: normal opacity and scale;
- hidden screen: opacity `0`, pointer events disabled, scale `1.02`;
- transition: opacity and transform over `0.6s ease`.

This means navigation normally appears as a soft fade plus slight zoom rather than an abrupt DOM replacement.

### Primary buttons

Standard buttons are large pill shapes:

- white uppercase text;
- approximately 18px vertical and 50px horizontal padding before portrait compaction;
- 50px border radius;
- letter spacing around 3px;
- purple-to-violet gradient (`#667eea` to `#764ba2`);
- colored glow/shadow;
- hover movement upward on desktop preview.

Special button colors:

- Continue: green (`#22c55e` to `#15803d`);
- Garage: cyan/blue (`#0ea5e9` to `#2563eb`);
- Achievements: purple (`#a855f7` to `#6d28d9`);
- Daily Challenge: amber/orange (`#f59e0b` to `#ea580c`);
- Game Modes/Start Practice: violet/blue (`#7c3aed` to `#2563eb`);
- Retry/destructive-looking action: orange (`#f97316` to `#ea580c`).

---

## 5. Launch behavior and main menu

### What appears at launch

A branded dark-blue loading screen with a violet/cyan spinner appears first while the local JavaScript and Enchanted Forest are prepared. If loading takes more than eight seconds, a plain local retry link becomes available even if the main bundle did not initialize. Once the first frame is ready, the loader fades away.

The Three.js renderer initializes and loads the Enchanted Forest scene before menu interaction. No player tank or enemies are active on the main menu. The full-screen dark blurred menu sits over that rendered biome.

The camera begins with a 60-degree perspective and an elevated angled view. The renderer uses ACES filmic tone mapping, shadows, and the currently selected quality preset. It first requests antialiased high-performance WebGL; if a driver rejects that request, it retries with antialiasing disabled. Startup/runtime failures show an actionable recovery panel instead of leaving a silent blank screen. Reset Unfinished Run removes only the active-run key and preserves permanent progress.

### Exact main-menu hierarchy

The main menu is centered vertically and horizontally. From top to bottom it contains:

1. Large title: **“⚔️ TANK REALMS”**
2. Subtitle: **“Conquer Every Biome”**
3. **Continue [Mode Name]** button — shown only when a living reward-mode save exists.
4. **Garage** button.
5. **Achievements** button.
6. **Daily Challenge** button.
7. **Game Modes** button.
8. **Start Adventure** button.
9. Small two-line instruction text:
   - “Lower left: Move • Lower right: Hold to fire”
   - “Level up to unlock new realms and abilities”

### Continue button behavior

Continue is not merely disabled when no save exists; it is visually removed with `display: none`. When a valid save is loaded, it receives the `available` class and becomes the top button.

Its label identifies the save type, for example:

- Continue Adventure
- Continue Daily Challenge
- Continue Boss Hunt
- Continue Last Stand
- Continue Realm Rush
- Continue One-Tank Challenge

Practice is never offered through Continue because Practice does not create an active save.

### New-run overwrite protection

If a living reward-mode save exists and the player chooses a new Adventure, Daily, Boss Hunt, Last Stand, Realm Rush, or One-Tank run, a confirmation overlay appears:

- title: **Replace Run?**
- text names the requested mode;
- buttons:
  1. Continue Existing
  2. Start New Run
  3. Cancel

Cancel and Android Back preserve the original save.

Custom Practice is a special exception: it can start without replacing the saved reward-mode run. The preserved run remains available after Practice.

---

## 6. Main-menu destination screens

### 6.1 Garage screen

The Garage opens only from the menu. Opening it fades out the start screen and fades in a scrollable glass panel.

Header layout:

- left: “Garage” and explanatory subtitle;
- right: permanent coin balance in a gold coin capsule.

The subtitle states that tanks have equal base stats, separate upgrades, and that new adventures use the latest setup.

Each tank appears as a card containing:

- a small CSS-built tank preview using its body/accent colors;
- tank name;
- visual description;
- Unlock, Select, or Equipped action;
- per-tank mastery level and progress bar;
- five permanent upgrade rows;
- current tier, stat value, and next purchase cost.

Locked cards are visually distinct. Owned but unequipped tanks show Select. The active tank shows a disabled Equipped button.

Garage purchases and tank changes are rejected by logic whenever the game is not in the menu phase. A living run keeps the tank and permanent-upgrade snapshot it had at run start; changing the Garage later cannot alter that existing run.

### 6.2 Achievements screen

The Achievements screen uses a scrollable glass panel with:

- title and subtitle on the left;
- current coin balance on the right;
- a vertical list of ten cards;
- Back to Menu button.

Each achievement card is a three-column layout:

1. trophy when completed or lock when incomplete;
2. name and description;
3. coin reward or “Complete”.

Completed cards gain gold border/background emphasis.

### 6.3 Daily Challenge screen

The Daily panel is centered and shows:

- “Offline Daily Challenge” eyebrow label;
- “Today’s Challenge” heading;
- local date in `YYYY-MM-DD` form;
- orange-highlighted modifier card with modifier name and description;
- two-column record grid:
  - best score;
  - best level;
  - attempts;
  - starting biome;
- explanation that enemy order and upgrades are fixed and there is no internet/global leaderboard;
- orange Start Daily button;
- Back to Menu button.

### 6.4 Game Modes screen

Game Modes opens a scrollable glass panel titled **Choose a Mode**. It contains five large horizontal cards.

Each card uses three visual areas:

1. icon on the left;
2. mode name plus smaller description in the center;
3. short uppercase rule label on the right.

Cards in order:

1. **👑 Boss Hunt** — right label “6 guardians”
2. **⚔ Last Stand** — “Endless”
3. **⏱ Realm Rush** — “3 minutes”
4. **🛡 One-Tank Challenge** — “Equal base stats”
5. **🧪 Custom Practice** — “Custom setup”

Cards use a subtle violet-to-blue translucent background and brighten their border/background when pressed or hovered.

### 6.5 Custom Practice setup

Selecting Custom Practice opens a second setup screen rather than starting immediately.

It contains:

- “Reward-Free Training” eyebrow;
- Custom Practice heading;
- explicit statement that Practice does not change coins, records, mastery, achievements, or the saved run;
- biome dropdown with all six biomes;
- numeric starting-level input, clamped from 1 to 30;
- three-column checkbox grid containing 12 normal spawnable enemy types;
- validation message if no enemy is selected;
- Start Practice;
- Back to Modes.

At least one enemy type must remain selected.

---

## 7. Screen flow and transitions

### Starting a run

When a new run is approved:

1. The old combat scene is explicitly cleared and disposed.
2. A previous active save is removed, except when entering Practice.
3. Mode state, run stats, XP, upgrades, combo, tank snapshot, and timers are initialized.
4. The selected procedural tank is created.
5. The starting biome is loaded.
6. All menu/modal screens fade out.
7. The HUD, quick controls, and pause button become available.
8. A living save is written for save-enabled modes.
9. Boss Hunt immediately queues/spawns the first Guardian.

### Pause and Settings

All tutorial and contextual-tip systems have been removed completely by user request. New runs enter gameplay directly.

Pressing Pause:

- changes the game phase to paused;
- clears all active touch/keyboard input;
- shows the Pause overlay;
- retains the pause button and quick controls unless Settings is open;
- saves the active run.

Pause overlay buttons:

- Resume
- Quit to Menu

Opening Settings while playing first pauses the game. Closing Settings returns to the paused state rather than immediately resuming combat.

### App/background transition

If the browser loses visibility or the Android app backgrounds:

- active play pauses;
- input is cleared;
- page hide writes profile and active-run data.

### Defeat/completion transition

When player health reaches zero, or when a finite mode completes:

- combat stops;
- active input is cleared;
- active upgrade dialogs close;
- boss/objective/mode HUDs hide;
- result statistics are rendered;
- reward-enabled profile progress is finalized;
- the active save is removed, except Practice preserves any older reward-mode save;
- the results overlay fades in.

Result titles vary:

- normal death: **💀 Defeated**
- completed Boss Hunt: **🏆 Hunt Complete**
- expired Realm Rush timer: **⏱ Rush Complete**

Results list:

- score and level;
- run coins;
- enemies destroyed;
- best combo;
- survival time;
- tank name;
- temporary upgrades selected;
- record messages;
- Try Again;
- Garage;
- Main Menu.

---

## 8. Portrait gameplay HUD

### Top three-panel HUD

The portrait HUD is a three-column grid at the top of the screen.

#### Left panel

- trophy icon and current score;
- coin icon and permanent coin balance;
- speed percentage;
- damage percentage.

#### Center panel

- purple gradient Level badge;
- horizontal XP bar below it.

#### Right panel

- Health label;
- health bar;
- armor value;
- regeneration per second.

The panels are translucent black glass with thin white borders, blur, rounded corners, and shadows.

### Health-bar color behavior

- 60% or more: green gradient;
- below 60%: yellow gradient;
- below 30%: red gradient.

### Quick controls and pause row

Below the main HUD:

- upper-left row: Settings, Sound, Camera, Assist icon buttons;
- upper-right: Pause button.

Quick icon states change visually:

- sound off/on: 🔇 / 🔊
- Follow/Wide camera: 📷 / 🎥
- assist off/on: ◌ / 🎯

### Biome indicator

When a biome loads, a centered dark capsule displays the biome name. It fades in and automatically fades out after approximately three seconds.

### Mode HUD

A violet/blue capsule appears in every non-Adventure mode. It shows:

- Daily: modifier name;
- Boss Hunt: Guardian number out of six;
- Last Stand: threat tier and survival prompt;
- Realm Rush: remaining time;
- One-Tank: permanent stats disabled;
- Practice: current level and rewards disabled.

The combo and objective/boss panels move lower when this capsule is visible.

### Combo indicator

The combo capsule appears only from the second linked kill onward. It displays:

- kill-chain count;
- current score/coin multiplier.

### Objective HUD

A center-top glass panel shows:

- “Realm Objective” label;
- objective name;
- objective description;
- progress bar;
- numeric progress.

Defend Beacon additionally shows remaining seconds and beacon health.

### Boss HUD and warning

When a Guardian approaches:

- a large warning overlay appears with “⚠ Realm Guardian” and the boss name;
- boss warning sound and heavy haptic trigger;
- warning disappears after roughly 2.2 seconds.

During the fight, a persistent boss panel displays:

- Realm Guardian label;
- Guardian name;
- red/orange health bar;
- numeric current/max health.

### Temporary notices

- Upgrade/unlock/objective notifications appear near the upper-center in a purple glass gradient and use a scale/fade animation.
- A newly encountered enemy type displays a dark lower-screen introduction card with its name and short role description.
- Kills create floating green score/coin text projected from the 3D death location into screen coordinates.
- Red damage and green healing overlays briefly tint the screen edges.

---

## 9. Controls and input behavior

### Touch layout

The top 30% of the visual viewport is reserved for HUD/status use and cannot start movement or firing.

The lower 70% is split into two invisible halves.

Default Standard layout:

- lower-left: movement;
- lower-right: hold to fire.

Left-handed layout:

- lower-right: movement;
- lower-left: hold to fire.

There are deliberately no permanent visible movement/fire zones.

### Floating movement control

Touching the movement half creates a floating joystick centered under the thumb:

- translucent 120px base;
- bright 50px knob;
- movement radius capped at 50px;
- input normalized from -1 to 1.

The joystick disappears on touch end or touch cancel.

### Firing control

Touching and holding the fire half sets firing active. The first firing finger remains authoritative until released; another finger cannot replace it and accidentally latch firing.

Firing repeats according to the current fire-rate stat. It does not require a visible button.

### Auto-aim

The turret selects the nearest living enemy, with two biases:

- Guardians count as substantially closer so they receive priority over minions;
- the current target receives a sticky distance advantage to reduce rapid target switching.

If no enemy exists, movement direction controls turret orientation. Holding fire can still shoot in the current turret direction.

Control Assist does not add manual aim. It increases turret interpolation speed, making aim track targets more quickly and feel stickier.

### Phase Dash gesture

If Phase Dash is owned, double-tapping the movement zone within about 320ms dashes six world units. It has a four-second cooldown and clamps the destination inside the arena.

### Desktop controls

Desktop preview/testing retains:

- WASD movement;
- Space hold to fire.

### Input safety

Input is cleared on:

- touch cancel;
- window blur;
- pause;
- app backgrounding;
- quit;
- game over.

---

## 10. Core combat model

### Default player statistics

A new equal-base tank begins with:

- maximum health: 100;
- movement stat: 100%;
- damage stat: 100%;
- fire-rate stat: 100%;
- armor: 0;
- regeneration: 0;
- one projectile;
- no special projectile or defensive abilities.

Permanent Garage upgrades are applied to these values at run start unless the mode disables them.

### World and camera

- The world uses deterministic analytic terrain and 48-unit streamed chunks.
- Low/Medium use one continuous 240-unit rebaked ground surface; High expands it to 336 units and adds a decorative chunk ring. Continuous ground removes square tile seams.
- There are no arena walls or gameplay boundary; only a ±1,000,000 safety clamp protects impossible/corrupt coordinates.
- Enemies and Guardians spawn around the current player rather than world origin.
- Major streamed cover blocks/slides player movement and steers enemies.
- Follow camera offset: approximately `(0, 22, 28)` from player.
- Wide camera offset: approximately `(0, 28, 36)`.
- Camera smoothly follows and looks slightly forward of the player.

### Movement

Base configured movement speed is 18 world units per second before smoothing/stat multipliers. Actual acceleration/deceleration uses a 60-FPS-calibrated retention curve. Automated tests confirm one-second travel is the same at 30, 60, and 120 FPS.

Tanks:

- smoothly rotate toward movement direction;
- tilt during acceleration/turning;
- sample terrain height and normal;
- remain slightly above terrain to prevent sinking;
- visually lean with terrain/suspension behavior.

Turbo Tracks adds 15% movement speed after five seconds without damage.

### Player firing

Base weapon values:

- base damage: 22;
- projectile speed: 60 world units/second;
- base interval: 0.25 seconds;
- projectile lifetime: three seconds.

Final fire interval is:

`0.25 × (100 ÷ effective fire-rate percentage)`

The Last Stand temporary upgrade increases effective fire rate by 30% when health is at or below 25%.

Each shot includes:

- barrel recoil and return;
- muzzle sphere/ring flash;
- optional point light depending on quality;
- procedural firing sound;
- optional light haptic for player fire.

### Auto-target priority

The system finds the best target every update. Guardians are weighted by multiplying their apparent distance by 0.55. The existing target is weighted by 0.75 to discourage jitter.

### Projectile visuals

Every projectile consists of:

- white core;
- colored inner glow;
- larger translucent outer glow;
- trailing cylinder;
- optional quality-controlled point light.

Player projectile identity:

- Vanguard: cyan spherical orb;
- Ember Warden: orange octahedral bolt;
- Azure Bastion: violet tetrahedral crystal.

Enemy plasma is normally red. Medic plasma is green. Mastery level 5 gives the player a brighter white-accented projectile trail.

### Projectile collision

Projectiles use swept segment collision, not endpoint-only collision. The complete path traveled in a frame is checked against:

- enemy tanks;
- player tank;
- nearby streamed tree/rock/crystal cylinders.

There are no arena walls. Ricochet plasma reflects from hard rocks/crystal pillars. This prevents a six-unit projectile step during a 0.1-second frame stall from tunneling through a target or streamed cover.

Player special projectiles support:

- per-enemy hit history;
- piercing counters;
- wall ricochet counters;
- homing steering;
- critical state;
- explosive radius damage.

### Armor and defensive damage

Player armor uses diminishing returns:

`actual damage = max(1, incoming damage × 75 ÷ (75 + armor))`

Examples for 30 incoming damage:

- armor 0 → 30;
- armor 10 → 26.47;
- armor 25 → 22.5;
- armor 40 → 19.57;
- armor 50 → 18.

Additional defensive order:

1. armor formula;
2. Fortress Protocol multiplies remaining damage by 0.8;
3. Reactive Armor can multiply one hit by 0.55, then waits eight seconds;
4. Emergency Shield can halve a hit that would push health to/below 25%, then waits 20 seconds.

Any real damage resets the “time since damage” timer used by Turbo Tracks and can fail the Untouchable objective.

### Regeneration and healing

Regeneration applies once per second while below max health. Other repair sources include:

- Repair Burst every fifth kill;
- 15% repair on objective completion;
- 20% repair between Boss Hunt Guardians;
- max-health upgrade increases that also add the gained max health to current health;
- Guardian/Medic-specific healing behavior.

---

## 11. Score, XP, coins, and combo

### XP

Normal enemy XP is half its base score value. Guardians use explicit controlled XP rewards.

XP required starts at 100 and grows by `floor(previous × 1.4)` after each level.

Early thresholds:

| Transition | XP required |
|---|---:|
| Level 1 → 2 | 100 |
| 2 → 3 | 140 |
| 3 → 4 | 196 |
| 4 → 5 | 274 |
| 5 → 6 | 383 |
| 6 → 7 | 536 |
| 7 → 8 | 750 |
| 8 → 9 | 1,050 |
| 9 → 10 | 1,470 |
| 10 → 11 | 2,058 |

If a large reward crosses multiple levels, multiple upgrade choices are queued and shown one after another.

### Combo

- Combo link window: three seconds.
- First kill: ×1.0.
- Each linked kill after the first: +0.2.
- Maximum: ×3.0.
- ×3.0 is reached at 11 linked kills.
- Score and kill coins are multiplied.
- XP is not multiplied.
- Combo resets when the timer expires.

### Score

`score reward = floor(enemy base points × combo multiplier)`

### Kill coins

`base kill coins = max(1, floor(enemy points ÷ 10))`

`final kill coins = floor(base kill coins × combo multiplier)`

Daily Double Combo Coins doubles that final value. Practice always returns zero permanent coins.

Guardian kills also receive the normal combo-adjusted kill coins plus the Guardian's separate bonus coin reward.

### Run stats

Each run tracks:

- kills;
- highest combo;
- coins earned;
- elapsed active seconds;
- total damage taken;
- ordered temporary-upgrade history.

---

## 12. Level-up choice system

Every level gained queues one temporary upgrade choice. Combat pauses completely and a high-priority glass modal appears.

The screen contains:

- “Choose Upgrade” heading;
- reminder that battle is paused;
- up to three unique purple-gradient cards.

Each card shows:

- icon and name;
- effect description;
- next tier and maximum tier.

Unavailable, under-level, or maxed upgrades are excluded. If everything is maxed, the game displays an all-upgrades-maxed notification and resumes.

The selected upgrade:

- is immediately applied;
- updates max/current health safely;
- can unlock an evolution;
- triggers sound and haptic feedback;
- is recorded in save/results;
- resumes combat or opens the next queued choice.

### Temporary upgrade table

| Upgrade | Available | Max tiers | Per-tier/current effect |
|---|---:|---:|---|
| Engine Boost | Level 2 | 7 | +15% speed |
| Plasma Power | Level 2 | 10 | +20% damage |
| Rapid Loader | Level 2 | 8 | +15% fire rate |
| Reinforced Hull | Level 2 | 10 | +20 max HP |
| Repair Nanites | Level 4 | 10 | +1 HP/s regeneration |
| Armor Plating | Level 5 | 8 | +5 armor |
| Lightweight Frame | Level 5 | 1 | +25% speed, −20 max HP; HP floor protected |
| Turbo Tracks | Level 5 | 1 | +15% speed after 5s without damage |
| Piercing Plasma | Level 6 | 2 | +1 enemy penetration per tier |
| Critical Core | Level 6 | 5 | +5% critical chance per tier |
| Repair Burst | Level 6 | 3 | every fifth kill repairs 3% max HP per tier |
| Phase Dash | Level 6 | 1 | double-tap movement zone, 6-unit dash, 4s cooldown |
| Explosive Impact | Level 7 | 3 | +15% area damage per tier, radius 5 |
| Emergency Shield | Level 7 | 1 | dangerous hit ×0.5, 20s cooldown |
| Last Stand | Level 7 | 1 | +30% fire rate at/below 25% HP |
| Ricochet | Level 8 | 2 | one wall bounce per tier |
| Homing Guidance | Level 8 | 3 | +0.08 steering strength per tier |
| Reactive Armor | Level 8 | 1 | one hit ×0.55, 8s cooldown |
| Triple Shot | Level 10 | 1 | three projectiles |

### Evolutions

Evolutions automatically activate when requirements are reached:

| Evolution | Requirements | Final behavior |
|---|---|---|
| Plasma Barrage | Plasma Power tier 3 + Triple Shot | fires five projectiles |
| Fortress Protocol | Armor tier 4 + Reinforced Hull tier 4 | +30 max HP, +5 armor, then 20% less post-armor damage |
| Mobile Repair Unit | Speed tier 3 + Regen tier 3 | +2 additional HP/s |
| Inferno Cannon | Fire Rate tier 3 + Explosive tier 2 | explosion radius 7 and +20% extra area damage |
| Railgun Core | Piercing tier 2 + Critical tier 3 | +2 pierces and critical multiplier increases from ×2 to ×2.5 |

Evolutions are derived again from sanitized upgrade tiers when loading a save, rather than trusting a forged evolution list.

---

## 13. Enemy roster and progression

### Normal unlock sequence

The random roster expands with player/enemy level:

- Level 1: Scout, Soldier
- Level 3: Heavy
- Level 4: Sniper
- Level 5: Medic
- Level 7: Berserker
- Level 8: Shield Tank
- Level 10: Artillery
- Level 11: Mine Layer
- Level 13: Commander
- Level 14: Drone Carrier
- Level 16: Reflector

Attack Drones are normally spawned only by Drone Carriers.

### Enemy stat table

| Enemy | HP | Speed factor | Damage | Base score | Main role |
|---|---:|---:|---:|---:|---|
| Scout | 25 | 1.50 | 8 | 50 | fast, fragile |
| Soldier | 50 | 1.00 | 12 | 100 | balanced ranged fighter |
| Heavy | 120 | 0.50 | 25 | 200 | slow, durable, high damage |
| Sniper | 35 | 0.60 | 30 | 175 | keeps long range, long barrel |
| Medic | 60 | 0.80 | 5 | 150 | retreats and heals allies for 8 HP |
| Berserker | 80 | 1.30 | 18 | 250 | charges and fires aggressively at close range |
| Shield Tank | 110 | 0.65 | 14 | 225 | front damage reduced to 25% |
| Artillery | 55 | 0.45 | 22 | 260 | distant telegraphed area strike |
| Mine Layer | 70 | 0.80 | 16 | 230 | deploys proximity mines |
| Commander | 95 | 0.75 | 12 | 300 | buffs nearby allies |
| Drone Carrier | 130 | 0.55 | 10 | 325 | deploys two attack drones |
| Attack Drone | 14 | 1.80 | 5 | 25 | small, fast support unit |
| Reflector | 85 | 0.70 | 15 | 290 | periodic projectile-absorbing shield |

### Basic AI behaviors

- Scout, Soldier, and Heavy approach until approximately 18 units away, aim, and fire with a frame-rate-normalized baseline chance of `0.012 × configured fire weight` per 60 Hz reference update. Their fire weights are 0.60, 0.40, and 0.25 respectively.
- Sniper retreats inside roughly 25 units, approaches beyond 30, and uses its own normalized 0.008 reference firing chance.
- Berserker continuously advances and uses a normalized 0.025 reference firing chance while inside 18 units.
- Medic looks for a wounded ally, heals every two seconds, and retreats when the player is close; its current role loop does not use normal shooting.
- Artillery tries to maintain approximately 26–34 units and creates a strike every four seconds.
- Shield, Mine Layer, Commander, Drone Carrier, and Reflector use a normalized 0.0045 reference shooting chance; Drones use 0.01.
- Mine Layer places a mine every 4.5 seconds.
- Drone Carrier deploys two drones every six seconds.

### Strategic mechanics

#### Shield Tank

A visible large blue front plate indicates direction. A projectile entering from the front receives only 25% of normal damage. Side/rear hits remain normal.

#### Artillery

Creates a rotating red ground ring centered on the player's position:

- warning time: 1.5 seconds;
- radius: 4.5;
- then damages the player if still inside.

#### Mines

- dark metal body with red light;
- arm after 0.8 seconds;
- trigger radius 2.6;
- expire after 15 seconds;
- global cap: eight mines.

#### Commander

Shows a rotating red aura. Non-boss allies within 16 units receive:

- +18% speed;
- +20% damage.

#### Drone Carrier

Spawns two Attack Drones while respecting the 12-enemy global cap.

#### Reflector

Shows a violet wireframe sphere. The shield is active for the first two seconds of every five-second cycle and completely absorbs incoming player plasma during that interval.

### Spawn safety

Normal Adventure/Daily/One-Tank spawning uses:

- `base interval = max(1.5, 3.5 − level × 0.15)`;
- `difficulty multiplier = 1 + level × 0.1`;
- `final interval = base interval ÷ (1 + 0.1 × difficulty multiplier)`;
- maximum enemies = `min(12, 3 + level)`;
- normal spawning pauses during a Guardian;
- if a Guardian is pending but an objective is active, spawning continues until objective resolution.

Enemies spawn at least 25 world units away from the player.

---

## 14. Realms and environment art direction

Every environment is generated in Three.js from geometry, colors, lights, terrain, particles, and instanced decorations. No downloaded texture/art pack is required.

### 1. Enchanted Forest

- blue-to-green sky;
- dark green fog, approximately 30–120 range;
- brown earth and green grass;
- 50 tree instances;
- 30 rocks;
- 250 grass blades;
- drifting leaf particles;
- moderately rolling terrain.

This is the initial menu background and normal starting Adventure biome.

### 2. Frozen Tundra

- pale blue/white sky;
- icy pale fog, approximately 25–100;
- snow-colored ground;
- sparse trees;
- more rocks;
- frozen-looking water surface;
- snow particles;
- gentler terrain.

### 3. Volcanic Wasteland

- black/red sky;
- close dark brown fog, approximately 20–90;
- black ground;
- sparse dead vegetation;
- heavy rock density;
- lava features;
- terrain spikes;
- rising ember particles;
- strongest rough terrain after desert.

### 4. Golden Desert

- blue-to-gold sky;
- long-view golden fog, approximately 40–150;
- golden sand ground;
- sparse trees/vegetation;
- dunes;
- blowing sand particles;
- highest terrain amplitude.

### 5. Mystic Swamp

- dark teal-to-olive sky;
- close green fog, approximately 15–70;
- dark green ground;
- dense trees and grass;
- swamp water;
- floating fireflies;
- relatively flat terrain.

### 6. Crystal Caverns

- very dark navy/purple sky;
- close deep-blue fog, approximately 20–80;
- dark blue ground;
- no trees or grass;
- 50 rocks;
- glowing crystal formations;
- cyan sparkles;
- uneven cavern-like terrain.

### Environmental behavior

- Terrain is analytic at every coordinate and rendered through one continuous player-centered ground surface over 48-unit streamed chunks.
- The run seed, chunk coordinates, and realm deterministically regenerate cover/scenery.
- Gameplay chunks stream in a 5×5 neighborhood; High adds a decorative outer ring.
- Tanks sample terrain height and normals continuously at any world position.
- Water vertices animate as waves and lava opacity pulses.
- Ambient particles follow/wrap around the moving player and use instanced meshes.
- Lights and optional effect lights follow the selected quality preset.
- Trees, grass, rocks, crystals, and ambient particles use chunk-local instancing.

---

## 15. Adventure realm progression and objectives

Adventure, Daily Challenge, and One-Tank Challenge use the normal realm flow.

### Realm timing

For realm progress index `R`:

- objective becomes eligible at level `R × 3 + 2`;
- Guardian becomes pending at level `(R + 1) × 3`.

Examples:

| Realm progress | Objective level | Guardian level |
|---:|---:|---:|
| Forest / 0 | 2 | 3 |
| Frozen / 1 | 5 | 6 |
| Volcanic / 2 | 8 | 9 |
| Desert / 3 | 11 | 12 |
| Swamp / 4 | 14 | 15 |
| Crystal / 5 | 17 | 18 |

If the player reaches the Guardian threshold while an objective remains active, the Guardian waits. The objective can succeed or fail; either resolution allows the queued Guardian to enter.

After Crystal Caverns, the realm sequence wraps back to Forest while realm and objective cycle counters continue. Adventure is therefore endless until player defeat; it does not stop after one six-biome tour.

### Objective sequence

| Cycle slot | Objective | Requirement | Reward |
|---:|---|---|---:|
| 1 | Priority Target | destroy a gold-ringed Heavy | 75 coins |
| 2 | Hold the Line | survive 30 seconds | 100 |
| 3 | Cut the Supply | destroy 3 Medics | 125 |
| 4 | Combo Trial | reach a 5-kill combo | 150 |
| 5 | Defend the Beacon | keep central beacon alive for 30 seconds | 175 |
| 6 | Untouchable | take no damage for 25 seconds | 200 |
| 7 | Score Assault | earn 1,000 score during objective | 225 |

The sequence repeats. Daily Challenge rotates the starting objective using the daily seed.

### Objective visuals and rules

- Priority Target adds a gold ring marker to a Heavy and recreates it after Continue if needed.
- Defend Beacon creates a dark cylindrical base with a glowing gold octahedral core in the arena center.
- Enemies within eight units of the center drain beacon health at `3 × nearby enemy count` per second.
- Untouchable fails immediately when any player damage is recorded.
- Completion grants the listed permanent coins and repairs 15% max HP.
- Failure does not award coins but allows progression to continue.

---

## 16. Realm Guardians

Each biome has one oversized procedural boss. Guardians receive:

- enlarged version of the normal tank construction;
- rotating red ground ring;
- emissive red warning beacon;
- larger collision volume;
- dedicated warning overlay;
- persistent boss health HUD;
- deterministic attack cooldown rather than random per-frame firing.

| Biome | Guardian | HP | Damage | Score | XP | Bonus coins | Behavior |
|---|---|---:|---:|---:|---:|---:|---|
| Forest | Rootbound Guardian | 500 | 14 | 800 | 180 | 100 | approaches, triple spread, summons two Scouts |
| Tundra | Frozen Fortress | 650 | 22 | 1,000 | 220 | slow approach, heavy 1.35× cannon at speed 46 |
| Volcanic | Volcanic Behemoth | 700 | 18 | 1,200 | 260 | aggressive approach, five-shot spread |
| Desert | Desert Mirage | 560 | 16 | 1,400 | 300 | approaches/retreats/strafes, fast narrow triple shot, Scout summon |
| Swamp | Swamp Colossus | 780 | 17 | 1,600 | 340 | approaches, triple shot, heals 2.5% max HP, summons Medic |
| Crystal | Crystal Core | 950 | 20 | 2,000 | 400 | mostly stationary, seven-shot spread |

Guardians spawn roughly 36 units from center. Normal automatic spawning pauses during the fight, but Guardian-created minions are allowed and still respect the 12-enemy cap.

A flawless Guardian is detected by comparing total run damage at entry and defeat.

---

## 17. Player tanks and Garage economy

All three tanks share identical unupgraded gameplay stats. Their differences are visual identity, unlock cost, projectile geometry/color, mastery cosmetics, and their own independent permanent upgrade tiers.

### Verdant Vanguard

- cost: free;
- green body (`#22c55e`);
- light green accent;
- classic procedural tank silhouette;
- cyan spherical plasma orb.

### Ember Warden

- unlock: 750 coins;
- orange body (`#f97316`);
- yellow accent;
- additional angular side armor and turret fins;
- orange octahedral bolt projectile.

### Azure Bastion

- unlock: 1,800 coins;
- blue body (`#3b82f6`);
- violet accent;
- extra front shield styling and twin turret pods;
- violet tetrahedral crystal projectile.

The visual armor on Ember/Azure does not alter hitboxes or base stats.

### Shared procedural tank construction

Tank meshes include:

- box-shaped hull base and upper plate;
- sloped front armor;
- dark left/right tracks;
- track guards;
- multiple cylindrical wheels;
- rotating turret group;
- cylindrical turret ring;
- box turret body;
- gun mantlet;
- metal cannon barrel and muzzle brake;
- commander hatch;
- antenna on player/Sniper tanks;
- dynamic recoil, turning, terrain tilt, and damage flash.

Enemies use the same construction with color/scale/role-specific additions. Snipers and Artillery have longer barrels. Medics have a white cross. Strategic enemies have their role-specific visible equipment.

### Permanent upgrades

Each tank separately owns five tracks, each capped at tier 5.

| Track | Effect/tier | Tier costs | Total |
|---|---:|---|---:|
| Hull | +5 max HP | 120, 240, 360, 480, 600 | 1,800 |
| Damage | +4% | 150, 300, 450, 600, 750 | 2,250 |
| Speed | +3% | 140, 280, 420, 560, 700 | 2,100 |
| Armor | +2 | 130, 260, 390, 520, 650 | 1,950 |
| Fire rate | +3% | 160, 320, 480, 640, 800 | 2,400 |

Full permanent tuning costs 10,500 coins per tank.

Daily and One-Tank runs ignore all permanent tiers. Practice and other reward modes use the selected tank's normal Garage build.

---

## 18. Tank mastery cosmetics

Every tank has an independent mastery record:

- kills;
- total score;
- Guardians defeated;
- highest level;
- highest combo;
- result-ending runs.

Mastery points:

`kills + floor(total score ÷ 100) + Guardians × 25 + highest level × 5 + highest combo × 3 + finished runs × 20`

| Mastery level | Points | Cosmetic |
|---:|---:|---|
| 1 | 0 | base appearance |
| 2 | 100 | accent hull stripes |
| 3 | 300 | colored underglow ring |
| 4 | 700 | antenna beacon |
| 5 | 1,200 | bright projectile trail |
| 6 | 2,000 | gold crown / MAX state |

Cosmetics do not change stats, hitboxes, or difficulty. The mastery level is snapshotted when a run starts so the 3D tank does not mutate resources mid-run.

Current code treats any reward-mode run that reaches the results screen as a finished run for mastery, including defeat; Practice is excluded.

---

## 19. Achievements

Achievements are offline, local, one-time rewards.

| Achievement | Requirement | Coins |
|---|---|---:|
| Tank Hunter | 100 lifetime kills | 200 |
| Realm Veteran | reach level 10 | 150 |
| Realm Legend | reach level 20 | 300 |
| Combo Master | reach ×3 combo / 11-chain | 150 |
| Untouchable Guardian | flawless Guardian | 300 |
| Full Garage | own all three tanks | 500 |
| Fully Tuned | max all five tracks on one tank | 500 |
| Triple Tour | finish a reward-mode run with all three tanks | 250 |
| Realm Explorer | visit all six biomes | 400 |
| Supply Breaker | destroy 10 Medics | 200 |

Total possible one-time achievement coins: 2,950.

Achievement checks happen during relevant reward events and saves. Already-unlocked achievements cannot pay twice. Practice does not modify the required lifetime statistics.

---

## 20. Daily Challenge

Daily Challenge is deterministic and offline.

### Seed

The phone's local date becomes `YYYY-MM-DD`, then is hashed with the namespace `tank-realms-<date>`.

The seed controls:

- modifier;
- starting biome;
- biome rotation;
- enemy selection sequence;
- temporary-upgrade shuffle sequence;
- objective rotation.

Separate indexes are stored for enemy and upgrade sequences, so unrelated visual randomness, FPS, sound, or quality does not reroll gameplay.

### Modifiers

| Modifier | Effect |
|---|---|
| Scout Swarm | deterministic sequence strongly favors Scouts |
| Heavy Armor Day | non-boss enemies start with 35% more HP |
| No Regeneration | Repair Nanites removed from choice pool |
| Double Combo Coins | final combo-adjusted kill coins doubled |
| Sniper Realm | Snipers favored after opening levels |
| Fast Enemy Day | non-boss movement speed +20% |

### Fairness and records

- Selected tank appearance/mastery cosmetics remain.
- Permanent tank stats are disabled.
- Temporary upgrades, objectives, Guardians, score, coins, mastery, and achievements remain.
- Local records store date, best score, best level, and attempts.
- Records are sanitized and restricted to the latest 30 dates.
- There is no online leaderboard or clock server.
- Try Again repeats the same date.
- Continue preserves deterministic sequence indexes.

---

## 21. Additional game modes

### 21.1 Boss Hunt

- Starts immediately with Rootbound Guardian.
- Battles all six Guardians in biome order.
- No normal automatic waves.
- No Realm Objectives.
- Guardian-created Scouts/Medics remain part of boss behavior.
- Existing Guardian HP, damage, score, XP, bonus coins, and attacks are reused unchanged.
- Remaining minions are cleared after their Guardian dies.
- Player repairs 20% max HP between Guardians.
- Temporary upgrades remain available from boss/minion XP.
- Mode HUD shows “Guardian N of 6”.
- Defeating Crystal Core ends with Hunt Complete.
- Guardian index and current boss state support Continue.

### 21.2 Last Stand

- Endless until player defeat.
- No Realm Objective or Guardian gate.
- Spawn interval starts at 2.5 seconds.
- Interval decreases by 0.014 seconds per survived second.
- Minimum interval is 0.55 seconds.
- Enemy cap starts at four.
- Cap increases by one every 20 seconds to the global maximum 12.
- Effective enemy unlock level increases every 20 seconds even if player level is lower.
- HUD threat tier increases every 30 seconds.
- Permanent upgrades, temporary upgrades, rewards, mastery, and achievements remain.
- Elapsed time supports Continue through normal run stats.

### 21.3 Realm Rush

- Fixed length: 180 seconds.
- Goal: maximize score and level.
- Six biome segments of 30 seconds each.
- Starts Forest, then Tundra, Volcanic, Desert, Swamp, Crystal.
- Normal spawn interval is 75% of the Adventure interval, with 0.8-second minimum.
- Cap is `min(12, 4 + level)`.
- No objectives or Guardians.
- HUD displays countdown.
- Timer and segment survive Continue.
- Expiration gives Rush Complete, not Defeated.

### 21.4 One-Tank Challenge

- Uses Adventure objective/Guardian flow.
- Selected tank appearance and mastery cosmetics remain.
- Permanent tank stat tiers are all zeroed.
- Save sanitization zeroes them again to prevent edited-save bypass.
- Temporary upgrades/evolutions remain.
- Coins, mastery, achievements, and records remain enabled.

### 21.5 Custom Practice

- Choose any biome.
- Choose level 1–30.
- Choose any combination of Scout, Soldier, Heavy, Sniper, Medic, Berserker, Shield Tank, Artillery, Mine Layer, Commander, Drone Carrier, and Reflector.
- Uses selected tank appearance, mastery cosmetics, and permanent Garage build.
- XP, level-up choices, score, combo, and combat mechanics work during the session.
- No permanent coins.
- No best score/level update.
- No mastery/lifetime/achievement update.
- No Practice active save.
- Existing reward-mode save is preserved exactly.
- Result screen explicitly says Practice rewards and records were not saved.

---

## 22. Audio, haptics, and feedback

### Sound policy

There is no music. All sound effects are generated offline with Web Audio oscillators, frequency slides, filtered noise, envelopes, and rate limits.

Procedural effects cover:

- three distinct player weapons;
- enemy fire;
- impacts;
- explosions;
- player damage;
- level up;
- upgrade selection;
- combo gain/loss;
- coin reward;
- purchase;
- tank unlock;
- UI/pause;
- game over;
- boss warning.

Sound defaults to Off. Effects volume defaults to 70% and is adjustable in 5% steps from 0–100%.

### Haptics

Capacitor Haptics is installed for Android, with browser vibration fallback where supported.

Haptics are used for:

- player fire;
- damage;
- upgrades;
- purchases;
- unlocks;
- boss warning;
- Guardian defeat;
- game over/completion;
- dash.

They are rate-limited and can be disabled. Default is On.

### Visual feedback

- tank materials briefly flash white on damage;
- explosions include debris, smoke, glow, and optional lights;
- muzzle flashes and shockwaves follow flash accessibility scaling;
- camera shake can be Full, Reduced, or Off;
- reduced flashes scale intense feedback to roughly 30%.

---

## 23. Settings and accessibility

Settings appear as a two-column grid of wide glass buttons, followed by an effects-volume slider and explanatory notes.

Order:

1. Sound On/Off
2. Camera Follow/Wide
3. Assist On/Off
4. Quality Low/Medium/High
5. Haptics On/Off
6. Shake Full/Off/Reduced cycle
7. Flashes Full/Reduced
8. Controls Standard/Left-handed
9. HUD Normal/Large
11. Close

Persisted defaults:

- sound: Off;
- camera: Follow;
- assist: Off;
- quality: Medium;
- effects volume: 70%;
- haptics: On;
- camera shake: Full;
- flashes: Full;
- controls: Standard;
- HUD: Normal.

Accessibility behavior changes presentation/comfort only. It does not change damage, enemy count, rewards, or progression.

---

## 24. Quality modes and performance engineering

Quality is manually selected. There is no silent automatic quality switching.

| Preset | Pixel ratio cap | Shadow type | Shadow map | Background detail | Ambient particles | Effect particles | Optional lights |
|---|---:|---|---:|---:|---:|---:|---|
| Low | 0.8 | Shadows Off | — | 35% | 35% | 50% | Off |
| Medium | 1.0 | PCFShadowMap | 512 | 65% | 67% | 75% | Off |
| High | 1.25 | PCFSoftShadowMap | 1024 | 100% | 100% | 100% | On |

### Scene optimization

Original Enchanted Forest menu scene before optimization:

- 3,059 objects;
- 2,395 meshes;
- 1,146 geometries;
- 1,143 materials.

Optimized menu forest:

- 77 objects;
- 43 meshes;
- 43 geometries;
- 40 materials.

Optimizations include:

- instanced foreground/background trees;
- instanced rocks;
- instanced grass;
- instanced ambient particles;
- collider-only projectile scenery list;
- explicit geometry/material/texture/shadow disposal;
- capped projectile pool;
- quality-controlled dynamic point lights.

### Hard safety limits

- active normal enemies/minions: 12;
- retained pooled projectiles: 128;
- active mines: eight;
- frame delta clamp: 0.1 seconds;
- Practice level input: 1–30;
- active saved enemies sanitized to at most 12.

### Frame-rate consistency

Movement, enemy fire probability, aiming, camera, smoke, particles, recoil, flashes, and shockwaves are calibrated against 60 FPS using elapsed-time formulas. Automated movement equivalence covers 30/60/120 FPS.

### Resource lifecycle

Biome transition and combat cleanup explicitly dispose Three.js:

- geometries;
- materials;
- textures;
- shadow maps;
- transient lights;
- tanks;
- projectiles beyond pool cap;
- effects;
- old sky/background resources.

---

## 25. Save system

### Storage keys

Permanent profile:

`tank_realms_profile_v1`

Living active run:

`tank_realms_active_run_v1`

Save version:

`1`

### Permanent profile stores

- best score;
- best level;
- permanent coins;
- owned tanks;
- selected tank;
- five upgrade tiers for each tank;
- mastery record for each tank;
- achievements;
- lifetime kills/Medic kills/Guardians/flawless Guardians;
- max combo and highest level;
- visited biomes;
- tanks with result-ending runs;
- latest 30 Daily records;
- all settings.

### Living active run stores

- score and run stats;
- best-score and best-level baselines captured at run start;
- XP, level, next XP threshold;
- current biome and realm progress;
- mode ID and mode state;
- Daily date/enemy/upgrade sequence indexes;
- Guardian pending state;
- active objective and progress;
- temporary upgrade tiers and derived evolutions;
- cooldowns/time-since-damage;
- tank ID and mastery snapshot;
- permanent upgrade snapshot;
- Guardian damage baseline;
- combo count/timer;
- player HP, position, rotation;
- living enemy types, HP, positions, rotations, and ability/heal readiness;
- objective-target marker;
- introduced enemy types;
- pending upgrade choices.

### Not restored in a living run

Transient visual/combat objects such as current bullets, explosions, artillery warning rings, and mines are intentionally not serialized. The main combatants and progression state are restored.

### Save timing

A living save is written:

- at run start;
- approximately every five active seconds;
- on pause;
- on background/page hide;
- entering upgrade selection;
- after upgrade choice;
- after objective changes;
- after Guardian changes;
- when quitting to menu.

### Sanitization

Save loading:

- rejects corrupt JSON;
- rejects wrong save version;
- rejects dead/impossible active runs;
- clamps numbers;
- validates tank/enemy/upgrade IDs;
- caps enemies;
- rebuilds player stats from sanitized tiers;
- derives evolutions rather than trusting saved IDs;
- restores older saves without mode ID as Adventure;
- restores older valid Daily saves as Daily;
- rejects forged Practice active saves;
- zeroes Daily/One-Tank permanent upgrades;
- removes invalid storage so it cannot block startup.

### Continue semantics

A run uses its run-start tank, mastery level, and permanent upgrade snapshot. A Garage purchase made after quitting cannot retroactively modify Continue.

---

## 26. Game state machine and navigation behavior

Important phases:

- `menu`
- `playing`
- `paused`
- `choosing-upgrade`
- `gameover`

Additional booleans track menu overlays such as Garage, Achievements, Daily, Game Modes, Practice setup, Settings, and overwrite confirmation.

### Android Back priority

Back closes/handles the highest-priority current layer:

1. new-run confirmation;
2. Practice setup;
3. Game Modes;
4. Daily;
5. Achievements;
6. Garage;
7. Settings;
8. playing → pause;
9. paused → resume;
10. game over → main menu.

The upgrade-choice dialog cannot be dismissed with Back because choosing is mandatory.

---

## 27. Testing and known verification level

Current automated suite: **74 passing tests**.

Coverage includes:

- startup/runtime smoke;
- all menu elements and portrait UI markers;
- safe-area and common-width layout budgets;
- controls and Left-handed swapping;
- touch cancellation/background pause;
- settings persistence;
- armor formula;
- frame-rate movement/firing consistency;
- swept projectile collision;
- projectile pooling and stress;
- resource disposal;
- 30 biome transitions;
- 50 restarts;
- save/reload;
- upgrade-choice reload;
- objective reload;
- Guardian reload;
- Garage and permanent upgrade separation;
- combo/economy;
- mastery and achievements;
- deterministic Daily Challenge;
- all additional game modes;
- Practice reward/save protection;
- offline production build;
- Android package/orientation/API/network configuration.

Current dependency audit: **0 known vulnerabilities**.

Latest successful Phase 17 debugging Android workflow:

`https://github.com/misualpa54-gif/My-Tank-game/actions/runs/32416478482`

Debugged Phase 17 artifact:

`https://github.com/misualpa54-gif/My-Tank-game/actions/runs/32416478482/artifacts/9424111083`

The approximately 3.79 MB artifact is a ZIP containing `app-debug.apk` and expires on 19 September 2026. GitHub reports archive SHA-256 `3c13316ff8f24714d9665b0235734eb75bdc9f00a2cd205f11093f66734fb134`.

---

## 28. What has deliberately not been done

The following are not defects in the current scope; they were intentionally deferred:

- permanent release-signing keystore;
- release-signed APK;
- Android App Bundle/AAB;
- final production version code/name strategy;
- final app icon replacement;
- final splash artwork replacement;
- Play Store developer setup;
- store listing copy;
- store screenshots/feature graphics;
- privacy/store questionnaires;
- online accounts;
- cloud saves;
- online leaderboards;
- multiplayer;
- advertisements;
- real-money purchases;
- background music.

The current app uses a debug build/signature and temporary/default Android launcher/splash resources.

---

## 29. Known limitations and recommended next work

### Most important next phase

Perform real Android device QA, ideally on Android 9+ hardware near the intended 4 GB RAM target.

Review:

- one-thumb comfort;
- notch/gesture safe areas;
- Android font scaling;
- heat and battery drain;
- Low/Medium/High smoothness;
- long Last Stand sessions;
- all save/Continue paths;
- Back/background behavior;
- haptic intensity;
- audio balance;
- Realm Rush transitions;
- Boss Hunt completion;
- offline airplane-mode launch.

### Current technical limitations to remember

- Automated tests use a renderer stub for many simulation checks; they do not replace real GPU profiling.
- Local saves have no cloud backup/sync.
- Daily Challenge uses local device date and has no authoritative online leaderboard.
- Artillery warnings, mines, bullets, and transient particles are not preserved across Continue.
- Quality is manual, not adaptive.
- Enemy AI is arcade/state-rule based rather than pathfinding-heavy tactical AI.
- The browser preview is useful but Android WebView behavior remains the final target.

Godot migration is **not currently justified**. It should only be considered if real-device profiling reveals a problem that cannot be solved in the existing Capacitor/Three.js architecture.

---

## 30. Rules for another AI reviewer or future developer

When modifying Tank Realms, preserve these approved constraints unless the user explicitly authorizes a change:

1. Portrait-only mobile design.
2. Lower-left movement and lower-right hold-to-fire by default.
3. Left-handed mode swaps those halves.
4. Auto-aim remains the primary aiming method.
5. Invisible control regions remain invisible; do not add a permanent fire button without approval.
6. Keep the dark glass/purple-blue procedural 3D visual identity.
7. Do not silently change prices, damage, HP, spawn rates, XP, upgrades, Guardian behavior, or progression.
8. Keep Adventure and Daily behavior isolated from mode-specific rules.
9. Practice must never pollute permanent progression or replace a living reward-mode save.
10. Keep the enemy cap, projectile pool, disposal, elapsed-time math, and swept collision protections.
11. Keep all assets and gameplay offline.
12. Do not add ads, analytics, accounts, internet permission, or purchases without explicit approval.
13. Keep final signing/store work separate.
14. Run `npm run check`, `npm audit`, and `git diff --check` after source changes.
15. Build a new offline portrait debug APK after a completed gameplay package.

---

## 31. Concise reviewer summary

Tank Realms is an offline portrait 3D arena tank roguelite packaged for Android. The menu is a centered blurred dark overlay over a live procedural forest, with conditional Continue, Garage, Achievements, Daily, Game Modes, and Adventure buttons. Gameplay uses invisible split-thumb controls, auto-aim, three compact glass HUD panels, temporary three-choice upgrades, combos, permanent coins, six realms, objectives, six Guardians, strategic enemy roles, three cosmetic tank designs, per-tank permanent tuning, mastery cosmetics, achievements, deterministic Daily play, and five additional modes. Performance has been heavily optimized with instancing, pooling, disposal, elapsed-time normalization, safety caps, and swept collision. Saving is local, sanitized, and supports living-run Continue. The Android debug APK is working offline and successfully built, but physical-device QA and final-release/store preparation remain outstanding.
