const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const ThreeBase = require('three');

const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'index.html');
const gamePath = path.join(root, 'assets/js/game.js');

function createTouchEvent(window, type, touches) {
  const event = new window.Event(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'changedTouches', { value: touches });
  return event;
}

function getSceneStats(scene) {
  const stats = { objects: 0, meshes: 0, instancedMeshes: 0, lights: 0 };
  const geometries = new Set();
  const materials = new Set();
  scene.traverse((object) => {
    stats.objects += 1;
    if (object.isMesh) {
      stats.meshes += 1;
      if (object.geometry) geometries.add(object.geometry);
      const objectMaterials = Array.isArray(object.material) ? object.material : [object.material];
      objectMaterials.filter(Boolean).forEach((material) => materials.add(material));
    }
    if (object.isInstancedMesh) stats.instancedMeshes += 1;
    if (object.isLight) stats.lights += 1;
  });
  stats.uniqueGeometries = geometries.size;
  stats.uniqueMaterials = materials.size;
  return stats;
}

function collectResources(roots) {
  const geometries = new Set();
  const materials = new Set();
  roots.forEach((rootObject) => {
    rootObject.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      const objectMaterials = Array.isArray(object.material) ? object.material : [object.material];
      objectMaterials.filter(Boolean).forEach((material) => materials.add(material));
    });
  });
  return { geometries, materials };
}

function createHarness(storageSeed = {}) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const gameSource = fs.readFileSync(gamePath, 'utf8');
  const dom = new JSDOM(html, {
    url: 'http://localhost/tank-realms',
    pretendToBeVisual: true,
    runScripts: 'outside-only'
  });
  const { window } = dom;
  Object.entries(storageSeed).forEach(([key, value]) => {
    window.localStorage.setItem(key, value);
  });
  if (!Object.hasOwn(storageSeed, 'tank_realms_profile_v1')) {
    window.localStorage.setItem('tank_realms_profile_v1', JSON.stringify({
      version: 1,
      tutorialCompleted: true,
      settings: {}
    }));
  }

  Object.defineProperty(window, 'innerWidth', { value: 390, writable: true });
  Object.defineProperty(window, 'innerHeight', { value: 844, writable: true });
  Object.defineProperty(window, 'devicePixelRatio', { value: 3, writable: true });

  const canvasContext = {
    createLinearGradient() {
      return { addColorStop() {} };
    },
    fillRect() {},
    fillStyle: null
  };
  window.HTMLCanvasElement.prototype.getContext = function getContext(type) {
    return type === '2d' ? canvasContext : null;
  };

  const animationFrames = [];
  const intervals = [];
  window.requestAnimationFrame = (callback) => {
    animationFrames.push(callback);
    return animationFrames.length;
  };
  window.cancelAnimationFrame = () => {};
  window.setTimeout = () => 1;
  window.clearTimeout = () => {};
  window.setInterval = (callback, delay) => {
    intervals.push({ callback, delay });
    return intervals.length;
  };
  window.clearInterval = () => {};

  class FakeRenderer {
    constructor() {
      this.domElement = window.document.createElement('canvas');
      this.shadowMap = {};
      this.renderCount = 0;
    }

    setSize(width, height) {
      this.width = width;
      this.height = height;
    }

    setPixelRatio(pixelRatio) {
      this.pixelRatio = pixelRatio;
    }

    render() {
      this.renderCount += 1;
    }
  }

  window.THREE = { ...ThreeBase, WebGLRenderer: FakeRenderer };

  const testApi = `
    window.__tankTest = {
      state: () => state,
      profile: () => profile,
      cachedActiveRun: () => cachedActiveRun,
      player: () => player,
      activeBoss: () => activeBoss,
      enemies: () => enemies,
      renderer: () => renderer,
      scene: () => scene,
      bullets: () => bullets,
      bulletPool: () => bulletPool,
      environmentColliders: () => environmentColliders,
      environmentObjects: () => environmentObjects,
      environmentParticles: () => environmentParticles,
      environmentParticleBatches: () => environmentParticleBatches,
      environmentRoots: () => [
        ...environmentObjects,
        ...environmentParticleBatches,
        groundMesh,
        waterMesh,
        ...lavaMeshes,
        ambientLight,
        dirLight,
        hemisphereLight
      ].filter(Boolean),
      startGame,
      continueSavedRun,
      saveActiveRun,
      clearActiveRunSave,
      sanitizeProfile,
      sanitizeActiveRun,
      addXP,
      applyUpgradeChoice,
      deriveUnlockedEvolutions,
      getStatsFromUpgradeTiers,
      performPhaseDash,
      awardEnemyKill,
      updateCombo,
      queueGuardianIfNeeded,
      spawnPendingGuardian,
      handleGuardianDefeat,
      updateBossHUD,
      createArtilleryStrike,
      createMine,
      updateHazards,
      isShieldFrontHit,
      isReflectorShieldActive,
      artilleryStrikes: () => artilleryStrikes,
      mines: () => mines,
      startRealmObjectiveIfNeeded,
      updateRealmObjective,
      recordObjectiveKill,
      completeRealmObjective,
      strategicEnemyTypes: () => ['shield', 'artillery', 'mineLayer', 'commander', 'droneCarrier', 'reflector'],
      guardianTypes: () => REALM_GUARDIAN_TYPES,
      openGarage,
      closeGarage,
      renderGarage,
      unlockTank,
      selectTank,
      buyPermanentUpgrade,
      toggleQualityMode,
      applyQualitySettings,
      getQualityPreset,
      getQualityAdjustedCount,
      toggleHaptics,
      toggleCameraShakeMode,
      toggleReducedFlashes,
      toggleHandedControls,
      toggleHudScale,
      setEffectsVolume,
      calculateDamageAfterArmor,
      requestNewRun,
      closeNewRunConfirmation,
      advanceTutorial,
      finishTutorial,
      renderRunResults,
      playGameSound,
      tankDesigns: () => TANK_DESIGNS,
      permanentUpgradeDefinitions: () => PERMANENT_UPGRADE_DEFINITIONS,
      pauseGame,
      resumeGame,
      openSettings,
      closeSettings,
      endGame,
      quitToMenu,
      loadBiome,
      shoot,
      acquireBulletVisual,
      releaseBulletVisual,
      releaseBulletAt,
      updatePhysics,
      getFrameEquivalentAlpha,
      getFrameEquivalentMultiplier,
      getFrameEquivalentChance,
      getSegmentCylinderHitTime,
      getArenaBoundaryHitTime,
      getSpawnRateForLevel,
      getTouchControlTop,
      makeEnemy: (type, x, z) => {
        const enemy = new Tank(ENEMY_TYPES[type].color, false, type);
        enemy.mesh.position.set(x, 0, z);
        enemies.push(enemy);
        return enemy;
      },
      measureTankMovement: (fps, seconds) => {
        const tank = new Tank(0x22c55e, true);
        tank.mesh.position.set(0, 0, 0);
        const input = new THREE.Vector2(0, 1);
        for (let frame = 0; frame < fps * seconds; frame++) {
          tank.move(1 / fps, input);
        }
        const distance = tank.mesh.position.z;
        removeAndDisposeObject(tank.mesh);
        return distance;
      }
    };
  `;

  window.eval(`${gameSource}\n${testApi}`);
  return { dom, window, api: window.__tankTest, animationFrames, intervals };
}

