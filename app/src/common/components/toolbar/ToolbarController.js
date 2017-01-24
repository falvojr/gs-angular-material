class ToolbarController {

  constructor ($mdSidenav, $location) {
    this.$mdSidenav = $mdSidenav
    this.$location = $location
  }

  toggle () {
    this.$mdSidenav('left').toggle()
  }

  open (menuItem) {
    this.toggle()
    this.$location.path(menuItem.path)
  }

  logoff () {
    console.log('Logoff')
  }
}
export default ToolbarController
