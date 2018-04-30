const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let helpsayembed = new Discord.RichEmbed()
    .setDescription("Help Say")
    .setColor("ff6a00")
    .addField("Say Command", "!say <something>")
    .setFooter("!say ok");

    message.channel.send(helpsayembed);


}

module.exports.help = {
    name:"helpsay"
}