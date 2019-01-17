//change err compay
const Discord = require("discord.js");


//json file maken en daar de errors in schrijven zodat deze het kan lezen!
module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

  let embed0 = new Discord.RichEmbed()
  .setTitle(`You dont have permission to use this command!`)
  .setColor(`RED`); 
  if (message.author.id != '323155072307691520') return message.channel.send(embed0).then(msg => msg.delete(5000));
  let Embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(`#5eff98`)
  .addField(":gear:", "Everthing is OK.")
  .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);

  message.channel.send(Embed);

}



module.exports.help = {
  name: "check"
}
