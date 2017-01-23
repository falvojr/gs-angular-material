export default function routeConfig ($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'src/files/components/list/FilesList.html'
      })
}
