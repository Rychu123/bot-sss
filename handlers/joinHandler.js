const {client} = require('../index');
const Discord = require("discord.js");
const config = require("../config.json");


client.on('guildMemberAdd', member => {
    const joinToChannelMessage = new Discord.MessageEmbed()
        .setDescription(`Witamy cię na serwerze **${config.ServerName}**, jesteś naszym **${client.guilds.cache.get(member.guild.id).memberCount}** użytkownikiem. Cieszymy się, że dołączyłeś ! 💛`)
        .setColor('#F6FF93')
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(member.user.tag, config.iconServerURL,'')
        .setFooter(config.ServerName);
    client.channels.cache.get(config.joinChannel).send(joinToChannelMessage);
})
