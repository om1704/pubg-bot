const Discord = require('discord.js');
const bot = new Discord.Client();


const TOKEN = 'NjQ5ODg4NDQ5MDEyMzAxODMw.XeShVw.3yll7WpbH0jphqeTgllGD85inZA';

const PREFIX = '!'

bot.once('ready', ()=>{
    console.log('THE BOT IS ONLINE!')
});

bot.on('message', message=>{
    if(message.content === "hello"){
        message.reply('Chaddi ghaal liyoch ki nai?')
    }
    else if(message.content == "@everyone"){
        message.reply('Vaachan bath ranna')
    }
});



bot.login(TOKEN);

