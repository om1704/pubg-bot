const Discord = require('discord.js');
const bot = new Discord.Client();


const TOKEN = 'NjQ5ODg4NDQ5MDEyMzAxODMw.XeSkLg.mhSusONJRk7ZXXA8pMRuutm8lQ4';

const PREFIX = '!'

bot.once('ready', ()=>{
    console.log('THE BOT IS ONLINE!')
});





bot.login(TOKEN);

