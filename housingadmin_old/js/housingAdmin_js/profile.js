function contactController($rootScope,$scope, $location, $http,$cookieStore,$route) {
	if($cookieStore.get('islogin')==true){
    $scope.adminusername=$cookieStore.get('username');
    $scope.housingid = $cookieStore.get('hid');
	$scope.contact = {};
	$scope.addcontact={
		 contact_type :'',
		 phone:'',
		 email :'',
		 weblink:'',
		 description:'',
		 hid:$scope.housingid
		 
	};
		
	    $scope.data={hid:$scope.housingid};	 
		$http.post(baseURL + 'contact',$scope.data).success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
				} else {
					$scope.contact=res;
					console.log($scope.contact);
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			$scope.del=function(id){
			$http.get(baseURL + 'deleteContact/'+id).success(function(res) {
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
			
			$scope.Addcontact=function(addcontact){
			if (addcontact.contact_type == '') {
			alert('Enter a contact type');
		} else if(addcontact.email == ''){
		    alert('Enter email  ');
		}else if(addcontact.phone == ''){
		    alert('Enter phone number  ');
		}else if(addcontact.weblink == ''){
		    alert('Enter weblink ');
		    }else if(addcontact.description == ''){
		    alert('Enter description ');
		}else {		      
			$http.post(baseURL + 'addContact', addcontact).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/Contact");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
		
		$scope.view=function(id){
				$location.path('/Viewcontact/'+id);	
			};
			$scope.edit=function(id){
				$location.path('/Editcontact/'+id);	
			};
			
			$scope.goto=function(page){
				$location.path(page);	
			};
			
			$scope.logout=function(){
				$cookieStore.put('islogin',false);
				$location.path('/Adminlogin');	
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


function editcontactController($rootScope,$scope, $location, $http,$routeParams,$cookieStore) {
	    if($cookieStore.get('islogin')==true){
        $scope.adminusername=$cookieStore.get('username');
		var id=$routeParams.id;				
			 $http.get(baseURL + 'contactdetail/'+id).success(function(res) {
				 $scope.response = res;
				 $scope.contactdetail=res;
				 console.log($scope.contactdetail);
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 });
		 
		 	$scope.editcontact=function(contactdetail){
				if (contactdetail.contact_type == '') {
			   alert('Enter a service Name ');
		   } else if(contactdetail.email == ''){
		    alert('Enter email  ');
		   }else if(contactdetail.phone_number == ''){
		    alert('Enter phone number  ');
		  }else if(contactdetail.web_link == ''){
		    alert('Enter weblink ');
		     }else if(contactdetail.contact_description == ''){
		    alert('Enter description');
		  }else {		      
			$http.post(baseURL + 'UpdateContact', contactdetail).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/Contact");
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
				$cookieStore.put('islogin',false);
				$location.path('/Adminlogin');	
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
