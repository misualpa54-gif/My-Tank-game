
        // ============================================
        // BIOME CONFIGURATIONS - Realistic Environments
        // ============================================
        const BIOMES = [
            {
                name: "Enchanted Forest",
                skyTop: 0x87ceeb,
                skyBottom: 0x228b22,
                fogColor: 0x2d5a27,
                fogNear: 30,
                fogFar: 120,
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
                terrainFrequency: 0.08
            },
            {
                name: "Frozen Tundra",
                skyTop: 0xb0c4de,
                skyBottom: 0xe8f4f8,
                fogColor: 0xc8d8e8,
                fogNear: 25,
                fogFar: 100,
                groundColor: 0xf0f8ff,
                grassColor: 0xadd8e6,
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
                terrainFrequency: 0.06
            },
            {
                name: "Volcanic Wasteland",
                skyTop: 0x1a0a00,
                skyBottom: 0x8b0000,
                fogColor: 0x2a1a10,
                fogNear: 20,
                fogFar: 90,
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
                hasSpikes: true
            },
            {
                name: "Golden Desert",
                skyTop: 0x87ceeb,
                skyBottom: 0xffd700,
                fogColor: 0xd4a574,
                fogNear: 40,
                fogFar: 150,
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
                terrainFrequency: 0.04
            },
            {
                name: "Mystic Swamp",
                skyTop: 0x2f4f4f,
                skyBottom: 0x556b2f,
                fogColor: 0x3a4a3a,
                fogNear: 15,
                fogFar: 70,
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
                terrainFrequency: 0.1
            },
            {
                name: "Crystal Caverns",
                skyTop: 0x0a0a20,
                skyBottom: 0x1a1a40,
                fogColor: 0x101030,
                fogNear: 20,
                fogFar: 80,
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
                terrainFrequency: 0.15
            }
        ];

        // Enemy Types
        const ENEMY_TYPES = {
            scout: { name: "Scout", color: 0xffd700, hp: 25, speed: 1.5, damage: 8, fireRate: 0.6, size: 0.7, points: 50, desc: "Fast but fragile" },
            soldier: { name: "Soldier", color: 0xdc2626, hp: 50, speed: 1.0, damage: 12, fireRate: 0.4, size: 1.0, points: 100, desc: "Balanced fighter" },
            heavy: { name: "Heavy", color: 0x78350f, hp: 120, speed: 0.5, damage: 25, fireRate: 0.25, size: 1.5, points: 200, desc: "Slow but deadly" },
            sniper: { name: "Sniper", color: 0x7c3aed, hp: 35, speed: 0.6, damage: 30, fireRate: 0.15, size: 0.9, points: 175, desc: "Long range threat" },
            healer: { name: "Medic", color: 0x22c55e, hp: 60, speed: 0.8, damage: 5, fireRate: 0.3, size: 0.85, points: 150, healAmount: 8, desc: "Heals allies" },
            berserker: { name: "Berserker", color: 0xec4899, hp: 80, speed: 1.3, damage: 18, fireRate: 0.7, size: 1.2, points: 250, desc: "Aggressive charger" }
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
            baseDamage: 22,
            touchControlTopRatio: 0.3
        };

        const BASELINE_FPS = 60;

        function getFrameEquivalentAlpha(alphaAt60Fps, dt) {
            return 1 - Math.pow(1 - alphaAt60Fps, dt * BASELINE_FPS);
        }

        function getFrameEquivalentMultiplier(multiplierAt60Fps, dt) {
            return Math.pow(multiplierAt60Fps, dt * BASELINE_FPS);
        }

        function getFrameEquivalentChance(chanceAt60Fps, dt) {
            return 1 - Math.pow(1 - chanceAt60Fps, dt * BASELINE_FPS);
        }

        function getSegmentCylinderHitTime(start, end, center, radius, heightThreshold) {
            const segmentX = end.x - start.x;
            const segmentZ = end.z - start.z;
            const segmentLengthSq = segmentX * segmentX + segmentZ * segmentZ;
            let hitTime = 0;

            if (segmentLengthSq > 0) {
                hitTime = (
                    (center.x - start.x) * segmentX +
                    (center.z - start.z) * segmentZ
                ) / segmentLengthSq;
                hitTime = Math.max(0, Math.min(1, hitTime));
            }

            const closestX = start.x + segmentX * hitTime;
            const closestZ = start.z + segmentZ * hitTime;
            const distanceX = closestX - center.x;
            const distanceZ = closestZ - center.z;
            if (distanceX * distanceX + distanceZ * distanceZ >= radius * radius) return null;

            const closestY = start.y + (end.y - start.y) * hitTime;
            if (Math.abs(closestY - center.y) >= heightThreshold) return null;
            return hitTime;
        }

        function getArenaBoundaryHitTime(start, end, boundary = 46) {
            if (Math.abs(end.x) <= boundary && Math.abs(end.z) <= boundary) return null;

            let earliestHit = 1;
            const deltaX = end.x - start.x;
            const deltaZ = end.z - start.z;
            if (Math.abs(end.x) > boundary && deltaX !== 0) {
                const xBoundary = end.x > boundary ? boundary : -boundary;
                const xHit = (xBoundary - start.x) / deltaX;
                if (xHit >= 0 && xHit <= 1) earliestHit = Math.min(earliestHit, xHit);
            }
            if (Math.abs(end.z) > boundary && deltaZ !== 0) {
                const zBoundary = end.z > boundary ? boundary : -boundary;
                const zHit = (zBoundary - start.z) / deltaZ;
                if (zHit >= 0 && zHit <= 1) earliestHit = Math.min(earliestHit, zHit);
            }
            return earliestHit;
        }

        // Game State
        const DEFAULT_PLAYER_STATS = Object.freeze({
            speed: 100,
            damage: 100,
            fireRate: 100,
            armor: 0,
            regen: 0,
            maxHp: 100,
            multishot: 0
        });

        function createDefaultPlayerStats() {
            return { ...DEFAULT_PLAYER_STATS };
        }

        let state = {
            gamePhase: 'menu', // menu | playing | paused | gameover
            isPlaying: false,
            score: 0,
            xp: 0,
            level: 1,
            xpToNext: 100,
            currentBiome: 0,
            lastFireTime: 0,
            lastSpawnTime: 0,
            lastRegenTime: 0,
            input: { x: 0, y: 0, isFiring: false },
            cameraShake: 0,
            playerStats: createDefaultPlayerStats(),
            enemiesIntroduced: new Set(),
            targetEnemy: null,
            // Explicit defaults replace the previous accidental undefined values.
            // They match the game's effective behavior before stabilization.
            soundEnabled: false,
            cameraMode: 'follow',
            controlAssist: false,
            settingsOpen: false
        };

        let audioCtx = null;

        // Three.js Globals
        let scene, camera, renderer, clock;
        let player, bullets = [], enemies = [], particles = [], environmentObjects = [];
        let ambientLight, dirLight, hemisphereLight;
        let groundMesh, waterMesh, lavaMeshes = [];
        let environmentParticles = [];
        let environmentParticleBatches = [];
        let environmentColliders = [];
        let treeInstanceParts = [];
        let backgroundRockInstances = [];
        let terrainData = { heights: [], size: 100, segments: 80 };
        let resetInputController = () => {};

        const bulletPool = [];
        const MAX_POOLED_BULLETS = 128;
        const environmentParticleTransform = new THREE.Object3D();
        const bulletImpactPosition = new THREE.Vector3();

        function collectObjectResources(object, geometries, materials, textures) {
            if (!object || typeof object.traverse !== 'function') return;

            object.traverse(child => {
                if (child.geometry) geometries.add(child.geometry);
                const childMaterials = Array.isArray(child.material)
                    ? child.material
                    : [child.material];

                childMaterials.filter(Boolean).forEach(material => {
                    materials.add(material);
                    Object.values(material).forEach(value => {
                        if (value && value.isTexture) textures.add(value);
                    });
                });

                if (child.isLight && child.shadow) {
                    if (child.shadow.map) textures.add(child.shadow.map);
                    if (child.shadow.mapPass) textures.add(child.shadow.mapPass);
                }
            });
        }

        function removeAndDisposeObjects(objects) {
            const geometries = new Set();
            const materials = new Set();
            const textures = new Set();

            objects.filter(Boolean).forEach(object => {
                if (object.userData && object.userData.resourcesDisposed) {
                    scene.remove(object);
                    return;
                }
                scene.remove(object);
                collectObjectResources(object, geometries, materials, textures);
                if (object.userData) object.userData.resourcesDisposed = true;
            });

            textures.forEach(texture => texture.dispose());
            materials.forEach(material => material.dispose());
            geometries.forEach(geometry => geometry.dispose());
        }

        function removeAndDisposeObject(object) {
            if (object) removeAndDisposeObjects([object]);
        }

        function clearEnvironment() {
            removeAndDisposeObjects(environmentObjects);
            removeAndDisposeObjects(environmentParticleBatches);
            removeAndDisposeObject(groundMesh);
            removeAndDisposeObject(waterMesh);
            removeAndDisposeObjects(lavaMeshes);
            removeAndDisposeObjects([ambientLight, dirLight, hemisphereLight]);

            if (scene.background && scene.background.isTexture) scene.background.dispose();
            scene.background = null;

            environmentObjects = [];
            environmentParticles = [];
            environmentParticleBatches = [];
            environmentColliders = [];
            treeInstanceParts = [];
            backgroundRockInstances = [];
            groundMesh = null;
            waterMesh = null;
            lavaMeshes = [];
            ambientLight = null;
            dirLight = null;
            hemisphereLight = null;
        }

        function getTouchControlTop() {
            const viewportHeight = window.visualViewport?.height || window.innerHeight;
            return viewportHeight * CONFIG.touchControlTopRatio;
        }

        function isInTouchControlZone(touch) {
            return touch.clientY >= getTouchControlTop();
        }

        function clearInputState() {
            state.input.x = 0;
            state.input.y = 0;
            state.input.isFiring = false;
            resetInputController();
        }

        // ============================================
        // INITIALIZATION
        // ============================================
        function init() {
            const container = document.getElementById('game-container');

            scene = new THREE.Scene();

            // Camera - Lower angle for more 3D feel
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
            camera.position.set(0, 22, 28);
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

            // Initial biome
            loadBiome(0);

            window.addEventListener('resize', onWindowResize);
            setupInputs();
            animate();
        }

        // ============================================
        // TERRAIN HEIGHT SAMPLING - Fixes sinking tanks
        // ============================================
        function getTerrainHeight(x, z) {
            // Handle coordinates outside the terrain bounds gracefully
            const halfSize = terrainData.size / 2;
            if (x < -halfSize || x > halfSize || z < -halfSize || z > halfSize) {
                // Return a slight dip for distant terrain
                return -2;
            }

            if (!terrainData.heights.length) return 0;

            const size = terrainData.size;
            const segments = terrainData.segments;

            // Convert world coordinates to grid coordinates
            const gridX = ((x + halfSize) / size) * segments;
            const gridZ = ((z + halfSize) / size) * segments;

            // Clamp to valid range
            const x0 = Math.max(0, Math.min(segments - 1, Math.floor(gridX)));
            const z0 = Math.max(0, Math.min(segments - 1, Math.floor(gridZ)));
            const x1 = Math.min(segments, x0 + 1);
            const z1 = Math.min(segments, z0 + 1);

            // Get fractional parts for interpolation
            const fx = gridX - x0;
            const fz = gridZ - z0;

            // Bilinear interpolation
            const h00 = terrainData.heights[z0 * (segments + 1) + x0] || 0;
            const h10 = terrainData.heights[z0 * (segments + 1) + x1] || 0;
            const h01 = terrainData.heights[z1 * (segments + 1) + x0] || 0;
            const h11 = terrainData.heights[z1 * (segments + 1) + x1] || 0;

            const h0 = h00 * (1 - fx) + h10 * fx;
            const h1 = h01 * (1 - fx) + h11 * fx;

            return h0 * (1 - fz) + h1 * fz;
        }

        function getTerrainNormal(x, z) {
            const delta = 0.5;
            const hL = getTerrainHeight(x - delta, z);
            const hR = getTerrainHeight(x + delta, z);
            const hD = getTerrainHeight(x, z - delta);
            const hU = getTerrainHeight(x, z + delta);

            const normal = new THREE.Vector3(hL - hR, 2 * delta, hD - hU);
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

        function syncHUDControls() {
            const quick = document.getElementById('hud-quickbar');
            const showQuickControls = !state.settingsOpen &&
                (state.gamePhase === 'playing' || state.gamePhase === 'paused');
            if (quick) quick.classList.toggle('show', showQuickControls);

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
            if (state.gamePhase !== 'paused') return;
            state.settingsOpen = true;
            setScreenVisibility('settings-screen', true);
            setPauseUIVisible(false);
            syncHUDControls();
        }

        function closeSettings() {
            state.settingsOpen = false;
            setScreenVisibility('settings-screen', false);
            setPauseUIVisible(state.gamePhase === 'paused');
            syncHUDControls();
        }

        // ============================================
        // BIOME LOADING - Creates entire environment
        // ============================================
        function loadBiome(biomeIndex) {
            const biome = BIOMES[biomeIndex % BIOMES.length];
            state.currentBiome = biomeIndex % BIOMES.length;

            // Release the previous biome's CPU and GPU resources before building
            // the next one. Removing an object from a Three.js scene alone is not
            // enough to release its geometry, materials, textures, or shadow maps.
            clearEnvironment();

            // Show biome name
            const biomeEl = document.getElementById('biome-name');
            biomeEl.textContent = biome.name;
            biomeEl.classList.add('show');
            setTimeout(() => biomeEl.classList.remove('show'), 3000);

            // Sky gradient
            const skyCanvas = document.createElement('canvas');
            skyCanvas.width = 2;
            skyCanvas.height = 512;
            const ctx = skyCanvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 512);
            gradient.addColorStop(0, '#' + biome.skyTop.toString(16).padStart(6, '0'));
            gradient.addColorStop(1, '#' + biome.skyBottom.toString(16).padStart(6, '0'));
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 2, 512);
            const skyTexture = new THREE.CanvasTexture(skyCanvas);
            scene.background = skyTexture;

            // Fog
            scene.fog = new THREE.Fog(biome.fogColor, biome.fogNear, biome.fogFar);

            // Lighting
            hemisphereLight = new THREE.HemisphereLight(biome.sunColor, biome.groundColor, 0.4);
            scene.add(hemisphereLight);

            ambientLight = new THREE.AmbientLight(biome.ambientLight, 0.6);
            scene.add(ambientLight);

            dirLight = new THREE.DirectionalLight(biome.sunColor, biome.sunIntensity);
            dirLight.position.set(50, 80, 30);
            dirLight.castShadow = true;
            dirLight.shadow.mapSize.width = 1024;
            dirLight.shadow.mapSize.height = 1024;
            dirLight.shadow.camera.near = 10;
            dirLight.shadow.camera.far = 200;
            dirLight.shadow.camera.left = -80;
            dirLight.shadow.camera.right = 80;
            dirLight.shadow.camera.top = 80;
            dirLight.shadow.camera.bottom = -80;
            scene.add(dirLight);

            // Ground with terrain data
            createProceduralGround(biome);

            // Walls
            createWalls(biome);

            // Environment elements
            createTrees(biome);
            createRocks(biome);
            createGrass(biome);

            // Special features
            if (biome.hasWater) createWater(biome);
            if (biome.hasLava) createLava(biome);
            if (biome.hasCrystals) createCrystals();
            if (biome.hasDunes) createDunes(biome);
            if (biome.hasSpikes) createSpikes();

            // Edge Decorations (Background)
            createBackgroundDecorations(biome);
            finalizeEnvironmentInstances();

            // Particles
            createEnvironmentParticles(biome);
        }

        function createBackgroundDecorations(biome) {
            // Add very dense vegetation/rocks outside the walls for visuals
            const outerCount = biome.treeCount * 5 + 80; // Increased density

            for (let i = 0; i < outerCount; i++) {
                // Spawn in a ring from 50 to 120
                const angle = Math.random() * Math.PI * 2;
                const radius = 50 + Math.random() * 70;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;

                // 70% chance for tree (if biome supports), 30% for rock
                if (Math.random() > 0.3 && (biome.name.includes('Forest') || biome.name.includes('Swamp') || biome.name.includes('Frozen') || biome.name.includes('Desert'))) {
                   createSingleTree(biome, x, z, true);
                } else {
                   createSingleRock(biome, x, z, true);
                }
            }
        }

        // ============================================
        // PROCEDURAL GROUND WITH HEIGHT DATA
        // ============================================
        function createProceduralGround(biome) {
            if (groundMesh) removeAndDisposeObject(groundMesh);

            const size = terrainData.size;
            const segments = terrainData.segments;
            const geo = new THREE.PlaneGeometry(size, size, segments, segments);

            // Store height data for terrain following
            terrainData.heights = [];

            const positions = geo.attributes.position;
            const amplitude = biome.terrainAmplitude || 2;
            const frequency = biome.terrainFrequency || 0.08;

            for (let i = 0; i < positions.count; i++) {
                const x = positions.getX(i);
                const z = positions.getY(i);
                const distFromCenter = Math.sqrt(x*x + z*z);

                let height = 0;

                if (distFromCenter < 45) {
                    // Multiple octaves of noise for realistic terrain
                    height += Math.sin(x * frequency) * Math.cos(z * frequency) * amplitude;
                    height += Math.sin(x * frequency * 2 + 1) * Math.cos(z * frequency * 1.5) * amplitude * 0.5;
                    height += Math.sin(x * frequency * 0.5) * Math.cos(z * frequency * 0.8 + 2) * amplitude * 0.8;

                    // Biome-specific terrain features
                    if (biome.hasDunes) {
                        height += Math.abs(Math.sin(x * 0.06 + z * 0.04)) * 4;
                        height += Math.abs(Math.sin(x * 0.03 - z * 0.05)) * 3;
                    }

                    if (biome.hasSpikes) {
                        const spikeFactor = Math.max(0, Math.sin(x * 0.3) * Math.sin(z * 0.3));
                        height += spikeFactor * spikeFactor * 6;
                    }

                    // Flatten center area for gameplay
                    const centerFlatten = Math.max(0, 1 - distFromCenter / 15);
                    height *= (1 - centerFlatten * 0.8);
                }

                positions.setZ(i, height);
                terrainData.heights.push(height);
            }
            geo.computeVertexNormals();

            // Create vertex colors for natural variation
            const colors = [];
            const baseColor = new THREE.Color(biome.groundColor);
            const grassColor = new THREE.Color(biome.grassColor);

            for (let i = 0; i < positions.count; i++) {
                const height = positions.getZ(i);
                const blend = Math.min(1, Math.max(0, (height + 1) / 4));
                const color = baseColor.clone().lerp(grassColor, blend * 0.4 + Math.random() * 0.15);
                colors.push(color.r, color.g, color.b);
            }
            geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            const mat = new THREE.MeshStandardMaterial({
                vertexColors: true,
                roughness: 0.9,
                metalness: 0.1
            });

            groundMesh = new THREE.Mesh(geo, mat);
            groundMesh.rotation.x = -Math.PI / 2;
            groundMesh.receiveShadow = true;
            scene.add(groundMesh);
        }

        // ============================================
        // ENVIRONMENT OBJECTS
        // ============================================
        function createWalls(biome) {
            const wallMat = new THREE.MeshStandardMaterial({
                color: new THREE.Color(biome.groundColor).multiplyScalar(0.5),
                roughness: 0.9,
                metalness: 0.1
            });

            const positions = [
                { pos: [48, 4, 0], size: [4, 8, 100] },
                { pos: [-48, 4, 0], size: [4, 8, 100] },
                { pos: [0, 4, 48], size: [100, 8, 4] },
                { pos: [0, 4, -48], size: [100, 8, 4] }
            ];

            positions.forEach(p => {
                const geo = new THREE.BoxGeometry(...p.size);
                const wall = new THREE.Mesh(geo, wallMat);
                wall.position.set(...p.pos);
                wall.castShadow = true;
                wall.receiveShadow = true;
                scene.add(wall);
                environmentObjects.push(wall);
            });
        }

        function createTrees(biome) {
            for (let i = 0; i < biome.treeCount; i++) {
                let x, z;
                do {
                    x = (Math.random() - 0.5) * 85;
                    z = (Math.random() - 0.5) * 85;
                } while (Math.abs(x) < 20 && Math.abs(z) < 20);

                createSingleTree(biome, x, z);
            }
        }

        function getInstanceBatch(batches, key, geometryFactory, materialFactory, castShadow) {
            let batch = batches.find(item => item.key === key);
            if (!batch) {
                batch = { key, geometryFactory, materialFactory, castShadow, matrices: [] };
                batches.push(batch);
            }
            return batch;
        }

        function queueInstancePart(batch, groupMatrix, position, rotation, scale) {
            const part = new THREE.Object3D();
            part.position.copy(position);
            part.rotation.set(rotation.x, rotation.y, rotation.z);
            part.scale.copy(scale);
            part.updateMatrix();
            batch.matrices.push(groupMatrix.clone().multiply(part.matrix));
        }

        function createSingleTree(biome, x, z, isBackground = false) {
            const segments = isBackground ? 5 : 8;
            const castShadow = !isBackground;
            const batchSuffix = `${isBackground ? 'background' : 'foreground'}-${segments}`;
            const parts = [];

            if (biome.name.includes('Forest') || biome.name.includes('Swamp')) {
                const trunkHeight = 4 + Math.random() * 3;
                const foliageColor = biome.name.includes('Swamp') ? 0x4a6a3a : 0x2d5a27;
                parts.push({
                    key: `forest-trunk-${batchSuffix}`,
                    geometryFactory: () => new THREE.CylinderGeometry(0.3, 0.5, 1, segments),
                    materialFactory: () => new THREE.MeshStandardMaterial({ color: 0x4a3728, roughness: 0.9 }),
                    position: new THREE.Vector3(0, trunkHeight / 2, 0),
                    rotation: new THREE.Euler(),
                    scale: new THREE.Vector3(1, trunkHeight, 1)
                });

                for (let j = 0; j < (isBackground ? 2 : 3); j++) {
                    const size = 3.5 - j * 0.8;
                    parts.push({
                        key: `forest-foliage-${foliageColor}-${batchSuffix}`,
                        geometryFactory: () => new THREE.ConeGeometry(1, 1, segments),
                        materialFactory: () => new THREE.MeshStandardMaterial({ color: foliageColor, roughness: 0.8 }),
                        position: new THREE.Vector3(0, trunkHeight + j * 1.5, 0),
                        rotation: new THREE.Euler(),
                        scale: new THREE.Vector3(size, size * 1.5, size)
                    });
                }
            } else if (biome.name.includes('Frozen')) {
                parts.push({
                    key: `frozen-trunk-${batchSuffix}`,
                    geometryFactory: () => new THREE.CylinderGeometry(0.2, 0.4, 1, segments),
                    materialFactory: () => new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 0.9 }),
                    position: new THREE.Vector3(0, 2.5, 0),
                    rotation: new THREE.Euler(),
                    scale: new THREE.Vector3(1, 5, 1)
                });

                for (let j = 0; j < (isBackground ? 2 : 4); j++) {
                    const size = 2.5 - j * 0.5;
                    parts.push({
                        key: `frozen-foliage-${batchSuffix}`,
                        geometryFactory: () => new THREE.ConeGeometry(1, 1, segments),
                        materialFactory: () => new THREE.MeshStandardMaterial({ color: 0xe8f4f8, roughness: 0.8 }),
                        position: new THREE.Vector3(0, 4 + j * 1.2, 0),
                        rotation: new THREE.Euler(),
                        scale: new THREE.Vector3(size, 2, size)
                    });
                }
            } else if (biome.name.includes('Desert')) {
                parts.push({
                    key: `cactus-main-${batchSuffix}`,
                    geometryFactory: () => new THREE.CylinderGeometry(0.4, 0.5, 1, segments),
                    materialFactory: () => new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.7 }),
                    position: new THREE.Vector3(0, 2, 0),
                    rotation: new THREE.Euler(),
                    scale: new THREE.Vector3(1, 4, 1)
                });

                if (Math.random() > 0.3) {
                    parts.push({
                        key: `cactus-arm-${batchSuffix}`,
                        geometryFactory: () => new THREE.CylinderGeometry(0.2, 0.25, 1, 6),
                        materialFactory: () => new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.7 }),
                        position: new THREE.Vector3(0.6, 2.5, 0),
                        rotation: new THREE.Euler(0, 0, -Math.PI / 4),
                        scale: new THREE.Vector3(1, 2, 1)
                    });
                }
            } else if (biome.name.includes('Volcanic')) {
                parts.push({
                    key: `volcanic-trunk-${batchSuffix}`,
                    geometryFactory: () => new THREE.CylinderGeometry(0.15, 0.3, 1, 5),
                    materialFactory: () => new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 1 }),
                    position: new THREE.Vector3(0, 1.5, 0),
                    rotation: new THREE.Euler(0, 0, Math.random() * 0.3 - 0.15),
                    scale: new THREE.Vector3(1, 3, 1)
                });
            }

            const terrainY = getTerrainHeight(x, z);
            const rotationY = Math.random() * Math.PI * 2;
            const treeScale = 0.7 + Math.random() * 0.6;
            const groupMatrix = new THREE.Matrix4().compose(
                new THREE.Vector3(x, terrainY, z),
                new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rotationY),
                new THREE.Vector3(treeScale, treeScale, treeScale)
            );

            parts.forEach(part => {
                const batch = getInstanceBatch(
                    treeInstanceParts,
                    part.key,
                    part.geometryFactory,
                    part.materialFactory,
                    castShadow
                );
                queueInstancePart(batch, groupMatrix, part.position, part.rotation, part.scale);
            });

            if (!isBackground) {
                environmentColliders.push({
                    type: 'tree',
                    radius: 1.5 * treeScale,
                    position: new THREE.Vector3(x, terrainY, z)
                });
            }
        }

        function createRocks(biome) {
            for (let i = 0; i < biome.rockCount; i++) {
                let x, z;
                do {
                    x = (Math.random() - 0.5) * 85;
                    z = (Math.random() - 0.5) * 85;
                } while (Math.abs(x) < 18 && Math.abs(z) < 18);

                createSingleRock(biome, x, z);
            }
        }

        function getRockColor(biome) {
            if (biome.name.includes('Volcanic')) return 0x2a2a2a;
            if (biome.name.includes('Frozen')) return 0x8090a0;
            if (biome.name.includes('Desert')) return 0xb8956a;
            return 0x6a6a6a;
        }

        function createSingleRock(biome, x, z, isBackground = false) {
            const size = 0.5 + Math.random() * 2;
            const rockColor = getRockColor(biome);
            const terrainY = getTerrainHeight(x, z);
            const rotation = new THREE.Euler(
                Math.random() * 0.4,
                Math.random() * Math.PI * 2,
                Math.random() * 0.4
            );

            if (isBackground) {
                const batch = getInstanceBatch(
                    backgroundRockInstances,
                    `background-rock-${rockColor}`,
                    () => new THREE.DodecahedronGeometry(1, 0),
                    () => new THREE.MeshStandardMaterial({
                        color: rockColor,
                        roughness: 0.95,
                        metalness: 0.1
                    }),
                    false
                );
                const matrix = new THREE.Matrix4().compose(
                    new THREE.Vector3(x, terrainY + size * 0.3, z),
                    new THREE.Quaternion().setFromEuler(rotation),
                    new THREE.Vector3(size, size, size)
                );
                batch.matrices.push(matrix);
                return;
            }

            const rockGroup = new THREE.Group();
            const rockGeo = new THREE.DodecahedronGeometry(size, 1);
            const positions = rockGeo.attributes.position;
            for (let j = 0; j < positions.count; j++) {
                const px = positions.getX(j);
                const py = positions.getY(j);
                const pz = positions.getZ(j);
                const noise = 1 + (Math.random() - 0.5) * 0.3;
                positions.setXYZ(j, px * noise, py * noise * 0.6, pz * noise);
            }
            rockGeo.computeVertexNormals();

            const rockMat = new THREE.MeshStandardMaterial({
                color: rockColor,
                roughness: 0.95,
                metalness: 0.1
            });
            const rock = new THREE.Mesh(rockGeo, rockMat);
            rock.castShadow = true;
            rock.receiveShadow = true;
            rockGroup.add(rock);

            rockGroup.position.set(x, terrainY + size * 0.3, z);
            rockGroup.rotation.copy(rotation);
            scene.add(rockGroup);
            environmentObjects.push(rockGroup);
            environmentColliders.push({
                type: 'rock',
                radius: size,
                position: rockGroup.position
            });
        }

        function finalizeEnvironmentInstances() {
            [...treeInstanceParts, ...backgroundRockInstances].forEach(batch => {
                if (batch.matrices.length === 0) return;
                const mesh = new THREE.InstancedMesh(
                    batch.geometryFactory(),
                    batch.materialFactory(),
                    batch.matrices.length
                );
                batch.matrices.forEach((matrix, index) => mesh.setMatrixAt(index, matrix));
                mesh.instanceMatrix.needsUpdate = true;
                mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
                mesh.castShadow = batch.castShadow;
                mesh.frustumCulled = false;
                scene.add(mesh);
                environmentObjects.push(mesh);
            });

            treeInstanceParts = [];
            backgroundRockInstances = [];
        }

        function createGrass(biome) {
            if (biome.grassCount === 0) return;

            const grassGeo = new THREE.ConeGeometry(0.1, 0.8, 4);
            const grassMat = new THREE.MeshStandardMaterial({
                color: biome.grassColor,
                roughness: 0.9,
                side: THREE.DoubleSide
            });
            const bladeCount = biome.grassCount * 5;
            const grass = new THREE.InstancedMesh(grassGeo, grassMat, bladeCount);
            const blade = new THREE.Object3D();
            let instanceIndex = 0;

            for (let i = 0; i < biome.grassCount; i++) {
                const localBlades = [];
                for (let j = 0; j < 5; j++) {
                    localBlades.push({
                        x: (Math.random() - 0.5) * 0.5,
                        z: (Math.random() - 0.5) * 0.5,
                        rotationX: Math.random() * 0.3 - 0.15,
                        rotationZ: Math.random() * 0.3 - 0.15
                    });
                }

                const x = (Math.random() - 0.5) * 80;
                const z = (Math.random() - 0.5) * 80;
                const terrainY = getTerrainHeight(x, z);

                localBlades.forEach(local => {
                    blade.position.set(x + local.x, terrainY + 0.4, z + local.z);
                    blade.rotation.set(local.rotationX, 0, local.rotationZ);
                    blade.scale.set(1, 1, 1);
                    blade.updateMatrix();
                    grass.setMatrixAt(instanceIndex, blade.matrix);
                    instanceIndex++;
                });
            }

            grass.instanceMatrix.needsUpdate = true;
            grass.instanceMatrix.setUsage(THREE.StaticDrawUsage);
            // Three.js r128 does not calculate a complete world-space bounds for
            // every instance, so disable object-level culling for this batch.
            grass.frustumCulled = false;
            scene.add(grass);
            environmentObjects.push(grass);
        }

        function createWater(biome) {
            const waterGeo = new THREE.PlaneGeometry(30, 30, 20, 20);
            const waterMat = new THREE.MeshStandardMaterial({
                color: biome.waterColor,
                transparent: true,
                opacity: 0.7,
                roughness: 0.1,
                metalness: 0.8
            });
            waterMesh = new THREE.Mesh(waterGeo, waterMat);
            waterMesh.rotation.x = -Math.PI / 2;
            waterMesh.position.set(30, 0.2, -30);
            scene.add(waterMesh);
        }

        function createLava(biome) {
            for (let i = 0; i < 5; i++) {
                const size = 3 + Math.random() * 5;
                const lavaGeo = new THREE.CircleGeometry(size, 16);
                const lavaMat = new THREE.MeshBasicMaterial({
                    color: biome.lavaColor,
                    transparent: true,
                    opacity: 0.9
                });
                const lava = new THREE.Mesh(lavaGeo, lavaMat);
                lava.rotation.x = -Math.PI / 2;

                let x, z;
                do {
                    x = (Math.random() - 0.5) * 70;
                    z = (Math.random() - 0.5) * 70;
                } while (Math.abs(x) < 25 && Math.abs(z) < 25);

                lava.position.set(x, 0.15, z);
                lava.userData = { baseY: 0.15, phase: Math.random() * Math.PI * 2 };
                scene.add(lava);
                lavaMeshes.push(lava);

                const glowLight = new THREE.PointLight(0xff4500, 2, 15);
                glowLight.position.set(x, 1, z);
                scene.add(glowLight);
                environmentObjects.push(glowLight);
            }
        }

        function createCrystals() {
            for (let i = 0; i < 50; i++) {
                const crystal = new THREE.Group();

                const height = 1 + Math.random() * 4;
                const crystalGeo = new THREE.ConeGeometry(0.3 + Math.random() * 0.4, height, 6);
                const hue = Math.random();
                const crystalMat = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL(0.5 + hue * 0.2, 0.8, 0.5),
                    transparent: true,
                    opacity: 0.8,
                    roughness: 0.1,
                    metalness: 0.9,
                    emissive: new THREE.Color().setHSL(0.5 + hue * 0.2, 0.8, 0.3),
                    emissiveIntensity: 0.5
                });
                const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
                crystalMesh.position.y = height / 2;
                crystalMesh.rotation.z = (Math.random() - 0.5) * 0.3;
                crystal.add(crystalMesh);

                let x, z;
                do {
                    x = (Math.random() - 0.5) * 85;
                    z = (Math.random() - 0.5) * 85;
                } while (Math.abs(x) < 20 && Math.abs(z) < 20);

                const terrainY = getTerrainHeight(x, z);
                crystal.position.set(x, terrainY, z);
                crystal.rotation.y = Math.random() * Math.PI * 2;

                scene.add(crystal);
                environmentObjects.push(crystal);

                if (Math.random() > 0.6) {
                    const glowLight = new THREE.PointLight(crystalMat.color, 0.5, 8);
                    glowLight.position.set(x, terrainY + height / 2, z);
                    scene.add(glowLight);
                    environmentObjects.push(glowLight);
                }
            }
        }

        function createDunes(biome) {
            for (let i = 0; i < 10; i++) {
                const duneGeo = new THREE.SphereGeometry(12 + Math.random() * 8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
                const duneMat = new THREE.MeshStandardMaterial({
                    color: biome.groundColor,
                    roughness: 0.9
                });
                const dune = new THREE.Mesh(duneGeo, duneMat);

                const angle = (i / 10) * Math.PI * 2;
                const dist = 50 + Math.random() * 20;
                dune.position.set(Math.cos(angle) * dist, -3, Math.sin(angle) * dist);
                dune.scale.y = 0.35;
                dune.receiveShadow = true;

                scene.add(dune);
                environmentObjects.push(dune);
            }
        }

        function createSpikes() {
            for (let i = 0; i < 30; i++) {
                const height = 2 + Math.random() * 5;
                const spikeGeo = new THREE.ConeGeometry(0.5 + Math.random() * 0.5, height, 5);
                const spikeMat = new THREE.MeshStandardMaterial({
                    color: 0x1a1a1a,
                    roughness: 0.8,
                    metalness: 0.3
                });
                const spike = new THREE.Mesh(spikeGeo, spikeMat);

                let x, z;
                do {
                    x = (Math.random() - 0.5) * 80;
                    z = (Math.random() - 0.5) * 80;
                } while (Math.abs(x) < 22 && Math.abs(z) < 22);

                const terrainY = getTerrainHeight(x, z);
                spike.position.set(x, terrainY + height / 2, z);
                spike.rotation.z = (Math.random() - 0.5) * 0.3;
                spike.castShadow = true;

                scene.add(spike);
                environmentObjects.push(spike);
            }
        }

        function getEnvironmentParticleVisual(biome) {
            switch (biome.particleType) {
                case 'snow':
                    return {
                        key: 'snow-white',
                        geometryFactory: () => new THREE.SphereGeometry(0.12),
                        materialFactory: () => new THREE.MeshBasicMaterial({ color: 0xffffff })
                    };
                case 'embers':
                    return {
                        key: `embers-${biome.particleColor}`,
                        geometryFactory: () => new THREE.SphereGeometry(0.18),
                        materialFactory: () => new THREE.MeshBasicMaterial({ color: biome.particleColor })
                    };
                case 'leaves': {
                    const leafColor = Math.random() > 0.5 ? 0x228b22 : 0x8b4513;
                    return {
                        key: `leaves-${leafColor}`,
                        geometryFactory: () => new THREE.PlaneGeometry(0.35, 0.35),
                        materialFactory: () => new THREE.MeshBasicMaterial({
                            color: leafColor,
                            side: THREE.DoubleSide
                        })
                    };
                }
                case 'sand':
                    return {
                        key: `sand-${biome.particleColor}`,
                        geometryFactory: () => new THREE.SphereGeometry(0.06),
                        materialFactory: () => new THREE.MeshBasicMaterial({
                            color: biome.particleColor,
                            transparent: true,
                            opacity: 0.6
                        })
                    };
                case 'fireflies':
                    return {
                        key: 'fireflies-yellow',
                        geometryFactory: () => new THREE.SphereGeometry(0.12),
                        materialFactory: () => new THREE.MeshBasicMaterial({ color: 0xffff00 })
                    };
                case 'sparkles':
                    return {
                        key: `sparkles-${biome.particleColor}`,
                        geometryFactory: () => new THREE.OctahedronGeometry(0.12),
                        materialFactory: () => new THREE.MeshBasicMaterial({ color: biome.particleColor })
                    };
                default:
                    return {
                        key: `default-${biome.particleColor}`,
                        geometryFactory: () => new THREE.SphereGeometry(0.1),
                        materialFactory: () => new THREE.MeshBasicMaterial({ color: biome.particleColor })
                    };
            }
        }

        function createEnvironmentParticles(biome) {
            const particleCount = 120;
            const batches = [];

            for (let i = 0; i < particleCount; i++) {
                const visual = getEnvironmentParticleVisual(biome);
                let batch = batches.find(item => item.key === visual.key);
                if (!batch) {
                    batch = { ...visual, particles: [] };
                    batches.push(batch);
                }

                const particle = {
                    position: new THREE.Vector3(
                        (Math.random() - 0.5) * 100,
                        Math.random() * 20 + 2,
                        (Math.random() - 0.5) * 100
                    ),
                    velocity: new THREE.Vector3(
                        (Math.random() - 0.5) * 2,
                        biome.particleType === 'embers' ? Math.random() * 3 : -Math.random() * 2,
                        (Math.random() - 0.5) * 2
                    ),
                    type: biome.particleType,
                    phase: Math.random() * Math.PI * 2,
                    mesh: null,
                    instanceIndex: batch.particles.length
                };

                batch.particles.push(particle);
                environmentParticles.push(particle);
            }

            const particleTransform = new THREE.Object3D();
            batches.forEach(batch => {
                const mesh = new THREE.InstancedMesh(
                    batch.geometryFactory(),
                    batch.materialFactory(),
                    batch.particles.length
                );
                batch.particles.forEach(particle => {
                    particle.mesh = mesh;
                    particleTransform.position.copy(particle.position);
                    particleTransform.rotation.set(0, 0, 0);
                    particleTransform.scale.set(1, 1, 1);
                    particleTransform.updateMatrix();
                    mesh.setMatrixAt(particle.instanceIndex, particleTransform.matrix);
                });
                mesh.instanceMatrix.needsUpdate = true;
                mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
                mesh.frustumCulled = false;
                scene.add(mesh);
                environmentParticleBatches.push(mesh);
            });
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
                        color: 0x4ade80,
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

                // Calculate acceleration for tilt animation
                const prevVel = this.velocity.clone();

                if (inputVec.length() > 0.1) {
                    let speed = CONFIG.playerSpeed;
                    if (this.isPlayer) {
                        speed *= state.playerStats.speed / 100;
                    } else {
                        speed *= (this.typeData?.speed || 1) * 0.55;
                    }

                    // Store velocity in world units per second. Integrate the
                    // original 60 FPS smoothing curve over the full time step so
                    // 30, 60, and 120 FPS travel the same distance.
                    const move = new THREE.Vector3(inputVec.x, 0, inputVec.y).normalize().multiplyScalar(speed);
                    const frameCount = dt * BASELINE_FPS;
                    const retentionAt60Fps = 0.85;
                    const retainedVelocity = Math.pow(retentionAt60Fps, frameCount);
                    const displacement = move.clone().multiplyScalar(frameCount);
                    displacement.add(
                        prevVel.clone().sub(move).multiplyScalar(
                            retentionAt60Fps * (1 - retainedVelocity) / (1 - retentionAt60Fps)
                        )
                    );
                    displacement.multiplyScalar(1 / BASELINE_FPS);
                    this.velocity.copy(move).add(
                        prevVel.clone().sub(move).multiplyScalar(retainedVelocity)
                    );

                    const nextPos = this.mesh.position.clone().add(displacement);
                    nextPos.x = Math.max(-44, Math.min(44, nextPos.x));
                    nextPos.z = Math.max(-44, Math.min(44, nextPos.z));
                    this.mesh.position.copy(nextPos);

                    // Smooth rotation
                    const targetRotation = Math.atan2(move.x, move.z);
                    let diff = targetRotation - this.mesh.rotation.y;
                    while (diff > Math.PI) diff -= Math.PI * 2;
                    while (diff < -Math.PI) diff += Math.PI * 2;
                    this.mesh.rotation.y += diff * 8 * dt;

                    // Calculate tilt based on turning
                    this.targetTilt.x = -diff * 0.3; // Roll when turning
                    this.targetTilt.y = displacement.length() * 0.02; // Pitch when accelerating
                } else {
                    this.velocity.multiplyScalar(getFrameEquivalentMultiplier(0.9, dt));
                    this.targetTilt.set(0, 0);
                }

                // Apply acceleration-based tilt
                this.acceleration.subVectors(this.velocity, prevVel).multiplyScalar(1 / BASELINE_FPS);
                this.targetTilt.y += this.acceleration.z * 2;
                this.targetTilt.x += this.acceleration.x * 2;

                // Terrain following - FIX FOR SINKING
                const terrainY = getTerrainHeight(this.mesh.position.x, this.mesh.position.z);
                this.mesh.position.y = terrainY + 0.1; // Slight offset above ground

                // Apply terrain normal for realistic tilt
                const normal = getTerrainNormal(this.mesh.position.x, this.mesh.position.z);
                this.targetTilt.x += Math.atan2(normal.x, normal.y) * 0.5;
                this.targetTilt.y += Math.atan2(normal.z, normal.y) * 0.5;

                // Smooth tilt animation, calibrated to the original 60 FPS feel.
                this.currentTilt.lerp(this.targetTilt, getFrameEquivalentAlpha(0.1, dt));

                // Apply tilt to tank (but not full rotation)
                const tiltGroup = this.mesh.children[0]; // Hull
                if (tiltGroup) {
                    // We apply slight visual tilt to simulate suspension
                    this.mesh.rotation.x = this.currentTilt.y * 0.3;
                    this.mesh.rotation.z = this.currentTilt.x * 0.3;
                }
            }

            aimAt(targetPos, dt = 1 / BASELINE_FPS) {
                if (this.isDead) return;
                const worldPos = new THREE.Vector3();
                this.turretPivot.getWorldPosition(worldPos);
                const direction = new THREE.Vector3(targetPos.x - worldPos.x, 0, targetPos.z - worldPos.z);
                const targetAngle = Math.atan2(direction.x, direction.z);
                const currentAngle = this.turretPivot.rotation.y + this.mesh.rotation.y;

                let diff = targetAngle - currentAngle;
                while (diff > Math.PI) diff -= Math.PI * 2;
                while (diff < -Math.PI) diff += Math.PI * 2;

                const aimAlpha = getFrameEquivalentAlpha(
                    state.controlAssist ? 0.25 : 0.14,
                    dt
                );
                this.turretPivot.rotation.y += diff * aimAlpha;
            }

            takeDamage(amount) {
                const actualDamage = Math.max(1, amount - state.playerStats.armor * (this.isPlayer ? 1 : 0));
                this.hp -= actualDamage;

                this.mesh.traverse(c => {
                    if (c.isMesh && c.material.emissive) {
                        c.material.emissive.setHex(0xffffff);
                        setTimeout(() => {
                            if (c.material) c.material.emissive.setHex(0x000000);
                        }, 80);
                    }
                });

                if (this.hp <= 0 && !this.isDead) this.die();
            }

            heal(amount) {
                this.hp = Math.min(this.maxHp, this.hp + amount);
                createHealEffect(this.mesh.position);
            }

            die() {
                this.isDead = true;
                createExplosion(this.mesh.position, this.isPlayer ? 70 : 35);
                removeAndDisposeObject(this.mesh);
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
        function createBulletVisual(bulletColor) {
            const bulletGroup = new THREE.Group();

            const core = new THREE.Mesh(
                new THREE.SphereGeometry(0.3),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
            );
            bulletGroup.add(core);

            const innerGlow = new THREE.Mesh(
                new THREE.SphereGeometry(0.45),
                new THREE.MeshBasicMaterial({
                    color: bulletColor,
                    transparent: true,
                    opacity: 0.9
                })
            );
            bulletGroup.add(innerGlow);

            const outerGlow = new THREE.Mesh(
                new THREE.SphereGeometry(0.65),
                new THREE.MeshBasicMaterial({
                    color: bulletColor,
                    transparent: true,
                    opacity: 0.4
                })
            );
            bulletGroup.add(outerGlow);

            const trail = new THREE.Mesh(
                new THREE.CylinderGeometry(0.15, 0.08, 2.0, 8),
                new THREE.MeshBasicMaterial({
                    color: bulletColor,
                    transparent: true,
                    opacity: 0.6
                })
            );
            trail.rotation.x = Math.PI / 2;
            trail.position.z = -1.0;
            bulletGroup.add(trail);

            const light = new THREE.PointLight(bulletColor, 2, 12);
            bulletGroup.add(light);

            return {
                group: bulletGroup,
                innerGlow,
                outerGlow,
                light,
                trail,
                color: bulletColor,
                previousPosition: new THREE.Vector3()
            };
        }

        function acquireBulletVisual(bulletColor) {
            const poolIndex = bulletPool.findIndex(bullet => bullet.color === bulletColor);
            const bullet = poolIndex >= 0
                ? bulletPool.splice(poolIndex, 1)[0]
                : createBulletVisual(bulletColor);

            bullet.group.scale.set(1, 1, 1);
            bullet.innerGlow.scale.set(1, 1, 1);
            bullet.outerGlow.scale.set(1, 1, 1);
            bullet.light.intensity = 2;
            return bullet;
        }

        function releaseBulletVisual(bullet) {
            scene.remove(bullet.group);
            bullet.group.userData = {};

            if (bulletPool.length < MAX_POOLED_BULLETS) {
                bulletPool.push(bullet);
            } else {
                removeAndDisposeObject(bullet.group);
            }
        }

        function releaseBulletAt(index) {
            const [bullet] = bullets.splice(index, 1);
            if (bullet) releaseBulletVisual(bullet);
        }

        function shoot(source) {
            // Recoil animation with smooth return
            const originalZ = source.barrel.position.z;
            source.barrel.position.z -= 0.5;

            let lastRecoilFrame = null;
            const recoilReturn = (timestamp) => {
                if (!source.barrel) return;
                const frameScale = lastRecoilFrame === null
                    ? 1
                    : Math.max(0, (timestamp - lastRecoilFrame) * BASELINE_FPS / 1000);
                lastRecoilFrame = timestamp;
                source.barrel.position.z += 0.05 * frameScale;
                if (source.barrel.position.z < originalZ) {
                    requestAnimationFrame(recoilReturn);
                } else {
                    source.barrel.position.z = originalZ;
                }
            };
            setTimeout(() => recoilReturn(performance.now()), 50);

            createMuzzleFlash(source);

            const shotCount = source.isPlayer && state.playerStats.multishot > 0 ? 3 : 1;
            const spreadAngle = 0.12;

            for (let i = 0; i < shotCount; i++) {
                const bulletColor = source.isPlayer ? 0x00ffff : (source.type === 'healer' ? 0x00ff00 : 0xff4444);

                const bullet = acquireBulletVisual(bulletColor);
                const bulletGroup = bullet.group;

                // Position at muzzle
                const muzzleWorld = new THREE.Vector3();
                source.barrel.getWorldPosition(muzzleWorld);
                bulletGroup.position.copy(muzzleWorld);
                bullet.previousPosition.copy(muzzleWorld);

                // Direction
                const dir = new THREE.Vector3(0, 0, 1);
                dir.applyQuaternion(source.turretPivot.getWorldQuaternion(new THREE.Quaternion()));

                if (shotCount > 1) {
                    const angle = (i - 1) * spreadAngle;
                    dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
                }

                dir.normalize();

                bulletGroup.lookAt(bulletGroup.position.clone().add(dir));

                const damage = source.isPlayer
                    ? CONFIG.baseDamage * (state.playerStats.damage / 100)
                    : (ENEMY_TYPES[source.type]?.damage || 12);

                bulletGroup.userData = {
                    vel: dir.multiplyScalar(CONFIG.bulletSpeed),
                    isPlayer: source.isPlayer,
                    damage: damage,
                    life: 3,
                    color: bulletColor
                };

                scene.add(bulletGroup);
                bullets.push(bullet);
            }
        }

        function createMuzzleFlash(source) {
            const flashGroup = new THREE.Group();

            // Central flash sphere
            const flashGeo = new THREE.SphereGeometry(1.0);
            const flashMat = new THREE.MeshBasicMaterial({ color: 0xffffaa });
            const flash = new THREE.Mesh(flashGeo, flashMat);
            flashGroup.add(flash);

            // Outer ring
            const ringGeo = new THREE.RingGeometry(0.6, 1.5, 16);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0xffaa00,
                transparent: true,
                opacity: 0.9,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.y = Math.PI / 2;
            flashGroup.add(ring);

            // Flash light
            const flashLight = new THREE.PointLight(0xffaa00, 3, 15);
            flashGroup.add(flashLight);

            const muzzleWorld = new THREE.Vector3();
            source.barrel.getWorldPosition(muzzleWorld);
            flashGroup.position.copy(muzzleWorld);

            // Orient flash forward
            const dir = new THREE.Vector3(0, 0, 1);
            dir.applyQuaternion(source.turretPivot.getWorldQuaternion(new THREE.Quaternion()));
            flashGroup.position.add(dir.multiplyScalar(0.5));

            scene.add(flashGroup);

            // Animate out
            let scale = 1;
            let lightIntensity = 3;
            let lastFlashFrame = null;
            const animateFlash = (timestamp) => {
                const frameScale = lastFlashFrame === null
                    ? 1
                    : Math.max(0, (timestamp - lastFlashFrame) * BASELINE_FPS / 1000);
                lastFlashFrame = timestamp;
                scale *= Math.pow(0.82, frameScale);
                lightIntensity *= Math.pow(0.8, frameScale);
                flashGroup.scale.setScalar(scale);
                flash.material.opacity = scale;
                ring.material.opacity = scale * 0.9;
                flashLight.intensity = lightIntensity;

                if (scale > 0.05) {
                    requestAnimationFrame(animateFlash);
                } else {
                    removeAndDisposeObject(flashGroup);
                }
            };
            animateFlash(performance.now());
        }

        function createHealEffect(pos) {
            for (let i = 0; i < 10; i++) {
                const geo = new THREE.SphereGeometry(0.25);
                const mat = new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 1 });
                const mesh = new THREE.Mesh(geo, mat);
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
            const isGround = type === 'ground';

            // Volumetric debris particles
            for (let i = 0; i < count; i++) {
                const size = (0.2 + Math.random() * 0.5) * (isArmor ? 0.8 : 1);
                let geo, mat;

                if (isTree) {
                    geo = Math.random() > 0.5 ? new THREE.PlaneGeometry(size, size) : new THREE.BoxGeometry(size/2, size, size/2);
                    mat = new THREE.MeshBasicMaterial({
                        color: Math.random() > 0.5 ? 0x2d5a27 : 0x5c4033,
                        side: THREE.DoubleSide
                    });
                } else if (isGround) {
                     geo = new THREE.DodecahedronGeometry(size * 0.7, 0);
                     mat = new THREE.MeshStandardMaterial({
                        color: Math.random() > 0.5 ? 0x5a4d41 : 0x3d3024,
                        roughness: 1.0
                    });
                } else {
                    // Armor / Default
                    if (Math.random() < 0.33) geo = new THREE.BoxGeometry(size, size, size);
                    else if (Math.random() < 0.66) geo = new THREE.TetrahedronGeometry(size);
                    else geo = new THREE.OctahedronGeometry(size * 0.8);

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
                const smokeGeo = new THREE.SphereGeometry(0.8 + Math.random() * 0.6);
                let smokeColor = 0x6a6a6a;

                if (isArmor) smokeColor = 0x333333;
                else if (isTree) smokeColor = 0x4a3728;
                else if (isGround) smokeColor = 0x8b7355; // Dust color

                const smokeMat = new THREE.MeshBasicMaterial({
                    color: smokeColor,
                    transparent: true,
                    opacity: isGround ? 0.4 : 0.6
                });
                const smoke = new THREE.Mesh(smokeGeo, smokeMat);
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
                         const geo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
                         const mat = new THREE.MeshBasicMaterial({color: 0x00ff00});
                         const p = new THREE.Mesh(geo, mat);
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
                         const geo = new THREE.PlaneGeometry(0.1, 0.5);
                         const mat = new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});
                         const p = new THREE.Mesh(geo, mat);
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
                const ringGeo = new THREE.RingGeometry(0.5, 1.5, 32);
                const ringMat = new THREE.MeshBasicMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.8,
                    side: THREE.DoubleSide
                });
                const shockwave = new THREE.Mesh(ringGeo, ringMat);
                shockwave.rotation.x = -Math.PI / 2;
                shockwave.position.copy(pos);
                scene.add(shockwave);

                let ringScale = 1;
                let lastRingFrame = null;
                const animateRing = (timestamp) => {
                    const frameScale = lastRingFrame === null
                        ? 1
                        : Math.max(0, (timestamp - lastRingFrame) * BASELINE_FPS / 1000);
                    lastRingFrame = timestamp;
                    ringScale += 0.4 * frameScale;
                    shockwave.scale.setScalar(ringScale);
                    shockwave.material.opacity -= 0.08 * frameScale;

                    if (shockwave.material.opacity > 0) {
                        requestAnimationFrame(animateRing);
                    } else {
                        removeAndDisposeObject(shockwave);
                    }
                };
                animateRing(performance.now());

                const light = new THREE.PointLight(color, 3, 20);
                light.position.copy(pos);
                scene.add(light);

                let intensity = 3;
                let lastLightFrame = null;
                const fadeLight = (timestamp) => {
                    const frameScale = lastLightFrame === null
                        ? 1
                        : Math.max(0, (timestamp - lastLightFrame) * BASELINE_FPS / 1000);
                    lastLightFrame = timestamp;
                    intensity -= 0.4 * frameScale;
                    light.intensity = Math.max(0, intensity);
                    if (intensity > 0) requestAnimationFrame(fadeLight);
                    else removeAndDisposeObject(light);
                };
                fadeLight(performance.now());
            }

            state.cameraShake = Math.max(state.cameraShake, count > 30 ? 0.5 : 0.2);
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

        function pauseGame() {
            if (!state.isPlaying || state.gamePhase !== 'playing') return;
            state.gamePhase = 'paused';
            clearInputState();
            setScreenVisibility('pause-screen', true);
            setPauseUIVisible(true);
            playPauseSound();
            syncHUDControls();
        }

        function resumeGame() {
            if (!state.isPlaying || state.gamePhase !== 'paused') return;
            state.gamePhase = 'playing';
            clearInputState();
            setScreenVisibility('pause-screen', false);
            setPauseUIVisible(true);
            playPauseSound();
            syncHUDControls();
        }

        function togglePause() {
            if (state.gamePhase === 'playing') pauseGame();
            else if (state.gamePhase === 'paused') resumeGame();
        }

        function quitToMenu() {
            state.isPlaying = false;
            state.gamePhase = 'menu';
            state.settingsOpen = false;
            clearInputState();
            clearCombatScene();
            setScreenVisibility('settings-screen', false);
            setScreenVisibility('pause-screen', false);
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('start-screen', true);
            setPauseUIVisible(false);
            syncHUDControls();
        }

        function getEnemyTypeForLevel(level) {
            const types = ['scout', 'soldier'];
            if (level >= 3) types.push('heavy');
            if (level >= 4) types.push('sniper');
            if (level >= 5) types.push('healer');
            if (level >= 7) types.push('berserker');
            return types[Math.floor(Math.random() * types.length)];
        }

        function getSpawnRateForLevel(level) {
            const baseSpawnRate = Math.max(1.5, 3.5 - level * 0.15);
            // Preserve the average in-game spawn acceleration from the old timer
            // patch, but calculate it deterministically and only while playing.
            const difficultyMultiplier = 1 + level * 0.1;
            return baseSpawnRate / (1 + 0.1 * difficultyMultiplier);
        }

        function clearCombatScene() {
            removeAndDisposeObjects([
                player ? player.mesh : null,
                ...enemies.map(enemy => enemy.mesh)
            ]);
            while (bullets.length > 0) releaseBulletAt(bullets.length - 1);
            removeAndDisposeObjects(particles.map(particle => particle.mesh));
            player = null;
            enemies = [];
            particles = [];
        }

        function startGame() {
            clearCombatScene();

            const now = clock.getElapsedTime();
            state.score = 0;
            state.xp = 0;
            state.level = 1;
            state.xpToNext = 100;
            state.isPlaying = true;
            state.gamePhase = 'playing';
            state.lastFireTime = now - CONFIG.fireRate;
            state.lastSpawnTime = now;
            state.lastRegenTime = now;
            state.enemiesIntroduced = new Set();
            state.playerStats = createDefaultPlayerStats();
            state.targetEnemy = null;
            state.cameraShake = 0;
            state.settingsOpen = false;
            clearInputState();

            player = new Tank(0x22c55e, true);
            loadBiome(0);
            updateHUD();

            setScreenVisibility('start-screen', false);
            setScreenVisibility('settings-screen', false);
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('pause-screen', false);
            setPauseUIVisible(true);
            syncHUDControls();
        }

        function addXP(amount) {
            state.xp += amount;

            while (state.xp >= state.xpToNext) {
                state.xp -= state.xpToNext;
                state.level++;
                state.xpToNext = Math.floor(state.xpToNext * 1.4);

                const upgrade = UPGRADES.find(u => u.level === state.level);
                if (upgrade) {
                    state.playerStats[upgrade.stat] += upgrade.amount;
                    if (upgrade.stat === 'maxHp') {
                        player.maxHp = state.playerStats.maxHp;
                        player.hp = Math.min(player.hp + upgrade.amount, player.maxHp);
                    }
                    showUpgradeNotification(upgrade.text);
                } else {
                    showUpgradeNotification('🌟 Level ' + state.level + '!');
                }

                // Change biome every 3 levels
                if (state.level % 3 === 0) {
                    loadBiome(Math.floor(state.level / 3));
                }
            }
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

            let x, z;
            do {
                x = (Math.random() - 0.5) * 80;
                z = (Math.random() - 0.5) * 80;
            } while (player.mesh.position.distanceTo(new THREE.Vector3(x, 0, z)) < 25);

            const type = getEnemyTypeForLevel(state.level);
            showEnemyIntro(type);

            const enemy = new Tank(ENEMY_TYPES[type].color, false, type);
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
            if (!player || player.isDead) return;

            // Player movement
            player.move(dt, new THREE.Vector2(state.input.x, state.input.y));
            player.update(dt);

            // Health regen
            if (state.playerStats.regen > 0 && clock.getElapsedTime() - state.lastRegenTime > 1) {
                if (player.hp < player.maxHp) {
                    player.hp = Math.min(player.maxHp, player.hp + state.playerStats.regen);
                    document.getElementById('heal-overlay').style.opacity = '0.3';
                    setTimeout(() => document.getElementById('heal-overlay').style.opacity = '0', 200);
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
                player.aimAt(state.targetEnemy.mesh.position, dt);
            } else if (state.input.x !== 0 || state.input.y !== 0) {
                const tPos = player.mesh.position.clone().add(new THREE.Vector3(state.input.x * 10, 0, state.input.y * 10));
                player.aimAt(tPos, dt);
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
                e.move(dt, new THREE.Vector2(0, 0)); // This updates terrain height

                const toPlayer = new THREE.Vector3().subVectors(player.mesh.position, e.mesh.position);
                const dist = toPlayer.length();

                if (e.type === 'healer') {
                    const woundedAlly = enemies.find(ally => !ally.isDead && ally !== e && ally.hp < ally.maxHp);
                    if (woundedAlly && clock.getElapsedTime() - e.lastHealTime > 2) {
                        woundedAlly.heal(ENEMY_TYPES.healer.healAmount);
                        e.lastHealTime = clock.getElapsedTime();
                    }
                    if (dist < 20) e.move(dt, new THREE.Vector2(-toPlayer.x, -toPlayer.z).normalize());
                } else if (e.type === 'sniper') {
                    if (dist < 25) e.move(dt, new THREE.Vector2(-toPlayer.x, -toPlayer.z).normalize().multiplyScalar(0.5));
                    else if (dist > 30) e.move(dt, new THREE.Vector2(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    if (Math.random() < getFrameEquivalentChance(0.008, dt)) shoot(e);
                } else if (e.type === 'berserker') {
                    e.move(dt, new THREE.Vector2(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    if (dist < 18 && Math.random() < getFrameEquivalentChance(0.025, dt)) shoot(e);
                } else {
                    if (dist > 18) e.move(dt, new THREE.Vector2(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    const shotChance = 0.012 * (ENEMY_TYPES[e.type]?.fireRate || 0.4);
                    if (Math.random() < getFrameEquivalentChance(shotChance, dt)) shoot(e);
                }
            });

            // Bullets
            for (let i = bullets.length - 1; i >= 0; i--) {
                const b = bullets[i];
                b.previousPosition.copy(b.group.position);
                b.group.position.addScaledVector(b.group.userData.vel, dt);
                b.group.userData.life -= dt;

                // Pulse effect
                const pulse = 1 + Math.sin(clock.getElapsedTime() * 25) * 0.18;
                b.innerGlow.scale.setScalar(pulse);
                b.outerGlow.scale.setScalar(pulse * 1.1);

                let hit = false;

                // Swept wall check. Move the impact effect to the arena edge
                // instead of allowing a long frame to place it beyond the wall.
                const wallHitTime = getArenaBoundaryHitTime(
                    b.previousPosition,
                    b.group.position
                );
                if (wallHitTime !== null) {
                    bulletImpactPosition.copy(b.previousPosition).lerp(b.group.position, wallHitTime);
                    b.group.position.copy(bulletImpactPosition);
                    hit = true;
                    createExplosion(b.group.position, 6, 0x888888, 'wall');
                }

                // Environment Object Check (foreground trees and rocks only).
                // Distant decorations and non-collidable visuals are not scanned.
                if (!hit) {
                    for (const collider of environmentColliders) {
                        const colliderHitTime = getSegmentCylinderHitTime(
                            b.previousPosition,
                            b.group.position,
                            collider.position,
                            collider.radius,
                            5
                        );

                        // Preserve the existing cylinder hitbox dimensions while
                        // checking the complete distance travelled this frame.
                        if (colliderHitTime !== null) {
                            bulletImpactPosition.copy(b.previousPosition).lerp(
                                b.group.position,
                                colliderHitTime
                            );
                            b.group.position.copy(bulletImpactPosition);
                            hit = true;
                            createExplosion(b.group.position, 8, 0xaaaaaa, collider.type);
                            break;
                        }
                    }
                }

                if (!hit) {
                    if (b.group.userData.isPlayer) {
                        for (let j = enemies.length - 1; j >= 0; j--) {
                            const enemy = enemies[j];
                            if (!enemy.isDead) {
                                // Preserve the forgiving cylindrical hitbox but
                                // test the projectile's complete travelled path.
                                const enemyHitTime = getSegmentCylinderHitTime(
                                    b.previousPosition,
                                    b.group.position,
                                    enemy.mesh.position,
                                    2.6,
                                    6.0
                                );

                                if (enemyHitTime !== null) {
                                    bulletImpactPosition.copy(b.previousPosition).lerp(
                                        b.group.position,
                                        enemyHitTime
                                    );
                                    b.group.position.copy(bulletImpactPosition);
                                    enemy.takeDamage(b.group.userData.damage);

                                    const enemyColor = ENEMY_TYPES[enemy.type]?.color || 0xff0000;
                                    // Pass enemy type for specific visual effects
                                    createExplosion(b.group.position, 18, enemyColor, 'armor', enemy.type);

                                    if (enemy.isDead) {
                                        const points = ENEMY_TYPES[enemy.type]?.points || 100;
                                        state.score += points;
                                        addXP(points / 2);
                                        showScorePopup(enemy.mesh.position.x, enemy.mesh.position.z, points);
                                        enemies.splice(j, 1);
                                    }
                                    hit = true;
                                    break;
                                }
                            }
                        }
                    } else {
                        // Enemy hitting Player. Preserve the existing hitbox while
                        // checking the complete projectile segment.
                        const playerHitTime = getSegmentCylinderHitTime(
                            b.previousPosition,
                            b.group.position,
                            player.mesh.position,
                            2.5,
                            3.8
                        );

                        if (playerHitTime !== null) {
                            bulletImpactPosition.copy(b.previousPosition).lerp(
                                b.group.position,
                                playerHitTime
                            );
                            b.group.position.copy(bulletImpactPosition);
                            player.takeDamage(b.group.userData.damage);
                            createExplosion(b.group.position, 14, 0x4ade80, 'armor');

                            document.getElementById('damage-overlay').style.opacity = '0.5';
                            setTimeout(() => document.getElementById('damage-overlay').style.opacity = '0', 150);

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
                    releaseBulletAt(i);
                }
            }

            // Particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];

                if (p.gravity) {
                    // Integrate the original 60 FPS gravity curve over the full
                    // time step. At 60 FPS this produces the exact old position.
                    p.mesh.position.x += p.velocity.x * dt;
                    p.mesh.position.z += p.velocity.z * dt;
                    p.mesh.position.y += p.velocity.y * dt -
                        14 * (dt * dt - dt / BASELINE_FPS);
                    p.velocity.y -= 28 * dt;
                    const groundY = getTerrainHeight(p.mesh.position.x, p.mesh.position.z);
                    if (p.mesh.position.y < groundY + 0.1) {
                        p.mesh.position.y = groundY + 0.1;
                        p.velocity.y *= -0.35;
                        p.velocity.x *= 0.7;
                        p.velocity.z *= 0.7;
                    }
                } else {
                    p.mesh.position.addScaledVector(p.velocity, dt);
                }

                if (p.rotationSpeed) {
                    p.mesh.rotation.x += p.rotationSpeed.x * dt;
                    p.mesh.rotation.y += p.rotationSpeed.y * dt;
                    p.mesh.rotation.z += p.rotationSpeed.z * dt;
                }

                if (p.isSmoke) {
                    const smokeScaleAt60Fps = 1 + p.expansionRate / BASELINE_FPS;
                    p.mesh.scale.multiplyScalar(getFrameEquivalentMultiplier(smokeScaleAt60Fps, dt));
                    p.velocity.y *= getFrameEquivalentMultiplier(0.98, dt);
                }

                p.life -= dt;
                p.mesh.material.opacity = Math.max(0, p.life * 1.2);
                if (!p.isSmoke) {
                    p.mesh.scale.multiplyScalar(getFrameEquivalentMultiplier(0.97, dt));
                }

                if (p.life <= 0) {
                    removeAndDisposeObject(p.mesh);
                    particles.splice(i, 1);
                }
            }

            // Environment particles share one or two instanced meshes instead of
            // issuing a separate draw call for every particle.
            environmentParticles.forEach(p => {
                p.position.addScaledVector(p.velocity, dt);
                p.phase += dt;

                if (p.type === 'fireflies') {
                    p.position.x += Math.sin(p.phase * 2) * dt * 2;
                    p.position.y += Math.sin(p.phase * 3) * dt;
                }

                if (p.position.y < 0) p.position.y = 20;
                if (p.position.y > 25) p.position.y = 0;
                if (Math.abs(p.position.x) > 60) p.position.x *= -0.9;
                if (Math.abs(p.position.z) > 60) p.position.z *= -0.9;

                environmentParticleTransform.position.copy(p.position);
                environmentParticleTransform.rotation.set(0, 0, 0);
                environmentParticleTransform.scale.set(1, 1, 1);
                environmentParticleTransform.updateMatrix();
                p.mesh.setMatrixAt(p.instanceIndex, environmentParticleTransform.matrix);
            });
            environmentParticleBatches.forEach(batch => {
                batch.instanceMatrix.needsUpdate = true;
            });

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

            // Spawner
            const spawnRate = getSpawnRateForLevel(state.level);
            const maxEnemies = Math.min(12, 3 + state.level);
            if (clock.getElapsedTime() - state.lastSpawnTime > spawnRate) {
                if (enemies.filter(e => !e.isDead).length < maxEnemies) {
                    spawnEnemy();
                    state.lastSpawnTime = clock.getElapsedTime();
                }
            }

            // Camera follow
            const camOffset = state.cameraMode === 'wide' ? new THREE.Vector3(0, 28, 36) : new THREE.Vector3(0, 22, 28);
            const targetCam = player.mesh.position.clone().add(camOffset);
            const cameraAlphaAt60Fps = state.cameraMode === 'wide' ? 0.045 : 0.06;
            camera.position.lerp(targetCam, getFrameEquivalentAlpha(cameraAlphaAt60Fps, dt));
            camera.lookAt(player.mesh.position.x, 0, player.mesh.position.z + 5);

            if (state.cameraShake > 0) {
                const shakeScale = state.cameraMode === 'wide' ? 0.55 : 1;
                camera.position.x += (Math.random() - 0.5) * state.cameraShake * shakeScale;
                camera.position.z += (Math.random() - 0.5) * state.cameraShake * shakeScale;
                state.cameraShake = Math.max(0, state.cameraShake - dt * 2);
            }
        }

        function updateHUD() {
            document.getElementById('score').textContent = state.score;
            document.getElementById('level').textContent = state.level;

            const xpPct = (state.xp / state.xpToNext) * 100;
            document.getElementById('xp-bar').style.width = xpPct + '%';

            document.getElementById('stat-speed').textContent = state.playerStats.speed;
            document.getElementById('stat-damage').textContent = state.playerStats.damage;
            document.getElementById('stat-armor').textContent = state.playerStats.armor;
            document.getElementById('stat-regen').textContent = state.playerStats.regen;

            if (player) {
                const hpPct = Math.max(0, (player.hp / player.maxHp) * 100);
                const bar = document.getElementById('hp-bar');
                bar.style.width = hpPct + '%';

                if (hpPct < 30) bar.style.background = 'linear-gradient(90deg, #dc2626, #ef4444)';
                else if (hpPct < 60) bar.style.background = 'linear-gradient(90deg, #eab308, #facc15)';
                else bar.style.background = 'linear-gradient(90deg, #22c55e, #4ade80)';
            }
        }

        function endGame() {
            if (state.gamePhase === 'gameover') return;

            state.isPlaying = false;
            state.gamePhase = 'gameover';
            state.settingsOpen = false;
            clearInputState();
            document.getElementById('final-score').textContent = state.score;
            document.getElementById('final-level').textContent = state.level;
            setScreenVisibility('settings-screen', false);
            setScreenVisibility('pause-screen', false);
            setScreenVisibility('game-over-screen', true);
            setPauseUIVisible(false);
            syncHUDControls();
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);
            const dt = Math.min(clock.getDelta(), 0.1);
            if (state.gamePhase === 'playing') updatePhysics(dt);
            renderer.render(scene, camera);
        }

        // ============================================
        // INPUT HANDLING
        // ============================================
        function setupInputs() {
            const inputLayer = document.getElementById('input-layer');
            const stickBase = document.getElementById('joystick-base');
            const stickKnob = document.getElementById('joystick-knob');
            const keys = {};

            let moveTouch = null;
            let fireTouch = null;

            function resetControllerState() {
                moveTouch = null;
                fireTouch = null;
                Object.keys(keys).forEach(key => delete keys[key]);
                stickBase.style.display = 'none';
                stickKnob.style.transform = 'translate(-50%, -50%)';
            }

            resetInputController = resetControllerState;

            function releaseTouches(e) {
                for (let i = 0; i < e.changedTouches.length; i++) {
                    const touch = e.changedTouches[i];

                    if (touch.identifier === moveTouch) {
                        moveTouch = null;
                        stickBase.style.display = 'none';
                        stickKnob.style.transform = 'translate(-50%, -50%)';
                        state.input.x = 0;
                        state.input.y = 0;
                    }

                    if (touch.identifier === fireTouch) {
                        fireTouch = null;
                        state.input.isFiring = false;
                    }
                }
            }

            inputLayer.addEventListener('touchstart', (e) => {
                if (state.gamePhase !== 'playing') return;

                for (let i = 0; i < e.changedTouches.length; i++) {
                    const touch = e.changedTouches[i];
                    if (!isInTouchControlZone(touch)) continue;

                    if (touch.clientX < window.innerWidth / 2) {
                        if (moveTouch === null) {
                            moveTouch = touch.identifier;
                            stickBase.style.display = 'block';
                            stickBase.style.left = touch.clientX + 'px';
                            stickBase.style.top = touch.clientY + 'px';
                            stickKnob.style.transform = 'translate(-50%, -50%)';
                        }
                    } else if (fireTouch === null) {
                        // Keep the first firing finger until it is released. A
                        // second finger must not replace it and latch firing on.
                        fireTouch = touch.identifier;
                        state.input.isFiring = true;
                    }
                }
            }, { passive: true });

            inputLayer.addEventListener('touchmove', (e) => {
                if (state.gamePhase !== 'playing') return;
                e.preventDefault();

                for (let i = 0; i < e.changedTouches.length; i++) {
                    const touch = e.changedTouches[i];

                    if (touch.identifier === moveTouch) {
                        const rect = stickBase.getBoundingClientRect();
                        const centerX = rect.left + rect.width / 2;
                        const centerY = rect.top + rect.height / 2;

                        let dx = touch.clientX - centerX;
                        let dy = touch.clientY - centerY;
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

            inputLayer.addEventListener('touchend', releaseTouches);
            inputLayer.addEventListener('touchcancel', releaseTouches);

            // Keyboard support is retained for desktop testing.
            window.addEventListener('keydown', (e) => {
                if (state.gamePhase !== 'playing') return;
                keys[e.key.toLowerCase()] = true;
                updateKeyboardInput();
                if (e.key === ' ') {
                    e.preventDefault();
                    state.input.isFiring = true;
                }
            });

            window.addEventListener('keyup', (e) => {
                keys[e.key.toLowerCase()] = false;
                updateKeyboardInput();
                if (e.key === ' ') state.input.isFiring = false;
            });

            window.addEventListener('blur', clearInputState);
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) return;
                if (state.gamePhase === 'playing') pauseGame();
                else clearInputState();
            });

            function updateKeyboardInput() {
                state.input.x = (keys['d'] ? 1 : 0) - (keys['a'] ? 1 : 0);
                state.input.y = (keys['s'] ? 1 : 0) - (keys['w'] ? 1 : 0);
            }
        }

        // Button handlers
        syncHUDControls();

        document.getElementById('btn-start').addEventListener('click', (e) => {
            e.stopPropagation();
            startGame();
        });

        document.getElementById('btn-restart').addEventListener('click', (e) => {
            e.stopPropagation();
            startGame();
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

        document.getElementById('btn-quit').addEventListener('click', (e) => {
            e.stopPropagation();
            quitToMenu();
        });

        // Small bridge used by the native Android wrapper. The browser version
        // keeps working because these handlers only run when called by Capacitor.
        window.TankRealmsApp = Object.freeze({
            handleAppStateChange(isActive) {
                if (!isActive && state.gamePhase === 'playing') pauseGame();
            },
            handleBackButton() {
                if (state.settingsOpen) {
                    closeSettings();
                    return true;
                }
                if (state.gamePhase === 'playing') {
                    pauseGame();
                    return true;
                }
                if (state.gamePhase === 'paused') {
                    resumeGame();
                    return true;
                }
                if (state.gamePhase === 'gameover') {
                    quitToMenu();
                    return true;
                }
                return false;
            }
        });

        document.getElementById('start-screen').classList.remove('hidden');
        setPauseUIVisible(false);
        syncHUDControls();
        init();