test('Tank Realms stabilized runtime smoke test', async (t) => {
  const harness = createHarness();
  const { window, api } = harness;
  const document = window.document;

  await t.test('starts without the old core-loop exception', () => {
    const state = api.state();
    assert.equal(state.gamePhase, 'menu');
    assert.equal(state.soundEnabled, false);
    assert.equal(state.cameraMode, 'follow');
    assert.equal(state.controlAssist, false);
    assert.equal(harness.intervals.length, 0);
    assert.equal(api.renderer().pixelRatio, 1);
    assert.equal(harness.animationFrames.length, 1);
  });

  await t.test('batches dense scenery and keeps only gameplay colliders', () => {
    const stats = getSceneStats(api.scene());
    if (process.env.TANK_PERF_REPORT === '1') {
      process.stdout.write(`\nPHASE3_SCENE_STATS ${JSON.stringify(stats)}\n`);
    }
    assert.ok(stats.meshes < 250, `expected fewer than 250 meshes, found ${stats.meshes}`);
    assert.ok(
      stats.instancedMeshes >= 7,
      'forest should instance trees, background rocks, grass, and environment particles'
    );
    assert.equal(api.environmentColliders().length, 80);
  });

  await t.test('applies persistent Low, Medium, and High quality budgets', () => {
    assert.equal(api.state().qualityMode, 'medium');
    assert.equal(api.renderer().pixelRatio, 1);
    const colliderCount = api.environmentColliders().length;
    const ambientBatch = api.environmentParticleBatches()[0];
    const mediumAmbientCount = ambientBatch.count;
    assert.ok(mediumAmbientCount < ambientBatch.userData.fullInstanceCount);

    api.toggleQualityMode();
    assert.equal(api.state().qualityMode, 'high');
    assert.equal(api.renderer().pixelRatio, 1.25);
    assert.equal(ambientBatch.count, ambientBatch.userData.fullInstanceCount);

    api.toggleQualityMode();
    assert.equal(api.state().qualityMode, 'low');
    assert.equal(api.renderer().pixelRatio, 0.8);
    assert.ok(ambientBatch.count < mediumAmbientCount);
    assert.equal(api.environmentColliders().length, colliderCount);
    assert.equal(api.getQualityAdjustedCount(10), 5);
    const lowBullet = api.acquireBulletVisual(0x00ffff);
    assert.equal(lowBullet.light.visible, false);
    api.releaseBulletVisual(lowBullet);

    api.toggleQualityMode();
    assert.equal(api.state().qualityMode, 'medium');
    assert.equal(
      JSON.parse(window.localStorage.getItem('tank_realms_profile_v1')).settings.qualityMode,
      'medium'
    );
  });

  await t.test('uses diminishing armor instead of invulnerability', () => {
    assert.equal(api.calculateDamageAfterArmor(30, 0), 30);
    assert.equal(api.calculateDamageAfterArmor(30, 50), 18);
    assert.ok(api.calculateDamageAfterArmor(30, 20) > api.calculateDamageAfterArmor(30, 50));
    assert.ok(api.calculateDamageAfterArmor(8, 50) > 1);
  });

  await t.test('persists accessibility and comfort settings', () => {
    api.toggleHaptics();
    assert.equal(api.state().hapticsEnabled, false);
    api.toggleCameraShakeMode();
    assert.equal(api.state().cameraShakeMode, 'off');
    api.toggleCameraShakeMode();
    assert.equal(api.state().cameraShakeMode, 'reduced');
    api.toggleCameraShakeMode();
    assert.equal(api.state().cameraShakeMode, 'full');
    api.toggleReducedFlashes();
    assert.equal(document.body.classList.contains('reduced-flashes'), true);
    api.toggleReducedFlashes();
    api.toggleHandedControls();
    assert.equal(api.state().leftHanded, true);
    api.toggleHandedControls();
    api.toggleHudScale();
    assert.equal(document.body.classList.contains('hud-large'), true);
    api.toggleHudScale();
    api.setEffectsVolume(35);
    assert.equal(api.state().effectsVolume, 0.35);
    api.setEffectsVolume(70);
    api.toggleHaptics();
    assert.equal(api.state().hapticsEnabled, true);
  });

  await t.test('disposes old biome geometries, materials, and background texture', () => {
    const resources = collectResources(api.environmentRoots());
    const oldBackground = api.scene().background;
    let disposedGeometries = 0;
    let disposedMaterials = 0;
    let disposedBackgrounds = 0;

    resources.geometries.forEach((geometry) => {
      geometry.addEventListener('dispose', () => { disposedGeometries += 1; });
    });
    resources.materials.forEach((material) => {
      material.addEventListener('dispose', () => { disposedMaterials += 1; });
    });
    oldBackground.addEventListener('dispose', () => { disposedBackgrounds += 1; });

    api.loadBiome(1);
    assert.equal(disposedGeometries, resources.geometries.size);
    assert.equal(disposedMaterials, resources.materials.size);
    assert.equal(disposedBackgrounds, 1);
    assert.notEqual(api.scene().background, oldBackground);
  });

  await t.test('moves through playing, paused, settings, and game-over states', () => {
    api.startGame();
    assert.equal(api.state().gamePhase, 'playing');
    assert.equal(api.state().isPlaying, true);
    assert.ok(api.player());

    api.openSettings();
    assert.equal(api.state().gamePhase, 'paused');
    assert.equal(api.state().settingsOpen, true);
    assert.equal(document.getElementById('settings-screen').classList.contains('hidden'), false);
    assert.equal(document.getElementById('btn-pause').classList.contains('show'), false);
    assert.equal(document.getElementById('hud-quickbar').classList.contains('show'), false);

    api.closeSettings();
    assert.equal(api.state().settingsOpen, false);
    assert.equal(document.getElementById('settings-screen').classList.contains('hidden'), true);
    assert.equal(document.getElementById('btn-pause').classList.contains('show'), true);

    api.resumeGame();
    assert.equal(api.state().gamePhase, 'playing');

    api.endGame();
    assert.equal(api.state().gamePhase, 'gameover');
    assert.equal(api.state().isPlaying, false);
    assert.equal(document.getElementById('game-over-screen').classList.contains('hidden'), false);
    assert.equal(document.getElementById('btn-pause').classList.contains('show'), false);
    assert.equal(document.getElementById('hud-quickbar').classList.contains('show'), false);
  });

  await t.test('pauses combat for three unique level-up choices', () => {
    api.startGame();
    api.addXP(100);

    assert.equal(api.state().level, 2);
    assert.equal(api.state().gamePhase, 'choosing-upgrade');
    assert.equal(api.state().pendingUpgradeCount, 1);
    assert.equal(api.state().currentUpgradeChoices.length, 3);
    assert.equal(new Set(api.state().currentUpgradeChoices).size, 3);
    assert.equal(
      document.getElementById('upgrade-choice-screen').classList.contains('hidden'),
      false
    );
    assert.equal(document.querySelectorAll('.upgrade-choice-card').length, 3);
    assert.equal(document.getElementById('btn-pause').classList.contains('show'), false);
    assert.equal(window.TankRealmsApp.handleBackButton(), true);
    assert.equal(api.state().gamePhase, 'choosing-upgrade');

    const selectedUpgrade = api.state().currentUpgradeChoices[0];
    api.applyUpgradeChoice(selectedUpgrade);
    assert.equal(api.state().upgradeTiers[selectedUpgrade], 1);
    assert.equal(api.state().pendingUpgradeCount, 0);
    assert.equal(api.state().gamePhase, 'playing');
    assert.equal(
      document.getElementById('upgrade-choice-screen').classList.contains('hidden'),
      true
    );
  });

  await t.test('unlocks build evolutions and trade-off upgrades safely', () => {
    const tiers = {
      ...api.state().upgradeTiers,
      damage: 3,
      multishot: 1,
      armor: 4,
      maxHp: 4,
      speed: 3,
      regen: 3,
      fireRate: 3,
      explosive: 2,
      piercing: 2,
      critChance: 3,
      lightweight: 1
    };
    const evolutions = api.deriveUnlockedEvolutions(tiers);
    assert.deepEqual(Array.from(evolutions), [
      'plasmaBarrage',
      'fortressProtocol',
      'mobileRepair',
      'infernoCannon',
      'railgunCore'
    ]);
    const stats = api.getStatsFromUpgradeTiers(tiers);
    assert.equal(stats.lightweight, 1);
    assert.equal(stats.maxHp, 190);
    assert.equal(stats.regen, 5);
    assert.ok(stats.speed > 100);
  });

  await t.test('phase dash has a cooldown and stays inside the arena', () => {
    api.startGame();
    api.state().playerStats.phaseDash = 1;
    api.state().abilityState.dashReadyIn = 0;
    const before = api.player().mesh.position.clone();
    assert.equal(api.performPhaseDash(), true);
    assert.notEqual(api.player().mesh.position.z, before.z);
    assert.equal(api.performPhaseDash(), false);
    assert.equal(api.state().abilityState.dashReadyIn, 4);
  });

  await t.test('gates realm transitions behind biome guardians', () => {
    api.startGame();
    api.addXP(100);
    api.applyUpgradeChoice(api.state().currentUpgradeChoices[0]);
    assert.equal(api.state().activeObjective.type, 'markedHeavy');
    const objectiveTarget = api.enemies().find(enemy => enemy.isObjectiveTarget);
    assert.ok(objectiveTarget);
    api.recordObjectiveKill(objectiveTarget);
    assert.equal(api.state().activeObjective, null);
    api.addXP(140);
    assert.equal(api.state().level, 3);
    assert.equal(api.state().currentBiome, 0);
    assert.equal(api.state().guardianPending, true);
    api.applyUpgradeChoice(api.state().currentUpgradeChoices[0]);

    const boss = api.activeBoss();
    assert.ok(boss);
    assert.equal(boss.type, 'forestGuardian');
    assert.equal(api.guardianTypes().length, 6);
    assert.equal(
      document.getElementById('boss-hud').classList.contains('show'),
      true
    );
    const coinsBeforeBonus = api.profile().coins;
    boss.takeDamage(1e9);
    assert.equal(api.handleGuardianDefeat(boss), 100);
    assert.equal(api.activeBoss(), null);
    assert.equal(api.state().realmProgress, 1);
    assert.equal(api.state().currentBiome, 1);
    assert.equal(api.profile().coins, coinsBeforeBonus + 100);
    assert.equal(
      document.getElementById('boss-hud').classList.contains('show'),
      false
    );
  });

  await t.test('strategic enemies telegraph hazards and defensive roles', () => {
    api.startGame();
    assert.equal(api.strategicEnemyTypes().length, 6);
    const shield = api.makeEnemy('shield', 0, 10);
    shield.mesh.rotation.y = 0;
    assert.equal(
      api.isShieldFrontHit(shield, new window.THREE.Vector3(0, 0, 15)),
      true
    );
    assert.equal(
      api.isShieldFrontHit(shield, new window.THREE.Vector3(0, 0, 5)),
      false
    );

    const startingHp = api.player().hp;
    api.createArtilleryStrike(api.player().mesh.position, 10);
    assert.equal(api.artilleryStrikes().length, 1);
    api.updateHazards(1.6);
    assert.ok(api.player().hp < startingHp);

    const hpAfterArtillery = api.player().hp;
    api.createMine(api.player().mesh.position, 8);
    assert.equal(api.mines().length, 1);
    api.updateHazards(1);
    assert.ok(api.player().hp < hpAfterArtillery);
  });

  await t.test('reserves the upper portrait area for HUD controls', () => {
    assert.equal(api.getTouchControlTop(), 844 * 0.3);
  });

  await t.test('releases firing and movement when touches are cancelled', () => {
    api.startGame();
    const inputLayer = document.getElementById('input-layer');

    // HUD-area touches must not start movement or firing.
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 90, clientX: 50, clientY: 100 },
      { identifier: 91, clientX: 320, clientY: 100 }
    ]));
    assert.equal(api.state().input.isFiring, false);
    assert.equal(document.getElementById('joystick-base').style.display, 'none');

    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 1, clientX: 300, clientY: 700 }
    ]));
    assert.equal(api.state().input.isFiring, true);

    // A second firing finger is ignored and cannot replace the first one.
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 2, clientX: 320, clientY: 720 }
    ]));
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchcancel', [
      { identifier: 2, clientX: 320, clientY: 720 }
    ]));
    assert.equal(api.state().input.isFiring, true);

    inputLayer.dispatchEvent(createTouchEvent(window, 'touchcancel', [
      { identifier: 1, clientX: 300, clientY: 700 }
    ]));
    assert.equal(api.state().input.isFiring, false);

    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 3, clientX: 50, clientY: 700 }
    ]));
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchmove', [
      { identifier: 3, clientX: 90, clientY: 730 }
    ]));
    assert.notEqual(api.state().input.x, 0);

    inputLayer.dispatchEvent(createTouchEvent(window, 'touchcancel', [
      { identifier: 3, clientX: 90, clientY: 730 }
    ]));
    assert.equal(api.state().input.x, 0);
    assert.equal(api.state().input.y, 0);
  });

  await t.test('clears active controls if the app loses focus', () => {
    const inputLayer = document.getElementById('input-layer');
    inputLayer.dispatchEvent(createTouchEvent(window, 'touchstart', [
      { identifier: 4, clientX: 300, clientY: 700 }
    ]));
    assert.equal(api.state().input.isFiring, true);

    window.dispatchEvent(new window.Event('blur'));
    assert.equal(api.state().input.isFiring, false);
  });

  await t.test('uses deterministic spawn timing instead of a background interval', () => {
    const levelOneExpected = 3.35 / 1.11;
    assert.ok(Math.abs(api.getSpawnRateForLevel(1) - levelOneExpected) < 1e-10);
    assert.ok(api.getSpawnRateForLevel(10) < api.getSpawnRateForLevel(1));
    assert.equal(harness.intervals.length, 0);
  });

  await t.test('matches 60 FPS behavior at 30, 60, and 120 FPS', () => {
    const chanceAt60 = 0.008;
    const chanceAt30 = api.getFrameEquivalentChance(chanceAt60, 1 / 30);
    const chanceAt120 = api.getFrameEquivalentChance(chanceAt60, 1 / 120);
    assert.ok(Math.abs(chanceAt30 - (1 - Math.pow(1 - chanceAt60, 2))) < 1e-12);
    assert.ok(Math.abs((1 - Math.pow(1 - chanceAt120, 2)) - chanceAt60) < 1e-12);

    const movement30 = api.measureTankMovement(30, 1);
    const movement60 = api.measureTankMovement(60, 1);
    const movement120 = api.measureTankMovement(120, 1);
    assert.ok(Math.abs(movement30 - movement60) < 1e-8);
    assert.ok(Math.abs(movement120 - movement60) < 1e-8);
  });

  await t.test('detects collisions across the complete projectile path', () => {
    const start = new window.THREE.Vector3(0, 2, 8.45);
    const end = new window.THREE.Vector3(0, 2, 14.45);
    const target = new window.THREE.Vector3(0, 0, 11.5);
    assert.ok(start.distanceTo(target) > 2.6);
    assert.ok(end.distanceTo(target) > 2.6);
    assert.notEqual(api.getSegmentCylinderHitTime(start, end, target, 2.6, 6), null);
    assert.ok(Math.abs(
      api.getArenaBoundaryHitTime(
        new window.THREE.Vector3(45, 2, 0),
        new window.THREE.Vector3(51, 2, 0)
      ) - (1 / 6)
    ) < 1e-12);
  });

  await t.test('prevents a stalled frame from tunnelling through an enemy', () => {
    api.startGame();
    const enemy = api.makeEnemy('soldier', 0, 11.5);
    enemy.move = () => {};
    enemy.aimAt = () => {};
    const oldRandom = window.Math.random;
    window.Math.random = () => 1;

    api.shoot(api.player());
    api.updatePhysics(0.1);
    api.updatePhysics(0.1);

    window.Math.random = oldRandom;
    assert.equal(enemy.hp, 28);
    assert.equal(api.bullets().length, 0);
  });

  await t.test('clamps unsafe values from edited save data', () => {
    const unsafeRun = api.sanitizeActiveRun({
      version: 1,
      alive: true,
      level: 999999,
      xp: 999999,
      xpToNext: 10,
      currentBiome: 999,
      upgradeTiers: {
        speed: 999,
        damage: 999,
        fireRate: 999,
        maxHp: 999,
        regen: 999,
        armor: 999,
        multishot: 999
      },
      player: {
        hp: 999999,
        position: { x: 999, z: -999 },
        rotationY: 999
      },
      enemies: [{ type: 'not-real', hp: 999 }]
    });

    assert.equal(unsafeRun.level, 10000);
    assert.equal(unsafeRun.currentBiome, 5);
    assert.equal(unsafeRun.playerStats.speed, 205);
    assert.equal(unsafeRun.playerStats.damage, 300);
    assert.equal(unsafeRun.playerStats.fireRate, 220);
    assert.equal(unsafeRun.playerStats.maxHp, 330);
    assert.equal(unsafeRun.playerStats.armor, 45);
    assert.equal(unsafeRun.playerStats.regen, 12);
    assert.equal(unsafeRun.playerStats.multishot, 1);
    assert.equal(unsafeRun.player.hp, 330);
    assert.equal(unsafeRun.player.position.x, 44);
    assert.equal(unsafeRun.player.position.z, -44);
    assert.equal(unsafeRun.enemies.length, 0);
  });

  await t.test('responds safely to native app background and Back events', () => {
    api.startGame();
    window.TankRealmsApp.handleAppStateChange(false);
    assert.equal(api.state().gamePhase, 'paused');

    assert.equal(window.TankRealmsApp.handleBackButton(), true);
    assert.equal(api.state().gamePhase, 'playing');

    assert.equal(window.TankRealmsApp.handleBackButton(), true);
    assert.equal(api.state().gamePhase, 'paused');

    api.quitToMenu();
    assert.equal(window.TankRealmsApp.handleBackButton(), false);
  });

  await t.test('saves and resumes a living run from the menu', () => {
    api.startGame();
    api.state().score = 4321;
    api.player().hp = 73;
    api.player().mesh.position.set(7, 0, -9);
    const savedEnemy = api.makeEnemy('heavy', -6, 8);
    savedEnemy.hp = 91;

    assert.equal(api.saveActiveRun(), true);
    api.quitToMenu();
    assert.equal(document.getElementById('btn-continue').classList.contains('available'), true);
    assert.equal(api.continueSavedRun(), true);
    assert.equal(api.state().score, 4321);
    assert.equal(api.player().hp, 73);
    assert.equal(api.player().mesh.position.x, 7);
    assert.equal(api.player().mesh.position.z, -9);
    assert.equal(api.enemies().length, 1);
    assert.equal(api.enemies()[0].type, 'heavy');
    assert.equal(api.enemies()[0].hp, 91);
  });

  await t.test('defeat clears only the active run and records best progress', () => {
    api.state().score = 9876;
    api.state().level = 8;
    api.endGame();
    assert.equal(window.localStorage.getItem('tank_realms_active_run_v1'), null);
    assert.equal(api.cachedActiveRun(), null);
    assert.equal(api.profile().bestScore, 9876);
    assert.equal(api.profile().bestLevel, 8);
    assert.equal(document.getElementById('btn-continue').classList.contains('available'), false);
  });

  await t.test('reuses projectile objects instead of allocating every shot', () => {
    api.startGame();
    api.shoot(api.player());
    assert.equal(api.bullets().length, 1);
    const firstBulletGroup = api.bullets()[0].group;

    api.releaseBulletAt(0);
    assert.equal(api.bullets().length, 0);
    assert.equal(api.bulletPool().length, 1);

    api.shoot(api.player());
    assert.equal(api.bullets()[0].group, firstBulletGroup);
    api.releaseBulletAt(0);
  });

  await t.test('projectile upgrades configure pooled plasma safely', () => {
    api.startGame();
    Object.assign(api.state().playerStats, {
      piercing: 2,
      explosive: 0.3,
      ricochet: 2,
      homing: 0.2,
      critChance: 1
    });
    api.state().evolutions = ['railgunCore', 'infernoCannon'];
    api.shoot(api.player());
    const projectile = api.bullets()[0];
    assert.equal(projectile.group.userData.pierceRemaining, 4);
    assert.equal(projectile.group.userData.ricochetsRemaining, 2);
    assert.equal(projectile.group.userData.explosive, 0.3);
    assert.equal(projectile.group.userData.homing, 0.2);
    assert.equal(projectile.group.userData.isCritical, true);
    api.releaseBulletAt(0);
  });

  await t.test('caps the projectile pool during a 200-projectile stress release', () => {
    const stressBullets = Array.from(
      { length: 200 },
      () => api.acquireBulletVisual(0x00ffff)
    );
    let overflowGeometryDisposals = 0;
    stressBullets[stressBullets.length - 1].group.children[0].geometry.addEventListener(
      'dispose',
      () => { overflowGeometryDisposals += 1; }
    );

    stressBullets.forEach((bullet) => api.releaseBulletVisual(bullet));
    assert.equal(api.bulletPool().length, 128);
    assert.equal(overflowGeometryDisposals, 1);
  });

  await t.test('stays within the mesh budget through 30 biome transitions', () => {
    api.startGame();
    for (let i = 0; i < 30; i += 1) {
      api.loadBiome(i % 6);
      const stats = getSceneStats(api.scene());
      assert.ok(stats.meshes < 350, `biome ${i % 6} created ${stats.meshes} meshes`);
      assert.ok(api.environmentColliders().length <= 100);
    }
  });

  await t.test('can restart 50 times and return cleanly to the menu', () => {
    for (let i = 0; i < 50; i += 1) api.startGame();
    assert.equal(api.state().gamePhase, 'playing');

    api.quitToMenu();
    assert.equal(api.state().gamePhase, 'menu');
    assert.equal(api.state().isPlaying, false);
    assert.equal(api.player(), null);
    assert.equal(document.getElementById('start-screen').classList.contains('hidden'), false);
  });

  harness.dom.window.close();
});

