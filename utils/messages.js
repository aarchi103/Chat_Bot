const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Kolkata');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
