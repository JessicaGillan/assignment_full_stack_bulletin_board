bb.controller('CommentsCtrl', ['$scope', 'Restangular',
function ($scope, Restangular) {

  Restangular.all('comments').getList().then(
    function(comments) {
      $scope.comments = comments;
    }
  )

}]);