test('active run survives a complete page reload', () => {
  const firstSession = createHarness();
  firstSession.api.startGame();
  firstSession.api.state().score = 2468;
  firstSession.api.player().hp = 64;
  firstSession.api.player().mesh.position.set(-11, 0, 13);
  firstSession.api.saveActiveRun();
  const savedRun = firstSession.window.localStorage.getItem('tank_realms_active_run_v1');
  firstSession.dom.window.close();

  const secondSession = createHarness({ tank_realms_active_run_v1: savedRun });
  assert.equal(secondSession.api.cachedActiveRun().score, 2468);
  assert.equal(
    secondSession.window.document.getElementById('btn-continue').classList.contains('available'),
    true
  );
  assert.equal(secondSession.api.continueSavedRun(), true);
  assert.equal(secondSession.api.player().hp, 64);
  assert.equal(secondSession.api.player().mesh.position.x, -11);
  assert.equal(secondSession.api.player().mesh.position.z, 13);
  secondSession.dom.window.close();
});

test('pending upgrade choices survive a page reload', () => {
  const firstSession = createHarness();
  firstSession.api.startGame();
  firstSession.api.addXP(100);
  const originalChoices = [...firstSession.api.state().currentUpgradeChoices];
  const savedRun = firstSession.window.localStorage.getItem('tank_realms_active_run_v1');
  firstSession.dom.window.close();

  const secondSession = createHarness({ tank_realms_active_run_v1: savedRun });
  assert.equal(secondSession.api.continueSavedRun(), true);
  assert.equal(secondSession.api.state().gamePhase, 'choosing-upgrade');
  assert.deepEqual(Array.from(secondSession.api.state().currentUpgradeChoices), originalChoices);
  assert.equal(
    secondSession.window.document.querySelectorAll('.upgrade-choice-card').length,
    3
  );
  secondSession.dom.window.close();
});

