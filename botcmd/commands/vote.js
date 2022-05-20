const Discord = require('discord.js');

const disbut = require("discord-buttons");
module.exports = {
  name : "vote", 
  aliases : ["vote"], 
  cooldown : 5,
  run: async (client, message, args) => {
    var button = new disbut.MessageButton()
.setStyle("url").setURL("https://top.gg/bot/832390209881899039/vote").setLabel("🎉| Top.gg")
  
var button2 = new disbut. MessageButton()
.setStyle("url").setURL("https://voidbots.net/bot/832390209881899039/vote").setLabel("🎉| Voidbots")

var row = new disbut.MessageActionRow()
.addComponents(button, button2)
  
  var embed = new Discord.MessageEmbed()
    .setTitle('Vote Section')
   // Set the color of the embed
    .setURL('https://discord.gg/mZWfQFspsX')
   .setColor(0xff0000)
   // Set the main content of the embed
    .setThumbnail(message.guild.iconURL({ dynamic: true }))

.setDescription("**《SnapBox Welcomes You 》** \n\`If You Like The Bot You Can Support It By Clicking The Buttons Below 👇`")
  	.setTimestamp()
        .setFooter("Snap™");
  
  message.channel.send({embed : embed, components : [row]}) 
  }
}

//《 Ticket Commands 》