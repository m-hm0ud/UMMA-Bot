const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.MessageContent,
	],
	partials: [
		Partials.User,
		Partials.Channel,
		Partials.GuildMember,
		Partials.Message,
		Partials.Reaction,
		Partials.GuildScheduledEvent,
		Partials.ThreadMember,
	]
});


if (process.env['DISCORD_TOKEN'] == undefined) {
	console.error("TOKENが設定されていません。");
	process.exit(0);
}

client.on("ready", () => {
	console.log(`ログイン: ${client.user.tag}`);
});

client.login(process.env['DISCORD_TOKEN']);