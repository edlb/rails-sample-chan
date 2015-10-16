(function() {
  'use strict';

  module.exports = require('angular').module('app.services', [
    require('rx-angular')
  ])
  .service('message', require('./message.service'))
  .service('user', require('./user.service'))
  .service('ws', require('./ws.service'))
  .name;
})();
