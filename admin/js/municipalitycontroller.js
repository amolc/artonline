function municipalitycontroller($rootScope,$scope, $location, $http, $routeParams,Pagination) {
	$scope.muncp= {};
	$scope.stateid= $routeParams.id;
	 	id =$scope.stateid;
      $http.get(baseURL + 'municipality/'+id).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.muncp=res;
					
				}



				console.log($scope.states.length);
			$scope.pagination = Pagination.getNew(10);
			console.log($scope.pagination.perPage);
			console.log($scope.states.length);
			console.log();
			$scope.pagination.numPages = Math.ceil($scope.states.length/$scope.pagination.perPage);
			console.log('hhhhh'+$scope.pagination.numPages);
			//end pagination
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});

}