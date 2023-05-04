import WhatsappBot from "./modules/Bot";

const bot = new WhatsappBot();

bot.initialize()
    .catch((error: any): void => console.log(error))
    .finally((): void => console.log("Bot inicializado"));
