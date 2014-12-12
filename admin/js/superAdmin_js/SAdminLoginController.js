
function adminLoginController($rootScope,$scope, $state, $http,$cookieStore) {
	$cookieStore.put('islogin',false);
	$scope.user = {
		username : '',
		password : ''
	};
	$scope.login = function(user) {
		if (user.username == '') {
			alert('Enter valid User Name ');
		} else if(user.password == ''){
		    alert('Enter password ');
		} else {		      
			$http.post(baseURL + 'adminLogin', user).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {			      
					$cookieStore.put('islogin',true);
					$cookieStore.put('username',user.username);
					$state.go("menu.manstate");
					
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
	};

}


 function adminLostPasswordController($rootScope,$scope,$location,$http,$routeParams,$cookieStore){
 				 $scope.lost = function(user1){
 				$location.path("/LostPassword"); 

 };

}

/*
function aloginController($rootScope,$scope,$location,$http,$routeParams,$cookieStore){
 				 $scope.login3 = function(user3){		
 				$location.path("/Admin"); 

 };

}

*/