const Discord = require("discord.js");
const Report = require("../models/report.js");
const mongoose = require("mongoose");
mongoose.connect('mongodb://farjonacraft:z11n.90bf@ds127854.mlab.com:27854/farjonacraft', {
    useNewUrlParser: true
});

module.exports.run = async (bot, message, args) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
    await message.delete();
    if (message.author.id != '323155072307691520') return;
    let rUser = message.mentions.members.first();
    if (!rUser) return message.reply("Can't find that member.");
    let rreason = args.slice(1).join(" ");
    if (!rreason) return message.reply("Please supply a reason.");
    // username: String,
    // UserID: String,
    // reason: String,
    // reportedBy: String,
    // ReportedByID: String,
    // time: String
    const report = new Report({
        _id: mongoose.Types.ObjectId(),
        username: rUser.user.username,
        userID: rUser.id,
        reason: rreason,
        rUsername: message.author.username,
        rID: message.author.id,
        time: message.createdAt
    });
    //als er iets in de mongoose moet worden geschreven.
    report.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    message.reply("That report has been saved to the database!")

}

module.exports.help = {

    name: "blanitestreport"

}