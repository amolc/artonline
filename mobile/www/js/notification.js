function notificationController($rootScope,$scope, $location, $http, $stateParams,$ionicLoading) {
	$scope.data = {
		device :'andriod',
		token_id : '12345ffx12'
	};
	$scope.senddata = function() {	       
			$http.post(baseURL + 'notification',$scope.data).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					alert(res.message);
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
	};
	
		$scope.push = function() {	    
			$http.get(baseURL + 'pushnotification').success(function(res) {
				$scope.response = res;
				console.log(res);
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
	};
		$scope.pushover = function() {	    
			$http.get(baseURL + 'pushover').success(function(res) {
				$scope.response = res;
				console.log(res);
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
	};
}