test('active realm objective survives a complete page reload', () => {
  const firstSession = createHarness();
  firstSession.api.startGame();
  firstSession.api.state().realmProgress = 1;
  firstSession.api.state().lastObjectiveRealm = 0;
  firstSession.api.state().level = 5;
  firstSession.api.startRealmObjectiveIfNeeded();
  firstSession.api.updateRealmObjective(7);
  firstSession.api.saveActiveRun();
  const savedRun = firstSession.window.localStorage.getItem('tank_realms_active_run_v1');
  firstSession.dom.window.close();

  const secondSession = createHarness({ tank_realms_active_run_v1: savedRun });
  assert.equal(secondSession.api.continueSavedRun(), true);
  assert.equal(secondSession.api.state().activeObjective.type, 'survive');
  assert.equal(secondSession.api.state().activeObjective.progress, 7);
  assert.equal(
    secondSession.window.document.getElementById('objective-hud').classList.contains('show'),
    true
  );
  secondSession.dom.window.close();
});

test('active guardian survives a complete page reload', () => {
  const firstSession = createHarness();
  firstSession.api.startGame();
  firstSession.api.state().level = 3;
  firstSession.api.queueGuardianIfNeeded();
  const firstBoss = firstSession.api.spawnPendingGuardian();
  firstBoss.hp = 321;
  firstSession.api.saveActiveRun();
  const savedRun = firstSession.window.localStorage.getItem('tank_realms_active_run_v1');
  firstSession.dom.window.close();

  const secondSession = createHarness({ tank_realms_active_run_v1: savedRun });
  assert.equal(secondSession.api.continueSavedRun(), true);
  assert.ok(secondSession.api.activeBoss());
  assert.equal(secondSession.api.activeBoss().type, 'forestGuardian');
  assert.equal(secondSession.api.activeBoss().hp, 321);
  assert.equal(
    secondSession.window.document.getElementById('boss-hud').classList.contains('show'),
    true
  );
  secondSession.dom.window.close();
});

