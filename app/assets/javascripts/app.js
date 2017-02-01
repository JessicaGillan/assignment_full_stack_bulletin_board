var bb = angular.module('bb', ['ui.router', 'restangular']);

// lodash
bb.constant('_', window._);
bb.run(function($rootScope) {
  $rootScope._ = window._;
});

bb.config(
  ["$httpProvider", "$stateProvider", "$urlRouterProvider", "RestangularProvider",
    function($httpProvider, $stateProvider, $urlRouterProvider, RestangularProvider) {
      // CSRF stuff
      var token = $('meta[name=csrf-token]').attr('content');
      $httpProvider
        .defaults
        .headers
        .common['X-CSRF-Token'] = token;

      // Restangular
      RestangularProvider.setBaseUrl('/api/v1');
      RestangularProvider.setRequestSuffix('.json');
      RestangularProvider.setDefaultHttpFields({ "content-type": 'application/json' })

      // routing
      $urlRouterProvider.otherwise('/posts');

      $stateProvider
        .state('main', {
          url: '/',
          abstract: true,
          views: {
            'side-bar@': {
              templateUrl: 'templates/comments/index.html',
              controller: 'CommentsCtrl'
            }
          }
        })
        .state('main.postsindex', {
          url: 'posts',
          views: {
            'main-content@': {
              templateUrl: 'templates/posts/index.html',
              controller: 'PostsCtrl'
            }
          }
        })
        .state('main.postsshow', {
          url: 'posts/:id',
          views: {
            'main-content@': {
              templateUrl: 'templates/posts/show.html',
              controller: 'PostsShowCtrl'
            }
          }
        });
    }
  ]
);
