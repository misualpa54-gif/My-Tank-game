
        // ============================================
        // BIOME CONFIGURATIONS - Realistic Environments
        // ============================================
        const BIOMES = [
            {
                name: "Enchanted Forest",
                skyTop: 0x87ceeb,
                skyBottom: 0x228b22,
                fogColor: 0x2d5a27,
                fogNear: 45,
                fogFar: 185,
                groundColor: 0x3d2817,
                grassColor: 0x228b22,
                ambientLight: 0x404040,
                sunColor: 0xfff5e0,
                sunIntensity: 1.2,
                treeCount: 50,
                rockCount: 30,
                grassCount: 250,
                hasWater: false,
                particleColor: 0x90ee90,
                particleType: 'leaves',
                terrainAmplitude: 2.5,
                terrainFrequency: 0.08,
                exposure: 1.16
            },
            {
                name: "Frozen Tundra",
                skyTop: 0xb0c4de,
                skyBottom: 0xdceaf2,
                fogColor: 0xc4d4e2,
                fogNear: 38,
                fogFar: 155,
                groundColor: 0xdde9ef, // v18: softened from near-white (glare fix)
                grassColor: 0x9fc4d4,
                ambientLight: 0x8090a0,
                sunColor: 0xffffff,
                sunIntensity: 0.9,
                treeCount: 20,
                rockCount: 35,
                grassCount: 60,
                hasWater: true,
                waterColor: 0x4a90b8,
                particleColor: 0xffffff,
                particleType: 'snow',
                terrainAmplitude: 1.5,
                terrainFrequency: 0.06,
                exposure: 1.22
            },
            {
                name: "Volcanic Wasteland",
                skyTop: 0x1a0a00,
                skyBottom: 0x8b0000,
                fogColor: 0x2a1a10,
                fogNear: 30,
                fogFar: 140,
                groundColor: 0x1a1a1a,
                grassColor: 0x8b4513,
                ambientLight: 0x402010,
                sunColor: 0xff6600,
                sunIntensity: 0.8,
                treeCount: 8,
                rockCount: 60,
                grassCount: 25,
                hasLava: true,
                lavaColor: 0xff4500,
                particleColor: 0xff4500,
                particleType: 'embers',
                terrainAmplitude: 4,
                terrainFrequency: 0.12,
                hasSpikes: true,
                exposure: 1.26
            },
            {
                name: "Golden Desert",
                skyTop: 0x87ceeb,
                skyBottom: 0xffd700,
                fogColor: 0xd4a574,
                fogNear: 60,
                fogFar: 225,
                groundColor: 0xdaa520,
                grassColor: 0xf4a460,
                ambientLight: 0x806040,
                sunColor: 0xfffaf0,
                sunIntensity: 1.5,
                treeCount: 10,
                rockCount: 25,
                grassCount: 35,
                hasDunes: true,
                particleColor: 0xdaa520,
                particleType: 'sand',
                terrainAmplitude: 5,
                terrainFrequency: 0.04,
                exposure: 1.19
            },
            {
                name: "Mystic Swamp",
                skyTop: 0x2f4f4f,
                skyBottom: 0x556b2f,
                fogColor: 0x3a4a3a,
                fogNear: 22,
                fogFar: 108,
                groundColor: 0x2d4a2d,
                grassColor: 0x6b8e23,
                ambientLight: 0x304030,
                sunColor: 0xc0ffc0,
                sunIntensity: 0.6,
                treeCount: 45,
                rockCount: 20,
                grassCount: 180,
                hasWater: true,
                waterColor: 0x2f4f2f,
                particleColor: 0x90ee90,
                particleType: 'fireflies',
                terrainAmplitude: 1.0,
                terrainFrequency: 0.1,
                exposure: 1.06
            },
            {
                name: "Crystal Caverns",
                skyTop: 0x0a0a20,
                skyBottom: 0x1a1a40,
                fogColor: 0x101030,
                fogNear: 30,
                fogFar: 125,
                groundColor: 0x1a1a2e,
                grassColor: 0x4169e1,
                ambientLight: 0x202040,
                sunColor: 0x8080ff,
                sunIntensity: 0.5,
                treeCount: 0,
                rockCount: 50,
                grassCount: 0,
                hasCrystals: true,
                crystalColor: 0x00ffff,
                particleColor: 0x00ffff,
                particleType: 'sparkles',
                terrainAmplitude: 3,
                terrainFrequency: 0.15,
                exposure: 1.12
            },
            // v9(D): four new biomes — the rotation now spans 10 worlds
            {
                name: "Autumn Grove",
                skyTop: 0x87ceeb, skyBottom: 0xd97c2b,
                fogColor: 0xa0622d, fogNear: 35, fogFar: 165,
                groundColor: 0x5c3a1e, grassColor: 0xc26a1f,
                ambientLight: 0x604838, sunColor: 0xffd9b0, sunIntensity: 1.3,
                treeCount: 50, rockCount: 25, grassCount: 200,
                particleColor: 0xd97c2b, particleType: 'leaves',
                leafA: 0xd97c2b, leafB: 0x8b3a1e,
                terrainAmplitude: 2.2, terrainFrequency: 0.09,
                exposure: 1.15
            },
            {
                name: "Sakura Valley",
                skyTop: 0x9ad0ec, skyBottom: 0xf9c8dc,
                fogColor: 0xe8b8cc, fogNear: 32, fogFar: 150,
                groundColor: 0x4a3a30, grassColor: 0x7cc47f,
                ambientLight: 0x706058, sunColor: 0xfff0f5, sunIntensity: 1.25,
                treeCount: 45, rockCount: 20, grassCount: 160,
                hasWater: true, waterColor: 0x64b6c8,
                particleColor: 0xf9a8d4, particleType: 'leaves',
                leafA: 0xf9a8d4, leafB: 0xffc4d6,
                terrainAmplitude: 1.8, terrainFrequency: 0.08,
                exposure: 1.18
            },
            {
                name: "Blood Moon Canyon",
                skyTop: 0x1a0505, skyBottom: 0x8b0000,
                fogColor: 0x2a0d0d, fogNear: 26, fogFar: 130,
                groundColor: 0x2a1212, grassColor: 0x5c2a2a,
                ambientLight: 0x301818, sunColor: 0xff4500, sunIntensity: 0.9,
                treeCount: 0, rockCount: 65, grassCount: 15,
                hasSpikes: true, hasDunes: true,
                particleColor: 0xff2a2a, particleType: 'embers',
                terrainAmplitude: 5.5, terrainFrequency: 0.11,
                exposure: 1.2
            },
            {
                name: "Neon Void",
                skyTop: 0x05000f, skyBottom: 0x2a0a4a,
                fogColor: 0x120826, fogNear: 24, fogFar: 110,
                groundColor: 0x0d0d1a, grassColor: 0x1f2a44,
                ambientLight: 0x181828, sunColor: 0x8040ff, sunIntensity: 0.7,
                treeCount: 0, rockCount: 40, grassCount: 0,
                hasCrystals: true, crystalColor: 0xff2ad4,
                particleColor: 0x2affea, particleType: 'sparkles',
                terrainAmplitude: 3.5, terrainFrequency: 0.14,
                exposure: 1.08
            }
        ];

        // Enemy Types
        const ENEMY_TYPES = {
            scout: { name: "Scout", color: 0xffd700, hp: 25, speed: 1.5, damage: 8, fireRate: 0.6, size: 0.7, points: 50, desc: "Fast but fragile" },
            soldier: { name: "Soldier", color: 0xdc2626, hp: 50, speed: 1.0, damage: 12, fireRate: 0.4, size: 1.0, points: 100, desc: "Balanced fighter" },
            heavy: { name: "Heavy", color: 0x78350f, hp: 120, speed: 0.5, damage: 25, fireRate: 0.25, size: 1.5, points: 200, desc: "Slow but deadly" },
            sniper: { name: "Sniper", color: 0x7c3aed, hp: 35, speed: 0.6, damage: 30, fireRate: 0.15, size: 0.9, points: 175, desc: "Long range threat" },
            healer: { name: "Medic", color: 0x22c55e, hp: 60, speed: 0.8, damage: 5, fireRate: 0.3, size: 0.85, points: 150, healAmount: 8, desc: "Heals allies" },
            berserker: { name: "Berserker", color: 0xec4899, hp: 80, speed: 1.3, damage: 18, fireRate: 0.7, size: 1.2, points: 250, desc: "Aggressive charger" },
            // v5: new enemy variety
            bomber:   { name: "Bomber",  color: 0xf43f5e, hp: 40, speed: 1.6, damage: 30, fireRate: 0,   size: 0.8,  points: 150, desc: "Suicide rusher — keep your distance!" },
            phantom:  { name: "Phantom", color: 0x94a3b8, hp: 55, speed: 1.2, damage: 14, fireRate: 0.5, size: 0.9,  points: 220, desc: "Cloaked striker — watch the shimmer" },
            gunner:   { name: "Gunner",  color: 0xa855f7, hp: 90, speed: 0.7, damage: 10, fireRate: 0.5, size: 1.15, points: 180, desc: "Fires deadly three-round bursts" },
            // v6(C): bosses
            warlord:  { name: "WARLORD",  color: 0xb91c1c, hp: 600, speed: 0.45, damage: 20, fireRate: 0.3, size: 2.6, points: 1500, desc: "BOSS — five-shell barrages" },
            colossus: { name: "COLOSSUS", color: 0x6d28d9, hp: 750, speed: 0.35, damage: 15, fireRate: 0.3, size: 3.0, points: 1800, desc: "BOSS — bursts and reinforcements" },
            nova:     { name: "NOVA",     color: 0x475569, hp: 550, speed: 0.7,  damage: 12, fireRate: 0.3, size: 2.4, points: 2000, desc: "BOSS — cloaked nova rings" },
            // v24 bosses
            titan:    { name: "TITAN",    color: 0x1f3a5f, hp: 950, speed: 0.3,  damage: 35, fireRate: 0.2, size: 3.4, points: 2200, desc: "BOSS — ground-slam shockwaves" },
            tempest:  { name: "TEMPEST",  color: 0x0ea5e9, hp: 650, speed: 0.9,  damage: 14, fireRate: 0.5, size: 2.2, points: 2400, desc: "BOSS — blinks around the arena" },
            fortress: { name: "FORTRESS", color: 0x713f12, hp: 850, speed: 0.15, damage: 10, fireRate: 0.3, size: 3.1, points: 2600, desc: "BOSS — unending bullet spirals" }
        };

        // Player Upgrades
        const UPGRADES = [
            { level: 2, stat: 'speed', amount: 15, text: '⚡ Speed +15%' },
            { level: 3, stat: 'damage', amount: 20, text: '💥 Damage +20%' },
            { level: 4, stat: 'regen', amount: 2, text: '🔄 Regen +2/s' },
            { level: 5, stat: 'armor', amount: 10, text: '🛡️ Armor +10' },
            { level: 6, stat: 'fireRate', amount: 20, text: '🔥 Fire Rate +20%' },
            { level: 7, stat: 'speed', amount: 15, text: '⚡ Speed +15%' },
            { level: 8, stat: 'damage', amount: 25, text: '💥 Damage +25%' },
            { level: 9, stat: 'maxHp', amount: 30, text: '❤️ Max HP +30' },
            { level: 10, stat: 'multishot', amount: 1, text: '🎯 Triple Shot!' },
            { level: 12, stat: 'armor', amount: 20, text: '🛡️ Armor +20' },
            { level: 15, stat: 'regen', amount: 5, text: '🔄 Regen +5/s' },
        ];

        const CONFIG = {
            playerSpeed: 18,
            bulletSpeed: 60,
            fireRate: 0.25,
            baseDamage: 22
        };

        // v14: resilient storage — works even where localStorage is blocked (sandboxed
        // previews, private modes). Falls back to in-session memory; a banner on the home
        // screen explains when progress is session-only. Defined first: used everywhere.
        const store = (() => {
            const mem = {};
            let ok = false;
            try { localStorage.setItem('__tank_probe', '1'); localStorage.removeItem('__tank_probe'); ok = true; } catch (e) { ok = false; }
            return {
                persistent: ok,
                get(k) { if (ok) { try { return localStorage.getItem(k); } catch (e) {} } return (k in mem) ? mem[k] : null; },
                set(k, v) { mem[k] = String(v); if (ok) { try { localStorage.setItem(k, v); } catch (e) {} } },
                del(k) { delete mem[k]; if (ok) { try { localStorage.removeItem(k); } catch (e) {} } }
            };
        })();

        // Game State
        let state = {
            gamePhase: 'menu', // menu | playing | paused | gameover
            isPlaying: false,
            // FIX (Tier 1): these were never initialized (undefined) — sound was silently
            // OFF, the camera HUD label didn't match the actual camera, assist was off.
            // Defaults below match what the settings panel always claimed.
            soundEnabled: true,
            musicEnabled: true, // v24
            quality: 'auto', // v25: auto | high | low
            tutorialTips: {}, // v25: seen-tips registry
            cameraMode: 'follow',
            controlAssist: true,
            score: 0,
            kills: 0,
            runTime: 0,
            runCoins: 0,
            xp: 0,
            level: 1,
            xpToNext: 100,
            currentBiome: 0,
            lastFireTime: 0,
            lastSpawnTime: 0,
            lastRegenTime: 0,
            input: { x: 0, y: 0, isFiring: false },
            cameraShake: 0,
            playerStats: { speed: 100, damage: 100, fireRate: 100, armor: 0, regen: 0, maxHp: 100, multishot: 0 },
            enemiesIntroduced: new Set(),
            targetEnemy: null // Added for sticky auto-aim
        };

        let audioCtx = null;

        // Three.js Globals
        let scene, camera, renderer, clock;
        let player, bullets = [], enemies = [], particles = [], environmentObjects = [];
        let ambientLight, dirLight, hemisphereLight;
        let groundMesh, waterMesh, lavaMeshes = [];
        let environmentParticles = [];
        // v17: chunk streaming — the infinite world is served in 48-unit chunks
        const CHUNK = 48, CHUNK_TILES = 5;         // ground tile grid 5x5 = 240 units of visible terrain
        const CHUNK_ENV_RADIUS = 2;                // environment chunks within this radius exist
        const chunkSeededRand = (seed) => {        // deterministic per-chunk RNG — revisits regenerate identically
            let s = (seed ^ 0x9E3779B9) >>> 0;
            return () => { s |= 0; s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
        };
        const chunkKey = (cx, cz) => cx + ',' + cz;
        const chunkSeed = (cx, cz) => (cx * 73856093 ^ cz * 19349663 ^ state.currentBiome * 83492791) >>> 0;
        let envChunks = new Map();                 // key -> { meshes: [], colliders: [] }
        let chunkBuildQueue = [];

        // ============================================
        // FIX (Tier 2): GPU RESOURCE DISPOSAL & CACHING
        // In three.js r128, scene.remove() does NOT free GPU memory — geometry/material
        // must be disposed. Previously nothing was ever disposed, so bullets, deaths,
        // particles, biome switches and restarts leaked GPU buffers forever.
        // Shared (cached) resources are flagged and skipped by the disposer.
        // ============================================
        function markShared(res) {
            res.userData = res.userData || {};
            res.userData.__shared = true;
            return res;
        }
        function disposeObject3D(root) {
            if (!root) return;
            root.traverse(c => {
                if (c.isInstancedMesh && c.dispose) c.dispose(); // FIX (Tier 3): frees instance buffers
                if (c.geometry && !(c.geometry.userData && c.geometry.userData.__shared)) {
                    c.geometry.dispose();
                }
                if (c.material) {
                    const mats = Array.isArray(c.material) ? c.material : [c.material];
                    mats.forEach(m => {
                        if (m && !(m.userData && m.userData.__shared)) m.dispose();
                    });
                }
            });
        }

        // Cached unit geometries (scaled per use — identical rendering, one GPU buffer)
        const SHARED_GEO = {
            sphere1:   markShared(new THREE.SphereGeometry(1)),
            box1:      markShared(new THREE.BoxGeometry(1, 1, 1)),
            plane1:    markShared(new THREE.PlaneGeometry(1, 1)),
            tetra1:    markShared(new THREE.TetrahedronGeometry(1)),
            octa1:     markShared(new THREE.OctahedronGeometry(1)),
            dodeca1:   markShared(new THREE.DodecahedronGeometry(1, 0)),
            bulletCore:  markShared(new THREE.SphereGeometry(0.3)),
            bulletInner: markShared(new THREE.SphereGeometry(0.45)),
            bulletOuter: markShared(new THREE.SphereGeometry(0.65)),
            bulletTrail: markShared(new THREE.CylinderGeometry(0.16, 0.09, 2.7, 8)), // v2 visuals: longer trail
            flashSphere: markShared(new THREE.SphereGeometry(1.0)),
            flashRing:   markShared(new THREE.RingGeometry(0.6, 1.5, 16)),
            shockRing:   markShared(new THREE.RingGeometry(0.5, 1.5, 32))
        };
        const bulletMatCache = {}; // keyed by hex color
        const FLASH_RES = {
            flash: markShared(new THREE.MeshBasicMaterial({ color: 0xffffaa }))
        };

        // ============================================
        // FIX (Tier 3): PERFORMANCE INFRASTRUCTURE
        // 1) Preallocated scratch vectors — the hot loop previously allocated hundreds
        //    of short-lived Vector3/Vector2 objects per frame (GC pressure / micro-stutter).
        // 2) Collision grid for bullet-vs-environment checks (was: every bullet scanning
        //    ALL ~660 environment objects every frame).
        // 3) mergeGeometries() — bakes many small meshes into few big ones (same triangles,
        //    same materials, same transforms → identical look, a fraction of the draw calls).
        // 4) Persistent shared dynamic lights (muzzle + explosion pool) — adding/removing
        //    PointLights per bullet/shot/explosion forced three.js to recompile shaders
        //    constantly (measured: 6 → 169 programs during combat = periodic hitches).
        // ============================================
        const _tv1 = new THREE.Vector3(), _tv2 = new THREE.Vector3(), _tv3 = new THREE.Vector3(),
              _tv4 = new THREE.Vector3(), _tv5 = new THREE.Vector3(), _terrainN = new THREE.Vector3();
        const _moveV1 = new THREE.Vector3(), _moveV2 = new THREE.Vector3(), _moveV3 = new THREE.Vector3();
        const _aimV1 = new THREE.Vector3(), _aimV2 = new THREE.Vector3();
        const _sv1 = new THREE.Vector2();
        const _dummy = new THREE.Object3D();

        let envColliders = [];       // { x, z, r, type } — bullet collision data
        const ENV_CELL = 10;
        let envGrid = new Map();     // "cx,cz" -> collider array
        function* collidersNear(x, z) { // v17: colliders live on their chunks — check the 3x3 chunk neighborhood
            const pcx = Math.floor(x / CHUNK), pcz = Math.floor(z / CHUNK);
            for (let ix = pcx - 1; ix <= pcx + 1; ix++)
                for (let iz = pcz - 1; iz <= pcz + 1; iz++) {
                    const chunk = envChunks.get(chunkKey(ix, iz));
                    if (chunk) yield* chunk.colliders;
                }
        }

        function mergeGeometries(geos) {
            let vCount = 0, iCount = 0;
            geos.forEach(g => {
                vCount += g.attributes.position.count;
                iCount += g.index ? g.index.count : g.attributes.position.count;
            });
            const pos = new Float32Array(vCount * 3), nor = new Float32Array(vCount * 3), uv = new Float32Array(vCount * 2);
            const idx = vCount > 65535 ? new Uint32Array(iCount) : new Uint16Array(iCount);
            let vo = 0, io = 0;
            geos.forEach(g => {
                const p = g.attributes.position;
                pos.set(p.array, vo * 3);
                if (g.attributes.normal) nor.set(g.attributes.normal.array, vo * 3);
                if (g.attributes.uv) uv.set(g.attributes.uv.array, vo * 2);
                const n = p.count;
                if (g.index) {
                    const gi = g.index.array;
                    for (let k = 0; k < gi.length; k++) idx[io + k] = gi[k] + vo;
                } else {
                    for (let k = 0; k < n; k++) idx[io + k] = k + vo;
                }
                vo += n; io += g.index ? g.index.count : n;
            });
            const out = new THREE.BufferGeometry();
            out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
            out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
            out.setIndex(new THREE.BufferAttribute(idx, 1));
            return out;
        }

        // Persistent shared lights (count never changes → no shader churn)
        const muzzleLight = new THREE.PointLight(0xffaa00, 0, 15);
        const explosionLightPool = [new THREE.PointLight(0xffffff, 0, 20), new THREE.PointLight(0xffffff, 0, 20)];
        let muzzleLightsInit = false, explosionLightTicket = 0;
        function initDynamicLights() {
            if (muzzleLightsInit) return;
            scene.add(muzzleLight);
            explosionLightPool.forEach(l => scene.add(l));
            muzzleLightsInit = true;
        }
        function acquireExplosionLight(color, pos) {
            const l = explosionLightPool[explosionLightTicket++ % explosionLightPool.length];
            l.color.setHex(color);
            l.position.copy(pos);
            l.userData.ticket = explosionLightTicket;
            l.intensity = 3;
            return l;
        }

        // Render gating: render only while playing (or when something changed while idle)
        let needsRender = true;

        // FIX (Tier 4): cached DOM lookups — updateHUD + overlays queried getElementById
        // several times per hit/regen tick.
        const _domCache = {};
        function dom(id) {
            if (!_domCache[id]) _domCache[id] = document.getElementById(id);
            return _domCache[id];
        }
        function getBulletResources(color) {
            if (!bulletMatCache[color]) {
                bulletMatCache[color] = {
                    core: markShared(new THREE.MeshBasicMaterial({ color: 0xffffff })),
                    inner: markShared(new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.9 })),
                    outer: markShared(new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.4 })),
                    trail: markShared(new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.75 })) // v2 visuals
                };
            }
            return bulletMatCache[color];
        }

        // ============================================
        // INITIALIZATION
        // ============================================
        function init() {
            const container = document.getElementById('game-container');

            scene = new THREE.Scene();

            // Camera - Lower angle for more 3D feel
            camera = new THREE.PerspectiveCamera(64, window.innerWidth / window.innerHeight, 0.1, 500); // v3: wider FOV
            camera.position.set(0, 25, 31); // FIX (v2/P1): slightly higher view for the bigger map
            camera.lookAt(0, 0, 5);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25)); // Performance optimization
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.0;
            container.appendChild(renderer.domElement);

            clock = new THREE.Clock();

            // FIX (Tier 3): persistent dynamic lights exist before gameplay starts, so the
            // one-time shader recompile happens behind the start screen, never in combat.
            initDynamicLights();

            // Initial biome
            loadBiome(0);

            window.addEventListener('resize', onWindowResize);
            setupInputs();
            animate();
        }

        // ============================================
        // TERRAIN HEIGHT SAMPLING - Fixes sinking tanks
        // ============================================
        // v17: INFINITE WORLD — terrain height is analytic (pure math over world
        // coordinates + the active biome), so it extends forever with no stored grid.
        let _activeBiomeRef = BIOMES[0];
        function terrainHeightRaw(x, z, biome) {
            const amplitude = biome.terrainAmplitude || 2;
            const frequency = biome.terrainFrequency || 0.08;
            let height = Math.sin(x * frequency) * Math.cos(z * frequency) * amplitude;
            height += Math.sin(x * frequency * 2 + 1) * Math.cos(z * frequency * 1.5) * amplitude * 0.5;
            height += Math.sin(x * frequency * 0.5) * Math.cos(z * frequency * 0.8 + 2) * amplitude * 0.8;
            if (biome.hasDunes) {
                height += Math.abs(Math.sin(x * 0.06 + z * 0.04)) * 4;
                height += Math.abs(Math.sin(x * 0.03 - z * 0.05)) * 3;
            }
            if (biome.hasSpikes) {
                const spikeFactor = Math.max(0, Math.sin(x * 0.3) * Math.sin(z * 0.3));
                height += spikeFactor * spikeFactor * 6;
            }
            // gentle flatten around the origin spawn so the start is always walkable
            const d = Math.sqrt(x * x + z * z);
            const flat = Math.max(0, 1 - d / 26);
            return height * (1 - flat * 0.8);
        }
        function getTerrainHeight(x, z) {
            return blendedHeight(x, z); // v20: morph-aware during realm transitions
        }

        function getTerrainNormal(x, z, target) {
            const delta = 0.5;
            const hL = getTerrainHeight(x - delta, z);
            const hR = getTerrainHeight(x + delta, z);
            const hD = getTerrainHeight(x, z - delta);
            const hU = getTerrainHeight(x, z + delta);
            
            const normal = target || new THREE.Vector3(hL - hR, 2 * delta, hD - hU); // FIX (Tier 3): reuse target when given
            normal.set(hL - hR, 2 * delta, hD - hU);
            normal.normalize();
            return normal;
        }

        function ensureAudioContext() {
            if (!state.soundEnabled) return null;
            const AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return null;
            if (!audioCtx) audioCtx = new AC();
            if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
            return audioCtx;
        }

        function playTone({ frequency = 440, duration = 0.08, type = 'sine', gain = 0.03, slideTo = null } = {}) {
            if (!state.soundEnabled) return;
            const ctx = ensureAudioContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(frequency, ctx.currentTime);
            if (slideTo !== null) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), ctx.currentTime + duration);
            g.gain.setValueAtTime(gain, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
            osc.connect(g);
            g.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + duration + 0.02);
        }

        function playUISound() { playTone({ frequency: 660, duration: 0.05, type: 'triangle', gain: 0.025 }); }
        function playPauseSound() { playTone({ frequency: 520, slideTo: 420, duration: 0.07, type: 'triangle', gain: 0.02 }); }

        // ============================================
        // v25: GRAPHICS QUALITY — Auto detects weak devices; Low strips shadows/particles
        // ============================================
        let _fpsSamples = [], _autoDecided = false;
        function applyQuality(mode) {
            const low = mode === 'low';
            renderer.shadowMap.enabled = !low;
            scene.traverse(o => { if (o.material) { const mats = Array.isArray(o.material) ? o.material : [o.material]; mats.forEach(m => m.needsUpdate = true); } });
            renderer.setPixelRatio(low ? 1 : Math.min(window.devicePixelRatio, 1.25));
            state.quality = mode;
            if (state.gamePhase === 'playing' || state.gamePhase === 'paused') {
                createEnvironmentParticles(BIOMES[state.currentBiome]);
                // T1: the horizon ring is a High-quality-only backdrop. Drop it when
                // switching to Low, and rebuild it when switching back.
                if (low) {
                    disposeHorizonRing();
                } else if (player) {
                    buildHorizonRing(BIOMES[state.currentBiome],
                        Math.floor(player.mesh.position.x / CHUNK),
                        Math.floor(player.mesh.position.z / CHUNK));
                }
            }
            needsRender = true;
        }
        function qualityLabel() { return state.quality === 'low' ? 'Low' : state.quality === 'high' ? 'High' : 'Auto'; }
        function cycleQuality() {
            const order = ['auto', 'high', 'low'];
            const next = order[(order.indexOf(state.quality) + 1) % 3];
            applyQuality(next);
            showUpgradeNotification(next === 'low' ? 'Graphics: Low (smoothest)' : next === 'high' ? 'Graphics: High' : 'Graphics: Auto');
        }
        function autoQualityTick(dt) { // samples fps while playing; drops to Low on weak devices (once)
            if (state.quality !== 'auto' || _autoDecided) return;
            if (state.gamePhase !== 'playing') return;
            if (dt > 0.005 && dt < 0.2) _fpsSamples.push(1 / dt);
            if (_fpsSamples.length >= 240) {
                _autoDecided = true;
                const avg = _fpsSamples.reduce((a, b) => a + b, 0) / _fpsSamples.length;
                if (avg < 40) {
                    applyQuality('low');
                    showUpgradeNotification('⚙ Graphics set to Low for smooth play');
                } else {
                    state.quality = 'high';
                }
                try { saveGame(); } catch (e) {}
            }
        }

        // ============================================
        // v23: SYNTH AUDIO ENGINE — everything generated in code, zero audio files.
        // One-shots (weapons, explosions, chimes), engine hum, biome ambience.
        // ============================================
        const SFX = (() => {
            let noiseBuf = null, engine = null, ambient = null, ambientTimer = null;

            function ctxOk() {
                const c = ensureAudioContext();
                if (!c) return null;
                if (!noiseBuf) {
                    noiseBuf = c.createBuffer(1, c.sampleRate * 1.2, c.sampleRate);
                    const d = noiseBuf.getChannelData(0);
                    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
                }
                return c;
            }
            function tone(freq, dur, type, gain, slideTo, attack) {
                if (!state.soundEnabled) return;
                const c = ctxOk(); if (!c) return;
                const o = c.createOscillator(), g = c.createGain();
                o.type = type || 'sine';
                o.frequency.setValueAtTime(freq, c.currentTime);
                if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), c.currentTime + dur);
                const a = attack || 0.005;
                g.gain.setValueAtTime(0.0001, c.currentTime);
                g.gain.exponentialRampToValueAtTime(gain || 0.05, c.currentTime + a);
                g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
                o.connect(g); g.connect(c.destination);
                o.start(); o.stop(c.currentTime + dur + 0.02);
            }
            function noise(dur, fFrom, fTo, gain, q) {
                if (!state.soundEnabled) return;
                const c = ctxOk(); if (!c) return;
                const s = c.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
                const f = c.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = q || 0.8;
                f.frequency.setValueAtTime(fFrom, c.currentTime);
                f.frequency.exponentialRampToValueAtTime(Math.max(40, fTo), c.currentTime + dur);
                const g = c.createGain();
                g.gain.setValueAtTime(gain || 0.2, c.currentTime);
                g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
                s.connect(f); f.connect(g); g.connect(c.destination);
                s.start(); s.stop(c.currentTime + dur + 0.05);
            }

            return {
                // -- one-shots --
                shoot() { tone(190, 0.09, 'square', 0.05, 90); noise(0.06, 2600, 500, 0.05); },
                enemyShoot() { tone(120, 0.11, 'square', 0.03, 60); },
                hit() { tone(340, 0.05, 'triangle', 0.05, 240); },
                crit() { tone(660, 0.07, 'sine', 0.06); setTimeout(() => tone(990, 0.08, 'sine', 0.05), 45); },
                kill() { tone(523, 0.07, 'sine', 0.045); setTimeout(() => tone(784, 0.09, 'sine', 0.04), 60); },
                explosion(size) {
                    const s = Math.min(1.6, 0.5 + size / 40);
                    noise(0.55 * s, 900, 90, 0.22 * Math.min(1, s));
                    tone(64, 0.5 * s, 'sine', 0.16 * Math.min(1, s), 30, 0.01);
                },
                shatterWood() { noise(0.22, 1800, 300, 0.14, 2); tone(140, 0.1, 'square', 0.05, 70); },
                shatterRock() { noise(0.3, 700, 120, 0.18); tone(90, 0.18, 'sine', 0.1, 40); },
                hurt() { tone(110, 0.16, 'sawtooth', 0.09, 55); noise(0.12, 500, 150, 0.08); },
                heal() { tone(440, 0.12, 'sine', 0.035, 660); },
                levelUp() { [392, 523, 659, 784].forEach((f, i) => setTimeout(() => tone(f, 0.12, 'triangle', 0.05), i * 80)); },
                cardPick() { tone(520, 0.06, 'triangle', 0.05, 700); },
                coin() { tone(880, 0.05, 'sine', 0.04); setTimeout(() => tone(1320, 0.06, 'sine', 0.03), 40); },
                bossAlarm() { for (let i = 0; i < 2; i++) setTimeout(() => { tone(98, 0.5, 'sawtooth', 0.11, 82); tone(196, 0.5, 'sawtooth', 0.05, 165); }, i * 650); },
                bossDown() { [523, 392, 330, 262, 523].forEach((f, i) => setTimeout(() => tone(f, 0.22, 'triangle', 0.07), i * 130)); noise(1.0, 800, 60, 0.2); },
                revive() { [330, 415, 494, 660].forEach((f, i) => setTimeout(() => tone(f, 0.3, 'sine', 0.05), i * 110)); },
                achievement() { [659, 880, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.15, 'sine', 0.05), i * 90)); },
                // -- engine hum --
                engineStart() {
                    if (!state.soundEnabled) return;
                    const c = ctxOk(); if (!c || engine) return;
                    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 42;
                    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 240;
                    const g = c.createGain(); g.gain.value = 0.0;
                    o.connect(f); f.connect(g); g.connect(c.destination); o.start();
                    engine = { o, g };
                },
                engineSet(speed01) {
                    if (!engine) return;
                    const c = audioCtx;
                    engine.o.frequency.setTargetAtTime(38 + speed01 * 46, c.currentTime, 0.12);
                    engine.g.gain.setTargetAtTime(0.012 + speed01 * 0.03, c.currentTime, 0.15);
                },
                engineStop() { if (engine) { try { engine.o.stop(); } catch (e) {} engine = null; } },
                // -- biome ambience (looped wind bed + biome-specific accents) --
                ambientSet(biome) {
                    SFX.ambientStop();
                    if (!state.soundEnabled) return;
                    const c = ctxOk(); if (!c) return;
                    const s = c.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
                    const f = c.createBiquadFilter(); f.type = 'bandpass';
                    const windy = biome.particleType === 'snow' || biome.particleType === 'sand' || biome.particleType === 'embers';
                    f.frequency.value = windy ? 520 : 260; f.Q.value = windy ? 0.6 : 0.4;
                    const g = c.createGain(); g.gain.value = 0;
                    g.gain.setTargetAtTime(windy ? 0.016 : 0.009, c.currentTime, 1.5);
                    s.connect(f); f.connect(g); g.connect(c.destination); s.start();
                    ambient = { s, g };
                    // biome accents
                    const type = biome.particleType;
                    ambientTimer = setInterval(() => {
                        if (!state.soundEnabled || !audioCtx) return;
                        if (type === 'leaves' || type === 'fireflies') { if (Math.random() < 0.5) tone(1800 + Math.random() * 1400, 0.14, 'sine', 0.012, 2400); }
                        else if (type === 'embers') { if (Math.random() < 0.4) noise(0.5, 160, 60, 0.02); }
                        else if (type === 'sparkles') { if (Math.random() < 0.35) tone(1200 + Math.random() * 900, 0.2, 'sine', 0.01, 1800); }
                        else if (type === 'snow' || type === 'sand') { if (Math.random() < 0.3) noise(0.8, 700, 350, 0.012); }
                    }, 2600);
                },
                ambientStop() {
                    if (ambientTimer) { clearInterval(ambientTimer); ambientTimer = null; }
                    if (ambient) { try { ambient.s.stop(); } catch (e) {} ambient = null; }
                },
                vibrate(pattern) { try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) {} },
                // -- v24: generative music (bass pulse + pad + arp; intensity follows combat) --
                musicStart() {
                    SFX.musicStop();
                    if (!state.musicEnabled || !state.soundEnabled) return;
                    const c = ctxOk(); if (!c) return;
                    const m = { step: 0, timer: null, intensity: 0.2 };
                    SFX._music = m;
                    m.timer = setInterval(() => {
                        if (!state.musicEnabled || !state.soundEnabled || !audioCtx) { SFX.musicStop(); return; }
                        if (state.gamePhase !== 'playing') return; // silence during pause/cards
                        const boss = state.bossActive && !state.bossActive.isDead;
                        m.intensity += ((boss ? 1 : (enemies.length > 4 ? 0.55 : 0.25)) - m.intensity) * 0.05;
                        const biome = BIOMES[state.currentBiome] || BIOMES[0];
                        const dark = biome.particleType === 'embers' || biome.particleType === 'sparkles';
                        const root = dark ? 49 : 55;
                        const scale = dark ? [0, 3, 5, 7, 10] : [0, 2, 4, 7, 9];
                        const s = m.step++;
                        if (s % 2 === 0) tone(root, 0.28, 'sawtooth', 0.028 + m.intensity * 0.02, root * 0.98);
                        if (s % 8 === 0) { [1, 1.5, dark ? 2.4 : 2].forEach(r => tone(root * 2 * r, 1.6, 'sine', 0.011)); }
                        if (s % 2 === 1 && Math.random() < 0.35 + m.intensity * 0.4) {
                            const semis = scale[Math.floor(Math.random() * scale.length)] + 12 * (2 + (Math.random() < 0.3 ? 1 : 0));
                            tone(root * Math.pow(2, semis / 12), 0.22, 'triangle', 0.014 + m.intensity * 0.012);
                        }
                        if (boss && s % 4 === 0) tone(root * 0.5, 0.3, 'square', 0.03, root * 0.45);
                    }, 260);
                },
                musicStop() { if (SFX._music) { clearInterval(SFX._music.timer); SFX._music = null; } }
            };
        })();

        function syncHUDControls() {
            // v2 UI: quickbar retired during play — settings live in the pause menu now
            const quick = document.getElementById('hud-quickbar');
            if (quick) quick.classList.remove('show');

            const btnSound = document.getElementById('btn-sound');
            const btnCamera = document.getElementById('btn-camera');
            const btnAssist = document.getElementById('btn-assist');
            const sndPanel = document.getElementById('toggle-sound-panel');
            const camPanel = document.getElementById('toggle-camera-panel');
            const astPanel = document.getElementById('toggle-assist-panel');
            if (btnSound) btnSound.textContent = state.soundEnabled ? '🔊' : '🔇';
            if (btnCamera) btnCamera.textContent = state.cameraMode === 'follow' ? '📷' : '🎥';
            if (btnAssist) btnAssist.textContent = state.controlAssist ? '🎯' : '◌';
            if (sndPanel) sndPanel.textContent = `Sound: ${state.soundEnabled ? 'On' : 'Off'}`;
            const musPanel = document.getElementById('toggle-music-panel'); // v24
            if (musPanel) musPanel.textContent = `Music: ${state.musicEnabled ? 'On' : 'Off'}`;
            const qPanel = document.getElementById('toggle-quality-panel'); // v25
            if (qPanel) qPanel.textContent = `Graphics: ${qualityLabel()}`;
            if (camPanel) camPanel.textContent = `Camera: ${state.cameraMode === 'follow' ? 'Follow' : 'Wide'}`;
            if (astPanel) astPanel.textContent = `Assist: ${state.controlAssist ? 'On' : 'Off'}`;
        }

        function toggleSound() {
            state.soundEnabled = !state.soundEnabled;
            if (state.soundEnabled) ensureAudioContext();
            playUISound();
            syncHUDControls();
        }

        function toggleCameraMode() {
            state.cameraMode = state.cameraMode === 'follow' ? 'wide' : 'follow';
            playUISound();
            syncHUDControls();
        }

        function toggleControlAssist() {
            state.controlAssist = !state.controlAssist;
            playUISound();
            syncHUDControls();
        }

        function openSettings() {
            if (state.gamePhase === 'playing') pauseGame();
            setScreenVisibility('settings-screen', true);
            syncHUDControls();
        }

        function closeSettings() {
            setScreenVisibility('settings-screen', false);
            syncHUDControls();
        }

        // ============================================
        // BIOME LOADING - Creates entire environment
        // ============================================
        // v15: cinematic biome transition — dim to dark with the realm's name,
        // rebuild the world behind the curtain, fade back in. Debounced so chained
        // level-ups land on the final biome.
        // v20: persistent sky canvas — redrawn (and blended) without texture churn
        let _skyCanvas = null, _skyCtx = null, _skyTexture = null;
        function drawSky(from, to, t) {
            if (!_skyCanvas) {
                _skyCanvas = document.createElement('canvas');
                _skyCanvas.width = 2; _skyCanvas.height = 512;
                _skyCtx = _skyCanvas.getContext('2d');
                _skyTexture = new THREE.CanvasTexture(_skyCanvas);
                scene.background = _skyTexture;
            }
            const ctx = _skyCtx;
            const top = new THREE.Color(from.skyTop).lerp(new THREE.Color(to.skyTop), t);
            const bot = new THREE.Color(from.skyBottom).lerp(new THREE.Color(to.skyBottom), t);
            const hex = (c) => '#' + c.getHexString();
            const gradient = ctx.createLinearGradient(0, 0, 0, 512);
            gradient.addColorStop(0, hex(top));
            gradient.addColorStop(1, hex(bot));
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 2, 512);
            // celestial details fade in from the destination biome
            ctx.globalAlpha = t;
            if (to.particleType === 'sparkles') {
                for (let i = 0; i < 90; i++) {
                    ctx.fillStyle = 'rgba(255,255,255,' + (0.25 + Math.random() * 0.55) + ')';
                    ctx.fillRect(Math.random() * 2, Math.random() * 300, Math.random() > 0.8 ? 2 : 1, Math.random() > 0.8 ? 2 : 1);
                }
            } else if (to.particleType === 'embers') {
                for (let i = 0; i < 7; i++) {
                    const gy = 260 + Math.random() * 200, gr = 60 + Math.random() * 90;
                    const g2 = ctx.createRadialGradient(1, gy, 0, 1, gy, gr);
                    g2.addColorStop(0, 'rgba(255,90,20,0.34)');
                    g2.addColorStop(1, 'rgba(255,90,20,0)');
                    ctx.fillStyle = g2;
                    ctx.fillRect(0, gy - gr, 2, gr * 2);
                }
            } else {
                const sunY = 90 + 100; // deterministic mid position
                const sg = ctx.createRadialGradient(1, sunY, 2, 1, sunY, 46);
                sg.addColorStop(0, 'rgba(255,250,230,0.95)');
                sg.addColorStop(0.25, 'rgba(255,240,200,0.55)');
                sg.addColorStop(1, 'rgba(255,240,200,0)');
                ctx.fillStyle = sg;
                ctx.fillRect(0, sunY - 46, 2, 92);
                for (let i = 0; i < 9; i++) {
                    const cy = 80 + (i * 37) % 260, cw = 1 + (i % 3) * 0.4;
                    ctx.fillStyle = 'rgba(255,255,255,' + (0.05 + (i % 4) * 0.03) + ')';
                    ctx.beginPath();
                    ctx.ellipse(1, cy, cw, 10 + (i % 5) * 6, 0, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            ctx.globalAlpha = 1;
            _skyTexture.needsUpdate = true;
        }

        // v20: MORPHING REALM TRANSITION — no fade. The world blends: terrain heights,
        // ground colors, sky, fog and lights lerp over ~3.5s while environment chunks
        // rebuild in a radial wave (one per frame — no lag spike).
        let biomeBlend = null;
        function blendedHeight(x, z) {
            if (!biomeBlend) return terrainHeightRaw(x, z, _activeBiomeRef);
            const e = biomeBlend.e;
            return terrainHeightRaw(x, z, biomeBlend.from) * (1 - e) + terrainHeightRaw(x, z, biomeBlend.to) * e;
        }
        function startBiomeMorph(targetIdx) {
            const idx = targetIdx % BIOMES.length;
            const from = BIOMES[state.currentBiome];
            const to = BIOMES[idx];
            if (from === to) return;
            const px = player ? player.mesh.position.x : 0;
            const pz = player ? player.mesh.position.z : 0;
            biomeBlend = { from, to, t: 0, e: 0, start: performance.now() + 700, dur: 8000, tileI: 0, particlesSwapped: false, finalPass: false, frameFlip: 0, heavyFrame: false }; // v21: slow + gentle
            state.currentBiome = idx;
            _activeBiomeRef = to; // new chunks + spawns use the destination biome immediately
            // radial rebuild queue (existing chunks, nearest first)
            const waveOrder = [...envChunks.keys()].map(k => {
                const parts = k.split(',');
                return { k, cx: +parts[0], cz: +parts[1], d: ((+parts[0]) * CHUNK - px) ** 2 + ((+parts[1]) * CHUNK - pz) ** 2 };
            }).sort((a, b) => a.d - b.d);
            waveOrder.forEach(w => buildChunkTask(w.cx, w.cz, true)); // v22: whole wave queued at once (front keeps order)
            biomeBlend.rebuildQueue = []; // drained: tasks are tracked in chunkTasks now
            // announce the realm
            const biomeEl = document.getElementById('biome-name');
            biomeEl.textContent = to.name;
            biomeEl.classList.add('show');
            clearTimeout(biomeEl._t);
            biomeEl._t = setTimeout(() => biomeEl.classList.remove('show'), 3000);
            streamChunks(px, pz, false); // any missing chunks queue normally (target biome)
        }
        const _lerpColor = new THREE.Color(), _lerpColor2 = new THREE.Color();
        let _lastPhysicsCost = 0;
        function updateBiomeMorph() {
            const b = biomeBlend;
            if (!b) return;
            if (_lastPhysicsCost > 26) { b.skipCount = (b.skipCount || 0) + 1; b.heavyFrame = b.skipCount < 3; } // v22: breathe, but never starve
            else b.skipCount = 0;
            b.t = Math.min(1, Math.max(0, (performance.now() - b.start) / b.dur)); // v21: 700ms grace before blending starts
            b.e = b.t * b.t * (3 - 2 * b.t); // smoothstep
            const e = b.e;
            // fog, lights, exposure blend
            scene.fog.color.copy(_lerpColor.set(b.from.fogColor).lerp(_lerpColor2.set(b.to.fogColor), e));
            scene.fog.near = b.from.fogNear + (b.to.fogNear - b.from.fogNear) * e;
            scene.fog.far = b.from.fogFar + (b.to.fogFar - b.from.fogFar) * e;
            renderer.toneMappingExposure = (b.from.exposure || 1) + ((b.to.exposure || 1) - (b.from.exposure || 1)) * e;
            ambientLight.color.copy(_lerpColor.set(b.from.ambientLight).lerp(_lerpColor2.set(b.to.ambientLight), e));
            dirLight.color.copy(_lerpColor.set(b.from.sunColor).lerp(_lerpColor2.set(b.to.sunColor), e));
            dirLight.intensity = (b.from.sunIntensity || 1) + ((b.to.sunIntensity || 1) - (b.from.sunIntensity || 1)) * e;
            hemisphereLight.color.copy(_lerpColor.set(b.from.sunColor).lerp(_lerpColor2.set(b.to.sunColor), e));
            hemisphereLight.groundColor.copy(_lerpColor.set(b.from.groundColor).lerp(_lerpColor2.set(b.to.groundColor), e));
            // sky blend (redraw throttled)
            if (!b._skyAt || performance.now() - b._skyAt > 260) { b._skyAt = performance.now(); drawSky(b.from, b.to, e); } // v21: throttled
            // v21: feather-light workload — one small job per frame, alternating,
            // and nothing at all on a frame that just ran heavy (weak devices).
            // v22: the wave spawns prioritized micro-op tasks; old chunks stay visible until swapped
            b.frameFlip = (b.frameFlip + 1) % 2;
            if (!b.heavyFrame) {
                if (b.frameFlip === 0) {
                    runChunkTasks(b.t >= 0.8 ? 4 : 2); // v22: whole wave already queued — just spend budget
                } else if (b.frameFlip === 1) {
                    const tiles = groundTiles.filter(tl => tl.worldX !== null);
                    if (b.tileI < tiles.length) {
                        const tl = tiles[b.tileI++];
                        bakeGroundTile(tl.mesh, tl.worldX, tl.worldZ, BIOMES[state.currentBiome]);
                    } else if (b.t < 1) b.tileI = 0; // next rolling round
                }
            }
            b.heavyFrame = false;
            // particles swap midway
            if (!b.particlesSwapped && b.t > 0.5) { b.particlesSwapped = true; createEnvironmentParticles(b.to); SFX.ambientSet(b.to); } // v23
            // finish: everything rebuilt + final exact-state tile pass done
            if (b.t >= 1 && (!b.rebuildQueue || !b.rebuildQueue.length) && chunkTasks.length === 0) {
                // v22: final exact-state tile pass — budgeted, several tiles per frame
                const tilesF = groundTiles.filter(tl => tl.worldX !== null);
                if (!b.finalPass) { b.finalPass = true; b.tileI = 0; }
                const _fT0 = performance.now();
                while (b.tileI < tilesF.length && performance.now() - _fT0 < 3) {
                    const tl = tilesF[b.tileI++];
                    bakeGroundTile(tl.mesh, tl.worldX, tl.worldZ, BIOMES[state.currentBiome]);
                }
                if (b.tileI >= tilesF.length) {
                    // T1: the realm has fully morphed — repaint the skyline in the new
                    // biome's colours. The anchor is unchanged, so force it by clearing
                    // the cached biome name.
                    horizonRing.biome = null;
                    if (player) buildHorizonRing(BIOMES[state.currentBiome],
                        Math.floor(player.mesh.position.x / CHUNK),
                        Math.floor(player.mesh.position.z / CHUNK));
                    biomeBlend = null;
                }
            }
        }
        function maybeTransitionBiome() { // v20: run the pending realm morph once cards are done
            if (state.pendingBiome !== null && state.pendingBiome !== undefined && !state.isChoosingUpgrade) {
                const target = state.pendingBiome;
                state.pendingBiome = null;
                startBiomeMorph(target);
            }
        }
        function loadBiome(biomeIndex) {
            const biome = BIOMES[biomeIndex % BIOMES.length];
            state.currentBiome = biomeIndex % BIOMES.length;
            _activeBiomeRef = biome; // v17: analytic terrain follows the active biome

            // Clear previous environment
            // FIX (Tier 2): dispose GPU resources of the old environment before rebuilding
            environmentObjects.forEach(obj => { scene.remove(obj); disposeObject3D(obj); });
            environmentObjects = [];
            environmentParticles = [];
            if (envParticleMesh) { // FIX (Tier 3): dispose the previous biome's instanced particles
                scene.remove(envParticleMesh);
                disposeObject3D(envParticleMesh);
                if (envParticleMesh.dispose) envParticleMesh.dispose();
                envParticleMesh = null;
            }
            envColliders = []; // FIX (Tier 3): collision data is rebuilt with the environment
            if (waterMesh) { scene.remove(waterMesh); disposeObject3D(waterMesh); waterMesh = null; }
            lavaMeshes.forEach(m => { scene.remove(m); disposeObject3D(m); });
            lavaMeshes = [];

            // FIX (Tier 2): release the old sun's shadow-map render target & sky texture
            if (dirLight && dirLight.shadow && dirLight.shadow.map) {
                dirLight.shadow.map.dispose();
                dirLight.shadow.map = null;
            }
            if (scene.background && scene.background.isTexture) scene.background.dispose();

            // Show biome name
            const biomeEl = document.getElementById('biome-name');
            biomeEl.textContent = biome.name;
            biomeEl.classList.add('show');
            setTimeout(() => biomeEl.classList.remove('show'), 3000);

            drawSky(biome, biome, 1); // v20: unified sky painter (supports blending)

            // Fog
            scene.fog = new THREE.Fog(biome.fogColor, biome.fogNear, biome.fogFar);
            renderer.toneMappingExposure = biome.exposure || 1.0; // v2 visuals: per-biome grading

            // Lighting
            if (ambientLight) scene.remove(ambientLight);
            if (dirLight) scene.remove(dirLight);
            if (hemisphereLight) scene.remove(hemisphereLight);

            hemisphereLight = new THREE.HemisphereLight(biome.sunColor, biome.groundColor, 0.8); // v3: skylight punch
            scene.add(hemisphereLight);

            ambientLight = new THREE.AmbientLight(biome.ambientLight, 0.78); // v3: brighter base
            scene.add(ambientLight);

            dirLight = new THREE.DirectionalLight(biome.sunColor, biome.sunIntensity);
            dirLight.position.set(50, 80, 30);
            dirLight.castShadow = true;
            dirLight.shadow.mapSize.width = 2048; // FIX (v2): crisper shadows (perf headroom from Tier 3)
            dirLight.shadow.mapSize.height = 2048;
            dirLight.shadow.camera.near = 10;
            dirLight.shadow.camera.far = 200;
            dirLight.shadow.bias = -0.0005; // v3: cleaner shadow edges
            dirLight.shadow.camera.left = -115; // FIX (v2/P1): covers the bigger map
            dirLight.shadow.camera.right = 115;
            dirLight.shadow.camera.top = 115;
            dirLight.shadow.camera.bottom = -115;
            scene.add(dirLight);

            // v17: infinite world — tiles + streamed chunks around the player
            const px = player ? player.mesh.position.x : 0;
            const pz = player ? player.mesh.position.z : 0;
            for (const key of [...envChunks.keys()]) disposeEnvChunk(key);
            chunkBuildQueue = [];
            buildGroundTiles(biome);
            repositionGroundTiles(biome, px, pz);
            streamChunks(px, pz, true); // immediate: hidden behind the realm transition

            // Particles
            createEnvironmentParticles(biome);
        }

        // v2/v3 visuals: shared procedural ground detail texture + normal map
        let _groundDetailTex = null;
        function getGroundDetailTexture() {
            if (_groundDetailTex) return _groundDetailTex;
            const c = document.createElement('canvas');
            c.width = c.height = 256;
            const g = c.getContext('2d');
            g.fillStyle = '#ffffff';
            g.fillRect(0, 0, 256, 256);
            for (let i = 0; i < 4200; i++) {
                const v = 200 + Math.floor(Math.random() * 56);
                g.fillStyle = 'rgba(' + v + ',' + v + ',' + v + ',' + (0.05 + Math.random() * 0.12) + ')';
                const r = 0.6 + Math.random() * 2.4;
                g.beginPath();
                g.arc(Math.random() * 256, Math.random() * 256, r, 0, Math.PI * 2);
                g.fill();
            }
            _groundDetailTex = new THREE.CanvasTexture(c);
            _groundDetailTex.wrapS = _groundDetailTex.wrapT = THREE.RepeatWrapping;
            _groundDetailTex.repeat.set(1, 1); // v17: UVs are world-scaled per tile
            return _groundDetailTex;
        }

        let _groundNormalTex = null;
        function getGroundNormalMap() {
            if (_groundNormalTex) return _groundNormalTex;
            const S = 256, c = document.createElement('canvas');
            c.width = c.height = S;
            const g = c.getContext('2d');
            const h = new Float32Array(S * S);
            for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
                h[y * S + x] = Math.sin(x * 0.11) * Math.cos(y * 0.09) * 0.5
                             + Math.sin((x + y) * 0.05) * 0.35
                             + Math.random() * 0.3;
            }
            const img = g.createImageData(S, S);
            const strength = 2.2;
            for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
                const xm = (x - 1 + S) % S, xp = (x + 1) % S, ym = (y - 1 + S) % S, yp = (y + 1) % S;
                const dx = (h[y * S + xp] - h[y * S + xm]) * strength;
                const dy = (h[yp * S + x] - h[ym * S + x]) * strength;
                const len = Math.sqrt(dx * dx + dy * dy + 1);
                const i = (y * S + x) * 4;
                img.data[i]     = Math.floor(((-dx / len) * 0.5 + 0.5) * 255);
                img.data[i + 1] = Math.floor(((-dy / len) * 0.5 + 0.5) * 255);
                img.data[i + 2] = Math.floor((1 / len) * 0.5 * 255 + 127.5);
                img.data[i + 3] = 255;
            }
            g.putImageData(img, 0, 0);
            _groundNormalTex = new THREE.CanvasTexture(c);
            _groundNormalTex.wrapS = _groundNormalTex.wrapT = THREE.RepeatWrapping;
            _groundNormalTex.repeat.set(1, 1);
            return _groundNormalTex;
        }

        // shared per-biome environment materials (cached for the session, marked shared)
        const envMatCache = {};
        function getEnvMat(key, factory) {
            if (!envMatCache[key]) envMatCache[key] = markShared(factory());
            return envMatCache[key];
        }

        // ---------- v17: streamed ground tiles ----------
        let groundTiles = [];
        function bakeGroundTile(mesh, wx, wz, biome) {
            const pos = mesh.geometry.attributes.position;
            const uv = mesh.geometry.attributes.uv;
            const colors = [];
            const blendB = biomeBlend; // v20: blend colors during morphs
            const bcol = (k) => blendB ? new THREE.Color(blendB.from[k]).lerp(new THREE.Color(blendB.to[k]), blendB.e) : new THREE.Color(biome[k]);
            const baseColor = bcol('groundColor');
            const grassColor = bcol('grassColor');
            const isFrozen = biome.name.includes('Frozen');
            const isBlood = biome.name.includes('Blood Moon');
            const dryColor = new THREE.Color(isFrozen ? 0x9fb4c4 : isBlood ? 0x501f1f : 0x7a5c33);
            const dryness = biome.name.includes('Forest') ? 1.0 : biome.name.includes('Desert') ? 1.2
                          : biome.name.includes('Swamp') ? 0.8 : biome.name.includes('Volcanic') ? 0.6
                          : biome.name.includes('Frozen') ? 1.05 : 0.35; // v18: visible blue-grey patches in snow
            const uSize = 48; // world units per texture repeat — continuous across tiles
            const rnd = chunkSeededRand(((wx * 31 + wz * 17) | 0) >>> 0); // stable color noise per tile
            for (let i = 0; i < pos.count; i++) {
                const lx = pos.getX(i), ly = pos.getY(i);        // plane local (pre-rotation)
                const wxv = wx + lx, wzv = wz - ly;              // world coords of this vertex
                const h = blendedHeight(wxv, wzv); // v20: morph-aware heights
                pos.setZ(i, h);
                const patch = Math.sin(wxv * 0.045 + 1.3) * Math.cos(wzv * 0.05 - 0.7)
                            + Math.sin(wxv * 0.021 - wzv * 0.033 + 0.5) * 0.6;
                const dry = Math.min(1, Math.max(0, (patch - 0.45) * 1.7)) * dryness;
                const blend = Math.min(1, Math.max(0, (h + 1) / 4));
                const c = baseColor.clone().lerp(grassColor, blend * 0.4 + rnd() * 0.15);
                c.lerp(dryColor, dry * 0.5 + rnd() * 0.08);
                colors.push(c.r, c.g, c.b);
                uv.setXY(i, wxv / uSize, -wzv / uSize);
            }
            mesh.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            pos.needsUpdate = true;
            uv.needsUpdate = true;
            mesh.geometry.computeVertexNormals();
            // v21: bounding sphere skipped — tiles are never frustum-culled
        }

        function buildGroundTiles(biome) {
            groundTiles.forEach(t => { scene.remove(t.mesh); disposeObject3D(t.mesh); });
            groundTiles = [];
            const segs = 24, size = CHUNK; // 2-unit vertex spacing; shared edges are seamless (same analytic fn)
            for (let ix = 0; ix < CHUNK_TILES; ix++) for (let iz = 0; iz < CHUNK_TILES; iz++) {
                const geo = new THREE.PlaneGeometry(size, size, segs, segs);
                const mat = new THREE.MeshStandardMaterial({
                    vertexColors: true, roughness: 0.9, metalness: 0.1,
                    map: getGroundDetailTexture(), normalMap: getGroundNormalMap(),
                    normalScale: new THREE.Vector2(0.35, 0.35)
                });
                const mesh = new THREE.Mesh(geo, mat);
                mesh.rotation.x = -Math.PI / 2;
                mesh.receiveShadow = true;
                mesh.frustumCulled = false;
                scene.add(mesh);
                groundTiles.push({ mesh, ix, iz, worldX: null, worldZ: null });
            }
            _lastTileAnchor = null;
        }

        let _lastTileAnchor = null;
        function repositionGroundTiles(biome, px, pz) {
            const ax = Math.floor(px / CHUNK), az = Math.floor(pz / CHUNK);
            if (_lastTileAnchor && _lastTileAnchor.ax === ax && _lastTileAnchor.az === az) return;
            const half = Math.floor(CHUNK_TILES / 2);
            for (const t of groundTiles) {
                const cx = ax + t.ix - half, cz = az + t.iz - half;
                const wx = cx * CHUNK + CHUNK / 2, wz = cz * CHUNK + CHUNK / 2; // tile center
                t.mesh.position.set(wx, 0, wz);
                if (t.worldX !== wx || t.worldZ !== wz) {
                    bakeGroundTile(t.mesh, wx, wz, biome);
                    t.worldX = wx; t.worldZ = wz;
                }
            }
            _lastTileAnchor = { ax, az };
            buildHorizonRing(biome, ax, az); // T1: keep the skyline populated as we roam
        }

        // ─────────────────────────────────────────────────────────────────────────
        // T1-FEATURE (ThilteteTankGame): HORIZON RING
        //
        // Ported forward from the original prototype's createBackgroundDecorations().
        //
        // The problem it solves: streamed scenery only exists inside
        //   CHUNK_ENV_RADIUS(2) x CHUNK(48) = 96 units,
        // but the ground tiles reach +/-120u and per-biome fog reaches as far as 225u
        // (Golden Desert). In 8 of the 10 realms that leaves a wide band of completely
        // bare ground between the last real tree and the fog line.
        //
        // The prototype filled exactly this band with a cheap ring of shadowless,
        // low-segment trees and rocks. This version keeps that idea but modernises it
        // to match the rest of the v25 renderer:
        //   * two InstancedMesh objects (1 draw call each) instead of ~330 Groups
        //   * deterministic placement from a ring seed, so the skyline is stable
        //   * follows the player by chunk anchor, like the ground tiles do
        //   * never casts or receives shadows, and sits outside the collision system
        //     entirely — it is pure backdrop and is never hit-tested
        //   * skipped on Low quality
        // ─────────────────────────────────────────────────────────────────────────
        let horizonRing = { trees: null, rocks: null, anchorX: null, anchorZ: null, biome: null };
        const _horizonAxis = new THREE.Vector3(0, 1, 0); // local: no cross-block init-order dependency

        function disposeHorizonRing() {
            for (const key of ['trees', 'rocks']) {
                const m = horizonRing[key];
                if (m) { scene.remove(m); if (m.geometry) m.geometry.dispose(); if (m.dispose) m.dispose(); }
                horizonRing[key] = null;
            }
            horizonRing.anchorX = horizonRing.anchorZ = null;
            horizonRing.biome = null;
        }

        function buildHorizonRing(biome, ax, az) {
            if (state.quality === 'low') { disposeHorizonRing(); return; }

            // Rebuild only when the realm changes or the player crosses a chunk.
            if (horizonRing.biome === biome.name && horizonRing.anchorX === ax && horizonRing.anchorZ === az) return;

            const innerR = CHUNK_ENV_RADIUS * CHUNK * 0.92;              // ~88u: just inside real scenery
            const outerR = Math.max(innerR + 24, (biome.fogFar || 160) * 1.06); // just past the fog line
            if (outerR <= innerR) { disposeHorizonRing(); return; }

            const centerX = ax * CHUNK + CHUNK / 2;
            const centerZ = az * CHUNK + CHUNK / 2;

            // Density scales with the area actually being covered, capped for safety.
            const area = Math.PI * (outerR * outerR - innerR * innerR);
            const count = Math.min(420, Math.round(area / 190));
            const leafy = biome.name.includes('Forest') || biome.name.includes('Swamp') ||
                          biome.name.includes('Autumn') || biome.name.includes('Sakura') ||
                          biome.name.includes('Frozen') || biome.name.includes('Desert');
            const treeShare = leafy ? 0.7 : 0.25; // prototype used 70/30 in vegetated realms
            const treeCount = Math.round(count * treeShare);
            const rockCount = count - treeCount;

            const needRebuild = !horizonRing.trees || !horizonRing.rocks ||
                                horizonRing.biome !== biome.name ||
                                horizonRing.trees.count !== treeCount ||
                                horizonRing.rocks.count !== rockCount;

            if (needRebuild) {
                disposeHorizonRing();

                // Deliberately coarse geometry — these are only ever seen through fog.
                const foliageColor = biome.name.includes('Swamp')  ? 0x4a6a3a
                                   : biome.name.includes('Autumn') ? 0xd97c2b
                                   : biome.name.includes('Sakura') ? 0xf9a8d4
                                   : biome.name.includes('Frozen') ? 0x2f5d50
                                   : biome.name.includes('Desert') ? 0x228b22
                                   : 0x2d5a27;
                let rockColor = 0x6a6a6a;
                if (biome.name.includes('Volcanic'))   rockColor = 0x2a2a2a;
                if (biome.name.includes('Frozen'))     rockColor = 0x8090a0;
                if (biome.name.includes('Desert'))     rockColor = 0xb8956a;
                if (biome.name.includes('Blood Moon')) rockColor = 0x4a2020;
                if (biome.name.includes('Neon'))       rockColor = 0x1a1a24;
                if (biome.name.includes('Sakura'))     rockColor = 0xb09898;
                if (biome.name.includes('Autumn'))     rockColor = 0x8a6a4a;

                const treeMat = getEnvMat('horizon|' + biome.name + '|tree',
                    () => new THREE.MeshLambertMaterial({ color: foliageColor, fog: true }));
                const rockMat = getEnvMat('horizon|' + biome.name + '|rock',
                    () => new THREE.MeshLambertMaterial({ color: rockColor, fog: true }));

                if (treeCount > 0) {
                    const treeGeo = new THREE.ConeGeometry(2.2, 6.5, 5); // 5 segments, as the prototype did
                    treeGeo.translate(0, 3.25, 0);
                    const trees = new THREE.InstancedMesh(treeGeo, treeMat, treeCount);
                    trees.castShadow = false; trees.receiveShadow = false;
                    trees.frustumCulled = false;
                    trees.renderOrder = -1;
                    scene.add(trees);
                    horizonRing.trees = trees;
                }
                if (rockCount > 0) {
                    const rockGeo = new THREE.DodecahedronGeometry(1.6, 0);
                    rockGeo.translate(0, 0.7, 0);
                    const rocks = new THREE.InstancedMesh(rockGeo, rockMat, rockCount);
                    rocks.castShadow = false; rocks.receiveShadow = false;
                    rocks.frustumCulled = false;
                    rocks.renderOrder = -1;
                    scene.add(rocks);
                    horizonRing.rocks = rocks;
                }
            }

            // Place instances. The seed is derived from the anchor so the skyline is
            // deterministic: walk away and come back and it looks the same.
            const rnd = chunkSeededRand((((ax * 73856093) ^ (az * 19349663) ^ 0x5eed) >>> 0));
            const m4 = new THREE.Matrix4();
            const q = new THREE.Quaternion();
            const pos = new THREE.Vector3();
            const scl = new THREE.Vector3();
            const place = (mesh, minScale, maxScale) => {
                if (!mesh) return;
                for (let i = 0; i < mesh.count; i++) {
                    const a = rnd() * Math.PI * 2;
                    const r = Math.sqrt(innerR * innerR + rnd() * (outerR * outerR - innerR * innerR));
                    const x = centerX + Math.cos(a) * r;
                    const z = centerZ + Math.sin(a) * r;
                    const s = minScale + rnd() * (maxScale - minScale);
                    // Sink slightly so the bases never float over uneven ground.
                    pos.set(x, getTerrainHeight(x, z) - 0.4, z);
                    q.setFromAxisAngle(_horizonAxis, rnd() * Math.PI * 2);
                    scl.set(s, s * (0.8 + rnd() * 0.5), s);
                    mesh.setMatrixAt(i, m4.compose(pos, q, scl));
                }
                mesh.instanceMatrix.needsUpdate = true;
            };
            place(horizonRing.trees, 0.8, 1.5);
            place(horizonRing.rocks, 0.7, 1.6);

            horizonRing.anchorX = ax;
            horizonRing.anchorZ = az;
            horizonRing.biome = biome.name;
            needsRender = true;
        }

        // ---------- v17: streamed environment chunks ----------
        // Each 48x48 chunk generates deterministic scenery from its seed, baked into
        // merged meshes (trees/rocks) + one grass InstancedMesh + feature props.
        // Chunks build one-per-frame (no hitches); revisiting regenerates identically.
        // v22: INCREMENTAL CHUNK BUILDER — a chunk is ~20 micro-ops (objects, merges,
        // grass, commit) spread across frames and built OFF-SCREEN; the old chunk stays
        // visible until the new one swaps in atomically. No frame ever does heavy work.
        function planEnvChunk(cx, cz) {
            const biome = BIOMES[state.currentBiome];
            const rnd = chunkSeededRand(chunkSeed(cx, cz));
            const ox = cx * CHUNK, oz = cz * CHUNK;
            const chunk = { meshes: [], colliders: [], key: chunkKey(cx, cz), buckets: null, destructibles: [] };
            const buckets = new Map();
            const put = (matKey, mat, geo, castShadow, receiveShadow) => {
                let b = buckets.get(matKey);
                if (!b) { b = { mat, castShadow, receiveShadow, geos: [], mesh: null }; buckets.set(matKey, b); }
                b.geos.push(geo);
            };
            const ops = [];
            const density = (CHUNK * CHUNK) / (136 * 136) * 6;

            const openness = biome.name.includes('Forest') || biome.name.includes('Swamp') ? 0.55 : 0.35;
            const groves = rnd() < openness ? 1 + Math.floor(rnd() * 2) : 0;
            const treeSpots = [];
            for (let g = 0; g < groves; g++) {
                const gx = ox + 8 + rnd() * (CHUNK - 16);
                const gz = oz + 8 + rnd() * (CHUNK - 16);
                const trees = 2 + Math.floor(rnd() * 4);
                for (let t = 0; t < trees; t++) {
                    const a = rnd() * Math.PI * 2;
                    const d = rnd() * rnd() * 11;
                    const x = gx + Math.cos(a) * d, z = gz + Math.sin(a) * d;
                    if (x > ox && x < ox + CHUNK && z > oz && z < oz + CHUNK && Math.hypot(x, z) > 26) treeSpots.push([x, z]);
                }
            }
            treeSpots.forEach(s => ops.push(() => createSingleTree(biome, s[0], s[1], rnd, put, chunk)));

            const rockN = Math.round((biome.rockCount || 0) * density);
            const rockSpots = [];
            for (let i = 0; i < rockN; i++) {
                const x = ox + rnd() * CHUNK, z = oz + rnd() * CHUNK;
                if (Math.hypot(x, z) > 20) rockSpots.push([x, z]);
            }
            rockSpots.forEach(s => ops.push(() => createSingleRock(biome, s[0], s[1], rnd, put, chunk)));

            if (biome.hasWater) { const roll = rnd(); const wx = ox + CHUNK * 0.2 + rnd() * CHUNK * 0.6, wz = oz + CHUNK * 0.2 + rnd() * CHUNK * 0.6; if (roll < 0.4) ops.push(() => buildChunkWater(biome, wx, wz, chunk)); }
            if (biome.hasLava) for (let i = 0; i < 2; i++) { const roll = rnd(); const lx = ox + 8 + rnd() * (CHUNK - 16), lz = oz + 8 + rnd() * (CHUNK - 16); if (roll < 0.5) ops.push(() => buildChunkLava(biome, lx, lz, chunk, rnd)); }
            if (biome.hasCrystals) for (let i = 0; i < 8; i++) { const roll = rnd(); const cxp = ox + rnd() * CHUNK, czp = oz + rnd() * CHUNK; if (roll < 0.7) ops.push(() => buildChunkCrystalCluster(biome, cxp, czp, chunk, rnd)); }
            if (biome.hasSpikes) for (let i = 0; i < 6; i++) { const roll = rnd(); const sx = ox + rnd() * CHUNK, sz = oz + rnd() * CHUNK; if (roll < 0.7) ops.push(() => buildChunkSpikes(biome, sx, sz, chunk, rnd)); }

            return { cx, cz, chunk, buckets, put, ops, i: 0, phase: 'objects', mergeList: null, mi: 0, grass: biome.grassCount > 0, rnd };
        }

        function stepChunkTask(task) { // one micro-op; returns true when the chunk commits
            const c = task.chunk;
            if (task.phase === 'objects') {
                if (task.i < task.ops.length) { task.ops[task.i++](); return false; }
                task.mergeList = [...task.buckets.values()].filter(b => b.geos.length);
                task.phase = 'merge'; task.mi = 0;
                return false;
            }
            if (task.phase === 'merge') {
                if (task.mi < task.mergeList.length) {
                    const b = task.mergeList[task.mi++];
                    const merged = new THREE.Mesh(mergeGeometries(b.geos), b.mat);
                    merged.castShadow = b.castShadow;
                    merged.receiveShadow = b.receiveShadow;
                    merged.frustumCulled = false;
                    b.mesh = merged;
                    c.meshes.push(merged);
                    return false;
                }
                task.phase = 'grass';
                return false;
            }
            if (task.phase === 'grass') {
                task.phase = 'commit';
                if (!task.grass) return false;
                const biome = BIOMES[state.currentBiome];
                const density = (CHUNK * CHUNK) / (136 * 136) * 6;
                const blades = Math.round(biome.grassCount * density * (state.quality === 'low' ? 0.4 : 1)) * 5; // v25
                if (blades > 0) {
                    const ox = task.cx * CHUNK, oz = task.cz * CHUNK, rnd = task.rnd;
                    const grassGeo = new THREE.ConeGeometry(0.1, 0.8, 4);
                    const grassMat = new THREE.MeshStandardMaterial({ color: biome.grassColor, roughness: 0.9, side: THREE.DoubleSide });
                    const inst = new THREE.InstancedMesh(grassGeo, grassMat, blades);
                    let idx = 0;
                    for (let i = 0; i < Math.floor(blades / 5) && idx < blades; i++) {
                        const cxp = ox + rnd() * CHUNK, czp = oz + rnd() * CHUNK;
                        const ty = getTerrainHeight(cxp, czp);
                        for (let j = 0; j < 5 && idx < blades; j++) {
                            _dummy.position.set(cxp + (rnd() - 0.5) * 0.5, ty + 0.4, czp + (rnd() - 0.5) * 0.5);
                            _dummy.rotation.set((rnd() - 0.5) * 0.3, 0, (rnd() - 0.5) * 0.3);
                            _dummy.scale.setScalar(1);
                            _dummy.updateMatrix();
                            inst.setMatrixAt(idx++, _dummy.matrix);
                        }
                    }
                    inst.count = idx;
                    inst.instanceMatrix.needsUpdate = true;
                    inst.frustumCulled = false;
                    c.meshes.push(inst);
                }
                return false;
            }
            if (task.phase === 'commit') {
                c.buckets = task.buckets;
                if (envChunks.has(c.key)) disposeEnvChunk(c.key); // double-buffer: swap, never a gap
                for (const m of c.meshes) scene.add(m);
                envChunks.set(c.key, c);
                return true;
            }
            return true;
        }

        let chunkTasks = [];
        function runChunkTasks(budgetMs) { // v22: micro-ops within a per-frame time budget
            const t0 = performance.now();
            while (chunkTasks.length && performance.now() - t0 < (budgetMs || 2)) {
                const task = chunkTasks[0];
                const done = stepChunkTask(task);
                if (done) chunkTasks.shift();
            }
        }
        function buildChunkTask(cx, cz, front) {
            const key = chunkKey(cx, cz);
            if (envChunks.has(key) || chunkTasks.some(t => t.chunk.key === key)) return;
            const task = planEnvChunk(cx, cz);
            if (front) chunkTasks.unshift(task); else chunkTasks.push(task);
        }
        function buildEnvChunk(cx, cz) { // immediate (boot/initial load) — drains the task synchronously
            const key = chunkKey(cx, cz);
            if (envChunks.has(key)) return;
            const task = planEnvChunk(cx, cz);
            let guard = 0;
            while (!stepChunkTask(task) && guard++ < 10000) {}
        }

        function disposeEnvChunk(key) {
            const chunk = envChunks.get(key);
            if (!chunk) return;
            chunk.meshes.forEach(m => { scene.remove(m); disposeObject3D(m); if (m.isInstancedMesh && m.dispose) m.dispose(); });
            if (chunk.buckets) for (const b of chunk.buckets.values()) b.geos.forEach(g => g.dispose());
            lavaMeshes = lavaMeshes.filter(l => !chunk.meshes.includes(l));
            envChunks.delete(key);
        }

        function streamChunks(px, pz, immediate) {
            const pcx = Math.floor(px / CHUNK), pcz = Math.floor(pz / CHUNK);
            const wanted = [];
            for (let dx = -CHUNK_ENV_RADIUS; dx <= CHUNK_ENV_RADIUS; dx++)
                for (let dz = -CHUNK_ENV_RADIUS; dz <= CHUNK_ENV_RADIUS; dz++) {
                    const key = chunkKey(pcx + dx, pcz + dz);
                    if (!envChunks.has(key) && !chunkTasks.some(t => t.chunk.key === key) && !chunkBuildQueue.some(c => c.key === key)) {
                        wanted.push({ key, cx: pcx + dx, cz: pcz + dz, d: dx * dx + dz * dz });
                    }
                }
            wanted.sort((a, b) => a.d - b.d);
            if (immediate) wanted.forEach(w => buildEnvChunk(w.cx, w.cz));
            else wanted.forEach(w => chunkBuildQueue.push(w));
            for (const key of [...envChunks.keys()]) {
                const parts = key.split(',');
                if (Math.max(Math.abs(parts[0] - pcx), Math.abs(parts[1] - pcz)) > CHUNK_ENV_RADIUS + 1) disposeEnvChunk(key);
            }
        }

        function updateChunkStream() { // v22: queued wants become micro-op tasks; ~2ms/frame budget while roaming
            if (!player) return;
            let spawned = 0;
            while (chunkBuildQueue.length && spawned < 2) {
                const w = chunkBuildQueue.shift();
                const pcx = Math.floor(player.mesh.position.x / CHUNK), pcz = Math.floor(player.mesh.position.z / CHUNK);
                if (Math.max(Math.abs(w.cx - pcx), Math.abs(w.cz - pcz)) > CHUNK_ENV_RADIUS + 1) continue;
                buildChunkTask(w.cx, w.cz, false);
                spawned++;
            }
            runChunkTasks(2);
        }

        function destroyDestructible(chunk, dst) { // v19: cover shatters — sightlines open up
            if (dst.dead) return;
            dst.dead = true;
            const pos = new THREE.Vector3(dst.x, dst.y + 1.2, dst.z);
            if (dst.type === 'tree') {
                createExplosion(pos, 30, 0x8a5a2a, 'tree');
                SFX.shatterWood(); // v23
                state.cameraShake = Math.max(state.cameraShake, 0.25);
            } else {
                createExplosion(pos, 24, 0x8a8a8a, 'rock');
                SFX.shatterRock(); // v23
                state.cameraShake = Math.max(state.cameraShake, 0.2);
            }
            lifeStats().destroyed++; // v23
            bumpDaily('destroyed', 1);
            const ci = chunk.colliders.indexOf(dst);
            if (ci >= 0) chunk.colliders.splice(ci, 1);
            for (const g of dst.geos) {
                const b = chunk.buckets && chunk.buckets.get(g.key);
                if (!b) continue;
                const idx = b.geos.indexOf(g.geo);
                if (idx >= 0) b.geos.splice(idx, 1);
                if (b.mesh) {
                    const oldGeo = b.mesh.geometry;
                    b.mesh.geometry = b.geos.length ? mergeGeometries(b.geos) : new THREE.BufferGeometry();
                    oldGeo.dispose();
                    g.geo.dispose();
                }
            }
        }

        // ─────────────────────────────────────────────────────────────────────────
        // T1-FIX (ThilteteTankGame): three functions — disposeEnvChunk, streamChunks
        // and updateChunkStream — were declared TWICE in the v25 build. In JavaScript
        // the LAST function declaration wins by hoisting, so the older synchronous
        // implementations that used to live here silently overrode the newer v22
        // micro-op versions defined ~60 lines above.
        //
        // Net effect in v25: the entire "2ms/frame chunk budget" system was dead code.
        // Chunks were actually built by `buildEnvChunk()` synchronously, one whole
        // chunk per frame, which is exactly the frame hitch v22 was written to remove.
        //
        // The stale duplicates are deleted here. The v22 originals above are now live.
        // ─────────────────────────────────────────────────────────────────────────

        // ---- per-chunk scenery builders (seeded; bake into chunk buckets) ----
        function createSingleTree(biome, x, z, rnd, put, chunk) {
            const tree = new THREE.Group();
            const mark = (geo, matKey, mat) => { geo.applyMatrix4(new THREE.Matrix4()); return { geo, matKey, mat }; };
            const collect = [];
            const leafy = biome.name.includes('Forest') || biome.name.includes('Swamp') || biome.name.includes('Autumn') || biome.name.includes('Sakura');
            const segments = 8;
            // v18: shorter trees (tanks stay visible), strong height variance per tree
            if (leafy) {
                const trunkHeight = 2.6 + rnd() * 1.6; // v19: mid-size 2.6-4.2
                const trunkMat = getEnvMat(biome.name + '|trunk', () => new THREE.MeshStandardMaterial({ color: 0x4a3728, roughness: 0.9 }));
                collect.push({ geo: new THREE.CylinderGeometry(0.28, 0.45, trunkHeight, segments), mat: trunkMat, matKey: 'trunk', cast: true, y: trunkHeight / 2 });
                const foliageColor = biome.name.includes('Swamp') ? 0x4a6a3a : biome.name.includes('Autumn') ? 0xd97c2b : biome.name.includes('Sakura') ? 0xf9a8d4 : 0x2d5a27;
                const foliageMat = getEnvMat(biome.name + '|foliage', () => new THREE.MeshStandardMaterial({ color: foliageColor, roughness: 0.8 }));
                const layers = rnd() < 0.3 ? 2 : 3; // v19: fuller canopies
                for (let j = 0; j < layers; j++) {
                    const size = (layers === 2 ? 2.7 - j * 0.9 : 2.9 - j * 0.75) * (0.85 + rnd() * 0.3);
                    collect.push({ geo: new THREE.ConeGeometry(size, size * 1.4, segments), mat: foliageMat, matKey: 'foliage', cast: true, y: trunkHeight + 0.4 + j * 1.25 });
                }
            } else if (biome.name.includes('Frozen')) {
                // v18: dark spruce with a snow cap — readable against the snow (was white-on-white)
                const trunkMat = getEnvMat(biome.name + '|ftrunk', () => new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 0.9 }));
                collect.push({ geo: new THREE.CylinderGeometry(0.18, 0.34, 2.0, segments), mat: trunkMat, matKey: 'ftrunk', cast: true, y: 1.0 });
                const spruceMat = getEnvMat(biome.name + '|fspruce', () => new THREE.MeshStandardMaterial({ color: 0x2f5d50, roughness: 0.85 }));
                const snowMat = getEnvMat(biome.name + '|fsnow', () => new THREE.MeshStandardMaterial({ color: 0xf5fafc, roughness: 0.6 }));
                const th = 2.4 + rnd() * 1.8; // v19: taller spruces
                collect.push({ geo: new THREE.ConeGeometry(1.6, th, segments), mat: spruceMat, matKey: 'fspruce', cast: true, y: 1.6 + th / 2 });
                collect.push({ geo: new THREE.ConeGeometry(1.05, th * 0.75, segments), mat: spruceMat, matKey: 'fspruce', cast: true, y: 1.6 + th + 0.3 });
                collect.push({ geo: new THREE.ConeGeometry(0.62, th * 0.5, segments), mat: snowMat, matKey: 'fsnow', cast: true, y: 1.6 + th * 1.72 + 0.35 }); // snow cap
            } else if (biome.name.includes('Desert')) {
                const cactusMat = getEnvMat(biome.name + '|cactus', () => new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.7 }));
                const ch = 1.7 + rnd() * 1.1;
                collect.push({ geo: new THREE.CylinderGeometry(0.35, 0.45, ch, segments), mat: cactusMat, matKey: 'cactus', cast: true, y: ch / 2 });
                if (rnd() > 0.3) collect.push({ geo: new THREE.CylinderGeometry(0.18, 0.22, 1.1, 6), mat: cactusMat, matKey: 'cactus', cast: true, y: ch * 0.62, x: 0.5, rz: -Math.PI / 4 });
            } else if (biome.name.includes('Volcanic')) {
                const trunkMat = getEnvMat(biome.name + '|vtrunk', () => new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 1 }));
                collect.push({ geo: new THREE.CylinderGeometry(0.14, 0.28, 1.8, 5), mat: trunkMat, matKey: 'vtrunk', cast: true, y: 0.9, rz: (rnd() - 0.5) * 0.3 });
            }
            const terrainY = getTerrainHeight(x, z);
            const scale = 0.75 + rnd() * 0.4; // v19: 0.75-1.15 — uneven, mid-size
            const rotY = rnd() * Math.PI * 2;
            const m4 = new THREE.Matrix4().compose(
                new THREE.Vector3(x, terrainY, z),
                new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rotY, 0)),
                new THREE.Vector3(scale, scale, scale)
            );
            const partsGeo = [];
            for (const part of collect) {
                const local = new THREE.Matrix4().makeTranslation(part.x || 0, part.y, part.z || 0);
                if (part.rz) local.multiply(new THREE.Matrix4().makeRotationZ(part.rz));
                const world = m4.clone().multiply(local);
                part.geo.applyMatrix4(world);
                put(part.matKey, part.mat, part.geo, true, false);
                partsGeo.push({ key: part.matKey, geo: part.geo });
            }
            // v19: destructible cover — trees soak hits (HP by size), then shatter
            const treeHp = Math.round(4 + scale * 6);
            const treeDst = { x, z, r: 1.5 * scale, type: 'tree', hp: treeHp, maxHp: treeHp, geos: partsGeo, dead: false, y: terrainY };
            chunk.destructibles.push(treeDst);
            chunk.colliders.push(treeDst);
        }

        function createSingleRock(biome, x, z, rnd, put, chunk) {
            const size = 0.5 + rnd() * 2;
            const rockGeo = new THREE.DodecahedronGeometry(size, 1);
            const positions = rockGeo.attributes.position;
            for (let j = 0; j < positions.count; j++) {
                const px = positions.getX(j), py = positions.getY(j), pz = positions.getZ(j);
                const noise = 1 + (rnd() - 0.5) * 0.3;
                positions.setXYZ(j, px * noise, py * noise * 0.6, pz * noise);
            }
            rockGeo.computeVertexNormals();
            let rockColor = 0x6a6a6a;
            if (biome.name.includes('Volcanic')) rockColor = 0x2a2a2a;
            if (biome.name.includes('Frozen')) rockColor = 0x8090a0;
            if (biome.name.includes('Desert')) rockColor = 0xb8956a;
            if (biome.name.includes('Blood Moon')) rockColor = 0x4a2020;
            if (biome.name.includes('Neon')) rockColor = 0x1a1a24;
            if (biome.name.includes('Sakura')) rockColor = 0xb09898;
            if (biome.name.includes('Autumn')) rockColor = 0x8a6a4a;
            const rockMat = getEnvMat(biome.name + '|rock', () => new THREE.MeshStandardMaterial({ color: rockColor, roughness: 0.95, metalness: 0.1 }));
            const terrainY = getTerrainHeight(x, z);
            const m4 = new THREE.Matrix4().compose(
                new THREE.Vector3(x, terrainY + size * 0.3, z),
                new THREE.Quaternion().setFromEuler(new THREE.Euler(rnd() * 0.4, rnd() * Math.PI * 2, rnd() * 0.4)),
                new THREE.Vector3(1, 1, 1)
            );
            rockGeo.applyMatrix4(m4);
            put('rock', rockMat, rockGeo, true, true);
            // v19: destructible rock — toughness scales with size
            const rockHp = Math.round(2 + size * 2.4);
            const rockDst = { x, z, r: size, type: 'rock', hp: rockHp, maxHp: rockHp, geos: [{ key: 'rock', geo: rockGeo }], dead: false, y: terrainY };
            chunk.destructibles.push(rockDst);
            chunk.colliders.push(rockDst);
        }

        function buildChunkWater(biome, x, z, chunk) {
            const waterGeo = new THREE.PlaneGeometry(26, 26, 12, 12);
            const waterMat = new THREE.MeshStandardMaterial({ color: biome.waterColor, transparent: true, opacity: 0.7, roughness: 0.1, metalness: 0.8 });
            const m = new THREE.Mesh(waterGeo, waterMat);
            m.rotation.x = -Math.PI / 2;
            m.position.set(x, getTerrainHeight(x, z) + 0.2, z);
            chunk.meshes.push(m); // v22: added at commit
        }
        function buildChunkLava(biome, x, z, chunk, rnd) {
            const size = 3 + rnd() * 5;
            const lava = new THREE.Mesh(new THREE.CircleGeometry(size, 16), new THREE.MeshBasicMaterial({ color: biome.lavaColor, transparent: true, opacity: 0.9 }));
            lava.rotation.x = -Math.PI / 2;
            lava.position.set(x, getTerrainHeight(x, z) + 0.15, z);
            lava.userData = { baseY: lava.position.y, phase: rnd() * Math.PI * 2 };
            lavaMeshes.push(lava);
            chunk.meshes.push(lava); // v22: added at commit
            const glow = new THREE.PointLight(0xff4500, 2, 15);
            glow.position.set(x, getTerrainHeight(x, z) + 1, z);
            chunk.meshes.push(glow);
        }
        function buildChunkCrystalCluster(biome, x, z, chunk, rnd) {
            for (let i = 0; i < 3 + Math.floor(rnd() * 4); i++) {
                const height = 1 + rnd() * 4;
                const col = new THREE.Color().setHSL(0.5 + rnd() * 0.2, 0.8, 0.5);
                const cx = x + (rnd() - 0.5) * 8, cz = z + (rnd() - 0.5) * 8;
                const crystal = new THREE.Mesh(
                    new THREE.ConeGeometry(0.3 + rnd() * 0.4, height, 6),
                    new THREE.MeshStandardMaterial({ color: col, transparent: true, opacity: 0.8, roughness: 0.1, metalness: 0.9, emissive: col.clone().multiplyScalar(0.5), emissiveIntensity: 0.5 })
                );
                crystal.position.set(cx, getTerrainHeight(cx, cz) + height / 2, cz);
                crystal.rotation.z = (rnd() - 0.5) * 0.3;
                chunk.meshes.push(crystal); // v22: added at commit
                if (rnd() > 0.6) {
                    const glowLight = new THREE.PointLight(col, 0.5, 8);
                    glowLight.position.set(cx, crystal.position.y + height / 2, cz);
                    chunk.meshes.push(glowLight);
                }
            }
        }
        function buildChunkSpikes(biome, x, z, chunk, rnd) {
            for (let i = 0; i < 3; i++) {
                const height = 2 + rnd() * 5;
                const sx = x + (rnd() - 0.5) * 10, sz = z + (rnd() - 0.5) * 10;
                const spike = new THREE.Mesh(new THREE.ConeGeometry(0.5 + rnd() * 0.5, height, 5), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8, metalness: 0.3 }));
                spike.position.set(sx, getTerrainHeight(sx, sz) + height / 2, sz);
                spike.rotation.z = (rnd() - 0.5) * 0.3;
                spike.castShadow = true;
                chunk.meshes.push(spike); // v22: added at commit
            }
        }

        let envParticleMesh = null; // FIX (Tier 3): single InstancedMesh for all ambient particles

        function createEnvironmentParticles(biome) {
            // v25 fix: always reset the ambient cloud (quality switch / morph append-multiply bug)
            if (envParticleMesh) { scene.remove(envParticleMesh); disposeObject3D(envParticleMesh); if (envParticleMesh.dispose) envParticleMesh.dispose(); envParticleMesh = null; }
            environmentParticles = [];
            const particleCount = state.quality === 'low' ? 50 : 120; // v25

            // FIX (Tier 3): one InstancedMesh (1 draw call) instead of 120 separate meshes.
            // Same geometry/material params; leaves keep their random two-color mix via
            // per-instance colors. Positions are written per frame in updatePhysics.
            let geo, mat, twoTone = false;
            if (biome.particleType === 'snow') {
                geo = new THREE.SphereGeometry(0.12);
                mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
            } else if (biome.particleType === 'embers') {
                geo = new THREE.SphereGeometry(0.18);
                mat = new THREE.MeshBasicMaterial({ color: biome.particleColor });
            } else if (biome.particleType === 'leaves') {
                geo = new THREE.PlaneGeometry(0.35, 0.35);
                mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
                twoTone = true;
            } else if (biome.particleType === 'sand') {
                geo = new THREE.SphereGeometry(0.06);
                mat = new THREE.MeshBasicMaterial({ color: biome.particleColor, transparent: true, opacity: 0.6 });
            } else if (biome.particleType === 'fireflies') {
                geo = new THREE.SphereGeometry(0.12);
                mat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            } else if (biome.particleType === 'sparkles') {
                geo = new THREE.OctahedronGeometry(0.12);
                mat = new THREE.MeshBasicMaterial({ color: biome.particleColor });
            } else {
                geo = new THREE.SphereGeometry(0.1);
                mat = new THREE.MeshBasicMaterial({ color: biome.particleColor });
            }

            envParticleMesh = new THREE.InstancedMesh(geo, mat, particleCount);
            envParticleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            envParticleMesh.frustumCulled = false;
            const leafColorA = new THREE.Color(biome.leafA || 0x228b22), leafColorB = new THREE.Color(biome.leafB || 0x8b4513); // v9

            for (let i = 0; i < particleCount; i++) {
                // FIX (Tier 3): consume the leaf color random FIRST — same Math.random call
                // order as the original per-mesh version (keeps seeded worlds identical).
                const leafPick = twoTone ? (Math.random() > 0.5 ? leafColorA : leafColorB) : null;
                const pos = new THREE.Vector3(
                    (Math.random() - 0.5) * 160,
                    Math.random() * 20 + 2,
                    (Math.random() - 0.5) * 160
                );

                const velocity = new THREE.Vector3(
                    (Math.random() - 0.5) * 2,
                    biome.particleType === 'embers' ? Math.random() * 3 : -Math.random() * 2,
                    (Math.random() - 0.5) * 2
                );

                environmentParticles.push({
                    pos: pos,
                    velocity: velocity,
                    type: biome.particleType,
                    phase: Math.random() * Math.PI * 2
                });

                if (leafPick) envParticleMesh.setColorAt(i, leafPick);
            }
            if (envParticleMesh.instanceColor) envParticleMesh.instanceColor.needsUpdate = true;
            scene.add(envParticleMesh);
        }

        // ============================================
        // HIGH-FIDELITY TANK CLASS
        // ============================================
        class Tank {
            constructor(color, isPlayer = false, type = 'soldier') {
                this.mesh = new THREE.Group();
                this.isPlayer = isPlayer;
                this.type = type;
                this.typeData = isPlayer ? null : ENEMY_TYPES[type];
                
                const scale = isPlayer ? 1 : (this.typeData?.size || 1);
                
                this.hp = isPlayer ? state.playerStats.maxHp : (this.typeData?.hp || 50);
                this.maxHp = this.hp;
                this.isDead = false;
                this.lastHealTime = 0;
                
                // Physics-based animation properties
                this.velocity = new THREE.Vector3();
                this.acceleration = new THREE.Vector3();
                this.targetTilt = new THREE.Vector2(0, 0);
                this.currentTilt = new THREE.Vector2(0, 0);
                this.bobPhase = Math.random() * Math.PI * 2;

                const mainColor = new THREE.Color(color);
                const darkColor = mainColor.clone().multiplyScalar(0.6);

                const bodyMat = new THREE.MeshStandardMaterial({
                    color: color,
                    roughness: 0.4,
                    metalness: 0.6
                });

                // Hull base
                const hullGeo = new THREE.BoxGeometry(2.6 * scale, 0.9 * scale, 3.8 * scale);
                const hull = new THREE.Mesh(hullGeo, bodyMat);
                hull.position.y = 0.65 * scale;
                hull.castShadow = true;
                hull.receiveShadow = true;
                this.mesh.add(hull);

                // Hull top plate
                const topPlateGeo = new THREE.BoxGeometry(2.2 * scale, 0.35 * scale, 3.2 * scale);
                const topPlate = new THREE.Mesh(topPlateGeo, bodyMat);
                topPlate.position.y = 1.25 * scale;
                topPlate.castShadow = true;
                this.mesh.add(topPlate);

                // Front armor slope
                const frontArmorGeo = new THREE.BoxGeometry(2.4 * scale, 0.6 * scale, 0.8 * scale);
                const frontArmor = new THREE.Mesh(frontArmorGeo, bodyMat);
                frontArmor.position.set(0, 0.85 * scale, 1.85 * scale);
                frontArmor.rotation.x = -0.35;
                frontArmor.castShadow = true;
                this.mesh.add(frontArmor);

                // Tracks with detail
                const trackMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9, metalness: 0.3 });
                
                [-1, 1].forEach(side => {
                    const trackGeo = new THREE.BoxGeometry(0.65 * scale, 0.95 * scale, 4.3 * scale);
                    const track = new THREE.Mesh(trackGeo, trackMat);
                    track.position.set(side * 1.55 * scale, 0.5 * scale, 0);
                    track.castShadow = true;
                    this.mesh.add(track);

                    const guardGeo = new THREE.BoxGeometry(0.75 * scale, 0.18 * scale, 4.5 * scale);
                    const guardMat = new THREE.MeshStandardMaterial({ color: darkColor, roughness: 0.5, metalness: 0.5 });
                    const guard = new THREE.Mesh(guardGeo, guardMat);
                    guard.position.set(side * 1.55 * scale, 1.0 * scale, 0);
                    guard.castShadow = true;
                    this.mesh.add(guard);

                    const wheelGeo = new THREE.CylinderGeometry(0.38 * scale, 0.38 * scale, 0.28 * scale, 16);
                    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.7, metalness: 0.4 });
                    
                    for (let i = -1.5; i <= 1.5; i += 0.75) {
                        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
                        wheel.rotation.z = Math.PI / 2;
                        wheel.position.set(side * 1.25 * scale, 0.38 * scale, i * scale);
                        wheel.castShadow = true;
                        this.mesh.add(wheel);
                    }
                });

                // Turret pivot
                this.turretPivot = new THREE.Group();
                this.turretPivot.position.y = 1.4 * scale;
                this.mesh.add(this.turretPivot);

                // Turret base ring
                const turretBaseGeo = new THREE.CylinderGeometry(0.95 * scale, 1.05 * scale, 0.45 * scale, 16);
                const turretBase = new THREE.Mesh(turretBaseGeo, bodyMat);
                turretBase.position.y = 0.22 * scale;
                turretBase.castShadow = true;
                this.turretPivot.add(turretBase);

                // Turret body
                const turretGeo = new THREE.BoxGeometry(1.5 * scale, 0.75 * scale, 2.1 * scale);
                const turret = new THREE.Mesh(turretGeo, bodyMat);
                turret.position.set(0, 0.6 * scale, 0.2 * scale);
                turret.castShadow = true;
                this.turretPivot.add(turret);

                // Mantlet
                const mantletGeo = new THREE.CylinderGeometry(0.38 * scale, 0.42 * scale, 0.55 * scale, 12);
                const mantletMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.5, metalness: 0.7 });
                const mantlet = new THREE.Mesh(mantletGeo, mantletMat);
                mantlet.rotation.x = Math.PI / 2;
                mantlet.position.set(0, 0.55 * scale, 1.25 * scale);
                mantlet.castShadow = true;
                this.turretPivot.add(mantlet);

                // Barrel
                const barrelLength = type === 'sniper' ? 4.8 : 3.4;
                const barrelGeo = new THREE.CylinderGeometry(0.13 * scale, 0.16 * scale, barrelLength * scale, 12);
                const barrelMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.3, metalness: 0.8 });
                this.barrel = new THREE.Mesh(barrelGeo, barrelMat);
                this.barrel.rotation.x = Math.PI / 2;
                this.barrel.position.set(0, 0.55 * scale, 1.25 * scale + barrelLength * scale / 2);
                this.barrel.castShadow = true;
                this.turretPivot.add(this.barrel);

                // Muzzle brake
                const muzzleGeo = new THREE.CylinderGeometry(0.2 * scale, 0.15 * scale, 0.35 * scale, 8);
                const muzzle = new THREE.Mesh(muzzleGeo, barrelMat);
                muzzle.rotation.x = Math.PI / 2;
                muzzle.position.set(0, 0.55 * scale, 1.25 * scale + barrelLength * scale + 0.18 * scale);
                this.turretPivot.add(muzzle);
                this.muzzlePos = muzzle.position.clone();

                // Commander hatch
                const hatchGeo = new THREE.CylinderGeometry(0.28 * scale, 0.28 * scale, 0.18 * scale, 12);
                const hatch = new THREE.Mesh(hatchGeo, new THREE.MeshStandardMaterial({ color: darkColor, roughness: 0.4, metalness: 0.6 }));
                hatch.position.set(0, 1.0 * scale, -0.35 * scale);
                hatch.castShadow = true;
                this.turretPivot.add(hatch);

                // Antenna
                if (isPlayer || type === 'sniper') {
                    const antennaGeo = new THREE.CylinderGeometry(0.02 * scale, 0.02 * scale, 1.5 * scale, 6);
                    const antennaMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
                    const antenna = new THREE.Mesh(antennaGeo, antennaMat);
                    antenna.position.set(-0.5 * scale, 1.3 * scale, -0.6 * scale);
                    antenna.rotation.z = 0.15;
                    this.turretPivot.add(antenna);
                }

                // Player indicator ring
                if (isPlayer) {
                    const ringGeo = new THREE.RingGeometry(2.5, 2.8, 32);
                    const ringMat = new THREE.MeshBasicMaterial({
                        color: 0xfde047, // v3: amber ring matches the new tank identity
                        transparent: true,
                        opacity: 0.6,
                        side: THREE.DoubleSide
                    });
                    this.indicator = new THREE.Mesh(ringGeo, ringMat);
                    this.indicator.rotation.x = -Math.PI / 2;
                    this.indicator.position.y = 0.1;
                    this.mesh.add(this.indicator);
                }

                // Healer cross
                if (type === 'healer') {
                    const crossMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
                    const cross1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.25), crossMat);
                    const cross2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.2, 0.8), crossMat);
                    cross1.position.y = 2.5 * scale;
                    cross2.position.y = 2.5 * scale;
                    this.mesh.add(cross1, cross2);
                }

                scene.add(this.mesh);
            }

            move(dt, inputVec) {
                if (this.isDead) return;

                // FIX (Tier 3): all scratch vectors are reused — no per-frame allocations
                const prevVel = _moveV1.copy(this.velocity);
                
                if (inputVec.length() > 0.1) {
                    let speed = CONFIG.playerSpeed;
                    if (this.isPlayer) {
                        speed *= state.playerStats.speed / 100;
                        if (clock.getElapsedTime() < (state.speedBoostUntil || 0)) speed *= 1 + 0.25 * (state.playerStats.adrenaline || 0); // v5: Adrenaline
                    } else {
                        speed *= (this.typeData?.speed || 1) * 0.55;
                    }

                    const move = _moveV2.set(inputVec.x, 0, inputVec.y).normalize().multiplyScalar(speed * dt);
                    this.velocity.lerp(move, 1 - Math.pow(0.85, dt * 60)); // FIX (Tier 4): same as 0.15/frame at 60fps
                    
                    const nextPos = _moveV3.copy(this.mesh.position).add(this.velocity);
                    // v17: no boundaries — roam forever
                    this.mesh.position.copy(nextPos);

                    // Smooth rotation
                    const targetRotation = Math.atan2(move.x, move.z);
                    let diff = targetRotation - this.mesh.rotation.y;
                    while (diff > Math.PI) diff -= Math.PI * 2;
                    while (diff < -Math.PI) diff += Math.PI * 2;
                    this.mesh.rotation.y += diff * 8 * dt;
                    
                    // Calculate tilt based on turning
                    this.targetTilt.x = -diff * 0.3; // Roll when turning
                    this.targetTilt.y = this.velocity.length() * 0.02; // Pitch when accelerating
                } else {
                    this.velocity.multiplyScalar(Math.pow(0.9, dt * 60)); // FIX (Tier 4): same as 0.9/frame at 60fps
                    this.targetTilt.set(0, 0);
                }
                
                // Apply acceleration-based tilt
                this.acceleration.subVectors(this.velocity, prevVel);
                this.targetTilt.y += this.acceleration.z * 2;
                this.targetTilt.x += this.acceleration.x * 2;

                // Terrain following - FIX FOR SINKING
                const terrainY = getTerrainHeight(this.mesh.position.x, this.mesh.position.z);
                this.mesh.position.y = terrainY + 0.1; // Slight offset above ground

                // v2 visuals: dust kick-up behind a moving tank (throttled, cheap)
                if (this.isPlayer && state.quality !== 'low' && this.velocity.length() > 8 && Math.random() < 0.12) { // v25
                    const back = _moveV2.set(-Math.sin(this.mesh.rotation.y), 0, -Math.cos(this.mesh.rotation.y)).multiplyScalar(2.2);
                    const dustMat = new THREE.MeshBasicMaterial({ color: 0x9a8a70, transparent: true, opacity: 0.35 });
                    const dust = new THREE.Mesh(SHARED_GEO.sphere1, dustMat);
                    dust.scale.setScalar(0.35 + Math.random() * 0.3);
                    dust.position.set(this.mesh.position.x + back.x, terrainY + 0.3, this.mesh.position.z + back.z);
                    particles.push({
                        mesh: dust,
                        velocity: new THREE.Vector3((Math.random() - 0.5) * 1.5, 1.1 + Math.random(), (Math.random() - 0.5) * 1.5),
                        life: 0.55,
                        isSmoke: true,
                        expansionRate: 2.2
                    });
                    scene.add(dust);
                }
                
                // Apply terrain normal for realistic tilt
                const normal = getTerrainNormal(this.mesh.position.x, this.mesh.position.z, _terrainN); // FIX (Tier 3)
                this.targetTilt.x += Math.atan2(normal.x, normal.y) * 0.5;
                this.targetTilt.y += Math.atan2(normal.z, normal.y) * 0.5;
                
                // Smooth tilt animation
                this.currentTilt.lerp(this.targetTilt, 1 - Math.pow(0.9, dt * 60)); // FIX (Tier 4)
                
                // Apply tilt to tank (but not full rotation)
                const tiltGroup = this.mesh.children[0]; // Hull
                if (tiltGroup) {
                    // We apply slight visual tilt to simulate suspension
                    this.mesh.rotation.x = this.currentTilt.y * 0.3;
                    this.mesh.rotation.z = this.currentTilt.x * 0.3;
                }
            }

            aimAt(targetPos, dt = 1/60) {
                if (this.isDead) return;
                const worldPos = _aimV1; // FIX (Tier 3): scratch vectors
                this.turretPivot.getWorldPosition(worldPos);
                const direction = _aimV2.set(targetPos.x - worldPos.x, 0, targetPos.z - worldPos.z);
                const targetAngle = Math.atan2(direction.x, direction.z);
                const currentAngle = this.turretPivot.rotation.y + this.mesh.rotation.y;
                
                let diff = targetAngle - currentAngle;
                while (diff > Math.PI) diff -= Math.PI * 2;
                while (diff < -Math.PI) diff += Math.PI * 2;
                
                // FIX (Tier 4): frame-rate independent smoothing — identical to the old
                // per-frame factor at 60 fps (1-(1-k)^1 = k), consistent at any fps.
                const k = state.controlAssist ? 0.25 : 0.14; // Assist toggle
                this.turretPivot.rotation.y += diff * (1 - Math.pow(1 - k, dt * 60));
            }

            takeDamage(amount) {
                // v4: brief invulnerability window (after Second Wind)
                if (this.isPlayer && clock.getElapsedTime() < (state.invulnUntil || 0)) return;
                if (this.isPlayer && state.shieldUp) { // v24: Shield Generator absorbs a hit
                    state.shieldUp = false;
                    state.shieldReadyAt = clock.getElapsedTime() + 18 / (state.playerStats.shield || 1);
                    SFX.heal();
                    showUpgradeNotification('🛡️ Shield absorbed the hit!');
                    if (player.shieldRing) player.shieldRing.visible = false;
                    return;
                }
                const actualDamage = Math.max(1, amount - state.playerStats.armor * (this.isPlayer ? 1 : 0));
                if (this.isPlayer) { SFX.hurt(); SFX.vibrate(35); } // v23
                this.hp -= actualDamage;

                this.mesh.traverse(c => {
                    if (c.isMesh && c.material.emissive) {
                        c.material.emissive.setHex(0xff8833); // v2 visuals: warm hit flash
                        setTimeout(() => {
                            if (c.material) c.material.emissive.setHex(0x000000);
                        }, 80);
                    }
                });

                if (this.hp <= 0 && !this.isDead) {
                    if (this.isPlayer && state.reviveAvailable) { // v4+v10: Second Wind
                        SFX.revive(); SFX.vibrate([40, 60, 40]); // v23
                        state.reviveAvailable = false;
                        this.hp = Math.ceil(this.maxHp * (0.5 + 0.25 * (((state.meta || {}).revive || 1) - 1)));
                        state.invulnUntil = clock.getElapsedTime() + 2;
                        createHealEffect(this.mesh.position);
                        showUpgradeNotification('✨ SECOND WIND — revived at 50% HP');
                        updateHUD();
                    } else {
                        this.die();
                    }
                }
            }

            heal(amount) {
                this.hp = Math.min(this.maxHp, this.hp + amount);
                createHealEffect(this.mesh.position);
                SFX.heal(); // v23
            }

            die() {
                this.isDead = true;
                if (this.isPlayer) SFX.engineStop(); // v23
                createExplosion(this.mesh.position, this.isPlayer ? 70 : 35);
                scene.remove(this.mesh);
                disposeObject3D(this.mesh); // FIX (Tier 2): free ~20 geometries + materials per tank
            }

            update(dt) {
                // Bob animation
                this.bobPhase += dt * 2;
                
                if (this.indicator) {
                    this.indicator.rotation.z += dt * 0.4;
                    this.indicator.material.opacity = 0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
                }
            }
        }

        // ============================================
        // ENHANCED PROJECTILES - Glowing Plasma Bolts
        // ============================================
        function spawnBullet(source, dir, damage) { // v6(C): one bullet along dir — shared by the player and boss attack patterns
            const bulletColor = source.isPlayer ? 0x00ffff : (source.type === 'healer' ? 0x00ff00 : 0xff4444);

            const bulletGroup = new THREE.Group();
            // FIX (Tier 2): bullet geometries/materials are cached & shared (no per-shot leak)
            const res = getBulletResources(bulletColor);
            const core = new THREE.Mesh(SHARED_GEO.bulletCore, res.core);
            bulletGroup.add(core);
            const innerGlow = new THREE.Mesh(SHARED_GEO.bulletInner, res.inner);
            bulletGroup.add(innerGlow);
            const outerGlow = new THREE.Mesh(SHARED_GEO.bulletOuter, res.outer);
            bulletGroup.add(outerGlow);
            const trail = new THREE.Mesh(SHARED_GEO.bulletTrail, res.trail);
            trail.rotation.x = Math.PI / 2;
            trail.position.z = -1.35;
            bulletGroup.add(trail);

            const muzzleWorld = new THREE.Vector3();
            source.barrel.getWorldPosition(muzzleWorld);
            bulletGroup.position.copy(muzzleWorld);

            const d = dir.clone().normalize();
            bulletGroup.lookAt(bulletGroup.position.clone().add(d));
            bulletGroup.userData = {
                vel: d.multiplyScalar(CONFIG.bulletSpeed),
                isPlayer: source.isPlayer,
                damage: source.isPlayer ? damage : damage * (state.diffMult.dmg || 1), // v10: difficulty
                pierce: source.isPlayer ? (state.playerStats.pierce || 0) : 0,
                hitList: [],
                life: 1.2,
                color: bulletColor
            };
            scene.add(bulletGroup);
            bullets.push({ group: bulletGroup, innerGlow: innerGlow, outerGlow: outerGlow, trail: trail });
        }

        // v24: homing missile system
        let missiles = [];
        function fireHomingMissile(target) {
            const g = new THREE.Group();
            const body = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 1.2), new THREE.MeshBasicMaterial({ color: 0xff6644 }));
            g.add(body);
            const flame = new THREE.Mesh(new THREE.SphereGeometry(0.28), new THREE.MeshBasicMaterial({ color: 0xffcc55 }));
            flame.position.z = -0.8;
            g.add(flame);
            const start = player.mesh.position.clone(); start.y += 2;
            g.position.copy(start);
            scene.add(g);
            missiles.push({ group: g, target, life: 5, speed: 34,
                vel: new THREE.Vector3(Math.random() - 0.5, 7, (Math.random() - 0.5) * 4) });
            SFX.enemyShoot();
        }
        function updateMissiles(dt) {
            for (let i = missiles.length - 1; i >= 0; i--) {
                const m = missiles[i];
                m.life -= dt;
                if (!m.target || m.target.isDead || !enemies.includes(m.target)) {
                    let best = null, bd = 1e9;
                    for (const e of enemies) { if (e.isDead) continue; const d = e.mesh.position.distanceTo(m.group.position); if (d < bd) { bd = d; best = e; } }
                    if (best) m.target = best;
                    else { createExplosion(m.group.position, 10, 0xff6644); scene.remove(m.group); missiles.splice(i, 1); continue; }
                }
                const dir = _tv3.copy(m.target.mesh.position).sub(m.group.position); dir.y += 1;
                dir.normalize().multiplyScalar(m.speed);
                m.vel.lerp(dir, 0.12);
                m.group.position.addScaledVector(m.vel, dt);
                m.group.lookAt(_tv4.copy(m.group.position).add(m.vel));
                if (m.group.position.distanceTo(m.target.mesh.position) < 3) {
                    missileBlast(m.group.position.clone());
                    scene.remove(m.group); missiles.splice(i, 1); continue;
                }
                if (m.life <= 0) { createExplosion(m.group.position, 12, 0xff6644); scene.remove(m.group); missiles.splice(i, 1); }
            }
        }
        function missileBlast(pos) { // 2.5× splash damage in a 6.5-unit radius
            const dmg = CONFIG.baseDamage * (state.playerStats.damage / 100) * 2.5;
            createExplosion(pos, 34, 0xff8844, 'armor');
            SFX.explosion(34);
            for (let j = enemies.length - 1; j >= 0; j--) {
                const e = enemies[j];
                if (e.isDead) continue;
                const d = e.mesh.position.distanceTo(pos);
                if (d < 6.5) {
                    const isCrit = Math.random() * 100 < (state.playerStats.crit || 0);
                    e.takeDamage(dmg * (d < 3 ? 1 : 0.5) * (isCrit ? 2 : 1));
                    if (e.isDead) {
                        const points = ENEMY_TYPES[e.type]?.points || 100;
                        state.score += points; state.kills++;
                        trackKill(!!e.isBoss, isCrit, Math.floor(points * 0.5));
                        addKillReward(e);
                        addKillFeed(points, (ENEMY_TYPES[e.type]?.name || 'Tank') + ' 🚀', state.combo);
                        addXP(points / 2);
                        showScorePopup(e.mesh.position.x, e.mesh.position.z, points);
                        enemies.splice(j, 1);
                    }
                }
            }
        }
        const enemyFireRoll = (base, dt) => Math.random() < base * dt * 60 * (state.diffMult.fire || 1); // v10: difficulty
        function shoot(source) {
            if (source.isPlayer) SFX.shoot(); else SFX.enemyShoot(); // v23
            // Recoil animation with smooth return
            const originalZ = source.barrel.position.z;
            source.barrel.position.z -= 0.5;
            
            const recoilReturn = () => {
                if (source.barrel) {
                    source.barrel.position.z += 0.05;
                    if (source.barrel.position.z < originalZ) {
                        requestAnimationFrame(recoilReturn);
                    } else {
                        source.barrel.position.z = originalZ;
                    }
                }
            };
            setTimeout(recoilReturn, 50);

            createMuzzleFlash(source);

            const shotCount = source.isPlayer ? 1 + Math.min(state.playerStats.multishot || 0, 4) : 1; // v4: stacks
            const spreadAngle = 0.12;
            const damage = source.isPlayer
                ? CONFIG.baseDamage * (state.playerStats.damage / 100)
                : (ENEMY_TYPES[source.type]?.damage || 12);

            for (let i = 0; i < shotCount; i++) {
                const dir = new THREE.Vector3(0, 0, 1);
                dir.applyQuaternion(source.turretPivot.getWorldQuaternion(new THREE.Quaternion()));
                if (shotCount > 1) {
                    const angle = (i - (shotCount - 1) / 2) * spreadAngle; // v4: fan centered on aim
                    dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
                }
                spawnBullet(source, dir, damage);
            }
        }

        function createMuzzleFlash(source) {
            const flashGroup = new THREE.Group();

            // FIX (Tier 2): shared cached geometries; flash material shared (opacity
            // ignored on it — it is not transparent), ring material is per-flash
            // because its opacity is animated, so it is disposed on removal.
            const flash = new THREE.Mesh(SHARED_GEO.flashSphere, FLASH_RES.flash);
            flashGroup.add(flash);

            // Outer ring
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0xffaa00,
                transparent: true,
                opacity: 0.9,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(SHARED_GEO.flashRing, ringMat);
            ring.rotation.y = Math.PI / 2;
            flashGroup.add(ring);

            const muzzleWorld = new THREE.Vector3();
            source.barrel.getWorldPosition(muzzleWorld);
            flashGroup.position.copy(muzzleWorld);
            
            // Orient flash forward
            const dir = new THREE.Vector3(0, 0, 1);
            dir.applyQuaternion(source.turretPivot.getWorldQuaternion(new THREE.Quaternion()));
            flashGroup.position.add(dir.multiplyScalar(0.5));

            scene.add(flashGroup);

            // FIX (Tier 3): one PERSISTENT shared muzzle light instead of a new PointLight
            // per shot (light count never changes → no shader recompiles).
            initDynamicLights();
            muzzleLight.position.copy(flashGroup.position);
            let lightIntensity = 3;
            muzzleLight.intensity = lightIntensity;

            // Animate out
            let scale = 1;
            const animateFlash = () => {
                scale *= 0.82;
                lightIntensity *= 0.8;
                flashGroup.scale.setScalar(scale);
                flash.material.opacity = scale;
                ring.material.opacity = scale * 0.9;
                muzzleLight.intensity = lightIntensity;
                
                if (scale > 0.05) {
                    requestAnimationFrame(animateFlash);
                } else {
                    scene.remove(flashGroup);
                    disposeObject3D(flashGroup); // FIX (Tier 2): frees the per-flash ring material
                    muzzleLight.intensity = 0;
                }
            };
            animateFlash();
        }

        function createHealEffect(pos) {
            for (let i = 0; i < 10; i++) {
                // FIX (Tier 2): shared unit sphere scaled to 0.25 (identical look, no leak);
                // per-particle material kept because each particle fades independently.
                const mat = new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 1 });
                const mesh = new THREE.Mesh(SHARED_GEO.sphere1, mat);
                mesh.scale.setScalar(0.25);
                mesh.position.copy(pos);
                mesh.position.x += (Math.random() - 0.5) * 2;
                mesh.position.z += (Math.random() - 0.5) * 2;
                mesh.position.y += 1;

                particles.push({
                    mesh: mesh,
                    velocity: new THREE.Vector3(0, 3 + Math.random() * 2, 0),
                    life: 1.2,
                    isHeal: true
                });
                scene.add(mesh);
            }
        }

        function createExplosion(pos, count, color = 0xff6600, type = 'default', enemyType = null) {
            const isArmor = type === 'armor';
            const isTree = type === 'tree';
            const isRock = type === 'rock';
            const isGround = type === 'ground';
            
            // Volumetric debris particles
            // FIX (Tier 2): particles use cached UNIT geometries + per-mesh scale
            // instead of a new (never-disposed) geometry per particle.
            // Uniform/scaling math produces identical shapes to the originals.
            for (let i = 0; i < count; i++) {
                const size = (0.2 + Math.random() * 0.5) * (isArmor ? 0.8 : 1);
                let geo, mat, sx = size, sy = size, sz = size;

                if (isTree) {
                    if (Math.random() > 0.5) { geo = SHARED_GEO.plane1; sx = size; sy = size; sz = 1; }
                    else { geo = SHARED_GEO.box1; sx = size / 2; sy = size; sz = size / 2; }
                    mat = new THREE.MeshBasicMaterial({
                        color: Math.random() > 0.5 ? 0x2d5a27 : 0x5c4033,
                        side: THREE.DoubleSide
                    });
                } else if (type === 'rock') { // v19: shattered boulders
                     geo = SHARED_GEO.dodeca1;
                     const rr = size * 0.8; sx = rr; sy = rr; sz = rr;
                     mat = new THREE.MeshStandardMaterial({
                        color: Math.random() > 0.5 ? 0x8a8a8a : 0x6a6a6a,
                        roughness: 1.0
                    });
                } else if (isGround) {
                     geo = SHARED_GEO.dodeca1;
                     const r = size * 0.7; sx = r; sy = r; sz = r;
                     mat = new THREE.MeshStandardMaterial({
                        color: Math.random() > 0.5 ? 0x5a4d41 : 0x3d3024,
                        roughness: 1.0
                    });
                } else {
                    // Armor / Default (two independent rolls, matching the original distribution)
                    if (Math.random() < 0.33) { geo = SHARED_GEO.box1; }
                    else if (Math.random() < 0.66) { geo = SHARED_GEO.tetra1; }
                    else { geo = SHARED_GEO.octa1; sx = sy = sz = size * 0.8; }

                    const hitColor = new THREE.Color(color);
                    if (isArmor) hitColor.offsetHSL(0, 0, 0.2); // Brighter for armor

                    mat = new THREE.MeshStandardMaterial({
                        color: hitColor,
                        emissive: isArmor ? hitColor : 0x000000,
                        emissiveIntensity: isArmor ? 0.8 : 0,
                        roughness: isArmor ? 0.3 : 0.9,
                        metalness: isArmor ? 0.8 : 0.1
                    });
                }

                const mesh = new THREE.Mesh(geo, mat);
                mesh.scale.set(sx, sy, sz);
                mesh.position.copy(pos);
                mesh.position.add(new THREE.Vector3(
                    (Math.random() - 0.5) * 1.5, 
                    (Math.random() - 0.5) * 1.5, 
                    (Math.random() - 0.5) * 1.5
                ));
                
                if (isTree) mesh.rotation.set(Math.random()*3, Math.random()*3, Math.random()*3);

                const speed = isArmor ? 18 : (isGround ? 8 : 12);
                const vel = new THREE.Vector3(
                    (Math.random() - 0.5) * speed,
                    Math.random() * (speed * 0.8) + 2,
                    (Math.random() - 0.5) * speed
                );

                if (!isTree) mesh.castShadow = true;

                particles.push({
                    mesh: mesh,
                    velocity: vel,
                    life: (0.8 + Math.random() * 0.6) * (isTree ? 1.5 : 1),
                    rotationSpeed: new THREE.Vector3(
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10,
                        (Math.random() - 0.5) * 10
                    ),
                    gravity: true
                });
                scene.add(mesh);
            }

            // Smoke/Dust
            const smokeCount = isArmor ? 6 : (isGround ? 5 : 4);
            for (let i = 0; i < smokeCount; i++) {
                const smokeRadius = 0.8 + Math.random() * 0.6; // FIX (Tier 2): shared unit sphere + scale
                let smokeColor = 0x6a6a6a;
                
                if (isArmor) smokeColor = 0x333333;
                else if (isTree) smokeColor = 0x4a3728;
                else if (isGround) smokeColor = 0x8b7355; // Dust color
                
                const smokeMat = new THREE.MeshBasicMaterial({
                    color: smokeColor,
                    transparent: true,
                    opacity: isGround ? 0.4 : 0.6
                });
                const smoke = new THREE.Mesh(SHARED_GEO.sphere1, smokeMat);
                smoke.scale.setScalar(smokeRadius);
                smoke.position.copy(pos);
                smoke.position.add(new THREE.Vector3(
                    (Math.random() - 0.5) * 1,
                    Math.random() * 1,
                    (Math.random() - 0.5) * 1
                ));

                particles.push({
                    mesh: smoke,
                    velocity: new THREE.Vector3(
                        (Math.random() - 0.5) * 2,
                        Math.random() * 3 + 1,
                        (Math.random() - 0.5) * 2
                    ),
                    life: 1.2,
                    isSmoke: true,
                    expansionRate: 1.2
                });
                scene.add(smoke);
            }

            // Special Effects for Enemies
            if (isArmor && enemyType) {
                // Healer - Healing particles burst
                if (enemyType === 'healer') {
                    for(let i=0; i<8; i++) {
                         const mat = new THREE.MeshBasicMaterial({color: 0x00ff00});
                         const p = new THREE.Mesh(SHARED_GEO.box1, mat); // FIX (Tier 2)
                         p.scale.setScalar(0.2);
                         p.position.copy(pos);
                         particles.push({
                             mesh: p,
                             velocity: new THREE.Vector3((Math.random()-0.5)*10, Math.random()*10, (Math.random()-0.5)*10),
                             life: 0.6,
                             gravity: true
                         });
                         scene.add(p);
                    }
                }
                // Scout - Electrical sparks
                if (enemyType === 'scout') {
                    for(let i=0; i<6; i++) {
                        // Blue sparks
                         const mat = new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});
                         const p = new THREE.Mesh(SHARED_GEO.plane1, mat); // FIX (Tier 2)
                         p.scale.set(0.1, 0.5, 1);
                         p.position.copy(pos);
                         particles.push({
                             mesh: p,
                             velocity: new THREE.Vector3((Math.random()-0.5)*15, Math.random()*15, (Math.random()-0.5)*15),
                             life: 0.4,
                             rotationSpeed: new THREE.Vector3(10,10,10),
                             gravity: false
                         });
                         scene.add(p);
                    }
                }
            }

            // Shockwave/Flash for high impact
            if (isArmor || count > 20) {
                const ringMat = new THREE.MeshBasicMaterial({ // FIX (Tier 2): shared ring geometry, per-explosion material
                    color: color,
                    transparent: true,
                    opacity: 0.8,
                    side: THREE.DoubleSide
                });
                const shockwave = new THREE.Mesh(SHARED_GEO.shockRing, ringMat);
                shockwave.rotation.x = -Math.PI / 2;
                shockwave.position.copy(pos);
                scene.add(shockwave);

                let ringScale = 1;
                const animateRing = () => {
                    ringScale += 0.4;
                    shockwave.scale.setScalar(ringScale);
                    shockwave.material.opacity -= 0.08;
                    
                    if (shockwave.material.opacity > 0) {
                        requestAnimationFrame(animateRing);
                    } else {
                        scene.remove(shockwave);
                        disposeObject3D(shockwave); // FIX (Tier 2)
                    }
                };
                animateRing();

                // FIX (Tier 3): small pool of persistent explosion lights (round-robin).
                // Same flash of light on kills without per-explosion light churn.
                initDynamicLights();
                const light = acquireExplosionLight(color, pos);
                const ticket = light.userData.ticket;
                let intensity = 3;
                const fadeLight = () => {
                    if (light.userData.ticket !== ticket) return; // reused by a newer explosion
                    intensity -= 0.4;
                    light.intensity = Math.max(0, intensity);
                    if (intensity > 0) requestAnimationFrame(fadeLight);
                    else light.intensity = 0;
                };
                fadeLight();
            }

            state.cameraShake = Math.max(state.cameraShake, count > 30 ? 0.5 : 0.2);
            SFX.explosion(count); // v23
        }

        // ============================================
        // GAME LOGIC
        // ============================================
        function setPauseUIVisible(visible) {
            const btnPause = document.getElementById('btn-pause');
            if (btnPause) btnPause.classList.toggle('show', visible);
        }

        function setScreenVisibility(screenId, visible) {
            const el = document.getElementById(screenId);
            if (!el) return;
            el.classList.toggle('hidden', !visible);
        }

        function resetTransientUI() {
            setScreenVisibility('start-screen', false);
            setScreenVisibility('pause-screen', false);
            setScreenVisibility('game-over-screen', false);
            setPauseUIVisible(false);
            document.getElementById('joystick-base').style.display = 'none';
        }

        function pauseGame() {
            if (!state.isPlaying || state.gamePhase !== 'playing') return;
            SFX.engineStop(); SFX.musicStop(); // v23+v24
            state.gamePhase = 'paused';
            needsRender = true; // FIX (Tier 3): one final render for the pause backdrop
            // FIX (v2/P1): kill lingering combat feedback so pause feels truly frozen
            dom('damage-overlay').style.opacity = '0';
            dom('heal-overlay').style.opacity = '0';
            document.querySelectorAll('.score-popup').forEach(p => p.remove());
            document.querySelectorAll('.kill-feed-entry').forEach(p => p.remove());
            state.input = { x: 0, y: 0, isFiring: false };
            document.getElementById('joystick-base').style.display = 'none';
            const saveBtn = document.getElementById('btn-save-run'); // v15: save is Casual-only
            if (saveBtn) saveBtn.style.display = state.mode === 'casual' ? '' : 'none';
            syncHUDControls();
            setScreenVisibility('pause-screen', true);
            setPauseUIVisible(true);
            syncHUDControls();
        }

        function resumeGame() {
            if (state.gamePhase !== 'paused') return;
            state.gamePhase = 'playing';
            needsRender = true; // FIX (Tier 3)
            SFX.engineStart(); SFX.musicStart(); // v23+v24
            // FIX (v2/P1): re-arm timed gates so nothing bursts on the first frame back
            const now = clock.getElapsedTime();
            state.lastFireTime = now;
            state.lastSpawnTime = now;
            state.lastRegenTime = now;
            setScreenVisibility('pause-screen', false);
            setPauseUIVisible(true);
            syncHUDControls();
        }

        function togglePause() {
            if (state.gamePhase === 'playing') pauseGame();
            else if (state.gamePhase === 'paused') resumeGame();
        }

        function getEnemyTypeForLevel(level) {
            const types = ['scout', 'soldier'];
            if (level >= 3) types.push('heavy');
            if (level >= 4) types.push('sniper');
            if (level >= 5) types.push('healer');
            if (level >= 7) types.push('berserker');
            if (level >= 6) types.push('bomber');   // v5
            if (level >= 8) types.push('phantom');  // v5
            if (level >= 10) types.push('gunner');  // v5
            return types[Math.floor(Math.random() * types.length)];
        }

        // v6(C): BOSSES — every 5th level one arrives; three kinds rotate
        const BOSS_KINDS = [ // v24: roster of six, rotating
            { type: 'warlord',  interval: 3.2 },
            { type: 'tempest',  interval: 3.0 },
            { type: 'colossus', interval: 3.8 },
            { type: 'titan',    interval: 4.6 },
            { type: 'nova',     interval: 4.2 },
            { type: 'fortress', interval: 3.4 },
        ];
        const _bossDir = new THREE.Vector3();
        const _bossAxis = new THREE.Vector3(0, 1, 0);

        function showBossBanner(text) {
            const el = document.getElementById('boss-banner');
            if (!el) return;
            el.textContent = text;
            el.classList.remove('anim'); void el.offsetWidth; el.classList.add('anim');
            clearTimeout(el._t);
            el._t = setTimeout(() => { el.style.opacity = '0'; }, 2400);
        }

        function updateBossBar() {
            const bar = document.getElementById('boss-bar');
            if (!bar) return;
            if (!state.bossActive || state.bossActive.isDead) { bar.classList.remove('show'); return; }
            bar.classList.add('show');
            document.getElementById('boss-bar-name').textContent = ENEMY_TYPES[state.bossActive.type]?.name || 'BOSS';
            document.getElementById('boss-bar-fill').style.width =
                Math.max(0, (state.bossActive.hp / state.bossActive.maxHp) * 100) + '%';
        }

        function spawnBoss() {
            if (!state.isPlaying || !player) return;
            const kind = BOSS_KINDS[(state.bossCount || 0) % BOSS_KINDS.length];
            let x, z;
            do {
                x = (Math.random() - 0.5) * 110;
                z = (Math.random() - 0.5) * 110;
            } while (player.mesh.position.distanceTo(new THREE.Vector3(x, 0, z)) < 40);
            let bx, bz; // v17: ring around the player
            do {
                const a = Math.random() * Math.PI * 2;
                bx = (player ? player.mesh.position.x : 0) + Math.cos(a) * 45;
                bz = (player ? player.mesh.position.z : 0) + Math.sin(a) * 45;
            } while (false);
            const boss = new Tank(ENEMY_TYPES[kind.type].color, false, kind.type);
            boss.hp = boss.maxHp = Math.round(boss.maxHp * (1 + state.level * 0.03)); // scales with level
            boss.isBoss = true;
            boss.attackInterval = kind.interval;
            boss.nextAttackAt = clock.getElapsedTime() + 2;
            boss.burstLeft = 0; boss.burstTimer = 0;
            boss.spiralAngle = 0; boss.spiralShots = 0; boss.firing = true; boss.restUntil = 0; // v24
            boss.summoned1 = false; boss.summoned2 = false;
            boss.mesh.position.set(bx, 0, bz);
            enemies.push(boss);
            state.bossActive = boss;
            state.bossCount = (state.bossCount || 0) + 1;
            showEnemyIntro(kind.type);
            showBossBanner('⚠ ' + ENEMY_TYPES[kind.type].name + ' INCOMING ⚠');
            SFX.bossAlarm(); SFX.vibrate([80, 60, 80]); // v23
            updateBossBar();
        }

        function bossSummon(boss, kind) { // Colossus reinforcement waves
            for (let i = 0; i < 2; i++) {
                const m = new Tank(ENEMY_TYPES[kind].color, false, kind);
                const a = Math.random() * Math.PI * 2;
                m.mesh.position.set(boss.mesh.position.x + Math.cos(a) * 7, 0, boss.mesh.position.z + Math.sin(a) * 7);
                enemies.push(m);
            }
            showBossBanner('⚔ ' + (ENEMY_TYPES[boss.type]?.name || 'BOSS') + ' CALLS REINFORCEMENTS!');
        }

        // v4/v10: the Armory — permanent upgrades, exponential cost curve, deep sink
        const SHOP_ITEMS = [
            { id:'hp',     icon:'❤️', name:'Reinforced Chassis', desc:'+20 starting Max HP (per level)',  base:250,  growth:1.6, max:12 },
            { id:'dmg',    icon:'💥', name:'Machined Barrels',   desc:'+8% base damage (per level)',      base:300,  growth:1.6, max:12 },
            { id:'spd',    icon:'⚡', name:'Turbine Engine',     desc:'+6% base speed (per level)',       base:250,  growth:1.5, max:8 },
            { id:'armor',  icon:'🛡️', name:'Spacer Plating',     desc:'+4 starting armor (per level)',    base:350,  growth:1.5, max:6 },
            { id:'regen',  icon:'🔄', name:'Repair Kit',         desc:'+1 HP/s regen (per level)',        base:400,  growth:1.5, max:6 },
            { id:'revive', icon:'✨', name:'Second Wind',        desc:'Revive once/run — lvl2 revives at 75% HP', base:1500, growth:4.0, max:2 },
            { id:'cards',  icon:'🃏', name:'Extra Choice',       desc:'+1 level-up card choice (per level)', base:2500, growth:3.2, max:2 },
        ];
        const SKINS = [
            { id:'amber',   name:'Amber Strike',  color:0xf59e0b, cost:0 },
            { id:'crimson', name:'Crimson Fang',  color:0xef4444, cost:2000 },
            { id:'emerald', name:'Emerald Guard', color:0x10b981, cost:3500 },
            { id:'ice',     name:'Glacier',       color:0x60a5fa, cost:5000 },
            { id:'void',    name:'Void Walker',   color:0x8b5cf6, cost:7500 },
            { id:'gold',    name:'24k Commander', color:0xfcd34d, cost:12000 },
        ];
        const CONSUMABLES = [ // v11: repeatable purchases — consumed by the next run, never max out
            { id:'lucky',    icon:'🍀', name:'Lucky Charm',    desc:'+20% coins for your next run',        base:300, max:5 },
            { id:'headstart',icon:'🚀', name:'Head Start',     desc:'Next run begins with +1 free upgrade card', base:450, max:3 },
        ];
        const consumables = () => state.consumables || (state.consumables = { lucky: 0, headstart: 0 });
        const shopCost = (item) => Math.round(item.base * Math.pow(item.growth || 1.5, ((state.meta || {})[item.id] || 0)));
        const skinState = () => state.skins || (state.skins = { owned: ['amber'], selected: 'amber' });
        const selectedSkinColor = () => { const s = SKINS.find(k => k.id === skinState().selected); return s ? s.color : 0xf59e0b; };

        // ============================================
        // v23: LIFETIME STATS + ACHIEVEMENTS + DAILY CHALLENGES
        // ============================================
        const ACHIEVEMENTS = [
            { id:'firstBlood', icon:'🩸', name:'First Blood',      desc:'Destroy your first enemy tank', goal:1,    stat:'kills',      reward:100 },
            { id:'exterminator', icon:'💀', name:'Exterminator',   desc:'Destroy 500 enemy tanks',        goal:500,  stat:'kills',      reward:1000 },
            { id:'bossSlayer', icon:'👑', name:'Boss Slayer',      desc:'Defeat your first boss',         goal:1,    stat:'bossKills',  reward:300 },
            { id:'realmWarlord', icon:'⚔️', name:'Realm Warlord', desc:'Defeat 10 bosses',               goal:10,   stat:'bossKills',  reward:1500 },
            { id:'critMachine', icon:'🎯', name:'Crit Machine',    desc:'Land 100 critical hits',         goal:100,  stat:'crits',      reward:500 },
            { id:'demolition', icon:'🪓', name:'Demolition Crew', desc:'Destroy 100 trees & rocks',      goal:100,  stat:'destroyed',  reward:500 },
            { id:'explorer', icon:'🧭', name:'Explorer',           desc:'Travel 5,000 units total',       goal:5000, stat:'distance',   reward:750 },
            { id:'rich', icon:'💰', name:"Warmonger Wealth",    desc:'Earn 25,000 coins (lifetime)',   goal:25000, stat:'coinsEarned', reward:1000 },
            { id:'lvl20', icon:'🌟', name:'Veteran',               desc:'Reach level 20 in a run',        goal:20,   stat:'maxLevel',   reward:800 },
            { id:'lvl30', icon:'🔥', name:'Legend',                desc:'Reach level 30 in a run',        goal:30,   stat:'maxLevel',   reward:1500 },
            { id:'comboKing', icon:'⛓️', name:'Combo King',        desc:'Reach a ×8 kill combo',          goal:8,    stat:'maxCombo',   reward:400 },
            { id:'survivor', icon:'⏱️', name:'Survivor',           desc:'Play 15 minutes total',          goal:900,  stat:'playTime',   reward:600 },
            { id:'nightHunter', icon:'😈', name:'Nightmare Hunter',desc:'Defeat a boss on Nightmare',     goal:1,    stat:'bossNightmare', reward:1000 },
            { id:'collector', icon:'🎨', name:'Collector',         desc:'Own 3 tank skins',               goal:3,    stat:'skins',      reward:600 },
        ];
        const DAILY_POOL = [
            { id:'d_kills25', icon:'🎯', name:'Destroy 25 enemies',      stat:'kills',      goal:25,  reward:300 },
            { id:'d_kills60', icon:'💥', name:'Destroy 60 enemies',      stat:'kills',      goal:60,  reward:500 },
            { id:'d_crit15',  icon:'⚡', name:'Land 15 critical hits',   stat:'crits',      goal:15,  reward:300 },
            { id:'d_dest10',  icon:'🪓', name:'Destroy 10 cover objects',stat:'destroyed',  goal:10,  reward:250 },
            { id:'d_boss1',   icon:'👑', name:'Defeat a boss',           stat:'bossKills',  goal:1,   reward:400 },
            { id:'d_lvl10',   icon:'🌟', name:'Reach level 10',          stat:'maxLevel',   goal:10,  reward:300 },
            { id:'d_lvl15',   icon:'🔥', name:'Reach level 15',          stat:'maxLevel',   goal:15,  reward:450 },
            { id:'d_coins800',icon:'💰', name:'Earn 800 coins in one run',stat:'runCoinsBest', goal:800, reward:350 },
            { id:'d_dist400', icon:'🧭', name:'Travel 400 units in one run', stat:'runDistBest', goal:400, reward:250 },
        ];
        const lifeStats = () => state.stats || (state.stats = { kills:0, bossKills:0, crits:0, destroyed:0, distance:0, coinsEarned:0, maxLevel:1, maxCombo:0, playTime:0, bossNightmare:0, skins:1, runs:0 });
        const dailyState = () => {
            const today = new Date().toISOString().slice(0, 10);
            if (!state.daily || state.daily.date !== today) {
                // seed 3 challenges from the pool by date
                const seed = parseInt(today.replace(/-/g, ''), 10);
                let s = seed >>> 0;
                const rnd = () => { s |= 0; s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
                const pool = [...DAILY_POOL];
                const picks = [];
                while (picks.length < 3 && pool.length) picks.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);
                state.daily = { date: today, picks: picks.map(p => p.id), progress: {}, done: [] };
            }
            return state.daily;
        };
        // v25: first-run tutorial tips — contextual, once each, persisted
        function tutorialTip(id, text, ms) {
            if ((state.tutorialTips || {})[id]) return;
            state.tutorialTips = state.tutorialTips || {};
            state.tutorialTips[id] = true;
            try { saveGame(); } catch (e) {}
            const el = document.createElement('div');
            el.className = 'game-toast';
            el.style.animation = 'toastIn 0.3s ease, toastOut 0.4s ease ' + ((ms || 7000) / 1000) + 's forwards';
            el.innerHTML = text;
            document.getElementById('toast-stack').appendChild(el);
            setTimeout(() => el.remove(), ms || 7000);
        }
        function tutorialTick() { // fires contextual tips on a fresh save (first run)
            if ((lifeStats().runs || 0) > 1) return;
            tutorialTip('move', '🕹️ <b>Drag the LEFT half</b> of the screen to drive', 8000);
            tutorialTip('fire', '🔥 <b>Touch &amp; hold the RIGHT half</b> — your cannon auto-aims', 8000);
            if (state.level >= 2) tutorialTip('cards', '🃏 <b>Level up!</b> Pick a card — each makes you stronger', 6000);
            if (state.bossActive && !state.bossActive.isDead) tutorialTip('boss', '👑 <b>BOSS!</b> Use trees as cover — they block shells', 6000);
            if (player.hp < player.maxHp * 0.3) tutorialTip('lowhp', '❤️ <b>Low health!</b> Break line of sight behind rocks', 6000);
        }
        function gameToast(html) { // v23: stacked toasts (achievements, dailies)
            const stack = document.getElementById('toast-stack');
            if (!stack) return;
            const el = document.createElement('div');
            el.className = 'game-toast';
            el.innerHTML = html;
            stack.appendChild(el);
            while (stack.children.length > 3) stack.removeChild(stack.firstChild);
            setTimeout(() => el.remove(), 4000);
        }
        function checkAchievements() { // v23: unlock + reward + toast
            const st = lifeStats();
            const unlocked = state.achUnlocked || (state.achUnlocked = []);
            for (const a of ACHIEVEMENTS) {
                if (unlocked.includes(a.id)) continue;
                if ((st[a.stat] || 0) >= a.goal) {
                    unlocked.push(a.id);
                    state.coins = (state.coins || 0) + a.reward;
                    SFX.achievement(); SFX.coin();
                    gameToast(a.icon + ' <b>' + a.name + '!</b> &nbsp;<span class="t-reward">+' + a.reward + ' 💰</span>');
                    try { saveGame(); } catch (e) {}
                }
            }
        }
        function bumpDaily(stat, value) { // v23: daily aggregate counters (best-values pass value; sums pass delta)
            const d = dailyState();
            if (d.done.length >= 3) return;
            if (stat === 'runCoinsBest' || stat === 'runDistBest' || stat === 'maxLevel') {
                d.progress[stat] = Math.max(d.progress[stat] || 0, value);
            } else {
                d.progress[stat] = (d.progress[stat] || 0) + value;
            }
            for (const p of d.picks) {
                const def = DAILY_POOL.find(x => x.id === p);
                if (!def || d.done.includes(p)) continue;
                if ((d.progress[def.stat] || 0) >= def.goal) {
                    d.done.push(p);
                    state.coins = (state.coins || 0) + def.reward;
                    SFX.achievement(); SFX.coin();
                    gameToast('📅 <b>' + def.name + '</b> complete! &nbsp;<span class="t-reward">+' + def.reward + ' 💰</span>');
                    try { saveGame(); } catch (e) {}
                }
            }
        }
        function trackKill(isBoss, isCrit, payout) { // v23
            const st = lifeStats();
            st.kills++; st.coinsEarned += payout;
            if (isCrit) st.crits++;
            if (state.combo > st.maxCombo) st.maxCombo = state.combo;
            if (isBoss) { st.bossKills++; if (state.diffMult && state.diffMult.dmg >= 1.6) st.bossNightmare++; }
            bumpDaily('kills', 1);
            if (isCrit) bumpDaily('crits', 1);
            if (isBoss) bumpDaily('bossKills', 1);
            bumpDaily('runCoinsBest', state.runCoins || 0);
            checkAchievements();
        }
        function renderAwards() { // v23
            const d = dailyState();
            const st = lifeStats();
            document.getElementById('daily-date').textContent = '· resets daily';
            const dl = document.getElementById('daily-list');
            dl.innerHTML = '';
            for (const p of d.picks) {
                const def = DAILY_POOL.find(x => x.id === p);
                const prog = Math.min(def.goal, d.progress[def.stat] || 0);
                const done = d.done.includes(p);
                const row = document.createElement('div');
                row.className = 'award-row' + (done ? '' : ' locked');
                row.innerHTML = '<div class="aw-icon">' + def.icon + '</div><div class="aw-body"><div class="aw-name">' + def.name +
                    '</div><div class="aw-bar"><div style="width:' + Math.round(prog / def.goal * 100) + '%"></div></div>' +
                    '<div class="aw-desc">' + prog + ' / ' + def.goal + '</div></div>' +
                    (done ? '<div class="aw-done">✓ DONE</div>' : '<div class="aw-reward">+' + def.reward + ' 💰</div>');
                dl.appendChild(row);
            }
            const unlocked = state.achUnlocked || [];
            const al = document.getElementById('ach-list');
            al.innerHTML = '';
            for (const a of ACHIEVEMENTS) {
                const done = unlocked.includes(a.id);
                const prog = Math.min(a.goal, st[a.stat] || 0);
                const row = document.createElement('div');
                row.className = 'award-row' + (done ? '' : ' locked');
                row.innerHTML = '<div class="aw-icon">' + a.icon + '</div><div class="aw-body"><div class="aw-name">' + a.name +
                    '</div><div class="aw-desc">' + a.desc + ' · ' + (a.stat === 'playTime' ? Math.round(prog / 60) + ' min' : prog + '/' + a.goal) + '</div>' +
                    '<div class="aw-bar"><div style="width:' + Math.round(prog / a.goal * 100) + '%"></div></div></div>' +
                    (done ? '<div class="aw-done">✓</div>' : '<div class="aw-reward">+' + a.reward + '</div>');
                al.appendChild(row);
            }
            const achDone = unlocked.length;
            document.getElementById('awards-sub').textContent = achDone + '/' + ACHIEVEMENTS.length + ' achievements · ' + (d.picks.length - d.done.length) + ' dailies left today';
        }

        function updateHomeStats() { // v7+v13: home screen bests/coins
            const bc = document.getElementById('home-best-casual');
            const bl = document.getElementById('home-best-levels');
            const c = document.getElementById('home-coins');
            if (bc) bc.textContent = (state.bestCasual || 0).toLocaleString();
            if (bl) bl.textContent = (state.bestLevels || 0).toLocaleString();
            if (c) c.textContent = (state.coins || 0).toLocaleString();
        }

        // v13: named casual saves — never overwrite, multiple records
        function fmtTime(t) {
            const m = Math.floor((t || 0) / 60), s = Math.floor((t || 0) % 60);
            return m + ':' + String(s).padStart(2, '0');
        }
        function renderCasualSaves() {
            const wrap = document.getElementById('casual-saves');
            if (!wrap) return;
            const saves = state.casualSaves || [];
            document.getElementById('casual-best-label').textContent = (state.bestCasual || 0).toLocaleString();
            document.getElementById('casual-save-count').textContent = '(' + (saves.length + (state.autoSave ? 1 : 0)) + ')';
            wrap.innerHTML = '';
            const mkRow = (name, snap, isAuto, onDelete, onLoad) => {
                const row = document.createElement('div');
                row.className = 'save-row';
                const when = snap.savedAt ? new Date(snap.savedAt).toLocaleDateString() : '';
                row.innerHTML = '<div class="sr-body"><div class="sr-name">' + (isAuto ? '🔄 ' : '💾 ') + name + '</div>' +
                    '<div class="sr-meta">Lv ' + snap.level + ' · ' + (snap.score || 0).toLocaleString() + ' pts · ' + fmtTime(snap.runTime) + (when ? ' · ' + when : '') + '</div></div>';
                const load = document.createElement('button');
                load.className = 'sr-load'; load.textContent = 'Load';
                load.onclick = (e) => { e.stopPropagation(); onLoad(); };
                const del = document.createElement('button');
                del.className = 'sr-del'; del.textContent = '🗑';
                del.onclick = (e) => { e.stopPropagation(); onDelete(); };
                row.appendChild(load); row.appendChild(del);
                wrap.appendChild(row);
            };
            if (state.autoSave) mkRow('Autosave', state.autoSave, true,
                () => { state.autoSave = null; try { saveGame(); } catch (e) {} renderCasualSaves(); },
                () => { setScreenVisibility('casual-screen', false); startGame('casual', { resume: state.autoSave }); });
            saves.forEach((s) => mkRow(s.name, s, false,
                () => { state.casualSaves = state.casualSaves.filter(x => x !== s); try { saveGame(); } catch (e) {} renderCasualSaves(); },
                () => { setScreenVisibility('casual-screen', false); startGame('casual', { resume: s }); }));
            if (!saves.length && !state.autoSave) {
                const empty = document.createElement('div');
                empty.className = 'save-empty';
                empty.textContent = 'No saved runs yet — pause during a run and press 💾 Save.';
                wrap.appendChild(empty);
            }
        }
        function saveCurrentRun(name) { // v13: push a named record (no overwriting)
            const snap = snapshotRun();
            if (!snap) return false;
            snap.name = name;
            snap.savedAt = Date.now();
            let final = name, i = 2;
            while ((state.casualSaves || []).some(s => s.name === final)) final = name + ' (' + (i++) + ')'; // never overwrite
            state.casualSaves = state.casualSaves || [];
            state.casualSaves.push(final === name ? { ...snap, name } : { ...snap, name: final });
            if (state.casualSaves.length > 12) state.casualSaves.shift();
            try { saveGame(); } catch (e) {}
            return final;
        }
        function openSaveDialog() { // v13: name your save
            const snap = snapshotRun();
            if (!snap) return;
            document.getElementById('save-dialog-info').textContent =
                'Lv ' + snap.level + ' · ' + (snap.score || 0).toLocaleString() + ' pts · ' + fmtTime(snap.runTime);
            const input = document.getElementById('save-name-input');
            input.value = 'Run Lv' + snap.level;
            document.getElementById('save-dialog').classList.remove('hidden');
            setTimeout(() => { input.focus(); input.select(); }, 50);
        }
        function closeSaveDialog() { document.getElementById('save-dialog').classList.add('hidden'); }

        let shopReturnTo = 'game-over-screen'; // v7: the Armory remembers where it was opened from
        function renderShop() {
            const wrap = document.getElementById('shop-items');
            wrap.innerHTML = '';
            document.getElementById('shop-coins').textContent = state.coins || 0;
            document.getElementById('shop-coins-go').textContent = state.coins || 0;
            const hc = document.getElementById('home-coins');
            if (hc) hc.textContent = (state.coins || 0).toLocaleString(); // v7
            // v10: skins section first (pure coin sinks)
            const skinTitle = document.createElement('div');
            skinTitle.className = 'cfg-label'; skinTitle.textContent = 'Tank Skins';
            wrap.appendChild(skinTitle);
            for (const skin of SKINS) {
                const row = document.createElement('div');
                row.className = 'skin-row';
                const owned = skinState().owned.includes(skin.id);
                const equipped = skinState().selected === skin.id;
                row.innerHTML = '<div class="skin-swatch" style="background:#' + skin.color.toString(16).padStart(6, '0') + '"></div>' +
                                '<div class="skin-name">' + skin.name + '</div>';
                const btn = document.createElement('button');
                if (equipped) { btn.textContent = '✓'; btn.disabled = true; row.innerHTML += '<span class="equipped">EQUIPPED</span>'; }
                else if (owned) { btn.textContent = 'Equip'; btn.onclick = () => { skinState().selected = skin.id; try { saveGame(); } catch (e) {} playUISound(); renderShop(); }; }
                else { btn.textContent = '💰 ' + skin.cost.toLocaleString(); btn.disabled = (state.coins || 0) < skin.cost;
                       btn.onclick = () => { if ((state.coins || 0) < skin.cost) return; state.coins -= skin.cost; skinState().owned.push(skin.id); skinState().selected = skin.id; lifeStats().skins = skinState().owned.length; checkAchievements(); try { saveGame(); } catch (e) {} playUISound(); renderShop(); }; } // v23
                row.appendChild(btn);
                wrap.appendChild(row);
            }
            const cTitle = document.createElement('div'); // v11: consumables
            cTitle.className = 'cfg-label'; cTitle.textContent = 'Consumables (next run)';
            wrap.appendChild(cTitle);
            for (const con of CONSUMABLES) {
                const row = document.createElement('div');
                row.className = 'shop-item';
                const owned = consumables()[con.id] || 0;
                row.innerHTML = '<div class="si-icon">' + con.icon + '</div>' +
                    '<div class="si-body"><div class="si-name">' + con.name + ' <span style="color:#fbbf24">×' + owned + '</span></div>' +
                    '<div class="si-desc">' + con.desc + '</div>' +
                    '<div class="si-pips">stacks up to ×' + con.max + '</div></div>';
                const btn = document.createElement('button');
                if (owned >= con.max) { btn.textContent = 'MAX'; btn.disabled = true; }
                else {
                    btn.textContent = '💰 ' + con.base.toLocaleString();
                    btn.disabled = (state.coins || 0) < con.base;
                    btn.onclick = () => {
                        if ((state.coins || 0) < con.base) return;
                        state.coins -= con.base;
                        consumables()[con.id] = owned + 1;
                        try { saveGame(); } catch (e) {}
                        playUISound(); renderShop();
                    };
                }
                row.appendChild(btn);
                wrap.appendChild(row);
            }
            const upTitle = document.createElement('div');
            upTitle.className = 'cfg-label'; upTitle.textContent = 'Permanent Upgrades';
            wrap.appendChild(upTitle);
            for (const item of SHOP_ITEMS) {
                const lvl = ((state.meta || {})[item.id] || 0);
                const cost = shopCost(item);
                const row = document.createElement('div');
                row.className = 'shop-item';
                row.innerHTML =
                    '<div class="si-icon">' + item.icon + '</div>' +
                    '<div class="si-body"><div class="si-name">' + item.name + '</div>' +
                    '<div class="si-desc">' + item.desc + '</div>' +
                    '<div class="si-pips">' + '●'.repeat(lvl) + '○'.repeat(item.max - lvl) + ' level ' + lvl + '/' + item.max + '</div></div>';
                const btn = document.createElement('button');
                if (lvl >= item.max) { btn.textContent = 'MAX'; btn.disabled = true; }
                else {
                    btn.textContent = '💰 ' + cost;
                    btn.disabled = (state.coins || 0) < cost;
                    btn.onclick = () => {
                        if ((state.coins || 0) < cost) return;
                        state.coins -= cost;
                        state.meta = state.meta || {};
                        state.meta[item.id] = (state.meta[item.id] || 0) + 1;
                        try { saveGame(); } catch (e) {}
                        playUISound();
                        renderShop();
                    };
                }
                row.appendChild(btn);
                wrap.appendChild(row);
            }
        }

        // v10: game modes
        const DIFFICULTIES = {
            easy:      { dmg: 0.7, fire: 0.75, label: 'Easy' },
            normal:    { dmg: 1.0, fire: 1.0,  label: 'Normal' },
            hard:      { dmg: 1.3, fire: 1.25, label: 'Hard' },
            nightmare: { dmg: 1.6, fire: 1.5,  label: 'Nightmare' }
        };
        state.diffMult = DIFFICULTIES.normal;
        state.levelsCfg = { density: 10, difficulty: 'normal', startLevel: 1 };

        function snapshotRun() { // v10: casual mid-run progress
            if (!player || state.mode !== 'casual') return null;
            return {
                level: state.level, xp: state.xp, xpToNext: state.xpToNext,
                score: state.score, kills: state.kills, runTime: state.runTime, runCoins: state.runCoins,
                playerStats: JSON.parse(JSON.stringify(state.playerStats)),
                hp: player.hp, x: +player.mesh.position.x.toFixed(1), z: +player.mesh.position.z.toFixed(1),
                biome: state.currentBiome
            };
        }

        function quickSaveFromPause() { // v13: save in place, keep playing
            if (state.mode === 'casual') { openSaveDialog(); return; }
            try { saveGame(); } catch (e) {}
            showUpgradeNotification('💾 Progress saved');
        }

        function quitToMenu() { // v13: plain quit (progress already saved where relevant)
            try { saveGame(); } catch (e) {}
            state.isPlaying = false;
            state.gamePhase = 'menu';
            state.input = { x: 0, y: 0, isFiring: false };
            SFX.engineStop(); SFX.ambientStop(); SFX.musicStop(); // v24
            if (player && scene) { scene.remove(player.mesh); disposeObject3D(player.mesh); }
            enemies.forEach(e => { scene.remove(e.mesh); disposeObject3D(e.mesh); }); enemies = [];
            bullets.forEach(b => scene.remove(b.group)); bullets = [];
            missiles.forEach(m => scene.remove(m.group)); missiles = []; // v24
            particles.forEach(p => { scene.remove(p.mesh); disposeObject3D(p.mesh); }); particles = [];
            document.querySelectorAll('.score-popup').forEach(p => p.remove());
            setScreenVisibility('pause-screen', false);
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('start-screen', true);
            setPauseUIVisible(false);
            syncHUDControls();
            updateHomeStats();
            showUpgradeNotification('💾 Progress saved');
        }

        function startGame(mode = 'casual', opts = {}) {
            lifeStats().runs++; state.runDist = 0; // v23
            lifeStats().skins = Math.max(lifeStats().skins || 1, skinState().owned.length);
            // FIX (Tier 2): dispose GPU resources of everything from the previous run
            // (bullets use shared cached resources, so removing them from the scene is enough)
            if (player) { scene.remove(player.mesh); disposeObject3D(player.mesh); }
            enemies.forEach(e => { scene.remove(e.mesh); disposeObject3D(e.mesh); });
            bullets.forEach(b => scene.remove(b.group));
            particles.forEach(p => { scene.remove(p.mesh); disposeObject3D(p.mesh); });
            enemies = [];
            bullets = [];
            particles = [];

            state.mode = mode; // v10
            state.diffMult = DIFFICULTIES[(opts && opts.difficulty) || 'normal'] || DIFFICULTIES.normal;
            // v11: consume per-run boosts
            const cons = consumables();
            state.runCoinBoost = 0.2 * (cons.lucky || 0);
            const freeCards = cons.headstart || 0;
            cons.lucky = 0; cons.headstart = 0;
            try { saveGame(); } catch (e) {}
            if (mode === 'levels') state.levelsCfg.density = (opts && opts.density) || 10;
            const resume = mode === 'casual' && (opts && opts.resume);
            state.score = resume ? opts.resume.score : 0;
            state.kills = resume ? opts.resume.kills : 0; // v2: run stats
            state.runTime = resume ? opts.resume.runTime : 0;
            state.runCoins = resume ? opts.resume.runCoins : 0;
            state.xp = resume ? opts.resume.xp : 0;
            state.level = resume ? opts.resume.level : ((mode === 'levels' && opts.startLevel) || 1);
            state.xpToNext = resume ? opts.resume.xpToNext : 100;
            // v13: named saves are managed in the Casual hub
            state.isPlaying = true;
            state.gamePhase = 'playing';
            state.isChoosingUpgrade = false; // v15: never inherit card state between runs
            state.pendingChoices = 0;
            state.pendingBiome = null;
            document.querySelectorAll('#upgrade-choice').forEach(o => o.remove());
            state.startLevelUsed = (mode === 'levels' && opts.startLevel) || 1;
            state.input = { x: 0, y: 0, isFiring: false };
            state.lastSpawnTime = clock.getElapsedTime();
            state.lastRegenTime = clock.getElapsedTime();
            state.enemiesIntroduced = new Set();
            state.playerStats = { speed: 100, damage: 100, fireRate: 100, armor: 0, regen: 0, maxHp: 100, multishot: 0, crit: 0, pierce: 0, coinBonus: 0, healOnKill: 0, xpBonus: 0, adrenaline: 0, missile: 0, splash: 0, shield: 0 };
            // v4 (Upgrades-B): apply permanent Armory bonuses + arm Second Wind
            const meta = state.meta || {};
            state.playerStats.maxHp += (meta.hp || 0) * 20;
            state.playerStats.damage += (meta.dmg || 0) * 8;
            state.playerStats.speed += (meta.spd || 0) * 6;
            state.playerStats.armor += (meta.armor || 0) * 4;
            state.playerStats.regen += (meta.regen || 0) * 1; // v10: Repair Kit
            state.reviveAvailable = (meta.revive || 0) > 0;
            state.targetEnemy = null;
            state.cameraShake = 0;
            state.bossActive = null; // v6(C)
            state.bossPending = false;
            state.bossCount = state.bossCount || 0;
            updateBossBar();
            SFX.engineStart(); // v23+v24: audio lifecycle starts AFTER cleanup
            SFX.ambientSet(BIOMES[(opts && opts.resume && opts.resume.biome) || 0]);
            SFX.musicStart();

            if (freeCards > 0 && !resume) state.pendingChoices = (state.pendingChoices || 0) + freeCards; // v11: Head Start cards
            player = new Tank(selectedSkinColor(), true); // v10: equipped skin
            const sRingGeo = new THREE.RingGeometry(3.1, 3.4, 40); // v24: shield ring
            const sRingMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
            player.shieldRing = new THREE.Mesh(sRingGeo, sRingMat);
            player.shieldRing.rotation.x = -Math.PI / 2;
            player.shieldRing.position.y = 1.2;
            player.shieldRing.visible = false;
            player.mesh.add(player.shieldRing);
            state.shieldUp = false; state.shieldReadyAt = 0; state.lastMissileAt = 0;
            if (resume) {
                Object.assign(state.playerStats, opts.resume.playerStats);
                player.maxHp = state.playerStats.maxHp;
                player.hp = opts.resume.hp;
                player.mesh.position.set(opts.resume.x, 0, opts.resume.z);
                loadBiome(opts.resume.biome);
            } else {
                loadBiome(Math.floor((state.level - 1) / 3)); // levels mode may start deeper
            }
            updateHUD();

            document.getElementById('start-screen').classList.add('hidden');
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('pause-screen', false);
            setPauseUIVisible(true);
            syncHUDControls();
        }

        function addXP(amount) {
            amount *= 1 + (state.playerStats.xpBonus || 0) / 100; // v5: Bounty Hunter
            state.xp += amount;
            
            while (state.xp >= state.xpToNext) {
                state.xp -= state.xpToNext;
                state.level++;
                state.xpToNext = Math.floor(state.xpToNext * 1.4);

                // v4 (Upgrades-A): every level-up offers a 3-card choice (queues if one is open)
                SFX.levelUp(); // v23
                if (state.isChoosingUpgrade) state.pendingChoices = (state.pendingChoices || 0) + 1;
                else showUpgradeChoices();

                // Change biome every 3 levels (v15: smooth transition, deferred until cards are picked)
                if (state.level % 3 === 0) state.pendingBiome = Math.floor(state.level / 3);

                // v6(C): a boss arrives every 5th level
                if (state.level % 5 === 0) state.bossPending = true;

                lifeStats().maxLevel = Math.max(lifeStats().maxLevel, state.level); // v23
                bumpDaily('maxLevel', state.level);
                if (state.level > (state.maxCleared || 1)) { // v13: level-select progression
                    state.maxCleared = state.level;
                    try { saveGame(); } catch (e) {}
                }
            }
            maybeTransitionBiome(); // v15: if no cards are open, transition now
            updateHUD();
        }

        function showUpgradeNotification(text) {
            const notif = document.getElementById('upgrade-notification');
            document.getElementById('upgrade-text').textContent = text;
            notif.classList.add('show');
            setTimeout(() => notif.classList.remove('show'), 2500);
        }

        function showEnemyIntro(type) {
            if (state.enemiesIntroduced.has(type)) return;
            state.enemiesIntroduced.add(type);
            
            const data = ENEMY_TYPES[type];
            document.getElementById('enemy-name').textContent = 'New: ' + data.name;
            document.getElementById('enemy-desc').textContent = data.desc;
            const intro = document.getElementById('enemy-intro');
            intro.classList.add('show');
            setTimeout(() => intro.classList.remove('show'), 3000);
        }

        function spawnEnemy() {
            if (!state.isPlaying || !player) return;

            // v17: enemies spawn in a ring around the PLAYER — works anywhere in the infinite world
            let x, z;
            do {
                const a = Math.random() * Math.PI * 2;
                const d = 38 + Math.random() * 26;
                x = player.mesh.position.x + Math.cos(a) * d;
                z = player.mesh.position.z + Math.sin(a) * d;
            } while (false);

            const type = getEnemyTypeForLevel(state.level);
            showEnemyIntro(type);
            
            const enemy = new Tank(ENEMY_TYPES[type].color, false, type);
            if (state.mode === 'casual' && state.level > 20) { // v10: endless ramp
                const m = 1 + (state.level - 20) * 0.04;
                enemy.hp = enemy.maxHp = Math.round(enemy.maxHp * m);
            }
            enemy.mesh.position.set(x, 0, z);
            enemies.push(enemy);
        }

        function showScorePopup(x, z, points) {
            const pos = new THREE.Vector3(x, 3, z);
            pos.project(camera);
            
            const screenX = (pos.x + 1) / 2 * window.innerWidth;
            const screenY = (-pos.y + 1) / 2 * window.innerHeight;
            
            const popup = document.createElement('div');
            popup.className = 'score-popup';
            popup.textContent = '+' + points;
            popup.style.left = screenX + 'px';
            popup.style.top = screenY + 'px';
            document.body.appendChild(popup);
            
            setTimeout(() => popup.remove(), 1200);
        }

        function updatePhysics(dt) {
            const _physT0 = performance.now(); // v21: frame cost probe (for morph self-throttling)
            if (!player || player.isDead) return;
            state.runTime = (state.runTime || 0) + dt; // v2: pause-proof run clock

            // Player movement
            player.move(dt, _sv1.set(state.input.x, state.input.y)); // FIX (Tier 3)
            player.update(dt);

            // Health regen
            if (state.playerStats.regen > 0 && clock.getElapsedTime() - state.lastRegenTime > 1) {
                if (player.hp < player.maxHp) {
                    player.hp = Math.min(player.maxHp, player.hp + state.playerStats.regen);
                    dom('heal-overlay').style.opacity = '0.3'; // FIX (Tier 4)
                    setTimeout(() => dom('heal-overlay').style.opacity = '0', 200);
                    updateHUD();
                }
                state.lastRegenTime = clock.getElapsedTime();
            }

            // Enhanced Auto-aim with Sticky Targeting
            let bestTarget = null;
            let minScore = Infinity;

            enemies.forEach(e => {
                if (!e.isDead) {
                    let dist = player.mesh.position.distanceTo(e.mesh.position);
                    
                    // Bias factor: Make the current target "closer" effectively to prevent jittery switching
                    if (state.targetEnemy === e) {
                        dist *= 0.75; // 25% stickiness bias
                    }

                    if (dist < minScore) {
                        minScore = dist;
                        bestTarget = e;
                    }
                }
            });
            
            // Validation: Ensure target is still valid
            if (state.targetEnemy && (state.targetEnemy.isDead || !enemies.includes(state.targetEnemy))) {
                state.targetEnemy = null;
            }
            
            state.targetEnemy = bestTarget;

            if (state.targetEnemy) {
                player.aimAt(state.targetEnemy.mesh.position, dt); // FIX (Tier 4)
            } else if (state.input.x !== 0 || state.input.y !== 0) {
                const tPos = player.mesh.position.clone().add(new THREE.Vector3(state.input.x * 10, 0, state.input.y * 10));
                player.aimAt(tPos);
            }

            // Player shooting
            const fireRate = CONFIG.fireRate * (100 / state.playerStats.fireRate);
            if (state.input.isFiring && clock.getElapsedTime() - state.lastFireTime > fireRate) {
                shoot(player);
                state.lastFireTime = clock.getElapsedTime();
            }

            // Enemy AI
            enemies.forEach(e => {
                if (e.isDead) return;

                // Terrain following for enemies
                e.move(dt, _sv1.set(0, 0)); // This updates terrain height // FIX (Tier 3)

                const toPlayer = _tv4.subVectors(player.mesh.position, e.mesh.position); // FIX (Tier 3): scratch vector
                const dist = toPlayer.length();

                if (e.type === 'healer') {
                    const woundedAlly = enemies.find(ally => !ally.isDead && ally !== e && ally.hp < ally.maxHp);
                    if (woundedAlly && clock.getElapsedTime() - e.lastHealTime > 2) {
                        woundedAlly.heal(ENEMY_TYPES.healer.healAmount);
                        e.lastHealTime = clock.getElapsedTime();
                    }
                    if (dist < 20) e.move(dt, _sv1.set(-toPlayer.x, -toPlayer.z).normalize()); // FIX (Tier 3)
                } else if (e.type === 'sniper') {
                    if (dist < 25) e.move(dt, _sv1.set(-toPlayer.x, -toPlayer.z).normalize().multiplyScalar(0.5));
                    else if (dist > 30) e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize()); // FIX (Tier 3)
                    e.aimAt(player.mesh.position, dt); // FIX (Tier 4)
                    if (enemyFireRoll(0.008, dt)) shoot(e); // v10
                } else if (e.isBoss) { // v6(C): boss behaviour
                    if (dist > 24) e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize());
                    else if (dist < 14) e.move(dt, _sv1.set(-toPlayer.x, -toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    const now = clock.getElapsedTime();
                    if (e.type === 'warlord') {
                        if (now >= e.nextAttackAt) { // five-shell fan barrage
                            e.nextAttackAt = now + e.attackInterval;
                            createMuzzleFlash(e);
                            const base = _bossDir.set(toPlayer.x, 0, toPlayer.z).normalize();
                            for (let s = -2; s <= 2; s++) {
                                spawnBullet(e, base.clone().applyAxisAngle(_bossAxis, s * 0.3), ENEMY_TYPES.warlord.damage);
                            }
                        }
                    } else if (e.type === 'colossus') {
                        if (e.hp < e.maxHp * 0.66 && !e.summoned1) { e.summoned1 = true; bossSummon(e, 'scout'); }
                        if (e.hp < e.maxHp * 0.33 && !e.summoned2) { e.summoned2 = true; bossSummon(e, 'soldier'); }
                        if (now >= e.nextAttackAt) { e.nextAttackAt = now + e.attackInterval; e.burstLeft = 3; }
                        if (e.burstLeft > 0 && now >= e.burstTimer) {
                            e.burstLeft--; e.burstTimer = now + 0.18;
                            if (e.burstLeft === 2) createMuzzleFlash(e);
                            spawnBullet(e, _bossDir.set(toPlayer.x, 0, toPlayer.z).normalize(), ENEMY_TYPES.colossus.damage);
                        }
                    } else if (e.type === 'nova') {
                        if (now >= e.nextAttackAt) { // eight-way nova ring
                            e.nextAttackAt = now + e.attackInterval;
                            e.mesh.traverse(c => { if (c.isMesh && c.material) { c.material.transparent = true; c.material.opacity = 1; } });
                            createMuzzleFlash(e);
                            for (let s = 0; s < 8; s++) {
                                const a = s / 8 * Math.PI * 2;
                                spawnBullet(e, _bossDir.set(Math.sin(a), 0, Math.cos(a)), ENEMY_TYPES.nova.damage);
                            }
                        } else if (e.nextAttackAt - now > 1.2) { // cloaked while charging
                            const cloackO = 0.15 + 0.1 * Math.sin(now * 3);
                            e.mesh.traverse(c => { if (c.isMesh && c.material) { c.material.transparent = true; c.material.opacity = cloackO; } });
                        }
                    } else if (e.type === 'titan') { // v24: ground-slam shockwaves
                        if (dist > 16) e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize());
                        e.aimAt(player.mesh.position, dt);
                        if (now >= e.nextAttackAt) {
                            e.nextAttackAt = now + e.attackInterval;
                            createExplosion(e.mesh.position.clone(), 50, 0x88aaff, 'armor');
                            SFX.explosion(50);
                            state.cameraShake = Math.max(state.cameraShake, 0.7);
                            const slamD = e.mesh.position.distanceTo(player.mesh.position);
                            if (slamD < 14) player.takeDamage(ENEMY_TYPES.titan.damage * (slamD < 7 ? 1 : 0.6) * (state.diffMult.dmg || 1));
                            showDamageDirection(e.mesh.position.x, e.mesh.position.z);
                            const ringGeo2 = new THREE.RingGeometry(1, 2.2, 40);
                            const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xaaccff, transparent: true, opacity: 0.8, side: THREE.DoubleSide });
                            const wave = new THREE.Mesh(ringGeo2, ringMat2);
                            wave.rotation.x = -Math.PI / 2;
                            wave.position.copy(e.mesh.position); wave.position.y += 0.4;
                            scene.add(wave);
                            let ws = 1;
                            const animW = () => { ws += 1.6; wave.scale.setScalar(ws); ringMat2.opacity -= 0.05;
                                if (ringMat2.opacity > 0) requestAnimationFrame(animW); else { scene.remove(wave); ringGeo2.dispose(); ringMat2.dispose(); } };
                            animW();
                        }
                    } else if (e.type === 'tempest') { // v24: blink strikes
                        e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize());
                        e.aimAt(player.mesh.position, dt);
                        if (now >= e.nextAttackAt) {
                            e.nextAttackAt = now + e.attackInterval;
                            createExplosion(e.mesh.position.clone(), 16, 0x38bdf8, 'armor');
                            const a2 = Math.random() * Math.PI * 2;
                            const d2 = 16 + Math.random() * 8;
                            e.mesh.position.set(player.mesh.position.x + Math.cos(a2) * d2, 0, player.mesh.position.z + Math.sin(a2) * d2);
                            SFX.bossAlarm();
                            e.burstLeft = 3; e.burstTimer = 0;
                        }
                        if (e.burstLeft > 0 && now >= e.burstTimer) {
                            e.burstLeft--; e.burstTimer = now + 0.14;
                            if (e.burstLeft === 2) createMuzzleFlash(e);
                            spawnBullet(e, _bossDir.set(toPlayer.x, 0, toPlayer.z).normalize(), ENEMY_TYPES.tempest.damage);
                        }
                    } else if (e.type === 'fortress') { // v24: spiral barrage with rest cycles
                        if (dist > 30) e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize().multiplyScalar(0.5));
                        e.aimAt(player.mesh.position, dt);
                        e.spiralAngle = (e.spiralAngle || 0) + dt * 2.4;
                        if (now >= (e.restUntil || 0)) {
                            if (e.firing && now >= (e.nextSpiral || 0)) {
                                e.nextSpiral = now + 0.22;
                                for (let s2 = 0; s2 < 2; s2++) {
                                    const a3 = e.spiralAngle + s2 * Math.PI;
                                    spawnBullet(e, _bossDir.set(Math.sin(a3), 0, Math.cos(a3)), ENEMY_TYPES.fortress.damage);
                                }
                                e.spiralShots = (e.spiralShots || 0) + 1;
                                if (e.spiralShots >= 22) { e.spiralShots = 0; e.firing = false; e.restUntil = now + e.attackInterval; }
                            }
                            if (!e.firing && now >= e.restUntil) e.firing = true;
                        }
                    }
                } else if (e.type === 'bomber') { // v5: kamikaze — sprint and detonate
                    e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    if (dist < 4.5) {
                        createExplosion(e.mesh.position.clone(), 45, 0xff4500, 'armor', 'bomber');
                        player.takeDamage(ENEMY_TYPES.bomber.damage * (state.diffMult.dmg || 1)); // v10: difficulty
                        showDamageDirection(e.mesh.position.x, e.mesh.position.z);
                        e.die();
                    }
                } else if (e.type === 'phantom') { // v5: cloaked skirmisher
                    if (dist > 20) e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    if (enemyFireRoll(0.010 * (ENEMY_TYPES.phantom.fireRate || 0.5), dt)) shoot(e); // v10
                    const cloackO = 0.25 + 0.6 * Math.abs(Math.sin(clock.getElapsedTime() * 1.5));
                    e.mesh.traverse(c => {
                        if (c.isMesh && c.material) { c.material.transparent = true; c.material.opacity = cloackO; }
                    });
                } else if (e.type === 'gunner') { // v5: burst-fire support
                    if (dist > 22) e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    if ((e.burstLeft || 0) > 0) {
                        if (clock.getElapsedTime() > (e.burstTimer || 0)) {
                            shoot(e);
                            e.burstLeft--;
                            e.burstTimer = clock.getElapsedTime() + 0.12;
                        }
                    } else if (enemyFireRoll(0.003, dt)) {
                        e.burstLeft = 3;
                    } // v10
                 } else if (e.type === 'berserker') {
                    e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt); // FIX (Tier 4)
                    if (dist < 18 && enemyFireRoll(0.025, dt)) shoot(e); // v10 // FIX (Tier 3)
                } else {
                    if (dist > 18) e.move(dt, _sv1.set(toPlayer.x, toPlayer.z).normalize()); // FIX (Tier 3)
                    e.aimAt(player.mesh.position, dt); // FIX (Tier 4)
                    if (enemyFireRoll(0.012 * (ENEMY_TYPES[e.type]?.fireRate || 0.4), dt)) shoot(e); // v10
                }
            });

            // v5: remove enemies that died outside the bullet path (kamikaze detonations)
            if (enemies.some(en => en.isDead)) enemies = enemies.filter(en => !en.isDead);

            // Bullets
            for (let i = bullets.length - 1; i >= 0; i--) {
                const b = bullets[i];
                b.group.position.add(_tv1.copy(b.group.userData.vel).multiplyScalar(dt)); // FIX (Tier 3): no per-frame allocation
                b.group.userData.life -= dt;

                // Pulse effect
                const pulse = 1 + Math.sin(clock.getElapsedTime() * 25) * 0.18;
                b.innerGlow.scale.setScalar(pulse);
                b.outerGlow.scale.setScalar(pulse * 1.1);

                let hit = false;

                // v17: no walls — bullets simply expire by lifetime

                // Environment Object Check (Trees, Rocks)
                // FIX (Tier 3): spatial grid — the bullet now checks only the ~3 cells near
                // it instead of scanning every environment object (incl. 1,250 grass clumps).
                if (!hit) {
                    for (const col of collidersNear(b.group.position.x, b.group.position.z)) {
                        const dx = b.group.position.x - col.x;
                        const dz = b.group.position.z - col.z;
                        const distSq = dx*dx + dz*dz;
                        const rad = col.r;

                        // Simple cylinder collision for environment
                        if (distSq < rad*rad) {
                            hit = true;
                            createExplosion(b.group.position, 8, 0xaaaaaa, col.type);
                            // v19: destructible cover — soak hits, then shatter
                            if (col.hp !== undefined && !col.dead) {
                                col.hp -= b.group.userData.damage;
                                if (col.hp <= 0) {
                                    const ck = chunkKey(Math.floor(col.x / CHUNK), Math.floor(col.z / CHUNK));
                                    const ch2 = envChunks.get(ck);
                                    if (ch2) destroyDestructible(ch2, col);
                                }
                            }
                            break;
                        }
                    }
                }

                if (!hit) {
                    if (b.group.userData.isPlayer) {
                        for (let j = enemies.length - 1; j >= 0; j--) {
                            const enemy = enemies[j];
                            if (!enemy.isDead) {
                                // Cylindrical Hitbox: even more forgiving on elevation for gameplay feel
                                const dx = b.group.position.x - enemy.mesh.position.x;
                                const dz = b.group.position.z - enemy.mesh.position.z;
                                const dy = Math.abs(b.group.position.y - enemy.mesh.position.y);
                                
                                const distSq = dx*dx + dz*dz;
                                const hitRadius = 2.6; // Slightly larger hitbox
                                const heightThreshold = 6.0; // Much more forgiving elevation hit (was 3.8)

                                if (distSq < hitRadius*hitRadius && dy < heightThreshold && !b.group.userData.hitList.includes(enemy)) {
                                    b.group.userData.hitList.push(enemy); // v5: pierce memory
                                    let dmg = b.group.userData.damage; // v4: crits
                                    const isCrit = Math.random() * 100 < (state.playerStats.crit || 0);
                                    if (isCrit) dmg *= 2;
                                    enemy.takeDamage(dmg);
                                    if (isCrit) SFX.crit(); else SFX.hit(); // v23
                                    if ((state.playerStats.splash || 0) > 0) { // v24: Shell Shock
                                        const radius = 3.5 + state.playerStats.splash * 1.2;
                                        for (let j = enemies.length - 1; j >= 0; j--) {
                                            const other = enemies[j];
                                            if (other === enemy || other.isDead) continue;
                                            if (other.mesh.position.distanceTo(b.group.position) < radius) {
                                                other.takeDamage(b.group.userData.damage * 0.5);
                                                if (other.isDead) {
                                                    const pts2 = ENEMY_TYPES[other.type]?.points || 100;
                                                    state.score += pts2; state.kills++;
                                                    trackKill(!!other.isBoss, false, Math.floor(pts2 * 0.5));
                                                    addKillReward(other);
                                                    addXP(pts2 / 2);
                                                    enemies.splice(j, 1);
                                                }
                                            }
                                        }
                                    }
                                    if (enemy.isBoss) updateBossBar(); // v6(C)
                                    
                                    const enemyColor = ENEMY_TYPES[enemy.type]?.color || 0xff0000;
                                    // Pass enemy type for specific visual effects
                                    createExplosion(b.group.position, isCrit ? 26 : 18, enemyColor, 'armor', enemy.type);
                                    
                                    if (enemy.isDead) {
                                        const points = ENEMY_TYPES[enemy.type]?.points || 100;
                                        state.score += points;
                                        state.kills++; // v2: run stats
                                        SFX.kill(); // v23
                                        if (state.playerStats.healOnKill) { // v5: Field Medic
                                            player.hp = Math.min(player.maxHp, player.hp + state.playerStats.healOnKill);
                                        }
                                        if (state.playerStats.adrenaline) { // v5: Adrenaline Rush
                                            state.speedBoostUntil = clock.getElapsedTime() + 1.5;
                                        }
                                        const __payout = Math.floor((enemy.typeData ? enemy.typeData.points : 50) * (1 + state.combo * 0.2) * 0.5 * (1 + (state.runCoinBoost || 0)));
                                        trackKill(!!enemy.isBoss, isCrit, __payout); // v23
                                        addKillReward(enemy); // FIX (Coins): combo + coin reward — wired at the real kill site
                                        addKillFeed(points, (ENEMY_TYPES[enemy.type]?.name || 'Tank') + (isCrit ? ' ⚡CRIT' : ''), state.combo); // v2 UI + v4 crit
                                        addXP(points / 2);
                                        showScorePopup(enemy.mesh.position.x, enemy.mesh.position.z, points);
                                        if (enemy.isBoss) { // v6(C): boss loot + celebration
                                            createExplosion(enemy.mesh.position.clone(), 120, 0xffaa00, 'armor', enemy.type);
                                            state.cameraShake = 0.8;
                                            showBossBanner('🏆 ' + (ENEMY_TYPES[enemy.type]?.name || 'BOSS') + ' DEFEATED! +' + points + ' coins-ready points');
                                            SFX.bossDown(); SFX.vibrate([60, 40, 60, 40, 120]); // v23
                                            player.hp = Math.min(player.maxHp, player.hp + Math.ceil(player.maxHp * 0.25)); // loot heal
                                            state.bossActive = null;
                                            updateBossBar();
                                        }
                                        enemies.splice(j, 1);
                                    }
                                    if (b.group.userData.pierce > 0) { // v5: keep flying through
                                        b.group.userData.pierce--;
                                    } else {
                                        hit = true;
                                        break;
                                    }
                                }
                            }
                        }
                    } else {
                        // Enemy hitting Player
                        const dx = b.group.position.x - player.mesh.position.x;
                        const dz = b.group.position.z - player.mesh.position.z;
                        const dy = Math.abs(b.group.position.y - player.mesh.position.y);
                        
                        // Player hitbox slightly larger
                        if (dx*dx + dz*dz < 2.5*2.5 && dy < 3.8) {
                            showDamageDirection(b.group.position.x, b.group.position.z); // v2 UI
                            player.takeDamage(b.group.userData.damage);
                            createExplosion(b.group.position, 14, selectedSkinColor(), 'armor'); // v10: skin color
                            
                            dom('damage-overlay').style.opacity = '0.5'; // FIX (Tier 4)
                            setTimeout(() => dom('damage-overlay').style.opacity = '0', 150);
                            
                            updateHUD();
                            if (player.hp <= 0) endGame();
                            hit = true;
                        }
                    }
                }

                if (hit || b.group.userData.life <= 0) {
                    if (!hit && b.group.position.y < getTerrainHeight(b.group.position.x, b.group.position.z)) {
                        // Hit ground
                        createExplosion(b.group.position, 5, 0x6a6a6a, 'ground');
                    }
                    scene.remove(b.group);
                    bullets.splice(i, 1);
                }
            }

            // Particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.mesh.position.add(_tv2.copy(p.velocity).multiplyScalar(dt)); // FIX (Tier 3)
                
                if (p.gravity) {
                    p.velocity.y -= 28 * dt;
                    const groundY = getTerrainHeight(p.mesh.position.x, p.mesh.position.z);
                    if (p.mesh.position.y < groundY + 0.1) {
                        p.mesh.position.y = groundY + 0.1;
                        p.velocity.y *= -0.35;
                        p.velocity.x *= 0.7;
                        p.velocity.z *= 0.7;
                    }
                }
                
                if (p.rotationSpeed) {
                    p.mesh.rotation.x += p.rotationSpeed.x * dt;
                    p.mesh.rotation.y += p.rotationSpeed.y * dt;
                    p.mesh.rotation.z += p.rotationSpeed.z * dt;
                }

                if (p.isSmoke) {
                    p.mesh.scale.multiplyScalar(1 + p.expansionRate * dt);
                    p.velocity.y *= 0.98;
                }
                
                p.life -= dt;
                p.mesh.material.opacity = Math.max(0, p.life * 1.2);
                if (!p.isSmoke) p.mesh.scale.multiplyScalar(0.97);
                
                if (p.life <= 0) {
                    scene.remove(p.mesh);
                    disposeObject3D(p.mesh); // FIX (Tier 2): frees per-particle materials (geometries are shared)
                    particles.splice(i, 1);
                }
            }

            // Environment particles
            // FIX (Tier 3): positions live on plain data; the single InstancedMesh's
            // matrices are refreshed once per frame (identical motion, 1 draw call).
            const biome = BIOMES[state.currentBiome];
            if (envParticleMesh) {
                for (let i = 0; i < environmentParticles.length; i++) {
                    const p = environmentParticles[i];
                    p.pos.add(_tv3.copy(p.velocity).multiplyScalar(dt));
                    p.phase += dt;

                    if (p.type === 'fireflies') {
                        p.pos.x += Math.sin(p.phase * 2) * dt * 2;
                        p.pos.y += Math.sin(p.phase * 3) * dt;
                    }

                    if (p.pos.y < 0) p.pos.y = 20;
                    if (p.pos.y > 25) p.pos.y = 0;
                    // v17: ambient particles wrap around the player, not the origin
                    if (p.pos.x - player.mesh.position.x > 80) p.pos.x -= 160;
                    if (player.mesh.position.x - p.pos.x > 80) p.pos.x += 160;
                    if (p.pos.z - player.mesh.position.z > 80) p.pos.z -= 160;
                    if (player.mesh.position.z - p.pos.z > 80) p.pos.z += 160;

                    _dummy.position.copy(p.pos);
                    _dummy.rotation.set(0, 0, 0);
                    _dummy.scale.setScalar(1);
                    _dummy.updateMatrix();
                    envParticleMesh.setMatrixAt(i, _dummy.matrix);
                }
                envParticleMesh.instanceMatrix.needsUpdate = true;
            }

            // Animate lava
            lavaMeshes.forEach(lava => {
                lava.userData.phase += dt * 2;
                lava.material.opacity = 0.8 + Math.sin(lava.userData.phase) * 0.15;
            });

            // Animate water
            if (waterMesh) {
                const time = clock.getElapsedTime();
                const positions = waterMesh.geometry.attributes.position;
                for (let i = 0; i < positions.count; i++) {
                    const x = positions.getX(i);
                    const y = positions.getY(i);
                    positions.setZ(i, Math.sin(x * 0.3 + time) * 0.3 + Math.cos(y * 0.3 + time * 0.7) * 0.2);
                }
                positions.needsUpdate = true;
            }

            updateMissiles(dt); // v24
            autoQualityTick(dt); // v25
            updateBiomeMorph(); // v20: morphing realm transition
            // v24: Missile Pod — homing missiles on a timer
            if ((state.playerStats.missile || 0) > 0 && state.targetEnemy && !state.targetEnemy.isDead) {
                const mInt = 5 / state.playerStats.missile;
                if (clock.getElapsedTime() - (state.lastMissileAt || 0) > mInt) {
                    state.lastMissileAt = clock.getElapsedTime();
                    fireHomingMissile(state.targetEnemy);
                }
            }
            // v24: Shield Generator — recharge + ring visual
            if ((state.playerStats.shield || 0) > 0) {
                const sInt = 18 / state.playerStats.shield;
                if (!state.shieldReadyAt) state.shieldReadyAt = clock.getElapsedTime() + sInt;
                else if (clock.getElapsedTime() >= state.shieldReadyAt && !state.shieldUp) {
                    state.shieldUp = true;
                    showUpgradeNotification('🛡️ Shield ready');
                }
                if (player.shieldRing) player.shieldRing.visible = !!state.shieldUp;
            } else if (player.shieldRing) player.shieldRing.visible = false;

            // v17: stream the infinite world around the player
            repositionGroundTiles(BIOMES[state.currentBiome], player.mesh.position.x, player.mesh.position.z);
            streamChunks(player.mesh.position.x, player.mesh.position.z, false);
            updateChunkStream();

            // v6(C): boss wave gate — one boss at a time, queued bosses wait
            if (state.bossPending && !state.bossActive) {
                state.bossPending = false;
                spawnBoss();
            }

            // Spawner (v10: mode-aware)
            const floor = (state.mode === 'casual' && state.level > 20) ? 1.2 : 1.5;
            const spawnRate = Math.max(floor, 3.5 - state.level * 0.15);
            let maxEnemies = state.mode === 'levels' ? state.levelsCfg.density : Math.min(14, 3 + state.level);
            if (state.mode === 'casual' && state.level > 20) maxEnemies = Math.min(18, 14 + Math.floor((state.level - 20) / 4));
            if (clock.getElapsedTime() - state.lastSpawnTime > spawnRate) {
                if (enemies.filter(e => !e.isDead).length < maxEnemies) {
                    spawnEnemy();
                    state.lastSpawnTime = clock.getElapsedTime();
                }
            }

            // v17: DYNAMIC CAMERA — adaptive framing.
            // Close combat -> pull in tight; roaming empty space or a boss fight ->
            // pull back for awareness; speed widens slightly. Slow adaptation (no bounce).
            let nearest = Infinity;
            for (const e of enemies) {
                if (e.isDead) continue;
                const dx = e.mesh.position.x - player.mesh.position.x;
                const dz = e.mesh.position.z - player.mesh.position.z;
                const d2 = dx * dx + dz * dz;
                if (d2 < nearest) nearest = d2;
            }
            nearest = Math.sqrt(nearest);
            let targetF = 1.0;
            if (nearest < 24) targetF = 0.9;                                // in the fight: tight framing
            else if (nearest > 46 || !isFinite(nearest)) targetF = 1.14;    // roaming: wide awareness
            if (state.bossActive && !state.bossActive.isDead) targetF = Math.max(targetF, 1.18); // boss framing
            targetF += Math.min(0.08, (player.velocity.length() / CONFIG.playerSpeed) * 0.1);    // speed widens
            targetF = Math.max(0.85, Math.min(1.3, targetF));
            state.camF = (state.camF || 1) + (targetF - (state.camF || 1)) * Math.min(1, dt * 1.1);
            const baseY = state.cameraMode === 'wide' ? 35 : 27;
            const baseZ = state.cameraMode === 'wide' ? 47 : 34;
            const camOffset = _tv5.set(0, baseY * state.camF, baseZ * state.camF);
            const targetCam = _tv1.copy(player.mesh.position).add(camOffset);
            const camK = state.cameraMode === 'wide' ? 0.045 : 0.06; // FIX (Tier 4): dt-normalized lerp
            camera.position.lerp(targetCam, 1 - Math.pow(1 - camK, dt * 60));
            camera.lookAt(player.mesh.position.x, 0, player.mesh.position.z + 6); // FIX (v2/P1)

            if (state.cameraShake > 0) {
                const shakeScale = state.cameraMode === 'wide' ? 0.55 : 1;
                camera.position.x += (Math.random() - 0.5) * state.cameraShake * shakeScale;
                camera.position.z += (Math.random() - 0.5) * state.cameraShake * shakeScale;
                state.cameraShake = Math.max(0, state.cameraShake - dt * 2);
            }

            drawMinimap(); // v2 UI: battlefield awareness on the bigger map
            if ((state._tipTick = (state._tipTick || 0) + 1) % 120 === 0) tutorialTick(); // v25
            SFX.engineSet(Math.min(1, player.velocity.length() / CONFIG.playerSpeed)); // v23
            const __d = player.velocity.length() * dt; // v23: lifetime/run distance
            lifeStats().distance += __d;
            lifeStats().playTime += dt;
            state.runDist = (state.runDist || 0) + __d;
            bumpDaily('runDistBest', state.runDist);
            _lastPhysicsCost = performance.now() - _physT0; // v21
        }

        let _minimapCtx = null;
        function drawMinimap() { // v2 UI: north-up radar — player, enemies, target highlight
            if (!_minimapCtx) {
                const cv = document.getElementById('minimap');
                if (!cv) return;
                _minimapCtx = cv.getContext('2d');
            }
            const ctx = _minimapCtx;
            const W = _minimapCtx.canvas.width, k = W / 130; // v17: player-centered radar (65-unit radius)
            const toMap = (x, z) => [ (x - player.mesh.position.x) * k + W / 2, (z - player.mesh.position.z) * k + W / 2 ];

            ctx.clearRect(0, 0, W, W);
            const biome = BIOMES[state.currentBiome];
            ctx.fillStyle = '#' + biome.fogColor.toString(16).padStart(6, '0');
            ctx.globalAlpha = 0.35;
            ctx.fillRect(0, 0, W, W);
            ctx.globalAlpha = 1;

            ctx.strokeStyle = 'rgba(255,255,255,0.35)';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(2, 2, W - 4, W - 4);

            for (const e of enemies) { // enemies as red dots
                if (e.isDead) continue;
                const [mx, mz] = toMap(e.mesh.position.x, e.mesh.position.z);
                ctx.fillStyle = e.isBoss ? '#fb923c' : (e === state.targetEnemy ? '#fca5a5' : '#ef4444'); // v7: bosses as big orange dots
                ctx.beginPath();
                ctx.arc(mx, mz, e.isBoss ? 5 : (e === state.targetEnemy ? 3 : 2.1), 0, Math.PI * 2);
                ctx.fill();
            }

            const [px, pz] = toMap(player.mesh.position.x, player.mesh.position.z); // player arrow
            ctx.save();
            ctx.translate(px, pz);
            ctx.rotate(-player.mesh.rotation.y + Math.PI);
            ctx.fillStyle = '#4ade80';
            ctx.beginPath();
            ctx.moveTo(0, -5);
            ctx.lineTo(3.4, 4);
            ctx.lineTo(-3.4, 4);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        function showDamageDirection(srcX, srcZ) { // v2 UI: arc pointing toward the shooter
            const arc = document.getElementById('dmg-direction');
            if (!arc || !player) return;
            camera.getWorldDirection(_tv1);
            const camYaw = Math.atan2(_tv1.x, _tv1.z);
            const hitYaw = Math.atan2(srcX - player.mesh.position.x, srcZ - player.mesh.position.z);
            let rel = hitYaw - camYaw;
            const deg = rel * 180 / Math.PI;
            arc.style.transition = 'none';
            arc.style.opacity = '0.9';
            arc.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;
            requestAnimationFrame(() => {
                arc.style.transition = 'opacity 0.55s ease';
                arc.style.opacity = '0';
            });
        }

        function addKillFeed(points, name, combo) { // v2 UI: compact kill feed
            const feed = document.getElementById('kill-feed');
            if (!feed) return;
            const entry = document.createElement('div');
            entry.className = 'kill-feed-entry';
            entry.innerHTML = '+' + points + ' ' + name + (combo > 1 ? ' <span class="combo">×' + combo + '</span>' : '');
            feed.appendChild(entry);
            while (feed.children.length > 2) feed.removeChild(feed.firstChild); // v8: tighter
            setTimeout(() => entry.remove(), 1300);
        }

        function updateHUD() {
            dom('score').textContent = state.score; // FIX (Tier 4): cached lookups
            dom('level').textContent = state.level;
            
            const xpPct = (state.xp / state.xpToNext) * 100;
            dom('xp-bar').style.width = xpPct + '%';
            
            dom('stat-speed').textContent = state.playerStats.speed;
            dom('stat-damage').textContent = state.playerStats.damage;
            dom('stat-armor').textContent = state.playerStats.armor;
            dom('stat-regen').textContent = state.playerStats.regen;
            if (dom('stat-crit')) dom('stat-crit').textContent = state.playerStats.crit || 0; // v7
            if (dom('stat-multishot')) dom('stat-multishot').textContent = state.playerStats.multishot || 0;
            
            if (player) {
                const hpPct = Math.max(0, (player.hp / player.maxHp) * 100);
                const bar = dom('hp-bar');
                bar.style.width = hpPct + '%';
                dom('hp-text').textContent = Math.max(0, Math.round(player.hp)); // v2 UI
                
                if (hpPct < 30) bar.style.background = 'linear-gradient(90deg, #dc2626, #ef4444)';
                else if (hpPct < 60) bar.style.background = 'linear-gradient(90deg, #eab308, #facc15)';
                else bar.style.background = 'linear-gradient(90deg, #22c55e, #4ade80)';

                const panel = document.getElementById('hp-panel'); // v2 UI: low-HP pulse
                if (panel) panel.classList.toggle('low-hp', hpPct < 25 && hpPct > 0);
            }
        }

        function endGame() {
            state.isPlaying = false;
            state.gamePhase = 'gameover';
            bumpDaily('runCoinsBest', state.runCoins || 0); checkAchievements(); // v23
            SFX.engineStop(); SFX.ambientStop(); SFX.musicStop(); // v23+v24
            needsRender = true; // FIX (Tier 3)
            try { saveGame(); } catch(e) {} // FIX (Coins): persist coins between sessions
            document.getElementById('final-score').textContent = state.score;
            document.getElementById('final-level').textContent = state.level;
            // v2: run stats
            document.getElementById('final-kills').textContent = state.kills || 0;
            const m = Math.floor((state.runTime || 0) / 60), s = Math.floor((state.runTime || 0) % 60);
            document.getElementById('final-time').textContent = m + ':' + String(s).padStart(2, '0');
            document.getElementById('final-coins').textContent = state.runCoins || 0;
            const isCasual = state.mode === 'casual'; // v10: separate bests per mode
            let best = isCasual ? (state.bestCasual || 0) : (state.bestLevels || 0);
            const isBest = state.score > best;
            if (isCasual) { if (isBest) state.bestCasual = state.score; state.autoSave = null; } // run over -> auto slot cleared, NAMED SAVES KEPT
            else if (isBest) state.bestLevels = state.score;
            try { saveGame(); } catch (e) {}
            best = state.score > best ? state.score : best;
            document.getElementById('final-best').textContent = best;
            document.getElementById('new-best-badge').classList.toggle('hidden', !isBest);
            document.getElementById('game-over-screen').classList.remove('hidden');
            
            state.input = { x: 0, y: 0, isFiring: false };
            document.getElementById('joystick-base').style.display = 'none';
            syncHUDControls();
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            needsRender = true; // FIX (Tier 3)
        }

        function animate() {
            requestAnimationFrame(animate);
            runChunkTasks(3); // v22: chunk micro-ops progress every frame, independent of physics
            const dt = Math.min(clock.getDelta(), 0.1);
            if (state.gamePhase === 'playing') { updatePhysics(dt); needsRender = true; }
            // FIX (Tier 3): don't burn GPU/battery rendering a static scene in menus/pause.
            if (needsRender) { renderer.render(scene, camera); needsRender = false; }
        }

        // ============================================
        // INPUT HANDLING
        // ============================================
        function setupInputs() {
            const inputLayer = document.getElementById('input-layer');
            const stickBase = document.getElementById('joystick-base');
            const stickKnob = document.getElementById('joystick-knob');

            let moveTouch = null;
            let fireTouch = null;

            inputLayer.addEventListener('touchstart', (e) => {
                if (state.gamePhase !== 'playing') return;

                for (let i = 0; i < e.changedTouches.length; i++) {
                    const t = e.changedTouches[i];
                    
                    if (t.clientX < window.innerWidth / 2) {
                        if (moveTouch === null) {
                            moveTouch = t.identifier;
                            stickBase.style.display = 'block';
                            stickBase.style.left = t.clientX + 'px';
                            stickBase.style.top = t.clientY + 'px';
                            stickKnob.style.transform = 'translate(-50%, -50%)';
                        }
                    } else {
                        fireTouch = t.identifier;
                        state.input.isFiring = true;
                    }
                }
            }, { passive: true });

            inputLayer.addEventListener('touchmove', (e) => {
                if (state.gamePhase !== 'playing') return;
                e.preventDefault();

                for (let i = 0; i < e.changedTouches.length; i++) {
                    const t = e.changedTouches[i];
                    
                    if (t.identifier === moveTouch) {
                        const rect = stickBase.getBoundingClientRect();
                        const centerX = rect.left + rect.width / 2;
                        const centerY = rect.top + rect.height / 2;
                        
                        let dx = t.clientX - centerX;
                        let dy = t.clientY - centerY;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const maxDist = 50;

                        if (dist > maxDist) {
                            dx = (dx / dist) * maxDist;
                            dy = (dy / dist) * maxDist;
                        }

                        stickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
                        state.input.x = dx / maxDist;
                        state.input.y = dy / maxDist;
                    }
                }
            }, { passive: false });

            // FIX (Tier 1): touchcancel now handled like touchend, so an interrupted
            // touch (incoming call, OS gesture) can no longer leave firing stuck on
            // or the joystick frozen.
            const handleTouchEnd = (e) => {
                for (let i = 0; i < e.changedTouches.length; i++) {
                    const t = e.changedTouches[i];

                    if (t.identifier === moveTouch) {
                        moveTouch = null;
                        stickBase.style.display = 'none';
                        state.input.x = 0;
                        state.input.y = 0;
                    }

                    if (t.identifier === fireTouch) {
                        fireTouch = null;
                        state.input.isFiring = false;
                    }
                }
            };
            inputLayer.addEventListener('touchend', handleTouchEnd);
            inputLayer.addEventListener('touchcancel', handleTouchEnd);

            // Keyboard
            const keys = {};
            window.addEventListener('keydown', e => {
                keys[e.key.toLowerCase()] = true;
                updateKeyboardInput();
                if (e.key === ' ') state.input.isFiring = true;
            });
            
            window.addEventListener('keyup', e => {
                keys[e.key.toLowerCase()] = false;
                updateKeyboardInput();
                if (e.key === ' ') state.input.isFiring = false;
            });

            function updateKeyboardInput() {
                state.input.x = (keys['d'] ? 1 : 0) - (keys['a'] ? 1 : 0);
                state.input.y = (keys['s'] ? 1 : 0) - (keys['w'] ? 1 : 0);
            }
        }

        // Button handlers
        syncHUDControls();

        // v10: mode selection
        document.getElementById('btn-casual').addEventListener('click', (e) => { // v13: casual hub
            e.stopPropagation();
            renderCasualSaves();
            setScreenVisibility('start-screen', false);
            setScreenVisibility('casual-screen', true);
        });
        document.getElementById('btn-casual-new').addEventListener('click', (e) => {
            e.stopPropagation();
            setScreenVisibility('casual-screen', false);
            startGame('casual');
        });
        document.getElementById('btn-casual-back').addEventListener('click', (e) => {
            e.stopPropagation();
            setScreenVisibility('casual-screen', false);
            setScreenVisibility('start-screen', true);
            updateHomeStats();
        });
        document.getElementById('btn-levels').addEventListener('click', (e) => {
            e.stopPropagation();
            updateHomeStats();
            // v13: start level unlocks up to the highest level you've cleared/reached
            const cap = Math.max(1, state.maxCleared || 1);
            const slider = document.getElementById('cfg-level');
            slider.max = cap;
            slider.value = Math.min(parseInt(slider.value, 10) || 1, cap);
            document.getElementById('cfg-level-val').textContent = slider.value;
            document.getElementById('cfg-level-cap').textContent = '(unlocked up to Lv ' + cap + ')';
            setScreenVisibility('start-screen', false);
            setScreenVisibility('levels-screen', true);
        });
        document.getElementById('btn-levels-back').addEventListener('click', (e) => {
            e.stopPropagation();
            setScreenVisibility('levels-screen', false);
            setScreenVisibility('start-screen', true);
        });
        document.getElementById('btn-levels-start').addEventListener('click', (e) => {
            e.stopPropagation();
            const density = parseInt(document.querySelector('#cfg-density .sel').dataset.v, 10);
            const difficulty = document.querySelector('#cfg-difficulty .sel').dataset.v;
            const startLevel = parseInt(document.getElementById('cfg-level').value, 10);
            setScreenVisibility('levels-screen', false);
            startGame('levels', { density, difficulty, startLevel });
        });
        document.querySelectorAll('.cfg-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.stopPropagation();
                chip.parentElement.querySelectorAll('.cfg-chip').forEach(c => c.classList.remove('sel'));
                chip.classList.add('sel');
                playUISound();
            });
        });
        document.getElementById('cfg-level').addEventListener('input', (e) => {
            document.getElementById('cfg-level-val').textContent = e.target.value;
        });
        document.getElementById('btn-save-run').addEventListener('click', (e) => { // v13
            e.stopPropagation();
            quickSaveFromPause();
        });
        document.getElementById('btn-save-confirm').addEventListener('click', (e) => {
            e.stopPropagation();
            const name = (document.getElementById('save-name-input').value || '').trim() || 'Run';
            const saved = saveCurrentRun(name);
            closeSaveDialog();
            showUpgradeNotification(saved ? '💾 Saved as “' + saved + '”' : '💾 Saved');
        });
        document.getElementById('btn-save-cancel').addEventListener('click', (e) => {
            e.stopPropagation();
            closeSaveDialog();
        });

        document.getElementById('btn-restart').addEventListener('click', (e) => {
            e.stopPropagation();
            startGame(state.mode || 'casual', state.mode === 'levels'
                ? { density: state.levelsCfg.density, difficulty: state.diffMult.label === 'Easy' ? 'easy' : state.diffMult.label === 'Hard' ? 'hard' : state.diffMult.label === 'Nightmare' ? 'nightmare' : 'normal', startLevel: state.startLevelUsed || 1 }
                : {});
        });

        document.getElementById('btn-pause').addEventListener('click', (e) => {
            e.stopPropagation();
            togglePause();
        });

        document.getElementById('btn-settings').addEventListener('click', (e) => {
            e.stopPropagation();
            openSettings();
        });

        document.getElementById('btn-sound').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSound();
        });

        document.getElementById('btn-camera').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCameraMode();
        });

        document.getElementById('btn-assist').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleControlAssist();
        });

        document.getElementById('toggle-sound-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSound();
        });

        document.getElementById('toggle-camera-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCameraMode();
        });

        document.getElementById('toggle-assist-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleControlAssist();
        });

        document.getElementById('close-settings-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            closeSettings();
        });

        document.getElementById('btn-resume').addEventListener('click', (e) => {
            e.stopPropagation();
            resumeGame();
        });

        // v4+v7: Armory — reachable from the game-over screen AND the home screen
        document.getElementById('btn-shop').addEventListener('click', (e) => {
            e.stopPropagation();
            shopReturnTo = 'game-over-screen';
            renderShop();
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('shop-screen', true);
        });
        document.getElementById('btn-shop-home').addEventListener('click', (e) => { // v7
            e.stopPropagation();
            shopReturnTo = 'start-screen';
            renderShop();
            setScreenVisibility('start-screen', false);
            setScreenVisibility('shop-screen', true);
        });
        document.getElementById('btn-shop-close').addEventListener('click', (e) => {
            e.stopPropagation();
            setScreenVisibility('shop-screen', false);
            setScreenVisibility(shopReturnTo, true);
            if (shopReturnTo === 'start-screen') updateHomeStats(); // v7
        });

        document.getElementById('btn-awards').addEventListener('click', (e) => { // v23
            e.stopPropagation();
            dailyState();
            renderAwards();
            setScreenVisibility('start-screen', false);
            setScreenVisibility('awards-screen', true);
        });
        document.getElementById('btn-awards-back').addEventListener('click', (e) => {
            e.stopPropagation();
            updateHomeStats();
            setScreenVisibility('awards-screen', false);
            setScreenVisibility('start-screen', true);
        });

        document.getElementById('toggle-quality-panel').addEventListener('click', (e) => { // v25
            e.stopPropagation();
            cycleQuality();
            syncHUDControls();
        });

        document.getElementById('toggle-music-panel').addEventListener('click', (e) => { // v24
            e.stopPropagation();
            state.musicEnabled = !state.musicEnabled;
            if (!state.musicEnabled) SFX.musicStop();
            else if (state.gamePhase === 'playing') SFX.musicStart();
            try { saveGame(); } catch (err) {}
            playUISound();
            syncHUDControls();
        });

        document.getElementById('btn-pause-settings').addEventListener('click', (e) => { // v2 UI
            e.stopPropagation();
            openSettings();
        });

        document.getElementById('btn-quit').addEventListener('click', (e) => {
            e.stopPropagation();
            state.isPlaying = false;
            state.gamePhase = 'menu';
            state.input = { x: 0, y: 0, isFiring: false };
            if (player && scene) { scene.remove(player.mesh); disposeObject3D(player.mesh); } // FIX (Tier 2)
            needsRender = true; // FIX (Tier 3)
            setScreenVisibility('pause-screen', false);
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('start-screen', true);
            setPauseUIVisible(false);
            syncHUDControls();
            updateHomeStats(); // v7
        });

        document.getElementById('start-screen').classList.remove('hidden');
        dailyState(); lifeStats(); // v23
        updateHomeStats(); // v7
        if (!store.persistent) { // v14: be honest about sandboxed previews
            const warn = document.createElement('div');
            warn.id = 'storage-warning';
            warn.innerHTML = '⚠️ This preview blocks saving — progress is session-only.<br>Open the game in its own browser tab (or install it) for permanent saves.';
            document.getElementById('start-screen').appendChild(warn);
        }
        setPauseUIVisible(false);
        syncHUDControls();
        init();

        // FIX (v2/P1): auto-pause when the app goes to the background (screen off,
        // app switch, incoming call). Previously the game kept running hidden —
        // players returned to find themselves shot "while paused".
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && state.gamePhase === 'playing') {
                pauseGame();
                if (state.mode === 'casual' && player && !player.isDead) { // v13: auto slot only
                    const snap = snapshotRun();
                    if (snap) { snap.savedAt = Date.now(); state.autoSave = snap; }
                    try { saveGame(); } catch (e) {}
                }
            }
        });
        // v3: also auto-pause on focus loss (tapping outside the game / scrolling the
        // host page in an embedded preview) — the last gap in pause coverage.
        window.addEventListener('blur', () => {
            if (state.gamePhase === 'playing') pauseGame();
        });
    
