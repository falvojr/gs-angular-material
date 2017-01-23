// Load the custom app ES6 modules

import IconConfig from 'src/common/configs/IconConfig'
import RouteConfig from 'src/common/configs/RouteConfig'
import ThemeConfig from 'src/common/configs/ThemeConfig'

import AuthService from 'src/common/services/AuthService'
import NavDrawerService from 'src/common/services/NavDrawerService'

import NavDrawer from 'src/common/components/menu/NavDrawer'

// Define the Angular 'common' module

export default angular
  .module('common', ['ngMaterial'])

  .component(NavDrawer.name, NavDrawer.config)

  .service('NavDrawerService', NavDrawerService)
  .service('AuthService', AuthService)

  .config(IconConfig)
  .config(RouteConfig)
  .config(ThemeConfig)
