const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../botconfig.json");
//-----------komt morgen
module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

    let website = "https://www.colorbook.io/hexcolors/view/"
    let websiterr = "https://www.htmlcsscolor.com/preview/64x64/"
    let png = ".png"
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let math = '#' + randomColor;
    let mathFunction = '' + randomColor;
    let thumbcolor = websiterr + randomColor + png

    let colorEmbed = new Discord.RichEmbed()
    .setColor(`${randomColor}`)
    .setThumbnail(`${thumbcolor}`)

    .addField("Color Link:", `${website}` + `${mathFunction}`)
    .addField("Color generated:", math);
    return message.channel.send(colorEmbed);



}

module.exports.help = {
  name: "color"
}

     