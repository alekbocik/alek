const discord = require("discord.js")
const fs = require("fs")

const bot = new discord.Client({disableEveryone: false});

module.exports = {
  bot: bot
}
bot.login(process.env.token1)
bot.on("ready", async => {
  console.log(`waldek online`)
bot.user.setStatus('dnd')
bot.user.setActivity("Margonem alek", {type: "WATCHING"});
})

  fs.readdir("./alek/", (err, files) => {
  
    if(err) console.log(err)
   
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
      return console.log("brak eventów");
    }
  
    jsfile.forEach((f, i) => {
      require(`./alek/${f}`)
     });
    })
