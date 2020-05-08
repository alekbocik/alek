const discord = require('discord.js')
const Gamedig = require('gamedig');
const fs = require("fs")
var mysql = require("mysql");
const bot = new discord.Client({disableEveryone: false});
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "A3VUvloKP8",
  port: "3306",
  password: "6u03PB4dcr",
  database: "A3VUvloKP8"
  });


async function xd(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
    connection.query(`UPDATE storymc SET mute = 1 WHERE userID = "287975660872400898"`)
    const well = bot.channels.cache.get("704097045157249215")
    well.setName(`Online:` + " " + state.players.length + "/" + state.maxplayers)
}).catch((error) => {
  connection.query(`UPDATE storymc SET mute = 1 WHERE userID = "287975660872400898"`)
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
    connection.query(`UPDATE storymc SET mute = 0 WHERE userID = "287975660872400898"`)
    const well = bot.channels.cache.get("704097045157249215")
    well.setName(`Online:` + " " + state.players.length + "/" + state.maxplayers)
}).catch((error) => {
  connection.query(`UPDATE storymc SET mute = 0 WHERE userID = "287975660872400898"`)
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
    let sql = 'SELECT mute FROM storymc WHERE userID = ?';
    connection.query(sql, [user.id] ,(err, results) => {
      if(err) throw err;
      if(results.length === 0){
        connection.query(`INSERT INTO storymc (userID, mute) VALUES ('${user.id}', '1')`)
        setInterval(() => {
          let sql = 'SELECT * FROM storymc WHERE userID = ?';
          connection.query(sql, [user.id], (err, results) => {
            let user1 = results[0].mute
            if(user1 === '0'){
              return false
            }
            if(user1 === '1'){
              message.guild.member(user).voice.setMute(true)
              return false
            }
          })
        }, 2000);
      }
      if(results.length === 1){
        connection.query(`UPDATE storymc SET mute = 1 WHERE userID = ${user.id}`)
        setInterval(() => {
          let sql = 'SELECT * FROM storymc WHERE userID = ?';
          connection.query(sql, [user.id], (err, results) => {
            let user1 = results[0].mute
            if(user1 === '0'){
              return false
            }
            if(user1 === '1'){
              message.guild.member(user).voice.setMute(true)
              return false
            }
          })
        }, 2000);
      }
    })
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
      let sql = 'SELECT mute FROM storymc WHERE userID = ?';
      connection.query(sql, [user.id], (err, results) => {
        let user1 = results[0].mute
        if(results.length === 0){
          connection.query(`INSERT INTO storymc (userID, mute) VALUES ('${user.id}', '0')`)
          return false
        }
        if(results.length === 1){
          if(user1 === '0'){
            return false
          }
          if(user1 === '1'){
            connection.query(`UPDATE storymc SET mute = 0 WHERE userID = ${user.id}`)
            message.guild.member(user).voice.setMute(false)
            return false
          }
        }
      })
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
connection.connect()
