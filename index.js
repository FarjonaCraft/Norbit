const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});

});

let statuses = ['patreon.com/norbit | >help', 'Invite me for more | >invite'];
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    setInterval(function() {
      let status = statuses[Math.floor(Math.random()*statuses.length)];
      bot.user.setPresence({ game: { name: status}, status: 'online'});
      bot.user.setPresence({ activity: { name: status}, status: 'online'});
    }, 10000)
});



bot.on("message", async message => {

  //a little bit of data parsing/general checks
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = config.prefix;

  //checks if message contains a command and runs it
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
})


bot.login(process.env.BOT_TOKEN);
