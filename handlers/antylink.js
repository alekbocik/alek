const Discord = require("discord.js")
const { bot } = require('../index');

bot.on('messageUpdate', function(oldMessage, newMessage) {
  if(oldMessage.author.bot) return;
  if(oldMessage.channel.type === "dm") return;
  let embed = new Discord.RichEmbed()
      .setAuthor(`${oldMessage.author.username}` + " " + "Edytowanie wiadomośći na linki jest również zabronione", newMessage.author.displayAvatarURL)
      .setColor("#c21bb9")
  const bannedWords = [`https://`, `http://`, `www.`, `.pl`, `.com`, `.eu`, `discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
  try {
      if (bannedWords.some(word => newMessage.content.toLowerCase().includes(word))) {
        if(!oldMessage.member.roles.some(r=>["ROOT","perm.link", "BOT"].includes(r.name))) {
          return oldMessage.delete().catch(O_o=>{}) + newMessage.channel.send(embed).then(msg => msg.delete(30000));
      }
      }
  } catch (e) {
      console.log(e);
  }
});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  const antylink = [`https://`, `http://`, `www.`, `.pl`, `.com`, `.eu`, `discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
  if(antylink.some(word => message.member.displayName.includes(word))){
    let xd = message.member.displayName
    let xd3 = xd.replace(`.pl`, "").replace(`www.`, "").replace(`https://`, "").replace(`.com`, "").replace(`.eu`, "")
    if(!message.member.roles.some(r=>["ROOT", "perm.link"].includes(r.name))) {
      let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}` + " " + "Linki w nicku są zabronione", message.author.displayAvatarURL)
      .setColor("#c21bb9")
      message.channel.send(embed).then(msg => msg.delete(30000));
      message.delete().catch(O_o=>{})
      message.member.setNickname(xd3)
  }
}
})
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  const antylink = [`https://`, `http://`, `www.`, `.pl`, `.com`, `.eu`, `discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
  let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}` + " " + "Wysyłanie linków jest zabronione!!", message.author.displayAvatarURL)
      .setColor("#c21bb9")
      if (antylink.some(word => message.content.toLowerCase().includes(word))) {
        if(!message.member.roles.some(r=>["ROOT","perm.link", "BOT"].includes(r.name))) {
          return message.delete().catch(O_o=>{}) + message.channel.send(embed).then(msg => msg.delete(30000));
      }
    }
  })