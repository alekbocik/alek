const fs = require("fs")

module.exports = ( bot ) => {
 
  fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)
   
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
      return console.log("nie znaleziono komend");
    }
  
    jsfile.forEach((f, i) => {
      let pull = require(`./commands/${f}`);
      bot.commands.set(pull.config.name, pull);
      pull.config.aliases.forEach(alias => {
        bot.aliases.set(alias, pull.config.name)
        });
     });
  });
  
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
  }