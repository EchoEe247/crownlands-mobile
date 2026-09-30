# Roadmap

## Completed foundation
- mobile local Three.js/WebGL runtime
- touch movement/camera
- embodied crowned king
- throne, court petitions and decrees
- progressive boot and persistent save

## Completed V10 living-world architecture
- Actor / Task / Schedule / Order model
- autonomous civilian schedules
- navigation graph + A*
- 113 persistent actors
- 18-member Royal Guard shift system
- Lord Marshal / captains / sergeants / field army
- physical economy loop
- wider world and rival Blackmere Keep
- diplomacy, alliances/trade relationship hooks, war/peace
- raids and Crown campaign path
- far simulation + bounded mobile render pool
- save/resume of king, actors and active orders

## Next quality milestones

### Immediate blocker — king head/profile
- V25 side-profile rebuild is **rejected on Pixel**; the actual side view remains deformed
- stop claiming the face/head is fixed based on Blender-only QA
- rebuild or replace the head as one coherent modeled/rigged asset or deliberately authored mesh
- validate front, exact side, rear and 3/4 silhouettes on actual Pixel Chrome before acceptance
- preserve the already-correct body scale, crown, camera modes, regalia and mobile controls while replacing the head

### Real-device polish
- tune throne sitting on Pixel screenshot evidence
- inspect king/cape/crown while walking after the head blocker is resolved
- profile FPS/memory on Pixel 6a in market and battle
- tune world asset scale/collision
- improve mobile HUD density if needed

### Deeper life simulation
- relationship/social graph
- family/household ownership
- sickness/injury/recovery
- stronger supervisor-to-worker task delegation
- messenger delivery for distant royal orders
- more visible hauling/inventory

### Military depth
- formation visuals
- mounted units/stables
- supply carts/camps
- casualties and infirmary recovery
- siege engines and proper siege loop
- officer intent translation for strategic orders

### Politics / kingdom depth
- emissaries physically travel
- noble houses and internal court politics
- tribute/vassalage
- more treaty types and betrayal
- construction/upgrades with visible progress
- long-term victory/defeat conditions

### Final production pass
- stronger animation set
- ambience/SFX/music
- richer materials/lighting/weather visuals
- tutorial that preserves the king fantasy
- long-session stability
- formal Pixel performance/memory baseline
