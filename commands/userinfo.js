const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

      let OpEuser = message.mentions.users.first() || message.author;



      if(!OpEuser) return message.channel.send("User is not defined in this channel!");

      let embedcoins = new Discord.RichEmbed()

      .setAuthor(`${OpEuser.tag}'s Information`)

      .setThumbnail(OpEuser.displayAvatarURL)

      .setColor(`#5eff98`)

      .addField('Username', OpEuser.username, true)

      .addField('Discrim', OpEuser.discriminator, true)

      .addField('Status', OpEuser.presence.status, true)

      .addField('Bot?', OpEuser.bot, true)

      .addField('Account created at', OpEuser.createdAt, false)

      .setThumbnail(OpEuser.displayAvatarURL)

      .setTimestamp()

      .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);





      message.channel.send(embedcoins)

}


module.exports.help = {



  name: "!userinfo"



}
