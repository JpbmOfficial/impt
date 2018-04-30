const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[0]) return message.reply("Please ask a full quesion!");
  let replies = ["Yes", "No", "Maybe"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join("  ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed);
}

module.exports.help = {
  name: "8ball"
}
