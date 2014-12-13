function loginController($rootScope,$scope, $location, $http, $routeParams,$cookieStore) {
	$scope.$on('$viewContentLoaded', function() {
	    menumgmt();
	});
	if( $cookieStore.get('islogin') == false ){

	} else {	
		alert( $cookieStore.get('islogin') );
		$cookieStore.put('islogin',false);
		$scope.user = {
			username :'',
			password : ''
		};
		$scope.login = function(user) {
			 if(user.username == ''){
			    alert('Enter user name');
			} else if(user.password == ''){
			    alert('Enter password');
			}else {		
				
				//$location.path('/Home');     
	 			$http.post(baseURL + 'HousingAdminLogin', user).success(function(res) {
				 $scope.response = res;
				 if (res.status == false) {
					 alert(res.message);
				 } else {
					 console.log(res.data[0].housing_ass_name);
					 $cookieStore.put('hid',user.housingid);
					 $cookieStore.put('username',res.data[0].housing_ass_name);
					 $cookieStore.put('islogin',true);
					 $location.path("/Submittedinfo");
					 }
				}).error(function() {
					 alert("Please check your internet connection or data source..");
				 });
			}
		};
	} 	
}


  