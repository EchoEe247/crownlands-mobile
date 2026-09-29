#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")/.."
PORT="${PORT:-5205}"
exec python -m http.server "$PORT" --bind 127.0.0.1
