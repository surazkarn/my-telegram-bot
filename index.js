const {Telegraf} = require('telegraf');

let internships = `

`;

const bot = new Telegraf('');

// http://t.me/suraz_ka_bot
bot.start((ctx) => ctx.reply('Welcome to new bot from suraz'));
bot.command('internships' , (ctx) => ctx.reply(interships))
bot.launch();