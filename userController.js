// /userController.js
app.controller("userController", function($scope, UserF){
    $scope.users = [];
    UserF.getUsers()
        .then(function(res) {
            console.log(res.data);
            $scope.users = res.data.data;
        })
});
