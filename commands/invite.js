const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
let link = ['https://discordapp.com/api/oauth2/authorize?client_id=503946070737289226&permissions=8192&scope=bot']
const embed = new Discord.RichEmbed()

    .setColor("GREEN")
    .addField("Invite me to you're discord server!", `Like me? Add me to your server! \nNot convinced yet? Re-check the commands, be amazed, then \n \n[Add me to your server](${link})`)
    .setTimestamp()
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send({embed});


  //    .addField("Best result", `[here](${linkargs})`)
}

module.exports.help = {

  name: "invite"

}