// ===== NEW CORE LOOP SYSTEM =====

// combo system
state.combo = 0;
state.comboTimer = 0;

// coins
state.coins = 0;

// upgrade choice flag
state.isChoosingUpgrade = false;

// v4 (Upgrades-A): level-up card pool — pick 1 of 3 distinct cards each level
const CHOICE_UPGRADES = [
 {stat:'speed',    amount:10, icon:'⚡', text:'Overdrive',        desc:'Movement speed +10%'},
 {stat:'damage',   amount:15, icon:'💥', text:'Heavy Rounds',     desc:'Shell damage +15%'},
 {stat:'fireRate', amount:12, icon:'🔥', text:'Rapid Loader',     desc:'Fire rate +12%'},
 {stat:'maxHp',    amount:20, icon:'❤️', text:'Reinforced Hull',  desc:'Max HP +20, heal 20'},
 {stat:'regen',    amount:2,  icon:'🔄', text:'Nano Repair',      desc:'Regeneration +2/s'},
 {stat:'armor',    amount:8,  icon:'🛡️', text:'Composite Armor',  desc:'Armor +8 (less damage taken)'},
 {stat:'crit',     amount:10, icon:'🎯', text:'Precision Optics', desc:'Crit chance +10% — crits deal 2× damage'},
 {stat:'multishot',amount:1,  icon:'🔱', text:'Split Cannon',     desc:'+1 projectile per shot (stacks)'},
 {stat:'pierce',   amount:1,  icon:'🔩', text:'Piercing Rounds',  desc:'Shells punch through +1 enemy (stacks)'},
 {stat:'coinBonus',amount:25, icon:'🧲', text:'Scavenger',        desc:'+25% coins from kills'},
 {stat:'healOnKill',amount:3, icon:'💗', text:'Field Medic',      desc:'Heal 3 HP on every kill'},
 {stat:'xpBonus',  amount:20, icon:'🎖️', text:'Bounty Hunter',    desc:'+20% XP from kills'},
 {stat:'adrenaline',amount:1, icon:'💨', text:'Adrenaline Rush',   desc:'+25% speed for 1.5s after each kill (stacks)'},
 {stat:'missile',  amount:1,  icon:'🚀', text:'Missile Pod',       desc:'Auto-fires a homing missile every 5s (stacks: faster)'},
 {stat:'splash',   amount:1,  icon:'💥', text:'Shell Shock',       desc:'Shells splash-damage nearby enemies (stacks: wider)'},
 {stat:'shield',   amount:1,  icon:'🛡️', text:'Shield Generator',  desc:'Blocks one hit every 18s (stacks: faster recharge)'},
];

