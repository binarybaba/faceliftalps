// /build/userController.js

/**
 * Controls the user
 * @param $scope
 * @param UserF
 */
let userController = ($scope, UserF) => {
  $scope.users = [];
  UserF.getUsers().then(res => $scope.users = res.data.data);
};
userController.$inject = ['$scope', 'userFactory'];

export default userController;

