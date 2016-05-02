function homeConfig($stateProvider) {
  $stateProvider.state( 'app.home', {
    url: '/home',
    views: {
      'main': {
        controller: 'homeController',
        controllerAs: 'data',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data: { pageTitle: 'Home' },
    resolve: {
      'home': function($stateParams, dataFactory) {
        //return dataFactory.get('test');
        return {'test': true};
      }
    }
  });
}

class HomeController {
  constructor(home) {
    this.home = home;
  }
}

angular.module('angularTemplate.home', ['ui.router'])
  .config(homeConfig)
  .controller('homeController', HomeController);
