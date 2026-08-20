# Phase 17 Debugging and Performance Hotfix

## Why this hotfix was required

Real-device/player review found that the first infinite-world APK was not acceptable:

- game and menu interactions felt too laggy;
- home buttons appeared unresponsive while a run loaded;
- ground visuals looked incorrect;
- level-up choice overlays lagged;
- tutorials were unwanted and had to be removed completely.

The next roadmap package was paused. This hotfix audits and corrects the Phase 17 foundation before any HUD/content expansion.

## Root causes found

### 1. Too much synchronous work behind home buttons

Phase 17 rebuilt:

- 25 environment chunks;
- 25 separate ground meshes;
- thousands of terrain vertices/normals/colors;
- repeated per-chunk geometries/materials;
- quality visibility traversal after every chunk.

All of that ran synchronously before the menu screen could visibly respond. On a real WebView, shader/material setup amplified the delay.

### 2. Excessive unique GPU resources

Every chunk created new copies of the same trunk, foliage, cactus, rock, grass, crystal, and spike geometry/material. The scene used instancing inside each chunk, but still had many duplicate resource objects and shader/material initialization work.

### 3. Ground seams and overdraw

Twenty-five individually lit ground tiles could show square lighting seams because edge normals were calculated independently. They also required 25 draw submissions and repeated materials.

### 4. Canvas continued rendering under static overlays

The renderer continued drawing the full infinite world every animation frame while:

- menus were open;
- Pause was open;
- level-up choice cards were open;
- results/settings/garage were static.

The upgrade screen also combined a blurred full-screen backdrop with a second blurred panel, which is expensive in Android WebView composition.

### 5. Tutorials still intercepted first runs

The first-run tutorial could pause the newly loaded game immediately and added another overlay/state/save path. The user explicitly requested complete removal.

## Fixes

### Incremental initial scenery

- Initial/menu/run loading now builds only the nearest 3×3 chunk core synchronously.
- Remaining 5×5 gameplay chunks are queued nearest-first, one commit per frame budget.
- High's decorative ring also fills progressively.
- Old/retained chunks remain visible during movement.

### Shared world resources and chunk-build cleanup

- Chunk instances now share one cached geometry/material set per active realm for trunks, foliage, cactus, rocks, grass, crystals, spikes, water, lava, and ground material.
- Chunk disposal skips shared resources.
- Realm cleanup disposes the shared cache once.
- Quality changes safely rebuild only what their geometry resolution requires.
- Removed an accidentally retained global `applySceneQualityVisibility()` traversal from every single chunk commit. Grass receives its quality count when the chunk is created, avoiding O(chunk²) streaming work.
- Shared water geometry and lava materials animate once per frame rather than repeating identical vertex/material work for every pool.

### Continuous ground surface

The 25 separate ground tiles were replaced by one continuous mesh:

- Low/Medium coverage: 240×240 world units;
- High coverage: 336×336;
- Low: 32 segments;
- Medium: 48;
- High: 64.

The mesh rebakes only when the player crosses a 48-unit anchor boundary or the realm/quality changes.

Benefits:

- no square tile seams;
- one ground draw instead of 25/49;
- fewer geometry/material allocations;
- lower startup and realm-switch cost;
- consistent analytic boundary normals and vertex colors.

### Responsive run loading

Home, Continue, confirmed-new-run, Practice, and Try Again actions now:

1. immediately show the existing Tank Realms loading overlay;
2. update it with the selected mode name;
3. allow a browser paint opportunity;
4. begin world/player construction after 40ms;
5. hide the loader when initialization finishes.

Duplicate taps are ignored while loading.

### Static render gating

- Gameplay still renders continuously.
- Menus, Pause, results, Garage, Settings, and upgrade choices render the 3D scene only when it changes.
- Menu chunk completion requests a render only when a new chunk commits.
- Resize, quality, realm, and WebGL restore mark the scene dirty.

### Upgrade/menu composition and hot-path work

- Removed double `backdrop-filter` blur from the level-up overlay.
- Upgrade fade reduced to 0.14s and no longer performs the hidden scale transform.
- General screen transitions reduced from 0.6s to 0.22s so button navigation feels responsive.
- Main screen blur reduced from 20px to 10px.
- Retained the dark glass/purple card identity with a solid translucent battlefield dim.
- Frozen gameplay no longer burns GPU frames behind the cards.
- Reused tank movement, aim, camera, homing, collision-query, water, and lava scratch objects instead of allocating them repeatedly in hot update loops.
- World chunk requests now run only after the player crosses a chunk anchor, not every rendered frame.
- Low disables shadows completely; Medium uses a 512 PCF shadow map with optional point lights disabled; full 1024 soft shadows/lights remain High-only.

### Complete tutorial removal

Removed:

- tutorial HTML screen;
- all tutorial JavaScript state/functions/transitions;
- first-run tutorial interception;
- Replay Tutorial Settings button;
- tutorial event handlers and Android Back handling;
- tutorial save/profile field use;
- tutorial CSS selectors;
- tutorial tests.

No contextual tutorial tips will be added later unless the user reverses this decision. Mode descriptions, readable HUD, radar, warnings, and telegraphs must teach mechanics without tutorial interruptions.

## Measured synthetic improvement

Same test environment before vs after hotfix:

| Stress check | Phase 17 first build | Hotfix | Improvement |
|---|---:|---:|---:|
| 50 restart/menu cycles | ~2.14–2.50s | ~0.59s | about 72–76% faster |
| 30 biome rebuilds | ~1.24–1.53s | ~0.28s | about 77–82% faster |
| Full Node test duration | ~11.1–12.3s | ~5.0s | about 55–59% faster |

Initial synthetic menu scene after hotfix:

- 46 objects;
- 31 meshes;
- 30 instanced meshes;
- 3 lights;
- 7 unique geometries;
- 7 unique materials.

The rest of the 5×5 world streams after first paint rather than blocking menu interaction.

## Verification

- 73 automated tests pass.
- 0 failures.
- 0 npm vulnerabilities.
- JavaScript lint passes without warnings.
- HTML validation passes.
- Offline Vite build passes.
- Deterministic world, distant travel, Continue, objectives, Guardians, modes, projectile pooling, and 30-biome/50-restart stress remain covered.
- Ground coverage/height/normal data is checked against the analytic terrain function.
- Tutorial UI and replay controls are explicitly absent.

## Debugged Android artifact

The Java 21 workflow, full 73-test check, Android unit-test task, debug assembly, and upload succeeded.

- Workflow: `https://github.com/misualpa54-gif/My-Tank-game/actions/runs/32416478482`
- APK artifact: `https://github.com/misualpa54-gif/My-Tank-game/actions/runs/32416478482/artifacts/9424111083`
- Artifact name: `TankRealms-debug-apk`
- ZIP contains: `app-debug.apk`
- Archive size: 3,789,821 bytes (approximately 3.79 MB)
- GitHub archive SHA-256: `3c13316ff8f24714d9665b0235734eb75bdc9f00a2cd205f11093f66734fb134`
- Expires: 19 September 2026

## Deferred work

This hotfix does not start the slim HUD/radar package. That package remains paused until the user reviews the corrected infinite-world APK.
