# Crownlands Mobile

**Crownlands** is a mobile-first 3D medieval king simulation built to run locally on Android. The player is **the king from the first second** — not a peasant, not a recruit, and not a ruler represented only by menus.

The design goal is a living medieval realm where the player can physically walk through the castle and surrounding lands, sit on the throne, hold court, issue orders, inspect the economy, command guards and armies, negotiate with other powers, and personally take part in crises or battles when desired.

> Current status: playable prototype / active development. The architecture and core game loop are established, but the game is **not yet considered finished**.

## Non-negotiable design pillars

1. **Mobile game first.** The target is Android, not desktop. Desktop controls exist only as a development fallback.
2. **Embodied king.** The player is a visible third-person king in the 3D world and begins already crowned.
3. **Living NPCs.** NPCs are not idle menu terminals. When the king is not ordering them, they work, travel, eat, rest, socialize, train, guard, trade, sleep, and otherwise follow their own lives.
4. **Royal authority is always available.** The king can interrupt normal routines and issue orders to individuals, groups, officers, guards, or the army. When an order ends, actors return to an appropriate autonomous routine.
5. **A real kingdom, not a courtyard demo.** Castle life, military organization, economy, villages, enemies, diplomacy, logistics, alliances, and war should become one connected simulation.
6. **High visual floor.** Use strong free/public assets when they improve the game. Do not accept generic low-effort placeholder visuals as the final presentation.
7. **Local ownership.** No AWS VM, paid proprietary game, or cloud runtime is required to play.

## Current playable systems

The current build already includes:

- third-person mobile movement and touch camera
- a crowned animated king
- royal court / throne interaction
- petitions and decrees
- treasury, favor, security, and prosperity
- four connected areas:
  - Royal Court
  - Barracks & Training Yard
  - Main Gate & Market
  - Lower Village & Farms
- NPC route-based autonomous movement
- six Royal Guards
- recruitable field soldiers
- guard orders:
  - escort the king
  - patrol the castle
  - guard the throne
  - hold the main gate
- army orders:
  - drill
  - muster
  - reinforce the gate
  - march with the king
- barracks, market, gate, and village decisions
- persistent realm state
- recurring raids / defense loop
- optional king combat
- basic collision
- day/evening lighting cycle
- procedural WebAudio cues
- progressive asset loading for mobile startup

## Target device and runtime

Primary target during development:

- **Google Pixel 6a**
- Android
- game played in **mobile Chrome**
- local server hosted from **Termux**
- development/asset work may use **Ubuntu via proot-distro inside Termux**
- Blender 4.x headless is available through that Ubuntu environment for asset QA
- Three.js/WebGL is the current runtime

Typical local play URL:

```
http://127.0.0.1:5205/
```

Start a server from the repository root:

```sh
./scripts/serve.sh
```

Then open the URL in Android Chrome.

## Build

The repository commits a ready-to-play bundle in `dist/`. To rebuild it:

```sh
npm install
npm run build
```

Or directly:

```sh
npx esbuild src/game.js --bundle --minify --format=esm --target=chrome120 --outfile=dist/game.fast.js
```

## Repository layout

```text
crownlands-mobile/
├── index.html               # mobile entry point
├── src/
│   ├── game.js              # authoritative game source
│   └── style.css            # mobile HUD/UI
├── dist/
│   └── game.fast.js         # generated playable bundle
├── assets/
│   ├── castle/              # reusable CC0 castle/world assets
│   └── *.glb                # characters/court environment
├── vendor/                  # vendored Three.js runtime pieces
├── docs/
│   ├── VISION.md
│   ├── NPC_SIMULATION.md
│   ├── TECHNICAL.md
│   ├── CURRENT_STATE.md
│   ├── ROADMAP.md
│   └── ASSETS.md
├── tools/
│   └── qa/                  # local visual/asset QA scripts
├── scripts/
│   ├── build.sh
│   └── serve.sh
└── AGENTS.md                # operating contract for future agents
```

## What Crownlands is trying to become

The finished experience should feel closer to a **living medieval movie world under the player's rule** than a conventional menu-heavy strategy game.

The player's castle is intended to be the strongest seat of power in the region. A rival castle and other powers exist farther out in the world. The king can form alliances, coordinate armies, receive emissaries, manage internal politics, protect roads and settlements, respond to raids, and eventually go to war. Guards and soldiers have barracks, quarters, shifts, meals, rest, training, and command structure instead of existing only when the player presses a button.

The king remains exceptional: every other actor has a life and role, but royal orders can override those routines.

See [docs/VISION.md](docs/VISION.md) and [docs/NPC_SIMULATION.md](docs/NPC_SIMULATION.md) for the full design.

## Current quality gate

The game is **not done** until it passes real-device Pixel testing for:

- stable mobile performance
- strong king proportions and animation
- believable throne sitting
- comfortable touch controls
- NPC schedules that visibly feel alive
- guard shift/rest rotation
- army organization and command hierarchy
- economy simulation
- rival power / diplomacy / war
- meaningful exploration beyond the castle core
- collision/navigation polish
- save/resume reliability
- final visual/audio polish

## Visual QA note

Pixel Chrome is the authoritative gameplay renderer. The Termux Chromium build currently available to automation does not expose a working WebGL context, even with SwiftShader/Xvfb attempts. Local Blender renders can be used for model/pose inspection, but in-game visual acceptance must ultimately be checked in actual Android Chrome.

## Assets and licensing

The current game intentionally uses redistributable public assets, mainly CC0, plus vendored MIT Three.js runtime code. See [docs/ASSETS.md](docs/ASSETS.md).

The project itself currently has **no repository-level software license selected**. Public visibility does not by itself grant reuse rights to the project code. Third-party assets retain their documented licenses.
