describe( 'AppCtrl', function() {
  describe( 'dummyTest', function() {
    var AppCtrl, $location, $scope;

    beforeEach( module( 'angularTemplate' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( true ).toBeTruthy();
    }));
  });
});