// combo logic
function addKillReward(enemy){
    state.combo++;
    state.comboTimer = 3;

    let reward = enemy.typeData ? enemy.typeData.points : 50;
    reward *= (1 + state.combo * 0.2);
    reward *= 1 + (state.playerStats.coinBonus || 0) / 100; // v5: Scavenger

    const payout = Math.floor(reward * 0.5 * (1 + (state.runCoinBoost || 0))); // v10 rebalance + v11 Lucky Charm
    state.coins += payout;
    state.runCoins = (state.runCoins || 0) + payout;
}

// decay combo
function updateCombo(dt){
    if(state.combo > 0){
        state.comboTimer -= dt;
        if(state.comboTimer <= 0){
            state.combo = 0;
        }
    }
}

// FIX (Coins): the old enemies.push die-wrapper was dead code (startGame() reassigns
// the array before any enemy spawns, discarding the patch). Rewards are now wired
// directly at the kill site in updatePhysics.

// v4 (Upgrades-A): level-up choice overlay — gameplay freezes until a card is picked
function showUpgradeChoices(){
    state.isChoosingUpgrade = true;
    state.input.isFiring = false;

    const pool = [...CHOICE_UPGRADES];
    const cardCount = 3 + ((state.meta || {}).cards || 0); // v10: Extra Choice
    const picks = [];
    while (picks.length < cardCount && pool.length) picks.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);

    const overlay = document.createElement('div');
    overlay.id = 'upgrade-choice';
    overlay.innerHTML = '<div class="uc-title">🌟 LEVEL ' + state.level + '</div>' +
                        '<div class="uc-subtitle">Choose an upgrade</div>' +
                        '<div class="uc-cards"></div>';
    const cards = overlay.querySelector('.uc-cards');
    picks.forEach(up => {
        const card = document.createElement('button');
        card.className = 'uc-card';
        card.innerHTML = '<div class="uc-icon">' + up.icon + '</div>' +
                          '<div class="uc-name">' + up.text + '</div>' +
                          '<div class="uc-desc">' + up.desc + '</div>';
        card.onclick = () => pickUpgradeCard(card, up, overlay, cards);
        cards.appendChild(card);
    });
    document.body.appendChild(overlay);
}

