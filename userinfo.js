const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let userembed = new Discord.RichEmbed()
    .setDescription("User Info")
    .setColor("#15f153")
    .setThumbnail(message.author.displayAvatarURL)
    .addField("User Name", message.member.user)
    .addField("ID", message.member.id)
    .addField("Joined Discord in", message.author.createdAt)
    .addField("Joined the Server in", message.member.joinedAt)
    .setFooter("😎",message.author.displayAvatarURL);



    message.channel.send(userembed);
}

module.exports.help = {
  name:"userinfo"
}
