const {
  app,
  BrowserWindow,
  globalShortcut,
  systemPreferences
} = require("electron");

app.on("ready", () => {
  const isTrusted = systemPreferences.isTrustedAccessibilityClient(true);
  console.log("isTrustedAccessibilityClient", isTrusted);

  const registered = globalShortcut.register("MediaPlayPause", () => {
    console.log("MediaPlayPause pressed");
  });
  console.log("Registered MediaPlayPause?", registered);

  const win = new BrowserWindow();
  win.loadURL("http://example.com");
});