function pickUpgradeCard(card, up, overlay, cards){
    SFX.cardPick(); // v23
    applyUpgrade(up);
    card.classList.add('picked');
    [...cards.children].forEach(c => { if (c !== card) c.classList.add('dismissed'); });
    setTimeout(() => {
        overlay.remove();
        if ((state.pendingChoices || 0) > 0) { // queued multi-level-ups: choose again
            state.pendingChoices--;
            showUpgradeChoices();
        } else {
            state.isChoosingUpgrade = false;
            const now = clock.getElapsedTime(); // clock ran while frozen — re-arm gates
            state.lastFireTime = now;
            state.lastSpawnTime = now;
            state.lastRegenTime = now;
            maybeTransitionBiome(); // v15: realm reveal after the last card
        }
    }, 400);
}

function applyUpgrade(up){
    if (up.stat === 'maxHp') {
        state.playerStats.maxHp += up.amount;
        if (player) {
            player.maxHp = state.playerStats.maxHp;
            player.hp = Math.min(player.hp + up.amount, player.maxHp);
        }
    } else {
        state.playerStats[up.stat] = (state.playerStats[up.stat] || 0) + up.amount;
    }
    updateHUD();
}

// update loop hook
// FIX (Tier 1): the original wrapped a global `update` which never existed,
// throwing "ReferenceError: update is not defined" on every page load.
// updatePhysics is the real per-frame function called by animate().
const oldUpdateLoop = updatePhysics;
updatePhysics = function(dt){
    if(state.isChoosingUpgrade) return;
    updateCombo(dt);
    oldUpdateLoop(dt);
};

