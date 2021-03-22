module.exports = {
	name: 'photoshop',
    description: 'sends photoshopped image',
	guildOnly: false,
	execute(message, args) {
        //message.delete()
		if (!args[0]) {
            number = Math.floor((Math.random() * 11) + 1);
            message.channel.send('', {
                files: [{
                    attachment: 'C:/Users/Albert/Documents/Discord Photoshops/' + number + '.png'
                }]
            })
        }
        else if (args){
            number = args
            attachment = 'C:/Users/Albert/Documents/Discord Photoshops/' + number + '.png'
            if (attachment === 'C:/Users/Albert/Documents/Discord Photoshops/all.png'){
                message.channel.send('', {
                    files: [{
                        attachment: 'C:/Users/Albert/Documents/Discord Photoshops/all.zip'
                    }]
                })
            }
            else{
            message.channel.send('', {
                    files: [{
                        attachment: 'C:/Users/Albert/Documents/Discord Photoshops/' + number + '.png'
                    }]
                })
            }
        }
        else {
            return message.channel.send('This image does not exist')
        }
	}
}