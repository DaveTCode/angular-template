// Downgrade eslint error for unused variables to a warning
// as we're expecting the variables to be used once real tests
// are written
/*eslint no-unused-vars: 1 */
describe( 'AppCtrl', function() {
  describe( 'dummyTest', function() {
    var AppCtrl, $location, $scope;

    beforeEach( module( 'angularTemplate' ) );

    beforeEach( angular.mock.inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
    }));

    it( 'should pass a dummy test', angular.mock.inject( function() {
      expect( true ).toBeTruthy();
    }));
  });
});
