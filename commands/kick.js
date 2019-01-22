const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let noser = new Discord.RichEmbed()
    .setTitle(`Incorrect Usage: >kick {user} {reason}`)
    .setColor(`RED`); 
    if(!kUser) return message.channel.send(noser);
    let kReason = args.join(" ").slice(22);
    let Notpermission = new Discord.RichEmbed()
    .setTitle(`Incorrect Usage: >kick {user} {reason}`)
    .setColor("RED");
    if(!kReason) return message.channel.send(Notpermission);
    let notkick = new Discord.RichEmbed()
    .setTitle("No permission!")
    .setColor("RED");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(notkick);
    let Idonthavepermissionkick = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'KICK_MEMBERS' permission!")
    .setColor("RED");
    if(message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(Idonthavepermissionkick);

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);
    
    message.guild.member(kUser).kick(kReason);
    return message.channel.send(kickEmbed);

}



module.exports.help = {

  name:"kick"

}
