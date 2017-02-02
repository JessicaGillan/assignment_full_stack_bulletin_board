bb.controller('PostsCtrl', ['$scope', 'Restangular', 'postService', 'posts',
function ($scope, Restangular, postService, posts) {

  $scope.posts = posts;

  $scope.processForm = function(valid) {
    if(valid) {
      $scope.posts.create($scope.post).then(
        function(response) {
          console.log("success create", response)
          $scope.post = {};
        },
        function(response) {
          console.error(response);
        }
      )
    }
  }

}]);
