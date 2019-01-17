//>coinleader is fixed 👍
const Discord = require("discord.js");
const mongoose = require('mongoose');
mongoose.connect('mongodb://farjonacraft:z11n.90bf@ds127854.mlab.com:27854/farjonacraft', {
  useNewUrlParser: true
});


const Money = require("../models/money.js");
module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
  await message.delete();

  //Grab all of the users in said server
  Money.find({
    serverID: message.guild.id
  }).sort([
    ['money', 'descending']
  ]).exec((err, res) => {
    if (err) console.log(err);

    let embed = new Discord.RichEmbed()
      .setTitle(`**Coins Leaderboard || ${message.guild.name}**`)
    //if there are no results
    if (res.length === 0) {
      embed.setColor("RED");
      embed.addField("No data found", "Please type in chat to gain coins!")
    } else if (res.length < 10) {
      //less than 10 results
      embed.setColor("GREEN");
      for (i = 0; i < res.length; i++) {
        let member = message.guild.members.get(res[i].userID) || "User Left"
        if (member === "User Left") {
          embed.addField(`${i + 1}. ${member}`, `**Coins**: $${res[i].money},-`);
        } else {
          embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: $${res[i].money},-`);
        }
      }
    } else {
      //more than 10 results
      embed.setColor("GREEN");
      for (i = 0; i < 10; i++) {
        let member = message.guild.members.get(res[i].userID) || "User Left"
        if (member === "User Left") {
          embed.addField(`${i + 1}. ${member}`, `**Coins**: $${res[i].money},-`);
        } else {
          embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: $${res[i].money},-`);
        }
      }
    }


    message.channel.send("`Leaderboard generating...`").then(m => m.edit({embed}));
  })
}
module.exports.help = {
  name: "rich"
}