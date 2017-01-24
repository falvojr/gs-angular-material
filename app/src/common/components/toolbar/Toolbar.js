import ToolbarController from './ToolbarController'

export default {
  name: 'toolbar',
  config: {
    bindings: { user: '<', sections: '<' },
    templateUrl: 'src/common/components/toolbar/Toolbar.html',
    controller: [ '$mdSidenav', '$location', ToolbarController ]
  }
}
