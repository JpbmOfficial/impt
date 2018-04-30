const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    let helpclearembed = new Discord.RichEmbed()
    .setDescription("Help Clear")
    .setColor("ff6a00")
    .addField("Clear Command", "!clear <number>")
    .setFooter("!clear 3 (includes bot messages) //MANAGE MESSAGES PERMISSION");

    message.channel.send(helpclearembed);

}

module.exports.help = {
    name:"helpclear"
}