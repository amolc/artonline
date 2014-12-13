function homeController( $rootScope, $scope, $http) {

$scope.artwork= { };

	$http.get(baseURL + 'getartwork').success(function(res) {
				$scope.artwork = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					
				$scope.states=res;
					
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
}		