test('one saved realm objective is active at a time', () => {
  const harness = createHarness();
  harness.api.startGame();
  const objectiveTypes = [];
  for (let realm = 0; realm < 7; realm++) {
    harness.api.state().realmProgress = realm;
    harness.api.state().lastObjectiveRealm = realm - 1;
    harness.api.state().level = realm * 3 + 2;
    harness.api.state().activeObjective = null;
    assert.equal(harness.api.startRealmObjectiveIfNeeded(), true);
    objectiveTypes.push(harness.api.state().activeObjective.type);
    harness.api.completeRealmObjective();
    assert.equal(harness.api.state().activeObjective, null);
  }
  assert.deepEqual(objectiveTypes, [
    'markedHeavy',
    'survive',
    'medics',
    'combo',
    'defend',
    'noDamage',
    'score'
  ]);
  harness.dom.window.close();
});

test('first-run tutorial pauses battle and completes in four steps', () => {
  const harness = createHarness({
    tank_realms_profile_v1: JSON.stringify({
      version: 1,
      tutorialCompleted: false,
      settings: {}
    })
  });
  harness.api.startGame();
  assert.equal(harness.api.state().gamePhase, 'tutorial');
  assert.equal(harness.api.state().tutorialOpen, true);
  assert.equal(
    harness.window.document.getElementById('tutorial-screen').classList.contains('hidden'),
    false
  );
  for (let i = 0; i < 4; i++) harness.api.advanceTutorial();
  assert.equal(harness.api.state().gamePhase, 'playing');
  assert.equal(harness.api.profile().tutorialCompleted, true);
  assert.equal(harness.api.state().tutorialOpen, false);
  harness.dom.window.close();
});

