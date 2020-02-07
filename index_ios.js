const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  port: 5723,
  // capabilities: {
  //   platformName: 'iOS',
  //   automationName: 'XCUITest',
  //   deviceName: process.env.IOS_DEVICE_NAME || 'iPad Pro (12.9-inch) (12.4)',
  //   platformVersion: process.env.IOS_PLATFORM_VERSION || '12.4',
  //   // app: '/Users/uyendo/Documents/GitHub/AppiumTest/TestApp.app',
  //   app: '/Users/udo2/Documents/LCA/Source/ios/ANZ-Health-Mobile/platforms/ios/build/emulator/CommunityAide.app',
  //   udid: '1E537C50-7C0E-416D-8BC2-81DED075A34A',
  //   autoWebview: true
  // }
  capabilities: {
    "platformName": "iOS",
    "automationName": "XCUITest",
    "deviceName": "iPad Pro (12.9-inch) (12.4)",
    "platformVersion": "12.4",
    "app": "/Users/udo2/Documents/LCA/Source/ios/ANZ-Health-Mobile/platforms/ios/build/emulator/CommunityAide.app",
    "udid": "1E537C50-7C0E-416D-8BC2-81DED075A34A",
    "autoWebview": true,
    "waitForQuietness": false,
    "waitForQuiescence": false,
    "wdaEventloopIdleDelay": 7,
    "eventLoopIdleDelaySec": 4,
    "startIWDP": true
  }
};

async function main1 () {
  const driver = await wdio.remote(opts);
  // let el1 = await driver.$("//XCUIElementTypeOther[@name=\"North Bristol NHS Trust\"]");
  let el1 = await driver.$("//XCUIElementTypeOther[contains(@name, 'North Bristol NHS Trust')]");
  await el1.waitForExist(15000);
  await el1.click();
  let el2 = await driver.$("~archive Save");
  await el2.waitForExist(15000);
  await el2.click();
  let el3 = await driver.$("~Portal Login");
  await el3.click();

  // let el4 = await driver.$("//XCUIElementTypeTextField");
  // await el4.waitForExist(15000);
  // await el4.setValue("udolca2o");

  // let el5 = await driver.$("//XCUIElementTypeSecureTextField");
  // await el5.setValue("lorenzo");
  // let el6 = await driver.$("//XCUIElementTypeButton[@name=\"Login\"]");
  // await el6.click();
  // let el7 = await driver.$("~OK");
  // await el7.waitForExist(15000);
  // await el7.click();

  // const field = await client.$("android.widget.EditText");
  // await field.setValue("Hello World!");
  // const value = await field.getText();
  // assert.equal(value,"Hello World!");
  // const elementId = await client.findElement('accessibility id', 'TextField1');
  // client.elementSendKeys(elementId.ELEMENT, 'Hello World!');
  // await client.deleteSession();
}

async function main () {
  const driver = await wdio.remote(opts);
  // let el1 = await driver.$("//XCUIElementTypeOther[@name=\"North Bristol NHS Trust\"]");
  let el1 = await driver.$("//dxc-connection-configuration//ion-radio[2]");
  await el1.waitForExist(15000);
  await el1.click();
  let el2 = await driver.$("//ion-icon[contains(@name, 'archive')]");
  await el2.waitForExist(15000);
  await el2.click();
  // let el3 = await driver.$("~Portal Login");
  // await el3.click();
  // let el2 = await driver.$("~archive Save");
  // await el2.waitForExist(15000);
  // await el2.click();
  // let el3 = await driver.$("~Portal Login");
  // await el3.click();

  // let el4 = await driver.$("//XCUIElementTypeTextField");
  // await el4.waitForExist(15000);
  // await el4.setValue("udolca2o");

  // let el5 = await driver.$("//XCUIElementTypeSecureTextField");
  // await el5.setValue("lorenzo");
  // let el6 = await driver.$("//XCUIElementTypeButton[@name=\"Login\"]");
  // await el6.click();
  // let el7 = await driver.$("~OK");
  // await el7.waitForExist(15000);
  // await el7.click();

  // const field = await client.$("android.widget.EditText");
  // await field.setValue("Hello World!");
  // const value = await field.getText();
  // assert.equal(value,"Hello World!");
  // const elementId = await client.findElement('accessibility id', 'TextField1');
  // client.elementSendKeys(elementId.ELEMENT, 'Hello World!');
  // await client.deleteSession();
}

main();
