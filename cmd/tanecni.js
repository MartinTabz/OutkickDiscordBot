const puppeteer = require("puppeteer");
module.exports= {
    name: 'tanecni',
    description: "Webscrape",
    execute(message){ 
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://www.tanecnifranc.cz/");
            const KurzA = await page.evaluate(() => {
                const TagA = document.querySelector("#kurzyRight > table > tbody > tr:nth-child(2) > td:nth-child(2) > p");
                return TagA.innerHTML;
            })
            const KurzB = await page.evaluate(() => {
                const TagB = document.querySelector("#kurzyRight > table > tbody > tr:nth-child(4) > td:nth-child(2) > p")
                return TagB.innerHTML;
            })
            message.channel.send("Pánové Kurz A: " + "**" + KurzA + "**");
            message.channel.send("Pánové Kurz B: " + "**" + KurzB + "**");
            await browser.close();
        })();
    }
}
