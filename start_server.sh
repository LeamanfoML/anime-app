#!/bin/bash
# Script to start a local server for the mobile anime app

echo "Starting local server for Anime App..."
echo "Open your browser or mobile device to: http://localhost:8080"

cd /data/data/com.termux/files/home/mobile_anime_app
python3 -m http.server 8080