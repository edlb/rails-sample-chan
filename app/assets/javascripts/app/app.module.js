(function() {
  'use strict';

  module.exports = require('angular').module('app', [
    require('./services/_index')
  ])
  .controller('AppController', require('./app'))
  .name;
})();
