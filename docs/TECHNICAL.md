# Technical Target

## Platform

Crownlands is a **mobile game**.

Primary target:

- Google Pixel 6a class hardware
- Android
- Chrome/WebGL2 where supported
- local-first play
- landscape orientation preferred for the current HUD

Desktop is not a product target. Keyboard/mouse support may remain for development and debugging.

## Development environment

Current development stack:

- Android host
- Termux
- optional Ubuntu through `proot-distro`
- Blender 4.x headless in Ubuntu for model/pose QA
- Node.js / esbuild
- Python static server
- Three.js

No AWS VM is required or assumed.

## Runtime architecture

Current runtime:

- static HTML entry
- Three.js scene with progressively loaded GLB assets
- `src/game.js` as the main integration/control layer
- simulation split across `src/sim/core.js`, `actors.js`, `schedules.js`, `military.js`, `economy.js`, `population.js`, and `strategy.js`
- world/navigation split across `src/layout.js` and `src/nav.js`
- rendering support split into `src/render/world.js`, `living.js`, and `characterBounds.js`
- presentation constants in `src/presentation.js`
- minified bundle in `dist/game.fast.js`
- persistent lightweight realm state in browser localStorage
- no required backend

The architecture is already partially modularized. `src/game.js` remains the largest integration surface and should only be split further when that reduces concrete risk.

## Mobile performance rules

Current choices:

- capped device pixel ratio around 1.25
- progressive loading
- one bundled JS runtime
- low-poly/reusable geometry
- implemented near/far simulation LOD with a bounded nearby render pool
- avoid expensive per-frame allocations where possible

Targets for later formal profiling:

- stable 30 FPS minimum during ordinary castle play
- responsive touch input
- no long blocking boot screen
- controlled memory usage on Pixel 6a class hardware
- combat should degrade gracefully rather than hard-freeze

## Controls

Mobile:

- left virtual joystick: movement
- drag right side: camera
- context action button: interact/use/audience/throne
- Orders: royal/military command
- Attack: contextual combat

Future controls should stay thumb-friendly and avoid dense desktop UI.

## Build

Authoritative source:

```
src/game.js
```

Build artifact:

```
dist/game.fast.js
```

Rebuild:

```sh
npm run build
```

## Asset loading

Gameplay must not depend on an external CDN at runtime. Assets committed under `assets/` are loaded locally.

Use external/public resources during production only after verifying license compatibility.

## Visual QA

The actual Pixel Chrome renderer is authoritative.

Known tooling limitation:

- the current Termux Chromium automation build exposes no working WebGL context
- SwiftShader and Xvfb attempts still report `webgl=false`
- therefore a black automated Chromium frame is **not** evidence that the Android game is black

Use:

1. actual Pixel Chrome screenshots/gameplay for final in-game acceptance
2. Blender renders for character/pose/model QA
3. automated browser checks for DOM/load/runtime state where WebGL is not required

Current caution: V25 demonstrated that a clean Blender head render can still disagree with the final Pixel side silhouette. For player-character appearance, Blender is preflight only; a fresh real-device screenshot is required before a visual defect can be closed.

Current rendering/modeling status:
- V25 king head/face side profile remains the last **failed real-device evidence**
- V26 preserves the coherent City Guard `head.001` mesh and removes the V25 replacement skull; only shallow identity overlays remain
- runtime/build tests passing does not imply character-visual acceptance
- V26 requires a fresh Pixel front/side/3/4 review; if it fails, use a single replacement head mesh/model validated on-device

## Android automation safety

When an automation environment is available, do not hijack the user's primary phone display for test input. Prefer an isolated secondary/virtual display for automated interaction. Manual Pixel Chrome play remains valid acceptance evidence.

## Architecture direction

The simulation, world, navigation and rendering layers are already separated from the main integration file. Future extraction should target only areas where `src/game.js` still mixes too many responsibilities, especially:

- save/state glue that remains outside `src/sim/core.js`
- royal-order UI and interaction routing
- combat/input presentation
- mobile HUD/dialogue/order UI
- player-character presentation/model assembly

Do the split when it reduces risk; do not rewrite working systems merely for aesthetics.