const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    let helptempmuteembed = new Discord.RichEmbed()
    .setDescription("Help Tempmute")
    .setColor("ff6a00")
    .addField("Tempmute Command", "!tempmute <user> <seconds ***1s/1h/1d***>")
    .setFooter("!tempmute @impt 10s // MUST HAVE MANAGE MESSAGES PERMISSION");

    message.channel.send(helptempmuteembed);


}

module.exports.help = {
    name:"helptempmute"
}