module.exports = {
    name: 'reactionRole',
    description: 'Sets up a reaction role message!',
    async execute(message, args, Discord, client){
        const channel = '953884728983945259';
        const javaScript = message.guild.roles.cache.find(role => role.name === "JavaScript");

        const javaScript = '👍';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTilte('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!');

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(javaScript);
    }
}