// Notice that we do not have a controller since this component does not  have
// any specialized logic.

export default {
  name: 'filesList',
  config: {
    bindings: { files: '<' },
    templateUrl: 'src/files/components/list/FilesList.html'
  }
}
