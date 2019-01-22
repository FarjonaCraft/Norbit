const Discord = require("discord.js");

const ms = require("ms");



module.exports.run = async (bot, message, args) => {
  message.delete();
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'MUTE_MEMBERS' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send(Idonthavepermission).then(msg => msg.delete(5000));

  let Notpermission = new Discord.RichEmbed()
  .setTitle("You dont have permission to use this command!")
  .setColor("RED");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(Notpermission).then(msg => msg.delete(5000));

  //!tempmute @user 1s/m/h/d



  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let NoUserEmbed = new Discord.RichEmbed()
  .setTitle("Incorrect Usage: >tempmute {user} {time: ms}")
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
  let Notime = new Discord.RichEmbed()
  .setTitle("ERROR: You didn't specify a time!")
  .setColor("RED");
  if(!mutetime) return message.channel.send(Notime);



  await(tomute.addRole(muterole.id));
  let Mutedembed = new Discord.RichEmbed()
  .setTitle(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`)
  .setColor("ORANGE");
  message.channel.send(Mutedembed);



  setTimeout(function(){

    tomute.removeRole(muterole.id);
    let Unmutedembed = new Discord.RichEmbed()
    .setTitle(`<@${tomute.id}> has been unmuted!`)
    .setColor("GREEN");
    message.channel.send(Unmutedembed);

  }, ms(mutetime));





//end of module

}



module.exports.help = {

  name: "tempmute"

}
