const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
    
if(!args[2]) return message.reply("Please, Use a sentence!").then(msg => msg.delete(3000));
let text = args.slice(0).join(" ");
let embed = new Discord.RichEmbed()
.setColor("GREEN")
.addField("I want to proclaim this text:", text)
//.addField("title", "[text](url)")
.setTimestamp()
.setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);

message.channel.send(embed);
}

module.exports.help = {

  name: "speaker"

}
