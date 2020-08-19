const Discord = require ("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.some(r=>["💻Developer💻","🚨 Administrator 🚨", "👑 Zarząd 👑", "💎 Moderator 💎", "⚡️ Support ⚡️"].includes(r.name))) return message.channel.bulkDelete(1).then(() => {});
    let type = args[0]
    if(!type) return message.channel.bulkDelete(1).then(() => {});
    let xuser = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[1]));
    if(!xuser) return message.channel.bulkDelete(1).then(() => {}) 

    switch (args[0]) {
        case "tak":
            let embed = new Discord.MessageEmbed()
            .setColor("#c21bb9")
            .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
            .setThumbnail('https://imgur.com/Mi2cFpc.png')
            .addField(`Twoja prośba o unbana została rozpatrzona **pozytywnie!**`,`Możesz już wchodzić za serwer! \n${"`connect luxrp.pl`"}\n  \nStaraj się nie popełniać więcej błędów, \nMiłej gry życzy tobie administracja LuxRP.`)
            message.channel.send(embed)
            message.delete().catch(O_o=>{});
            return;
        case "nie":
            let embed2 = new Discord.MessageEmbed()
            .setColor("#c21bb9")
            .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
            .setThumbnail('https://imgur.com/Mi2cFpc.png')
            .addField(`Niestety twoja prośba o unbana została rozpatrzona **negatywnie.**`,`Powodem tego mogło być: \n- Śmieszkowanie w prośbie o unbana \n- Kolejny ban za to samo \n- Kolejny ban w krótkim odstępie czasowym \n- Brak uzasadnienia popełnienia twojego błędu \n- Spamowanie/pingowanie administracji aby cię odbanowała \n\nSpróbuj ponownie za 24h, powodzenia!`)
            message.channel.send(embed2)
            message.delete().catch(O_o=>{});
            return;     
        default:
            message.delete().catch(O_o=>{});
            return;
    }
}


module.exports.config = {
    name: "unban",
    aliases: ["unban"]
}