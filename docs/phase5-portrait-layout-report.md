# Phase 5 Portrait Layout Report

## Scope

Phase 5 adapts the existing HUD and touch controls to the approved portrait-only Android layout. It keeps the same glass panels, gradients, colors, icons, joystick appearance, camera behavior, aiming, movement, and hold-to-fire rule.

## HUD layout

The top HUD is now a three-column grid:

1. score, speed, and damage on the left;
2. level and XP in the center;
3. health, armor, and regeneration on the right.

The panels use the existing visual style with smaller portrait spacing, type, bars, and corner radii. Each side receives at least 100 CSS pixels in the supported 320–600 pixel test range.

The quick settings bar and pause button now sit on a second row below the HUD:

- settings, sound, camera, and assist remain on the left;
- pause remains on the right;
- automated width calculations confirm a gap between them at 320, 360, 390, 412, 480, and 600 pixels.

The biome label moves below the control row. Upgrade and enemy-introduction notices are constrained to the portrait width.

## Touch controls

The upper 30% of the visual viewport is reserved for HUD and status interaction. It cannot accidentally start movement or firing.

The lower 70% retains the approved invisible split controls:

- lower-left touch creates the floating joystick and controls movement;
- lower-right hold fires while auto-aim remains active;
- a second firing finger cannot replace the first;
- touch cancellation and app focus loss still release all controls.

No permanent fire button or visible control zone was added.

## Safe-area support

The portrait layout accounts for:

- top display cutouts and status areas;
- left and right rounded/cutout edges;
- bottom gesture/navigation areas;
- modern dynamic viewport height (`100dvh`);
- short screens at or below 680 pixels tall;
- narrow screens at or below 360 pixels wide.

The settings panel receives a safe maximum height and scrolls internally when necessary.

## Automated viewport checks

The layout budget is checked at:

- 320 × 640
- 360 × 720
- 390 × 844
- 412 × 915
- 480 × 800
- 600-pixel portrait width

These checks verify panel width budgets, quickbar/pause separation, safe-area rules, compact breakpoints, and lower control-zone space.

## Verification

- 25 automated tests pass.
- Upper-HUD touch rejection passes.
- Lower-left movement and lower-right firing pass.
- Touch cancellation passes.
- Common portrait width budgets pass.
- Notch and safe-area CSS checks pass.
- Phase 3 performance and memory tests continue to pass.
- Phase 4 frame-rate and swept-collision tests continue to pass.
- Offline web build and Android configuration checks continue to pass.
- Dependency audit reports zero known vulnerabilities.

## Manual Android checks still required

CSS layout tests cannot fully reproduce every Android WebView, font scale, manufacturer cutout, or accessibility setting. The Phase 5 APK should be checked on a phone for:

- text clipping in all three HUD panels;
- pause and quickbar spacing;
- notch and gesture-bar clearance;
- joystick placement near screen edges;
- one-thumb reach and comfort;
- settings scrolling on short screens;
- system font-size settings above 100%.
