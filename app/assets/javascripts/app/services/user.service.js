(function() {
  'use strict';

  module.exports = userService;

  /* @ngInject */
  function userService($cookies, ws) {
    // Values

    // Service
    var user = {
      showFromSession: showFromSession,
      showOrCreate: showOrCreate
    };
    return user;

    // Functions
    function showFromSession(success, failure) {
      var currentUserId = $cookies.get('current_user_id');
      if (currentUserId !== undefined) {
        return ws.trigger('users.show', { id: currentUserId }, function(currentUser) {
          $cookies.put('current_user_id', JSON.parse(currentUser).id);
          success(currentUser);
        }, failure);
      } else {
        return failure(true);
      }
    }
    function showOrCreate(name, success, failure) {
      return ws.trigger('users.show_or_create', { name: name }, function(currentUser) {
        $cookies.put('current_user_id', JSON.parse(currentUser).id);
        success(currentUser);
      }, failure);
    }
  }
})();
