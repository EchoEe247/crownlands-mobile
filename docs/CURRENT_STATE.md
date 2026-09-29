# Current State / Stopping Point

Date of this handoff: 2026-09-29.

## What works now

- local Android/Chrome launch through a Termux HTTP server
- fast bundled startup path
- third-person touch movement/camera
- animated knight-based king
- crown/regalia treatment
- throne sit/stand code path
- court audiences and petitions
- decree effects on realm stats
- persistent localStorage realm state
- four connected castle/settlement districts
- route-based autonomous NPC motion
- six Royal Guards
- recruitable field army
- persistent guard and army orders
- market/barracks/gate/village royal decisions
- raid spawning and defender combat
- optional king attack action
- day/evening lighting
- basic procedural audio
- local/offline asset loading

## What is explicitly not finished

### King presentation

The old white/priest-like king was replaced. The new Quaternius knight body is a better base, but final Pixel visual review is still required for:

- overall royal silhouette
- crown placement
- cape/regalia
- walk presentation
- seated body/throne alignment

Do not declare this solved until it looks correct on the actual Pixel.

### NPC life simulation

Current NPC autonomy is route/wander based. It is **not yet the intended life simulation**.

Next major simulation milestone should introduce:

- schedules
- work
- sleep
- meals
- rest
- social/idle behaviors
- homes/quarters
- task interruption/resumption
- jobs and supervisors

### Guard rotation

Current build has six active guards.

Target is a larger roster with:

- shifts
- off-duty guards
- sleep
- meals
- training
- post rotation
- emergency recall

### Army organization

Current army is a functional combat group, not a complete military society.

Need:

- Marshal / commander
- subordinate officers
- formations
- barracks/quarters
- supply
- equipment
- duty rotations
- scouting
- marching
- injury/recovery
- strategic orders

### Castle economy

Stats exist, but the intended physical economy does not yet exist.

Need:

- workers
- wages
- food
- farms
- storage
- blacksmith/workshops
- market supply
- taxes/rents
- trade
- logistics
- consumption

### Wider world

Need:

- rival castle farther down the world
- rival ruler and internal simulation
- roads and travel
- other settlements/factions
- diplomacy
- alliances
- coordinated campaigns
- sieges
- strategic world simulation

## QA status

### Passed

- source JavaScript syntax checks
- esbuild bundle generation
- local static serving
- public GLB assets load from local project
- prior Pixel Chrome builds render the Three.js game
- progressive boot significantly reduced initial loading delay

### Tooling limitation

The Termux desktop/headless Chromium build currently available for agent automation has no usable WebGL context. Attempts with:

- regular headless
- SwiftShader
- Ozone headless
- Xvfb

still reported no WebGL context.

This should be treated as a **QA-tool limitation**, not a game-render failure. Actual Pixel Chrome screenshots are authoritative.

## Next recommended development sequence

1. Pixel V9 visual check of king standing/walking/throne.
2. Fix any king/throne proportions found.
3. Implement Actor + Schedule + Task + Order state model.
4. Convert current NPC routes into jobs/life schedules.
5. Expand Royal Guard roster with shifts and quarters.
6. Add Marshal + military chain of command.
7. Implement physical castle economy.
8. Build rival castle/world simulation.
9. Add diplomacy/alliance/war layer.
10. Final performance, save, collision, audio, visual polish.
