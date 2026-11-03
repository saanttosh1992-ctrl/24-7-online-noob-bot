const mineflayer = require('mineflayer');

function startBot() {
    console.log('Bot server join karne ki koshish kar raha hai...');
    
    const bot = mineflayer.createBot({
        host: 'kakasmp7.aternos.me',
        port: 58848,
        username: 'AternosBot247',
        version: false
    });

    bot.on('spawn', () => {
        console.log('✔ Bot successfully server mein join ho gaya!');
        
        setInterval(() => {
            if (!bot || !bot.entity) return;
            bot.setControlState('jump', true);
            setTimeout(() => {
                bot.setControlState('jump', false);
            }, 500);
        }, 5000);
    });

    bot.on('error', (err) => {
        console.log('Error:', err.message);
    });

    bot.on('end', () => {
        console.log('Bot disconnect hua. 10 sec baad fir join karega...');
        setTimeout(startBot, 10000);
    });
}

startBot();
