module.exports = {
	name: 'stfu',
	description: 'I know you have something to say and I know you\'re eager to say it so let me get right to the point, shut the fuck up',
	execute(message, args) {
        message.delete()
            message.channel.send('', {
                files: [
                    "https://cdn.discordapp.com/attachments/683876901122867225/722364577420935198/Shut-the-fuck-up.mp4"
                ]
            });
	},
};