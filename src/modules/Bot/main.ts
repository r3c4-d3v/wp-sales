const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

export default class WhatsappBot {
    static #instance: any;
    #configuration: any;
    #client;

    constructor() {
        if (WhatsappBot.#instance) {
            return WhatsappBot.#instance;
        }
        WhatsappBot.#instance = this;

        const authStrategy = new LocalAuth();

        this.#configuration = {
            puppeteer: {
                args: ['--no-sandbox']
            },
            authStrategy
        }

        this.#client = new Client(this.#configuration);
    }

    initialize() {
        this.#client.on('qr', (qr: any) => {
            qrcode.generate(qr, { small: true })
        });

        this.#client.on('ready', async (): Promise<void> => {
            console.log('BOT ONLINE');
        });

        this.#client.on('message', async (message: any) => {
            if (/!cmd/i.test(message.body)) {
                message.reply(message.body.slice(4))
                    .catch((error: any) => console.error(error));
            }
        });

        return this.#client.initialize()
            .catch((error: any) => console.error(error));
    }
}
