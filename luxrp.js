const discord = require('discord.js')

const bot = new discord.Client({ disableEveryone: false, partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

require("./boton")(bot)

module.exports = {
  bot: bot
};
bot.login(process.env.token);