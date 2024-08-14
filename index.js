const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize client with local authentication
const client = new Client({
    authStrategy: new LocalAuth()
});

// Generate and display QR code for authentication
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('QR Code generated. Scan it with your WhatsApp app.');
});

// When the client is ready
client.on('ready', () => {
    console.log('Client is ready!');
});

// Listen for incoming messages
client.on('message', message => {
    console.log(`Message from ${message.from}: ${message.body}`);

    // Example: respond to a specific message
    if (message.body === 'Hello') {
        message.reply('Hi there!');
    }
});

// Start the client
client.initialize();
