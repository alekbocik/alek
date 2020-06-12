const discord = require('discord.js')
const Gamedig = require('gamedig');
const fs = require("fs")
const bot = new discord.Client({disableEveryone: false});
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

async function zmien(state){
  const zmien = await bot.channels.cache.get("704097045157249215")
  try {
    await zmien.setName(`Online:` + " " + state.players.length + "/" + state.maxplayers)
  } catch (error) {
    return;
  }
}
async function zmien2(){
  const zmien = await bot.channels.cache.get("704097045157249215")
  try {
    await zmien.setName(`Online: OFFLINE`)
  } catch (error) {
    return;
  }
}

async function xd(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
    zmien(state)
}).catch((error) => {
  zmien2()
});
}
async function xd2(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
      zmien(state)
}).catch((error) => {
  zmien2()
});
}

bot.on("ready", async () => {
  try {
    console.log(`${bot.user.username} online`)
    bot.user.setActivity("http://storymc.pl/", {type: "WATCHING"});
    let status = 0;
setInterval(function() {
    if (status === 0) {
        xd()
        status = 1;
      }else if (status === 1) {
          xd2()
        status = 0;
      }
    }, 10000);
}catch (e) {
  console.log(e);
}
})
fs.readdir("./handlers/", (err, files) => {
  
  if(err) console.log(err)
 
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    return console.log("brak eventów");
  }

  jsfile.forEach((f, i) => {
    require(`./handlers/${f}`)
   });
});
module.exports = {
  bot: bot
};
bot.login(process.env.token)
