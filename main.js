const {
  app,
  BrowserWindow,
  globalShortcut,
  systemPreferences,
  dialog
} = require("electron");

const os = require('os');
console.log('Operating system platform: ', os.platform());
console.log('Operating system version: ', os.release());
console.log('Electron version: ', process.versions.electron);

app.on("ready", () => {
  const win = new BrowserWindow();
  win.loadURL(`file://${__dirname}/index.html`);
});
