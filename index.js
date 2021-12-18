const Discord = require('discord.js');
const client = new Discord.Client()
const config = require('./config.json')
const fivereborn = require('fivereborn-query');
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
const disbut = require('discord-buttons');
disbut(client);

require("./functions")(client);

client.commands = new Discord.Collection();
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('message', message => {
    if(!message.content.startsWith(config.prefix)||message.author.bot) return

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'embed'){
        client.commands.get('embed').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, client, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, client, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, client, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'ticket'){
        client.commands.get('ticket').execute(message, client, args);
    } else if(command === 'weryfikacja'){
        client.commands.get('weryfikacja').execute(client, message, args);
    } else if(command === 'status'){
        client.commands.get('status').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, client, args);
    } else if(command === 'tempmute'){
        client.commands.get('tempmute').execute(message, client, args);
    } else if(command === 'podania'){
        client.commands.get('podania').execute(message, client, args);
    
    }


});

module.exports = {
    client: client
};

client.login(config.token);
