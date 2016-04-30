(function() {
  "use strict";

  angular.module( 'loading', ['ui.bootstrap'] )

  .service('loadingService', ['$q', '$uibModal', function($q, $uibModal) {
    this.loading = [];

    this.load = function(deferred) {
      this.loading.push(deferred.promise);

      if (this.loading.length === 1) {
        this.modalInstance = $uibModal.open({
          templateUrl: 'loading/loading-modal.tpl.html',
          controller: 'LoadingModalCtrl',
          backdrop: 'static',
          size: 'sm',
          keyboard: false,
          animation: false
        });
      }
    };
  }])

  .controller('LoadingModalCtrl',
              ['$scope', '$uibModalInstance', '$timeout', '$q', 'loadingService', function($scope, $uibModalInstance, $timeout, $q, loadingService) {
    $q.all(loadingService.loading)["finally"](function() {
      loadingService.loading = [];
      $timeout(function() {
        $uibModalInstance.close();
      }, 50);
    });
  }]);
})();
