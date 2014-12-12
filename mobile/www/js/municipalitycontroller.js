function municipalitycontroller($rootScope,$scope, $location, $http,$stateParams,$ionicLoading) {
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
	$scope.muncp= {};
	$scope.stateid= $stateParams.param;
	 	var id =$scope.stateid;
	 	$scope.show();
      $http.get(baseURL + 'municipality/'+id).success(function(res) {
				$scope.response = res;				
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.muncp=res;							
				}
				$scope.hide();
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
			
			$scope.assoc=function(obj){
				$rootScope.munId=obj.m_id;
				$rootScope.munname=obj.m_name;
				$location.path('/Housing/'+$rootScope.munId);	
			};
			
	$scope.openRightMenu = function() {
		$scope.sideMenuController.toggleRight();
	};
	$scope.backNevigation = function() {		
		$location.path('/State');	
	};
}