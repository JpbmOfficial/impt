const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pingembed = new Discord.RichEmbed()
    .setThumbnail(bot.displayAvatarURL)
    .setColor("#15f153")
    .addField("Ping", `${message.createdTimestamp - Date.now()}`)



    message.channel.send(pingembed);
}

module.exports.help = {
  name:"ping"
}
