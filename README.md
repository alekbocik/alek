# chromosom
const pup = require('puppeteer');
const discord = require('discord.js')
const fs = require('fs')
const { bot } = require('../24-06.js')

async function main(){
    try{
    const browser = await pup.launch({
    args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    ],
    })
      const page = await browser.newPage()
      await page.setDefaultNavigationTimeout(0); 
      page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30')
      await page.goto('https://www.margonem.pl/'); 
      const but = await page.$('a.enable-old-page')
      await but.click()
      await page.waitFor('input[id=ulogin]', { timeout: 0});
      await page.$eval('input[id=ulogin]', el => el.value = 'bige');
      await page.$eval('input[id=upass]', el => el.value = 'maligiganci');
      await page.$eval('button[id=loginbutton]', el => el.click());
      await page.waitFor('button[id=enterbutton]', { timeout: 0});
      await page.$eval('button[id=enterbutton]', el => el.click());
      await page.waitFor(20000)
      await page.keyboard.press('`')
      await page.waitFor(20000)
      await page.keyboard.type(`extManager.task("add_list");extManager.callDetails(22074)`)
      await page.waitFor(5000)
      await page.keyboard.press('Enter')
      await page.waitFor(5000)
      await page.keyboard.press('`')
      await page.waitFor(20000)
      await page.click("span.install.button")
      await page.waitFor(20000)
      await page.reload()
      await page.waitFor(20000)
      await page.keyboard.press('`')
      await page.waitFor(20000)
      await page.keyboard.type(`extManager.task("add_list");extManager.callDetails(3637)`)
      await page.waitFor(5000)
      await page.keyboard.press('Enter')
      await page.waitFor(5000)
      await page.keyboard.press('`')
      await page.waitFor(25000)
      await page.click("span.install.button")
      await page.waitFor(20000)
      await page.reload()
      await page.waitFor(20000)
      await masno()
      await page.waitFor(20000)
      await battle()
      await page.waitFor(20000)
      await ktos()
      await page.waitFor(20000)
      await discord()

    async function masno(){
        try{
            await page.click("#npc20081")
            await page.waitFor(1000)
            await page.click("#battleclose")
            await page.waitFor(10000)
            masno2()
        } catch (e) {
        masno2()
        }  
        } 
async function masno2(){//npc146771
    try{
        await page.click("#npc20081")
        await page.waitFor(1000)
        await page.click("#battleclose")
        await page.waitFor(10000)
        masno()
    } catch (e) {
    masno()
    }  
    }     
async function battle(){  
    try{
        await page.waitFor(1000)
        await page.click('#autobattleButton');
        await page.waitFor(1000)
        await page.click("#battleclose")
        await page.waitFor(1000)
        battle2()
    } catch (e) {
    battle2()
    } 
}
async function battle2(){  
    try{
        await page.waitFor(1000)
        await page.click("#battleclose")
        await page.waitFor(1000)
        await page.click("#autobattlebutton")
        await page.waitFor(1000)
        battle()
    } catch (e) {
    battle()
    } 
}
async function ktos(){
    try{
        await page.click("#a_ok")
        ktos2()
    } catch (e) {
        ktos2()
    } 
}
async function ktos2(){
    try{
        await page.click("#a_ok")
        ktos()
    } catch (e) {
        ktos()
    } 
}
async function discord(){
    try{
        await page.waitFor(2000)
        await page.screenshot({path: `ekwipunekwaldek.png`, fullPage: true});
        const well = bot.channels.get("683374637819756623")
        await well.send({files: [`./ekwipunekwaldek.png`]}).then(msg => (msg.delete(120000)));
        const path = `./ekwipunekwaldek.png`
        await fs.unlinkSync(path)
        await page.waitFor(500)
        await page.keyboard.down('A');
        await page.waitFor(500)
        await page.keyboard.up('A')
        await page.waitFor(500)
        await page.keyboard.down('D')
        await page.waitFor(500)
        await page.keyboard.up('D')
        await page.waitFor(2000)
        discord2()
} catch (e) {
discord2()
}  
}
async function discord2(){
    try{
        await page.waitFor(2000)
        await page.screenshot({path: `ekwipunekwaldek.png`, fullPage: true});
        const well = bot.channels.get("683374637819756623")
        await well.send({files: [`./ekwipunekwaldek.png`]}).then(msg => (msg.delete(120000)));
        const path = `./ekwipunekwaldek.png`
        await fs.unlinkSync(path)
        discord()
} catch (e) {
discord()
}  
}
    } catch (e){
      console.log("error" + e)
    }
  }


main();