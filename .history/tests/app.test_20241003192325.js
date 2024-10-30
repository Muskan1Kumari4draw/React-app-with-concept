const { Builder, Browser } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
async function appTest() {
  const options = new chrome.Options(); //It is instance of chrome options
  options.addArguments("--headless"); //it is used for operate browser without gui
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
}
