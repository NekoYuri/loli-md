handler = async (m, {conn}) => {
	yur = await conn.getBuffer('https://wibuteam.herokuapp.com/api/nsfw/pussy?apikey=kyouka') // tambahin api nya
	conn.sendFile(m.chat, yur, "", wm, m)
}

handler.help = ['pussy'] // yg tampil di menu
handler.command = ['pussy'] // untuk panggil perintah .yuri
handler.tags = ['nsfw'] // jangan diubah

module.exports = handler
