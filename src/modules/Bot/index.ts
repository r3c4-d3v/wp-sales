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

        this.#configuration = {
            puppeteer: {
                args: ['--no-sandbox']
            },
            authStrategy: new LocalAuth()
        }

        this.#client = new Client(this.#configuration);
    }

    initialize() {
        this.#client.on('qr', (qr: any) => {
            console.log(qr)
            qrcode.generate(qr, { small: true })
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