// difficulty scaling
function getSpawnMultiplier(){
    return 1 + state.level * 0.1;
}

// patch spawn timing (soft)
// FIX (Tier 4): only accelerates during active play — previously it also ran in
// menus and pause, silently ramping difficulty while the game wasn't being played.
setInterval(()=>{
    if (state.isPlaying && state.gamePhase === 'playing') {
        state.lastSpawnTime -= 0.1 * getSpawnMultiplier();
    }
},1000);

// save/load
function saveGame(){ // (uses the `store` defined at the top of the script)
    try {
        store.set('tank_save', JSON.stringify({
            v: 3,
            coins: state.coins,
            meta: state.meta || {},          // v4: permanent Armory upgrades
            skins: state.skins || { owned: ['amber'], selected: 'amber' }, // v10
            casual: { best: state.bestCasual || 0, auto: state.autoSave || null, saves: state.casualSaves || [] }, // v13
            stats: state.stats || {}, achUnlocked: state.achUnlocked || [], daily: state.daily || null, // v23
            musicEnabled: state.musicEnabled !== false, // v24
            quality: state.quality || 'auto', tutorialTips: state.tutorialTips || {}, // v25
            levels: { best: state.bestLevels || 0 },
            progress: { maxCleared: state.maxCleared || 1 }, // v13: level-select unlock
            consumables: state.consumables || { lucky: 0, headstart: 0 } // v11
        }));
    } catch(e) { /* storage unavailable (private mode etc.) — ignore */ }
}

