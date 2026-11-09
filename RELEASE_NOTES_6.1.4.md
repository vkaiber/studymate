# StudyMate 6.1.4

This release includes a keyboard handling fix for the note editor.

## What's changed

- Global `N` and `T` shortcuts no longer trigger while the user is typing in an input, textarea, select, or content-editable region.
- The `Ctrl+K` command palette shortcut is also ignored while typing in editable fields.
- Package metadata is prepared for public GitHub distribution.

## Windows installer

Attach this file to the GitHub Release after building and testing it on Windows:

`StudyMate-Setup-6.1.4-Windows-x64.exe`

## Before publishing

The source archive has passed ZIP integrity validation. A Windows installer build and full end-to-end test must still be performed on a Windows machine. Do not describe the installer as tested until that verification is complete.
