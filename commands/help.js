const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
  // !clearchat (ammount) (type, standard = all)


  if (!args[0]){
    const infocommands = ['``>botinfo``' + '``>discord``' + '``>donate``' + '``>help``' + '``>invite``' + '``>online``' + '``>serverinfo``' + '``>userinfo``']
//     let economycommands = ['``>antirob``' + '``>bet``' + '``>coins``' + '``>name``' + '``>rich``' + '``>vote``']
    let funcommands = ['``>ascii``' + '``>color``' + '``>fact``' + '``>google``' + '``>level``' + '``>meme``' + '``>ping``' + '``>speaker``']
    let admincommands = ['``>check``' + '``>del``' + '``>guilds``' + '``>tempmute``' + '``>kick``']
    let prefix = ['Use this prefix for using my commands' + ' ``>``']
    let commandlink = 'https://docs.google.com/document/d/1LzZCByG8FmIqjNfPunr4vVyWCnNMdy9cmsitu67Whxw/edit?usp=sharing';
    const embed = new Discord.RichEmbed()
    .setAuthor("Norbit's Information", message.guild.iconURL)
    .setColor("GREEN")
    .setTimestamp()
    .addField("Here is some information about me:", `${prefix}`)
    .addField("Information Commands", `Usage: >help info`)
//     .addField("Economy Commands", `Usage: >help eco`)
    .addField("Fun Commands", `Usage: >help fun`)
    .addField("Admin Commands", `Usage: >help admin`)
    .addField("Online Commands:", `[Commands File](${commandlink})`)
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send({embed})
}
if (args[0] == 'details'){
  let prefix = ['Use this prefix for using my commands' + ' ``>``']
  let infocommands = ['Usage: >help {command}']
  let details = new Discord.RichEmbed()
  //------------------------------------------------------------------------------
  .setAuthor("Norbit's Information", message.guild.iconURL)
  .setColor("GREEN")
  .setTimestamp()
  .addField("Here is some information about me:", `${prefix}`)
  .addField("Use `info`, `fun`, `admin` ", `${infocommands}`)
  .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
  message.channel.send(details)
}
if (args[0] == 'info'){
    let prefix = ['Use this prefix for using my commands' + ' ``>``']
    let infocommands = ["``>botinfo`` - Check bot information \n" + "``>discord`` - Join our discord to be up-to-date\n" + "``>donate`` - Donate bot for great future\n" + "``>help`` - Shows a commands embed\n" + "``>invite`` - Invite me to your server\n" + "``>online`` - Shows online users\n" + "``>ping`` - Pong!\n" + "``>serverinfo`` - Check server info\n" + "``>userinfo`` - Check user info\n"]
    let embed1 = new Discord.RichEmbed()
    //------------------------------------------------------------------------------
    .setAuthor("Norbit's Information", message.guild.iconURL)
    .setColor("GREEN")
    .setTimestamp()
    .addField("Here is some information about me:", `${prefix}`)
    .addField("Information Commands", `${infocommands}`)
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send(embed1)
}
// if (args[0] == 'eco'){
//     let prefix = ['Use this prefix for using my commands' + ' ``>``']
//     let economycommands = ["``>antirob`` - Get free antirob insurance (5 days) \n" + "``>coins`` - Shows someone`s coins \n" + "``>vote`` - Vote each 12 hours for coins \n" + "``>rich`` - Shows the coin leaderboard \n" + "``>send`` - Pay or give someone coins \n" + "``>bet`` - Bet your money \n"]
//     let embed2 = new Discord.RichEmbed()
//     //------------------------------------------------------------------------------
//     .setAuthor("Norbit's Information", message.guild.iconURL)
//     .setColor("GREEN")
//     .setTimestamp()
//     .addField("Here is some information about me:", `${prefix}`)
//     .addField("Economy Commands", `${economycommands}`)
//     .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
//     message.channel.send(embed2)
// }
if (args[0] == 'fun'){
    let prefix = ['Use this prefix for using my commands' + ' ``>``']
    let funcommands = ['``>ascii`` - Ascii-art, create your own art! \n' + '``>color`` - Magic color command \n' + ' ``>fact`` - For free time\:wink: \n' + ' ``>google`` - way to search on google\n' + ' ``>level`` - Shows current level!\n' + ' ``>meme`` - For free time\:wink:\n'+ ' ``>ping`` - Pong!\n' + ' ``>speaker`` - Time for attention!\n' + ' ``>avatar`` - Shows someone`s avatar \n' + ' ``>poll`` - Runs a poll question \n'+ ' ``>time`` - Offical world time\n'+ ' ``>play`` - Use a url to play a song\n'+ ' ``>stop`` - Stop the song']
    let embed3 = new Discord.RichEmbed()
    //------------------------------------------------------------------------------
    .setAuthor("Norbit's Information", message.guild.iconURL)
    .setColor("GREEN")
    .setTimestamp()
    .addField("Here is some information about me:", `${prefix}`)
    .addField("Fun Commands", `${funcommands}`)
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send(embed3)
}
if (args[0] == 'admin'){
    let prefix = ['Use this prefix for using my commands' + ' ``>``']
    let modcommands = ['``>check`` - Show if there is an error! \n' + '``>del`` - Delete messages \n' + '``>guilds`` - Show all invited servers! \n' + '``>tempute`` - Mute someone for a time! \n' + '``>kick`` - Kick someone out of the server! \n' ]
    let embed4 = new Discord.RichEmbed()
    //------------------------------------------------------------------------------
    .setAuthor("Norbit's Information", message.guild.iconURL)
    .setColor("GREEN")
    .setTimestamp()
    .addField("Here is some information about me:", `${prefix}`)
    .addField("mod Commands", `${modcommands}`)
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send(embed4)
};


}
module.exports.help = {
  name: "help" }
