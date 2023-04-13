import 'dotenv/config';
import { 
    Client,
    GatewayIntentBits
} from 'discord.js';
import { Configuration, OpenAIApi } from 'openai';

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,

] 
});

const config = new Configuration({
    apiKey: process.env.API_KEY
}) 

const openai = new OpenAIApi(config);

client.on('ready', () => { 
    console.log('Ready!');
});

client.on('messageCreate', async (message) => {
   if(message.author.bot) return;
   if(message.channel.id !== process.env.CHANNEL_ID) return;
   if(message.content.startsWith('!')) return;

   let conversationLog: Array<any> = [{ role: 'system', content: "You are a friendly chatbot"}]

   await message.channel.sendTyping();

   let prevMessages = await message.channel.messages.fetch({ limit: 15 })
   prevMessages.reverse()

   prevMessages.forEach((msg) => {
       if(msg.author.bot) return;
       if(msg.author.id !== message.author.id) return;
         conversationLog.push({ 
            role: 'user', content: msg.content 
        })

    })

   conversationLog.push({ 
    role: 'user', content: message.content
    })

    const result: any = await openai
        .createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: conversationLog,
    })

    message.reply(result.data.choices[0].message);
})
client.login(process.env.TOKEN);