const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Replies with Test Succesful!"),
  async execute(interaction) {
    await interaction.reply("Test Succesful!!");
  },
};
