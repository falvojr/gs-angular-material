function LoginService ($http) {
  // Promise-based API
  return {
    auth: function (user) {
      return $http.post('api/auth', user)
    }
  }
}

export default ['$http', LoginService]
