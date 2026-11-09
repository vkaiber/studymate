const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

const isDev = !app.isPackaged;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 360,
    minHeight: 560,
    show: false,
    backgroundColor: '#0d1117',
    title: 'StudyMate',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'electron-preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
    },
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => { mainWindow = null; });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://') || url.startsWith('http://')) shell.openExternal(url);
    return { action: 'deny' };
  });
  mainWindow.webContents.on('will-navigate', (event, url) => {
    const allowed = isDev ? url.startsWith('http://127.0.0.1:5173/') : url === require('node:url').pathToFileURL(path.join(app.getAppPath(), 'dist', 'index.html')).href;
    if (!allowed) event.preventDefault();
  });

  if (isDev) mainWindow.loadURL('http://127.0.0.1:5173');
  else {
    const indexPath = path.join(app.getAppPath(), 'dist', 'index.html');
    mainWindow.loadFile(indexPath).catch((error) => {
      console.error('StudyMate arayüzü yüklenemedi:', indexPath, error);
      dialog.showErrorBox(
        'StudyMate başlatılamadı',
        `Arayüz dosyası yüklenemedi.\nDosya: ${indexPath}\n\n${error.message}`
      );
    });
  }
}

function createMenu() {
  const template = [
    { label: 'StudyMate', submenu: [
      { label: 'Hakkında', click: () => dialog.showMessageBox(mainWindow, { type: 'info', title: 'StudyMate', message: `StudyMate ${app.getVersion()}`, detail: 'Kişisel akademik çalışma alanı. Veriler bu bilgisayarda saklanır.' }) },
      { type: 'separator' }, { role: 'quit', label: 'Çıkış' },
    ] },
    { label: 'Düzenle', submenu: [ { role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'selectAll' } ] },
    { label: 'Görünüm', submenu: [ { role: 'reload', label: 'Yenile' }, { ...(isDev ? { role: 'toggleDevTools', label: 'Geliştirici Araçları' } : {}) }, { type: 'separator' }, { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { role: 'togglefullscreen', label: 'Tam ekran' } ] },
  ];
  for (const item of template) if (item.submenu) item.submenu = item.submenu.filter(entry => entry.label || entry.role || entry.type);
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  app.setAppUserModelId('com.studymate.desktop');
  createMenu();
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

// A simple, user-visible backup location helper for future native export integration.
app.on('before-quit', () => {
  try {
    const marker = path.join(app.getPath('userData'), 'last-session.txt');
    fs.mkdirSync(path.dirname(marker), { recursive: true });
    fs.writeFileSync(marker, new Date().toISOString(), 'utf8');
  } catch (error) { console.error('Session marker could not be written:', error); }
});
