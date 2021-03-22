module.exports = {
	name: '69',
	description: 'nice',
	execute(message, args) {
		if (message.content.includes('https://')) {
			return;
		}
		else if (message.content.includes('676319279569698816') || message.content.includes('717926059030478869')) {
			return;
		}
		else {
			message.channel.send('Nice.');
			console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 03).')
		}
	},
};