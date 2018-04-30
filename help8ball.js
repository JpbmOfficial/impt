const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let help8ballembed = new Discord.RichEmbed()
    .setDescription("Help 8Ball")
    .setColor("ff6a00")
    .addField("8Ball Command", "!8ball <question>")
    .setFooter("!8ball am i the best?")

    message.channel.send(help8ballembed);

}
module.exports.help = {
    name:"help8ball"
}