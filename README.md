# Salazar, a customizable elegant bot for Discord <img width="140px" align="right" src="https://cdn.discordapp.com/attachments/953884728983945259/975703192350359562/salazarBetaCertol.png"/>

This is the BETA version, which uses the current version of Node.js (18.0.0) with the use and implementation of the "fetch" function to use together with API's. The purpose of this bot is to be fully customizable, easy to access, easy to implement and educational.

---

Salazar emerged as an alternative to the classic pre-customized BOT's offered on the internet today, in order to be intuitive so that anyone, regardless of their degree of programming experience, can customize and make it look their own. Salazar was the name given to the project that makes the source code available in TypeScript for further studies and pertinent customizations. The name was chosen due to the creator's personal tastes.

All updates will be notified and duly amended in this documentation for a complete reading of the full operation of this BOT. If you are interested in contributing, feel free, your point of view and your implementations are essential for the vital functioning of the project.

If you want to easily add this package to your project run:
```
npm i salazar-beta
```

If you don't already have TypeScript and "ts-node" installed, run the following commands:
```
npm install -g typescript

npm install -g ts-node
```
These installations are necessary for our system to function properly.

---

### Basic installation

The source code has a complete implementation of libraries responsible for connecting the code with the Discord platform. First of all, it is necessary that you create your personal bot, and thus, generate a token for its access. To access the "Discord Developer Portal" <a href="https://discord.com/developers/docs/intro">click here</a>. To read a little more about specific functions of the "discord.js" used in this project <a href="https://discord.js.org/#/">click here</a>.

The main file that will have the role as the "heart" of our project will be "index.ts", with imports referring to "discord.js" and "dotenv" (responsible for creating a ".env" configuration file that will contain our previously created BOT access token).

Before starting your implementations with the BOT, make sure your generated token is correct. To do this, change it by adding your token in the ".env" file and start your BOT with the command "ts-node index.ts" in the terminal. Test some Discord command in which your BOT was added, such as "!gato" to see a photo of a cat returned in the message field.

Now that you are sure that your BOT is working perfectly, we can move on to full customization and customization.

#

### Code understanding

For any code study, it is vital that we have a full understanding of how the code works, and for that, this area is dedicated to a study of the source code.

Initially, we must emphasize the need for imports provided by other libraries, in order to facilitate our daily life in relation to the development of BOTs, so we have some imports seen at the beginning of our code, followed by a call of a function responsible for the validation of our token (the BOT token created with Discord). Until the first function export we have initial settings for validation of our platform. With this, as soon as the BOT is working properly, we will see a message in our chat alerting its correct operation and connection to the platform.

* The export of this function named "http" will be responsible for validating commands and returns within Discord, so all code referring to the return with some message, reaction or something like that will be done within this function.

The "discord.js" library already provides functions related to the BOT's interaction with Discord, such as creating messages for verification, or returning messages through direct responses. We can see that when a message is created, it is checked with "client.on('messageCreate', (message))", and so we can assign a series of commands to return or reply.

The reply of some message can be done with "message.reply({content: reply})" in which "reply" is a variable with some specific content, as well as it could be a simple sentence too.

Finally, we have the BOT login with "client.login(process.env.TOKEN)" which verifies our previously provided token.

Now that we understand the basics of how our code works, initialization steps and first interactions with the user, we can start studying the use of web APIs, pre-defined commands or different functions.

#

### Web API implementations

For each API used, a specialized file was created to better organize and compose our BOT. For this, I will cite as an example the file "quotes.ts", responsible for returning a user-friendly random phrase.

At the beginning we have the import of a library called "cross-fetch", which will be responsible for facilitating our verification process and returning an API, exporting an async function called "quote", which will return the content of a JSON via the web , that is, the JSON of our API that can be verified in the link by <a href="https://positive-vibes-api.herokuapp.com/quotes/random">clicking here</a>.

As soon as the return is done successfully, we will store the complete JSON content in a variable, which will later be "wrapped" and filtered so that we only have the content of a specific column or attribute, allowing for a more pleasant interface for the user.

This same variable will be returned, and this function will be called in our "index.ts" every time it is verified that the message "!frase" has been sent in our Discord.

* It is important to point out that this version of Salazar uses the current version of Node.js, so the "fetch" function is already pre-implemented for using web APIs, so it is vital that if you use a configuration with the version LTS use the final official version of Salazar. The BETA version aims to make use of new features made available by the community.

Finally, in our "index.ts" we have the import and call of the "quote" function, with the creation of a "Waiter" class (essential for using async functions), and then the return of the message with its content being the variable that received the return from our web API.

---

Every command and every use of a web API can be easily verified, thus facilitating our customization. As time goes by, new updates will be released, so it's vital that you contribute to our community. Thank you very much, and good use 🧙!

---

<img alt="GitHub followers" src="https://img.shields.io/github/followers/lanjoni?style=social"> ⠀<img alt="Twitch Status" src="https://img.shields.io/twitch/status/holly1v4?style=social"> ⠀<img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/gutolanjoni?style=social">
