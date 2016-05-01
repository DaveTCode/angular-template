class ErrorService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }
  
  showError(error) {
    this.$uibModal.open({
        templateUrl: 'errorService/error.tpl.html',
        controller: 'errorController',
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
    this.$window = $window;
    this.$uibModalInstance = $uibModalInstance;
    this.error = error;
  }
  
  refresh() {
    this.$window.location.reload();
  }
}

angular.module('errors', ['ui.bootstrap'])
  .service('errorService', ErrorService)
  .controller('errorController', ErrorController);