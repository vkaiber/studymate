@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules (
  echo [1/2] Gerekli paketler kuruluyor...
  call npm install
  if errorlevel 1 goto error
)
echo [2/2] StudyMate masaustu uygulamasi baslatiliyor...
call npm run dev:desktop
if errorlevel 1 goto error
goto end
:error
echo.
echo Bir hata olustu. Yukaridaki hata mesajini kontrol edin.
pause
:end
endlocal
