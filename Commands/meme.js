module.exports = {
	name: 'meme',
    description: 'mmm meme',
	guildOnly: false,
	execute(message, args) {
		const fs = require('fs');
		//message.delete()
		number = Math.floor((Math.random() * 145) + 1);
		if (fs.existsSync('C:/Users/Albert/Documents/Memes/' + number + '.mp4')){
			message.channel.send('', {
				files: [{
					 attachment: 'C:/Users/Albert/Documents/Memes/' + number + '.mp4'
				}]
			})
			return;
		}
		else if(fs.existsSync('C:/Users/Albert/Documents/Memes/' + number + '.gif')){
			message.channel.send('', {
				files: [{
					 attachment: 'C:/Users/Albert/Documents/Memes/' + number + '.gif'
				}]
			})
			return;
		}
		else if(fs.existsSync('C:/Users/Albert/Documents/Memes/' + number + '.mov')){
			message.channel.send('', {
				files: [{
					 attachment: 'C:/Users/Albert/Documents/Memes/' + number + '.mov'
				}]
			})
			return;
		}
		else{
			message.channel.send('An error occured ;(')
			return;
		}
	}
}