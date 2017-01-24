function ToolbarService ($q) {
  var sections = [
    buildMainMenu()
  ]

  // Promise-based API
  return {
    getSections: function () {
      // Simulate async nature of real remote calls
      return $q.when(sections)
    }
  }

  function buildMainMenu () {
    return {
      name: 'Mensagens',
      itens: [
          {name: 'Usuários', path: 'users', icon: 'users'},
          {name: 'Arquivos', path: 'files', icon: 'file'}
      ]
    }
  }
}

export default ['$q', ToolbarService]
