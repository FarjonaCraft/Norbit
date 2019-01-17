//klaar!
const ms = require('ms');
const Discord = require('discord.js');
const mongoose = require("mongoose");
mongoose.connect('mongodb://farjonacraft:z11n.90bf@ds127854.mlab.com:27854/farjonacraft', {
    useNewUrlParser: true
});
const Money = require("../models/money.js");
let prettyMs = require("pretty-ms");
const mapcooldown = new Map();
module.exports.run = async(bot, message, args) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

//-------
//let userJoined = message.member.joinedAt.toLocaleString()
//message.channel.send(prettyMs(userJoined))

let result = prettyMs(43200000, {boolean: false});

if (mapcooldown.has(message.author.id, message.guild.id)){
    let cooldownEmbed = new Discord.RichEmbed()
    .setTitle("Please try again later, the cooldown is 12 hours!", `You still have to wait ${result}!`)
    .setFooter(`${message.author.username}`, message.author.avatarURL) //43200000 seconds                
    .setColor("RED");
    return message.channel.send(cooldownEmbed);
    
}
if(!mapcooldown.has(message.author.id, message.guild.id)){
    Money.findOne({
        userName: message.author.username,
        userID: message.author.id,
        serverName: message.guild.name,
        serverID: message.guild.id
    }, (err, money) => {
        if(err) console.log(err);
      let dailyEmbed = new Discord.RichEmbed()
      .setTitle("You have claimed your daily bonus of 15 coins!")
      .setColor("GREEN")
      .setFooter(`${message.author.username}`, message.author.avatarURL);
            
      if(!money){
        const newMoney = new Money({
          userName: message.author.username,
          userID: message.author.id,
          serverName: message.guild.name,
          serverID: message.guild.id,
          money: 15
        })

            newMoney.save().catch(err => console.log(err))
            return message.channel.send(dailyEmbed);
        }else{
            money.money = money.money + 15;
            money.save().catch(err => console.log(err));
          return message.channel.send(dailyEmbed);
        }
    });
  
    mapcooldown.set(message.author.id, message.guild.id, Date.now());
  
}


setTimeout(() => mapcooldown.delete(message.author.id), 43200000);
}

module.exports.help = {
    "name": "vote",
    "category": "Economy",
    "description": "Get your vote coins!",
    "aliases": [],
    "usage": "vote",
    
}