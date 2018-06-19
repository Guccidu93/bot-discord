const discord = require("discord.js");
const bonjour = "oui";
const clientDiscord = new discord.Client();
const PREFIX = "";

clientDiscord.on("ready", () => {
	console.log("A votre service");
});


clientDiscord.on("message", message => {
		if(message.content === "Chaton") {
			message.reply("I <3 Cats!!!");
			//message.channel.send("I <3 Cats");
		}
		if(bonjour === "oui") {
			var interval = setInterval (function () {
				message.channel.send("Trop Mignon")
			}, 120000);
		}
	
});

clientDiscord.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur mon serveur ' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
});

/*
clientDiscord.on("guildMemberAdd", member => {
	member.guild.channels.find("name", "general").send("Bienvenue ${member.user.username}")
});	

clientDiscord.on("guildMemberRemove", member => {
	member.guild.channels.find("name", "general").send("Bye ${member.user.username}")
});	

clientDiscord.on("guildMemberAdd", member => {
		var role = member.guild.roles.find("name", "User");
		member.addRole(role)
		member.guild.channes.send("***" + member.user.username + "**, a joint le server!");
});
*/
clientDiscord.login("NDU4NjM5NjEwNTU4NTQ1OTM3.DgqlBw.IfoJCWb3YUKDyvTKIXH1YM0W18s");