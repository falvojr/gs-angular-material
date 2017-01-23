function BasicAuthService ($http) {
  // Promise-based API
  return {
    login: function (user) {
      if (user && user.email && user.password) {
        let token = btoa(user.email + ':' + user.password)
        $http.defaults.headers.common.Authorization = 'Basic ' + token
      }
    },
    logout: function () {
      delete $http.defaults.headers.common['Authorization']
    },
    isLogged: function () {
      return $http.defaults.headers.common['Authorization']
    }
  }
}

export default ['$http', BasicAuthService]
