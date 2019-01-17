const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
  var today = new Date()
  let Day = today.toString().split(" ")[0].concat("day");
  let Month = today.toString().split(" ")[1]
  let Year = today.toString().split(" ")[3]
  let hour = today.toString().split(" ")[4]
  message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\` \n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
}

module.exports.help = {
  name: "time"
}
