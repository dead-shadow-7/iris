const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with bot latency!"),
  async execute(interaction) {
    await interaction.reply({ content: "Pinging..." }); // Send initial message
    const reply = await interaction.fetchReply(); // Fetch the reply message

    await interaction.editReply({
      content: `🏓Latency is ${
        reply.createdTimestamp - interaction.createdTimestamp
      }ms. API Latency is ${Math.round(interaction.client.ws.ping)}ms`,
    });
  },
};
