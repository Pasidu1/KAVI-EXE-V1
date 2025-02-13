const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KAVI-EXE=xJITVD4D#PD9eUpyhJmjYGq87u24lEVQkNGZixsR5gPSAcwDwnPk",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
MODE: process.env.MODE || "private",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`SEEN YOUR STATUS BY FRONEXT-MD🗿🍷`",
ANTI_CALL: process.env.ANTI_CALL || "false",
};
