const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);
	if (!message.member.roles.find(c => c.name === "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Invalid permissions.');
		return;
	}
    //   let muterole = message.guild.roles.find(c => c.name === "@everyone");
    // Check for input
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("✅");
            msg.react("❎"); // You can only add two reacts
            message.delete({timeout: 2000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.help = {

    name: "poll"
  
  }
