![Node build](https://github.com/eritislami/evobot/actions/workflows/node.yml/badge.svg)
![Docker build](https://github.com/eritislami/evobot/actions/workflows/docker.yml/badge.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# 🤖 ChatGPT3.5 - Discord Bot 
>  ChatGPT3.5 - Discord Bot is Discord Music Bot built with TypeScript, [discordjs](https://discordjs.guide) & OpenaiAPI 

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**  
   1.1. Enable 'Message Content Intent' in Discord Developer Portal
2. Node.js 18.14.0 or newer

## 🚀 Getting Started

```sh
1. git clone 
--
2. pnpm install OR npm install 
```

After installation finishes follow configuration instructions then run `npm run tsc` to compile and then `npm run start` to start the bot.

## ⚙️ Configuration

Make a `.env` and fill out the values:

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```env
  TOKEN=
  API_KEY=
  CHANNEL_ID=
```

## 🤝
**Notes**

🎇 - Remember that the CHANNEL_ID is only channel where the bot can interact with
