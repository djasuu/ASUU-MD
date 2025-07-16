const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'timoth',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/djasuu/ASUU-MD',
    OWNER_NAME : process.env.OWNER_NAME || "timnasa-tech",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255784766591",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    AUTO_REACT: process.env.AUTO_REACTION || "no",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/659yo1.jpg",  
    URL2: process.env.URL2 || "https://files.catbox.moe/659yo1.jpg",
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'on',              
    CHAT_BOT: process.env.CHAT_BOT || "on",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'Your Status Seen By lezkush lobot',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'yes',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    CHATBOT2 : process.env.CHATBOT || 'yes',  
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
    CAPTION : process.env.CAPTION || "ᴅᴊ ᴀsᴜᴜ_ғᴏᴜɴᴅᴀᴛɪᴏɴ",
    BOT : process.env.BOT_NAME || 'ᴅᴊ ᴀsᴜᴜ_ғᴏᴜɴᴅᴀᴛɪᴏɴ',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Dar_Es_Salam", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '2' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTI_CALL: process.env.ANTI_CALL || 'yes', 
    ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',             
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
