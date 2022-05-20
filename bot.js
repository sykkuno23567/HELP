const { Client, Collection } = require("discord.js");
const Discord = require('discord.js');
const emoji = require('./botconfig/emoji.json')
const { AutoPoster } = require('topgg-autoposter')


const client = new Client();
require('discord-buttons')(client);
const chalk = require("chalk");
const fs = require("fs");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));




client.commands = new Collection();

fs.readdir(__dirname + "/botcmd/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let event = require(__dirname + "/botcmd/events/" + file);
        let eventName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Loading event ") + chalk.magenta.bold(`"${eventName}"`)
        );
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir(__dirname + "/botcmd/commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(__dirname + "/botcmd/commands/" + file);
        let commandName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Loading command ") + chalk.red.bold(`"${commandName}"`)
        );
        client.commands.set(commandName, props);
    });
});

client.login./config/bot").token).catch(err => console.log(chalk.red.bold(err)))
require("http").createServer((_, res) => res.end("SKY SERVER")).listen(8080)

let i;

client.on("ready", () => {
  console.log(`Hey user ${client.user.tag} has logged in. is online`);
  client.user.setPresence({
    activity : {
      name: "Covid-19 Is Back", 

      
      type: "PLAYING"
    },

    
    status : 'idle'
  })
    i = client.guilds.cache.size
})

      


const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzMjM5MDIwOTg4MTg5OTAzOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4NjQ5MTY3fQ.BZuWu1lFNomLlkyJQGUgVC8_EPRbbWUk95HfljWlGAY', client) // Client text

poster.on('posted', (stats) => { // Run
  console.log(`Posted stats to Top.gg | ${stats.serverCount} servers`)
})

fetch(`https://api.voidbots.net/bot/stats/:832390209881899039`, {
    method: "POST",
    headers: { 
      Authorization: "VOID_UGvK0CPxWsr68t5EA7t0PqxJGZ5YogoTgSh4FBPuOE95PCr8",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"server_count": i, "shard_count": 0 })
  }).then(response => response.text())
.then(console.log).catch(console.error);
let server_count;

server_count = client.guilds.cache.size

