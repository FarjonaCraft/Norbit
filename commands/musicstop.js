const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const FFMPEG = require("ffmpeg");


function play(connection, message) {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, messsage);
        else connection.disconnect();
    })
}
var servers = {};
module.exports.run = (bot, message, args) => {
    var server = servers[message.guild.id];
    if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
}

module.exports.help = {
    name: "stop"
}