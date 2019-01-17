const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

let msgping1 = new Date();
let botping = new Date() - message.createdAt; 
let msgping2 = new Date() - msgping1; 
let botpings = Math.round(bot.ping); 
var ping = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let pings = (ping[Math.floor(Math.random() * ping.length)])


const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .addField("Websocket ping:", `${pings} ms` )
    .addField('Average shard ping : ', Math.floor(bot.ping) + ' ms')
    .addField('Message Ping : ', Math.round(msgping2) + ' ms')
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send("`Pong! (hold on, processing latency...)`").then(m => m.edit({embed}));

}

module.exports.help = {

  name: "ping"

}

// bot.on("message", async message => { 
//  let userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
 // for (let i = 0; i < coins.lenght; ++i) {
//    let user = client.users.get(coins[i].ID.split('_')[2])
 //   content += `${i+1}. ${user} => ${coins[i].data}$\n`
//}

//const leaderboardembed = new Discord.RichEmbed()
//.setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
//.setDescription("hey")
//.setColor(`#5eff98`)
//.setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);

//if(message.content.startsWith (">lb")) {
//  message.channel.send(leaderboardembed)
//  }

//});     

