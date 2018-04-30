const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let helpremoveroleembed = new Discord.RichEmbed()
    .setDescription("Help Removeole")
    .setColor("ff6a00")
    .addField("Removerole Command", "!removerole <user> <role>")
    .setFooter("You must have manage roles permission!");

    message.channel.send(helpremoveroleembed);

    
    }

module.exports.help = {
    name:"helpremoverole"
}