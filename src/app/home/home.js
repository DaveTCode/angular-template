function homeConfig($stateProvider) {
  $stateProvider.state( 'app.home', {
    url: '/home',
    views: {
      'main': {
        controller: 'HomeController',
        controllerAs: 'homeCon',
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
    var vm = this;
    vm.home = home;
  }
}

angular.module('angularTemplate.home', ['ui.router'])
  .config(homeConfig)
  .controller('HomeController', HomeController);
