import LoginDialogController from './LoginDialogController'

export default {
  name: 'loginDialog',
  config: {
    bindings: { user: '<', login: '&onSubmit' },
    templateUrl: 'src/common/components/login/LoginDialog.html',
    controller: [ 'LoginService', LoginDialogController ]
  }
}
