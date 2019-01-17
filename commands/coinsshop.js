//klaar!

const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    let Idonthavepermission = new Discord.RichEmbed()
    .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
    .setColor("RED");
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);


    await message.delete().catch(O_o=>{});



    const antirob = message.guild.roles.get('529925591152066570'); // Moderator




    const filter = (reaction, user) => ['🇦'].includes(reaction.emoji.name) && user.id === message.author.id;



    const embed = new Discord.RichEmbed()

        .setTitle('Available pages')

        .setDescription(`
        🇦 ${antirob.toString()}
        `)

        .setColor(0xdd9323)

        .setFooter(`ID: ${message.author.id}`);

        

    message.channel.send(embed).then(async msg => {



        await msg.react('🇦');




        msg.awaitReactions(filter, {

            max: 1,

            time: 30000,

            errors: ['time']

        }).then(collected => {



            const reaction = collected.first();



            switch (reaction.emoji.name) {

                case '🇦':


                    message.member.addRole(antirob).catch(err => {

                        console.log(err);

                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);

                    });

                    message.channel.send(`You have been added to the **${antirob.name}** role!`);

                    msg.delete();

                    break;

            }

        }).catch(collected => {

            return message.channel.send(`I couldn't add you to this role!`);

        });



    });



};
module.exports.help = {
  name: "shopmet7allecommands" //shop
}


