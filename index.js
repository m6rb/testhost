const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '+';

client.on('ready',()=>{
    console.log(`Logged in As ${client.user.tag}`);
});
 client.login(process.env.TOKEN); 
