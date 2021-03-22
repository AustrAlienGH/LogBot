module.exports = {
	name: 'whois',
	description: 'Provides a description of the mentioned person',
	execute(message, args) {
		const fs = require('fs')
		try {
			if (!message.mentions.users.size) {
				message.channel.send('Here is some information on you: ')
				message.channel.send(fs.readFileSync('C:/Users/Albert/Documents/Log bot/Log Bot/Commands/UserDescriptions/' + message.author + '.txt', 'utf8'))
			}
			else if (message.mentions.users.size) {
				const taggedUser = message.mentions.users.first();
				message.channel.send('Here is some information on <@' + message.mentions.users.first() + '>: ')
				message.channel.send(fs.readFileSync('C:/Users/Albert/Documents/Log bot/Log Bot/Commands/UserDescriptions/' + taggedUser.id + '.txt', 'utf8'))
			}
		} catch (error) {
			console.log(error)
			message.reply('An error occured, this is most likely because the user (<@' + message.mentions.users.first() + '>) doesn\'t have a description, if you are <@' + message.mentions.users.first() + '>, send me a DM with your own description.')
		}

	},
};