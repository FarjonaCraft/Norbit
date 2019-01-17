const Discord = require("discord.js");

const ms = require("ms");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'MUTE_MEMBERS' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send(Idonthavepermission);



  //!tempmute @user 1s/m/h/d



  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let NoUserEmbed = new Discord.RichEmbed()
  .setTitle("Incorrect Usage: >mute {user} {reason}")
  .setColor("RED");NoUserEmbed
  if(!tomute) return message.channel.send(NoUserEmbed);

  let muterole = message.guild.roles.find(c => c.name === "muted");

  //start of create role

  if(!muterole){

    try{

      muterole = await message.guild.createRole({

        name: "muted",

        color: 'YELLOW',

        permissions:[]

      })

      message.guild.channels.forEach(async (channel, id) => {

        await channel.overwritePermissions(muterole, {

          SEND_MESSAGES: false,

          ADD_REACTIONS: false

        });

      });

    }catch(e){

      console.log(e.stack);

    }

  }

  //end of create role

  let mutetime = args[1];

  if(!mutetime) return message.reply("You didn't specify a time!");



  await(tomute.addRole(muterole.id));

  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);



  setTimeout(function(){

    tomute.removeRole(muterole.id);

    message.channel.send(`<@${tomute.id}> has been unmuted!`);

  }, ms(mutetime));





//end of module

}



module.exports.help = {

  name: "tempmute"

}
