const config = require("../config.json");
const Discord = require("discord.js");

const activities = [
    "PLAYING",
    "STREAMING",
    "LISTENING",
    "WATCHING",
    "CUSTOM_STATUS",
    "CLEAR",
  ]

module.exports = {
    name: 'status',
    description: 'Komenda na pisanie statusu', 
    async execute(message, args) {
        if(message.member.roles.cache.find(r => r.id === config.Owner)) { 
            const { client } = message

            const activityType = args[0].toUpperCase()
            let activityName = [...args].slice(1).join(" ")
        
            // Check activity type
            if (!activities.includes(activityType)) {
              return message.reply(
                `zły rodzaj aktywności. Dozwolone czynności: \`${activities.join(
                  "` ,`",
                )}\`.`,
              )
            }
        
            // Clear presence
            if (activityType === "CLEAR") activityName = ""
        
            const presenceOptions = {
              activity: {
                type: activityType,
                name: activityName,
              },
            }
        
            client.user.setPresence(presenceOptions).then((presence) => {
              message.channel.send("✅ Pomyślnie zmieniono status.")
            })
        } else {
            message.reply('Nie masz permisji do użycia tej komendy.')
        }
    }
}