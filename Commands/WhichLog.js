module.exports = {
	name: 'whichlog',
	description: 'I wonder',
	execute(message, args) {
		const number = Math.floor(Math.random() * 14)
		var output = ''
		if (number === 1) {
			output = 'Froggy Chair'
		}
		else if (number === 2) {
			output = 'Thicccc log'
		}
		else if (number === 3) {
			output = 'Table log'
		}
		else if (number === 4) {
			output = 'Convo log'
		}
		else if (number === 5) {
			output = 'Siamese logs'
		}
		else if (number === 6) {
			output = 'Blowjob log'
		}
		else if (number === 7) {
			output = 'Cocaine log'
		}
		else if (number === 8) {
			output = 'l o n g  log'
		}
		else if (number => 9) {
			output = 'Generic log'
		}
		message.channel.send('you are sitting on the ' + output);
	},
};