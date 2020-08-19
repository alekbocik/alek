const Discord = require ("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.some(r=>["💻Developer💻","🚨 Administrator 🚨", "👑 Zarząd 👑", "💎 Moderator 💎", "⚡️ Support ⚡️"].includes(r.name))) return message.channel.bulkDelete(1).then(() => {});
    let type = args[0].toLowerCase()
    let rr = args[1].toLowerCase()
    let xuser = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[2]));

    let embed = new Discord.MessageEmbed()
    .setColor("#c21bb9")
    .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
    .setThumbnail('https://imgur.com/Mi2cFpc.png')
    .addField(`How idiots must use this command`, `\n!!podanie lsc tak/nie @oznaczenie \n!!podanie organizacja tak/nie @oznaczenie \n!!podanie firma tak/nie @oznaczenie \n!!podanie taxi tak/nie @oznaczenie \n!!podanie lsc tak/nie @oznaczenie `)
    
    if(!type) return message.channel.bulkDelete(1).then(() => {})
    if(!rr) return message.channel.bulkDelete(1).then(() => {});
    if(!xuser) return message.channel.bulkDelete(1).then(() => {}) 
    let firmauser = message.guild.members.cache.get('557272976089940000');
    let lscuser = message.guild.members.cache.get('333466370333474816');
    let taxiuser = message.guild.members.cache.get('508676791481663489');
    let supportuser = message.guild.members.cache.get('557272976089940000');
    let orguser = message.guild.members.cache.get('557272976089940000');


    const antylink = [`lsc`, `taxi`, `support`, `organizacja`,`firma`]
    const antylink2 = [`tak`, `nie`]
    if (!antylink.some(word => type.toLowerCase().includes(word))) return message.channel.bulkDelete(1).then(() => {}) + message.channel.send(embed)
    if (!antylink2.some(word => rr.toLowerCase().includes(word))) return message.channel.bulkDelete(1).then(() => {}) + message.channel.send(embed)

    switch (args[0]) {   
        case "firma":
            switch (args[1]) {
                case "tak":
                    let embed1 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .addField(`Drogi obywatelu mam dla ciebie dobre wieści! \nTwoje podanie na **Firmę** zostało rozpatrzone **Pozytywnie!**`,`W ciągu 72h ${firmauser} \nSkontaktuje się z tobą na pw. \nBądź cierpliwy!`)
                    message.channel.send(embed1)
                    message.delete().catch(O_o=>{});
                    return;
                case "nie":
                    let embed2 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .setDescription(`Drogi obywatelu niestety mam dla ciebie złe wieści. \nTwoje podanie na **Firmę** zostało rozpatrzone **Negatywnie.**`)
                    message.channel.send(embed2)
                    message.delete().catch(O_o=>{});
                    return;
                default:
                    break;
            }
        case "lsc":
            switch (args[1]) {
                case "tak":
                    let embed3 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .addField(`Drogi obywatelu mam dla ciebie dobre wieści! \nTwoje podanie do **LSC** zostało rozpatrzone **Pozytywnie!**`,`W ciągu 24h ${lscuser} \nSkontaktuje się z tobą na pw. \nBądź cierpliwy!`)
                    message.channel.send(embed3)
                    message.delete().catch(O_o=>{});
                    return;
                case "nie":
                    let embed4 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .addField(`Drogi obywatelu niestety mam dla ciebie złe wieści. \nTwoje podanie do **LSC** zostało rozpatrzone **Negatywnie.**`,`Spróbuj ponownie za 24h, Powodzenia!`)
                    message.channel.send(embed4)
                    message.delete().catch(O_o=>{});
                    return;
                default:
                    break;
                }
        case "taxi":
            switch (args[1]) {
                case "tak":
                    let embed5 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .addField(`Drogi obywatelu mam dla ciebie dobre wieści! \nTwoje podanie do **TAXI** zostało rozpatrzone **Pozytywnie!**`,`W ciągu 24h ${taxiuser} \nSkontaktuje się z tobą na pw. \nBądź cierpliwy!`)
                    message.channel.send(embed5)
                    message.delete().catch(O_o=>{});
                    return;
                case "nie":
                    let embed6 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .setDescription(`Drogi obywatelu niestety mam dla ciebie złe wieści. \nTwoje podanie do **TAXI** zostało rozpatrzone **Negatywnie.**`, `Spróbuj ponownie za 24h, Powodzenia!`)
                    message.channel.send(embed6)
                    message.delete().catch(O_o=>{});
                    return;
                default:
                    break;
            }
        case "support":
            switch (args[1]) {
                case "tak":
                    let embed7 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .addField(`Drogi obywatelu mam dla ciebie dobre wieści! \nTwoje podanie na **Supporta** zostało rozpatrzone **Pozytywnie!**`,`W ciągu 72h ${supportuser} \nSkontaktuje się z tobą na pw. \nBądź cierpliwy!`)
                    message.channel.send(embed7)
                    message.delete().catch(O_o=>{});
                    return;
                case "nie":
                    let embed8 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .setDescription(`Drogi obywatelu niestety mam dla ciebie złe wieści. \nTwoje podanie na **Supporta** zostało rozpatrzone **Negatywnie.**`)
                    message.channel.send(embed8)
                    message.delete().catch(O_o=>{});
                    return;
                default:
                    break;
            }
        case "organizacja":
            switch (args[1]) {
                case "tak":
                    let embed9 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .addField(`Drogi obywatelu mam dla ciebie dobre wieści! \nTwoje podanie na **Organizację przestępczą** zostało rozpatrzone **Pozytywnie!**`,`W ciągu 72h ${orguser} Skontaktuje się z tobą na pw. \nBądź cierpliwy!`)
                    message.channel.send(embed9)
                    message.delete().catch(O_o=>{});
                    return;
                case "nie":
                    let embed10 = new Discord.MessageEmbed()
                    .setColor("#c21bb9")
                    .setAuthor(xuser.user.username, xuser.user.avatarURL({ dynamic:true }))
                    .setThumbnail('https://imgur.com/Mi2cFpc.png')
                    .setDescription(`Drogi obywatelu niestety mam dla ciebie złe wieści. \nTwoje podanie na **Organizacje przestępczą** zostało rozpatrzone **Negatywnie.**`)
                    message.channel.send(embed10)
                    message.delete().catch(O_o=>{});
                    return;
                default:
                    message.channel.send(embed)
                    message.delete().catch(O_o=>{});
            }
        default:
            message.channel.send(embed)
            message.delete().catch(O_o=>{});
    }
}


module.exports.config = {
    name: "podanie",
    aliases: ["podanie"]
}