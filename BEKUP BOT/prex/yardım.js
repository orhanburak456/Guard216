const dc = require("discord.js")

exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
  .setTitle("Yedek Sistemi")
  .setDescription(`
  
  Sunucularınızın yedeklerini oluşturun ve yükleyin
  
  **Komutlar**
  **[_yedek-al](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Alırsınız.
  **[_yedek-yükle](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedeği Yüklersiniz.
  **[_yedek-sil](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Silersiniz.
  **[_yedek-liste](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Listenize Bakarsınız.
  **[_yedek-bilgi](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Belirttiğiniz Yedeğin Özelliklerine Bakarsınız.
  `)
  .setImage("https://images-ext-2.discordapp.net/external/xNgPIOQ-mlPh1XHEVF4Nq5hgruoFeTOlBlnRvyMsLxU/https/media.discordapp.net/attachments/795699180768854076/808222020180508713/350kb.gif")
  .setColor("GREEN")
  message.channel.send(embed)
  }