function loginController($rootScope,$scope, $location, $http, $stateParams,$ionicLoading) {
	
	var token_id='150e42ec2c0a4c0cc33da60b13c62d075036ce6610459454124ffd0523a1b9e0';
    var device_id='device';
    
	$scope.senddata = function() {
		$scope.senddata2 ();
         // window.plugins.applicationPreferences.get('devicetoken', function(result) {
                                                   // token_id=result;
//                                                   
                                                    // }, function(error) {
                                                     // alert('error tokeid   ');
                                                    // }
                                                    // );
          // window.plugins.applicationPreferences.get('device', function(result) {
                                                   // device_id=result;
//                                                     
//                                                    
                                                    // $scope.senddata2 ();
                                                    // }, function(error) {
                                                     // alert('error device   ');
                                                    // }
                                                    // );
//        
        
   };
   
    $scope.senddata2 = function() {	
    	 $scope.data = {
		device :device_id,
		token_id : token_id,
		housing_id:$rootScope.housing_id
	}; 	 
			$http.post(baseURL + 'notification',$scope.data).success(function(res) {
				$scope.response = res;			
				if (res.status == 'false') {
					alert(res.message);
				} else {
					
				}
				$location.path("/Newsfeed/"+hName);
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
	};

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
	
	var hName=$stateParams.name;
	$scope.user = {
		username :hName,
		buildingpass : '12345'
	};
	
	$scope.login = function(user) {
		if (user.buildingpass == '') {
			alert('Password required ');
		}  else {	       
			$scope.show();
			$http.post(baseURL + 'login', user).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					
					 $scope.senddata();
			}
				$scope.hide();
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
		}
	};
	$scope.goto = function(page) {
		$location.path(page);
	};
	$scope.changeplaceholder = function() {
		document.getElementsByName('password')[0].placeholder='';
	};
	$scope.openRightMenu = function() {
		$scope.sideMenuController.toggleRight();
	};
	
	$scope.backNevigation = function(){
		$location.path('/Housing/'+$rootScope.housing_id);	
	};
	
}
