import os from 'os'
import moment from 'moment-timezone'
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  let mentionedJid = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  let totalCommands = Object.keys(global.plugins).length
  
  // ⏳ ping
  let timestamp = speed()
  let ping = (speed() - timestamp).toFixed(2)

  // 🕓 Tiempo activo (uptime)
  let uptime = clockString(process.uptime() * 1000)

  // 🖥️ Info RAM
  let total = (os.totalmem() / 1024 / 1024).toFixed(0)
  let free = (os.freemem() / 1024 / 1024).toFixed(0)
  let used = total - free

  // 📅 Fecha y hora
  let fecha = moment.tz('America/Lima').format('DD/MM/YYYY')
  let hora = moment.tz('America/Lima').format('HH:mm:ss')
  let dia = moment.tz('America/Lima').format('dddd')

  let menu = `   ⟢ SYSTEM ONLINE: 「Denji Bot V2」

[👤] Usuario: @${mentionedJid.split('@')[0]}
[📚] Comandos: ${totalCommands}
[⚙️] Versión: ${vs}
[🛠️] Librería: ${libreria}
[🤖] Tipo: ${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub-Bot')}
[🌤️] Uptime: ${uptime}

─── SYSTEM STATUS ───
[💾] RAM Total: ${total} MB
[📈] RAM Usada: ${used} MB
[📉] RAM Libre: ${free} MB
[🌿] Ping: *${ping} ms*

─── DATE & TIME ───
[📅] Día: ${dia}
[🗓️] Fecha: ${fecha}
[⏰] Hora: ${hora}
───────────────────


*╭─────────*
*│* ⑀✬ \`𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀\`  ︴
*╰─╮*
*╭─╯*
*┊❅* 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 \`𝙴𝙲𝙾𝙽𝙾𝙼𝙸𝙰 𝙿𝙰𝚁𝙰 𝙶𝙰𝙽𝙰𝚁 𝙼𝙾𝙽𝙴𝚈\` ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#w • #work • #trabajar*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#slut • #protituirse*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#coinflip • #flip • #cf* + [cantidad] <cara/cruz>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#crime • #crimen*
    *┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#roulette • #rt* + [red/black] [cantidad]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#casino • #apostar* • *#slot* + [cantidad]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#balance • #bal • #bank* + <usuario>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#deposit • #dep • #depositar • #d* + [cantidad] | all
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#withdraw • #with • #retirar* + [cantidad] | all
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#economyinfo • #einfo*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#givecoins • #pay • #coinsgive* + [usuario] [cantidad]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#miming • #minar • #mine*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#daily • #diario*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#cofre* • *#coffer*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#weekly • #semanal*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#monthly • #mensual*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#steal • #robar • #rob* + [@mencion]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#economyboard • #eboard • #baltop* + <pagina>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#aventura • #adventure*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#curar • #heal*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#cazar • #hunt*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#fish • #pescar*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#mazmorra • #dungeon*
*╰───────────┅≡*

*╭─────────*
*│* ⑀✬ \`DOWNLOAD\`  ︴
*╰─╮*
*╭─╯*
*┊❅* 𝙲𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝙳𝚎 \`𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂\` 𝚙𝚊𝚛𝚊 𝚍𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚛 𝚊𝚛𝚌𝚑𝚒𝚟𝚘𝚜 𝚍𝚎 𝚟𝚊𝚛𝚒𝚊𝚜 𝚏𝚞𝚎𝚗𝚝𝚎𝚜 ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#tiktok • #tt* + [Link] / [busqueda]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#mediafire • #mf* + [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#mega • #mg* + [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#play • #play2* + [Cancion]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#ytmp3 • #ytmp4* [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#facebook • #fb* + [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#twitter • #x* + [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#ig • #instagram* + [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#pinterest • #pin* + [busqueda] / [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#image • #imagen* + [busqueda]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#apk • #modapk* + [busqueda]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#ytsearch • #search* + [busqueda]
*╰───────────┅≡*

*╭─────────*
*│* ⑀✬ \`GACHA\`  ︴
*╰─╮*
*╭─╯*
*┊❅* Comandos de *Gacha* para reclamar y colecciónar personajes. ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#buycharacter • #buychar • #buyc* + [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#charimage • #waifuimage • #cimage • #wimage* + [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#charinfo • #winfo • #waifuinfo* + [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#claim • #c • #reclamar* + {citar personaje}
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#delclaimmsg*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#deletewaifu • #delwaifu • #delchar* + [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#favoritetop • #favtop*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#gachainfo • #ginfo • #infogacha*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#giveallharem* + [@usuario]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#givechar • #givewaifu • #regalar* + [@usuario] [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#robwaifu • #robarwaifu* + [@usuario]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#harem • #waifus • #claims* + <@usuario>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#haremshop • #tiendawaifus • #wshop* + <Pagina>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#removesale • #removerventa* + [precio] [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#rollwaifu • #rw • #roll*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#sell • #vender* + [precio] [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#serieinfo • #ainfo • #animeinfo* + [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#serielist • #slist • #animelist*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setclaimmsg • #setclaim* + [mensaje]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#trade • #intercambiar* + [Tu personaje] / [Personaje 2]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#vote • #votar* + [nombre]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#waifusboard • #waifustop • #topwaifus • #wtop* + [número]
*╰───────────┅≡*

*╭─────────*
*│* ⑀✬ \`SOCKETS\`  ︴
*╰─╮*
*╭─╯*
*┊❅* Comandos para registrar tu propio Bot. ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#qr • #code*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#bots • #botlist*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#status • #estado*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#p • #ping*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#join* + [Invitacion]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#leave • #salir*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#logout*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setpfp • #setimage*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setstatus* + [estado]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setusername* + [nombre]
*╰───────────┅≡*

*╭─────────*
*│* ⑀✬ \`UTILITIES\`  ︴
*╰─╮*
*╭─╯*
*┊❅* Comandos de *Útilidades*. ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#help • #menu*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#sc • #script*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#reporte • #reportar*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#sug • #suggest*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#calcular • #cal*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#delmeta*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#getpic • #pfp* + [@usuario]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#say* + [texto]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setmeta* + [autor] | [pack]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#sticker • #s • #wm* + {citar una imagen/video}
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#toimg • #img* + {citar sticker}
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#brat • #bratv • #qc • #emojimix*︎
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#gitclone* + [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#enhance • #remini • #hd*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#letra • #style*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#read • #readviewonce*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#ss • #ssweb*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#translate • #traducir • #trad*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#ia • #gemini*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#tourl • #catbox*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#wiki • #wikipedia*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#dalle • #flux*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#npmdl • #nmpjs*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#google*
*╰───────────┅≡*

*╭─────────*
*│* ⑀✬ \`PERFIL\`  ︴
*╰─╮*
*╭─╯*
*┊❅* Comandos de *Perfil* para ver y configurar tu perfil. ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#leaderboard • #lboard • #top* + <Paginá>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#level • #lvl* + <@Mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#marry • #casarse* + <@Mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#profile* + <@Mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setbirth* + [fecha]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setdescription • #setdesc* + [Descripcion]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setgenre* + Hombre | Mujer
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#delgenre • #delgenero*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#delbirth* + [fecha]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#divorce*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setfavourite • #setfav* + [Personaje]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#prem • #vip*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#deldescription • #deldesc*
*╰───────────┅≡*
 
*╭─────────*
*│* ⑀✬ \`GROUPS\`  ︴
*╰─╮*
*╭─╯*
*┊❅* Comandos para *Administradores* de grupos. ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#tag • #hidetag • #invocar • #tagall* + [mensaje]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#detect • #alertas* + [enable/disable]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#antilink • #antienlace* + [enable/disable]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#bot* + [enable/disable]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#close • #cerrar*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#demote* + <@usuario> | {mencion}
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#economy* [enable/disable]  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#gacha* [enable/disable]  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#welcome • #bienvenida* [enable/disable]  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setbye* [texto]  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setprimary* [@bot]  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#setwelcome* [texto]  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#kick <@usuario>* | {mencion}  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#nsfw* [enable/disable]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#onlyadmin* [enable/disable]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#open* • #abrir*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#promote <@usuario>* | {mencion}  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#add • #añadir* • #agregar {número}
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#admins • admin* [texto]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#restablecer • #revoke*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#addwarn • #warn* <@usuario> | {mencion}
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#unwarn • #delwarn* <@usuario> | {mencion}
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#advlist • #listadv*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#inactivos • #kickinactivos*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#listnum • #kicknum* [texto]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#gpbanner • #groupimg*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#gpname • #groupname* [texto]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#gpdesc • #groupdesc* [texto]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#del • #delete* {citar un mensaje}
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#linea • #listonline*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#gp • #infogrupo*
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#link*
*╰───────────┅≡*

*╭─────────*
*│* ⑀✬ \`ANIME\`  ︴
*╰─╮*
*╭─╯*
*┊❅* Comandos de reacciones de anime. ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#angry • #enojado* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#bath • #bañarse* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#bite • #morder* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#bleh • #lengua* <mencion 
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#blush • #sonrojarse* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#bored • #aburrido* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#clap • #aplaudir* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#coffee • #cafe • #café* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#cry • #llorar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#cuddle • #acurrucarse* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#dance • #bailar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#dramatic • #drama* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#drunk • #borracho* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#eat • #comer* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#facepalm • #palmada* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#happy • #feliz* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#hug • #abrazar *<mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#impregnate • #preg • #preñar • #embarazar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#kill • #matar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#kiss • #muak* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#kisscheek • #beso* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#laugh • #reirse* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#lick • #lamer* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#love • #amor • #enamorado • #enamorada* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#pat • #palmadita • #palmada* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#poke • #picar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#pout • #pucheros* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#punch • #pegar • #golpear* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#run • #correr* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#sad • #triste* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#scared • #asustado • #asustada* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#seduce • #seducir* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#shy • #timido • #timida* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#slap • #bofetada* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#sleep • #dormir* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#smoke • #fumar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#spit • #escupir* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#step • #pisar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#think • #pensar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#walk • #caminar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#wink • #guiñar* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#cringe • #avergonzarse* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#smug • #presumir* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#smile • #sonreir* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#highfive • #5* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#bully • #bullying* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#handhold • #mano* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#wave • #ola • #hola* <mencion>
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#waifu  
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#ppcouple • #ppcp
*╰───────────┅≡*

*╭─────────*
*│* ⑀✬ \`NSFW\`  ︴
*╰─╮*
*╭─╯*
*┊❅*  ❖
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#danbooru • #dbooru* + [Tags]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#gelbooru • #gbooru* + [Tags]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#rule34 • #r34* + [Tags]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#xvideos •#xvideosdl* + [Link]
*┊* ᠙᳞✿᮫ְׅ᳝࣪᪲࣪🕸️ *#xnxx •#xnxxdl* + [Link]
*╰───────────┅≡*ׅ
`

  await conn.sendMessage(m.chat, { 
    text: menu,
    contextInfo: {
      mentionedJid: [mentionedJid],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        serverMessageId: '',
        newsletterName: channelRD.name
      },
      externalAdReply: {
        title: botname,
        body: textbot,
        mediaType: 1,
        mediaUrl: redes,
        sourceUrl: redes,
        thumbnailUrl: 'https://i.pinimg.com/originals/e0/98/ba/e098bac73c8ae72243f66c7bf712045a.jpg',
        showAdAttribution: false,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}