test('new-run confirmation protects a living save', () => {
  const harness = createHarness();
  harness.api.startGame();
  harness.api.quitToMenu();
  assert.notEqual(harness.api.cachedActiveRun(), null);
  harness.api.requestNewRun();
  assert.equal(harness.api.state().newRunConfirmOpen, true);
  assert.equal(
    harness.window.document.getElementById('new-run-confirm-screen').classList.contains('hidden'),
    false
  );
  harness.api.closeNewRunConfirmation();
  assert.notEqual(harness.api.cachedActiveRun(), null);
  assert.equal(harness.api.state().newRunConfirmOpen, false);
  harness.dom.window.close();
});

test('run results summarize local balance statistics', () => {
  const harness = createHarness();
  harness.api.startGame();
  harness.api.state().score = 3210;
  harness.api.state().level = 9;
  harness.api.state().runStats = {
    kills: 27,
    highestCombo: 8,
    coinsEarned: 245,
    elapsedSeconds: 125,
    upgradeHistory: ['damage', 'speed', 'armor']
  };
  harness.api.endGame();
  const document = harness.window.document;
  assert.equal(document.getElementById('result-coins').textContent, '245');
  assert.equal(document.getElementById('result-kills').textContent, '27');
  assert.equal(document.getElementById('result-combo').textContent, '8');
  assert.equal(document.getElementById('result-time').textContent, '2:05');
  assert.equal(document.getElementById('result-upgrades').textContent, '3');
  assert.match(document.getElementById('result-record').textContent, /New best/);
  harness.dom.window.close();
});

