function SubmitController($scope, $ionicSideMenuDelegate,$rootScope,$ionicLoading,$http,$location) {
    $scope.goto = function(page){
	 	console.log(page);
     	$location.path(page);
   };
   	 $scope.backNevigation = function(){
		 $location.path('/Newsfeed/'+$rootScope.housing_name);
	};
	$scope.openRightMenu = function() {		
		$scope.sideMenuController.toggleRight();
	};
	 $scope.data={
	 	hid:$rootScope.housing_id,
	 	type:'',
	 	name:'',
	 	email:'',
	 	description:'',
	 	image:''
	 	};
	 	$scope.showdisclaimer = function(){
	 		alert('oka');
	 		$location.path('/Disclaimer');
	 	};
	 $scope.submitdata = function(data){
	 	if (data.type == '') {
			alert('enter type');
			} else if(data.name == ''){
			    alert('Enter name');
			}else if(data.description == ''){
			    alert('Enter  description ');
			}else if(data.email == ''){
			    alert('enter email');
			 }
			 else {
				$http.post(baseURL + 'addinput',$scope.data).success(function(res) {
							$scope.response = res;
							if (res.status == 'false') {								
							} else {
								$location.path('/Thanks');
									console.log(res);	
							  }
						
					}).error(function() {
						alert("Please check your internet connection or data source..");
					});
			}
		};
		
}