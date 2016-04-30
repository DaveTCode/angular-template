(function() {
  'use strict';

  angular.module( 'errors', ['ui.bootstrap'] )

  .service('errorService', ['$uibModal', function($uibModal) {
    this.showError = function(error) {
      $uibModal.open({
        templateUrl: 'errorService/error.tpl.html',
        controller: 'ErrorCtrl',
        keyboard: false,
        backdrop: 'static',
        resolve: {
          error: function() {
            return error;
          }
        }
      });
    };
  }])

  .controller('ErrorCtrl',
              ['$scope', '$window', '$uibModalInstance', 'error', function($scope, $window, $uibModalInstance, error) {
    $scope.error = error;

    $scope.refresh = function() {
      $window.location.reload();
    };
  }]);
})();
