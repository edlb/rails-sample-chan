(function() {
  'use strict';

  module.exports = userService;

  /* @ngInject */
  function userService(ws) {
    // Values

    // Service
    var user = {
      showFromSession: showFromSession,
      showOrCreate: showOrCreate
    };
    return user;

    // Functions
    function showFromSession(success, failure) {
      return ws.trigger('users.show_from_session', {}, success, failure);
    }
    function showOrCreate(name, success, failure) {
      return ws.trigger('users.show_or_create', { name: name }, success, failure);
    }
  }
})();
