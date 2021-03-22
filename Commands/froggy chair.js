module.exports = {
	name: 'froggy chair',
	description: 'Froggy chair fandom rise up',
	execute(message, args) {
		message.channel.send('All hail our lord and saviour, froggy chair.');
		console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 07).')
	},
};