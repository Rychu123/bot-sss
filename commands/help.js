const config = require("../config.json");
const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Komenda na pisanie embed message', 
    async execute(message, args) {
        message.delete()
        const embed = new Discord.MessageEmbed()
        .setDescription('1. Bota robił JKacperek ™#9843\n2. Zrób mi kurwa louda\n 3. BOT pierwsza klasa')
        .setTitle('Pomoc')
        .setAuthor(`${config.ServerName}`, `${config.iconServerURL}`,'')
        .setFooter(`${config.ServerName}`)
        .setColor(config.color)
        .setTimestamp()
        message.channel.send(embed)
    }
}
