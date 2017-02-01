bb.controller('PostsCtrl', ['$scope', 'Restangular',
function ($scope, Restangular) {

  Restangular.all('posts').getList().then(
    function(posts) {
      $scope.posts = posts;
    }
  )

}]);