function loadGame(){
    // FIX (Tier 1): try/catch — a corrupt save must never crash boot
    try {
        let d = JSON.parse(store.get('tank_save'));
        if(!d) return;
        state.coins = d.coins || 0;
        state.meta = d.meta || {}; // v4: permanent Armory upgrades
        state.skins = d.skins || { owned: ['amber'], selected: 'amber' };
        state.bestCasual = (d.casual && d.casual.best) || 0;
        state.bestLevels = (d.levels && d.levels.best) || 0;
        state.consumables = d.consumables || { lucky: 0, headstart: 0 }; // v11
        state.stats = d.stats || null; // v23
        state.achUnlocked = d.achUnlocked || [];
        state.daily = d.daily || null;
        if (d.musicEnabled === false) state.musicEnabled = false; // v24
        if (d.quality === 'low' || d.quality === 'high') { state.quality = d.quality; if (d.quality === 'low') _autoDecided = true; } // v25
        if (d.tutorialTips) state.tutorialTips = d.tutorialTips;
        state.maxCleared = (d.progress && d.progress.maxCleared) || 1; // v13
        if (d.v === 3) { // v13: named save slots + auto slot
            state.casualSaves = (d.casual && d.casual.saves) || [];
            state.autoSave = (d.casual && d.casual.auto) || null;
        } else { // migrate v2 single snapshot -> auto slot
            state.casualSaves = [];
            state.autoSave = (d.casual && d.casual.snapshot) || null;
        }
    } catch(e) { /* corrupt save ignored */ }
}

loadGame();

// HUD coins display
setInterval(()=>{
    let el = document.getElementById('coins');
    if(!el){
        let hud = document.querySelector('.hud-panel');
        if(hud){
            let div = document.createElement('div');
            div.innerHTML = '💰 <span id="coins">0</span>';
            hud.appendChild(div);
        }
    } else {
        el.innerText = state.coins;
    }
},500);

