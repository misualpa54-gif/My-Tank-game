# Tank Realms — Definitive Combined Roadmap and Native-Port Plan

This document records the user's confirmed decisions after comparing current Phase 16 with the alternative v25 design/code. It is the authoritative scope guide for staged implementation and the later native Godot rebuild.

## Product path

1. Complete every approved design/gameplay package in the modular Three.js prototype.
2. Keep producing offline portrait debug APKs for testing, but treat them as prototype builds.
3. Maintain a native-port specification after every package.
4. After all web packages and physical-device QA, freeze mechanics/balance/UI/save schemas.
5. Rebuild as a native **Godot 4 game using typed GDScript**, optimized with Godot scenes/resources, MultiMesh, pooling, native input/audio, and Android export.
6. Use Godot Mobile rendering after profiling, with Compatibility fallback where needed.
7. Transfer supported permanent prototype progress through validated manual export/import; active runs do not transfer.
8. Add ads, billing, signing, final art, and store work only after native gameplay/device QA.

## Confirmed implementation checkpoints

Stop after every package for:

- detailed report;
- automated tests;
- live preview;
- debug APK/PWA artifact where applicable;
- user approval before the next package.

## Package order

1. Data architecture and infinite streaming foundation.
2. Slim HUD, radar, awareness feedback, adaptive camera, render gating, home presentation.
3. Destructible cover, realm hazards, Bomber/Phantom/Gunner.
4. Ten realms, eight-second radial morph, Guardian variants, four objectives.
5. Missile/Aegis/specialization cards, Second Wind, Choice Matrix, paints, contracts, achievements, statistics/economy UI.
6. Invasion bosses/mode, late-Adventure invasions, and complete mode adaptations.
7. Portrait PWA, GitHub Pages + downloadable ZIP, save export/import.
8. Final web QA, performance profiling, balance freeze, complete Godot port specification.
9. Native Godot Android rebuild.

## Infinite world

- No bounded box/walls in any suitable mode.
- All current modes use the infinite streamed map.
- 48-unit chunks.
- Medium core: 5×5.
- High: additional decorative ring.
- Low: same gameplay core with reduced terrain/scenery detail.
- Manual Low/Medium/High only; no silent auto quality.
- Old chunks remain until replacements are ready.
- Mode/run-seeded deterministic world; Daily uses date seed.
- Global realm morph over time, not geographic biome borders.
- Continue saves world seed, coordinates, local events, and capped recent destroyed-cover IDs.
- Groves/open fields with guaranteed routes and event/boss clear space.
- Player collides/slides against major cover; enemies avoid it.
- Normal enemies beyond 100 units reposition to 42–64 units with warning; type/HP preserved, no reward.
- North-up radar only; no full map/compass.
- Ricochet reflects from hard rocks/crystals.
- Infinite Exploration remains a later reward-free prototype only after ten-realm profiling.

## Realm order and morph

First tour:

Forest → Frozen → Volcanic → Desert → Swamp → Crystal → Autumn → Sakura → Blood Moon → Neon

Later tours:

Volcanic → Forest → Blood Moon → Sakura → Neon → Frozen → Swamp → Desert → Crystal → Autumn

- Three levels per realm; first tour reaches about level 30.
- Exact v25-style eight-second smoothstep radial morph.
- Combat remains active throughout.
- Old collision stays until matching new chunks are ready; collision hands over atomically at midpoint.
- Particles, ambience, hazards swap at midpoint.
- Quality-scaled celestial skies, terrain color patches, props, and conservative surface detail.

## Realm hazards

Mild, clearly telegraphed, safe lanes; affect player/enemies symmetrically with logical native-realm/Guardian immunity.

- Frozen: 15% weaker acceleration/turn response and slightly more drift on glossy ice.
- Volcanic: 0.4s lava entry grace, then 3 raw damage per second with capped ticks.
- Desert: deep sand reduces acceleration/turn by 12%, not final top speed.
- Swamp: shallow water reduces movement speed 15%.
- Blood Moon: 5 contact damage from spikes with 1.5s cooldown.
- Neon: 0.8s telegraphed rift pulse dealing 4 damage in a small radius.
- Forest, Crystal, Autumn, Sakura remain terrain-safe.

