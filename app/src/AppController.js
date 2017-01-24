/**
 * Main App Controller for the Angular Material Starter App
 * @param MenuService
 * @constructor
 */
function AppController (MenuService) {
  var self = this

  self.user = {}

  MenuService.getSections()
      .then(function (sections) {
        self.sections = [].concat(sections)
      })

  // *********************************
  // Internal methods
  // *********************************
}

export default [ 'MenuService', AppController ]
