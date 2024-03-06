const {Client, RichEmbed } = require('discord.js')
const Discord = require('discord.js');
 
const bot = new Client()


const version = '1.00'



const util = require('minecraft-server-util');
 
const token = 'NzE3MDc5OTA2NTQyMTU3OTI2.XtVGtA.0sujPva6g781rmSkHSzSz7rwzHY'
var on
var status = 'Offline'
var refresh = 0
const PREFIX = '!'
const port = '25565'
const ip = 'windows11s.mcserv.me'
const Offline = new Discord.MessageEmbed()
.setColor('#f5bf42')
.setTitle('The Server is Currently Offline')


const IP = new Discord.MessageEmbed()
.setColor('#f5bf42')
.setTitle('The IP is '+ ip)

const Help = new Discord.MessageEmbed()
                .setColor('#f5bf42')
                .setTitle('Help')
                .addFields(
                    {name: 'Server IP', value: '!IP'},
                    {name: 'Server Status', value: '!Mc'},
                    {name: 'Discord', value: '!Discord'},
                    {name: 'Credits', value: '!Credits'},
                    {name: 'Version', value: '!Version'},
                   
                )
                const credits = new Discord.MessageEmbed()
                .setColor('#f5bf42')
                .setTitle('Credits')
                .addFields(
                    {name: 'BlockH123', value: 'Making the Server'},
                    {name: 'Witness My Superior Intellect', value: 'making the PFP'},
                    {name: 'Sly-Bot', value: 'Coding and hosting the bot'},
                    {name: 'Reverse', value: 'Making the discord server'},
                )


 
bot.on('ready', () =>{
    console.log('Udar has come online.')
    bot.user.setActivity("Server is " + status ); 

})




 
bot.on('message', message =>{
    
  
    console.log(refresh)
    refresh += 1;
    if(refresh == 5){
        util.status(ip, { port: parseInt(port)}) 
        .then((response) => {
          status = 'Online'
          bot.user.setActivity("The Server is " + status ); 
         
        }).catch ((error) =>{
            
           
            status = 'Offline'
            bot.user.setActivity("The Server is " + status ); 
            throw error;
        })
     refresh = 0;
    }
    

    if(message.content == 'have you commited heinous warcrimes'){
        message.channel.send('yes i have but its too long a story to say')
        setTimeout(function(){ 
            message.channel.send('you know what')
            setTimeout(function(){ 
                message.channel.send('im gonna tell you anyway')
                setTimeout(function(){ 
                    message.channel.send('it was nazi germany')
                    setTimeout(function(){ 
                        message.channel.send('and then i saw your mom')
                        setTimeout(function(){ 
                            message.channel.send('haha jk')
                            setTimeout(function(){ 
                                message.channel.send('unless?')
                                setTimeout(function(){ 
                                    message.channel.send('but no really i tortured my squadmates because they spammed my command in a servern')
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
               
            }, 2000);
            
        }, 3000);
        
    }
	let args = message.content.substring(PREFIX.length).split(" ");
      
 
    switch (args[0]) { 
        case 'mc':
            
            
            
			//console.log(util.status(ip, port))
			
            util.status(ip, { port: parseInt(port)}) 
            .then((response) => {
             
              status = 'Online'

                const embed = new Discord.MessageEmbed()
                .setColor('#f5bf42')
                .setTitle('Mc server status')
                .addFields(
                    {name: 'Server IP', value: response.host},
                    {name: 'Online Players', value: response.onlinePlayers},
                    {name: 'Max Players', value: response.maxPlayers},
                    {name: 'Version', value: response.version},
         
                 
                )
                if (response.onlinePlayers == 1){
                    bot.user.setActivity("The Server is " + status + " There is " + response.onlinePlayers + " Online"); 
                 }else if(response.onlinePlayers == 0){
                    bot.user.setActivity("The Server is " + status + " There are No Online");
                 }
                 else{
                    bot.user.setActivity("The Server is " + status + " There are " + response.onlinePlayers + " Online"); 
                 }
	            
	

                message.channel.send(embed);
                console.log(response)
               

            }).catch ((error) =>{
                
               
                
                message.channel.send(Offline);
                status = 'Offline'
                bot.user.setActivity("The Server is " + status ); 
                throw error;
            })
            
        break;
        
        case 'Mc':
            
           
            
			
			
            util.status(ip, { port: parseInt(port)}) 
            .then((response) => {
                

              

                const embed = new Discord.MessageEmbed()
                .setColor('#f5bf42')
                .setTitle('Mc server status')
                .addFields(
                    {name: 'Server IP', value: response.host},
                    {name: 'Online Players', value: response.onlinePlayers},
                    {name: 'Max Players', value: response.maxPlayers},
                    {name: 'Version', value: response.version},

                )
	      
	            
                if (response.onlinePlayers == 1){
                    bot.user.setActivity("The Server is " + status + " There is " + response.onlinePlayers + " Online"); 
                 }else if(response.onlinePlayers == 0){
                    bot.user.setActivity("The Server is " + status + " There are No Online");
                 }
                 else{
                    bot.user.setActivity("The Server is " + status + " There are " + response.onlinePlayers + " Online"); 
                 }

                message.channel.send(embed);
                console.log(response)
               

            }).catch ((error) =>{
                message.channel.send(Offline);
                status = 'Offline'
                bot.user.setActivity("The Server is " + status ); 
                throw error;
            })
            
        break;

        case 'MC':
            
            
            
			//console.log(util.status(ip, port))
			
            util.status(ip, { port: parseInt(port)}) 
            .then((response) => {
                

              

                const embed = new Discord.MessageEmbed()
                .setColor('#f5bf42')
                .setTitle('Mc server status')
                .addFields(
                    {name: 'Server IP', value: response.host},
                    {name: 'Online Players', value: response.onlinePlayers},
                    {name: 'Max Players', value: response.maxPlayers},
                    {name: 'Version', value: response.version},

                )

	            
                if (response.onlinePlayers == 1){
                    bot.user.setActivity("The Server is " + status + " There is " + response.onlinePlayers + " Online"); 
                 }else if(response.onlinePlayers == 0){
                    bot.user.setActivity("The Server is " + status + " There are No Online");
                 }
                 else{
                    bot.user.setActivity("The Server is " + status + " There are " + response.onlinePlayers + " Online"); 
                 }

                message.channel.send(embed);
                console.log(response)
               

            }).catch ((error) =>{
                message.channel.send(Offline);
                status = 'Offline'
                bot.user.setActivity("The Server is " + status ); 
                throw error;
            })
            
        break;

        case 'Ip':
            message.channel.send(IP);
            
            break;

            case 'IP':
                message.channel.send(IP);
                break;

                case 'ip':
                    message.channel.send(IP);
                    break;

        case 'Discord':
            message.channel.send('The Discord is https://discord.gg/VCAr5bp4Es');
            break;

            case 'discord':
            message.channel.send('The Discord is https://discord.gg/VCAr5bp4Es');
            break;
            
            case 'Help':
                message.author.send(Help);
                message.react('✅');
               
                break;

                case 'help':
                    message.author.send(Help);
                    message.react('✅');
                    break;
                    case 'Credits':
                        message.channel.send(credits);
                        break;
                        case 'credits':
                    message.channel.send(credits);
                    break;
                    case 'Version':
                        message.channel.send('The Version is ' + version);
                       
                        break;

                        case 'version':
                            message.channel.send('The Version is ' + version);
                           
                            break;


                    




          
    }
 
   
 

 
  

	
 
})
 
bot.login(token)

