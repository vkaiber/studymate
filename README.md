# StudyMate

**A focused workspace for university life.**

StudyMate brings courses, notes, tasks, exams, files, grades, and focus sessions together in one desktop application. It is designed around a local-first workflow: your study data stays on your device rather than requiring an account or a cloud service.

<p align="center">
  <img src="studymate-logo-mark.png" alt="StudyMate logo" width="112" />
</p>

## Highlights

- **Courses:** Keep course information and related study materials organized.
- **Notes:** Write and organize notes in a dedicated editor.
- **Tasks:** Track assignments and personal study tasks.
- **Calendar:** Plan your workload around dates and deadlines.
- **Exams:** Manage upcoming exams and record results.
- **Files:** Keep course documents and study resources in a local library.
- **Grades:** Record assessment scores and review weighted results.
- **Focus:** Use focus sessions to structure study time.
- **Progress:** Review activity and study progress.
- **Backup and restore:** Export your workspace data and restore it when needed.
- **Desktop experience:** Built with Electron, React, and Vite for Windows.

> Feature availability and behavior may vary by release. See the release notes for the exact scope of each version.

## Screenshots

Add current screenshots to `docs/screenshots/` and link them here before publishing the repository:

```md
![StudyMate dashboard](docs/screenshots/dashboard.png)
![StudyMate notes](docs/screenshots/notes.png)
```

## Download

Download the latest Windows installer from the project's **GitHub Releases** page.

- Installer: `StudyMate-Setup-6.1.4-Windows-x64.exe`
- Platform: Windows 10/11, 64-bit
- Architecture: x64

The installer is not included in the source archive. Attach the generated installer to the GitHub Release.

## Installation for users

1. Open the latest release.
2. Download `StudyMate-Setup-6.1.4-Windows-x64.exe`.
3. Run the installer and follow the setup steps.
4. Launch StudyMate from the Start menu or desktop shortcut.

StudyMate is currently distributed as an unsigned Windows application. Windows SmartScreen may display a warning. Only download release assets from the official repository.

## Development setup

### Requirements

- Windows 10/11 (64-bit) for Windows packaging
- Node.js 20 or newer (Node.js 22 LTS recommended)
- npm
- Internet access for the initial dependency and Electron downloads

### Install dependencies

```bash
npm install
```

### Run the web development server

```bash
npm run dev
```

### Run the Electron desktop app

```bash
npm run dev:desktop
```

### Build the web application

```bash
npm run build
```

### Create a Windows installer

Run this on Windows:

```bash
npm run dist:win
```

The installer is written to:

```text
release/StudyMate-Setup-6.1.4-Windows-x64.exe
```

### Create a portable Windows build

```bash
npm run dist:win:portable
```

The portable artifact is written to the `release/` directory.

## Data, privacy, and backups

- StudyMate is designed for local use and does not require an account.
- The application does not provide cloud synchronization or multi-device sync.
- Study data is stored in the local Electron/Chromium application profile.
- Back up important information regularly using the in-app backup feature.
- Before reinstalling Windows, deleting your Windows user profile, or moving to another computer, create a backup and verify that it can be restored.
- Removing the application is configured not to delete application data by default. This should not be treated as a substitute for a separate backup.

For details, read [SECURITY.md](SECURITY.md) and [the release notes](CHANGELOG.md).

## Technology

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Electron](https://www.electronjs.org/)
- [Lucide](https://lucide.dev/)

## Project status

StudyMate is an actively evolving personal project. The source code and packaging configuration are provided for review and contribution. Not every workflow has been independently verified on every Windows version or device.

Before publishing a release, build the installer on Windows and test:
- First launch and application navigation
- Creating, editing, and reopening notes
- Course, task, calendar, and exam workflows
- File import and PDF viewing
- Backup creation and restore
- Upgrade installation over an existing version
- Data retention after uninstall and reinstall

## Contributing

Bug reports, focused improvements, and documentation fixes are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

StudyMate is released under the [MIT License](LICENSE).

---

**Created and maintained by vkaiber.**
