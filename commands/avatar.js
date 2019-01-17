//avatar {user}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
    if (args.join(" ") == "") {
        let nouser = new Discord.RichEmbed()
        .setTitle(`Incorrect Usage: >avatar {user}`)
        .setColor(`RED`); 
        message.channel.send(nouser);
        return;
     
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("GREEN") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
        message.channel.send(embed); // Send embed
    }
}



module.exports.help = {
    "name": "avatar",
    "category": "Fun",
    "description": "Shows your avatar!",
    "aliases": [],
    "usage": ">avatar",

}
