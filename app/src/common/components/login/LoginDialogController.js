class LoginDialogController {

  constructor (LoginService, $mdDialog) {
    this.user = {}
    this.$mdDialog = $mdDialog
    this.LoginService = LoginService
  }

  show () {
    this.$mdDialog.show()
  }

  hide () {
    this.$mdDialog.hide()
  }

  close () {
    this.$mdDialog.cancel()
  }

  login () {
    this.LoginService.auth(this.user)
  }
}

export default LoginDialogController
