module.exports = {
	name: 'kissfinn',
	description: 'do it izzy',
	execute(message, args) {
        const fs = require('fs')
        /*async function print(path) {
            const dir = await fs.promises.opendir('C:/Users/Albert/Documents/Log Bot/Log Bot/Commands/thekisstally.txt');
            for await (const dirent of dir) {
                console.log(dirent.name);
                dir.closeSync('C:/Users/Albert/Documents/Log Bot/Log Bot/Commands/thekisstally.txt')
            }
        }*/
        var kissAmount = fs.readFileSync('C:/Users/Albert/Documents/Log Bot/Log Bot/Commands/thekisstally.txt', 'utf8');
        if(!args){
            kissAmount++
            fs.writeFileSync('C:/Users/Albert/Documents/Log Bot/Log Bot/Commands/thekisstally.txt', kissAmount);
            message.channel.send(kissAmount);
        }
        if(args[0] === "read"){
            message.channel.send(kissAmount);
        }
        //xd
	},
};