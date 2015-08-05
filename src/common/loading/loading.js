(function() {
  "use strict";

  angular.module( 'loading', ['ui.bootstrap'] )

  .service('loadingService', ['$q', '$modal', function($q, $modal) {
    this.loading = [];

    this.load = function(deferred) {
      this.loading.push(deferred.promise);

      if (this.loading.length === 1) {
        this.modalInstance = $modal.open({
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
              ['$scope', '$modalInstance', '$timeout', '$q', 'loadingService', function($scope, $modalInstance, $timeout, $q, loadingService) {
    $q.all(loadingService.loading)["finally"](function() {
      loadingService.loading = [];
      $timeout(function() {
        $modalInstance.close();
      }, 50);
    });
  }]);
})();
