//err: (node:20072) UnhandledPromiseRejectionWarning: DiscordAPIError: Unknown Message
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  let embed0 = new Discord.RichEmbed()
  .setTitle(`You dont have permission to use this command!`)
  .setColor(`RED`); 
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed0);
  
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

  let correct1 = new Discord.RichEmbed()
  .setTitle(`Incorrect Usage: >del {amount}`)
  .setColor("RED");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(Notpermission);
  if(!args[0]) return message.channel.send(correct1).then(msg => msg.delete(5000));
  let more1 = new Discord.RichEmbed()
  .setTitle(`ERROR: Its not possible to delete more than 99 messages!`)
  .setColor("RED");  
  if (args[0] > 99) return message.channel.send(more1).then(msg => msg.delete(5000));
if (Number.isInteger(parseInt(args[0]))) {
  var amout = parseInt(args[0]) + 1;
  message.channel.bulkDelete(amout).then(() => {
    if (args[0] == 0) {
      let Failed0 = new Discord.RichEmbed()
      .setTitle(`Sorry, it's not possible to delete 0 message's`)
      .setColor("RED");
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(Notpermission);
      message.channel.send(Failed0).then(msg => msg.delete(5000));
    } else if (args[0] == 1) {
      let Successful1 = new Discord.RichEmbed()
      .setTitle(`You have deleted 1 message`)
      .setColor("GREEN");
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(Notpermission);
      message.channel.send(Successful1).then(msg => msg.delete(5000));
    } else {
      let Successful10 = new Discord.RichEmbed()
      .setTitle(`You have deleted ${args[0]} messages`)
      .setColor("GREEN");
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(Notpermission);
      message.channel.send(Successful10).then(msg => msg.delete(5000));
    }
  });
  } else {
  return message.channel.send("Use a number.").then(msg => msg.delete(3000));
}
}


module.exports.help = {
  name: "del"
}
