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
    await message.delete();

    let UserGetMoney = message.mentions.users.first();
    let embed0 = new Discord.RichEmbed()
    .setTitle(`Incorrect Usage: Don't send yourself money!`)
    .setColor(`RED`); 
    if (UserGetMoney == message.author) return message.channel.send(embed0).then(msg => msg.delete(5000));
    let embed1 = new Discord.RichEmbed()
    .setTitle(`Incorrect Usage: User is not defined`)
    .setColor(`RED`); 
    if (!UserGetMoney) return message.channel.send(embed1).then(msg => msg.delete(5000));
    // if (message.author == UserGetMoney) return message.channel.send("Do not send yourself money...");
    let sendmoney = parseInt(args.slice(1).join(" "));
    let useamout = new Discord.RichEmbed()
    .setTitle(`Incorrect Usage: >send {user} {amout}`)
    .setColor(`RED`); 
    if (!sendmoney) return message.channel.send(useamout).then(msg => msg.delete(5000));
    Money.findOne({
        userName: message.author.username,
        userID: message.author.id,
        serverName: message.guild.name,
        serverID: message.guild.id
    }, (err, money) => {
        let me = money.money;
        let result = me - sendmoney;
        let notembed = new Discord.RichEmbed()
        .setTitle(`Incorrect Usage: You dont have enough money!`)
        .setColor(`RED`); 
        if (money.money < sendmoney) return message.channel.send(notembed).then(msg => msg.delete(5000));
        if (err) console.log(err);
        money.money = money.money - sendmoney; 
        money.save().catch(err => console.log(err)); 
        //let EMBED = new Discord.RichEmbed()
        //.setColor("RED")
        //.setTitle(may.username +"'s Coins:",)
        // .addField(`~~${me}~~ - ${sendmoney}`, `**${result}**`)
        //money.money = money.money - sendmoney; 
        // .setAuthor(CoinUser.tag)
        //-------- give coins
        Money.findOne({
            userName: UserGetMoney.username,
            userID: UserGetMoney.id,
            serverName: message.guild.name,
            serverID: message.guild.id
        }, (err, money) => {
            if(!money){
                let plusbedrag = parseInt(args.slice(1).join(" "));
                const newMoney = new Money({
                  userName: UserGetMoney.username,
                  userID: UserGetMoney.id,
                  serverName: message.guild.name,
                  serverID: message.guild.id,
                  money: plusbedrag
                  
                })
                newMoney.save().catch(err => console.log(err));
                message.channel.send(`${message.author} added on ${UserGetMoney} new account ${plusbedrag} money!`);
            } else {
                let plusbedrag = parseInt(args.slice(1).join(" "));
                let you = money.money;
                let lastresult = you + plusbedrag; 
            //let coinURL = ['https://i.imgur.com/fJVoZuv.jpg']
            // let CoinUser = message.mentions.users.first() || message.author;
            let EMBED = new Discord.RichEmbed()
            .setColor("GREEN")
            .setTitle("Economy || Send")
            .setDescription(`${message.author} decided to give his money to ${UserGetMoney}!`)
            //.setThumbnail(`${coinURL}`)
            .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
            // if(!you){
            //     embed.addField(`0 + ${sendmoney}`, `**${lastresult}**`)
            //     return message.channel.send(embed);
            // } else {
                EMBED.addField(`~~${me}~~ - ${sendmoney}`, `**${result}**`, true)
                EMBED.addField(`~~${you}~~ + ${sendmoney}`, `**${lastresult}**`, true)
                message.channel.send(EMBED);
                money.money = money.money + plusbedrag; 
                money.save().catch(err => console.log(err)); 
            
            }
      
        });
       
    });


}

module.exports.help = {
    name: "send"
}