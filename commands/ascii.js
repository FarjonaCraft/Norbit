// Ascii is fixed 👍
const Discord = require("discord.js");
const ascii = require('ascii-art');

module.exports.run = async (bot, message, args) => {
    
    ascii.font(args.join(' '), 'Doom', function(rendered) {

        rendered = rendered.trimRight();

        if (rendered.length > 2000) return message.channel.send('Sorry, that message is to long!');
        message.channel.send(rendered, {
             code: 'md'
            });
    });

}

module.exports.help = {
  "name": "ascii",
  "category": "Fun",
  "description": "ascii-art, create your own art!",
  "aliases": ['ascii', 'Ascii', 'Art', 'art'],
  "usage": ">ascii"
}
