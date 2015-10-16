(function() {
  'use strict';

  module.exports = messageService;

  /* @ngInject */
  function messageService(ws) {
    // Values

    // Service
    var message = {
      create: create,
      index: index
    };
    return message;

    // Functions
    function create(message, success, failure) {
      return ws.trigger('messages.create', { message: message }, success, failure);
    }
    function index(success, failure) {
      return ws.trigger('messages.index', {}, success, failure);
    }
  }
})();
