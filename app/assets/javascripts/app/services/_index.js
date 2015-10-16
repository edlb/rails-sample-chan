(function() {
  'use strict';

  module.exports = require('angular').module('app.services', [])
  .service('message', require('./message.service'))
  .service('user', require('./user.service'))
  .service('ws', require('./ws.service'))
  .name;
})();
