#!/bin/bash

set -e

node scripts/get-openai-token.js $1
concurrently --names "BildGenerierung,Aufgaben,Chat" -c "green,red,blue" --kill-others "vite --port 3000 --open" "npm run tasks" "npm run chat"
