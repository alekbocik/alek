const Discord = require("discord.js")
const { bot } = require('../luxrp.js')
const config = require("../config.json")

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
      if (!message.content.startsWith(prefix)) return;
      let commandfile = bot.commands.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(bot,message,args);
  });