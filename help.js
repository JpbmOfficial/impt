const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setDescription("Help Menu")
    .setColor("ff6a00")
    .addField("Member Commands", "help, serverinfo, botinfo, userinfo, report, dog, weather, coins, pay, ping, releases and level")
    .addField("Invite Link", "https://discordapp.com/oauth2/authorize?client_id=429770671833219092&scope=bot&permissions=0")
    .setFooter("Type !help<command> to have help");

    message.channel.send(helpembed);
if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setDescription("Mod Help Menu")
    .setColor("#b70000")
    .addField("Mod Commands", "addrole, removerole, ban, clear, kick, report, say, tempmute, warn, warnlevel, prefix")
    .addField("addrole","Usage: !addrole <user> <role>" )
    .addField("removerole","Usage: !removerole <user> <role>" )
    .addField("ban","Usage: !ban <user> <reason>" )
    .addField("clear","Usage: !clear <Message Amount>" )
    .addField("kick","Usage: !kick <user> <reason>" )
    .addField("report","Usage: !report <user> <reason>" )
    .addField("say","Usage: !say <impt is sexy>" )
    .addField("tempmute","Usage: !tempmute <user> <time>" )
    .addField("warn","Usage: !warn <user> <reason>" )
    .addField("warnlevel","Usage: !warnlevel <user> " )
    .addField("prefix","Usage: !prefix <prefix>" )
    .addField("unban","Usage: !unban <user id> <reason> IT'S IMPORTANT YOU INCLUDE THE ID!" )
    .addField("lockdown","Usage: !lockdown <time> ||!lockdown unlock" );

    try{
        await message.author.send(modembed);
        message.react(":thumbsup:")
}catch(e){
    message.reply("Your DMs are locked. I can't send you the mod commands.")

    }
}

}

module.exports.help = {
    name:"help"
}