module.exports = {
	name: 'fuckMeDaddy',
	description: '*moans* harder daddy',
	execute(message, args) {
		message.channel.send('harder daddy *moans intensely*');
		console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 11).')
	},
};