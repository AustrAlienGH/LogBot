module.exports = {
	name: 'F',
	description: 'Pay your respects',
	execute(message, args) {
		message.channel.send('F');
		console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 04).')
	},
};