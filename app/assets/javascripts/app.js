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
      // RestangularProvider.setBaseUrl('/api/v1');
      // RestangularProvider.setRequestSuffix('.json');

      // routing
      $urlRouterProvider.otherwise('/posts');

      $stateProvider
        .state('main', {
          url: '/',
          abstract: true,
          views: {
            'side-bar@': {
              template: '<div>sidebar</div>'
            }
          }
        })
        .state('main.postsindex', {
          url: 'posts',
          views: {
            'main-content@': {
              template: '<div>main content</div>'
            }
          }
        })
        .state('main.postsshow', {
          url: 'posts/:id'
        });
    }
  ]
);
