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

### Paused unresolved blocker — king head/profile
- V25 and V27 are both **rejected on Pixel**
- GPT-5.6 Sol made multiple face/profile attempts and did not achieve an acceptable real-device result
- V27 corrected a real lower-face depth bug and constrained overlays to <3 mm beyond the measured stock surface, but that still did not solve the user's visual complaint
- no further procedural-overlay face iteration is planned in the current work state
- if the face is revisited later, replace it with one coherent modeled/rigged head asset and judge it on Pixel first
- preserve the already-correct body scale, crown, camera modes, regalia and mobile controls

### Real-device polish
- tune throne sitting on Pixel screenshot evidence
- inspect king/cape/crown while walking independently of the unresolved face when development resumes
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