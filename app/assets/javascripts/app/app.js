(function() {
  'use strict';

  module.exports = AppController;

  /* @ngInject */
  function AppController($scope, message, user, ws) {
    var vm = this;

    // Attributes & methods
    vm.currentMessage = {};
    vm.currentUser = {};
    vm.messageCreate = messageCreate;
    vm.join = join;

    activate();

    // Functions
    function activate() {
      ws.init();
      user.showFromSession(function(currentUser) {
        joined(currentUser, true);
      }, function() {
        vm.isReady = true;
        $scope.$apply();
      });
    }
    function currentMessageInit() {
      vm.currentMessage = {
        user_id: vm.currentUser.id
      };
    }
    function messageCreate() {
      if (vm.currentMessage.content) {
        vm.currentMessage['user_id'] = vm.currentUser.id;
        message.create(vm.currentMessage, function() {
          currentMessageInit();
          $scope.$apply();
        }, function(response) {
          console.log(response);
        });
      }
    }
    function join() {
      if (vm.currentUser.name) {
        user.showOrCreate(vm.currentUser.name, function(currentUser) {
          joined(currentUser, false);
        }, function(response) {
          console.log(response);
        });
      }
    }
    function joined(currentUser, isPageLoading) {
      vm.currentUser = JSON.parse(currentUser);
      message.index(function(messages) {
        vm.messages = JSON.parse(messages);
        currentMessageInit();
        vm.currentUser.isLogged = true;
        if (isPageLoading) {
          vm.isReady = true;
        }
        $scope.$apply();
        ws.subscribe('messages').bind('message', function(message) {
          vm.messages.push(JSON.parse(message));
          $scope.$apply();
        });
      }, function(response) {
        console.log(response);
      });
    }
  }
})();
