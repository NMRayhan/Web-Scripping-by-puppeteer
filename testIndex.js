// const puppeteer = require("puppeteer");
// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: false,
//   });
//   const page = await browser.newPage();
//   await page.goto(
//     "https://www.amazon.com/s?i=computers-intl-ship&bbn=16225007011&rh=n%3A16225007011%2Cn%3A11036071%2Cp_36%3A1253503011&dc&fs=true&qid=1666165715&rnid=16225007011&ref=sr_pg_1",
//     {
//       waitUntil: "load",
//     }
//   );

//   const is_disabled =
//     (await page.$(".s-pagination-next.s-pagination-disabled")) !== null;
//   console.log(is_disabled);

//   await browser.close();
// })();

// s-pagination-item s-pagination-next s-pagination-disabled
// s-pagination-item s-pagination-next s-pagination-button s-pagination-separator

const fs = require("fs");
  
// Storing the JSON format data in myObject
var data = fs.readFileSync("result.json");
var myObject = JSON.parse(data);
console.log(myObject.length);
