module.exports = {
	name: '420',
	description: 'Whatcha smokin?',
	execute(message, args) {
		if (message.content.includes('https://')) {
			return;
		}
		else{
			message.channel.send('Watcha smokin?');
		}
		console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 05).')
	},
};