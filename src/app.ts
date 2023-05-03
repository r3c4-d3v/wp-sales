import WhatsappBot from "./modules/Bot/main";

const bot = new WhatsappBot();

bot.initialize()
    .then((): void => {
        console.log("Bot inicializado")
    })
    .catch((error: any): void => {
        console.log(error)
    });
