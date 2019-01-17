const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
  let Idonthavepermission = new Discord.RichEmbed()
  .setTitle("ERROR: Give me 'SEND_MESSAGES' permission!")
  .setColor("RED");
  if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.channel.send(Idonthavepermission);

var facts = ['If you somehow found a way to extract all of the gold from the bubbling core of our lovely little planet, you would be able to cover all of the land in a layer of gold up to your knees.', 'McDonalds calls frequent buyers of their food “heavy users.”', 'The average person spends 6 months of their lifetime waiting on a red light to turn green.', 'The largest recorded snowflake was in Keogh, MT during year 1887, and was 15 inches wide.', 'You burn more calories sleeping than you do watching television.', 'There are more lifeforms living on your skin than there are people on the planet.', 'Southern sea otters have flaps of skin under their forelegs that act as pockets. When diving, they use these pouches to store rocks and food.', 'A banana is a berry.', 'In 1971, a Dallas man named Mariano Martinez invented the frozen margarita machine. The 26-year-old was inspired by the Slurpee machine at 7-Eleven.', 'Continental plates drift as fast as fingernails grow.', 'LEGO has a temperature-controlled underground vault in Denmark with nearly every set they’ve ever made.','A reindeers eyes change color through the seasons. They’re gold during the summer and blue in the winter.', 'China owns all of the pandas in the world. They rent them out for about $1 million a year.', 'Bones found at Seymour Island indicate that at one time, 37 to 40 million years ago, penguins stood at a formidable 6 feet tall and weighed 250 pounds.', 'Portland was named by a coin flip. Had the coin landed the other way, the city would be Boston, Oregon.', 'Sleep literally cleans your brain. During slumber, more cerebrospinal fluid flushes through the brain to wash away harmful proteins and toxins that build up during the day.', 'Neil Armstrongs astronaut application arrived a week past the deadline. A friend slipped the tardy form in with the others.', 'The first sales pitch for the Nerf ball was “Nerf: You can’t hurt babies or old people!”', 'Russian cosmonauts used to pack a shotgun in case they landed in Siberia and had to fend off bears.', 'Space has a distinct smell: a bouquet of diesel fumes, gunpowder, and barbecue. The aroma is mostly produced by dying stars.', 'The annual number of worldwide shark bites is 10 times less than the number of people bitten by other people in New York.', 'After an online vote in 2011, Toyota announced that the official plural of Prius was Prii.', 'At the 1905 wedding of Franklin and Eleanor Roosevelt, President Teddy Roosevelt gave away the bride.', 'Tootsie Rolls were added to soldiers, rations in World War II for their durability in all weather conditions.']
    let fact = (facts[Math.floor(Math.random() * facts.length)])
    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .addField("Here`s some random fact;", fact)
    .setFooter(`Requested by: ${message.author.username}`, message.author.avatarURL);
    message.channel.send({embed});



}

module.exports.help = {

  name: "fact"

}