## New realms, Guardians, objectives

Guardian variants:

- Autumn: **Harvest Sentinel**, Rootbound foundation, leaf-ring control, Scout summons, temporary destructible root cover.
- Sakura: **Petal Shogun**, Desert foundation, petal dash and narrow five-petal fan.
- Blood Moon: **Crimson Ravager**, Volcanic foundation, below-50% enrage and telegraphed spike wave with safe gaps.
- Neon: **Void Singularity**, Crystal foundation, rotating pattern and three delayed rift nodes/safe sectors.

HP: approximately 1,050 / 1,120 / 1,220 / 1,350.  
Base damage: 18 / 17 / 22 / 21.  
Bonus coins: approximately 400 / 450 / 525 / 600.  
Exact attack timing receives a final prototype balance pass.

New signature objectives:

- Autumn: kill/collect 5 dropped cores in 45s; 250 coins + 15% repair.
- Sakura: secure 3 local shrines, hold 2s each, within 50s; 275 + repair.
- Blood Moon: destroy 6 marked elites in 40s; 300 + repair.
- Neon: destroy 4 rift nodes before 55s overload; 325 + repair.
- One immediate retry after failure.
- First tour guarantees signature objectives; later tours rotate all 11 deterministically without immediate repeats.

## HUD and camera

Main slim HUD:

- top-left score/coins and maximum two kill-feed entries;
- top-center level/XP and HP beneath it;
- top-right default-on 84px north-up radar below Pause;
- green rotating player arrow;
- red enemies, brighter target, orange Guardian, violet Invasion boss, gold objective, cyan friendly/beacon, hazard-colored markers;
- markers edge-clamp/cluster;
- compact BUILD chip expands without pausing into speed/damage/armor/regen/crit/special cooldowns;
- full build remains in Pause;
- low-HP pulse;
- directional damage arc;
- portrait top-30% input exclusion and Left-handed controls remain.

Camera settings:

- Follow remains default.
- Wide remains.
- Adaptive is added and responds to nearest threats, projectile pressure, attacks, bosses, movement speed, and roaming.
- Existing shake Full/Reduced/Off and reduced-flash comfort multiply automatic effects.

Home adds floating logo, headline best records, coins, version, and storage warning while preserving short-screen scroll.

## Enemies and cover

New unlocks:

- Bomber level 6: rushes, then 0.8s flashing/beeping fuse inside ~5 units; killing during fuse prevents/reduces blast and grants normal reward.
- Phantom level 9: opacity cycles; faint radar marker remains; deepest cloak lowers auto-aim priority unless close/recently hit; still physically hittable.
- Gunner level 12: mid-range warning laser/charge then 3 shots ~0.16–0.18s apart and controlled rest.

Cover:

- capped foreground trees/rocks/crystals become destructible;
- both factions damage cover;
- background decoration remains optimized/non-destructible;
- player collision and enemy avoidance update when cover breaks;
- current-run destruction persists through capped nearby/recent IDs and resets next run.

## Upgrades and meta

- Missile Pod: 3 tiers; roughly 7s / 5.5s / 4s; ~1.75× shell damage with falloff/capped radius; initially one active missile; centralized crit/reward/pooling.
- Aegis Array evolution: Emergency Shield + Reactive Armor; 18s charge; blocks one full non-hazard hit with blue ring; base reductions remain when unavailable.
- Adrenaline: 3 tiers, +12% speed/tier for 1.5s, refreshes rather than multiplies duration.
- Field Medic: 3 tiers, +1 HP per kill/tier.
- Bounty Hunter: 3 tiers, +10% XP/tier.
- Scavenger: 3 tiers, +8% kill coins/tier.
- Second Wind: Garage consumable, 450 coins, max 1, consumed only on lethal revive, 50% HP + 2s protection; enabled in Adventure/Boss/Invasion/Last Stand/Realm Rush; disabled in Daily/One-Tank/Practice.
- Choice Matrix per tank: 1,200 for 4 choices, 3,000 for 5; disabled in Daily/One-Tank.
- Six paints per tank: identity-preserving families, base + 5 unlockable, common/rare/prestige, 300–1,800 with mastery gates; outer projectile glow may tint but core projectile identity remains.
- Existing prices/rewards stay unchanged.

