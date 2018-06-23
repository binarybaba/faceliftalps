// /userController.js
var angular = window.angular;
var app = angular.module('RandomApp');
app.controller('userController', function userController($scope, UserF) {
    $scope.users = [];
    UserF.getUsers()
        .then(function storeUsers(res) {
            $scope.users = res.data.data;
        });
});
