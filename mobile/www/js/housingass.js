function housingcontroller($rootScope,$scope, $location, $http, $stateParams,$ionicLoading) {
	$scope.show = function() {
	  $scope.loading = $ionicLoading.show({
	       content: 'Loading',
	       animation: 'fade-in',
	       showBackdrop: true,
	       maxWidth: 200,
	       showDelay: 2000
	     });
	 };
   $scope.hide = function(){
     $scope.loading.hide();
   };
	
		$scope.housingass= {};
		$scope.stateid= $stateParams.id;
	 	id =$scope.stateid;
	 	$scope.show();
      $http.get(baseURL + 'housingAssociation/'+id).success(function(res) {
				$scope.response = res;				
				if (res.status == 'false') {
					alert(res.message);
				} else {					
					$scope.housingass=res;					
				}				
				$scope.hide();
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
			$scope.gotologin=function(object){
				$rootScope.housing_id=object.housing_ass_id;
				$rootScope.housing_name=object.housing_ass_name;				
				console.log("object = "+object);
           $location.path('/Login/'+$rootScope.housing_name);	
           };
           
    $scope.openRightMenu = function() {
		$scope.sideMenuController.toggleRight();
	};
	$scope.backNevigation = function(){
		$location.path('/Municipality/'+$rootScope.munId);	
	};
	
}
