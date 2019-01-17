//>coins {user}
const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect('mongodb://farjonacraft:z11n.90bf@ds127854.mlab.com:27854/farjonacraft', {
    useNewUrlParser: true
});
const Money = require("../models/money.js")

module.exports.run = async (bot, message, args) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);



    let MoneyUser = message.mentions.users.first() || message.author;
    Money.findOne({
        userName: MoneyUser.username,
        userID: MoneyUser.id,
        serverName: message.guild.name,
        serverID: message.guild.id
    }, (err, money) => {
        if (err) console.log(err);
        //let coinURL = ['https://i.imgur.com/fJVoZuv.jpg']
        // let CoinUser = message.mentions.users.first() || message.author;
        let embed = new Discord.RichEmbed()
        .setColor("GREEN")
        //.setThumbnail(`${coinURL}`)
        .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
        // .setAuthor(CoinUser.tag)
        if(!money){
            embed.addField(MoneyUser.username +"'s Coins:", `You currently have **0** coins!`, true)
            return message.channel.send(embed);
        } else {
            embed.addField(MoneyUser.username +"'s Coins:", `You currently have $**${money.money}**,- coins!`, true)
            return message.channel.send(embed);

        
    }
    });

}

module.exports.help = {
    name: "coins",
    aliases: ['coins', 'Coins', 'coin', 'Coin']
}