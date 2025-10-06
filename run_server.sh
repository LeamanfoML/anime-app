#!/bin/bash
# Скрипт для запуска сервера Anime App

echo "Запуск сервера Anime App..."
echo "Откройте браузер и перейдите по адресу: http://localhost:8080"
echo "Для остановки сервера нажмите Ctrl+C"

cd /data/data/com.termux/files/home/mobile_anime_app
python3 -m http.server 8080