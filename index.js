const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = process.env.prefix;

client.on('ready',()=>{
    console.log(`Logged in As ${client.user.tag}`);
});
 client.login(process.env.token); 
