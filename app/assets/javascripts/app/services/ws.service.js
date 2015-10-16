(function() {
  'use strict';

  module.exports = wsService;

  /* @ngInject */
  function wsService($window) {
    var ws = this;

    // Attributes & methods
    ws.init = init;

    // Functions
    function init() {
      ws.provider = new $window.WebSocketRails($window.location.host + '/websocket');
      ws.bind = ws.provider.bind;
      ws.subscribe = ws.provider.subscribe;
      ws.trigger = ws.provider.trigger;
    }
  }
})();
