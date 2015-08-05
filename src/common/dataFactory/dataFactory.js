(function() {
  "use strict";

  angular.module( 'dataFactory', ['loading'] )

  .factory('dataFactory',
           ['$http', '$q', 'loadingService', function($http, $q, loadingService) {
    var dataFactory = {};
    var urlBase = 'http://api.angularTemplate.com';

    function authenticatedGet(url) {
      var deferred = $q.defer();
      loadingService.load(deferred);
      $http.get(urlBase + url)
      .success(function(data, status) {
        deferred.resolve(data);
      })
      .error(function(data, status) {
        deferred.reject(data);
      });

      return deferred.promise;
    }

    function authenticatedPost(url, data) {
      var deferred = $q.defer();
      loadingService.load(deferred);
      $http.post(urlBase + url, data)
      .success(function(data, status) {
        deferred.resolve(data);
      })
      .error(function(data, status) {
        deferred.reject(data);
      });

      return deferred.promise;
    }

    function authenticatedDelete(url) {
      var deferred = $q.defer();
      loadingService.load(deferred);
      $http['delete'](urlBase + url)
      .success(function(data, status) {
        deferred.resolve(data);
      })
      .error(function(data, status) {
        deferred.reject(data);
      });

      return deferred.promise;
    }

    dataFactory.getDummyData = function() {
      return authenticatedGet('/dummy');
    };

    return dataFactory;
  }]);
})();
