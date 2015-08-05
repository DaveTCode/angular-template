(function() {
  "use strict";

  angular.module( 'errors', ['ui.bootstrap'] )

  .service('errorService', ['$modal', function($modal) {
    this.showError = function(error) {
      $modal.open({
        templateUrl: 'errorService/error.tpl.html',
        controller: 'ErrorCtrl',
        keyboard: false,
        backdrop: 'static',
        animation: false, // @@@DAT - This is forced due to https://github.com/angular-ui/bootstrap/issues/3694 - The modal won't close if this isn't set.
        resolve: {
          error: function() {
            return error;
          }
        }
      });
    };
  }])

  .controller('ErrorCtrl',
              ['$scope', '$window', '$modalInstance', 'error', function($scope, $window, $modalInstance, error) {
    $scope.error = error;

    $scope.refresh = function() {
      $window.location.reload();
    };
  }]);
})();
