const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1366, height: 768 });
  await page.goto("https://brunoflix.netlify.app");
  await page.waitFor(4000);
  await page.screenshot({ path: "brunoflix.png" });
  console.log("feito");

  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://rocketseat.com.br");

  const returnObject = await page.evaluate(() => {
    const title = document.querySelector("h1");
    const description = document.querySelector("p");

    console.log(title.innerText);

    return {
      title: title.innerText,
      description: description.innerText
    };
  });

  fs.writeFile("captura.json", JSON.stringify(returnObject, null, 2), err => {
    if (err) throw new Error("algo deu errado");

    console.log("feito");
  });

  await browser.close();
})();
