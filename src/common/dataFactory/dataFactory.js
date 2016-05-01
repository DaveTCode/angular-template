class DataFactoryService {
  constructor($http, $q, loadingService) {
    this.$http = $http;
    this.$q = $q;
    this.loadingService = loadingService;
    this.urlBase = 'http://api.angularTemplate.com/';
  }
  
  get(url) {
    const deferred = this.$q.defer();
    
    this.loadingService.load(deferred);
    this.$http.get(this.urlBase + url)
    .then(function(data, status) {
      deferred.resolve(data);
    }, function(data, status) {
      deferred.reject(data);
    });

    return deferred.promise;
  }
  
  post(url, data) {
    const deferred = this.$q.defer();
    
    this.loadingService.load(deferred);
    this.$http.post(this.urlBase + url, data)
    .then(function(data, status) {
      deferred.resolve(data);
    }, function(data, status) {
      deferred.reject(data);
    });

    return deferred.promise;
  }
  
  delete(url) {
    const deferred = this.$q.defer();
    
    this.loadingService.load(deferred);
    this.$http['delete'](this.urlBase + url)
    .then(function(data, status) {
      deferred.resolve(data);
    }, function(data, status) {
      deferred.reject(data);
    });

    return deferred.promise;
  }
}

angular.module('dataFactory', ['loading'])
  .service('dataFactory', DataFactoryService);
