(function() {
  "use strict";

  angular.module('angularTemplate.home', [
    'ui.router'
  ])

  .config(function config($stateProvider) {
    $stateProvider.state( 'home', {
      url: '/home',
      views: {
        "main": {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data: { pageTitle: 'Home' },
      resolve: {
        'home': function($stateParams, dataFactory) {
          return dataFactory.getDummyData();
        }
      }
    });
  })

  .controller('HomeCtrl', function HomeController($scope, home) {
    $scope.home = home;
  });
})();
