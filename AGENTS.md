# AGENTS.md — Crownlands Mobile

This file is the operating contract for any agent continuing Crownlands.

## Mission

Build a professional-feeling **mobile-first 3D king simulation** where the player starts as the king and inhabits a living medieval realm.

Do not reduce the project to:

- a desktop game
- an RTS-only overhead game
- a menu-only kingdom simulator
- a low-detail prototype presented as finished
- a "become king eventually" progression

## Product target

The actual game target is Android / Pixel 6a class hardware.

Current play path:

- Termux hosts the static files locally.
- Android Chrome opens the current cache-busted build at `http://127.0.0.1:5205/?v=27` (advance the query value whenever the served bundle version changes).
- Ubuntu/proot may be used for Blender/tooling, but it is not the runtime.
- AWS or another remote VM is not part of the game dependency graph.

Desktop support is debugging convenience only.

## Player invariant

The player is king from the beginning.

The player must remain physically embodied in the 3D world.

The Crown can issue orders at any time.

## NPC invariant

NPCs are autonomous inhabitants.

When not under a special order, each NPC should have a plausible ongoing life:

- job
- movement
- meals
- rest
- sleep
- social behavior
- duties
- personal location

A royal order should interrupt/redirect a schedule, not replace all autonomous behavior.

When the order ends, the actor returns to a sensible life/task state.

## Military invariant

Royal Guard and army are separate organizations.

### Royal Guard

- household/security force
- shift rotation
- king escort
- throne/door/gate/patrol posts
- rest/meals/sleep/training
- living quarters
- more roster members than active posts

### Army

- much larger than guard
- military command hierarchy
- garrison/barracks
- logistics and supplies
- training
- patrols/scouts
- rest and recovery
- formations
- field operations

The king can override officers, but officers should run normal military life when no direct royal command is active.

## World invariant

The player's castle should be the strongest major castle in the local region, but not the only power.

The wider game should eventually include:

- rival castle farther away
- rival ruler
- villages
- roads
- neutral/minor factions
- alliances
- diplomacy
- coordination
- betrayal
- war
- sieges

Think "living medieval film world under player control," not a generic sandbox.

## Economy invariant

The castle must eventually have a physical/internal economy:

- food
- workers
- farms
- storage
- trade
- wages
- taxes/rents
- workshops
- blacksmith
- equipment
- army supply
- household consumption

Stats are acceptable summaries, but actions should visibly propagate into the world.

## Engineering rules

- `src/game.js` is authoritative source.
- `dist/game.fast.js` is generated.
- Rebuild after source changes.
- Preserve fast progressive boot.
- Keep Pixel memory/GPU limits in mind.
- Prefer reusable pools, LOD, reduced far simulation, and staggered work.
- Test syntax/build before claiming completion.
- Do not break the existing mobile control loop while adding systems.
- Stability first; fix concrete failures before feature expansion.
- Use free/public assets when they materially improve quality; record provenance in `docs/ASSETS.md`.

## Visual QA

Actual Android Chrome on the Pixel is authoritative.

Known issue: Termux Chromium automation currently lacks a usable WebGL context. A black automated Chromium canvas is not valid evidence of a game failure.

Use:

- Pixel screenshots/play for in-game rendering
- Blender headless renders for model/pose QA
- browser automation for DOM/non-WebGL behavior

### Current visual blocker — unresolved / paused

V27 is **rejected on Pixel**. It corrected a measurable lower-face depth error and passed Blender/profile-bound checks, but the actual device result still did not meet the user's face/profile requirement. GPT-5.6 Sol made multiple attempts, including V26 and V27, and could not fix the face to an acceptable real-device result.

For king/player visual work:

- Pixel Android Chrome is the acceptance authority for front, side, rear and 3/4 silhouettes.
- Blender renders are preflight evidence only; they cannot close a Pixel rendering defect by themselves.
- Do not report a face/head/profile issue as fixed until a fresh Pixel screenshot confirms it.
- Preserve a rejected state in docs when the user's real-device screenshot contradicts local/model QA.
- Do not continue iterating V27's procedural face-overlay approach unless the user explicitly reopens this work.
- If face work is reopened, start with one coherent replacement modeled/rigged head and use Pixel-first acceptance. Do not spend another sequence of passes tuning stacked/procedural facial geometry.

## Primary-display safety

When automated Android testing is available, do not take over the user's primary display. Prefer isolated/secondary displays for automation. Manual testing on the user's Chrome is allowed when the user is actively playing.

## Finish-line discipline

Before saying "done":

1. define concrete acceptance evidence
2. run source/build checks
3. verify local URL
4. test on Pixel
5. inspect visuals
6. test controls
7. test save/resume
8. test NPC/military behavior
9. report remaining risks

If a feature cannot be visually verified because tooling is degraded, say so explicitly rather than claiming it passed.