function homeController( $rootScope, $scope, $http) {
	$scope.uploadUrl = uploadUrl;
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
function artistController( $rootScope, $scope, $http) {

$scope.artistdetail= {};

	$http.get(baseURL + 'getartists').success(function(res) {
				$scope.artistdetail = res;
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