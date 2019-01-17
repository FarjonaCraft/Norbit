//botinfo shows botinfo
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

const embed = new Discord.RichEmbed()

    .setColor("GREEN")
    .setThumbnail(`${bot.user.avatarURL}`)
    .setTitle("Norbit's information", true)
    .addField('Bot Name', "Norbit", true)
    .addField('Guilds', `${bot.guilds.size}`, true)
    .addField('Users', `${bot.users.size}`, true)
    .addField('Discord Bot Version', `${Discord.version}`, true)
    .addField('Uptime', (Math.round(bot.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(bot.uptime / 1000) % 60) + " seconds", true)
    .setTimestamp()
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);






    message.channel.send({embed});




}

module.exports.help = {

  name: "botinfo"

}