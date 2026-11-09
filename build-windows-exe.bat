@echo off
setlocal
cd /d "%~dp0"
echo StudyMate Windows EXE hazirlaniyor...
if not exist node_modules call npm install
if errorlevel 1 goto error
call npm run dist:win
if errorlevel 1 goto error
echo.
echo EXE dosyasi release klasorunde olusturuldu.
explorer "%~dp0release"
pause
goto end
:error
echo.
echo EXE olusturulamadi. Yukaridaki hata mesajini kontrol edin.
pause
:end
endlocal
