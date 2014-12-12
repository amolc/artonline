function servicesController($rootScope,$scope, $location, $http ) {
	if(window.localStorage.getItem('islogin')==true){
						$('header,footer').show();
    $scope.adminusername=window.localStorage.getItem('username');
	$scope.services = {};
	$scope.addservices={
		 servicesname :'',
		 email :'',
		 phone:'',
		 weblink:''
	};
		$http.get(baseURL + 'services').success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
				} else {
					$scope.services=res;
					console.log($scope.services);
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			$scope.del=function(id){
			$http.get(baseURL + 'deleteService/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					$route.reload();
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
			$scope.AddService=function(addservices){
			if (addservices.servicesname == '') {
			alert('Enter a service Name ');
		} else if(addservices.email == ''){
		    alert('Enter email  ');
		}else if(addservices.phone == ''){
		    alert('Enter phone number  ');
		}else if(addservices.weblink == ''){
		    alert('Enter weblink ');
		}else {		      
			$http.post(baseURL + 'addservice', addservices).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/Services");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
		
		$scope.view=function(id){
				$location.path('/Viewservice/'+id);	
			};
			$scope.edit=function(id){
				$location.path('/Editservices/'+id);	
			};
			
			$scope.goto=function(page){
				$location.path(page);	
			};
			
			$scope.logout=function(){
				window.localStorage.setItem('islogin',false);
				$location.path('/adminlogin');	
			};
			
			
			  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
};
   }
    else{
   	$location.path('Adminlogin');
   }
	
}


function editserviceController($rootScope,$scope, $location, $http,$routeParams ) {
	    if(window.localStorage.getItem('islogin')==true){
        $scope.adminusername=window.localStorage.getItem('username');
		var id=$routeParams.id;				
			 $http.get(baseURL + 'Servicedetail/'+id).success(function(res) {
				 $scope.response = res;
				 $scope.servicedetail=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 });
		 
		 	$scope.editservices=function(servicedetail){
				if (servicedetail.Service_name == '') {
			   alert('Enter a service Name ');
		   } else if(servicedetail.Email == ''){
		    alert('Enter email  ');
		   }else if(servicedetail.phone_number == ''){
		    alert('Enter phone number  ');
		  }else if(servicedetail.web_address == ''){
		    alert('Enter weblink ');
		  }else {		      
			$http.post(baseURL + 'updateservices', servicedetail).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/Services");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
		$scope.goto=function(page){
				$location.path(page);	
			};
			
			$scope.logout=function(){
				window.localStorage.setItem('islogin',false);
				$location.path('/adminlogin');	
			};
			
  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
   };
  }
  else{
   	$location.path('Adminlogin');
       }
   
}
