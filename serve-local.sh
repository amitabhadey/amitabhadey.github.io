#!/usr/bin/env bash
set -euo pipefail

port="${JEKYLL_PORT:-4000}"

# If default port is already in use, automatically try 4001.
if lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
	echo "Port $port is in use; switching to 4001"
	port="4001"
fi

RBENV_VERSION=3.2.4 bundle _2.3.26_ exec jekyll serve --port "$port" --config _config.yml,_config.dev.yml
