const puppeteer = require("puppeteer");
const { email, password } = require("./config/config.js");
const url = "https://www.vettery.com";

const autoApply = async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  // Navigate home page to go to log in page
  await page.goto(url);
  await page.waitForSelector(".pointer");
  await page.click(".pointer");

  // Entering user info and submitting
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  await page.click("#UserEmail");
  await page.type("#UserEmail", email);
  await page.click("#UserPassword", password);
  await page.type("#UserPassword", password);
  await page.click("button[type=submit]");

  // Navigating to Discover tab
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  const [span] = await page.$x("//span[contains(., 'Discover')]");

  if (span) {
    await span.click();
  } else {
    await browser.close();
  }

  // Clicking on Interested until no more companies to show interest
  await page.waitForNavigation({ waitUntil: "networkidle0" });

  let companies = true;
  let count = 0;

  const showInterest = async () => {
    if (companies <= 0) {
      return;
    }
    try {
      const [span] = await page.$x("//span[contains(., 'Interested')]");

      if (span) {
        await span.click();
      } else {
        await browser.close();
      }
    } catch (e) {
      console.log(e);
      companies = false;
    }
  };

  while (companies) {
    await showInterest();
    await page.waitFor(7000);
    count++;
  }

  console.log(`Applied to ${count}.`);
  await browser.close();
};

autoApply();
