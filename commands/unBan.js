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
            .addField(`**TWOJA PROŚBA ZOSTALA ZAAKCEPTOWANA**`,`jd kurwe <@${xuser.id}>`)
            message.channel.send(embed)
            message.delete().catch(O_o=>{});
            return;
        case "nie":
            let embed2 = new Discord.MessageEmbed()
            .setColor("#c21bb9")
            .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
            .setThumbnail('https://imgur.com/Mi2cFpc.png')
            .addField(`**TWOJA PROŚBA ZOSTALA ODRZUCONA**`,`jd kurwe <@${xuser.id}>`)
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