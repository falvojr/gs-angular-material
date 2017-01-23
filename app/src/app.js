// Load libraries
import angular from 'angular'

import 'angular-animate'
import 'angular-aria'
import 'angular-material'
import 'angular-route'

import AppController from 'src/AppController'

import Users from 'src/users/Users'
import Common from 'src/common/Common'

export default angular.module('app', [ 'ngMaterial', 'ngRoute', Common.name, Users.name ])
  .controller('AppController', AppController)
