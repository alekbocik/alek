const pup = require('puppeteer');
var cron = require('node-cron');
const Client = require('@infosimples/node_two_captcha');
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on("ready", () => {

    console.log("alek on");
    bot.user.setActivity('ALEK', { type: 'WATCHING' }); //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
});

client = new Client('943d5f841e921509867c274dbf6e16c8', {
                    timeout: 60000,
                    polling: 5000,
                    throwErrors: false});

String.prototype.extractNumber = function () {
    return Number(this.replace(/(?!-)[^0-9.]/g, ""));
};
async function main(){
    try{
      const browser = await pup.launch({
        executablePath: '/usr/bin/chromium-browser',
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']        
      });
      const page = await browser.newPage()
      await page.setDefaultNavigationTimeout(0);
      page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30')
      await page.goto('https://www.margonem.pl/', {waitUntil: "networkidle2"}); 
      const but = await page.$('a.enable-old-page')
      await but.click()
      await page.waitFor('input[id=ulogin]', { timeout: 0});
      await page.$eval('input[id=ulogin]', el => el.value = 'rokkkit4');
      await page.$eval('input[id=upass]', el => el.value = 'kubatoidiota123');
      await page.$eval('button[id=loginbutton]', el => el.click());
      await page.waitFor('button[id=enterbutton]', { timeout: 0});
      await page.$eval('button[id=enterbutton]', el => el.click());
      await page.waitFor(`div[widget-name='config']`, { timeout: 0});
      await page.$eval(`div[widget-name='config']`, el => el.click());
      await page.waitFor(`div[class='button green small change-interface-btn']`, { timeout: 0});
      await page.$eval(`div[class='button green small change-interface-btn']`, el => el.click());
      await page.waitFor(10000)
      await page.keyboard.press('`')
      await page.waitFor(500)
      await page.keyboard.type(`extManager.task("add_list")`)
      await page.waitFor(500)
      await page.keyboard.press('Enter')
      await page.waitFor(500)
      await page.keyboard.type(`extManager.callDetails(22074)`)
      await page.waitFor(500)
      await page.keyboard.press('Enter')
      await page.waitFor(500)
      await page.keyboard.type(`extManager.install(22074)`)
      await page.waitFor(500)
      await page.keyboard.press('Enter')
      await page.waitFor(500)
      await page.keyboard.type(`extManager.callDetails(3637)`)
      await page.waitFor(500)
      await page.keyboard.press('Enter')
      await page.waitFor(500)
      await page.keyboard.type(`extManager.install(3637)`)
      await page.waitFor(500)
      await page.keyboard.press('Enter')
      await page.waitFor(2000)
      await page.reload()
    cron.schedule('* * * * * *', () => {
      f()
    });
    cron.schedule('* * * * * *', () => {
      g()
    });
    cron.schedule('* * * * * *', () => {
      masno()
    });
    cron.schedule('* * * * * *', () => {
      battle()
    });
    cron.schedule('* * * * * *', () => {
      captcha()
    });
    cron.schedule('2 * * * * *', () => {
      discord()
    });
    cron.schedule('5 * * * * *', () => {
      refresh()
    });
    async function g(){  
      try{
        await page.click("#a_ok")
        await page.waitFor(2000)
      } catch (e) {} 
    }
    async function masno(){  
      try{
        await page.click("#npc62345")
        await page.waitFor(1500)
      } catch (e) {} 
    }
    async function battle(){  
      try{
        await page.click("#battleclose")
        await page.waitFor(2000)
      } catch (e) {} 
    }
    async function f(){  
      try{
        await page.click('#autobattleButton')
        await page.waitFor(2000)
      } catch (e) {} 
    }
    async function refresh(){  
      try{
        await page.waitFor(500)
        await page.keyboard.down('A');
        await page.waitFor(500)
        await page.keyboard.up('A')
        await page.waitFor(500)
        await page.keyboard.down('D')
        await page.waitFor(500)
        await page.keyboard.up('D')
        await page.waitFor(2000)
        await page.reload()
      } catch (e) {} 
    }
    async function discord(){  
      try{
        await page.screenshot({path: `ekwipunekalek.png`, fullPage: true});
        const well = bot.channels.cache.get("804688857219203153")
        await well.send({files: [`./ekwipunekalek.png`]});
        const path = `./ekwipunekalek.png`
        await fs.unlinkSync(path)
      } catch (e) {} 
    }
    isCaptcha = false;
    async function captcha(){
      try{
        if(isCaptcha){
          await page.waitFor(`div[class='captcha__image']`, { timeout: 0});
          const images = await page.$eval(('div[class="captcha__image"] > img[src]'),node => node.src);
          console.log(images.replace("data:image/jpg;base64,", ""))
          client.decode({
            base64: images.replace("data:image/jpg;base64,", "")
           }).then(async function(response) {
            await page.waitFor(`span[name='${response.text.extractNumber()}']`, { timeout: 5});
            await page.$eval(`span[name='${response.text.extractNumber()}']`, el => el.click());
            await console.log(response.text.extractNumber());
            await page.waitFor(`span[name='Potwierdzam']`, { timeout: 15});
            await page.$eval(`span[name='Potwierdzam']`, el => el.click());
          }); 
          isCaptcha = false;
        } else {
          await page.waitFor(`span[name='Rozwiąż teraz']`, { timeout: 0});
          await page.$eval(`span[name='Rozwiąż teraz']`, el => el.click());
          isCaptcha = true;
        }
      } catch (e) {} 
    }
    } catch (e){
      console.log("error" + e)
    }
}


main();