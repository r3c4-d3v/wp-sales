const { Client, LocalAuth } = require('whatsapp-web.js');
const OpenAIHandler = require('../Gpt/main.js');
const qrcode = require('qrcode-terminal');

class WhatsappBot {
    static #instance;

    constructor() {
        if (WhatsappBot.#instance) {
            return WhatsappBot.#instance;
        }
        WhatsappBot.#instance = this;

        const authStrategy = new LocalAuth();

        this.configuration = {
            puppeteer: {
                args: ['--no-sandbox']
            },
            authStrategy
        }

        this.client = new Client(this.configuration);
    }

    initialize() {
        this.client.on('qr', qr => {
            qrcode.generate(qr, { small: true })
        });

        this.client.on('ready', async _ => {
            // const chats = await this._client.getChats();
            // const groups = chats.filter(chat => chat.isGroup);
            // const message = 'BOT ONLINE';

            // console.log(groups[0])

            // groups.forEach(group => {
            //     this._client.sendMessage(group.id._serialized, message);
            // })
            console.log('BOT ONLINE');
        });

        this.client.on('message', async message => {
            if (/!cmd/i.test(message.body)) {
                message.reply(message.body.slice(4))
                    .catch(replyError => console.error(replyError));
            }
        });

        return this.client.initialize()
            .catch(clientError => console.error(clientError));
    }
}

module.exports = WhatsappBot;
