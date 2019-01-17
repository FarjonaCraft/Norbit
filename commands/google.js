//>google {searchresult}
const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
  let noword = new Discord.RichEmbed()
  .setTitle(`Incorrect Usage: >google {search}`)
  .setColor(`RED`); 
if(!args[0]) return message.reply(noword).then(msg => msg.delete(3000));

let link = "https://lmgtfy.com/?q="
let googlecolors = ['#4285F4', '#34A853', '#FBBC05', '#EA4335']
let randomcolor = (googlecolors[Math.floor(Math.random() * googlecolors.length)])
let text = args.slice(0).join(" ");
let linkargs = link + text;

const embed = new Discord.RichEmbed()

    .setColor(randomcolor)
    .addField("Your Search Query is ready!", `Results for: ${text}`)
    .addField("Best result", `[here](${linkargs})`)
    .setTimestamp()
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send({embed});


//.addField("title", "[text](url)")
}

module.exports.help = {

  name: "google"

}