const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require("discord-buttons");
const ms = require('ms');

const { MessageMenuOption, MessageMenu } = require("discord-buttons");
 
 module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands", "cmds"],
 
run: async (bot, message, args) => { 
 
      message.react('928271942782451812');


                const embed = new Discord.MessageEmbed()
                .setTitle(`<:PINNED:969929845268168774> 《 **Snap Help Menu **》`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`__**Click On The Select Menu Below To Swap Help Pages**__\n > <:Home_page:969972638963355689> - **Home Page**
> <:ticket:969970291369443378> - **Tickets Commands**
> <:Moderation:969966899532271717> - **Moderation Features**
> <:Giveawaysbot:969929846375473182> - **Giveaways Features** 
> <:Info:969974352831463555> - **About Me** 
**${message.guild.name}** Have Like  \`${message.guild.memberCount}\` Members <a:Member_count:969929561028571216>** Bot Ping Is ${client.ws.ping}ms`,true)
                .setColor(`#0x5865F2`)

                const embed2 = new Discord.MessageEmbed()
                .setTitle(`<:ticket:969970291369443378> 《 Ticket Commands 》`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__Commands:__**\n\`setup\` : To setup ticket system \n\`transcript\` : To transcript a ticket \n\`rename\` : To change name of a ticket \n\`remove\` : To remove any one in the ticket \n\`ping\` : To see your ping \n\`open\` : To open a ticket fast \n\`close\` : To close a ticket \n\`prefix\` : To change the bot prefix \n\`add\` : To add someone in the ticket`)
                .setColor(`#0x5865F2`)

                const embed3 = new Discord.MessageEmbed()
                .setTitle(`<:Moderation:969966899532271717>《 My Moderation Features 》`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription("**__Commands:__**\n\`Ban\` : To Ban A User From  Server  \n\`Kick\` : To Kick a user From Server \n\`Clear\` : To Delete **X** Messages \n\`Timeout\` : To Timeout Some From Server  \n\`Lock\` : To Lock a T-Chat fast \n\`Unlock\` : To Unlock A T-Chat Faster then Lock \n\`Warn\` : To To Warn Someone (Rule Broken) \n\`Warn Remove\` : To Remove a Warn From a User \n\`Warn Check\` : To Get ID Of A User Got Warned")
                .setColor(`#0x5865F2`)

  const embed5 = new Discord.MessageEmbed()
                .setTitle(`<:Giveawaysbot:969929846375473182>《 My Giveaways Features 》`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription("**__Commands:__**\n\`start\` : To start a giveaway \n\`end\` : To end a current giveaway \n\`reroll\` : To re-choose a new winner \n\`list\` : To get all the working giveaway \n\`pause\` : To pause a giveaway \n\`resume\` : To re-start a paused giveaway")
    .setColor(`#0x5865F2`)

                const embed4 = new Discord.MessageEmbed()
                .setTitle(`<:Info:969974352831463555>《 About Server 》`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`<:5040discordcheck:928271947488440330>I was Made by, \**! DEV_SYKKUNO#6144**\! \n\`SUPPORT SERVER\`, [Server](https://discord.gg/39qVPkxAgH) \n\ <:5040discordcheck:928271947488440330> **BOT STATUS**\, \`STILL IN BETA\` \n\`Server Owner\` **${message.guild.owner}** \n\<:5040discordcheck:928271947488440330> **CREATION DATE**, \`16/04/2021\``)
                .setColor(`#0x5865F2`)

                
        let option1 = new MessageMenuOption()
        .setLabel('Home Main')
        .setValue('option1')
        .setEmoji("969972638963355689")
        .setDescription('View All My Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Ticket Commands')
        .setValue('option2')
        .setEmoji("969970291369443378")
        .setDescription('View Snap Ticket Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Moderation')
        .setValue('option3')
        .setEmoji("969966899532271717")
        .setDescription('View My Moderation Features')
  
      let option5 = new MessageMenuOption()
        .setLabel('My Giveaways Features')
        .setValue('option5')
        .setEmoji("969929846375473182")
        .setDescription('View My About')
  
        let option4 = new MessageMenuOption()
        .setLabel('About Server')
        .setValue('option4')
        .setEmoji("969974352831463555")
        .setDescription('View My Giveaways Features')
  

        let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Ticket Bot Menu')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option5, option4)

        const Sendmenu = await message.channel.send(embed, select);

        let collector = Sendmenu.createMenuCollector(b => b, { time : 60000 });
 
    collector.on("collect" , (b) => {
      
        if(b.clicker.user.id !== message.author.id)
              return b.reply.send(`<:3595failed:928271941847121922>
 **Only <@${message.author.id}> Is Allowed To interace !**\n**Tip**: \`To Use This Command, Type **>help**\``, true)  

      
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }
      if(b.values[0] == "option5") {
            Sendmenu.edit(embed5, select)
      }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }
 b.reply.defer();
 
 
        
    })
 
    collector.on("end", (b) => {
        Sendmenu.edit(new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("Help Menu Is **Dead Bruh** ! re-do **>help** To Get The Menu Again")
        .setFooter("Powered By Snap™"))
    })

    }
}

