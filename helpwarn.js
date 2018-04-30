const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let helpwarnembed = new Discord.RichEmbed()
    .setDescription("Help Warn")
    .setColor("ff6a00")
    .addField("Warn Command", "!warn <user> <reason>")
    .setFooter("!warn @impt watch out! // ADMINISTRATOR PERMISSION!");

    
    message.channel.send(helpwarnembed);



}

module.exports.help = {
    name:"helpwarn"
}