//>guilds (show amout servers)
const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
    // Lets define our array of guilds
    let Notpermission = new Discord.RichEmbed()
    .setTitle("No permission!")
    .setColor("RED");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(Notpermission);
    const guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }

module.exports.help = {
    name: "guilds"
}
