function forgetpasswordController($rootScope,$scope, $location, $http, $stateParams) {	
		 $scope.backNevigation = function(){
		  $location.path('/Login/'+$rootScope.housing_name);
	};
	$scope.openRightMenu = function() {
		$scope.sideMenuController.toggleRight();
	};
			
}