// /userFactory.js
var angular = window.angular;
var app = angular.module("RandomApp");
app.factory("UserF", function($http) {
    var UserF = {};
    UserF.getUsers = function(){
        return $http({
            method: 'GET',
            url: 'https://www.reqres.in/api/users',
        })
    };
    return UserF;
});