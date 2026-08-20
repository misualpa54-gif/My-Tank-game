# Thiltete Tank Game

A mobile-first 3D arena survival roguelite that runs from a single HTML file — offline, from a USB stick, or from any static host. No install, no build step required to play, no network requests at runtime.

Drive one tank through an infinite, procedurally generated world split into ten themed realms. Enemies spawn endlessly around you. Every kill grants XP, every level-up deals a three-card upgrade choice, and every fifth level summons a boss. Death banks coins into a permanent Armory.

---

## Play

**Just want to play?** Open `dist/ThilteteTankGame.html` in any modern browser. That's it.

| Control | Action |
|---|---|
| Left half of screen | Virtual joystick — drive |
| Right half of screen | Hold to auto-fire |
| `WASD` / arrow keys | Drive (desktop) |
| `Space` | Fire (desktop) |
| `Esc` | Pause |

Turret aim is automatic, with a sticky-target bias so it doesn't jitter between enemies.

---

## What's in it

- **10 realms** — Enchanted Forest, Frozen Tundra, Volcanic Wasteland, Golden Desert, Mystic Swamp, Crystal Caverns, Autumn Grove, Sakura Valley, Blood Moon Canyon, Neon Void. The world morphs between them over an 8-second blend every 3 levels.
- **9 enemy types** — Scout, Soldier, Heavy, Sniper, Medic, Berserker, Bomber, Phantom, Gunner. Each unlocks at a different level and has its own AI.
- **6 bosses** — WARLORD, TEMPEST, COLOSSUS, TITAN, NOVA, FORTRESS. Fan barrages, teleports, minion summons, ground-slam shockwaves, cloaking, spiral patterns.
- **17 upgrade cards**, drafted three at a time on level-up.
- **Armory** — 6 tank skins, consumables, and 7 permanent upgrades.
- **14 achievements** and 3 daily challenges seeded from the date.
- **Two modes** — endless Casual with named save slots, and a configurable Level Mode.
- **Fully synthesized audio** — every sound effect, the engine hum, per-biome ambience, and the generative music track are WebAudio. Zero audio files.
- **Infinite streamed world** — terrain height is an analytic function, so the world never ends and always regenerates identically.

---

## Repository layout

The game is developed as separate source files and assembled into the single-file artifact by a small build script.

```
src/
  body.html        markup for the HUD and all 8 screens
  styles.css       the complete stylesheet
  game.js          the entire game (~4,400 lines)
  sw-register.js   service-worker registration
vendor/
  three.min.js     Three.js r128, vendored so the repo stays diffable
tools/
  build.js         assembles everything into dist/
dist/
  ThilteteTankGame.html   ← the playable artifact (committed)
  manifest.webmanifest    PWA manifest
  sw.js                   service worker
  icon-192.png, icon-512.png
docs/
  COMPARISON.md    how this build was derived from its two ancestors
```

### Building

```bash
node tools/build.js
```

No dependencies, no package manager, no toolchain. It concatenates the sources into `dist/ThilteteTankGame.html` and prints a size breakdown.

Edit files in `src/`, run the build, reload the page.

### Why vendored instead of a CDN

Three.js is committed to `vendor/` and inlined at build time rather than linked from a CDN. A CDN link means the game breaks without internet, breaks behind restrictive CSP, and breaks when opened as a plain file. Inlining it costs ~589 KB and buys the guarantee that the file always works.

---

## Deploying

Everything in `dist/` is a static site. Push it anywhere:

- **GitHub Pages** — serve from `/dist`, or copy `dist/` to the branch root.
- **Any static host** — Netlify, Cloudflare Pages, S3, nginx.

Serve over HTTPS (or `localhost`) for the PWA to become installable. The service worker is **network-first for the page**, so players always get the newest build when online and can still play offline.

---

## Provenance

This repo is a merge of two earlier builds, taking the best of each. The full technical comparison — what they shared, where they diverged, and what was recovered — is in [`docs/COMPARISON.md`](docs/COMPARISON.md).

Summary of what changed relative to the best ancestor build:

1. **Horizon ring restored.** Streamed scenery stopped at 96 units while fog reached as far as 225, leaving visibly bare ground in 8 of the 10 realms. An instanced backdrop ring — an idea recovered from the older prototype — now fills the gap in every realm for 2 draw calls.
2. **Chunk streaming bug fixed.** Three functions were declared twice; JavaScript hoisting meant the older synchronous versions silently overrode the newer budgeted ones, so the "2 ms per frame" streaming system was dead code and chunks were built in frame-hitching bursts. The stale duplicates are gone.
3. **Third-party tracker removed.** A Cloudflare bot-challenge script had been baked into the shipped HTML, injecting a hidden iframe and requesting a script that would 404. Removed.
4. **PWA pack rebuilt.** The manifest, service worker, and icons were referenced but had never been shipped. All four now exist.
5. **Sources split.** The 885 KB monolith is now editable files plus a build step.
