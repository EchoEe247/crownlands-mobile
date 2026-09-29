#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")/.."
if [ -x "./node_modules/.bin/esbuild" ]; then
  ./node_modules/.bin/esbuild src/game.js --bundle --minify --format=esm --target=chrome120 --outfile=dist/game.fast.js
else
  npx esbuild src/game.js --bundle --minify --format=esm --target=chrome120 --outfile=dist/game.fast.js
fi
node --check dist/game.fast.js
