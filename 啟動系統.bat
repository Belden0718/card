@echo off
chcp 65001 >nul
title 卡友聰明刷 - 信用卡決策神器
echo ===================================================
echo   正在啟動「卡友聰明刷」前端系統...
echo ===================================================
timeout /t 1 >nul
start "" "http://localhost:5173"
call npm run dev
pause
