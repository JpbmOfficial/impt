const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    let helpreportembed = new Discord.RichEmbed()
    .setDescription("Help Report")
    .setColor("ff6a00")
    .addField("Report Command", "!report <user> <reason>")
    .setFooter("!report @impt reason");

    message.channel.send(helpreportembed);
}
module.exports.help = {
    name:"helpreport"
}