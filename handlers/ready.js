const Discord = require("discord.js")
const { bot } = require('../luxrp.js')
const Gamedig = require('gamedig');
bot.on("ready", async () => {
    try {
      console.log(`${bot.user.username} online`)
    //   setInterval(function () {
    //     Gamedig.query({
    //         type: 'fivem',
    //         host: '54.38.131.34',
    //         port: 30120
    //     }).then((state) => {
    //         bot.user.setActivity( state.players.length + "/" + state.maxplayers, {type: "PLAYING"}).catch();
    //     }).catch((e) => {
    //       bot.user.setActivity( "OFFLINE", {type: "PLAYING"}).catch();
    //     });
    // }, 20000);
  }catch (e) {
    console.log(e);
  }
  })