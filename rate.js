const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let replies = [ "0/10 😱","1/10 😭", "2/10 😔", "3/10 😞", "4/10 😞", "5/10 😌", "6/10 😉", "7/10 😄", "8/10 😊 " , "9/10 😘", "10/10 😍"];

  let result = Math.floor((Math.random() * replies.length));

  let rateembed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#FF9900")
  .addField("Rate", replies[result]);

  message.channel.send(rateembed);
}

module.exports.help = {
  name: "rate"
}