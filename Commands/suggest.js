module.exports = {
	name: 'suggest',
	description: 'Suggest a command to be added to Logs Bot:tm:',
	args: true,
	execute(message, args) {
		const fs = require('fs')
		try {
			if (!args[4]) {
				message.channel.send('Suggestion not submitted, please input atleast 5 words');
			}
			else {
				async function print(path) {
					const dir = await fs.promises.opendir('suggestionRequests.txt');
					for await (const dirent of dir) {
						console.log(dirent.name);
						dir.closeSync('suggestionRequests.txt')
					}
				}
				var numberOfSuggestions = fs.readFileSync('C:/Users/Albert/Documents/Log bot/Log Bot/Suggestions/suggestionRequests.txt', 'utf8');
				numberOfSuggestions++
				fs.writeFileSync('C:/Users/Albert/Documents/Log bot/Log Bot/Suggestions/suggestionRequests.txt', numberOfSuggestions)
				fs.writeFileSync('C:/Users/Albert/Documents/Log bot/Log Bot/Suggestions/Suggestion' + numberOfSuggestions + '.txt', args + ' suggestion made in: ' + message.guild + ' by: ' + message.author);
				console.log('\n')
				console.log('=====NEW SUGGESTION=====');
				console.log('from: ' + message.guild + ' by: ' + message.author);
				console.log(args);
				console.log('The suggestion has been saved as Suggestion' + numberOfSuggestions + '.txt');
				console.log(' ');
				message.channel.send('Thank you for your suggestion <@' + message.author + '>.');
			}
		} catch (error) {
			console.error(error)
			message.reply('There was an error processing your suggestion, please try again.')
		}

	},
};