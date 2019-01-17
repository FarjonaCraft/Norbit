const Discord = require("discord.js");
let xp = require("../xp.json");


module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
let XPuser = message.mentions.users.first() || message.author;
  if(!xp[XPuser.id]){
   xp[XPuser.id] = {
     xp: 0,
     level: 1
  };

}
  let curxp = xp[XPuser.id].xp;
  let curlvl = xp[XPuser.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;
  let afrondendown = Math.ceil(difference / 4);
  let afrondenup = Math.ceil(difference / 2);




  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(`${XPuser.tag}`)
  .setColor("GREEN")
  .addField('Level', curlvl, true)
  .addField("XP", `${curxp}/${nxtLvlXp}`, true)
  .addField("To send:", `${afrondendown} - ${afrondenup}`, true)
  .setFooter(`${difference} XP till level up! | Info: earn XP by sending messages in the chat! `, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed);



}



module.exports.help = {
  
  name: "level"

}
