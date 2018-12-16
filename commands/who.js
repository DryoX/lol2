const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embedhe = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("**UNDER DEVELOPMENT!**");

    return message.channel.send(embedhe);

}

module.exports.help = {
  name: "who"
}
