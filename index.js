const wdio = require("webdriverio");
const opts = {
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "7",
      deviceName: "ce10171a7aacb32b03",
      app: "C:\\Work\\Sources\\AppiumTest\\ApiDemos-debug.apk",
      appPackage: "io.appium.android.apis",
      appActivity: ".view.TextFields",
      automationName: "UiAutomator2"
    }
  };
  
  async function main () {
    const client = await wdio.remote(opts);
    const field = await client.$("android.widget.EditText");
    await field.setValue("Hello World!");
    // const value = await field.getText();
    // assert.equal(value,"Hello World!");
    await client.deleteSession();
  }
  
  main();
  