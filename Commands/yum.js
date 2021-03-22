module.exports = {
	name: 'yum',
	description: 'slurrrrp',
	execute(message, args) {
		message.react('👅');
		console.log('Misceallaneous command executed in ' + message.guild + ' by ' + message.author + ' (ID 02).')
	},
};