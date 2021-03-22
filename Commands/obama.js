module.exports = {
	name: 'obama',
	description: 'obama',
	execute(message, args) {
		message.channel.send('obama');
		console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 08).')
	},
};