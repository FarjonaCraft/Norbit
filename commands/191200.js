//>antirob {user}
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
message.delete();



  let tomute = message.mentions.members.first();

  let couldntfinduser = new Discord.RichEmbed()
  .setTitle(`Incorrect Usage: >191200 {user}`)
  .setColor(`RED`); 
  if(!tomute) return message.channel.send(couldntfinduser).then(msg => msg.delete(5000)); //thumb
//   if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");

  let muterole = message.guild.roles.find(c => c.name === "MEMES");
  //start of create role

  if(!muterole){

    try{

      muterole = await message.guild.createRole({

        name: "MEMES",

        color: "GREEN",

        permissions:[]

      })

      message.guild.channels.forEach(async (channel, id) => {

        await channel.overwritePermissions(muterole, {
        ADMINSTRATOR: true,
          SEND_MESSAGES: true, 

          ADD_REACTIONS: true

        });

      });

    }catch(e){

      console.log(e.stack);

    }

  }

  //end of create role

  let mutetime = (ms(432000000));
  let me = message.mentions.users.first();
  
  await(tomute.addRole(muterole.id));
  let incurance = new Discord.RichEmbed()
  .setTitle(`${me.username} has got antirob insurance for 5 days!`)
  .setColor(`GREEN`); 
  if(!tomute) return message.channel.send(incurance).then(msg => msg.delete(5000)); //thumb
  message.channel.send(incurance)



  setTimeout(function(){

    tomute.removeRole(muterole.id);
    let expired = new Discord.RichEmbed()
    .setTitle(`${me} Antirob insurance has been expired!`)
    .setColor(`ORANGE`); 
    message.channel.send(expired);

  }, ms(mutetime));





//end of module

}



module.exports.help = {

  name: "191200"

}
