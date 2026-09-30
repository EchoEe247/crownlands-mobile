#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")/.."
npm run build
npm test
python -c "from pathlib import Path; assert Path('index.html').is_file(); assert 'dist/game.fast.js?v=29' in Path('index.html').read_text(); assert Path('assets/guard.glb').read_bytes()[:4] == b'glTF'; assert Path('assets/town/Textures/colormap.png').is_file(); assert Path('dist/game.fast.js').stat().st_size > 100000; print('Crownlands verification: PASS')"