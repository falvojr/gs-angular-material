export default function routeConfig ($routeProvider) {
  $routeProvider
      .when('/files', {
        templateUrl: 'src/files/components/list/FilesList.html'
      })
}
