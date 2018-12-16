const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bugEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Information!**", [`This Bot Is Created By RtzFurry - ID:378074425066520577`, "If you have any issue because of this bot! Please DM me!"]);

  message.delete().catch(O_o=>{});
  message.channel.send(bugEmbed)

}

module.exports.help = {
  name: "bug"
}
