function adminmunicipalityController($rootScope,$scope,$http,$cookieStore,$state,Pagination) {
	    if($cookieStore.get('islogin')==true){
    $scope.adminusername=$cookieStore.get('username');
		$scope.mun={
		 mun_name :'',
		 stateID :''
	};
	$scope.selectedItem='false';
	
		$http.get(baseURL + 'allmunicipality').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.municipality=res;
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			//for getting stste and their id to insert in add municipality
			$http.get(baseURL + 'state').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.states=res;
					$scope.munitems=res;
				}
			

					console.log($scope.states.length);
			$scope.pagination = Pagination.getNew(10);
			console.log($scope.pagination.perPage);
			console.log($scope.states.length);
			console.log();
			$scope.pagination.numPages = Math.ceil($scope.states.length/$scope.pagination.perPage);
			console.log('hhhhh'+$scope.pagination.numPages);
			//end pagination

			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
			$scope.del=function(id){
			$http.get(baseURL + 'deleteMunicipality/'+id).success(function(res) {
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
			
			$scope.AddMunicipality=function(){
			$scope.mun.stateID=$scope.selectedItem.state_id;
			if ($scope.mun.mun_name == '') {
			alert('Enter a municipality Name ');
		} else if($scope.mun.stateID == null){
		    alert('select state name ');
		} else {  
			$http.post(baseURL + 'addMunicipality',$scope.mun).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					alert(res.message);
					$state.go("municipality");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
			
			$scope.goto=function(page){
				$location.path(page);	
			};
			$scope.edit=function(id){
				$state.go("#/menu/editmunicipality/"+id);
				//$location.path('/Editmunicipality/'+id);	
			};
			$scope.view=function(id){
				$state.go('#/menu/viewmunicipality/'+id);	
			};
			$scope.logout=function(){
				$cookieStore.put('islogin',false);
				$state.go('adminlogin');	
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
   	$location.path('/Adminlogin');
   }
	
}

function admineditmunController($rootScope,$scope, $location,$state, $http,$stateParams,$cookieStore) {
        if($cookieStore.get('islogin')==true){
    $scope.adminusername=$cookieStore.get('username');
      $scope.mundetail;
      $http.get(baseURL + 'state').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.states=res;
					$scope.munitems=res;
				}
				var id=$stateParams.id;				
			 $http.get(baseURL + 'getmundetail/'+id).success(function(res) {
				 $scope.response = res;
				 $scope.mundetail=res;
				 console.log(res);
				 
	 for(var i=0;i<=$scope.munitems.length;i++)
       {
       	if($scope.munitems[i].state_id==$scope.mundetail.state_id){
       		console.log($scope.selectedItem= $scope.munitems[i]);
       		i++;
       	     }
        }
        
			 }).error(function() {
				 alert("Please check your internet connection or data source.. xxx");
			 });
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		

		$scope.editmun=function(mundetail){
			mundetail.stateID=$scope.selectedItem.state_id;
			if (mundetail.m_name == '') {
			alert('Enter a municipality Name ');
		} else if(mundetail.state_id == ''){
		    alert('select a state ');
		} else {	
			console.log(mundetail);
			$http.post(baseURL + 'updateMunicipality', mundetail).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$state.go("menu.adminmunicipality");
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
   	$location.path('/Adminlogin');
   }
		}