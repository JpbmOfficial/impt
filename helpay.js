const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    let helpayembed = new Discord.RichEmbed()
    .setDescription("Help Pay")
    .setColor("ff6a00")
    .addField("Pay Command", "!pay <user> <CoinAmt>");

    message.channel.send(helpayembed);
}
module.exports.help = {
    name:"helpay"
}