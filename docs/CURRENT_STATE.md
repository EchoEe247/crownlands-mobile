# Current State — V10 Living World

Date: 2026-09-29

## Verified implementation

The shipped bundle now integrates the recovered Sonnet 5.5 simulation foundation and the follow-on fixes.

### Simulation
- 113 persistent actors
- 30+ civilian role planners
- autonomous work, meals, sleep, rest and social routines
- near/far simulation LOD
- royal orders interrupt and later return actors to normal schedules
- safe A* navigation with fail-closed route behavior
- persistent actor state and active-order restore

### Military
- 18 Royal Guards, three rotating shifts, 6 normally active
- two-guard king escort
- throne/gate/patrol special orders with automatic return to routine
- Lord Marshal, captains, sergeants and field soldiers
- garrison training/meals/rest/maintenance
- rival Blackmere military routines
- wartime Blackmere muster and Crown campaign path

### Economy and policy
- grain, wood, iron, arms and meal production
- population food consumption
- taxes and garrison wages
- configurable tax/ration policy
- farm investment
- daily ledger

### World / politics
- expanded Royal Castle and surrounding districts
- Lower Village, Millbrook, Kingsbridge, Stonehollow, Ashwood and Blackmere
- House Valemar, House Kestrel, Stonehollow Guild and Ashwood Company
- diplomacy/relations/treaties
- declare war / peace
- campaign against Blackmere
- raids and direct king combat

### Mobile engineering
- Pixel-class render scale cap
- progressive loading
- bounded 20-character render pool while 113 actors remain simulated
- local assets only at runtime
- save on visibility/page exit
- bundled esbuild output
- debug snapshot available at `window.__crownlandsDebug.snapshot()`

## Automated evidence

`npm test` covers:
- navigation and collision
- actor schedule/order resume
- living population
- guard shift size
- daily physical economy
- diplomacy state
- save/resume
- Blackmere reachability and wartime muster

Runtime browser probe reports:
- 113 actors
- 20 visible/render slots
- 6/18 Royal Guards on duty
- 27 Crown military personnel
- no JavaScript boot exception before the known automation WebGL limitation

## Known limitation

Termux desktop Chromium loses/fails its WebGL context even with SwiftShader/Xvfb. It cannot be used as authoritative visual evidence. Pixel Android Chrome has previously rendered Crownlands correctly and remains the final in-game visual acceptance route.

The next real-device pass should focus on:
1. king standing/walking/cape
2. throne pose
3. frame rate in the expanded castle/market
4. two-guard escort and shift handoff
5. travel toward the village/road
6. one raid
7. optionally a Blackmere war/campaign

Do not revert the simulation architecture to the old route-only NPC prototype.
