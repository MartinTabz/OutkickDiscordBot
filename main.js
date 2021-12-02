const { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = ".";
global.Discord = require('discord.js')
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmd/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./cmd/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('The BOT is On-Line!');
})
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();
    if (command === 'funguj'){
        client.commands.get('funguj').execute(message, args);
    } else if (command == 'tanecni'){
        client.commands.get('tanecni').execute(message, args);
    } else if (command == 'tan'){
        client.commands.get('tanecni').execute(message, args);
    }
});
client.login(process.env.TOKEN);