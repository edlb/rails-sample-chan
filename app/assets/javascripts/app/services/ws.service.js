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
      ws.provider = new $window.WebSocketRails('localhost:3000/websocket');
      ws.bind = ws.provider.bind;
      ws.trigger = ws.provider.trigger;
    }
  }
})();
