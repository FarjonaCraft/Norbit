const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
let sicon = message.guild.iconURL;
  
let membercount =  message.guild.members.filter(member => !member.user.bot, o => o.presence.status == 'online').size

const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name}'s information`, true)   
    .addField("Server Name", `${message.guild.name}`, true)
    .setColor("GREEN")
    .setThumbnail(sicon)
    .addField('Users', `${membercount}`, true)
    .addField('Guild Owner', `${message.guild.owner.user.username}`, true)
    .addField('Verification Level', `${message.guild.verificationLevel}`, true)
    .addField('Owner ID', `${message.guild.owner.id}`, true)
    .addField('Roles', `${message.guild.roles.filter(r => r.name).size}`, true)
    .addField('Server created at', `${message.guild.createdAt}`, true)
    .setTimestamp()
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send({embed});



}

module.exports.help = {

  name: "serverinfo"

}
