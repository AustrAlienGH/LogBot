module.exports = {
	name: 'little herobrine',
	description: 'I am cumming in your mum',
	execute(message, args) {
		message.channel.send('Little herobrine i am cumming in your mum');
		console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 09).')
	},
};