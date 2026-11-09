@echo off
setlocal
cd /d "%~dp0"
title StudyMate 6.1 - Windows Installer
echo ==========================================
echo       StudyMate 6.1 Windows Installer
echo ==========================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js bulunamadi. Node.js 22 LTS onerilir.
  pause
  exit /b 1
)
for /f "tokens=1" %%v in ('node -p "process.versions.node.split('.')[0]"') do set NODE_MAJOR=%%v
if %NODE_MAJOR% LSS 20 (
  echo Node.js 20 veya uzeri gereklidir.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Bagimliliklar yukleniyor...
  call npm install
  if errorlevel 1 goto :error
)
echo.
echo Uygulama derleniyor ve Windows kurulum EXE'si hazirlaniyor...
call npm run dist:win
if errorlevel 1 goto :error
echo.
echo BASARILI! Kurulum dosyasi:
echo %CD%\release\StudyMate-Setup-6.1.3-Windows-x64.exe
echo.
pause
exit /b 0
:error
echo.
echo Derleme basarisiz. Yukaridaki hata mesajini kontrol edin.
pause
exit /b 1
