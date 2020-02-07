const wdio = require("webdriverio");
const opts = {
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "7",
      deviceName: "ce10171a7aacb32b03",
      app: "C:\\Work\\Sources\\NewAndroid\\ANZ-Health-Mobile\\platforms\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk",
      appPackage: "com.dxc.communityaide",
      automationName: "UiAutomator2"
    }
  };
  
  async function main () {
    const driver = await wdio.remote(opts);
    // driver.setTimeout({
    //     'pageLoad': 10000,
    //     'script': 60000,
    //     'implicit': 10000
    // });
    // await driver.pause(200000);
    // const field = await client.$("android.widget.EditText");
    // await field.setValue("Hello World!");
    // // const value = await field.getText();
    // // assert.equal(value,"Hello World!");
    // await client.deleteSession();
    // const selector = 'new UiSelector().className("android.widget.RadioButton")';
    // setTimeout(() => {
      const button = await driver.$("//android.widget.RadioButton[contains(@text, 'North Bristol NHS Trust')]");
      await button.waitForExist(15000);
      // Button.waitForClickable(100000);
      // const Button = ele1.selectByAttribute('resource-id', "rb-8-0");
      // button.click();
      console.log("hahahaha");
      await button.click();
      // driver.pause(2000);
      // await driver.deleteSession();
    // }, 7000);
    
    // let el2 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[1]/android.view.View[3]/android.view.View[1]/android.view.View/android.view.View");
    // el2.click();
    // let el3 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.Button");
    // el3.click();
    // let el4 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[3]/android.widget.Button");
    // el4.click();
    // let el5 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.EditText");
    // el5.setValue("udolca2o");
    // let el6 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.EditText");
    // el6.setValue("lorenzo");
    // let el7 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[5]/android.widget.Button[1]");
    // el7.click();
    // let el8 = driver.element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.view.View[4]/android.widget.Button[1]");
    // el8.click();

  }
  
  main();
  