// Load the custom app ES6 modules

import IconConfig from 'src/common/configs/IconConfig'
import RouteConfig from 'src/common/configs/RouteConfig'
import ThemeConfig from 'src/common/configs/ThemeConfig'

import BasicAuthService from 'src/common/services/BasicAuthService'
import MenuService from 'src/common/services/MenuService'

import Toolbar from 'src/common/components/toolbar/Toolbar'
import LoginDialog from 'src/common/components/login/LoginDialog'

// Define the Angular 'common' module

export default angular
  .module('common', ['ngMaterial'])

  .component(Toolbar.name, Toolbar.config)
  .component(LoginDialog.name, LoginDialog.config)

  .service('MenuService', MenuService)
  .service('BasicAuthService', BasicAuthService)

  .config(IconConfig)
  .config(RouteConfig)
  .config(ThemeConfig)
