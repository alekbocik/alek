const discord = require('discord.js')
const Gamedig = require('gamedig');
const bot = new discord.Client({disableEveryone: false});
async function xd(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
    console.log(state.players.length)
}).catch((error) => {
  console.log(error)
});
}
async function xd2(){
  Gamedig.query({
    type: 'minecraft',
    port: "19132",
    host: 'storymc.pl'
  }).then((state) => {
    console.log(state.players.length)
}).catch((error) => {
  console.log(error)
});
}
bot.on("ready", async () => {
  console.log(`${bot.user.username} online`)
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
})
bot.login(process.env.token)
