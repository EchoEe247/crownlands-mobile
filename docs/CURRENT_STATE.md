# Current State — V23 Living World

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

## V18 real-device attachment and rotation fix

The V17 phone screenshots showed two concrete remaining defects. The body/head scale was correct, but cape/shoulder/scabbard pieces could visually detach because those accessories were anchored to the static player root while the imported guard body animated internally. V18 preserves the accessories' fitted world transform and reparents the royal-regalia group to the animated torso. The crown remains attached to the animated head.

The screenshots also exposed that device rotation had no renderer/camera resize path. V18 updates the WebGL renderer and camera aspect from the current VisualViewport on resize/orientation changes, so portrait and landscape no longer reuse stale dimensions. Third-person distance is tightened to 3.95 m (3.75 m seated), while cape, pauldrons and scabbard are reduced again to keep the human silhouette readable. Landscape status bars are stacked slightly higher with reduced objective padding.


## V19 guard-body scaling root fix

The V18 real-device result still looked essentially unchanged because the fundamental scale calculation was wrong. The City Guard GLB measures about 3.39 units when its spear is included, but the humanoid body is only about 1.87 units. V14-V18 normalized the entire GLB to the requested character height, unintentionally shrinking the king's human body to roughly one meter while separately-authored royal details stayed visually dominant.

V19 adds shared body-only character bounds that exclude the weapon hierarchy from scale calculations. The king is now fitted from the actual humanoid body to 1.80 m, and living guard NPCs use the same rule at 1.72 m. The spear remains available for NPC guards but no longer controls their human height; the player's full weapon subtree is hidden. This is the root-cause correction for the small-body/giant-regalia screenshots, not another camera-only adjustment.


## V20 crown placement correction

V19 fixed the king body scale, leaving the crown as the final visible defect. Direct Blender measurement of the guard asset shows the animated head origin at raw Z 1.571696 and the visible skin-head mesh top at 1.831376, an offset of about 0.260 units. The prior crown offset of 0.18 therefore placed most of the crown inside the head.

V20 places the crown at a measured 0.278 local head offset so the band overlaps the skull top only slightly, removes the obsolete inverse-scale compensation, and sizes the band to 0.13 radius with 0.11 spikes so it is readable on the roughly 0.303-unit-wide guard head. The crown remains parented to the animated head and automatically disappears in first-person when the player visual is hidden.


## V21 masculine king face

V21 keeps the corrected V19 body scale and V20 crown, and adds the missing facial anatomy directly to the animated head. The procedural low-poly face is sized from the measured guard head (about 0.303 units wide) and adds a broader square jaw/chin, short boxed stubble with sideburns/moustache, two deep-set eyes with irises/pupils, heavier angled brows, a straight projected nose, firm neutral mouth/lower lip, and philtrum shading.

The face group is parented to the animated head, so it follows head motion and is automatically hidden with the player visual in first-person. The intent is a mature, stern, masculine king while preserving the existing low-poly art style and mobile performance.


## V22 face readability pass

The V21 phone screenshot confirmed that the face geometry was attached correctly but still read too flat at real mobile gameplay distance. V22 changes only the face. It increases eye/socket contrast, enlarges iris/pupil readability, thickens and angles the brows, adds angular cheekbone shadows, strengthens the projected straight nose with a side-shadow plane, broadens the jaw/chin silhouette, and increases the visibility of the boxed stubble, sideburns, moustache and firm mouth line.

Body scale, crown placement, regalia, camera distances and HUD layout remain unchanged from the corrected V19–V21 state.


## V23 generated-reference face pass

The V22 phone screenshot showed the facial overlay was still too weak at gameplay scale. V23 explicitly follows the stronger first generated Blender-style king reference: short dark-brown hair under the crown, thick stern brows, larger readable blue-gray eyes, a straight angular nose, firm mouth, broad square jaw, and a full trimmed brown beard with sideburns and moustache.

Only the head/face treatment changes. The corrected body scale, crown placement, regalia, camera distances and mobile HUD remain unchanged.
