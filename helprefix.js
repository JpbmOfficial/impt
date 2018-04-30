const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let helprefixembed = new Discord.RichEmbed()
    .setDescription("Help Prefix")
    .setColor("ff6a00")
    .addField("Prefix Command", "!prefix <prefix>")
    .setFooter("You must have manage server permission!");

    message.channel.send(helprefixembed);


}
module.exports.help = {
    name:"helprefix"
}