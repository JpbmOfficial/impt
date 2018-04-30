const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const profanities = require("profanities");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
let purple = botconfig.purple;


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`in ${bot.guilds.size} servers and ${bot.users.size} users`, {type: "PLAYING"});

});



//bot.on('typingStart', (channel, user) => {
  // channel.send(`${user.username} has started typing in ${channel.name}`)
 //});

 //bot.on('typingStop', (channel, user) => {
 // channel.send(`${user.username} has stopped typing in ${channel.name}`)
 //});


bot.on("guildMemberAdd", async member => {
  
  console.log(`${member.id} joined the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome-goodbye");
  welcomechannel.send(`LOOK OUT EVERYONE! ${member} has joined the paradise!`);

  var role  = member.guild.roles.find('name',	 'Sexy');

  member.addRole(role)
});

bot.on("guildMemberRemove", async member => {

  console.log(`${member.id} left the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome-goodbye");
  welcomechannel.send(`Bad Decision..! ${member} has left the paradise...`);

});


bot.on("message", async message => {


  

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let insultchannel = message.guild.channels.find(`name`, "admins");
for(x = 0; x < profanities.length; x++){
if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
  insultchannel.send(`${message.author},said **${message}**!`);
message.delete();
}}


  if(message.content.includes("sad")) {
    message.channel.send("I know what you feel bro")
  return;

}

if(message.content.includes("sexy")) {
  message.channel.send("im sexy af")
return;
     
}

if(message.content.includes("shut up")) {
  message.channel.send("no")
return;
     
}

if(message.content.includes("cable")) {
  message.channel.send("cabled")
return;
     
}


if(message.content.includes("impted")) {
  message.channel.send("Impt is coming up");
  message.channel.send("wait what is impt");
  message.channel.send("impted?");
  message.channel.send("watsh tat");
  message.channel.send("you got impted");
return;
     
}


  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 10) + 1;
  let baseAmt = Math.floor(Math.random() * 10) + 1;
  console.log(`${coinAmt}  ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#68ce65")
  .addField("💰", `💵 ${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(7000)});

  }

  let xpAdd = Math.floor(Math.random() * 3.5) + 4;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 250;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle("You leveled up!")
    .setColor("#42dcf7")
    .addField("Here is your new level:", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });




  let prefix = prefixes[message.guild.id].prefixes;
if (!message.content.startsWith(prefix)) return;
   if(!message.content.startsWith(`${prefix}`)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  if(!commandfile) return message.reply("Please type a valid command!");
});

bot.login(tokenfile.token);
