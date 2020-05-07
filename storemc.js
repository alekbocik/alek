const discord = require('discord.js')
const Gamedig = require('gamedig');
const fs = require("fs")
const bot = new discord.Client({disableEveryone: false});
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
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

bot.on("message", async message => {
  try {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let messageArray = message.content.toLowerCase().split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith("!mute")) {
      if(!message.member.roles.cache.some(r=>["ROOT","perm.mute"].includes(r.name)))
      return message.delete().catch(O_o=>{}) 
      let user = message.guild.member(message.mentions.members.first());
      if(!user) return message.delete().catch(O_o=>{})
      if(user.id === "287975660872400898" || user.id === "397118855979466753" || user.id === "390196446613471236") return message.delete().catch(O_o=>{});
      let muterole = message.guild.roles.cache.find(role => role.name === 'frajer');
      if(!muterole){
        try{
          muterole = await message.guild.roles.create({
            data: {
              name: 'frajer',
              color: 'BLUE',
            },
          })
        }catch(e){
          console.log(e.stack);
        }
      return;
    }
    user.roles.add(muterole.id) + message.delete().catch(O_o=>{});


async function mute(){
  try {
      message.guild.member(user).voice.setMute(true)
  } catch (error) {
      message.guild.member(user).voice.setMute(true)
  }
}
async function mute2(){
  try {
      message.guild.member(user).voice.setMute(true)
  } catch (error) {
      message.guild.member(user).voice.setMute(true)
  }
}
  if(user.roles.cache.some(r=>["frajer"].includes(r.name))){
    setInterval(function() {
      if (user.roles.cache.some(r=>["frajer"].includes(r.name))) {
          mute()
        }else if (user.roles.cache.some(r=>["frajer"].includes(r.name))) {
            mute2()
        }
      }, 2000);
  }
}
    if(message.content.startsWith("!rangamute")){
      if(!message.author.id === "287975660872400898") return message.delete().catch(O_o=>{})
      let user = message.guild.member(message.mentions.members.first());
      if(!user) return message.delete().catch(O_o=>{})
      let muterole = message.guild.roles.cache.find(role => role.name === 'perm.mute');
      if(!muterole){
        try{
          muterole = await message.guild.roles.create({
            data: {
              name: 'perm.mute',
              color: 'BLUE',
            },
          })
        }catch(e){
          console.log(e.stack);
        }
      return;
    }
    user.roles.add(muterole.id) + message.delete().catch(O_o=>{});
    }
    if(message.content.startsWith("!unmute")){
      if(!message.member.roles.cache.some(r=>["ROOT","perm.mute"].includes(r.name)))
      return message.delete().catch(O_o=>{}) 
      let user = message.guild.member(message.mentions.members.first());
      if(!user) return message.delete().catch(O_o=>{})
      let muterole = message.guild.roles.cache.find(role => role.name === 'frajer');
      if(!muterole){
        try{
          muterole = await message.guild.roles.create({
            data: {
              name: 'frajer',
              color: 'BLUE',
            },
          })
        }catch(e){
          console.log(e.stack);
        }
      return;
    }
    user.roles.remove(muterole.id) + message.delete().catch(O_o=>{});
    }
}catch (error) {
  console.log(error)
}
})
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
