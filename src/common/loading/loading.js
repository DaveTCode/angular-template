class LoadingService {
  constructor($q, $uibModal) {
    this.$q =  $q;
    this.$uibModal = $uibModal;
    this.loading = [];
  }
  
  load(deferred) {
    this.loading.push(deferred.promise);

    if (this.loading.length === 1) {
      this.modalInstance = this.$uibModal.open({
        templateUrl: 'loading/loading-modal.tpl.html',
        controller: 'loadingModalController',
        controllerAs: 'loading',
        backdrop: 'static',
        size: 'sm',
        keyboard: false,
        animation: false
      });
    }
  }
}

class LoadingModalController {
  constructor($uibModalInstance, $timeout, $q, loadingService) {
    $q.all(loadingService.loading)['finally'](function() {
      loadingService.loading = [];
      $timeout(function() {
        $uibModalInstance.close();
      }, 50);
    });
  }
}

angular.module('loading', ['ui.bootstrap'])
  .service('loadingService', LoadingService)
  .controller('loadingModalController', LoadingModalController);