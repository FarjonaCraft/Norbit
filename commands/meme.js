const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

let imagesall = ['https://i.imgur.com/OG0s3Fo.jpg', 'https://i.imgur.com/jFcb5rj.jpg', 'https://media.discordapp.net/attachments/466223537615536140/520996613532024834/k3dwunoarfq11.jpg', 'https://i.imgur.com/MMALQdg.jpg', 'https://i.imgur.com/gW2qPbj.jpg', 'https://i.imgur.com/O48hVUU.jpg', 'https://i.imgur.com/dvV99wc.jpg', 'https://i.imgur.com/7OXJu1y.jpg', 'https://i.imgur.com/u77PDzh.jpg', 'https://i.imgur.com/fy3JYg1.jpg?1', 'http://justsomething.co/wp-content/uploads/2014/04/brilliant-kids-test-answers.jpg', 'http://justsomething.co/wp-content/uploads/2014/04/brilliant-kids-test-answers-30.jpeg', 'http://justsomething.co/wp-content/uploads/2014/04/brilliant-kids-test-answers-9.jpg', 'http://justsomething.co/wp-content/uploads/2014/04/brilliant-kids-test-answers-32.jpeg', 'http://justsomething.co/wp-content/uploads/2014/04/brilliant-kids-test-answers-31.jpeg', 'http://justsomething.co/wp-content/uploads/2014/04/brilliant-kids-test-answers-7.jpg', 'https://cdn.discordapp.com/attachments/517766532718133254/520263422324113428/image0.png', 'https://media.discordapp.net/attachments/517766532718133254/520263091477282817/image0.png?width=1249&height=703']
let images = (imagesall[Math.floor(Math.random() * imagesall.length)])
const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .addField("Here`s some random image;", images)
    .setImage(images)
    .setFooter(`Requested by: ${message.author.username} | Send FarjonaCraft#3851 more images!`, message.author.avatarURL);
    message.channel.send({embed});



}

module.exports.help = {

  name: "meme"

}
