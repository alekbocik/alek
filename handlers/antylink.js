const Discord = require("discord.js")
const { bot } = require('../storemc.js');

bot.on('messageUpdate', async function(oldMessage, newMessage) {
  if(oldMessage.author.bot) return;
  if(oldMessage.channel.type === "dm") return;
  if(newMessage.channel.parentID == "720774619212021781") return;
  let embed = new Discord.MessageEmbed()
  .setColor("#c21bb9")
  .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL({ dynamic:true }))
  .setThumbnail('https://imgur.com/sF6PLGa.png')
  .setDescription("Edytowanie wiadomośći na linki jest również zabronione")
  const bannedWords = [`https://`, `http://`, `www.`, `.pl`, `.com`, `.eu`, `discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
      if (bannedWords.some(word => newMessage.content.toLowerCase().includes(word))) {
        if(!oldMessage.member.roles.cache.some(r=>["ROOT","perm.link", "BOT"].includes(r.name))) {
          try {
            await newMessage.delete()
          } catch(err) {
            let embed = new Discord.MessageEmbed()
            .setColor("#c21bb9")
            .setAuthor(newMessage.author.username, newMessage.author.avatarURL({ dynamic:true }))
            .setThumbnail('https://imgur.com/sF6PLGa.png')
            .setDescription("Brak permisji aby usunąc link w wiadomosci")
            newMessage.channel.send(embed).then(msg => msg.delete({ timeout: 30000 }));
            return;
          }
          newMessage.channel.send(embed).then(msg => msg.delete({ timeout: 30000 }));
          newMessage.delete().catch(O_o=>{})
        }
    }
});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.channel.parentID == "720774619212021781") return; 
  const antylink = [`https://`, `http://`, `www.`, `.pl`, `.com`, `.eu`, `discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
  if(antylink.some(word => message.member.displayName.includes(word))){
    let xd = message.member.displayName
    let xd3 = xd.replace(`.pl`, "").replace(`www.`, "").replace(`https://`, "").replace(`.com`, "").replace(`.eu`, "")
    if(!message.member.roles.cache.some(r=>["ROOT", "perm.link"].includes(r.name))) {        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}` + " " + "Linki w nicku są zabronione", message.author.displayAvatarURL)
        .setColor("#c21bb9")
        try {
          await message.member.setNickname(xd3)
        } catch(err) {
          let embed = new Discord.MessageEmbed()
          .setColor("#c21bb9")
          .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
          .setThumbnail('https://imgur.com/sF6PLGa.png')
          .setDescription("Brak permisji aby usunąc link z nicku ")
          message.channel.send(embed).then(msg => msg.delete({ timeout: 30000 }));
          return;
        }
        message.channel.send(embed).then(msg => msg.delete({ timeout: 30000 }));
        message.delete().catch(O_o=>{})
      }
  }
})
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.channel.parentID == "720774619212021781") return;
  const antylink = [`https://`, `http://`, `www.`, `.pl`, `.com`, `.eu`, `discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
  let embed = new Discord.MessageEmbed()
  .setColor("#c21bb9")
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
  .setThumbnail('https://imgur.com/sF6PLGa.png')
  .setDescription("Wysyłanie linków jest zabronione")
      if (antylink.some(word => message.content.toLowerCase().includes(word))) {
        if(!message.member.roles.cache.some(r=>["ROOT","perm.link", "BOT"].includes(r.name))) {
          try {
            await message.delete()
          } catch(err) {
            let embed = new Discord.MessageEmbed()
            .setColor("#c21bb9")
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
            .setThumbnail('https://imgur.com/sF6PLGa.png')
            .setDescription("Brak permisji aby usunąc link w wiadomosci")
            message.channel.send(embed).then(msg => msg.delete({ timeout: 30000 }));
            return;
        }
        message.channel.send(embed).then(msg => msg.delete({ timeout: 30000 }));
      }
    }
  })