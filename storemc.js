const discord = require('discord.js')
const Gamedig = require('gamedig');
const bot = new discord.Client({disableEveryone: false});
async function xd(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
    var online = state.players.length;
    var max = state.maxplayers
    const totalUsers2 = bot.channels.get("704097045157249215")
    totalUsers2.setName(`Online:` + " " + online +"/"+ max)
}).catch((error) => {
  const totalUsers2 = bot.channels.get("704097045157249215")
  totalUsers2.setName(`Online: OFFLINE`)
});
}
async function xd2(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
    var online = state.players.length;
    var max = state.maxplayers
    const totalUsers2 = bot.channels.get("704097045157249215")
    totalUsers2.setName(`Online:` + " " + online +"/"+ max)
}).catch((error) => {
  const totalUsers2 = bot.channels.get("704097045157249215")
  totalUsers2.setName(`Online: OFFLINE`)
});
}
bot.on("ready", async () => {
  console.log(`${bot.user.username} online`)
  bot.user.setActivity("http://storymc.pl", {type: "WATCHING"});
  bot.user.setStatus("dnd");
    let status = 0;
setInterval(function() {
    if (status === 0) {
        xd()
        status = 1;
      }else if (status === 1) {
          xd2()
        status = 0;
      }
    }, 20000);
})
bot.login(process.env.token)