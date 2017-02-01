bb.controller('PostsShowCtrl', ['$scope', '$stateParams', 'Restangular',
function ($scope, $stateParams, Restangular) {

  Restangular.one('posts', $stateParams.id).get().then(
    function(post) {
      $scope.post = post;
    }
  )
}]);
