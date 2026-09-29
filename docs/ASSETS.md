# Asset Provenance

Crownlands prefers assets that are clearly reusable and redistributable. The current repository intentionally avoids scraping commercial games or depending on paid proprietary content.

## Current committed assets

| File / group | Source | License / status | Use |
|---|---|---|---|
| `assets/royal-courtyard.glb` | 3DAssets.dev — Royal Court and Throne Palace / Royal Courtyard Audience | CC0 1.0 | core royal court environment |
| `assets/guard.glb` | 3DAssets.dev — Fantasy MMO City and Townsfolk / City Guard With Spear | CC0 1.0 | Royal Guard / soldier base |
| `assets/merchant.glb` | 3DAssets.dev — Fantasy MMO City and Townsfolk / Market Trader | CC0 1.0 | merchant / court NPC |
| `assets/innkeeper.glb` | 3DAssets.dev — Fantasy MMO City and Townsfolk / Innkeeper | CC0 1.0 | steward / civilian NPC |
| `assets/mage.glb` | 3DAssets.dev — Fantasy MMO City and Townsfolk / City Mage | CC0 1.0 | chancellor / court NPC |
| `assets/king-knight.glb` | Quaternius Animated Knight Pack, GLB obtained through `ilrein/warptracker` | CC0 | current animated king body |
| `assets/castle/*.glb` | Kenney Castle Kit, mirrored through `Hidencod/tge-assets` | CC0 | gates, towers, walls, bridge, siege props, trees, rocks |\n| `assets/town/*` | Kenney Fantasy Town Kit 2.0 | CC0 | market stalls, cart, lanterns, fountains, mills and trees |\n| `assets/town/Textures/colormap.png` | Kenney Fantasy Town Kit 2.0 GLB texture | CC0 | shared town palette texture |
| `vendor/three.module.js` and `vendor/addons/*` | Three.js r160 | MIT | renderer/loaders/runtime |

## Source links

3DAssets.dev assets:

- Royal courtyard: https://3dassets.dev/assets/royal-court-and-throne-palace-royal-cour-dab6f27e-starter-scene
- City guard: https://3dassets.dev/assets/fantasy-mmo-city-and-townsfolk-city-guard-52abf67b
- Market trader: https://3dassets.dev/assets/fantasy-mmo-city-and-townsfolk-market-trader-25603071
- Innkeeper: https://3dassets.dev/assets/fantasy-mmo-city-and-townsfolk-innkeeper-4783cfaf
- City mage: https://3dassets.dev/assets/fantasy-mmo-city-and-townsfolk-city-mage-31468b6f

King:

- Quaternius Animated Knight Pack: https://quaternius.com/packs/knightcharacter.html
- provenance mirror: https://github.com/ilrein/warptracker
- Warptracker asset policy records `public/models/knight.glb` as Quaternius Animated Knight Pack, CC0.

Castle:

- Kenney: https://kenney.nl/
- source mirror used for the GLBs: https://github.com/Hidencod/tge-assets
- that repository describes itself as "Free CC0 3D models (Kenney)".

Runtime:

- Three.js: https://github.com/mrdoob/three.js

## Asset policy going forward

Preferred order:

1. CC0 / public domain
2. permissive assets that clearly allow redistribution
3. original procedural assets
4. original locally created Blender assets

Do not commit assets with unclear redistribution rights.

If a useful asset is license-restricted, use it only as reference and create/obtain a clean replacement.

Every new non-original asset should be added to this manifest with:

- exact source
- license
- local filename
- modifications made