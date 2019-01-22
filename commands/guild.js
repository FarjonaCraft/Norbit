//>guilds (show amout servers)
const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    message.delete();
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission).then(msg => msg.delete(5000));
    // Lets define our array of guilds
    
    let Notpermission = new Discord.RichEmbed()
    .setTitle("You dont have permission to use this command!")
    .setColor("RED");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(Notpermission).then(msg => msg.delete(5000));
    const guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }

module.exports.help = {
    name: "guilds"
}