test('garage unlocks equal-base tanks and keeps upgrades separate', () => {
  const harness = createHarness();
  const { api, window } = harness;
  api.profile().coins = 5000;
  api.openGarage();

  assert.equal(window.document.querySelectorAll('.tank-card').length, 3);
  assert.equal(api.profile().ownedTanks.length, 1);
  assert.equal(api.tankDesigns().vanguard.unlockCost, 0);
  assert.notEqual(api.tankDesigns().vanguard.color, api.tankDesigns().ember.color);
  assert.notEqual(
    api.tankDesigns().vanguard.projectileColor,
    api.tankDesigns().ember.projectileColor
  );

  api.unlockTank('ember');
  assert.equal(api.profile().coins, 4250);
  assert.equal(api.profile().selectedTankId, 'ember');
  assert.equal(api.profile().ownedTanks.includes('ember'), true);

  api.buyPermanentUpgrade('ember', 'maxHp');
  assert.equal(api.profile().coins, 4130);
  assert.equal(api.profile().tankUpgrades.ember.maxHp, 1);
  assert.equal(api.profile().tankUpgrades.vanguard.maxHp, 0);

  api.closeGarage();
  api.startGame();
  assert.equal(api.state().runTankId, 'ember');
  assert.equal(api.player().designId, 'ember');
  assert.equal(api.state().runBaseStats.maxHp, 105);
  assert.equal(api.state().playerStats.maxHp, 105);
  const activeSave = JSON.parse(window.localStorage.getItem('tank_realms_active_run_v1'));
  assert.equal(activeSave.runTankId, 'ember');
  assert.equal(activeSave.runPermanentUpgrades.maxHp, 1);
  api.shoot(api.player());
  assert.equal(api.bullets()[0].projectileStyle, 'bolt');

  const coinsDuringRun = api.profile().coins;
  api.buyPermanentUpgrade('ember', 'damage');
  assert.equal(api.profile().coins, coinsDuringRun);
  assert.equal(api.profile().tankUpgrades.ember.damage, 0);

  const savedProfile = window.localStorage.getItem('tank_realms_profile_v1');
  harness.dom.window.close();
  const reloaded = createHarness({ tank_realms_profile_v1: savedProfile });
  assert.equal(reloaded.api.profile().ownedTanks.includes('ember'), true);
  assert.equal(reloaded.api.profile().selectedTankId, 'ember');
  assert.equal(reloaded.api.profile().tankUpgrades.ember.maxHp, 1);
  assert.equal(reloaded.api.profile().coins, coinsDuringRun);
  reloaded.dom.window.close();
});

