module.exports = {
	name: 'gay',
	description: 'GAY!?',
	execute(message, args) {
		message.channel.send('Like carly');
		message.react('🏳️‍🌈')
		console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 06).')
	},
};