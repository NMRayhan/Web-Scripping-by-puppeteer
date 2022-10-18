const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false
  });
  const page = await browser.newPage();
  await page.goto("https://www.daraz.com.bd/#hp-just-for-you");
  
  // await browser.close();
})();
