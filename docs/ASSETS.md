# Asset Provenance

Crownlands prefers assets that are clearly reusable and redistributable. The current repository intentionally avoids scraping commercial games or depending on paid proprietary content.

## Current committed assets

| File / group | Source | License / status | Use |
|---|---|---|---|
| `assets/royal-courtyard.glb` | 3DAssets.dev — Royal Court and Throne Palace / Royal Courtyard Audience | CC0 1.0 | core royal court environment |
| `assets/guard.glb` | 3DAssets.dev — Fantasy MMO City and Townsfolk / City Guard With Spear | CC0 1.0 | Royal Guard / soldier base + V14 playable king body |
| `assets/merchant.glb` | 3DAssets.dev — Fantasy MMO City and Townsfolk / Market Trader | CC0 1.0 | merchant / court NPC |
| `assets/innkeeper.glb` | 3DAssets.dev — Fantasy MMO City and Townsfolk / Innkeeper | CC0 1.0 | steward / civilian NPC |
| `assets/mage.glb` | 3DAssets.dev — Fantasy MMO City and Townsfolk / City Mage | CC0 1.0 | chancellor / court NPC |
| `assets/king-knight.glb` | Quaternius Animated Knight Pack, GLB obtained through `ilrein/warptracker` | CC0 | legacy king prototype retained for provenance/reference; not the V14 player body |
| `assets/castle/*.glb` | Kenney Castle Kit, mirrored through `Hidencod/tge-assets` | CC0 | gates, towers, walls, bridge, siege props, trees, rocks |
| `assets/town/*` | Kenney Fantasy Town Kit 2.0 | CC0 | market stalls, cart, lanterns, fountains, mills and trees |
| `assets/town/Textures/colormap.png` | Kenney Fantasy Town Kit 2.0 GLB texture | CC0 | shared town palette texture |
| `vendor/three.module.js` and `vendor/addons/*` | Three.js r160 | MIT | renderer/loaders/runtime |

## Current player-character asset status

The current playable body is based on `assets/guard.glb` (3DAssets.dev City Guard, CC0) with runtime royal regalia. V27 reuses that asset's coherent `head.001` skin mesh as the complete head/face silhouette; stock helmet/face/hair pieces are hidden and only paper-thin front identity markings plus in-bounds top/rear hair are layered on top. No new third-party character asset was introduced. The legacy Quaternius `king-knight.glb` is not the current player body.

V25 and V27 are both **rejected** by Pixel face/profile review. GPT-5.6 Sol attempted multiple follow-up face passes and did not achieve an acceptable result. Face work is paused. If a future replacement head is introduced, it must be original or clearly redistributable and recorded here.

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

The provenance table records the upstream license/status currently documented for each asset, but not every upstream license text is mirrored in this repository yet. Treat that packaging gap as unresolved until the corresponding license files are committed and verified.

If a useful asset is license-restricted, use it only as reference and create/obtain a clean replacement.

Every new non-original asset should be added to this manifest with:

- exact source
- license
- local filename
- modifications made

## Local asset normalization

The Quaternius `king-knight.glb` source carried `baseColorFactor` alpha values of 0 on Armor, Skin, and Boots despite containing no alpha textures. That made the complete skinned body disappear under Three.js while procedural regalia remained visible. The committed GLB is normalized to opaque alpha=1, and the runtime also forces the king materials opaque as a defensive compatibility fix.