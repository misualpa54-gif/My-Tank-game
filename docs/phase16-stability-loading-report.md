# Phase 16 — Loading, Runtime, Save, and Transition Stabilization

## Scope

Phase 16 is a focused bug-fix package created after reports that the latest game could show loading failures and other inconsistent behavior. It does not add a new game mode, change prices, rebalance enemies, alter controls, or begin final-release/store work.

The audit covered startup, Android WebView loading, short-screen layout, WebGL loss, menu action races, save/Continue behavior, record announcements, realm transitions, transient UI timers, and mode-HUD update cost.

## Problems found and fixed

### 1. No useful startup/loading recovery

Previously, the 3D realm was built synchronously behind the menu with no dedicated loading state. If module import or renderer initialization failed, the app could remain blank or appear permanently stuck with no explanation or recovery action.

Fixes:

- Added a branded offline loading screen and animated spinner.
- Added a delayed plain-link retry that still works if the main JavaScript bundle itself cannot start.
- Added a visible recovery screen for startup and uncaught runtime failures.
- Recovery provides Retry Loading and Reset Unfinished Run.
- Reset Unfinished Run removes only `tank_realms_active_run_v1`; permanent Garage coins, settings, tanks, mastery, achievements, and Daily records remain.
- Startup errors are logged and displayed as a short diagnostic message instead of silently leaving a frozen page.
- Runtime failures first attempt to pause/save the active run before showing recovery.
- Failure of optional native App/Haptics integration no longer prevents an already-loaded offline game from remaining playable.

### 2. Possible stale Android WebView assets after installing a newer debug APK

Repeated debug APK installation can retain WebView cache even though the bundled hashed JavaScript/CSS filenames changed. A stale cached `index.html` can then point at an asset name that no longer exists in the new APK, producing a loading failure.

Fixes in `MainActivity.java`:

- Local WebView cache mode is set to `LOAD_NO_CACHE`.
- The WebView HTTP/resource cache is cleared at launch.
- This does not clear Web Storage/localStorage, so player saves and settings remain intact.
- The game still requires no Internet permission and loads only packaged files.

### 3. WebGL initialization and context-loss failure

The renderer previously made one high-quality antialiased WebGL creation attempt. If a lower-end driver rejected it, startup failed. A lost Android graphics context could also leave a blank canvas without player guidance.

Fixes:

- First attempt retains antialiasing and high-performance preference.
- If that creation fails, the game retries with antialiasing disabled and default power preference.
- WebGL context loss now pauses the run, clears active input, displays a graphics-restoration message, and protects the save.
- Context restoration reapplies quality settings, hides the recovery loader, and leaves the run safely paused for deliberate player resume.

### 4. Main-menu clipping on short portrait screens

The growing menu was vertically centered as individual flex children. With Continue plus all Phase 15 buttons, its content could be taller than a short viewport. Centered negative overflow can make the top title or first button unreachable even when the screen is scrollable.

Fixes:

- Wrapped all main-menu content in one `start-menu-content` flex block.
- The start screen now lays out from the safe top edge.
- The inner block uses auto margins when space is available, preserving centered presentation on taller phones.
- On short phones, auto margins collapse and the complete block scrolls from the real top instead of clipping above the scroll origin.
- Existing safe-area padding, visual order, button colors, and portrait styling remain unchanged.

### 5. New-record messages disappeared after autosave

The living-run autosave correctly updated permanent best score/level, but the results screen compared the final values against those already-updated profile values. In normal play this meant “New best score!” and “New best level!” often did not appear, even though synthetic tests that skipped autosave passed.

Fixes:

- New runs snapshot `runStartBestScore` and `runStartBestLevel`.
- Results compare against the run-start baseline, not the profile after autosave.
- Baselines are stored in the living run and restored by Continue.
- Older saves safely fall back to current profile records.
- Permanent best values may still update during autosave, preserving crash/background safety.

### 6. Old enemies and attacks survived a cleared realm

