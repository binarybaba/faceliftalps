// /userController.js

(function(){
  var angular = window.angular;
  var app = angular.module('RandomApp');

  /**
   * Controls the user
   * @param $scope
   * @param UserF
   */
  let userController = ($scope, UserF) => {
    $scope.users = [];
    UserF.getUsers().then(res => $scope.users = res.data.data);
  };
  userController.$inject = ['$scope', 'UserF'];

  app.controller('userController', userController);

})();
