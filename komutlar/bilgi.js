const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const codemarefi= new Discord.RichEmbed()
    .setColor('GOLD')
      .addField('<a:tik:737233726492246057>** Komutlar (5)**', '`ban-limit`, `kullanıcı-bilgi`, `ban`, `kilit`, `idban-sorgula`,')
      .addField('<a:tik:737233726492246057>** Komutlar (5)**', '`capslock-engelleme`, `küfür-engel`, `reklam-engel`, `reklamtaraması`, `rol-k`')
      .addField('<a:tik:737233726492246057>** Komutlar (5)**', '`unbanall`,  `unbanid`, `temizle`, `sohbet-kapat`, `sohbet-aç`, `davet`')
    .setFooter(``, client.user.avatarURL)
    message.channel.send(codemarefi).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım Menüsü',
      description: 'bilgi',
};