const { Builder, Browser } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
async function appTest() {
  const option = new chrome.Options(); //It is instance of chrome options
  options.addArguments("--headless");
}
