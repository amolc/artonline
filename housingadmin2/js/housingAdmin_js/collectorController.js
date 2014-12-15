function addcollectorCtrl( $rootScope, $scope, $http) {
	
	$scope.addCollector = function(add) 
	{
	    	console.log(add);	

	     
		$http.post(baseURL + 'addcollector', add).success(function(res) {
	 	}) 
	}

	};


	function listcollectorCtrl($rootScope,$scope,$http)
	{

	$scope.collectors= {};

	$http.get(baseURL + 'getcollector').success(function(res) {
				$scope.collectors = res;
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
	 function editcollectorCtrl($rootScope,$scope,$http,$state,$stateParams)
	 {
	 		$scope.collect={		
	};
		var id=$stateParams.id;		
		console.log(id);		
			 $http.get(baseURL + 'collectordetails/'+id).success(function(res) {
			 	console.log(res);
				 $scope.response = res;
				 $scope.collect=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 }); 

$scope.updateCollector=function(collect){
						console.log(collect);
			$http.post(baseURL + 'updatecollector',collect).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$state.go("app.collector.listcollector");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}



	 }





	 function addcollectionController( $rootScope, $scope, $http, $state ) {
	$scope.selectedcollector = { id : ''}
	$scope.collectors = {};
	$http.get(baseURL + 'getcollector').success(function(res) {
		console.log(res);
		//$scope.artists = res;
        if (res.status == 'false') {
            console.log(res.message);
        } else {
            $scope.collectors = res;
            console.log( $scope.collectors );
        }
    });

	$scope.changecollector = function( collector_id ) {
		$scope.selectedcollector.id = collector_id;				
	};




}