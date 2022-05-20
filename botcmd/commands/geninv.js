const Discord = require('discord.js');
module.exports = {
    name: "geninv",
    cooldown: 5,
    aliases: ["invite_premium"],
 
run: async (bot, message, args) => { //async
    if(!message.author.id.includes(`528876638130405387`)) return  message.reply('**ONLY MY OWNER CAN USE THIS COMMAND!**')
	message.channel.send(new Discord.MessageEmbed()
  .setTitle(`Invite Snap Tickets`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`**Invite Me [https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=8&scope=applications.commands%20bot]()**\n\n**Note: _Only My Owner Can Invite Me !_**`)
  .setColor(`#0x2F3136`));
	}
};


