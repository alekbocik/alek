const discord = require('discord.js')
const Gamedig = require('gamedig');
const fs = require("fs")
const bot = new discord.Client({disableEveryone: false});
async function xd(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
    const well = bot.channels.cache.get("704097045157249215")
    well.setName(`Online:` + " " + state.players.length + "/" + state.maxplayers)
}).catch((error) => {
  const well = bot.channels.cache.get("704097045157249215")
  well.setName(`Online: OFFLINE`)
});
}
async function xd2(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
    const well = bot.channels.cache.get("704097045157249215")
    well.setName(`Online:` + " " + state.players.length + "/" + state.maxplayers)
}).catch((error) => {
  const well = bot.channels.cache.get("704097045157249215")
  well.setName(`Online: OFFLINE`)
});
}
bot.on("ready", async () => {
  try {
    console.log(`${bot.user.username} online`)
    let status = 0;
    bot.user.setActivity("http://storymc.pl/", {type: "WATCHING"});
    bot.user.setStatus("dnd");
setInterval(function() {
    if (status === 0) {
        xd()
        status = 1;
      }else if (status === 1) {
          xd2()
        status = 0;
      }
    }, 20000);
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
