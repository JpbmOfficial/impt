const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let helpaddroleembed = new Discord.RichEmbed()
    .setDescription("Help Addrole")
    .setColor("ff6a00")
    .addField("Addrole Command", "!addrole <user> <role>")
    .setFooter("You must have manage roles permission!");
    
    message.channel.send(helpaddroleembed);

}

module.exports.help = {
    name:"helpaddrole"
}