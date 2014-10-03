angular.module( 'ngBoilerplate.home')

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope ) {
	$scope.results = [];
	var count = 10;
	for(var i =0; i < count; i++){
		$scope.results.push({id:i, double:2*i});
	}
	
})

;

