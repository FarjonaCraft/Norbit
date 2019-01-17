//>code (code) {user}
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
  // !clearchat (ammount) (type, standard = all)
if(!args[0]) return message.channel.send("selecteer een keuze!").then(msg => msg.delete(5000));
    //>code 001 @user reason) altijd hetzelfde
let user = message.mentions.users.first() || message.author;
if (!user) return message.channel.send("choose a user!");
if (args[0] == '001'){
    //om mensen te verwelkomen!
    let code001 = ("Welkom in onze GoldWar server! Aangezien je nu in onze discord-server zit kan je jezelf aanmelden voor de clanwar! Gebruik: -clanwar om deel te nemen.")
    let embed001 = new Discord.RichEmbed()
    .setTitle("Welkom op Goldwar COC")
    .addField(`${code001}`, "test");
    try {
        await user.send(embed001)
     } catch (e) {
         if(e.message === "Cannot send messages to this user") {
             return message.channel.send(embed001)
         }
     }
    }

if (args[0] == '002'){
     //om mensen een bericht te versturen dat ze de coc clan zijn geleaved!
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
};


}
module.exports.help = {
  name: "code" }
