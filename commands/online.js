const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

let membercount =  message.guild.members.filter(member => !member.user.bot, o => o.presence.status == 'online').size



let membercountonl = message.guild.members.filter(o => o.presence.status == 'online').size
let membercountidle = message.guild.members.filter(o => o.presence.status == 'idle').size
let membercountdnd = message.guild.members.filter(o => o.presence.status == 'dnd').size
let botcountonl = message.guild.members.filter(member => member.user.bot).size
let membercountinv = membercountonl + membercountidle + membercountdnd - botcountonl

const online = new Discord.RichEmbed()
.setColor("GREEN")
.setDescription(`There are currently **${membercountinv}** members online out of **${membercount}** total members`);

message.channel.send(online);

//There are currently 1228 members online out of 3743 total members.


}

module.exports.help = {

  name: "online"

}