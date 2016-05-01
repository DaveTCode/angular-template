function homeConfig($stateProvider) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      'main': {
        controller: 'HomeCtrl',
        controllerAs: 'home',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data: { pageTitle: 'Home' },
    resolve: {
      'data': function($stateParams, dataFactory) {
        return dataFactory.get('test');
      }
    }
  });
}

class HomeController {
  constructor(data) {
    this.data = data;
  }
}

angular.module('angularTemplate.home', ['ui.router'])
  .config(homeConfig)
  .controller('homeController', HomeController);
