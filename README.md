# Salazar, a customizable elegant bot for Discord <img width="140px" align="right" src="https://cdn.discordapp.com/attachments/953884728983945259/975703192350359562/salazarBetaCertol.png"/>

This is the BETA version, which uses the current version of Node.js (18.0.0) with the use and implementation of the "fetch" function to use together with API's. The purpose of this bot is to be fully customizable, easy to access, easy to implement and educational.

---

Salazar emerged as an alternative to the classic pre-customized BOT's offered on the internet today, in order to be intuitive so that anyone, regardless of their degree of programming experience, can customize and make it look their own. Salazar was the name given to the project that makes the source code available in TypeScript for further studies and pertinent customizations. The name was chosen due to the creator's personal tastes.

All updates will be notified and duly amended in this documentation for a complete reading of the full operation of this BOT. If you are interested in contributing, feel free, your point of view and your implementations are essential for the vital functioning of the project.

---

### Basic installation

The source code has a complete implementation of libraries responsible for connecting the code with the Discord platform. First of all, it is necessary that you create your personal bot, and thus, generate a token for its access. To access the "Discord Developer Portal" <a href="https://discord.com/developers/docs/intro">click here</a>. To read a little more about specific functions of the "discord.js" used in this project <a href="https://discord.js.org/#/">click here</a>.

The main file that will have the role as the "heart" of our project will be "index.ts", with imports referring to "discord.js" and "dotenv" (responsible for creating a ".env" configuration file that will contain our previously created BOT access token).

Before starting your implementations with the BOT, make sure your generated token is correct. To do this, change it by adding your token in the ".env" file and start your BOT with the command "ts-node index.ts" in the terminal. Test some Discord command in which your BOT was added, such as "!gato" to see a photo of a cat returned in the message field.
