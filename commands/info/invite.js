const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "invite",
    aliases: ["invite"],
    description: "Sends invite of this bot",
    usage: "sh!invite",
    run: (client, message, args) => {
        
        const discordEmbed = new MessageEmbed()
            .setTitle('Invite')
            .setColor('#ffffff')
            .setDescription('If you wanna add me to your private discord just click that link below:')
            .addField('Invite:', '[CLICK HERE](https://top.gg/bot/636970595262922752)', false)
            .addField('Private contant', '<@190755326637768704>', true)
            .setFooter('⚡ Shazam! ⚡ | Kazik#2642');
        return message.channel.send(discordEmbed);



    }
}