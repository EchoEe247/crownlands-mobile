# Current State — V17 Living World

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
- king presentation invariants

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

## V11 king visibility hotfix

Pixel screenshots exposed that the king's procedural cape/belt were visible while the imported body was completely transparent. Root cause: the source king GLB encoded alpha=0 on all three body materials. V11 normalizes those materials to opaque, disables player skinned-mesh frustum culling, keeps the crown on the stable player root, and replaces the wraparound cylinder cape with a back-only curved cloth mesh. Automated asset tests now fail if the king materials regress to transparent.

## V12 king proportion / framing correction

The first real Pixel screenshot after the visibility fix showed that the playable king read as physically gigantic and crowded the camera. V12 normalizes the imported king to 1.92 m, removes the extra 7% X/Z widening, scales the crown/cape/belt as one regalia group, and backs the standing third-person camera from 5.35 m to 7.10 m (5.55 m seated). The goal is a visibly tall adult king, not an oversized giant.

Presentation constants now live in `src/presentation.js` and are covered by `tests/player_presentation.mjs`. Blender pose QA is also normalized to the same 1.92 m target.


## V13 real-device framing correction

The V12 Pixel screenshot showed that world-unit normalization alone was not enough: although the king was only modestly taller than NPCs in world units, third-person perspective made him dominate the actual phone frame and clip at the top. V13 is tuned from that real screenshot rather than from nominal meter math.

The king is now 1.86 m versus the living NPC baseline of 1.72 m (about 8% taller), the camera is widened to 64° and moved to 12.2 m standing / 8.2 m seated, and the default pitch is reduced. The cape is also shorter, wider, and farther behind the body so it reads as a mantle instead of a red tab between the legs. Debug snapshots now expose the active presentation parameters.


## V14 NPC-family king rebuild

V13 still looked oversized on the actual Pixel frame. V14 stops trying to rescue the Quaternius knight by scaling it. The playable king now uses the same CC0 3DAssets.dev City Guard character family used by normal living-world humans, normalized to 1.80 m versus the NPC baseline of 1.72 m (about 4.7% taller).

Royal identity is layered onto that normal human silhouette: deep royal-blue armor/clothing, brighter polished gold, dark iron/leather, a jeweled crown, ruby diagonal sash, chest medallion, layered pauldrons, gold belt/buckle, broad back cape, collar, and scabbard/pommel detail. Camera distance is increased to 20 m standing so the player no longer dominates the phone frame. This is now the intended player-art direction: ordinary-human proportions first, royal detail second.


## V15 mobile camera modes

V15 keeps the corrected V14 NPC-scale king and replaces the temporary far verification camera with actual mobile gameplay cameras. Third-person is the default at 4.8 m with a 66° FOV; at the 1.80 m king height the nominal full body occupies about 29% of the vertical frame, leaving head/feet margin while keeping the character readable. A dedicated on-screen CAM button toggles first-person. First-person uses a 1.62 m eye height and hides the player mesh/regalia to prevent head/cape clipping. Right-side drag look works in both modes with mode-specific pitch limits.


## V16 smooth mobile camera

The V15 Pixel screenshot confirmed the king size was finally correct but exposed an overly steep orbit angle during look input. V16 lowers the default third-person orbit, reduces its maximum upward pitch so it cannot become an overhead camera, and brings the standing distance slightly closer to 4.45 m.

Touch input no longer writes directly to the rendered camera angles. Swipes update yaw/pitch targets with lower mobile sensitivity, while the rendered yaw, pitch, and follow position converge with exponential damping. Horizontal damping uses wrapped angle deltas so crossing ±π never causes a long spin. First-person uses the same smoothed look targets with its wider pitch range. The result is a stable third-person follow camera with deliberate, non-jittery look movement rather than the V15 snap/overhead behavior.


## V17 king fit and landscape HUD

The V16 real-device screenshots exposed two remaining presentation defects. First, the underlying guard-family body was correctly human-sized, but the separately-authored royal ornaments were much too large, especially the collar/shoulders/cape, visually swallowing the head and torso. V17 removes the redundant floating torus belt/collar, shrinks the shoulder caps, sash, medallion and scabbard, shortens/narrows the cape so it starts below the neck, removes the inherited guard spear/helmet shells, and attaches the crown directly to the animated head node so the visible skin head and crown move together instead of floating independently.

Second, landscape objective/status labels were consuming too much of the central play view. Landscape-only CSS moves objective to 58 px and guard/zone status to 84 px (war status 106 px), while portrait positioning is intentionally unchanged.