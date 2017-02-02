bb.factory('postService', ['Restangular', function (Restangular) {
  var _posts = []; // Restangular.all.getlist()
  //     Restangularize(_posts); ??

  var all = function all() {
    return Restangular.all('posts').getList().$object;
    // .then(
    //   function(posts) {
    //     angular.copy(posts, _posts);
    //     console.log(_posts)
    //     return _posts
    //   }
    // )
  }

  var _createPost = function _createPost(params) {
    var newPost = {
      title: params.title,
      author: params.author,
      body: params.body
    };

    return Restangular.all('posts').post(newPost).then(
      function(post) {
        _posts.unshift(post);

        return _posts
      }
    )
  }

  Restangular.extendCollection('posts', function(collection){
    collection.create = _createPost;

    return collection
  })

  var create = function create(params) {
    return _createPost(params);
  }


  return {
    create: create,
    all: all
  }
}]);
