/**
 * Main App Controller for the Angular Material Starter App
 * @param NavDrawerService
 * @param $mdSidenav
 * @constructor
 */
function AppController (NavDrawerService) {
  var self = this

  self.user = {}

  NavDrawerService.getSections()
      .then(function (sections) {
        self.sections = [].concat(sections)
      })

  // *********************************
  // Internal methods
  // *********************************
}

export default [ 'NavDrawerService', AppController ]
