const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    message.channel.send(' 29/04/2018: Changed the bot\'s prefix to i!, this is not going to change the changed prefixes in servers who changed the prefix');

}

module.exports.help = {
    name:"releases"
}