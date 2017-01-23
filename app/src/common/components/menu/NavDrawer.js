import NavDrawerController from './NavDrawerController'

export default {
  name: 'navDrawer',
  config: {
    bindings: { user: '<', sections: '<' },
    templateUrl: 'src/common/components/menu/NavDrawer.html',
    controller: [ '$mdSidenav', '$location', 'NavDrawerService', NavDrawerController ]
  }
}
