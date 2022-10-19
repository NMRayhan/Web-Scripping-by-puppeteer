const fs = require("fs");
const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.amazon.com/s?i=specialty-aps&bbn=16225007011&rh=n%3A16225007011%2Cn%3A3011391011&ref=nav_em__nav_desktop_sa_intl_laptop_accessories_0_2_6_7"
  );

  const productHandles = await page.$$(
    "div.s-main-slot.s-result-list.s-search-results.sg-row > .s-result-item"
  );

  for (const product of productHandles) {
    let title = "Null";
    let cost = "Null";
    let image = "Null";
    try {
      title = await page.evaluate(
        (el) => el.querySelector("h2 > a > span").textContent,
        product
      );
    } catch (error) {}
    try {
      cost = await page.evaluate(
        (el) => el.querySelector("span.a-price-whole").textContent,
        product
      );
    } catch (error) {}
    try {
      image = await page.evaluate(
        (el) =>
          el
            .querySelector(".s-height-equalized > span > a > div > img")
            .getAttribute("src"),
        product
      );
    } catch (error) {}
    if (title !== "Null") {
      fs.appendFile(
        "result.csv",
        `${title}, ${image}, ${cost}\n`,
        function (error) {
          if (error) throw error;
          console.log("Saved!");
        }
      );
    }
  }

  await browser.close();
})();
