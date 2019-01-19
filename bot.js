const Discord = require("discord.js")
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("462635240825815050");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcome To Vision Omg Family ..** `), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 
