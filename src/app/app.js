function run($rootScope, errorService) {
  /*
   * Error handler - whenever we hit an error resolving data in a state function
   * this function is called to display an error to the user and allow them to
   * refresh the page.
   */
  $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
    errorService.showError(error);
  });

  /*
   * We make use of the state change success event to set the page title.
   */
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $rootScope.pageTitle = toState.data.pageTitle + ' | Angular Template' ;
    }
  });
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
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  })
  .run(run);
