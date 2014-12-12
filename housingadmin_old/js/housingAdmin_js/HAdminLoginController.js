
function adminLoginController($rootScope,$scope, $location, $http, $routeParams,$cookieStore) {
	$cookieStore.put('islogin',false);
	$scope.user = {
		username :'ADMIN',
		password : '',
		housingid:''
	};
	$scope.login = function(user) {
		 if(user.housingid == ''){
		    alert('Enter housing id ');
		} else if(user.password == ''){
		    alert('Enter password');
		}else {		      
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
	$scope.sendemail=function(){
    $http.get(baseURL + 'send').success(function(res) {
				alert('okkaa');
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		
	};
}


  