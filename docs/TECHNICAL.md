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
- Three.js scene
- GLB assets loaded progressively
- source in `src/game.js`
- minified bundle in `dist/game.fast.js`
- persistent lightweight realm state in browser localStorage
- no required backend

This architecture is intentionally simple while the game design is still moving quickly.

## Mobile performance rules

Current choices:

- capped device pixel ratio around 1.25
- progressive loading
- one bundled JS runtime
- low-poly/reusable geometry
- distance/future simulation LOD expected
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

## Android automation safety

When an automation environment is available, do not hijack the user's primary phone display for test input. Prefer an isolated secondary/virtual display for automated interaction. Manual Pixel Chrome play remains valid acceptance evidence.

## Future architecture direction

As systems grow, split the current monolithic source into modules:

- `core/` state/event/save
- `world/` districts/time/weather
- `actors/` NPCs/needs/schedules
- `orders/` royal job system
- `military/` guard/army/officers/combat
- `economy/` production/trade/treasury
- `politics/` nobles/diplomacy/factions
- `ui/` mobile HUD/dialogue/orders
- `render/` Three.js scene/assets/effects

Do the split when it reduces risk; do not rewrite working systems merely for aesthetics.
