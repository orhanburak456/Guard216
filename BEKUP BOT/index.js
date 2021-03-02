const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
client.config = config;

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Event Yüklendi: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

fs.readdir("./prex/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./prex/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Komut Yüklendi: ${commandName}`);
    });
});

client.login(config.token);

client.on("ready", async () => {
	client.user.setActivity(`VΛLERİNΛ ❤️`, {
type: "STREAMING",
url: "https://www.twitch.tv/Hentra"})
    .then(presence => console.log(`HERŞEY TAMAM AGAM ALTA ALABİLİRSİN BOTU`))
    .catch(console.error);
  let botVoiceChannel = client.channels.cache.get("812373500810493982");
  if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});
