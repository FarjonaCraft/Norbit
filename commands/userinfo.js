const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let user = message.mentions.users.first() || message.author;

      if(!user) return message.channel.send("User is not defined in this channel!");
      let embedcoins = new Discord.RichEmbed()
      .setAuthor(`${user.tag}'s Information`)
      .setThumbnail(user.displayAvatarURL)
      .setColor(`#5eff98`)
      .addField('Username', user.username, true)
      .addField('Discrim', user.discriminator, true)
      .addField('Status', user.presence.status, true)
      .addField('Bot?', user.bot, true)
      .addField('Account created at', user.createdAt, false)
      .setThumbnail(user.displayAvatarURL)
      .setTimestamp()
      .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);

      if(message.content.startsWith (">userinfo")) {
      message.channel.send(embedcoins)
      } 
  
      let user = message.mentions.users.first() || message.author;

      if(!user) return message.channel.send("User is not defined in this channel!");
      let embedcoins = new Discord.RichEmbed()
      .setAuthor(`${user.tag}'s Information`)
      .setThumbnail(user.displayAvatarURL)
      .setColor(`#5eff98`)
      .addField('Username', user.username, true)
      .addField('Discrim', user.discriminator, true)
      .addField('Status', user.presence.status, true)
      .addField('Bot?', user.bot, true)
      .addField('Account created at', user.createdAt, false)
      .setThumbnail(user.displayAvatarURL)
      .setTimestamp()
      .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);

      if(message.content.startsWith (">userinfo")) {
      message.channel.send(embedcoins)
      } 
}

module.exports.help = {

  name: "userinfo"

}
