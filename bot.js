const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'kakasmp7.aternos.me',
    port: 58848,
    username: 'AternosBot247',
    version: false
});

bot.on('spawn', () => {
    console.log('Bot successfully server me ghus gaya hai!');
    
    // Har 5 second me jump karega taaki kick na ho
    setInterval(() => {
        if (!bot || !bot.entity) return;
        bot.setControlState('jump', true);
        setTimeout(() => {
            bot.setControlState('jump', false);
        }, 500);
    }, 5000);
});

bot.on('error', (err) => {
    console.log('Error:', err);
});

bot.on('end', () => {
    console.log('Bot disconnect ho gaya, dobara join kar raha hai...');
    setTimeout(() => process.exit(0), 5000);
});
