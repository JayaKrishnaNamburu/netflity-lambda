const mongoose = require('mongoose');

function user(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: 'Thanks for visiting' })
  })
}

module.exports.handler = user;