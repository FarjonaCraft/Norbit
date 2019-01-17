const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
let meicon = "https://images-ext-2.discordapp.net/external/V9W-KHTOKnW3LmHuXIb9Z7zMbh_zMRxi6zZ6COO6Ma4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/503946070737289226/e11a730faa82cdf8b69c775f11a03ddd.png?width=703&height=703"
const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setThumbnail(`${meicon}`)
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
