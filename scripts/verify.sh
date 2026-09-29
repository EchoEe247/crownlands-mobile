#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")/.."
node --check src/game.js
node --check dist/game.fast.js
python -c "from pathlib import Path; assert Path('index.html').is_file(); assert Path('assets/king-knight.glb').read_bytes()[:4] == b'glTF'; assert Path('dist/game.fast.js').stat().st_size > 100000; print('static verification: PASS')"
