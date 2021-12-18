const {client} = require('../index');
const Discord = require("discord.js");
const config = require("../config.json");


client.on('guildMemberRemove', member => {
    const leaveToChannelMessage = new Discord.MessageEmbed()
        .setDescription(`Niestety, opuscił nasz serwer jest nas teraz **${client.guilds.cache.get(member.guild.id).memberCount}** !`)
        .setColor('#EA0F2C')
        .setThumbnail(member.user.displayAvatarURL())
        .setAuthor(member.user.tag, config.iconServerURL,'')
        .setFooter(config.ServerName);
    client.channels.cache.get(config.leaveChannel).send(leaveToChannelMessage);
})
