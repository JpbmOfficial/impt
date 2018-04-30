const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {



    let helpkickembed = new Discord.RichEmbed()
    .setDescription("Help Kick")
    .setColor("ff6a00")
    .addField("Kick Command", "!kick <user> <reason>")
    .setFooter("!kick @impt hacking system//KICK MEMBERS PERMISSION")

    message.channel.send(helpkickembed);


}

module.exports.help = {
    name:"helpkick"
}