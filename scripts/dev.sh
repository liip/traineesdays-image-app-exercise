#!/bin/bash

set -e

node scripts/get-openai-token.js $1
concurrently --names "BildGenerierung,Aufgaben" -c "green,red" --kill-others "vite --port 3000 --open" "npm run tasks"
