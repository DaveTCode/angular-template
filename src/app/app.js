/**
 * The run function is where we define global message handlers.
 * 
 * @param {Object} $rootScope - The root scope is present in all 
 * controllers/templates and provides us with a way to store information at 
 * the global level.
 * 
 * @param {Service} errorService - The error service gives us a simple way to 
 * display modals containing error information.
 */
function run($rootScope, errorService) {
  // Error handler - whenever we hit an error resolving data in a state function
  // this function is called to display an error to the user and allow them to
  // refresh the page.
  $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
    errorService.showError(error);
  });

  // We make use of the state change success event to set the page title.
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $rootScope.pageTitle = toState.data.pageTitle + ' | Angular Template' ;
    }
  });
}

/**
 * Set up the basic routing information for the top level of the application.
 * 
 * @param {Object} $urlRouterProvider - Router Provider lets us define route 
 * mappings.
 * 
 * @param {Object} $stateProvider - The state provider is part of ui.router and
 * allows us to define the states for the top level abstract routes.
 */
function config($urlRouterProvider, $stateProvider) {
  // Give a default route to use if the url given doesn't match any in our 
  // system.
  $urlRouterProvider.otherwise('/app/home');

  $stateProvider.state('app', {
    abstract: true,
    url: '/app',
    controller: 'parentController',
    controllerAs: 'parent',
    templateUrl: 'parent.tpl.html'
  });
}

/**
 * This is an empty controller function that backs the parent.tpl.html 
 * template.
 */
class ParentController {
  constructor() {
    this.navbarCollapsed = true;
  }
}
  
angular.module('angularTemplate', [
  'templates-app',
  'templates-common',
  'angularTemplate.home',
  'ngSanitize',
  'ngAnimate',
  'ngCookies',
  'ui.router',
  'ui.bootstrap',
  'errors',
  'dataFactory'])
  .config(config)
  .run(run)
  .controller('parentController', ParentController);
