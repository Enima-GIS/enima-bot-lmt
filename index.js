const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log("bot opérationnel");
});

client.on("messageCreate", message => {
    if(message.author.bot) return;
    console.log(message);
    if(message.content === "/help"){
        message.reply("voici toute les commandes possible \n 1° avec / \n 2° avec /");
    }
    else if (message.content === "/mention"){
        message.reply("mince j'ai été trouver :eyes:");
    }
    else if(message.content === "/vrivrivri"){
        message.reply("@everyone");
    }
    else if (message.content === "/video"){
        message.reply("Salut tout le monde, la dernière vidéo de jivreuh est sorti!!!! Go la voir @everyone :heart: \n https://www.youtube.com/shorts/sFkCvzXWNEM")
    }
    else if(message.content === "/Enima"){
        message.reply("@Enima-GIS#2819 on a besoin de toi la")
    }
});




client.login("MTAwNzI0ODM3MDIzMTkzOTExNA.G8VYVC.IbFWrph8npGdIW_uN8wljDjF78g5xuosDlJhR0");