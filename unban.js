const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let cUser =  args[0];
    if(!cUser) return message.channel.send("Couldn't find ID!");
    let cReason = args.join("    ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You must have Administrator permission!");
    

    let unbanEmbed = new Discord.RichEmbed()
    .setDescription("~Unban~")
    .setColor("#0ad336")
    .addField("Unbanned User", `${cUser} with ID ${cUser.id}`)
    .addField("Unbanned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Unbanned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", cReason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find mod-log channel.");

    message.guild.unban(cUser);
    incidentchannel.send(unbanEmbed);

    message.delete().catch(O_o=>{});
}

module.exports.help = {
  name:"unban"
}
