class ErrorService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }
  
  showError(error) {
    this.$uibModal.open({
        templateUrl: 'errorService/error.tpl.html',
        controller: 'ErrorController',
        controllerAs: 'err',
        keyboard: false,
        backdrop: 'static',
        resolve: {
          error: function() {
            return error;
          }
        }
      });
  }
}

class ErrorController {
  constructor($window, $uibModalInstance, error) {
    var vm = this;
    vm.$window = $window;
    vm.$uibModalInstance = $uibModalInstance;
    vm.error = error;
  }
  
  refresh() {
    var vm = this;
    vm.$window.location.reload();
  }
}

angular.module('errors', ['ui.bootstrap'])
  .service('errorService', ErrorService)
  .controller('ErrorController', ErrorController);