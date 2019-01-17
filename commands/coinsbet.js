const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect('mongodb://farjonacraft:z11n.90bf@ds127854.mlab.com:27854/farjonacraft', {
    useNewUrlParser: true
});
const Money = require("../models/money.js")
//bet {amout}
module.exports.run = async (bot, message, args) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
    await message.delete();
    let useamout = new Discord.RichEmbed()
    .setTitle(`Incorrect Usage: >bet {amount}`)
    .setColor(`RED`);   

if(!args[0]) return message.channel.send(useamout).then(msg => msg.delete(5000));
if(!parseInt(args[0])) return message.channel.send(useamout).then(msg => msg.delete(5000));
let useamout0 = new Discord.RichEmbed()
.setTitle(`Incorrect Usage: it's not possible to send 0 coins!`)
.setColor(`RED`); 

if (args[0] == 0) return message.channel.send(useamout0).then(msg => msg.delete(5000)); //thumb
let wanttobet = parseInt(args.slice(0).join(" ")); //all bet..
    Money.findOne({
    userName: message.author.username,
    userID: message.author.id,
    serverName: message.guild.name,
    serverID: message.guild.id
    }, (err, money) => {
    if (err) console.log(err);
    let allmoney = money.money;
    let notenough = new Discord.RichEmbed()
    .setTitle(`You only have **${allmoney}** coins!`)
    .setColor(`RED`); 
    if(wanttobet > allmoney) return message.channel.send(notenough).then(msg => msg.delete(5000)); //check moneys >
    let win = parseInt(args.slice(0).join(" "));
    let lost = parseInt(args.slice(0).join(" "));
    let totalwin = allmoney + win;
    let totallost = allmoney - lost;
    let rolled = Math.floor(Math.random() * 2) + 1; //draairad
//--------------- embeds

    let winembed = new Discord.RichEmbed()
    .setAuthor(`Economy || Bet`)
    .addField(`You **won** ${win} coins!`, `~~${allmoney}~~ + ${win} \n **${totalwin}**`)
    // .setThumbnail(`${coinURL}`)
    .setColor("GREEN")
    .setFooter(`Tip: Don't bet all your money`, message.author.avatarURL);
    let lostembed = new Discord.RichEmbed()
    .setAuthor(`Economy || Bet`)
    .addField(`You **lost** ${lost} coins`, `~~${allmoney}~~ - ${lost} \n **${totallost}**`)
    // .setThumbnail(`${coinURL}`)
    .setColor("RED")
    .setFooter(`Tip: Don't bet all your money`, message.author.avatarURL);
    let embed = new Discord.RichEmbed()
    .setAuthor(`Economy || Bet`)
    .addField(`You dont have enough money!`, `~~${allmoney}~~ - ${lost} \n **${totallost}**`)
    // .setThumbnail(`${coinURL}`)
    .setColor("RED")
    .setFooter(`Earn money by sending messages`, message.author.avatarURL);
    
    if (rolled == "1"){
    message.channel.send(winembed);
    money.money = money.money + win;
    money.save().catch(err => console.log(err)); 
    }
    if (rolled == "2"){
    message.channel.send(lostembed);
    money.money = money.money - lost;
    money.save().catch(err => console.log(err));
    }
    if(!money){
    message.channel.send(embed);
//----------------------
        }
    })

}
module.exports.help = {
    name: "bet"
}


// newMoney.save().catch(err => console.log(err));       
// } else {
//   money.money = money.money + coinstoadd;
//   money.save().catch(err => console.log(err));