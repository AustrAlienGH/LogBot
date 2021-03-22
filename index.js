const fs = require('fs');
const Discord = require('discord.js');
const path = require('path');
const client = new Discord.Client({disableEveryone: false});
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
const config = require('./config.json')
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
var now = new Date();
var prefix = config.prefix
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day = days[now.getDay() ];
var feliz = false

client.on('ready', () => {
	console.log('Logs bot initialized')
});

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName)

	if (command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}
	

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t run that here');
	}
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error)
		message.reply('A problem occured while executing that command, please try again.')
	}
});

//Other commands
client.on('message', message => {
	if (message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	try {
		if (message.content.includes('alberts mum gay')) {
			//ID 00
			client.commands.get('alberts mum gay').execute(message, args);
		}
		if (message.content.includes('/help')) {
			//ID 00
			client.commands.get('commands').execute(message, args);
		}
		/*if (message.content.includes('683271132261908480') || message.mentions.everyone || message.content.includes('vc') || message.content.includes('v c') || message.content.includes('https://krunker.io/?game=') || message.content.includes('v.c')){
			if(message.content.includes('vce')){
				return;
			}
			else{
				var number = Math.floor(Math.random() * 150)
				if (number < 50){
					message.channel.send('', {
						files: [
							"./Commands/Other Files/tumblr_33caa6fa2d9060d1ebf32b7f13a3bf38_59ae975d_1280.jpg"
						]
					});
				}
				else if (number > 49 && number < 101) {
					message.channel.send('', {
						files: [
							"https://cdn.discordapp.com/attachments/683876901122867225/722364577420935198/Shut-the-fuck-up.mp4"
						]
					});
				}
				else if (number > 100){
					message.channel.send('', {
						files: [
							"./Commands/Other Files/heres a tech tip.jpg"
						]
					});
				}
				if (message.guild === null){
					console.log('Some idiot tried to harrass Log Bot in DMs')
				}
				else {
					console.log('Someone needs to shut the fuck up in: ' + message.guild)
				}
			}
		}*/
		if (day === "Thursday" && feliz === false){
			let announcementsChannel = client.channels.cache.get("682834190118813712")
			if(announcementsChannel){
				announcementsChannel.send('feliz jueves!', {
					files: [
						"./Commands/Other Files/feliz_jueves.mp4"
					]
				})
				feliz = true
			}			
		}
		if (day != "Thursday"){
			feliz = false
		}
		if (message.content.includes('do you agree log bot?')){
			if (message.author.id === '244607317721481217'){
				message.channel.send('Yes, I do.')
			}
			else {
				message.channel.send('No, idiot')
			}
		}
		if(message.content.includes('hand')){
			var quotesChannel = client.channels.cache.get("709238713200148522");
        	if(quotesChannel){
				quotesChannel.send(message.content + '\n-<@' + message.author + '>');
        	}
		}
		if (message.content.includes('sus')){
			message.channel.send('amogus')
		}
		if (message) {
			var number = Math.floor(Math.random() * 1000)
			if (number === 999) {
					message.channel.send('cock')
				console.log('cock')
			};
		} 
		if (message.content.includes('>ps')) {
			client.commands.get('photoshop').execute(message, args);
		}
		if (message.content.includes('carlys mum gay')) {
			//ID 01
			client.commands.get('carlys mum gay').execute(message, args);
		}
		if (message.content.includes('>cp')){
			client.commands.get('copypasta').execute(message,args)
		}
		if (message.content.includes('yum')) {
			//ID 02
			client.commands.get('yum').execute(message, args);
		}
		if (message.content.includes('based')) {
			//ID 03
			client.commands.get('based').execute(message, args);
		}
		if (message.content === 'F') {
			//ID 04
			client.commands.get('F').execute(message, args);
		}
		if (message.content === 'f') {
			//ID 04
			client.commands.get('F').execute(message, args);
		}
		if (message.content === 'gay') {
			//ID 06
			client.commands.get('gay').execute(message, args);
		}
		if (message.content.includes('froggy chair')) {
			//ID 07
			client.commands.get('froggy chair').execute(message, args);
		}
		if (message.content.includes('obama')) {
			//ID 08
			client.commands.get('obama').execute(message, args);
		}
		if (message.content.includes('https://cdn.discordapp.com/attachments/682781798186745909/683604692844281950/RR3KUF6.mp4')) {
			//ID 09
			client.commands.get('little herobrine').execute(message, args);
		}
		if (message) {
			var number = Math.floor(Math.random() * 99999)
			if (number === 69) {
					message.channel.send('RANDOM CHIMP EVENT HAS OCCURED :gorilla:', {
						files: [
							"./Commands/Other Files/f4ghb5jwqzi41.jpg"
						]
					});
				console.log('RANDOM CHIMP EVENT OCCURED IN' + message.guild + '!!!')
			};
		}
	} catch (error) {
		console.error(error)
		message.channel.send('That moment when error :flushed:')
	}
});

client.login(config.token);