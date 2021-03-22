module.exports = {
	name: 'purge',
	description: 'Deletes multiple message (betweem 2 and 99 messages)',
	guildOnly: true,
	execute(message, args) {
		const amount = parseInt(args[0]);
		if (isNaN(amount)) {
			return message.reply('Invalid argument: Please enter a number betweem 2 and 99.')
		}
		else if (amount <= 1 || amount > 99) {
			return message.reply('Invalid argument: Please enter a number between 2 and 99.')
		}
		else if (amount > 2 || amount < 99) {
			message.channel.bulkDelete(amount + 1, true).catch(err => {
				console.error(err);
				message.channel.send('There was an error, please try again.');
			});
		}
		console.log('command \'purge\' executed in ' + message.guild + ' by ' + message.author + '; purging ' + args[0] + ' messages')
	}
}