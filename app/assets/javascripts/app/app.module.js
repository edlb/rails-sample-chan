(function() {
  'use strict';

  module.exports = require('angular').module('app', [
    require('rx-angular'),
    require('./services/_index')
  ])
  .controller('AppController', require('./app'))
  .name;
})();