test('combo multiplies score and coins but not XP', () => {
  const harness = createHarness();
  const { api, window } = harness;
  api.startGame();
  const startingCoins = api.profile().coins;
  const startingXp = api.state().xp;

  const first = api.awardEnemyKill(100);
  assert.deepEqual({ ...first }, { scoreReward: 100, coinReward: 10 });
  api.updateCombo(1);
  const second = api.awardEnemyKill(100);
  assert.deepEqual({ ...second }, { scoreReward: 120, coinReward: 12 });
  assert.equal(api.state().score, 220);
  assert.equal(api.profile().coins, startingCoins + 22);
  assert.equal(api.state().xp, startingXp);
  assert.equal(api.state().comboCount, 2);
  assert.equal(api.state().comboMultiplier, 1.2);
  assert.equal(
    window.document.getElementById('combo-indicator').classList.contains('show'),
    true
  );

  for (let i = 0; i < 20; i++) api.awardEnemyKill(100);
  assert.equal(api.state().comboMultiplier, 3);
  api.updateCombo(3.1);
  assert.equal(api.state().comboCount, 0);
  assert.equal(api.state().comboMultiplier, 1);
  assert.equal(
    window.document.getElementById('combo-indicator').classList.contains('show'),
    false
  );
  harness.dom.window.close();
});

test('left-handed mode swaps movement and firing zones', () => {
  const harness = createHarness({
    tank_realms_profile_v1: JSON.stringify({
      version: 1,
      tutorialCompleted: true,
      settings: { leftHanded: true }
    })
  });
  harness.api.startGame();
  const inputLayer = harness.window.document.getElementById('input-layer');
  inputLayer.dispatchEvent(createTouchEvent(harness.window, 'touchstart', [
    { identifier: 201, clientX: 320, clientY: 700 }
  ]));
  assert.equal(
    harness.window.document.getElementById('joystick-base').style.display,
    'block'
  );
  assert.equal(harness.api.state().input.isFiring, false);
  inputLayer.dispatchEvent(createTouchEvent(harness.window, 'touchcancel', [
    { identifier: 201, clientX: 320, clientY: 700 }
  ]));
  inputLayer.dispatchEvent(createTouchEvent(harness.window, 'touchstart', [
    { identifier: 202, clientX: 50, clientY: 700 }
  ]));
  assert.equal(harness.api.state().input.isFiring, true);
  harness.dom.window.close();
});

test('corrupt and outdated save data cannot block startup', () => {
  const harness = createHarness({
    tank_realms_profile_v1: '{broken-json',
    tank_realms_active_run_v1: JSON.stringify({ version: 99, alive: true })
  });

  assert.equal(harness.api.state().gamePhase, 'menu');
  assert.equal(harness.api.cachedActiveRun(), null);
  assert.equal(harness.window.localStorage.getItem('tank_realms_active_run_v1'), null);
  assert.equal(
    harness.window.document.getElementById('btn-continue').classList.contains('available'),
    false
  );
  harness.dom.window.close();
});

test('saved settings load into a new session', () => {
  const harness = createHarness({
    tank_realms_profile_v1: JSON.stringify({
      version: 1,
      bestScore: 500,
      bestLevel: 6,
      settings: {
        soundEnabled: true,
        cameraMode: 'wide',
        controlAssist: true,
        qualityMode: 'low',
        effectsVolume: 0.35,
        hapticsEnabled: false,
        cameraShakeMode: 'reduced',
        reducedFlashes: true,
        leftHanded: true,
        hudScale: 'large'
      }
    })
  });

  assert.equal(harness.api.state().soundEnabled, true);
  assert.equal(harness.api.state().cameraMode, 'wide');
  assert.equal(harness.api.state().controlAssist, true);
  assert.equal(harness.api.state().qualityMode, 'low');
  assert.equal(harness.api.state().effectsVolume, 0.35);
  assert.equal(harness.api.state().hapticsEnabled, false);
  assert.equal(harness.api.state().cameraShakeMode, 'reduced');
  assert.equal(harness.api.state().reducedFlashes, true);
  assert.equal(harness.api.state().leftHanded, true);
  assert.equal(harness.api.state().hudScale, 'large');
  assert.equal(harness.window.document.body.classList.contains('reduced-flashes'), true);
  assert.equal(harness.window.document.body.classList.contains('hud-large'), true);
  assert.equal(harness.api.renderer().pixelRatio, 0.8);
  assert.equal(harness.api.profile().bestScore, 500);
  assert.equal(harness.api.profile().bestLevel, 6);
  harness.dom.window.close();
});

test('document uses local build entry points and has no broken core block', () => {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const gameSource = fs.readFileSync(gamePath, 'utf8');

  assert.match(html, /assets\/css\/game\.css/);
  assert.match(html, /src\/main\.js/);
  assert.doesNotMatch(html, /https?:\/\//);
  assert.doesNotMatch(html, /NEW CORE LOOP SYSTEM/);
  assert.doesNotMatch(gameSource, /oldUpdateLoop|oldEnemiesPush|oldLevelUp/);
  assert.equal(fs.existsSync(path.join(root, 'assets/css/game.css')), true);
  assert.equal(fs.existsSync(path.join(root, 'src/main.js')), true);
  assert.equal(fs.existsSync(gamePath), true);
});
