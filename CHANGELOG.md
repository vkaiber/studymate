# Changelog

Notable changes to StudyMate are documented here.

## [6.1.4] - 2026-11-09

### Fixed
- Prevented global single-key shortcuts from intercepting typing inside editable fields, including the note editor.
- Shortcut handling now recognizes content-editable elements and select controls.

### Packaging
- Updated package metadata for public distribution.
- Prepared the repository documentation and MIT license.

### Verification
- Source archive integrity was checked.
- A full Windows installer build and end-to-end runtime test are not claimed by this source package. Build and test the release on Windows before publishing the installer.

## [6.1.3]

### Maintenance
- Improved IndexedDB write-queue recovery and database lifecycle handling.
- Added stronger backup and restore validation.
- Improved document storage error handling.
- Tightened Electron production navigation behavior.
- Updated Windows packaging metadata.

### Notes
- Refer to the source history for earlier changes.
