module.exports = {
	name: 'commands',
	description: 'Displays commands',
	execute(message, args) {
		const commandEmbed = {
			color: 0x0099ff,
			title: 'Commands',
			description: 'List of all currently available commands.',
			fields: [
				{
					name: 'Commands',
					value: 'lists all available commands'
				},
				{
					name: 'Suggest',
					value: 'Submits a suggestion to Albert'
				},
				{
					name: 'Purge',
					value: 'Bulk deletes messages less than 2 weeks old (from 2-99)'
				},
				{
					name: 'WhoIs',
					value: 'Provides information on the tagged user'
				},
				{
					name: 'WhichLog',
					value: 'Returns which log you are currently sitting on'
				},
				{
					name: 'Copypasta',
					value: 'Messages a copypasta, if no copypastas are specified it will send a random one \n(HINT: add uwu after the number for a nice suprise)'
				},
				{
					name: 'stfu',
					value: 'Sends the stfu video'
				},
				{
					name: 'Photoshop',
					value: 'Sends random photoshop, or if specified, the relevant image from the folder.\nRun /photoshop all for all photos',
				},
				{
					name: 'jreg',
					value: 'Sends the jreg "shut the fuck up" copypasta'
				},
				{
					name: 'meme            [UPDATED]',
					value: 'Sends a random meme from the collection'
				},
			],
			footer: {
				text: 'Made with mematic'
			}
		}
		message.channel.send({ embed: commandEmbed });
	},
};