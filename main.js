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
  const isTrusted = systemPreferences.isTrustedAccessibilityClient(false);
  console.log("isTrustedAccessibilityClient", isTrusted);
  if (!isTrusted) {
    const clickedButton = dialog.showMessageBox(null, {
      type: 'warning',
      message: 'Turn on accessibility',
      detail: 'Turn on Media Keys?',
      defaultId: 1,
      cancelId: 0,
      buttons: ['Not Now', 'Turn On Accessibility']
    })
    if (clickedButton === 1) {
      // Calling isTrustedAccessibilityClient with prompt=true has the side effect
      // of showing the native dialog that either denies access or opens System
      // Preferences.
      systemPreferences.isTrustedAccessibilityClient(true)
    }

  }


  globalShortcut.register("MediaPlayPause", () => {
    console.log("MediaPlayPause pressed");
  });
  console.log("Registered MediaPlayPause");

  const win = new BrowserWindow();
  win.loadURL(`file://${__dirname}/index.html`);
});
