# Crownlands Mobile

**Crownlands** is a mobile-first 3D medieval king simulation for Android. You begin as the crowned king and physically inhabit a living realm instead of ruling through menus alone.

Current development target: **Google Pixel 6a + Android Chrome**, served locally from **Termux**. Ubuntu/proot and Blender are tooling only; no AWS VM or cloud runtime is required.

## V10 living-world build

The current playable build has moved beyond the original courtyard prototype.

- embodied third-person king with touch movement/camera
- throne sit/stand and court petitions
- **113 persistent simulated actors**
- jobs, meals, sleep, rest, social time, training, patrols and work schedules
- royal orders temporarily override an NPC's normal life, then the NPC resumes it
- **18 Royal Guards in three rotating 8-hour shifts**; normally 6 are on duty
- two-guard personal escort while the rest of the shift remains at work
- Lord Marshal, captains, sergeants and a field army
- Royal Guard orders: routine, escort, patrol, throne guard, main gate
- Army orders: routine, drill, muster, gate defense, march with king
- personal orders to visible NPCs: report to court, follow, wait, return to duty, role-specific work
- physical production loop: grain, timber, iron, arms, meals, taxes and garrison wages
- royal policies for taxation, rations and farm investment
- diplomacy with House Valemar, House Kestrel, Stonehollow Guild and Ashwood Company
- rival **Blackmere Keep** with its own guards/soldiers and wartime behavior
- Crown campaign order to march on Blackmere during war
- raids, defender combat and optional king combat
- expanded connected world: Royal Castle, Lower Village, Millbrook, Kingsbridge, Stonehollow, Ashwood Camp and Blackmere
- day/year/season clock, weather state and day/night lighting
- save/resume for realm, king position, actors and active royal orders
- mobile renderer pool: the full population simulates while only the most relevant nearby actors are rendered

## Play locally

From Termux:

```sh
cd ~/MainWorkspace/crownlands-mobile
./scripts/serve.sh
```

Open in Android Chrome:

```
http://127.0.0.1:5205/?v=10
```

Controls:

- left thumb: move
- drag right side: camera
- **AUDIENCE / USE**: interact with nearby people and places
- **ORDERS**: guard, army, royal policy and diplomacy
- **ATTACK**: contextual combat

## Build and test

```sh
npm install
npm test
npm run build
```

The generated playable bundle is `dist/game.fast.js`.

## Repository structure

```text
src/
  game.js                 # game integration / mobile controls / interactions
  layout.js               # world, buildings, roads, districts, collision
  nav.js                  # navigation graph + A*
  util.js
  sim/
    core.js               # realm/calendar/weather/state/event bus
    actors.js             # actors, tasks, royal orders, LOD simulation
    schedules.js          # civilian autonomous schedules
    military.js           # guard shifts and army/rival military routines
    economy.js            # production, food, tax and wage loop
    population.js         # persistent realm population
    strategy.js           # diplomacy and rival strategy
  render/
    world.js              # expanded procedural world geometry
    living.js             # bounded mobile actor render pool
assets/
  castle/
  town/
tests/
  simulation.mjs
  living_world.mjs
  save_resume.mjs
  war_campaign.mjs
docs/
```

## Product invariants

- **Mobile first.** Desktop support is development convenience only.
- **You are already king.**
- **NPCs live without you.** Orders redirect their lives; orders do not create them.
- **Royal authority stays available.** Individuals, guard units, officers and armies can be redirected.
- **Royal Guard and army are separate organizations.**
- **The player's castle is the strongest local seat of power, not the only power.**
- **World actions should be visible in 3D whenever practical instead of becoming spreadsheet-only mechanics.**

See `AGENTS.md`, `docs/VISION.md`, and `docs/NPC_SIMULATION.md` before making major changes.

## QA status

Automated tests currently cover navigation, actor scheduling/order interruption, economy, guard shifts, save/resume, diplomacy and the Blackmere campaign path. The local URL and bundled runtime boot are verified.

The Termux desktop Chromium available to automation still cannot keep a usable WebGL context. It can verify DOM/runtime state but not provide authoritative 3D screenshots. **Actual Pixel Chrome remains the final visual renderer.**

## Assets and licensing

Current third-party game assets are redistributable public assets, primarily CC0, plus MIT Three.js runtime code. See `docs/ASSETS.md` for provenance.

The repository itself does not currently declare a project-level software license; public visibility does not automatically grant reuse rights to the project code.
