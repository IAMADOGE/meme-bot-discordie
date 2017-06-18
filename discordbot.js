var Discordie = require("discordie");
var Events = Discordie.Events;

var client = new Discordie();

client.connect({ token: "MzE5OTAxMzM5MjE3OTUyNzY4.DBHq3w.Y8OZikQDVLVIKOJHfFL6HyRidmI" });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log("                  ▌▒█           ▄▀▒▌")
  console.log("                  ▌▒▒█        ▄▀▒▒▒▐")
  console.log("                 ▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐")
  console.log("               ▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐")
  console.log("             ▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌")
  console.log("            ▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌")
  console.log("            ▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐")
  console.log("           ▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌")
  console.log("           ▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌")
  console.log("          ▌▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐")
  console.log("          ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌")
  console.log("          ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐")
  console.log("           ▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌")
  console.log("           ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐")
  console.log("            ▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌")
  console.log("              ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀")
  console.log("                ▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀")
  console.log("                   ▒▒▒▒▒▒▒▒▒▒▀▀")
  console.log("")
  console.log("Connected as: " + client.User.username)
  client.User.setGame(" With Memes | ~help"); // playing
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~help")
    e.message.channel.sendMessage("Commands:help,doge,lenny,lennypic,about,invite,uselessbot,discordserver,bigsmoke,fidgetspinner,minecraftkid. Prefix:~");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~doge")
    e.message.channel.sendMessage("http://i3.kym-cdn.com/entries/icons/facebook/000/013/564/aP2dv.jpg");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~lenny")
    e.message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~lennypic")
    e.message.channel.sendMessage("https://vignette1.wikia.nocookie.net/moistmeme/images/9/95/Lenny.png/revision/latest?cb=20150706155849");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~about")
    e.message.channel.sendMessage("Name:MemeBOT Last Updated:June 13, 2017 Made:May 31, 2017. Made Using Node.JS And Discordie. Made By D O G E ™");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~invite")
    e.message.channel.sendMessage("http://www.memebot.weebly.com/");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~discordserver")
    e.message.channel.sendMessage("https://discord.gg/Gz8tErs");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~uselessbot")
    e.message.channel.sendMessage("https://discordapp.com/api/oauth2/authorize?client_id=319680577441890304&scope=bot&permissions=0");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~fidgetspinner")
    e.message.channel.sendMessage("http://www.asseenontvandbeyond.com/assets/images/fidget-spinner-green.png");
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "~minecraftkid")
    e.message.channel.sendMessage("https://cache.popcultcha.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/i/minecraft_career_opportunities_youth_tee.png");
});
