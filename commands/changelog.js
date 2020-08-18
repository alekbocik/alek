const Discord = require ("discord.js")

module.exports.run = async (bot, message, args) => {

    let changelogReason = args.join(" ")
    if(!changelogReason) return message.channel.bulkDelete(1).then(() => {});
    if(!message.member.roles.cache.some(r=>["💻Developer💻","🚨 Administrator 🚨", "👑 Zarząd 👑", "💎 Moderator 💎", "⚡️ Support ⚡️"].includes(r.name)))
    return message.channel.bulkDelete(1).then(() => {});

    let embed = new Discord.MessageEmbed()
    .setColor(`#f702a2`)
    .setAuthor('CHANGELOG', message.author.avatarURL({dynamic: true}))
    .setThumbnail('https://imgur.com/Mi2cFpc.png')
    .addField(`----------------------------`, `${changelogReason}`)
    .addField(`----------------------------`, `LuxRP`)


    message.delete().catch(O_o=>{});
    message.channel.send(embed)

    return;
}


module.exports.config = {
    name: "changelog",
    aliases: ["changelog"]
}