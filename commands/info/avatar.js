const { MessageEmbed, Client } = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ["av"],
    description: "Sends member's avatar.",
    usage: "sh!avatar",
    args: [{
        type: "user",
        prompt: "Którego użytkownika chciałbyś zdjęcie?",
        key: "user",
        default: msg => msg.author
    }],
    run: (msg, { user }) => {

        let embed = new MessageEmbed()
            if (msg.content === '!avatar') {
            
            let embed = new MessageEmbed()
               
                .setImage(msg.author.avatarURL)
                .setColor('RANDOM')
            msg.channel.send(embed)



        }
    }

};