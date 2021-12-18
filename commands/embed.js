const config = require("../config.json");
const Discord = require("discord.js");

module.exports = {
    name: 'embed',
    description: 'Komenda na pisanie embed message', 
    async execute(message, args) {
        message.delete()
        const argument = message.content.trim().split(/ +/g);
        
        if(message.member.roles.cache.find(r => r.id === config.Owner)) {
         if(argument[3]) {
            const embed = new Discord.MessageEmbed()
            .setDescription(argument.slice(2).join(" "))
            .setTitle(argument[1])
            .setAuthor(`${config.ServerName}`, `${config.iconServerURL}`,'')
            .setFooter(`${config.ServerName}`)
            .setColor(config.color)
            .setTimestamp()
            message.channel.send(embed)
            } else {
                message.reply('Za mało argumentów.')
            }
        } else if(message.member.roles.cache.find(r => r.id === config.Admin)) {
        if(argument[3]) {
            const embed = new Discord.MessageEmbed()
            .setDescription(argument.slice(2).join(" "))
            .setTitle(argument[1])
            .setAuthor(`${config.ServerName}`, `${config.iconServerURL}`,'')
            .setFooter(`${config.ServerName}`)
            .setColor(config.color)
            .setTimestamp()
            message.channel.send(embed)
            } else {
                message.reply('Za mało argumentów.')
            }
        } else {
            message.reply('Nie posiadasz takich permisji.')
        }
    }
}
