const Discord = require('discord.js');
const bot = new Discord.Client();


const TOKEN = 'NjQ5ODg4NDQ5MDEyMzAxODMw.XeSkLg.mhSusONJRk7ZXXA8pMRuutm8lQ4';

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