After a Guardian died, normal survivors, boss minions, mines, artillery warnings, or plasma already in flight could remain active during/after the new biome transition. This could cause confusing damage from the previous realm and visual/gameplay state crossing into the new realm.

Fixes:

- Guardian defeat now disposes every remaining non-boss enemy without granting unearned rewards.
- Artillery warnings and mines are removed.
- Existing plasma is marked disabled and safely returned through the projectile pool during the same update.
- Auto-target state is cleared.
- This applies consistently to Adventure/Daily/One-Tank realm transitions and Boss Hunt between Guardians.
- Normal balance, Guardian rewards, and the 12-enemy cap are unchanged.

### 7. Strategic enemies could use abilities immediately after Continue

Enemy type, health, and position were saved, but per-enemy ability/heal readiness was not. Artillery, Mine Layers, Drone Carriers, and Medics could therefore act immediately after Continue instead of respecting the cooldown state around the save.

Fixes:

- Living enemies now save `abilityReadyIn` and `healReadyIn`.
- Values are clamped during sanitization.
- Continue rebuilds absolute timers relative to the new session clock.
- Older saves receive a safe one-second grace fallback.

### 8. Overlapping visual timers hid newer messages too early

Each upgrade/objective/achievement notification started a new independent hide timer. An older timer could remove the CSS class belonging to a newer message. The same pattern existed for enemy introductions, biome labels, boss warnings, and damage/heal overlays.

Fixes:

- Each feedback category now owns one timer handle.
- Showing a new message cancels the old hide timer before scheduling the replacement.
- Combat-scene cleanup clears timers and removes stale feedback classes/overlay opacity.
- Boss UI cleanup also clears its warning timer.

### 9. Duplicate hidden menu actions could restart/replace a live run

Rapid taps can queue a second click while a menu is fading out. `requestNewRun` and `continueSavedRun` previously trusted the hidden button and could run after gameplay had already started.

Fixes:

- New-run requests are accepted only in the menu phase and while no overwrite confirmation is open.
- Continue is accepted only from the menu phase.
- Direct internal `startGame` remains available for legitimate Try Again and tests.

### 10. Mode HUD rewrote the DOM every rendered frame

Last Stand, Realm Rush, Boss Hunt, and Practice called mode-HUD updates every frame. Even when the displayed second/threat/level had not changed, text and class writes repeated at 30–120 FPS.

Fix:

- The HUD now builds a compact signature from visibility, mode, and displayed status.
- DOM writes happen only when that signature changes.
- Countdown and threat behavior remain visually identical while reducing unnecessary layout work.

## Save compatibility

The save format remains version 1 and stays backward compatible.

New living-run fields:

- `runStartBestScore`
- `runStartBestLevel`
- per-enemy `abilityReadyIn`
- per-enemy `healReadyIn`

Older version-1 saves continue to sanitize and load. Practice remains unsavable and preserves an older reward-mode run.

## Visual and balance preservation

Unchanged:

- main-menu button order and colors;
- purple/blue glass identity;
- portrait split controls and Left-handed swap;
- auto-aim;
- all prices and permanent upgrades;
- player/enemy/Guardian HP and damage;
- XP and combo formulas;
- spawn rates and caps;
- objectives and mode rules;
- procedural tank/projectile/environment style;
- no music, ads, network, account, purchase, or Internet permission.

## Verification

The suite now contains **68 passing tests** with 0 failures.

New/expanded regression coverage verifies:

- loading and recovery UI exists in the offline build;
- main menu uses the short-screen-safe wrapper;
- WebGL context loss pauses and restoration recovers presentation;
- duplicate hidden menu actions are ignored;
- Guardian transitions clear surviving enemies, bullets, artillery, and mines;
- record messages survive prior autosave;
- run-start record baselines survive Continue;
- strategic enemy cooldowns survive Continue;
- Android WebView cache protection is present;
- all previous gameplay, mode, save, performance, portrait, offline, and Android tests still pass.

Verification commands:

```bash
npm run check
npm audit
git diff --check
npm run android:sync
```

The cloud workflow builds the Java 21 Android debug APK after the stabilization commit is pushed.
