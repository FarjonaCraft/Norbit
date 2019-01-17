const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

    var urls = ['https://www.youtube.com/watch?v=wvifCnepSzE', 'https://www.youtube.com/watch?v=Ao2LuHEcMzc', 'https://www.youtube.com/watch?v=Rn6FlxAQE9w', 'https://www.youtube.com/watch?v=0mOqIsnqSqM', 'https://www.youtube.com/watch?v=j_A-LjrTT-k', 'https://www.youtube.com/watch?v=v4OAsbzapz0', 'https://www.youtube.com/watch?v=xEeH7b4yWfw', 'https://www.youtube.com/watch?v=QxtGhcCaOzo', 'https://www.youtube.com/watch?v=MDYDH8h3szs', 'https://www.youtube.com/watch?v=oGSpPpwOSkE', 'https://www.youtube.com/watch?v=Ri--lrO7i_o', 'https://www.youtube.com/watch?v=yKQVeLrv3UQ', 'https://www.youtube.com/watch?v=P27MPi3ZhCg', 'https://www.youtube.com/watch?v=Sc97AUImI04']
    let randomurl = (urls[Math.floor(Math.random() * urls.length)])
    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .setTitle(`${randomurl}`)
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send({embed});



}

module.exports.help = {

  name: "musiclist"

}