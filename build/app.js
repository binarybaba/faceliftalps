// /build/app.js
import angular from 'angular';

import userController from './userController';
import userFactory from './userFactory';

angular.module('RandomApp', [])
  .factory('userFactory', userFactory)
  .controller('userController', userController);