## Contracts, achievements, statistics

- 3 deterministic local-date Daily Contracts, auto-claim once.
- Pool includes safe kills, crits, cover, bosses, level, combo, coins, travel, objective, hazard survival, and compatible mode completion tasks.
- Rewards 100–250 each.
- Keep current Daily run separately.
- Expand achievements only with non-duplicate cover/travel/crit/Invasion/level30/paint goals.
- New achievement rewards 100–500; preserve current rewards.
- Awards screen tabs: Contracts / Achievements / Statistics.
- Store local best records per mode plus per-tank mastery.

## Mode adaptations

- Adventure: 3 levels per realm, ten-realm first tour, later alternating order, Invasion boss after every 2 later Guardians.
- Boss Hunt: all 10 Guardians.
- Invasion Hunt: Warlord → Tempest → Colossus → Titan → Nova → Fortress; no normal waves except summons; 20% repair and full threat cleanup between bosses; temporary upgrades/intermission.
- Invasion HP: 650 / 750 / 900 / 1,050 / 1,200 / 1,400.
- Patterns retain v25 identities with safety telegraphs/caps.
- Boss bonuses escalate 50–150; full clear +1,200.
- Invasion Hunt uses current global realm and morphs between bosses.
- Full mastery, lifetime Invasion, flawless, first/full-clear, local time/score tracking.
- Last Stand: global morph every 90 seconds.
- Realm Rush: 5 minutes, 30 seconds per each of 10 realms.
- Daily: full deterministic infinite ten-realm world.
- Practice: infinite free roam, manual realm morph/enemy/boss/cover reset controls, density Light6/Normal10/Heavy14/Chaos18, Easy/Normal/Hard/Nightmare, no rewards/save pollution.

## Audio

- No music.
- Add speed-reactive engine hum and realm ambience.
- Master Sound toggle plus separate Effects and Engine/Ambience sliders.
- All tutorial screens, replay controls, and contextual tutorial tips are removed by explicit user request; gameplay relies on clear HUD labels, telegraphs, and mode descriptions.

## Save/platform/PWA

- One exact living Continue total.
- Storage failure: session-memory fallback plus honest warning.
- Portrait-only; landscape web shows rotate notice.
- Manual quality modes.
- Static menu/pause render gating.
- PWA delivered through GitHub Pages and downloadable ZIP.
- Cache-first hashed assets; short online navigation update check; Update Available action never interrupts a run.
- Install action in Settings/Menu only when browser supports it.
- Temporary generated 192/512/maskable icons; final art later.
- Strict no CDN/Cloudflare/analytics/remote runtime assets during prototype.
- Manual validated save export/import added; PWA/Android local storage remains independent.

## Future native Android and monetization

- Godot 4 typed GDScript native rebuild after all prototype packages/QA.
- Final production art during native release work.
- Current prototype remains strictly offline; ads/billing/Internet permission enter only after native gameplay/device QA.
- Future ads: optional rewarded ads; forced interstitial becomes eligible after 20 active minutes but only appears at safe result/pre-new-run breaks, never first launch/Continue/combat/cards/objectives/morphs/bosses; session/daily caps.
- Rewarded ad may grant one Second Wind token.
- IAP: cosmetics and Remove Ads only.
- Remove Ads disables forced interstitials; optional rewarded ads remain.
- No paid combat power; purchased cosmetics do not alter stats.
