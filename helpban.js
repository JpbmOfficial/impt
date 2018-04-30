const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

   
    let helpbanembed = new Discord.RichEmbed()
    .setDescription("Help Ban")
    .setColor("ff6a00")
    .addField("Ban Command", "!ban <user> <reason>")
    .setFooter("!ban @impt hacked system // ADMINISTRATOR PERMISSION");

    message.channel.send(helpbanembed);

}
module.exports.help = {
    name:"helpban"
}