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

      let user = message.mentions.users.first() || message.author;

      if(!user) return message.channel.send("User is not defined in this channel!");



      let embedcoins = new Discord.RichEmbed()

      .setAuthor(`${user.tag}'s Information`)

      .setThumbnail(user.displayAvatarURL)

      .setColor(`#5eff98`)

      .addField('Username', user.username, true)

      .addField('Discrim', user.discriminator, true)

      .addField('Status', user.presence.status, true)

      .addField('Bot?', user.bot, true)

      .addField('Account created at', user.createdAt, false)

      .setThumbnail(user.displayAvatarURL)

      .setTimestamp()

      .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);

  

      if(message.content.startsWith (">userinfo")) {

      message.channel.send(embedcoins)
//new
      } 

  });



bot.on("message", async message => {

const swearWords = ["fuck","tering","gvd","dome","omg","dood","sterf","rip","homo","h0mo","hom0", "kanker", "potver", "fack", "f*ck", "r.i.p.", "kut", "dick", "wtf", "tyfus", "godverdomme", "g0dverd0mme", "g0dverdomme"];

if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {



message.delete();

   } 

  

  let XPuser = message.mentions.users.first() || message.author;

  let xpAdd = Math.floor(Math.random() * 2) + 2;



  if(!xp[XPuser.id]){

    xp[XPuser.id] = {

      xp: 0,

      level: 1

    };



  }



  let curxp = xp[XPuser.id].xp;

  let curlvl = xp[XPuser.id].level;

  let nxtLvl = xp[XPuser.id].level * 300;

  

  xp[XPuser.id].xp =  curxp + xpAdd;

  if(nxtLvl <= xp[XPuser.id].xp){

    xp[XPuser.id].level = curlvl + 1;



    let lvlup = new Discord.RichEmbed()

    .setColor(`RANDOM`)

    .addField("New Level 🏆", curlvl + 1)

    .setFooter("Use >level for progress!");



    message.channel.send(lvlup).then(msg => {msg.delete(5000)});

  }



  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {

    if(err) console.log(err)



  });

  });



bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type === 'dm') return;

  let content = message.content.split(" ");

  let command = content[0];

  let args = content.slice(1);

  let prefix = config.prefix;



  if (message.content.startsWith(prefix)) {

  let commandfile = bot.commands.get(command.slice(prefix.length));

  if(commandfile) commandfile.run(bot, message, args);

  }

})



{

bot.login(process.env.BOT_TOKEN);

}
