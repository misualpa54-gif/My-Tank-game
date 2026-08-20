
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
            berserker: { name: "Berserker", color: 0xec4899, hp: 80, speed: 1.3, damage: 18, fireRate: 0.7, size: 1.2, points: 250, desc: "Aggressive charger" },
            shield: { name: "Shield Tank", color: 0x0ea5e9, hp: 110, speed: 0.65, damage: 14, fireRate: 0.35, size: 1.15, points: 225, desc: "Front armor absorbs most damage" },
            artillery: { name: "Artillery", color: 0xf59e0b, hp: 55, speed: 0.45, damage: 22, fireRate: 0, size: 1.05, points: 260, desc: "Marks the ground before striking" },
            mineLayer: { name: "Mine Layer", color: 0x64748b, hp: 70, speed: 0.8, damage: 16, fireRate: 0.2, size: 1.0, points: 230, desc: "Leaves temporary proximity mines" },
            commander: { name: "Commander", color: 0xf43f5e, hp: 95, speed: 0.75, damage: 12, fireRate: 0.35, size: 1.1, points: 300, desc: "Strengthens nearby enemies" },
            droneCarrier: { name: "Drone Carrier", color: 0x14b8a6, hp: 130, speed: 0.55, damage: 10, fireRate: 0.2, size: 1.3, points: 325, desc: "Deploys fast attack drones" },
            drone: { name: "Attack Drone", color: 0x5eead4, hp: 14, speed: 1.8, damage: 5, fireRate: 0.5, size: 0.45, points: 25, desc: "Small carrier-launched attacker" },
            reflector: { name: "Reflector", color: 0x8b5cf6, hp: 85, speed: 0.7, damage: 15, fireRate: 0.3, size: 1.05, points: 290, desc: "Periodically blocks incoming plasma" },
            forestGuardian: { name: "Rootbound Guardian", color: 0x166534, hp: 500, speed: 0.55, damage: 14, fireRate: 0, size: 1.9, points: 800, xpReward: 180, bossCoins: 100, isBoss: true, behavior: 'forest', attackInterval: 1.6, desc: "Guardian of the enchanted forest" },
            frozenGuardian: { name: "Frozen Fortress", color: 0x93c5fd, hp: 650, speed: 0.35, damage: 22, fireRate: 0, size: 2.1, points: 1000, xpReward: 220, bossCoins: 140, isBoss: true, behavior: 'frozen', attackInterval: 2.2, desc: "An armored fortress of ice" },
            volcanicGuardian: { name: "Volcanic Behemoth", color: 0x9a3412, hp: 700, speed: 0.8, damage: 18, fireRate: 0, size: 2.0, points: 1200, xpReward: 260, bossCoins: 180, isBoss: true, behavior: 'volcanic', attackInterval: 1.8, desc: "A charging engine of fire" },
            desertGuardian: { name: "Desert Mirage", color: 0xeab308, hp: 560, speed: 1.0, damage: 16, fireRate: 0, size: 1.75, points: 1400, xpReward: 300, bossCoins: 220, isBoss: true, behavior: 'desert', attackInterval: 1.15, desc: "A swift guardian of the dunes" },
            swampGuardian: { name: "Swamp Colossus", color: 0x3f6212, hp: 780, speed: 0.45, damage: 17, fireRate: 0, size: 2.15, points: 1600, xpReward: 340, bossCoins: 260, isBoss: true, behavior: 'swamp', attackInterval: 2.0, desc: "A self-repairing swamp colossus" },
            crystalGuardian: { name: "Crystal Core", color: 0x4f46e5, hp: 950, speed: 0.25, damage: 20, fireRate: 0, size: 2.2, points: 2000, xpReward: 400, bossCoins: 350, isBoss: true, behavior: 'crystal', attackInterval: 2.4, desc: "The final rotating crystal guardian" }
        };
        const REALM_GUARDIAN_TYPES = [
            'forestGuardian',
            'frozenGuardian',
            'volcanicGuardian',
            'desertGuardian',
            'swampGuardian',
            'crystalGuardian'
        ];

        const REALM_OBJECTIVES = [
            { type: 'markedHeavy', name: 'Priority Target', description: 'Destroy the marked Heavy tank', target: 1, reward: 75 },
            { type: 'survive', name: 'Hold the Line', description: 'Survive for 30 seconds', target: 30, reward: 100 },
            { type: 'medics', name: 'Cut the Supply', description: 'Destroy 3 Medic tanks', target: 3, reward: 125 },
            { type: 'combo', name: 'Combo Trial', description: 'Reach a 5-kill combo', target: 5, reward: 150 },
            { type: 'defend', name: 'Defend the Beacon', description: 'Keep the central beacon alive for 30 seconds', target: 30, reward: 175 },
            { type: 'noDamage', name: 'Untouchable', description: 'Avoid damage for 25 seconds', target: 25, reward: 200 },
            { type: 'score', name: 'Score Assault', description: 'Earn 1,000 score during the objective', target: 1000, reward: 225 }
        ];

        const TANK_DESIGNS = {
            vanguard: {
                id: 'vanguard',
                name: 'Verdant Vanguard',
                description: 'Classic green armor with cyan plasma.',
                color: 0x22c55e,
                accentColor: 0x86efac,
                projectileColor: 0x00ffff,
                projectileStyle: 'orb',
                unlockCost: 0
            },
            ember: {
                id: 'ember',
                name: 'Ember Warden',
                description: 'Angular orange armor with an ember bolt.',
                color: 0xf97316,
                accentColor: 0xfacc15,
                projectileColor: 0xff8a00,
                projectileStyle: 'bolt',
                unlockCost: 750
            },
            azure: {
                id: 'azure',
                name: 'Azure Bastion',
                description: 'Heavy blue styling with crystal plasma.',
                color: 0x3b82f6,
                accentColor: 0xa78bfa,
                projectileColor: 0x8b5cf6,
                projectileStyle: 'crystal',
                unlockCost: 1800
            }
        };
        const TANK_DESIGN_LIST = Object.values(TANK_DESIGNS);

        const PERMANENT_UPGRADE_DEFINITIONS = [
            { id: 'maxHp', name: 'Hull', stat: 'maxHp', amount: 5, maxTier: 5, baseCost: 120 },
            { id: 'damage', name: 'Damage', stat: 'damage', amount: 4, maxTier: 5, baseCost: 150 },
            { id: 'speed', name: 'Speed', stat: 'speed', amount: 3, maxTier: 5, baseCost: 140 },
            { id: 'armor', name: 'Armor', stat: 'armor', amount: 2, maxTier: 5, baseCost: 130 },
            { id: 'fireRate', name: 'Fire rate', stat: 'fireRate', amount: 3, maxTier: 5, baseCost: 160 }
        ];
        const PERMANENT_UPGRADE_BY_ID = new Map(
            PERMANENT_UPGRADE_DEFINITIONS.map(upgrade => [upgrade.id, upgrade])
        );

        // Temporary run upgrades. All values are capped so long runs cannot
        // create unsafe speed, fire-rate, armor, or projectile counts.
        const UPGRADE_DEFINITIONS = [
            { id: 'speed', stat: 'speed', icon: '⚡', name: 'Engine Boost', amount: 15, maxTier: 7, minLevel: 2, description: 'Movement speed +15%' },
            { id: 'damage', stat: 'damage', icon: '💥', name: 'Plasma Power', amount: 20, maxTier: 10, minLevel: 2, description: 'Damage +20%' },
            { id: 'fireRate', stat: 'fireRate', icon: '🔥', name: 'Rapid Loader', amount: 15, maxTier: 8, minLevel: 2, description: 'Fire rate +15%' },
            { id: 'maxHp', stat: 'maxHp', icon: '❤️', name: 'Reinforced Hull', amount: 20, maxTier: 10, minLevel: 2, description: 'Maximum health +20' },
            { id: 'regen', stat: 'regen', icon: '🔄', name: 'Repair Nanites', amount: 1, maxTier: 10, minLevel: 4, description: 'Health regeneration +1/s' },
            { id: 'armor', stat: 'armor', icon: '🛡️', name: 'Armor Plating', amount: 5, maxTier: 8, minLevel: 5, description: 'Armor +5' },
            { id: 'multishot', stat: 'multishot', icon: '🎯', name: 'Triple Shot', amount: 1, maxTier: 1, minLevel: 10, description: 'Fire three plasma bolts' },
            { id: 'piercing', stat: 'piercing', icon: '➠', name: 'Piercing Plasma', amount: 1, maxTier: 2, minLevel: 6, description: 'Projectiles pass through +1 enemy' },
            { id: 'explosive', stat: 'explosive', icon: '💣', name: 'Explosive Impact', amount: 0.15, maxTier: 3, minLevel: 7, description: 'Hits damage nearby enemies' },
            { id: 'ricochet', stat: 'ricochet', icon: '↩', name: 'Ricochet', amount: 1, maxTier: 2, minLevel: 8, description: 'Projectiles bounce from walls' },
            { id: 'homing', stat: 'homing', icon: '🧲', name: 'Homing Guidance', amount: 0.08, maxTier: 3, minLevel: 8, description: 'Projectiles steer toward targets' },
            { id: 'critChance', stat: 'critChance', icon: '✦', name: 'Critical Core', amount: 0.05, maxTier: 5, minLevel: 6, description: '+5% critical-hit chance' },
            { id: 'emergencyShield', stat: 'emergencyShield', icon: '🔰', name: 'Emergency Shield', amount: 1, maxTier: 1, minLevel: 7, description: 'Reduces a dangerous hit; 20s recharge' },
            { id: 'reactiveArmor', stat: 'reactiveArmor', icon: '⬡', name: 'Reactive Armor', amount: 1, maxTier: 1, minLevel: 8, description: 'Reduces one hit; 8s recharge' },
            { id: 'lastStand', stat: 'lastStand', icon: '⚠', name: 'Last Stand', amount: 1, maxTier: 1, minLevel: 7, description: 'Fire 30% faster below 25% health' },
            { id: 'repairBurst', stat: 'repairBurst', icon: '✚', name: 'Repair Burst', amount: 1, maxTier: 3, minLevel: 6, description: 'Every 5 kills restores health' },
            { id: 'turboTracks', stat: 'turboTracks', icon: '🏎', name: 'Turbo Tracks', amount: 1, maxTier: 1, minLevel: 5, description: 'Move faster after avoiding damage' },
            { id: 'phaseDash', stat: 'phaseDash', icon: '💨', name: 'Phase Dash', amount: 1, maxTier: 1, minLevel: 6, description: 'Double-tap movement zone to dash' },
            { id: 'lightweight', stat: 'lightweight', icon: '🪶', name: 'Lightweight Frame', amount: 1, maxTier: 1, minLevel: 5, description: '+25% speed but -20 maximum health', custom: true }
        ];
        const UPGRADE_BY_ID = new Map(UPGRADE_DEFINITIONS.map(upgrade => [upgrade.id, upgrade]));
        const EVOLUTION_DEFINITIONS = [
            { id: 'plasmaBarrage', name: 'Plasma Barrage', requirements: { damage: 3, multishot: 1 } },
            { id: 'fortressProtocol', name: 'Fortress Protocol', requirements: { armor: 4, maxHp: 4 } },
            { id: 'mobileRepair', name: 'Mobile Repair Unit', requirements: { speed: 3, regen: 3 } },
            { id: 'infernoCannon', name: 'Inferno Cannon', requirements: { fireRate: 3, explosive: 2 } },
            { id: 'railgunCore', name: 'Railgun Core', requirements: { piercing: 2, critChance: 3 } }
        ];
        const EVOLUTION_BY_ID = new Map(EVOLUTION_DEFINITIONS.map(item => [item.id, item]));
        const SAVE_VERSION = 1;
        const PROFILE_STORAGE_KEY = 'tank_realms_profile_v1';
        const ACTIVE_RUN_STORAGE_KEY = 'tank_realms_active_run_v1';

        const CONFIG = {
            playerSpeed: 18,
            bulletSpeed: 60,
            fireRate: 0.25,
            baseDamage: 22,
            touchControlTopRatio: 0.3
        };

        const QUALITY_PRESETS = {
            low: {
                label: 'Low',
                maxPixelRatio: 0.8,
                shadowType: THREE.BasicShadowMap,
                shadowMapSize: 512,
                backgroundDecorationRatio: 0.35,
                ambientParticleRatio: 0.35,
                effectParticleRatio: 0.5,
                dynamicLights: false
            },
            medium: {
                label: 'Medium',
                maxPixelRatio: 1,
                shadowType: THREE.PCFShadowMap,
                shadowMapSize: 1024,
                backgroundDecorationRatio: 0.65,
                ambientParticleRatio: 0.67,
                effectParticleRatio: 0.75,
                dynamicLights: true
            },
            high: {
                label: 'High',
                maxPixelRatio: 1.25,
                shadowType: THREE.PCFSoftShadowMap,
                shadowMapSize: 1024,
                backgroundDecorationRatio: 1,
                ambientParticleRatio: 1,
                effectParticleRatio: 1,
                dynamicLights: true
            }
        };
        const QUALITY_ORDER = ['low', 'medium', 'high'];

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

        function calculateDamageAfterArmor(amount, armor) {
            const safeArmor = Math.max(0, armor);
            return Math.max(1, amount * 75 / (75 + safeArmor));
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
            multishot: 0,
            piercing: 0,
            explosive: 0,
            ricochet: 0,
            homing: 0,
            critChance: 0,
            emergencyShield: 0,
            reactiveArmor: 0,
            lastStand: 0,
            repairBurst: 0,
            turboTracks: 0,
            phaseDash: 0,
            lightweight: 0
        });

        function createDefaultPlayerStats() {
            return { ...DEFAULT_PLAYER_STATS };
        }

        function createDefaultUpgradeTiers() {
            return Object.fromEntries(UPGRADE_DEFINITIONS.map(upgrade => [upgrade.id, 0]));
        }

        function createDefaultPermanentUpgradeTiers() {
            return Object.fromEntries(
                PERMANENT_UPGRADE_DEFINITIONS.map(upgrade => [upgrade.id, 0])
            );
        }

        function createDefaultTankUpgradeCollection() {
            return Object.fromEntries(
                TANK_DESIGN_LIST.map(tank => [tank.id, createDefaultPermanentUpgradeTiers()])
            );
        }

        function createDefaultProfile() {
            return {
                version: SAVE_VERSION,
                bestScore: 0,
                bestLevel: 1,
                coins: 0,
                ownedTanks: ['vanguard'],
                selectedTankId: 'vanguard',
                tankUpgrades: createDefaultTankUpgradeCollection(),
                tutorialCompleted: false,
                settings: {
                    soundEnabled: false,
                    cameraMode: 'follow',
                    controlAssist: false,
                    qualityMode: 'medium',
                    effectsVolume: 0.7,
                    hapticsEnabled: true,
                    cameraShakeMode: 'full',
                    reducedFlashes: false,
                    leftHanded: false,
                    hudScale: 'normal'
                }
            };
        }

        function createDefaultRunStats() {
            return {
                kills: 0,
                highestCombo: 0,
                coinsEarned: 0,
                elapsedSeconds: 0,
                upgradeHistory: []
            };
        }

        function createDefaultAbilityState() {
            return {
                timeSinceDamage: 999,
                reactiveReadyIn: 0,
                emergencyReadyIn: 0,
                dashReadyIn: 0,
                lastMoveTapAt: -Infinity
            };
        }

        let profile = createDefaultProfile();
        let cachedActiveRun = null;
        let storageAvailable = true;

        let state = {
            gamePhase: 'menu', // menu | playing | paused | gameover
            isPlaying: false,
            score: 0,
            xp: 0,
            level: 1,
            xpToNext: 100,
            currentBiome: 0,
            realmProgress: 0,
            guardianPending: false,
            activeObjective: null,
            lastObjectiveRealm: -1,
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
            qualityMode: 'medium',
            effectsVolume: 0.7,
            hapticsEnabled: true,
            cameraShakeMode: 'full',
            reducedFlashes: false,
            leftHanded: false,
            hudScale: 'normal',
            settingsOpen: false,
            garageOpen: false,
            tutorialOpen: false,
            tutorialStep: 0,
            tutorialReturnTarget: 'playing',
            newRunConfirmOpen: false,
            runStats: createDefaultRunStats(),
            upgradeTiers: createDefaultUpgradeTiers(),
            evolutions: [],
            abilityState: createDefaultAbilityState(),
            runTankId: 'vanguard',
            runPermanentUpgrades: createDefaultPermanentUpgradeTiers(),
            runBaseStats: createDefaultPlayerStats(),
            comboCount: 0,
            comboTimer: 0,
            comboMultiplier: 1,
            pendingUpgradeCount: 0,
            currentUpgradeChoices: [],
            lastAutoSaveTime: 0
        };

        let audioCtx = null;
        let noiseBuffer = null;
        let lastHapticTime = -Infinity;
        const lastSoundTimes = new Map();

        // Three.js Globals
        let scene, camera, renderer, clock;
        let player, activeBoss = null, objectiveBeacon = null;
        let bullets = [], enemies = [], particles = [], environmentObjects = [];
        let artilleryStrikes = [], mines = [];
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

        function getQualityPreset() {
            return QUALITY_PRESETS[state.qualityMode] || QUALITY_PRESETS.medium;
        }

        function getQualityAdjustedCount(fullCount, minimum = 1) {
            return Math.max(
                minimum,
                Math.round(fullCount * getQualityPreset().effectParticleRatio)
            );
        }

        function configureQualityOptionalLight(light) {
            light.userData.qualityOptionalLight = true;
            light.visible = getQualityPreset().dynamicLights;
            return light;
        }

        function applySceneQualityVisibility() {
            const preset = getQualityPreset();
            environmentObjects.forEach(object => {
                if (object.userData.qualityCategory === 'background-decoration') {
                    object.count = Math.max(
                        1,
                        Math.round(
                            object.userData.fullInstanceCount * preset.backgroundDecorationRatio
                        )
                    );
                }
            });
            environmentParticleBatches.forEach(batch => {
                batch.count = Math.max(
                    1,
                    Math.round(batch.userData.fullInstanceCount * preset.ambientParticleRatio)
                );
            });
            if (scene) {
                scene.traverse(object => {
                    if (object.userData?.qualityOptionalLight) {
                        object.visible = preset.dynamicLights;
                    }
                });
            }
        }

        function applyQualitySettings() {
            const preset = getQualityPreset();
            if (renderer) {
                renderer.setPixelRatio(
                    Math.min(window.devicePixelRatio || 1, preset.maxPixelRatio)
                );
                renderer.shadowMap.enabled = true;
                renderer.shadowMap.type = preset.shadowType;
            }
            if (dirLight) {
                if (dirLight.shadow.map) {
                    dirLight.shadow.map.dispose();
                    dirLight.shadow.map = null;
                }
                dirLight.shadow.mapSize.set(
                    preset.shadowMapSize,
                    preset.shadowMapSize
                );
            }
            applySceneQualityVisibility();
            if (scene) {
                scene.traverse(object => {
                    if (!object.isMesh) return;
                    const materials = Array.isArray(object.material)
                        ? object.material
                        : [object.material];
                    materials.filter(Boolean).forEach(material => {
                        material.needsUpdate = true;
                    });
                });
            }
        }

        function toggleQualityMode() {
            const currentIndex = QUALITY_ORDER.indexOf(state.qualityMode);
            state.qualityMode = QUALITY_ORDER[(currentIndex + 1) % QUALITY_ORDER.length];
            applyQualitySettings();
            syncHUDControls();
            saveProfile();
        }

        function applyAccessibilityClasses() {
            document.body.classList.toggle('reduced-flashes', state.reducedFlashes);
            document.body.classList.toggle('hud-large', state.hudScale === 'large');
        }

        function toggleHaptics() {
            state.hapticsEnabled = !state.hapticsEnabled;
            if (state.hapticsEnabled) triggerHaptic('light');
            syncHUDControls();
            saveProfile();
        }

        function toggleCameraShakeMode() {
            const modes = ['off', 'reduced', 'full'];
            state.cameraShakeMode = modes[(modes.indexOf(state.cameraShakeMode) + 1) % modes.length];
            syncHUDControls();
            saveProfile();
        }

        function toggleReducedFlashes() {
            state.reducedFlashes = !state.reducedFlashes;
            applyAccessibilityClasses();
            syncHUDControls();
            saveProfile();
        }

        function toggleHandedControls() {
            state.leftHanded = !state.leftHanded;
            syncHUDControls();
            saveProfile();
        }

        function toggleHudScale() {
            state.hudScale = state.hudScale === 'large' ? 'normal' : 'large';
            applyAccessibilityClasses();
            syncHUDControls();
            saveProfile();
        }

        function setEffectsVolume(percent) {
            state.effectsVolume = clampSavedNumber(percent, 0, 100, 70) / 100;
            syncHUDControls();
            saveProfile();
        }

        function getCameraShakeScale() {
            if (state.cameraShakeMode === 'off') return 0;
            if (state.cameraShakeMode === 'reduced') return 0.45;
            return 1;
        }

        function getFlashScale() {
            return state.reducedFlashes ? 0.3 : 1;
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

        function clampSavedNumber(value, min, max, fallback, integer = false) {
            const number = Number(value);
            if (!Number.isFinite(number)) return fallback;
            const clamped = Math.max(min, Math.min(max, number));
            return integer ? Math.floor(clamped) : clamped;
        }

        function sanitizePermanentUpgradeTiers(savedTiers) {
            const tiers = createDefaultPermanentUpgradeTiers();
            PERMANENT_UPGRADE_DEFINITIONS.forEach(upgrade => {
                tiers[upgrade.id] = clampSavedNumber(
                    savedTiers?.[upgrade.id],
                    0,
                    upgrade.maxTier,
                    0,
                    true
                );
            });
            return tiers;
        }

        function getPermanentBaseStats(permanentTiers) {
            const stats = createDefaultPlayerStats();
            PERMANENT_UPGRADE_DEFINITIONS.forEach(upgrade => {
                const tier = clampSavedNumber(
                    permanentTiers?.[upgrade.id],
                    0,
                    upgrade.maxTier,
                    0,
                    true
                );
                stats[upgrade.stat] += upgrade.amount * tier;
            });
            return stats;
        }

        function deriveUnlockedEvolutions(upgradeTiers) {
            return EVOLUTION_DEFINITIONS.filter(evolution =>
                Object.entries(evolution.requirements).every(([upgradeId, requiredTier]) =>
                    (upgradeTiers?.[upgradeId] || 0) >= requiredTier
                )
            ).map(evolution => evolution.id);
        }

        function getStatsFromUpgradeTiers(upgradeTiers, baseStats = DEFAULT_PLAYER_STATS) {
            const stats = { ...baseStats };
            UPGRADE_DEFINITIONS.forEach(upgrade => {
                const tier = clampSavedNumber(
                    upgradeTiers?.[upgrade.id],
                    0,
                    upgrade.maxTier,
                    0,
                    true
                );
                if (upgrade.id === 'lightweight' && tier > 0) {
                    stats.lightweight = 1;
                    stats.speed += 25;
                    stats.maxHp = Math.max(40, stats.maxHp - 20);
                } else {
                    stats[upgrade.stat] += upgrade.amount * tier;
                }
            });
            const evolutions = deriveUnlockedEvolutions(upgradeTiers);
            if (evolutions.includes('fortressProtocol')) {
                stats.maxHp += 30;
                stats.armor += 5;
            }
            if (evolutions.includes('mobileRepair')) stats.regen += 2;
            return stats;
        }

        function sanitizeUpgradeTiers(savedTiers) {
            const tiers = createDefaultUpgradeTiers();
            UPGRADE_DEFINITIONS.forEach(upgrade => {
                tiers[upgrade.id] = clampSavedNumber(
                    savedTiers?.[upgrade.id],
                    0,
                    upgrade.maxTier,
                    0,
                    true
                );
            });
            return tiers;
        }

        function readStorageJson(key) {
            if (!storageAvailable) return null;
            try {
                const rawValue = window.localStorage.getItem(key);
                if (!rawValue) return null;
                try {
                    return JSON.parse(rawValue);
                } catch {
                    window.localStorage.removeItem(key);
                    return null;
                }
            } catch {
                storageAvailable = false;
                return null;
            }
        }

        function writeStorageJson(key, value) {
            if (!storageAvailable) return false;
            try {
                window.localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch {
                storageAvailable = false;
                return false;
            }
        }

        function removeStorageValue(key) {
            if (!storageAvailable) return;
            try {
                window.localStorage.removeItem(key);
            } catch {
                storageAvailable = false;
            }
        }

        function sanitizeProfile(savedProfile) {
            const safeProfile = createDefaultProfile();
            if (!savedProfile || savedProfile.version !== SAVE_VERSION) return safeProfile;

            safeProfile.bestScore = clampSavedNumber(savedProfile.bestScore, 0, 1e12, 0, true);
            safeProfile.bestLevel = clampSavedNumber(savedProfile.bestLevel, 1, 10000, 1, true);
            safeProfile.coins = clampSavedNumber(savedProfile.coins, 0, 1e12, 0, true);
            safeProfile.ownedTanks = [...new Set([
                'vanguard',
                ...(Array.isArray(savedProfile.ownedTanks)
                    ? savedProfile.ownedTanks.filter(tankId => TANK_DESIGNS[tankId])
                    : [])
            ])];
            safeProfile.selectedTankId = safeProfile.ownedTanks.includes(savedProfile.selectedTankId)
                ? savedProfile.selectedTankId
                : 'vanguard';
            TANK_DESIGN_LIST.forEach(tank => {
                safeProfile.tankUpgrades[tank.id] = sanitizePermanentUpgradeTiers(
                    savedProfile.tankUpgrades?.[tank.id]
                );
            });
            safeProfile.settings.soundEnabled = savedProfile.settings?.soundEnabled === true;
            safeProfile.settings.cameraMode = savedProfile.settings?.cameraMode === 'wide' ? 'wide' : 'follow';
            safeProfile.tutorialCompleted = savedProfile.tutorialCompleted === true;
            safeProfile.settings.controlAssist = savedProfile.settings?.controlAssist === true;
            safeProfile.settings.qualityMode = QUALITY_PRESETS[savedProfile.settings?.qualityMode]
                ? savedProfile.settings.qualityMode
                : 'medium';
            safeProfile.settings.effectsVolume = clampSavedNumber(
                savedProfile.settings?.effectsVolume,
                0,
                1,
                0.7
            );
            safeProfile.settings.hapticsEnabled = savedProfile.settings?.hapticsEnabled !== false;
            safeProfile.settings.cameraShakeMode = ['off', 'reduced', 'full'].includes(
                savedProfile.settings?.cameraShakeMode
            ) ? savedProfile.settings.cameraShakeMode : 'full';
            safeProfile.settings.reducedFlashes = savedProfile.settings?.reducedFlashes === true;
            safeProfile.settings.leftHanded = savedProfile.settings?.leftHanded === true;
            safeProfile.settings.hudScale = savedProfile.settings?.hudScale === 'large'
                ? 'large'
                : 'normal';
            return safeProfile;
        }

        function saveProfile() {
            profile.version = SAVE_VERSION;
            profile.settings = {
                soundEnabled: state.soundEnabled,
                cameraMode: state.cameraMode,
                controlAssist: state.controlAssist,
                qualityMode: state.qualityMode,
                effectsVolume: state.effectsVolume,
                hapticsEnabled: state.hapticsEnabled,
                cameraShakeMode: state.cameraShakeMode,
                reducedFlashes: state.reducedFlashes,
                leftHanded: state.leftHanded,
                hudScale: state.hudScale
            };
            writeStorageJson(PROFILE_STORAGE_KEY, profile);
        }

        function updateBestProfile() {
            profile.bestScore = Math.max(profile.bestScore, Math.floor(state.score));
            profile.bestLevel = Math.max(profile.bestLevel, Math.floor(state.level));
            saveProfile();
        }

        function sanitizePosition(savedPosition) {
            return {
                x: clampSavedNumber(savedPosition?.x, -44, 44, 0),
                z: clampSavedNumber(savedPosition?.z, -44, 44, 0)
            };
        }

        function sanitizeRunStats(savedStats) {
            return {
                kills: clampSavedNumber(savedStats?.kills, 0, 1e9, 0, true),
                highestCombo: clampSavedNumber(savedStats?.highestCombo, 0, 1000, 0, true),
                coinsEarned: clampSavedNumber(savedStats?.coinsEarned, 0, 1e12, 0, true),
                elapsedSeconds: clampSavedNumber(savedStats?.elapsedSeconds, 0, 1e9, 0),
                upgradeHistory: Array.isArray(savedStats?.upgradeHistory)
                    ? savedStats.upgradeHistory.filter(id => UPGRADE_BY_ID.has(id)).slice(0, 1000)
                    : []
            };
        }

        function sanitizeAbilityState(savedState) {
            return {
                timeSinceDamage: clampSavedNumber(savedState?.timeSinceDamage, 0, 1e9, 999),
                reactiveReadyIn: clampSavedNumber(savedState?.reactiveReadyIn, 0, 60, 0),
                emergencyReadyIn: clampSavedNumber(savedState?.emergencyReadyIn, 0, 120, 0),
                dashReadyIn: clampSavedNumber(savedState?.dashReadyIn, 0, 30, 0),
                lastMoveTapAt: -Infinity
            };
        }

        function sanitizeObjective(savedObjective) {
            const definition = REALM_OBJECTIVES.find(item => item.type === savedObjective?.type);
            if (!definition) return null;
            return {
                ...definition,
                progress: clampSavedNumber(savedObjective.progress, 0, definition.target, 0),
                elapsed: clampSavedNumber(savedObjective.elapsed, 0, definition.target, 0),
                startScore: clampSavedNumber(savedObjective.startScore, 0, 1e12, 0, true),
                beaconHp: clampSavedNumber(savedObjective.beaconHp, 0, 100, 100)
            };
        }

        function sanitizeActiveRun(savedRun) {
            if (!savedRun || savedRun.version !== SAVE_VERSION || savedRun.alive !== true) return null;

            const upgradeTiers = sanitizeUpgradeTiers(savedRun.upgradeTiers);
            const runTankId = TANK_DESIGNS[savedRun.runTankId]
                ? savedRun.runTankId
                : 'vanguard';
            const runPermanentUpgrades = sanitizePermanentUpgradeTiers(
                savedRun.runPermanentUpgrades
            );
            const runBaseStats = getPermanentBaseStats(runPermanentUpgrades);
            const playerStats = getStatsFromUpgradeTiers(upgradeTiers, runBaseStats);
            const playerHp = clampSavedNumber(savedRun.player?.hp, 0, playerStats.maxHp, 0);
            if (playerHp <= 0) return null;

            const level = clampSavedNumber(savedRun.level, 1, 10000, 1, true);
            const xpToNext = clampSavedNumber(savedRun.xpToNext, 1, 1e12, 100, true);
            const pendingUpgradeCount = clampSavedNumber(
                savedRun.pendingUpgradeCount,
                0,
                20,
                0,
                true
            );
            const uniqueChoiceIds = [...new Set(
                Array.isArray(savedRun.currentUpgradeChoices)
                    ? savedRun.currentUpgradeChoices.filter(id => UPGRADE_BY_ID.has(id))
                    : []
            )].slice(0, 3);

            const enemies = Array.isArray(savedRun.enemies)
                ? savedRun.enemies.slice(0, 12).flatMap(savedEnemy => {
                    const typeData = ENEMY_TYPES[savedEnemy?.type];
                    if (!typeData) return [];
                    return [{
                        type: savedEnemy.type,
                        hp: clampSavedNumber(savedEnemy.hp, 1, typeData.hp, typeData.hp),
                        position: sanitizePosition(savedEnemy.position),
                        rotationY: clampSavedNumber(
                            savedEnemy.rotationY,
                            -Math.PI * 2,
                            Math.PI * 2,
                            0
                        ),
                        objectiveTarget: savedEnemy.objectiveTarget === true
                    }];
                })
                : [];

            return {
                version: SAVE_VERSION,
                alive: true,
                savedAt: clampSavedNumber(savedRun.savedAt, 0, Number.MAX_SAFE_INTEGER, Date.now(), true),
                score: clampSavedNumber(savedRun.score, 0, 1e12, 0, true),
                runStats: sanitizeRunStats(savedRun.runStats),
                xp: clampSavedNumber(savedRun.xp, 0, xpToNext - 1, 0),
                level,
                xpToNext,
                currentBiome: clampSavedNumber(savedRun.currentBiome, 0, BIOMES.length - 1, 0, true),
                realmProgress: clampSavedNumber(savedRun.realmProgress, 0, 10000, 0, true),
                guardianPending: savedRun.guardianPending === true,
                activeObjective: sanitizeObjective(savedRun.activeObjective),
                lastObjectiveRealm: clampSavedNumber(savedRun.lastObjectiveRealm, -1, 10000, -1, true),
                upgradeTiers,
                evolutions: deriveUnlockedEvolutions(upgradeTiers),
                abilityState: sanitizeAbilityState(savedRun.abilityState),
                runTankId,
                runPermanentUpgrades,
                runBaseStats,
                comboCount: clampSavedNumber(savedRun.comboCount, 0, 1000, 0, true),
                comboTimer: clampSavedNumber(savedRun.comboTimer, 0, 3, 0),
                playerStats,
                player: {
                    hp: playerHp,
                    position: sanitizePosition(savedRun.player?.position),
                    rotationY: clampSavedNumber(
                        savedRun.player?.rotationY,
                        -Math.PI * 2,
                        Math.PI * 2,
                        0
                    )
                },
                enemies,
                enemiesIntroduced: Array.isArray(savedRun.enemiesIntroduced)
                    ? savedRun.enemiesIntroduced.filter(type => ENEMY_TYPES[type])
                    : [],
                pendingUpgradeCount,
                currentUpgradeChoices: uniqueChoiceIds
            };
        }

        function updateContinueButton() {
            const continueButton = document.getElementById('btn-continue');
            if (!continueButton) return;
            continueButton.classList.toggle('available', Boolean(cachedActiveRun));
            continueButton.setAttribute('aria-hidden', cachedActiveRun ? 'false' : 'true');
        }

        function loadPersistentData() {
            profile = sanitizeProfile(readStorageJson(PROFILE_STORAGE_KEY));
            state.soundEnabled = profile.settings.soundEnabled;
            state.cameraMode = profile.settings.cameraMode;
            state.controlAssist = profile.settings.controlAssist;
            state.qualityMode = profile.settings.qualityMode;
            state.effectsVolume = profile.settings.effectsVolume;
            state.hapticsEnabled = profile.settings.hapticsEnabled;
            state.cameraShakeMode = profile.settings.cameraShakeMode;
            state.reducedFlashes = profile.settings.reducedFlashes;
            state.leftHanded = profile.settings.leftHanded;
            state.hudScale = profile.settings.hudScale;
            applyAccessibilityClasses();
            cachedActiveRun = sanitizeActiveRun(readStorageJson(ACTIVE_RUN_STORAGE_KEY));
            if (!cachedActiveRun) removeStorageValue(ACTIVE_RUN_STORAGE_KEY);
            updateContinueButton();
        }

        function createActiveRunSnapshot() {
            if (!player || !state.isPlaying || state.gamePhase === 'gameover') return null;
            return {
                version: SAVE_VERSION,
                alive: player.hp > 0,
                savedAt: Date.now(),
                score: state.score,
                runStats: {
                    ...state.runStats,
                    upgradeHistory: [...state.runStats.upgradeHistory]
                },
                xp: state.xp,
                level: state.level,
                xpToNext: state.xpToNext,
                currentBiome: state.currentBiome,
                realmProgress: state.realmProgress,
                guardianPending: state.guardianPending,
                activeObjective: state.activeObjective ? { ...state.activeObjective } : null,
                lastObjectiveRealm: state.lastObjectiveRealm,
                upgradeTiers: { ...state.upgradeTiers },
                evolutions: [...state.evolutions],
                abilityState: { ...state.abilityState, lastMoveTapAt: 0 },
                runTankId: state.runTankId,
                runPermanentUpgrades: { ...state.runPermanentUpgrades },
                comboCount: state.comboCount,
                comboTimer: state.comboTimer,
                player: {
                    hp: player.hp,
                    position: {
                        x: player.mesh.position.x,
                        z: player.mesh.position.z
                    },
                    rotationY: player.mesh.rotation.y
                },
                enemies: enemies.filter(enemy => !enemy.isDead).map(enemy => ({
                    type: enemy.type,
                    hp: enemy.hp,
                    position: {
                        x: enemy.mesh.position.x,
                        z: enemy.mesh.position.z
                    },
                    rotationY: enemy.mesh.rotation.y,
                    objectiveTarget: enemy.isObjectiveTarget === true
                })),
                enemiesIntroduced: [...state.enemiesIntroduced],
                pendingUpgradeCount: state.pendingUpgradeCount,
                currentUpgradeChoices: [...state.currentUpgradeChoices]
            };
        }

        function saveActiveRun() {
            const snapshot = createActiveRunSnapshot();
            if (!snapshot) return false;
            if (!writeStorageJson(ACTIVE_RUN_STORAGE_KEY, snapshot)) return false;
            cachedActiveRun = sanitizeActiveRun(snapshot);
            profile.bestScore = Math.max(profile.bestScore, Math.floor(state.score));
            profile.bestLevel = Math.max(profile.bestLevel, Math.floor(state.level));
            saveProfile();
            updateContinueButton();
            return true;
        }

        function clearActiveRunSave() {
            cachedActiveRun = null;
            removeStorageValue(ACTIVE_RUN_STORAGE_KEY);
            updateContinueButton();
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
            renderer.shadowMap.enabled = true;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.0;
            applyQualitySettings();
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

        function playTone({
            frequency = 440,
            duration = 0.08,
            type = 'sine',
            gain = 0.03,
            slideTo = null,
            delay = 0
        } = {}) {
            if (!state.soundEnabled || state.effectsVolume <= 0) return;
            const ctx = ensureAudioContext();
            if (!ctx) return;
            const startTime = ctx.currentTime + delay;
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(frequency, startTime);
            if (slideTo !== null) {
                osc.frequency.exponentialRampToValueAtTime(
                    Math.max(20, slideTo),
                    startTime + duration
                );
            }
            g.gain.setValueAtTime(gain * state.effectsVolume, startTime);
            g.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
            osc.connect(g);
            g.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + duration + 0.02);
        }

        function playNoise({ duration = 0.12, gain = 0.04, delay = 0 } = {}) {
            if (!state.soundEnabled || state.effectsVolume <= 0) return;
            const ctx = ensureAudioContext();
            if (!ctx) return;
            if (!noiseBuffer || noiseBuffer.sampleRate !== ctx.sampleRate) {
                noiseBuffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
                const data = noiseBuffer.getChannelData(0);
                for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
            }
            const source = ctx.createBufferSource();
            const filter = ctx.createBiquadFilter();
            const g = ctx.createGain();
            const startTime = ctx.currentTime + delay;
            source.buffer = noiseBuffer;
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(900, startTime);
            g.gain.setValueAtTime(gain * state.effectsVolume, startTime);
            g.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
            source.connect(filter);
            filter.connect(g);
            g.connect(ctx.destination);
            source.start(startTime);
            source.stop(startTime + duration + 0.02);
        }

        function canPlaySound(name, minimumGapMs) {
            const now = performance.now();
            const previous = lastSoundTimes.get(name) || -Infinity;
            if (now - previous < minimumGapMs) return false;
            lastSoundTimes.set(name, now);
            return true;
        }

        function playGameSound(name, variant = 'vanguard') {
            if (!state.soundEnabled || state.effectsVolume <= 0) return;
            const gaps = {
                playerFire: 40,
                enemyFire: 75,
                impact: 45,
                explosion: 90,
                damage: 100,
                combo: 60,
                coin: 45
            };
            if (!canPlaySound(name, gaps[name] || 20)) return;

            switch (name) {
                case 'playerFire': {
                    const base = variant === 'ember' ? 250 : variant === 'azure' ? 520 : 390;
                    playTone({ frequency: base, slideTo: base * 1.8, duration: 0.08, type: 'sawtooth', gain: 0.035 });
                    playTone({ frequency: base * 2, slideTo: base, duration: 0.06, type: 'triangle', gain: 0.02 });
                    break;
                }
                case 'enemyFire':
                    playTone({ frequency: 180, slideTo: 90, duration: 0.11, type: 'square', gain: 0.028 });
                    break;
                case 'impact':
                    playNoise({ duration: 0.07, gain: 0.028 });
                    playTone({ frequency: 120, slideTo: 70, duration: 0.08, type: 'triangle', gain: 0.018 });
                    break;
                case 'explosion':
                    playNoise({ duration: 0.28, gain: 0.06 });
                    playTone({ frequency: 95, slideTo: 38, duration: 0.3, type: 'sawtooth', gain: 0.04 });
                    break;
                case 'damage':
                    playTone({ frequency: 160, slideTo: 70, duration: 0.16, type: 'sawtooth', gain: 0.04 });
                    break;
                case 'levelUp':
                    [440, 660, 880].forEach((frequency, index) =>
                        playTone({ frequency, duration: 0.14, type: 'triangle', gain: 0.03, delay: index * 0.08 })
                    );
                    break;
                case 'upgrade':
                    playTone({ frequency: 620, slideTo: 980, duration: 0.16, type: 'triangle', gain: 0.032 });
                    break;
                case 'combo':
                    playTone({ frequency: 520 + state.comboCount * 35, duration: 0.07, type: 'square', gain: 0.022 });
                    break;
                case 'comboLost':
                    playTone({ frequency: 300, slideTo: 150, duration: 0.13, type: 'triangle', gain: 0.018 });
                    break;
                case 'coin':
                    playTone({ frequency: 900, slideTo: 1250, duration: 0.05, type: 'sine', gain: 0.018 });
                    break;
                case 'purchase':
                    playTone({ frequency: 500, duration: 0.08, type: 'triangle', gain: 0.025 });
                    playTone({ frequency: 750, duration: 0.11, type: 'triangle', gain: 0.025, delay: 0.07 });
                    break;
                case 'unlock':
                    [360, 540, 720, 960].forEach((frequency, index) =>
                        playTone({ frequency, duration: 0.13, type: 'triangle', gain: 0.028, delay: index * 0.07 })
                    );
                    break;
                case 'gameOver':
                    [300, 220, 150].forEach((frequency, index) =>
                        playTone({ frequency, duration: 0.2, type: 'sawtooth', gain: 0.025, delay: index * 0.12 })
                    );
                    break;
                case 'bossWarning':
                    playTone({ frequency: 130, duration: 0.5, type: 'square', gain: 0.04 });
                    break;
                default:
                    playTone({ frequency: 660, duration: 0.05, type: 'triangle', gain: 0.025 });
            }
        }

        function triggerHaptic(style = 'light') {
            if (!state.hapticsEnabled) return;
            const now = performance.now();
            const minimumGap = style === 'heavy' ? 100 : style === 'medium' ? 70 : 45;
            if (now - lastHapticTime < minimumGap) return;
            lastHapticTime = now;
            if (window.TankRealmsNative?.impact) {
                window.TankRealmsNative.impact(style);
            } else if (navigator.vibrate) {
                navigator.vibrate(style === 'heavy' ? 35 : style === 'medium' ? 20 : 10);
            }
        }

        function playUISound() { playGameSound('ui'); }
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
            const qualityPanel = document.getElementById('toggle-quality-panel');
            const hapticsPanel = document.getElementById('toggle-haptics-panel');
            const shakePanel = document.getElementById('toggle-shake-panel');
            const flashesPanel = document.getElementById('toggle-flashes-panel');
            const handedPanel = document.getElementById('toggle-handed-panel');
            const hudScalePanel = document.getElementById('toggle-hud-scale-panel');
            const volumeSlider = document.getElementById('effects-volume');
            const volumeValue = document.getElementById('effects-volume-value');
            if (btnSound) btnSound.textContent = state.soundEnabled ? '🔊' : '🔇';
            if (btnCamera) btnCamera.textContent = state.cameraMode === 'follow' ? '📷' : '🎥';
            if (btnAssist) btnAssist.textContent = state.controlAssist ? '🎯' : '◌';
            if (sndPanel) sndPanel.textContent = `Sound: ${state.soundEnabled ? 'On' : 'Off'}`;
            if (camPanel) camPanel.textContent = `Camera: ${state.cameraMode === 'follow' ? 'Follow' : 'Wide'}`;
            if (astPanel) astPanel.textContent = `Assist: ${state.controlAssist ? 'On' : 'Off'}`;
            if (qualityPanel) qualityPanel.textContent = `Quality: ${getQualityPreset().label}`;
            if (hapticsPanel) hapticsPanel.textContent = `Haptics: ${state.hapticsEnabled ? 'On' : 'Off'}`;
            if (shakePanel) {
                const label = state.cameraShakeMode === 'reduced' ? 'Reduced' :
                    state.cameraShakeMode === 'off' ? 'Off' : 'Full';
                shakePanel.textContent = `Shake: ${label}`;
            }
            if (flashesPanel) flashesPanel.textContent = `Flashes: ${state.reducedFlashes ? 'Reduced' : 'Full'}`;
            if (handedPanel) handedPanel.textContent = `Controls: ${state.leftHanded ? 'Left-handed' : 'Standard'}`;
            if (hudScalePanel) hudScalePanel.textContent = `HUD: ${state.hudScale === 'large' ? 'Large' : 'Normal'}`;
            if (volumeSlider) volumeSlider.value = String(Math.round(state.effectsVolume * 100));
            if (volumeValue) volumeValue.textContent = `${Math.round(state.effectsVolume * 100)}%`;
        }

        function toggleSound() {
            state.soundEnabled = !state.soundEnabled;
            if (state.soundEnabled) ensureAudioContext();
            playUISound();
            syncHUDControls();
            saveProfile();
        }

        function toggleCameraMode() {
            state.cameraMode = state.cameraMode === 'follow' ? 'wide' : 'follow';
            playUISound();
            syncHUDControls();
            saveProfile();
        }

        function toggleControlAssist() {
            state.controlAssist = !state.controlAssist;
            playUISound();
            syncHUDControls();
            saveProfile();
        }

        function formatCompactNumber(value) {
            if (value >= 1e9) return `${(value / 1e9).toFixed(value >= 1e10 ? 0 : 1)}B`;
            if (value >= 1e6) return `${(value / 1e6).toFixed(value >= 1e7 ? 0 : 1)}M`;
            if (value >= 1e3) return `${(value / 1e3).toFixed(value >= 1e4 ? 0 : 1)}K`;
            return String(Math.floor(value));
        }

        function getPermanentUpgradeCost(upgrade, currentTier) {
            return upgrade.baseCost * (currentTier + 1);
        }

        function colorToCss(color) {
            return `#${color.toString(16).padStart(6, '0')}`;
        }

        function unlockTank(tankId) {
            if (state.gamePhase !== 'menu') return;
            const tank = TANK_DESIGNS[tankId];
            if (!tank || profile.ownedTanks.includes(tankId) || profile.coins < tank.unlockCost) return;
            profile.coins -= tank.unlockCost;
            profile.ownedTanks.push(tankId);
            profile.selectedTankId = tankId;
            playGameSound('unlock');
            triggerHaptic('heavy');
            saveProfile();
            updateHUD();
            renderGarage();
        }

        function selectTank(tankId) {
            if (state.gamePhase !== 'menu' || !profile.ownedTanks.includes(tankId)) return;
            profile.selectedTankId = tankId;
            saveProfile();
            renderGarage();
        }

        function buyPermanentUpgrade(tankId, upgradeId) {
            if (state.gamePhase !== 'menu' || !profile.ownedTanks.includes(tankId)) return;
            const upgrade = PERMANENT_UPGRADE_BY_ID.get(upgradeId);
            const tankTiers = profile.tankUpgrades[tankId];
            if (!upgrade || !tankTiers) return;
            const currentTier = tankTiers[upgrade.id];
            if (currentTier >= upgrade.maxTier) return;
            const cost = getPermanentUpgradeCost(upgrade, currentTier);
            if (profile.coins < cost) return;

            profile.coins -= cost;
            tankTiers[upgrade.id]++;
            playGameSound('purchase');
            triggerHaptic('medium');
            saveProfile();
            updateHUD();
            renderGarage();
        }

        function createTankPreview(tank) {
            const preview = document.createElement('div');
            preview.className = `tank-preview ${tank.id}`;
            preview.style.setProperty('--tank-color', colorToCss(tank.color));
            preview.style.setProperty('--tank-accent', colorToCss(tank.accentColor));
            ['body', 'turret', 'barrel'].forEach(part => {
                const element = document.createElement('span');
                element.className = `tank-preview-${part}`;
                preview.appendChild(element);
            });
            return preview;
        }

        function renderGarage() {
            const garageList = document.getElementById('garage-list');
            const garageCoins = document.getElementById('garage-coins');
            garageCoins.textContent = formatCompactNumber(profile.coins);
            garageList.replaceChildren();

            TANK_DESIGN_LIST.forEach(tank => {
                const owned = profile.ownedTanks.includes(tank.id);
                const selected = profile.selectedTankId === tank.id;
                const card = document.createElement('article');
                card.className = `tank-card${selected ? ' selected' : ''}${owned ? '' : ' locked'}`;

                const top = document.createElement('div');
                top.className = 'tank-card-top';
                top.appendChild(createTankPreview(tank));

                const info = document.createElement('div');
                info.className = 'tank-card-info';
                const name = document.createElement('h2');
                name.textContent = tank.name;
                const description = document.createElement('p');
                description.textContent = tank.description;
                info.append(name, description);
                top.appendChild(info);

                const action = document.createElement('button');
                action.type = 'button';
                action.className = 'garage-action';
                if (!owned) {
                    action.textContent = `Unlock 💰${formatCompactNumber(tank.unlockCost)}`;
                    action.disabled = profile.coins < tank.unlockCost;
                    action.addEventListener('click', () => unlockTank(tank.id));
                } else if (selected) {
                    action.textContent = 'Equipped';
                    action.disabled = true;
                } else {
                    action.textContent = 'Select';
                    action.addEventListener('click', () => selectTank(tank.id));
                }
                top.appendChild(action);
                card.appendChild(top);

                const upgrades = document.createElement('div');
                upgrades.className = 'tank-upgrades';
                PERMANENT_UPGRADE_DEFINITIONS.forEach(upgrade => {
                    const tier = profile.tankUpgrades[tank.id][upgrade.id];
                    const cost = tier < upgrade.maxTier
                        ? getPermanentUpgradeCost(upgrade, tier)
                        : 0;
                    const upgradeBox = document.createElement('div');
                    upgradeBox.className = 'tank-upgrade';
                    const label = document.createElement('strong');
                    label.textContent = upgrade.name;
                    const tierText = document.createElement('span');
                    tierText.textContent = `${tier}/${upgrade.maxTier}`;
                    const value = document.createElement('small');
                    value.textContent = tier > 0 ? `+${upgrade.amount * tier}` : 'Base';
                    const buyButton = document.createElement('button');
                    buyButton.type = 'button';
                    buyButton.disabled = !owned || tier >= upgrade.maxTier || profile.coins < cost;
                    buyButton.textContent = !owned
                        ? 'Locked'
                        : tier >= upgrade.maxTier
                            ? 'Max'
                            : `💰${formatCompactNumber(cost)}`;
                    buyButton.addEventListener('click', () =>
                        buyPermanentUpgrade(tank.id, upgrade.id)
                    );
                    upgradeBox.append(label, tierText, value, buyButton);
                    upgrades.appendChild(upgradeBox);
                });
                card.appendChild(upgrades);
                garageList.appendChild(card);
            });
        }

        function openGarage() {
            if (state.gamePhase !== 'menu') return;
            state.garageOpen = true;
            renderGarage();
            setScreenVisibility('start-screen', false);
            setScreenVisibility('garage-screen', true);
        }

        function closeGarage() {
            state.garageOpen = false;
            setScreenVisibility('garage-screen', false);
            setScreenVisibility('start-screen', true);
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
            const shadowMapSize = getQualityPreset().shadowMapSize;
            dirLight.shadow.mapSize.width = shadowMapSize;
            dirLight.shadow.mapSize.height = shadowMapSize;
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
            applySceneQualityVisibility();
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
                mesh.userData.fullInstanceCount = batch.matrices.length;
                if (batch.key.includes('background')) {
                    mesh.userData.qualityCategory = 'background-decoration';
                }
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

                const glowLight = configureQualityOptionalLight(
                    new THREE.PointLight(0xff4500, 2, 15)
                );
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
                    const glowLight = configureQualityOptionalLight(
                        new THREE.PointLight(crystalMat.color, 0.5, 8)
                    );
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
                mesh.userData.fullInstanceCount = batch.particles.length;
                mesh.userData.qualityCategory = 'ambient-particles';
                scene.add(mesh);
                environmentParticleBatches.push(mesh);
            });
        }

        // ============================================
        // HIGH-FIDELITY TANK CLASS
        // ============================================
        class Tank {
            constructor(color, isPlayer = false, type = 'soldier', designId = 'vanguard') {
                this.mesh = new THREE.Group();
                this.isPlayer = isPlayer;
                this.type = type;
                this.designId = isPlayer && TANK_DESIGNS[designId] ? designId : 'vanguard';
                this.typeData = isPlayer ? null : ENEMY_TYPES[type];

                const scale = isPlayer ? 1 : (this.typeData?.size || 1);

                this.hp = isPlayer ? state.playerStats.maxHp : (this.typeData?.hp || 50);
                this.maxHp = this.hp;
                this.isDead = false;
                this.lastHealTime = 0;
                this.nextBossAttackTime = 0;
                this.nextBossSpecialTime = 0;
                this.nextAbilityTime = 0;
                this.speedMultiplier = 1;
                this.damageMultiplier = 1;

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
                const barrelLength = type === 'sniper'
                    ? 4.8
                    : type === 'artillery' ? 5.2 : 3.4;
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

                // Cosmetic player designs. These meshes do not change hitboxes,
                // movement, damage, health, or any other base behavior.
                if (isPlayer && this.designId !== 'vanguard') {
                    const design = TANK_DESIGNS[this.designId];
                    const accentMat = new THREE.MeshStandardMaterial({
                        color: design.accentColor,
                        roughness: 0.35,
                        metalness: 0.7
                    });

                    if (this.designId === 'ember') {
                        [-1, 1].forEach(side => {
                            const sideArmor = new THREE.Mesh(
                                new THREE.BoxGeometry(0.22, 0.55, 2.8),
                                accentMat
                            );
                            sideArmor.position.set(side * 1.9, 0.82, 0.1);
                            sideArmor.rotation.z = side * -0.08;
                            sideArmor.castShadow = true;
                            this.mesh.add(sideArmor);

                            const turretFin = new THREE.Mesh(
                                new THREE.BoxGeometry(0.25, 0.32, 1.5),
                                accentMat
                            );
                            turretFin.position.set(side * 0.92, 0.58, 0.05);
                            turretFin.castShadow = true;
                            this.turretPivot.add(turretFin);
                        });
                    } else if (this.designId === 'azure') {
                        const shield = new THREE.Mesh(
                            new THREE.BoxGeometry(2.75, 0.75, 0.28),
                            accentMat
                        );
                        shield.position.set(0, 0.9, 2.22);
                        shield.rotation.x = -0.2;
                        shield.castShadow = true;
                        this.mesh.add(shield);

                        [-1, 1].forEach(side => {
                            const turretPod = new THREE.Mesh(
                                new THREE.BoxGeometry(0.58, 0.58, 1.45),
                                accentMat
                            );
                            turretPod.position.set(side * 1.02, 0.55, 0.05);
                            turretPod.castShadow = true;
                            this.turretPivot.add(turretPod);
                        });
                    }
                }

                if (this.typeData?.isBoss) {
                    const bossAccent = new THREE.MeshBasicMaterial({
                        color: 0xff4444,
                        transparent: true,
                        opacity: 0.72,
                        side: THREE.DoubleSide
                    });
                    const bossRing = new THREE.Mesh(
                        new THREE.RingGeometry(2.4 * scale, 2.7 * scale, 40),
                        bossAccent
                    );
                    bossRing.rotation.x = -Math.PI / 2;
                    bossRing.position.y = 0.12;
                    this.mesh.add(bossRing);
                    this.bossIndicator = bossRing;

                    const beacon = new THREE.Mesh(
                        new THREE.OctahedronGeometry(0.28 * scale),
                        new THREE.MeshStandardMaterial({
                            color: 0xff6666,
                            emissive: 0xff2222,
                            emissiveIntensity: 0.9,
                            roughness: 0.2
                        })
                    );
                    beacon.position.set(0, 2.75 * scale, -0.2 * scale);
                    this.mesh.add(beacon);
                }

                if (!isPlayer && type === 'shield') {
                    const shieldPlate = new THREE.Mesh(
                        new THREE.BoxGeometry(3.0 * scale, 1.45 * scale, 0.22 * scale),
                        new THREE.MeshStandardMaterial({
                            color: 0x38bdf8,
                            transparent: true,
                            opacity: 0.72,
                            metalness: 0.55
                        })
                    );
                    shieldPlate.position.set(0, 1.0 * scale, 2.35 * scale);
                    shieldPlate.castShadow = true;
                    this.mesh.add(shieldPlate);
                } else if (!isPlayer && type === 'commander') {
                    const aura = new THREE.Mesh(
                        new THREE.RingGeometry(3.2, 3.65, 36),
                        new THREE.MeshBasicMaterial({
                            color: 0xfb7185,
                            transparent: true,
                            opacity: 0.48,
                            side: THREE.DoubleSide
                        })
                    );
                    aura.rotation.x = -Math.PI / 2;
                    aura.position.y = 0.12;
                    this.mesh.add(aura);
                    this.commanderAura = aura;
                } else if (!isPlayer && type === 'reflector') {
                    const reflectorShield = new THREE.Mesh(
                        new THREE.SphereGeometry(2.55 * scale, 16, 10),
                        new THREE.MeshBasicMaterial({
                            color: 0xc4b5fd,
                            wireframe: true,
                            transparent: true,
                            opacity: 0.42
                        })
                    );
                    reflectorShield.position.y = 1.1 * scale;
                    this.mesh.add(reflectorShield);
                    this.reflectorShield = reflectorShield;
                } else if (!isPlayer && ['mineLayer', 'droneCarrier', 'artillery'].includes(type)) {
                    const equipmentMat = new THREE.MeshStandardMaterial({
                        color: darkColor,
                        roughness: 0.45,
                        metalness: 0.65
                    });
                    [-1, 1].forEach(side => {
                        const equipment = new THREE.Mesh(
                            new THREE.BoxGeometry(0.5 * scale, 0.5 * scale, 1.25 * scale),
                            equipmentMat
                        );
                        equipment.position.set(side * 1.15 * scale, 1.45 * scale, -0.65 * scale);
                        equipment.castShadow = true;
                        this.mesh.add(equipment);
                    });
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
                        if (state.playerStats.turboTracks > 0 &&
                            state.abilityState.timeSinceDamage >= 5) {
                            speed *= 1.15;
                        }
                    } else {
                        speed *= (this.typeData?.speed || 1) * 0.55 * this.speedMultiplier;
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
                let actualDamage = this.isPlayer
                    ? calculateDamageAfterArmor(amount, state.playerStats.armor)
                    : amount;
                if (this.isPlayer) {
                    if (state.evolutions.includes('fortressProtocol')) actualDamage *= 0.8;
                    if (state.playerStats.reactiveArmor > 0 &&
                        state.abilityState.reactiveReadyIn <= 0) {
                        actualDamage *= 0.55;
                        state.abilityState.reactiveReadyIn = 8;
                        showUpgradeNotification('⬡ Reactive Armor absorbed damage');
                    }
                    if (state.playerStats.emergencyShield > 0 &&
                        state.abilityState.emergencyReadyIn <= 0 &&
                        this.hp - actualDamage <= this.maxHp * 0.25) {
                        actualDamage *= 0.5;
                        state.abilityState.emergencyReadyIn = 20;
                        showUpgradeNotification('🔰 Emergency Shield activated');
                    }
                    state.abilityState.timeSinceDamage = 0;
                }
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
                if (this.bossIndicator) {
                    this.bossIndicator.rotation.z -= dt * 0.55;
                    this.bossIndicator.material.opacity =
                        0.58 + Math.sin(clock.getElapsedTime() * 3) * 0.14;
                }
                if (this.commanderAura) {
                    this.commanderAura.rotation.z += dt * 0.35;
                    this.commanderAura.material.opacity =
                        0.38 + Math.sin(clock.getElapsedTime() * 2) * 0.12;
                }
                if (this.reflectorShield) {
                    this.reflectorShield.rotation.y += dt * 0.6;
                    this.reflectorShield.visible = isReflectorShieldActive(this);
                }
            }
        }

        // ============================================
        // ENHANCED PROJECTILES - Glowing Plasma Bolts
        // ============================================
        function createProjectileGeometry(style, size) {
            if (style === 'bolt') return new THREE.OctahedronGeometry(size, 0);
            if (style === 'crystal') return new THREE.TetrahedronGeometry(size, 0);
            return new THREE.SphereGeometry(size);
        }

        function createBulletVisual(bulletColor, projectileStyle = 'orb') {
            const bulletGroup = new THREE.Group();

            const core = new THREE.Mesh(
                createProjectileGeometry(projectileStyle, projectileStyle === 'orb' ? 0.3 : 0.38),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
            );
            bulletGroup.add(core);

            const innerGlow = new THREE.Mesh(
                createProjectileGeometry(projectileStyle, 0.45),
                new THREE.MeshBasicMaterial({
                    color: bulletColor,
                    transparent: true,
                    opacity: 0.9
                })
            );
            bulletGroup.add(innerGlow);

            const outerGlow = new THREE.Mesh(
                createProjectileGeometry(projectileStyle, 0.65),
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

            const light = configureQualityOptionalLight(
                new THREE.PointLight(bulletColor, 2, 12)
            );
            bulletGroup.add(light);

            return {
                group: bulletGroup,
                innerGlow,
                outerGlow,
                light,
                trail,
                color: bulletColor,
                projectileStyle,
                poolKey: `${bulletColor}-${projectileStyle}`,
                previousPosition: new THREE.Vector3(),
                frameEndPosition: new THREE.Vector3(),
                hitEnemyIds: new Set()
            };
        }

        function acquireBulletVisual(bulletColor, projectileStyle = 'orb') {
            const poolKey = `${bulletColor}-${projectileStyle}`;
            const poolIndex = bulletPool.findIndex(bullet => bullet.poolKey === poolKey);
            const bullet = poolIndex >= 0
                ? bulletPool.splice(poolIndex, 1)[0]
                : createBulletVisual(bulletColor, projectileStyle);

            bullet.group.scale.set(1, 1, 1);
            bullet.group.children[0].scale.set(1, 1, 1);
            bullet.innerGlow.scale.set(1, 1, 1);
            bullet.outerGlow.scale.set(1, 1, 1);
            bullet.light.intensity = 2;
            bullet.light.visible = getQualityPreset().dynamicLights;
            bullet.hitEnemyIds.clear();
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

        function shoot(source, options = {}) {
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
            playGameSound(
                source.isPlayer ? 'playerFire' : 'enemyFire',
                source.isPlayer ? source.designId : source.type
            );
            if (source.isPlayer) triggerHaptic('light');

            const playerShotCount = state.evolutions.includes('plasmaBarrage')
                ? 5
                : state.playerStats.multishot > 0 ? 3 : 1;
            const shotCount = options.shotCount ??
                (source.isPlayer ? playerShotCount : 1);
            const spreadAngle = options.spreadAngle ?? 0.12;

            for (let i = 0; i < shotCount; i++) {
                const playerDesign = source.isPlayer
                    ? TANK_DESIGNS[source.designId] || TANK_DESIGNS.vanguard
                    : null;
                const bulletColor = playerDesign
                    ? playerDesign.projectileColor
                    : source.type === 'healer' ? 0x00ff00 : 0xff4444;
                const projectileStyle = playerDesign ? playerDesign.projectileStyle : 'orb';

                const bullet = acquireBulletVisual(bulletColor, projectileStyle);
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
                    const angle = (i - (shotCount - 1) / 2) * spreadAngle;
                    dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
                }

                dir.normalize();

                bulletGroup.lookAt(bulletGroup.position.clone().add(dir));

                const baseShotDamage = source.isPlayer
                    ? CONFIG.baseDamage * (state.playerStats.damage / 100)
                    : (ENEMY_TYPES[source.type]?.damage || 12);
                const isCritical = source.isPlayer && Math.random() < state.playerStats.critChance;
                const criticalMultiplier = state.evolutions.includes('railgunCore') ? 2.5 : 2;
                const damage = baseShotDamage * (options.damageMultiplier ?? 1) *
                    (isCritical ? criticalMultiplier : 1);

                if (isCritical) bulletGroup.children[0].scale.setScalar(1.35);
                bulletGroup.userData = {
                    vel: dir.multiplyScalar(options.bulletSpeed ?? CONFIG.bulletSpeed),
                    isPlayer: source.isPlayer,
                    damage: damage,
                    life: 3,
                    color: bulletColor,
                    isCritical,
                    pierceRemaining: source.isPlayer
                        ? state.playerStats.piercing +
                            (state.evolutions.includes('railgunCore') ? 2 : 0)
                        : 0,
                    ricochetsRemaining: source.isPlayer ? state.playerStats.ricochet : 0,
                    explosive: source.isPlayer ? state.playerStats.explosive : 0,
                    homing: source.isPlayer ? state.playerStats.homing : 0
                };

                scene.add(bulletGroup);
                bullets.push(bullet);
            }
        }

        function createMuzzleFlash(source) {
            const flashGroup = new THREE.Group();
            const flashVisibility = getFlashScale();

            // Central flash sphere
            const flashGeo = new THREE.SphereGeometry(1.0);
            const flashMat = new THREE.MeshBasicMaterial({
                color: 0xffffaa,
                transparent: true,
                opacity: getFlashScale()
            });
            const flash = new THREE.Mesh(flashGeo, flashMat);
            flashGroup.add(flash);

            // Outer ring
            const ringGeo = new THREE.RingGeometry(0.6, 1.5, 16);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0xffaa00,
                transparent: true,
                opacity: 0.9 * getFlashScale(),
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.y = Math.PI / 2;
            flashGroup.add(ring);

            // Flash light
            const flashLight = configureQualityOptionalLight(
                new THREE.PointLight(0xffaa00, 3 * getFlashScale(), 15)
            );
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
            let lightIntensity = 3 * flashVisibility;
            let lastFlashFrame = null;
            const animateFlash = (timestamp) => {
                const frameScale = lastFlashFrame === null
                    ? 1
                    : Math.max(0, (timestamp - lastFlashFrame) * BASELINE_FPS / 1000);
                lastFlashFrame = timestamp;
                scale *= Math.pow(0.82, frameScale);
                lightIntensity *= Math.pow(0.8, frameScale);
                flashGroup.scale.setScalar(scale);
                flash.material.opacity = scale * flashVisibility;
                ring.material.opacity = scale * 0.9 * flashVisibility;
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
            const healParticleCount = getQualityAdjustedCount(10);
            for (let i = 0; i < healParticleCount; i++) {
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
            const flashVisibility = getFlashScale();
            if (count > 20) playGameSound('explosion');

            // Volumetric debris particles
            const debrisCount = getQualityAdjustedCount(count);
            for (let i = 0; i < debrisCount; i++) {
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
            const smokeCount = getQualityAdjustedCount(
                isArmor ? 6 : (isGround ? 5 : 4)
            );
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
                    const healerBurstCount = getQualityAdjustedCount(8);
                    for(let i=0; i<healerBurstCount; i++) {
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
                    const sparkCount = getQualityAdjustedCount(6);
                    for(let i=0; i<sparkCount; i++) {
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
                    opacity: 0.8 * flashVisibility,
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

                const light = configureQualityOptionalLight(
                    new THREE.PointLight(color, 3 * flashVisibility, 20)
                );
                light.position.copy(pos);
                scene.add(light);

                let intensity = 3 * flashVisibility;
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

        function getTutorialSteps() {
            const movementSide = state.leftHanded ? 'lower-right' : 'lower-left';
            const firingSide = state.leftHanded ? 'lower-left' : 'lower-right';
            return [
                {
                    title: 'Move',
                    text: `Drag the ${movementSide} area to move your tank. The joystick appears under your thumb.`
                },
                {
                    title: 'Fire',
                    text: `Hold the ${firingSide} area to fire. Your turret automatically aims at the nearest enemy.`
                },
                {
                    title: 'Choose Upgrades',
                    text: 'Kills grant XP. Every level pauses the battle and offers three temporary upgrades.'
                },
                {
                    title: 'Earn and Improve',
                    text: 'Quick kills build combos and permanent coins. Spend coins in the Garage between runs.'
                }
            ];
        }

        function renderTutorialStep() {
            const steps = getTutorialSteps();
            const step = steps[state.tutorialStep];
            document.getElementById('tutorial-step-number').textContent =
                String(state.tutorialStep + 1);
            document.getElementById('tutorial-title').textContent = step.title;
            document.getElementById('tutorial-text').textContent = step.text;
            document.getElementById('tutorial-next').textContent =
                state.tutorialStep === steps.length - 1 ? 'Start Battle' : 'Next';
        }

        function openTutorial(returnTarget = 'playing') {
            state.tutorialOpen = true;
            state.tutorialStep = 0;
            state.tutorialReturnTarget = returnTarget;
            if (returnTarget === 'playing') state.gamePhase = 'tutorial';
            setScreenVisibility('settings-screen', false);
            setScreenVisibility('tutorial-screen', true);
            setPauseUIVisible(false);
            syncHUDControls();
            renderTutorialStep();
        }

        function finishTutorial() {
            const returnTarget = state.tutorialReturnTarget;
            state.tutorialOpen = false;
            profile.tutorialCompleted = true;
            saveProfile();
            setScreenVisibility('tutorial-screen', false);
            if (returnTarget === 'settings') {
                state.settingsOpen = true;
                setScreenVisibility('settings-screen', true);
                setPauseUIVisible(false);
            } else {
                state.gamePhase = 'playing';
                setPauseUIVisible(true);
                saveActiveRun();
            }
            syncHUDControls();
        }

        function advanceTutorial() {
            const steps = getTutorialSteps();
            if (state.tutorialStep >= steps.length - 1) {
                finishTutorial();
                return;
            }
            state.tutorialStep++;
            playUISound();
            renderTutorialStep();
        }

        function requestNewRun() {
            if (!cachedActiveRun) {
                startGame();
                return;
            }
            state.newRunConfirmOpen = true;
            setScreenVisibility('new-run-confirm-screen', true);
        }

        function closeNewRunConfirmation() {
            state.newRunConfirmOpen = false;
            setScreenVisibility('new-run-confirm-screen', false);
        }

        function startConfirmedNewRun() {
            closeNewRunConfirmation();
            startGame();
        }

        function continueConfirmedRun() {
            closeNewRunConfirmation();
            continueSavedRun();
        }

        function pauseGame() {
            if (!state.isPlaying || state.gamePhase !== 'playing') return;
            state.gamePhase = 'paused';
            clearInputState();
            setScreenVisibility('pause-screen', true);
            setPauseUIVisible(true);
            playPauseSound();
            syncHUDControls();
            saveActiveRun();
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
            saveActiveRun();
            state.isPlaying = false;
            state.gamePhase = 'menu';
            state.settingsOpen = false;
            state.garageOpen = false;
            state.tutorialOpen = false;
            state.newRunConfirmOpen = false;
            clearInputState();
            clearCombatScene();
            setScreenVisibility('upgrade-choice-screen', false);
            setScreenVisibility('tutorial-screen', false);
            setScreenVisibility('new-run-confirm-screen', false);
            setScreenVisibility('garage-screen', false);
            setScreenVisibility('settings-screen', false);
            setScreenVisibility('pause-screen', false);
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('start-screen', true);
            setPauseUIVisible(false);
            syncHUDControls();
            updateContinueButton();
        }

        function getEnemyTypeForLevel(level) {
            const types = ['scout', 'soldier'];
            if (level >= 3) types.push('heavy');
            if (level >= 4) types.push('sniper');
            if (level >= 5) types.push('healer');
            if (level >= 7) types.push('berserker');
            if (level >= 8) types.push('shield');
            if (level >= 10) types.push('artillery');
            if (level >= 11) types.push('mineLayer');
            if (level >= 13) types.push('commander');
            if (level >= 14) types.push('droneCarrier');
            if (level >= 16) types.push('reflector');
            return types[Math.floor(Math.random() * types.length)];
        }

        function getSpawnRateForLevel(level) {
            const baseSpawnRate = Math.max(1.5, 3.5 - level * 0.15);
            // Preserve the average in-game spawn acceleration from the old timer
            // patch, but calculate it deterministically and only while playing.
            const difficultyMultiplier = 1 + level * 0.1;
            return baseSpawnRate / (1 + 0.1 * difficultyMultiplier);
        }

        function updateObjectiveHUD() {
            const objectiveHud = document.getElementById('objective-hud');
            const objective = state.activeObjective;
            objectiveHud.classList.toggle('show', Boolean(objective));
            if (!objective) return;
            const progress = Math.max(0, Math.min(objective.target, objective.progress));
            document.getElementById('objective-name').textContent = objective.name;
            document.getElementById('objective-description').textContent = objective.description;
            document.getElementById('objective-progress-fill').style.width =
                `${Math.min(100, progress / objective.target * 100)}%`;
            document.getElementById('objective-progress-text').textContent =
                objective.type === 'defend'
                    ? `${Math.ceil(progress)} / ${objective.target}s • Beacon ${Math.ceil(objective.beaconHp)}%`
                    : `${Math.floor(progress)} / ${objective.target}`;
        }

        function hideObjectiveUI() {
            document.getElementById('objective-hud').classList.remove('show');
        }

        function createObjectiveBeacon() {
            if (objectiveBeacon) return;
            const group = new THREE.Group();
            const base = new THREE.Mesh(
                new THREE.CylinderGeometry(1.3, 1.6, 0.8, 12),
                new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7 })
            );
            base.position.y = 0.4;
            const core = new THREE.Mesh(
                new THREE.OctahedronGeometry(0.65),
                new THREE.MeshStandardMaterial({
                    color: 0xfacc15,
                    emissive: 0xf59e0b,
                    emissiveIntensity: 0.8
                })
            );
            core.position.y = 1.4;
            group.add(base, core);
            group.position.y = getTerrainHeight(0, 0);
            scene.add(group);
            objectiveBeacon = group;
        }

        function markObjectiveTarget(enemy) {
            if (enemy.isObjectiveTarget) return;
            enemy.isObjectiveTarget = true;
            const marker = new THREE.Mesh(
                new THREE.RingGeometry(2.8, 3.15, 32),
                new THREE.MeshBasicMaterial({
                    color: 0xfacc15,
                    transparent: true,
                    opacity: 0.8,
                    side: THREE.DoubleSide
                })
            );
            marker.rotation.x = -Math.PI / 2;
            marker.position.y = 0.15;
            enemy.mesh.add(marker);
            enemy.objectiveMarker = marker;
        }

        function spawnMarkedHeavy() {
            if (!player || enemies.some(enemy => enemy.isObjectiveTarget && !enemy.isDead)) return;
            const heavy = new Tank(ENEMY_TYPES.heavy.color, false, 'heavy');
            const angle = Math.random() * Math.PI * 2;
            heavy.mesh.position.set(Math.cos(angle) * 32, 0, Math.sin(angle) * 32);
            heavy.move(0, new THREE.Vector2(0, 0));
            markObjectiveTarget(heavy);
            enemies.push(heavy);
        }

        function restoreObjectiveVisuals() {
            if (!state.activeObjective) {
                hideObjectiveUI();
                removeAndDisposeObject(objectiveBeacon);
                objectiveBeacon = null;
                return;
            }
            if (state.activeObjective.type === 'defend') createObjectiveBeacon();
            if (state.activeObjective.type === 'markedHeavy') spawnMarkedHeavy();
            updateObjectiveHUD();
        }

        function startRealmObjectiveIfNeeded() {
            if (state.activeObjective || activeBoss ||
                state.lastObjectiveRealm >= state.realmProgress) return false;
            const requiredLevel = state.realmProgress * 3 + 2;
            if (state.level < requiredLevel) return false;

            const definition = REALM_OBJECTIVES[state.realmProgress % REALM_OBJECTIVES.length];
            state.activeObjective = {
                ...definition,
                progress: 0,
                elapsed: 0,
                startScore: state.score,
                beaconHp: 100
            };
            state.lastObjectiveRealm = state.realmProgress;
            restoreObjectiveVisuals();
            showUpgradeNotification(`📋 ${definition.name}`);
            saveActiveRun();
            return true;
        }

        function completeRealmObjective() {
            const objective = state.activeObjective;
            if (!objective) return;
            profile.coins += objective.reward;
            state.runStats.coinsEarned += objective.reward;
            if (player && !player.isDead) {
                player.hp = Math.min(player.maxHp, player.hp + player.maxHp * 0.15);
            }
            showUpgradeNotification(`✅ Objective complete!  💰 +${objective.reward}`);
            playGameSound('upgrade');
            triggerHaptic('medium');
            state.activeObjective = null;
            removeAndDisposeObject(objectiveBeacon);
            objectiveBeacon = null;
            hideObjectiveUI();
            saveProfile();
            spawnPendingGuardian();
            saveActiveRun();
        }

        function failRealmObjective(message = 'Objective failed') {
            if (!state.activeObjective) return;
            state.activeObjective = null;
            removeAndDisposeObject(objectiveBeacon);
            objectiveBeacon = null;
            hideObjectiveUI();
            showUpgradeNotification(`❌ ${message}`);
            spawnPendingGuardian();
            saveActiveRun();
        }

        function recordObjectiveKill(enemy) {
            const objective = state.activeObjective;
            if (!objective) return;
            if (objective.type === 'markedHeavy' && enemy.isObjectiveTarget) {
                objective.progress = 1;
            } else if (objective.type === 'medics' && enemy.type === 'healer') {
                objective.progress++;
            }
            if (objective.progress >= objective.target) completeRealmObjective();
            else updateObjectiveHUD();
        }

        function recordObjectivePlayerDamage() {
            if (state.activeObjective?.type === 'noDamage') {
                failRealmObjective('Damage taken');
            }
        }

        function updateRealmObjective(dt) {
            const objective = state.activeObjective;
            if (!objective) return;
            if (['survive', 'noDamage', 'defend'].includes(objective.type)) {
                objective.elapsed += dt;
                objective.progress = Math.min(objective.target, objective.elapsed);
            } else if (objective.type === 'combo') {
                objective.progress = Math.max(objective.progress, state.comboCount);
            } else if (objective.type === 'score') {
                objective.progress = Math.max(0, state.score - objective.startScore);
            }

            if (objective.type === 'defend') {
                const nearbyEnemies = enemies.filter(enemy => {
                    if (enemy.isDead) return false;
                    const x = enemy.mesh.position.x;
                    const z = enemy.mesh.position.z;
                    return x * x + z * z < 64;
                }).length;
                objective.beaconHp = Math.max(0, objective.beaconHp - nearbyEnemies * 3 * dt);
                if (objective.beaconHp <= 0) {
                    failRealmObjective('Beacon destroyed');
                    return;
                }
            }

            if (objective.progress >= objective.target) completeRealmObjective();
            else updateObjectiveHUD();
        }

        function updateBossHUD() {
            const bossHud = document.getElementById('boss-hud');
            const visible = Boolean(activeBoss && !activeBoss.isDead);
            bossHud.classList.toggle('show', visible);
            if (!visible) return;
            const hp = Math.max(0, activeBoss.hp);
            const hpPercent = Math.max(0, Math.min(100, hp / activeBoss.maxHp * 100));
            document.getElementById('boss-name').textContent = activeBoss.typeData.name;
            document.getElementById('boss-health-fill').style.width = `${hpPercent}%`;
            document.getElementById('boss-health-text').textContent =
                `${Math.ceil(hp)} / ${Math.ceil(activeBoss.maxHp)}`;
        }

        function hideBossUI() {
            document.getElementById('boss-hud').classList.remove('show');
            document.getElementById('boss-warning').classList.remove('show');
        }

        function queueGuardianIfNeeded() {
            const requiredLevel = (state.realmProgress + 1) * 3;
            if (state.level >= requiredLevel && !activeBoss && !state.guardianPending) {
                state.guardianPending = true;
            }
        }

        function spawnBossMinion(type, boss) {
            if (enemies.filter(enemy => !enemy.isDead).length >= 12) return;
            const angle = Math.random() * Math.PI * 2;
            const enemy = new Tank(ENEMY_TYPES[type].color, false, type);
            enemy.mesh.position.set(
                Math.max(-42, Math.min(42, boss.mesh.position.x + Math.cos(angle) * 7)),
                0,
                Math.max(-42, Math.min(42, boss.mesh.position.z + Math.sin(angle) * 7))
            );
            enemy.move(0, new THREE.Vector2(0, 0));
            enemies.push(enemy);
        }

        function spawnPendingGuardian() {
            if (!state.guardianPending || activeBoss || state.activeObjective ||
                !player || player.isDead || !state.isPlaying) return null;
            const guardianType = REALM_GUARDIAN_TYPES[state.realmProgress % REALM_GUARDIAN_TYPES.length];
            const data = ENEMY_TYPES[guardianType];
            const angle = Math.random() * Math.PI * 2;
            const boss = new Tank(data.color, false, guardianType);
            boss.mesh.position.set(Math.cos(angle) * 36, 0, Math.sin(angle) * 36);
            boss.move(0, new THREE.Vector2(0, 0));
            const now = clock.getElapsedTime();
            boss.nextBossAttackTime = now + 1.2;
            boss.nextBossSpecialTime = now + 6;
            enemies.push(boss);
            activeBoss = boss;
            state.guardianPending = false;

            document.getElementById('boss-warning-name').textContent = data.name;
            document.getElementById('boss-warning').classList.add('show');
            setTimeout(() => document.getElementById('boss-warning').classList.remove('show'), 2200);
            updateBossHUD();
            playGameSound('bossWarning');
            triggerHaptic('heavy');
            saveActiveRun();
            return boss;
        }

        function updateBossAI(boss, dt, toPlayer, distance) {
            const behavior = boss.typeData.behavior;
            const towardPlayer = new THREE.Vector2(toPlayer.x, toPlayer.z).normalize();

            if (behavior === 'volcanic' || behavior === 'forest' || behavior === 'swamp') {
                if (distance > 16) boss.move(dt, towardPlayer);
            } else if (behavior === 'desert') {
                if (distance > 25) boss.move(dt, towardPlayer);
                else if (distance < 13) boss.move(dt, towardPlayer.clone().multiplyScalar(-1));
                else boss.move(dt, new THREE.Vector2(-towardPlayer.y, towardPlayer.x));
            } else if (behavior === 'frozen' && distance > 27) {
                boss.move(dt, towardPlayer);
            }

            boss.aimAt(player.mesh.position, dt);
            const now = clock.getElapsedTime();
            if (now >= boss.nextBossAttackTime) {
                if (behavior === 'forest') {
                    shoot(boss, { shotCount: 3, spreadAngle: 0.16 });
                } else if (behavior === 'frozen') {
                    shoot(boss, { damageMultiplier: 1.35, bulletSpeed: 46 });
                } else if (behavior === 'volcanic') {
                    shoot(boss, { shotCount: 5, spreadAngle: 0.14 });
                } else if (behavior === 'desert') {
                    shoot(boss, { shotCount: 3, spreadAngle: 0.07, bulletSpeed: 70 });
                } else if (behavior === 'swamp') {
                    shoot(boss, { shotCount: 3, spreadAngle: 0.12 });
                } else {
                    shoot(boss, { shotCount: 7, spreadAngle: 0.13, bulletSpeed: 55 });
                }
                boss.nextBossAttackTime = now + boss.typeData.attackInterval;
            }

            if (now >= boss.nextBossSpecialTime) {
                if (behavior === 'forest') {
                    spawnBossMinion('scout', boss);
                    spawnBossMinion('scout', boss);
                } else if (behavior === 'swamp') {
                    boss.heal(Math.max(1, boss.maxHp * 0.025));
                    spawnBossMinion('healer', boss);
                } else if (behavior === 'desert') {
                    spawnBossMinion('scout', boss);
                }
                boss.nextBossSpecialTime = now + 7;
            }
            updateBossHUD();
        }

        function handleGuardianDefeat(boss) {
            if (!boss?.typeData?.isBoss || boss !== activeBoss) return 0;
            const bonusCoins = boss.typeData.bossCoins;
            profile.coins += bonusCoins;
            state.runStats.coinsEarned += bonusCoins;
            state.realmProgress++;
            state.guardianPending = false;
            activeBoss = null;
            hideBossUI();
            loadBiome(state.realmProgress % BIOMES.length);
            showUpgradeNotification(`🏆 Realm cleared!  💰 +${bonusCoins}`);
            playGameSound('unlock');
            triggerHaptic('heavy');
            saveProfile();
            startRealmObjectiveIfNeeded();
            queueGuardianIfNeeded();
            if (state.gamePhase === 'playing') spawnPendingGuardian();
            saveActiveRun();
            return bonusCoins;
        }

        function clearCombatScene() {
            removeAndDisposeObjects([
                player ? player.mesh : null,
                ...enemies.map(enemy => enemy.mesh)
            ]);
            while (bullets.length > 0) releaseBulletAt(bullets.length - 1);
            removeAndDisposeObjects(particles.map(particle => particle.mesh));
            removeAndDisposeObjects(artilleryStrikes.map(strike => strike.mesh));
            removeAndDisposeObjects(mines.map(mine => mine.mesh));
            removeAndDisposeObject(objectiveBeacon);
            player = null;
            activeBoss = null;
            objectiveBeacon = null;
            enemies = [];
            particles = [];
            artilleryStrikes = [];
            mines = [];
            hideBossUI();
            hideObjectiveUI();
        }

        function startGame() {
            clearActiveRunSave();
            clearCombatScene();

            const now = clock.getElapsedTime();
            state.score = 0;
            state.runStats = createDefaultRunStats();
            state.xp = 0;
            state.level = 1;
            state.xpToNext = 100;
            state.realmProgress = 0;
            state.guardianPending = false;
            state.activeObjective = null;
            state.lastObjectiveRealm = -1;
            state.isPlaying = true;
            state.gamePhase = 'playing';
            state.lastFireTime = now - CONFIG.fireRate;
            state.lastSpawnTime = now;
            state.lastRegenTime = now;
            state.lastAutoSaveTime = now;
            state.enemiesIntroduced = new Set();
            state.upgradeTiers = createDefaultUpgradeTiers();
            state.evolutions = [];
            state.abilityState = createDefaultAbilityState();
            state.runTankId = profile.ownedTanks.includes(profile.selectedTankId)
                ? profile.selectedTankId
                : 'vanguard';
            state.runPermanentUpgrades = sanitizePermanentUpgradeTiers(
                profile.tankUpgrades[state.runTankId]
            );
            state.runBaseStats = getPermanentBaseStats(state.runPermanentUpgrades);
            state.playerStats = getStatsFromUpgradeTiers(
                state.upgradeTiers,
                state.runBaseStats
            );
            state.comboCount = 0;
            state.comboTimer = 0;
            state.comboMultiplier = 1;
            state.pendingUpgradeCount = 0;
            state.currentUpgradeChoices = [];
            state.targetEnemy = null;
            state.cameraShake = 0;
            state.settingsOpen = false;
            state.garageOpen = false;
            state.tutorialOpen = false;
            state.newRunConfirmOpen = false;
            clearInputState();

            const selectedTank = TANK_DESIGNS[state.runTankId];
            player = new Tank(selectedTank.color, true, 'soldier', state.runTankId);
            loadBiome(0);
            updateHUD();

            setScreenVisibility('upgrade-choice-screen', false);
            setScreenVisibility('tutorial-screen', false);
            setScreenVisibility('new-run-confirm-screen', false);
            setScreenVisibility('garage-screen', false);
            setScreenVisibility('start-screen', false);
            setScreenVisibility('settings-screen', false);
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('pause-screen', false);
            setPauseUIVisible(true);
            syncHUDControls();
            updateComboIndicator();
            saveActiveRun();
            if (!profile.tutorialCompleted) openTutorial('playing');
        }

        function continueSavedRun() {
            const savedRun = sanitizeActiveRun(cachedActiveRun);
            if (!savedRun) {
                clearActiveRunSave();
                return false;
            }

            clearCombatScene();
            const now = clock.getElapsedTime();
            state.score = savedRun.score;
            state.runStats = { ...savedRun.runStats, upgradeHistory: [...savedRun.runStats.upgradeHistory] };
            state.xp = savedRun.xp;
            state.level = savedRun.level;
            state.xpToNext = savedRun.xpToNext;
            state.currentBiome = savedRun.currentBiome;
            state.realmProgress = savedRun.realmProgress;
            state.guardianPending = savedRun.guardianPending;
            state.activeObjective = savedRun.activeObjective
                ? { ...savedRun.activeObjective }
                : null;
            state.lastObjectiveRealm = savedRun.lastObjectiveRealm;
            state.upgradeTiers = { ...savedRun.upgradeTiers };
            state.evolutions = [...savedRun.evolutions];
            state.abilityState = { ...savedRun.abilityState };
            state.runTankId = savedRun.runTankId;
            state.runPermanentUpgrades = { ...savedRun.runPermanentUpgrades };
            state.runBaseStats = { ...savedRun.runBaseStats };
            state.playerStats = { ...savedRun.playerStats };
            state.comboCount = savedRun.comboTimer > 0 ? savedRun.comboCount : 0;
            state.comboTimer = savedRun.comboTimer;
            state.comboMultiplier = getComboMultiplier(state.comboCount);
            state.pendingUpgradeCount = savedRun.pendingUpgradeCount;
            state.currentUpgradeChoices = [...savedRun.currentUpgradeChoices];
            state.enemiesIntroduced = new Set(savedRun.enemiesIntroduced);
            state.isPlaying = true;
            state.gamePhase = 'playing';
            state.settingsOpen = false;
            state.garageOpen = false;
            state.tutorialOpen = false;
            state.newRunConfirmOpen = false;
            state.targetEnemy = null;
            state.cameraShake = 0;
            state.lastFireTime = now - CONFIG.fireRate;
            state.lastSpawnTime = now;
            state.lastRegenTime = now;
            state.lastAutoSaveTime = now;
            clearInputState();

            const savedTank = TANK_DESIGNS[state.runTankId];
            player = new Tank(savedTank.color, true, 'soldier', state.runTankId);
            loadBiome(savedRun.currentBiome);
            player.hp = savedRun.player.hp;
            player.maxHp = state.playerStats.maxHp;
            player.mesh.position.set(
                savedRun.player.position.x,
                0,
                savedRun.player.position.z
            );
            player.mesh.rotation.y = savedRun.player.rotationY;
            player.move(0, new THREE.Vector2(0, 0));

            savedRun.enemies.forEach(savedEnemy => {
                const enemy = new Tank(
                    ENEMY_TYPES[savedEnemy.type].color,
                    false,
                    savedEnemy.type
                );
                enemy.hp = savedEnemy.hp;
                enemy.mesh.position.set(
                    savedEnemy.position.x,
                    0,
                    savedEnemy.position.z
                );
                enemy.mesh.rotation.y = savedEnemy.rotationY;
                enemy.move(0, new THREE.Vector2(0, 0));
                enemies.push(enemy);
                if (enemy.typeData?.isBoss) {
                    activeBoss = enemy;
                    const bossNow = clock.getElapsedTime();
                    enemy.nextBossAttackTime = bossNow + 1;
                    enemy.nextBossSpecialTime = bossNow + 5;
                }
                if (savedEnemy.objectiveTarget) markObjectiveTarget(enemy);
            });

            setScreenVisibility('tutorial-screen', false);
            setScreenVisibility('new-run-confirm-screen', false);
            setScreenVisibility('garage-screen', false);
            setScreenVisibility('start-screen', false);
            setScreenVisibility('settings-screen', false);
            setScreenVisibility('game-over-screen', false);
            setScreenVisibility('pause-screen', false);
            updateHUD();
            updateComboIndicator();
            updateBossHUD();
            restoreObjectiveVisuals();

            if (state.pendingUpgradeCount > 0) {
                beginNextUpgradeChoice(state.currentUpgradeChoices);
            } else {
                setScreenVisibility('upgrade-choice-screen', false);
                setPauseUIVisible(true);
                syncHUDControls();
                spawnPendingGuardian();
                saveActiveRun();
                if (!profile.tutorialCompleted) openTutorial('playing');
            }
            return true;
        }

        function shuffleUpgrades(upgrades) {
            const shuffled = [...upgrades];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
            }
            return shuffled;
        }

        function getAvailableUpgrades() {
            return UPGRADE_DEFINITIONS.filter(upgrade =>
                state.level >= upgrade.minLevel &&
                state.upgradeTiers[upgrade.id] < upgrade.maxTier
            );
        }

        function renderUpgradeChoices(choiceIds) {
            const choiceList = document.getElementById('upgrade-choice-list');
            choiceList.replaceChildren();

            choiceIds.forEach(upgradeId => {
                const upgrade = UPGRADE_BY_ID.get(upgradeId);
                if (!upgrade) return;
                const currentTier = state.upgradeTiers[upgrade.id];
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'upgrade-choice-card';
                button.dataset.upgradeId = upgrade.id;

                const title = document.createElement('strong');
                title.textContent = `${upgrade.icon} ${upgrade.name}`;
                const description = document.createElement('span');
                description.textContent = upgrade.description;
                const tier = document.createElement('small');
                tier.textContent = `Tier ${currentTier + 1} of ${upgrade.maxTier}`;
                button.append(title, description, tier);
                button.addEventListener('click', () => applyUpgradeChoice(upgrade.id));
                choiceList.appendChild(button);
            });

            choiceList.querySelector('button')?.focus();
        }

        function finishUpgradeChoices() {
            state.pendingUpgradeCount = 0;
            state.currentUpgradeChoices = [];
            state.gamePhase = 'playing';
            setScreenVisibility('upgrade-choice-screen', false);
            setPauseUIVisible(true);
            syncHUDControls();
            updateHUD();
            startRealmObjectiveIfNeeded();
            queueGuardianIfNeeded();
            spawnPendingGuardian();
            saveActiveRun();
        }

        function beginNextUpgradeChoice(preferredChoiceIds = []) {
            if (!state.isPlaying || state.pendingUpgradeCount <= 0) {
                finishUpgradeChoices();
                return;
            }

            const available = getAvailableUpgrades();
            if (available.length === 0) {
                showUpgradeNotification('🌟 All upgrades maxed!');
                finishUpgradeChoices();
                return;
            }

            const availableIds = new Set(available.map(upgrade => upgrade.id));
            const choices = [...new Set(preferredChoiceIds)]
                .filter(id => availableIds.has(id))
                .slice(0, 3);
            const remaining = shuffleUpgrades(
                available.filter(upgrade => !choices.includes(upgrade.id))
            );
            while (choices.length < 3 && remaining.length > 0) {
                choices.push(remaining.shift().id);
            }

            state.currentUpgradeChoices = choices;
            state.gamePhase = 'choosing-upgrade';
            playGameSound('levelUp');
            clearInputState();
            setPauseUIVisible(false);
            syncHUDControls();
            renderUpgradeChoices(choices);
            setScreenVisibility('upgrade-choice-screen', true);
            saveActiveRun();
        }

        function applyUpgradeChoice(upgradeId) {
            if (state.gamePhase !== 'choosing-upgrade' ||
                !state.currentUpgradeChoices.includes(upgradeId)) return;

            const upgrade = UPGRADE_BY_ID.get(upgradeId);
            if (!upgrade || state.upgradeTiers[upgrade.id] >= upgrade.maxTier) return;

            const oldMaxHp = state.playerStats.maxHp;
            const previousEvolutions = new Set(state.evolutions);
            state.upgradeTiers[upgrade.id]++;
            state.runStats.upgradeHistory.push(upgrade.id);
            state.evolutions = deriveUnlockedEvolutions(state.upgradeTiers);
            state.playerStats = getStatsFromUpgradeTiers(
                state.upgradeTiers,
                state.runBaseStats
            );
            player.maxHp = state.playerStats.maxHp;
            if (player.maxHp > oldMaxHp) {
                player.hp = Math.min(player.maxHp, player.hp + player.maxHp - oldMaxHp);
            } else {
                player.hp = Math.min(player.hp, player.maxHp);
            }
            const unlockedEvolutionId = state.evolutions.find(id => !previousEvolutions.has(id));

            state.pendingUpgradeCount = Math.max(0, state.pendingUpgradeCount - 1);
            state.currentUpgradeChoices = [];
            setScreenVisibility('upgrade-choice-screen', false);
            const evolutionText = unlockedEvolutionId
                ? ` • Evolution: ${EVOLUTION_BY_ID.get(unlockedEvolutionId).name}!`
                : '';
            showUpgradeNotification(`${upgrade.icon} ${upgrade.description}${evolutionText}`);
            playGameSound(unlockedEvolutionId ? 'unlock' : 'upgrade');
            triggerHaptic('medium');
            updateHUD();

            if (state.pendingUpgradeCount > 0) beginNextUpgradeChoice();
            else finishUpgradeChoices();
        }

        function addXP(amount) {
            state.xp += amount;

            while (state.xp >= state.xpToNext) {
                state.xp -= state.xpToNext;
                state.level++;
                state.xpToNext = Math.floor(state.xpToNext * 1.4);
                state.pendingUpgradeCount++;
            }
            queueGuardianIfNeeded();
            updateHUD();

            if (state.pendingUpgradeCount > 0 && state.gamePhase === 'playing') {
                beginNextUpgradeChoice();
            } else {
                saveActiveRun();
            }
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

        function getComboMultiplier(comboCount) {
            return Math.min(3, 1 + Math.max(0, comboCount - 1) * 0.2);
        }

        function updateComboIndicator() {
            const indicator = document.getElementById('combo-indicator');
            const active = state.comboCount >= 2 && state.comboTimer > 0;
            indicator.classList.toggle('show', active);
            document.getElementById('combo-count').textContent = state.comboCount;
            document.getElementById('combo-multiplier').textContent =
                state.comboMultiplier.toFixed(1);
        }

        function updateCombo(dt) {
            if (state.comboTimer <= 0) return;
            state.comboTimer = Math.max(0, state.comboTimer - dt);
            if (state.comboTimer === 0) {
                if (state.comboCount >= 2) playGameSound('comboLost');
                state.comboCount = 0;
                state.comboMultiplier = 1;
            }
            updateComboIndicator();
        }

        function awardEnemyKill(basePoints) {
            state.comboCount = state.comboTimer > 0 ? state.comboCount + 1 : 1;
            state.comboTimer = 3;
            state.comboMultiplier = getComboMultiplier(state.comboCount);
            const scoreReward = Math.floor(basePoints * state.comboMultiplier);
            const baseCoins = Math.max(1, Math.floor(basePoints / 10));
            const coinReward = Math.max(1, Math.floor(baseCoins * state.comboMultiplier));
            state.score += scoreReward;
            state.runStats.kills++;
            state.runStats.highestCombo = Math.max(
                state.runStats.highestCombo,
                state.comboCount
            );
            state.runStats.coinsEarned += coinReward;
            if (state.playerStats.repairBurst > 0 && state.runStats.kills % 5 === 0 && player) {
                const repairAmount = player.maxHp * 0.03 * state.playerStats.repairBurst;
                player.hp = Math.min(player.maxHp, player.hp + repairAmount);
                createHealEffect(player.mesh.position);
            }
            profile.coins += coinReward;
            playGameSound('coin');
            if (state.comboCount >= 2) playGameSound('combo');
            saveProfile();
            updateComboIndicator();
            updateHUD();
            return { scoreReward, coinReward };
        }

        function spawnEnemy() {
            if (!state.isPlaying || !player) return;

            let x, z;
            do {
                x = (Math.random() - 0.5) * 80;
                z = (Math.random() - 0.5) * 80;
            } while (player.mesh.position.distanceTo(new THREE.Vector3(x, 0, z)) < 25);

            const type = state.activeObjective?.type === 'medics' && Math.random() < 0.35
                ? 'healer'
                : getEnemyTypeForLevel(state.level);
            showEnemyIntro(type);

            const enemy = new Tank(ENEMY_TYPES[type].color, false, type);
            enemy.mesh.position.set(x, 0, z);
            enemies.push(enemy);
        }

        function isReflectorShieldActive(enemy) {
            if (enemy.type !== 'reflector') return false;
            return clock.getElapsedTime() % 5 < 2;
        }

        function isShieldFrontHit(enemy, projectilePosition) {
            if (enemy.type !== 'shield') return false;
            const toProjectile = new THREE.Vector3().subVectors(
                projectilePosition,
                enemy.mesh.position
            ).setY(0).normalize();
            const forward = new THREE.Vector3(0, 0, 1).applyAxisAngle(
                new THREE.Vector3(0, 1, 0),
                enemy.mesh.rotation.y
            );
            return forward.dot(toProjectile) > 0.25;
        }

        function createArtilleryStrike(position, damage = 22) {
            const ring = new THREE.Mesh(
                new THREE.RingGeometry(3.8, 4.5, 32),
                new THREE.MeshBasicMaterial({
                    color: 0xff4444,
                    transparent: true,
                    opacity: 0.72,
                    side: THREE.DoubleSide
                })
            );
            ring.rotation.x = -Math.PI / 2;
            ring.position.set(position.x, getTerrainHeight(position.x, position.z) + 0.16, position.z);
            scene.add(ring);
            artilleryStrikes.push({ mesh: ring, timer: 1.5, damage, radius: 4.5 });
        }

        function createMine(position, damage = 16) {
            while (mines.length >= 8) {
                removeAndDisposeObject(mines.shift().mesh);
            }
            const mine = new THREE.Group();
            const base = new THREE.Mesh(
                new THREE.CylinderGeometry(0.7, 0.85, 0.3, 10),
                new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 })
            );
            const light = new THREE.Mesh(
                new THREE.SphereGeometry(0.13, 8, 6),
                new THREE.MeshBasicMaterial({ color: 0xff3333 })
            );
            light.position.y = 0.25;
            mine.add(base, light);
            mine.position.set(
                position.x,
                getTerrainHeight(position.x, position.z) + 0.15,
                position.z
            );
            scene.add(mine);
            mines.push({ mesh: mine, armedIn: 0.8, life: 15, damage, radius: 2.6 });
        }

        function applyPlayerDamage(amount, impactPosition, color = 0xff4444) {
            if (!player || player.isDead) return;
            player.takeDamage(amount);
            recordObjectivePlayerDamage();
            playGameSound('damage');
            triggerHaptic('medium');
            createExplosion(impactPosition, 14, color, 'armor');
            document.getElementById('damage-overlay').style.opacity =
                String(0.5 * getFlashScale());
            setTimeout(() => document.getElementById('damage-overlay').style.opacity = '0', 150);
            updateHUD();
            if (player.hp <= 0) endGame();
        }

        function updateHazards(dt) {
            for (let i = artilleryStrikes.length - 1; i >= 0; i--) {
                const strike = artilleryStrikes[i];
                strike.timer -= dt;
                strike.mesh.rotation.z += dt * 1.8;
                strike.mesh.material.opacity = 0.45 + Math.sin(strike.timer * 12) * 0.25;
                if (strike.timer <= 0) {
                    const impact = strike.mesh.position.clone();
                    if (player && player.mesh.position.distanceTo(impact) < strike.radius) {
                        applyPlayerDamage(strike.damage, impact, 0xffaa00);
                    } else {
                        createExplosion(impact, 12, 0xffaa00, 'ground');
                    }
                    removeAndDisposeObject(strike.mesh);
                    artilleryStrikes.splice(i, 1);
                }
            }

            for (let i = mines.length - 1; i >= 0; i--) {
                const mine = mines[i];
                mine.armedIn -= dt;
                mine.life -= dt;
                mine.mesh.rotation.y += dt * 0.8;
                const triggered = mine.armedIn <= 0 && player &&
                    player.mesh.position.distanceTo(mine.mesh.position) < mine.radius;
                if (triggered) {
                    const impact = mine.mesh.position.clone();
                    applyPlayerDamage(mine.damage, impact, 0xff5555);
                    removeAndDisposeObject(mine.mesh);
                    mines.splice(i, 1);
                } else if (mine.life <= 0) {
                    removeAndDisposeObject(mine.mesh);
                    mines.splice(i, 1);
                }
            }
        }

        function updateCommanderBuffs() {
            enemies.forEach(enemy => {
                enemy.speedMultiplier = 1;
                enemy.damageMultiplier = 1;
            });
            enemies.filter(enemy => enemy.type === 'commander' && !enemy.isDead)
                .forEach(commander => {
                    enemies.forEach(ally => {
                        if (ally === commander || ally.isDead || ally.typeData?.isBoss) return;
                        if (ally.mesh.position.distanceTo(commander.mesh.position) < 16) {
                            ally.speedMultiplier = 1.18;
                            ally.damageMultiplier = 1.2;
                        }
                    });
                });
        }

        function updateStrategicEnemyAI(enemy, dt, toPlayer, distance) {
            const type = enemy.type;
            if (!['shield', 'artillery', 'mineLayer', 'commander', 'droneCarrier', 'drone', 'reflector'].includes(type)) {
                return false;
            }

            const towardPlayer = new THREE.Vector2(toPlayer.x, toPlayer.z).normalize();
            const now = clock.getElapsedTime();
            if (type === 'artillery') {
                if (distance < 26) enemy.move(dt, towardPlayer.clone().multiplyScalar(-1));
                else if (distance > 34) enemy.move(dt, towardPlayer);
                enemy.aimAt(player.mesh.position, dt);
                if (now >= enemy.nextAbilityTime) {
                    createArtilleryStrike(player.mesh.position, enemy.typeData.damage * enemy.damageMultiplier);
                    enemy.nextAbilityTime = now + 4;
                }
            } else {
                if (distance > (type === 'drone' ? 10 : 18)) enemy.move(dt, towardPlayer);
                enemy.aimAt(player.mesh.position, dt);
                const chance = type === 'drone' ? 0.01 : 0.0045;
                if (Math.random() < getFrameEquivalentChance(chance, dt)) {
                    shoot(enemy, { damageMultiplier: enemy.damageMultiplier });
                }

                if (type === 'mineLayer' && now >= enemy.nextAbilityTime) {
                    createMine(enemy.mesh.position, enemy.typeData.damage * enemy.damageMultiplier);
                    enemy.nextAbilityTime = now + 4.5;
                } else if (type === 'droneCarrier' && now >= enemy.nextAbilityTime) {
                    spawnBossMinion('drone', enemy);
                    spawnBossMinion('drone', enemy);
                    enemy.nextAbilityTime = now + 6;
                }
            }
            return true;
        }

        function processEnemyDefeat(enemy) {
            if (!enemy?.isDead || enemy.rewardProcessed) return;
            enemy.rewardProcessed = true;
            recordObjectiveKill(enemy);
            const enemyData = ENEMY_TYPES[enemy.type] || {};
            const points = enemyData.points || 100;
            const rewards = awardEnemyKill(points);
            addXP(enemyData.xpReward ?? points / 2);
            const guardianBonus = enemyData.isBoss ? handleGuardianDefeat(enemy) : 0;
            showScorePopup(
                enemy.mesh.position.x,
                enemy.mesh.position.z,
                rewards.scoreReward,
                rewards.coinReward + guardianBonus
            );
            const enemyIndex = enemies.indexOf(enemy);
            if (enemyIndex >= 0) enemies.splice(enemyIndex, 1);
        }

        function damageEnemiesInRadius(position, damage, radius, excludedEnemy) {
            [...enemies].forEach(enemy => {
                if (enemy === excludedEnemy || enemy.isDead) return;
                const dx = enemy.mesh.position.x - position.x;
                const dz = enemy.mesh.position.z - position.z;
                if (dx * dx + dz * dz > radius * radius) return;
                enemy.takeDamage(damage);
                if (enemy.isDead) processEnemyDefeat(enemy);
            });
        }

        function showScorePopup(x, z, points, coins = 0) {
            const pos = new THREE.Vector3(x, 3, z);
            pos.project(camera);

            const screenX = (pos.x + 1) / 2 * window.innerWidth;
            const screenY = (-pos.y + 1) / 2 * window.innerHeight;

            const popup = document.createElement('div');
            popup.className = 'score-popup';
            popup.textContent = `+${points}  💰+${coins}`;
            popup.style.left = screenX + 'px';
            popup.style.top = screenY + 'px';
            document.body.appendChild(popup);

            setTimeout(() => popup.remove(), 1200);
        }

        function updatePhysics(dt) {
            if (!player || player.isDead) return;

            updateCombo(dt);
            updateRealmObjective(dt);
            updateHazards(dt);
            updateCommanderBuffs();
            state.abilityState.timeSinceDamage += dt;
            state.abilityState.reactiveReadyIn = Math.max(0, state.abilityState.reactiveReadyIn - dt);
            state.abilityState.emergencyReadyIn = Math.max(0, state.abilityState.emergencyReadyIn - dt);
            state.abilityState.dashReadyIn = Math.max(0, state.abilityState.dashReadyIn - dt);
            state.runStats.elapsedSeconds += dt;

            // Player movement
            player.move(dt, new THREE.Vector2(state.input.x, state.input.y));
            player.update(dt);

            // Health regen
            if (state.playerStats.regen > 0 && clock.getElapsedTime() - state.lastRegenTime > 1) {
                if (player.hp < player.maxHp) {
                    player.hp = Math.min(player.maxHp, player.hp + state.playerStats.regen);
                    document.getElementById('heal-overlay').style.opacity = String(0.3 * getFlashScale());
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
                    if (e.typeData?.isBoss) dist *= 0.55;

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
            const lastStandMultiplier = state.playerStats.lastStand > 0 &&
                player.hp <= player.maxHp * 0.25 ? 1.3 : 1;
            const effectiveFireRate = state.playerStats.fireRate * lastStandMultiplier;
            const fireRate = CONFIG.fireRate * (100 / effectiveFireRate);
            if (state.input.isFiring && clock.getElapsedTime() - state.lastFireTime > fireRate) {
                shoot(player);
                state.lastFireTime = clock.getElapsedTime();
            }

            // Enemy AI
            enemies.forEach(e => {
                if (e.isDead) return;
                e.update(dt);

                // Terrain following for enemies
                e.move(dt, new THREE.Vector2(0, 0)); // This updates terrain height

                const toPlayer = new THREE.Vector3().subVectors(player.mesh.position, e.mesh.position);
                const dist = toPlayer.length();

                if (e.typeData?.isBoss) {
                    updateBossAI(e, dt, toPlayer, dist);
                } else if (updateStrategicEnemyAI(e, dt, toPlayer, dist)) {
                    // Strategic role handled above.
                } else if (e.type === 'healer') {
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
                    if (Math.random() < getFrameEquivalentChance(0.008, dt)) {
                        shoot(e, { damageMultiplier: e.damageMultiplier });
                    }
                } else if (e.type === 'berserker') {
                    e.move(dt, new THREE.Vector2(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    if (dist < 18 && Math.random() < getFrameEquivalentChance(0.025, dt)) {
                        shoot(e, { damageMultiplier: e.damageMultiplier });
                    }
                } else {
                    if (dist > 18) e.move(dt, new THREE.Vector2(toPlayer.x, toPlayer.z).normalize());
                    e.aimAt(player.mesh.position, dt);
                    const shotChance = 0.012 * (ENEMY_TYPES[e.type]?.fireRate || 0.4);
                    if (Math.random() < getFrameEquivalentChance(shotChance, dt)) {
                        shoot(e, { damageMultiplier: e.damageMultiplier });
                    }
                }
            });

            // Bullets
            for (let i = bullets.length - 1; i >= 0; i--) {
                const b = bullets[i];
                if (b.group.userData.isPlayer && b.group.userData.homing > 0) {
                    let homingTarget = null;
                    let homingDistance = Infinity;
                    enemies.forEach(enemy => {
                        if (enemy.isDead || b.hitEnemyIds.has(enemy.mesh.uuid)) return;
                        const distance = b.group.position.distanceToSquared(enemy.mesh.position);
                        if (distance < homingDistance) {
                            homingDistance = distance;
                            homingTarget = enemy;
                        }
                    });
                    if (homingTarget) {
                        const speed = b.group.userData.vel.length();
                        const desiredVelocity = new THREE.Vector3()
                            .subVectors(homingTarget.mesh.position, b.group.position)
                            .setY(0)
                            .normalize()
                            .multiplyScalar(speed);
                        b.group.userData.vel.lerp(
                            desiredVelocity,
                            getFrameEquivalentAlpha(b.group.userData.homing, dt)
                        );
                        b.group.lookAt(
                            b.group.position.clone().add(b.group.userData.vel)
                        );
                    }
                }
                b.previousPosition.copy(b.group.position);
                b.group.position.addScaledVector(b.group.userData.vel, dt);
                b.frameEndPosition.copy(b.group.position);
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
                    createExplosion(b.group.position, 6, 0x888888, 'wall');
                    if (b.group.userData.ricochetsRemaining > 0) {
                        if (Math.abs(Math.abs(b.group.position.x) - 46) < 0.2) {
                            b.group.userData.vel.x *= -1;
                        }
                        if (Math.abs(Math.abs(b.group.position.z) - 46) < 0.2) {
                            b.group.userData.vel.z *= -1;
                        }
                        b.group.userData.ricochetsRemaining--;
                        b.group.position.addScaledVector(
                            b.group.userData.vel.clone().normalize(),
                            0.08
                        );
                        b.frameEndPosition.copy(b.group.position);
                    } else {
                        hit = true;
                    }
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
                            if (!enemy.isDead && !b.hitEnemyIds.has(enemy.mesh.uuid)) {
                                // Preserve the forgiving cylindrical hitbox but
                                // test the projectile's complete travelled path.
                                const enemyHitTime = getSegmentCylinderHitTime(
                                    b.previousPosition,
                                    b.group.position,
                                    enemy.mesh.position,
                                    enemy.typeData?.isBoss
                                        ? 2.6 * (enemy.typeData.size || 1)
                                        : 2.6,
                                    enemy.typeData?.isBoss ? 8.0 : 6.0
                                );

                                if (enemyHitTime !== null) {
                                    bulletImpactPosition.copy(b.previousPosition).lerp(
                                        b.group.position,
                                        enemyHitTime
                                    );
                                    b.group.position.copy(bulletImpactPosition);
                                    if (isReflectorShieldActive(enemy)) {
                                        createExplosion(b.group.position, 8, 0xc4b5fd, 'armor');
                                        playGameSound('impact');
                                        hit = true;
                                        break;
                                    }
                                    const shieldedDamage = isShieldFrontHit(
                                        enemy,
                                        b.previousPosition
                                    ) ? b.group.userData.damage * 0.25 : b.group.userData.damage;
                                    enemy.takeDamage(shieldedDamage);
                                    playGameSound('impact');

                                    const enemyColor = ENEMY_TYPES[enemy.type]?.color || 0xff0000;
                                    // Pass enemy type for specific visual effects
                                    createExplosion(b.group.position, 18, enemyColor, 'armor', enemy.type);

                                    b.hitEnemyIds.add(enemy.mesh.uuid);
                                    if (b.group.userData.explosive > 0) {
                                        const infernoBonus = state.evolutions.includes('infernoCannon')
                                            ? 0.2
                                            : 0;
                                        damageEnemiesInRadius(
                                            b.group.position,
                                            b.group.userData.damage *
                                                (b.group.userData.explosive + infernoBonus),
                                            state.evolutions.includes('infernoCannon') ? 7 : 5,
                                            enemy
                                        );
                                    }
                                    if (enemy.isDead) processEnemyDefeat(enemy);
                                    else if (enemy.typeData?.isBoss) updateBossHUD();

                                    if (b.group.userData.pierceRemaining > 0) {
                                        b.group.userData.pierceRemaining--;
                                        b.group.position.copy(b.frameEndPosition);
                                        continue;
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
                            recordObjectivePlayerDamage();
                            playGameSound('damage');
                            triggerHaptic('medium');
                            createExplosion(b.group.position, 14, 0x4ade80, 'armor');

                            document.getElementById('damage-overlay').style.opacity = String(0.5 * getFlashScale());
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
                if (p.instanceIndex >= p.mesh.count) return;
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
            if (!activeBoss && (!state.guardianPending || state.activeObjective) &&
                clock.getElapsedTime() - state.lastSpawnTime > spawnRate) {
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
                const shakeScale = (state.cameraMode === 'wide' ? 0.55 : 1) *
                    getCameraShakeScale();
                camera.position.x += (Math.random() - 0.5) * state.cameraShake * shakeScale;
                camera.position.z += (Math.random() - 0.5) * state.cameraShake * shakeScale;
                state.cameraShake = Math.max(0, state.cameraShake - dt * 2);
            }

            const now = clock.getElapsedTime();
            if (now - state.lastAutoSaveTime >= 5) {
                state.lastAutoSaveTime = now;
                saveActiveRun();
            }
        }

        function updateHUD() {
            document.getElementById('score').textContent = formatCompactNumber(state.score);
            document.getElementById('coins').textContent = formatCompactNumber(profile.coins);
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

        function formatDuration(seconds) {
            const totalSeconds = Math.max(0, Math.floor(seconds));
            const minutes = Math.floor(totalSeconds / 60);
            const remainder = String(totalSeconds % 60).padStart(2, '0');
            return `${minutes}:${remainder}`;
        }

        function renderRunResults() {
            const isScoreRecord = state.score > profile.bestScore;
            const isLevelRecord = state.level > profile.bestLevel;
            document.getElementById('result-coins').textContent =
                formatCompactNumber(state.runStats.coinsEarned);
            document.getElementById('result-kills').textContent =
                formatCompactNumber(state.runStats.kills);
            document.getElementById('result-combo').textContent =
                String(state.runStats.highestCombo);
            document.getElementById('result-time').textContent =
                formatDuration(state.runStats.elapsedSeconds);
            document.getElementById('result-tank').textContent =
                TANK_DESIGNS[state.runTankId]?.name || TANK_DESIGNS.vanguard.name;
            document.getElementById('result-upgrades').textContent =
                String(state.runStats.upgradeHistory.length);
            const recordMessages = [];
            if (isScoreRecord) recordMessages.push('New best score!');
            if (isLevelRecord) recordMessages.push('New best level!');
            document.getElementById('result-record').textContent = recordMessages.join(' • ');
        }

        function endGame() {
            if (state.gamePhase === 'gameover') return;

            state.isPlaying = false;
            state.gamePhase = 'gameover';
            state.settingsOpen = false;
            state.garageOpen = false;
            state.tutorialOpen = false;
            state.newRunConfirmOpen = false;
            state.comboCount = 0;
            state.comboTimer = 0;
            state.comboMultiplier = 1;
            playGameSound('gameOver');
            triggerHaptic('heavy');
            state.pendingUpgradeCount = 0;
            state.currentUpgradeChoices = [];
            clearInputState();
            renderRunResults();
            updateBestProfile();
            clearActiveRunSave();
            document.getElementById('final-score').textContent = state.score;
            document.getElementById('final-level').textContent = state.level;
            setScreenVisibility('upgrade-choice-screen', false);
            setScreenVisibility('tutorial-screen', false);
            setScreenVisibility('new-run-confirm-screen', false);
            setScreenVisibility('garage-screen', false);
            setScreenVisibility('settings-screen', false);
            setScreenVisibility('pause-screen', false);
            setScreenVisibility('game-over-screen', true);
            hideBossUI();
            hideObjectiveUI();
            setPauseUIVisible(false);
            updateComboIndicator();
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

        function performPhaseDash() {
            if (!player || player.isDead || state.playerStats.phaseDash <= 0 ||
                state.abilityState.dashReadyIn > 0) return false;
            const direction = new THREE.Vector3(state.input.x, 0, state.input.y);
            if (direction.lengthSq() < 0.01) {
                direction.set(
                    Math.sin(player.mesh.rotation.y),
                    0,
                    Math.cos(player.mesh.rotation.y)
                );
            }
            direction.normalize().multiplyScalar(6);
            const nextPosition = player.mesh.position.clone().add(direction);
            nextPosition.x = Math.max(-44, Math.min(44, nextPosition.x));
            nextPosition.z = Math.max(-44, Math.min(44, nextPosition.z));
            nextPosition.y = getTerrainHeight(nextPosition.x, nextPosition.z) + 0.1;
            player.mesh.position.copy(nextPosition);
            state.abilityState.dashReadyIn = 4;
            createExplosion(nextPosition, 8, 0x8b5cf6, 'default');
            triggerHaptic('medium');
            return true;
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

                    const isLeftHalf = touch.clientX < window.innerWidth / 2;
                    const isMovementSide = state.leftHanded ? !isLeftHalf : isLeftHalf;
                    if (isMovementSide) {
                        const tapTime = performance.now();
                        if (tapTime - state.abilityState.lastMoveTapAt <= 320) {
                            performPhaseDash();
                        }
                        state.abilityState.lastMoveTapAt = tapTime;
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
                else {
                    clearInputState();
                    if (state.gamePhase === 'choosing-upgrade' || state.gamePhase === 'paused' || state.gamePhase === 'tutorial') {
                        saveActiveRun();
                    }
                }
            });
            window.addEventListener('pagehide', () => {
                saveProfile();
                saveActiveRun();
            });

            function updateKeyboardInput() {
                state.input.x = (keys['d'] ? 1 : 0) - (keys['a'] ? 1 : 0);
                state.input.y = (keys['s'] ? 1 : 0) - (keys['w'] ? 1 : 0);
            }
        }

        // Button handlers
        syncHUDControls();

        document.getElementById('btn-continue').addEventListener('click', (e) => {
            e.stopPropagation();
            continueSavedRun();
        });

        document.getElementById('btn-garage').addEventListener('click', (e) => {
            e.stopPropagation();
            openGarage();
        });

        document.getElementById('btn-close-garage').addEventListener('click', (e) => {
            e.stopPropagation();
            closeGarage();
        });

        document.getElementById('btn-start').addEventListener('click', (e) => {
            e.stopPropagation();
            requestNewRun();
        });

        document.getElementById('confirm-continue-run').addEventListener('click', (e) => {
            e.stopPropagation();
            continueConfirmedRun();
        });

        document.getElementById('confirm-new-run').addEventListener('click', (e) => {
            e.stopPropagation();
            startConfirmedNewRun();
        });

        document.getElementById('cancel-new-run').addEventListener('click', (e) => {
            e.stopPropagation();
            closeNewRunConfirmation();
        });

        document.getElementById('tutorial-next').addEventListener('click', (e) => {
            e.stopPropagation();
            advanceTutorial();
        });

        document.getElementById('tutorial-skip').addEventListener('click', (e) => {
            e.stopPropagation();
            finishTutorial();
        });

        document.getElementById('btn-restart').addEventListener('click', (e) => {
            e.stopPropagation();
            startGame();
        });

        document.getElementById('btn-results-garage').addEventListener('click', (e) => {
            e.stopPropagation();
            quitToMenu();
            openGarage();
        });

        document.getElementById('btn-results-menu').addEventListener('click', (e) => {
            e.stopPropagation();
            quitToMenu();
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

        document.getElementById('toggle-quality-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleQualityMode();
        });

        document.getElementById('toggle-haptics-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleHaptics();
        });

        document.getElementById('toggle-shake-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCameraShakeMode();
        });

        document.getElementById('toggle-flashes-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleReducedFlashes();
        });

        document.getElementById('toggle-handed-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleHandedControls();
        });

        document.getElementById('toggle-hud-scale-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleHudScale();
        });

        document.getElementById('replay-tutorial-panel').addEventListener('click', (e) => {
            e.stopPropagation();
            openTutorial('settings');
        });

        document.getElementById('effects-volume').addEventListener('input', (e) => {
            setEffectsVolume(e.target.value);
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
                if (isActive) return;
                if (state.gamePhase === 'playing') pauseGame();
                else if (state.gamePhase === 'choosing-upgrade' || state.gamePhase === 'paused' || state.gamePhase === 'tutorial') {
                    saveActiveRun();
                }
            },
            handleBackButton() {
                if (state.newRunConfirmOpen) {
                    closeNewRunConfirmation();
                    return true;
                }
                if (state.tutorialOpen) return true;
                if (state.garageOpen) {
                    closeGarage();
                    return true;
                }
                if (state.gamePhase === 'choosing-upgrade') return true;
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

        loadPersistentData();
        document.getElementById('start-screen').classList.remove('hidden');
        setPauseUIVisible(false);
        syncHUDControls();
        init();
        updateHUD();
        updateComboIndicator();
