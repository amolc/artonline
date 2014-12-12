function adminstateController($rootScope,$scope,$http,$cookieStore,$state,Pagination,$location) {
       if($cookieStore.get('islogin')==true){ 	
    $scope.adminusername=$cookieStore.get('username');
	$scope.states = {};
	$scope.state={
		 statename :'',
		 statelocation :''
	};
		$http.get(baseURL + 'state').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.states=res;
					$rootScope.stateForMun=res;
				   
				}
				
				//start  pagination code
			console.log($scope.states.length);
			$scope.pagination = Pagination.getNew(10);
			console.log($scope.pagination.perPage);
			console.log($scope.states.length);
			
			$scope.pagination.numPages = Math.ceil($scope.states.length/$scope.pagination.perPage);
			console.log('hhhhh'+$scope.pagination.numPages);
			//end pagination
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
			
			
			$scope.del=function(id){
				alert(id);
			$http.get(baseURL + 'deleteState/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
					alert("bye");
				} else {
					alert("hi");
					$state.go('menu.manstate');
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
			$scope.addState=function(state){
				console.log(state);
			if (state.statename == '') {
			alert('Enter a state Name ');
		} else if(state.statelocation == ''){
		    alert('Enter state location  ');
		} else {		      
			$http.post(baseURL + 'addState', state).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					alert(res.message);
					$state.go("menu.addstate");
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
				//$location.path('/Editstate/'+id);
				$state.go("#/menu/editstate/"+id);	
			};
			
			$scope.statedata=function(id){
				$location.path('/Viewstate/'+id);	
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

/*

 .directive('myCustomer', function() {
    return {
      template: 'partials/home.html'
    };
  });

*/
function admineditstateController($rootScope,$scope,$state, $location, $http,$stateParams,$cookieStore) {
    if($cookieStore.get('islogin')==true){
    $scope.adminusername=$cookieStore.get('username');
	$scope.statedetail={		
	};
		var id=$stateParams.id;				
			 $http.get(baseURL + 'getdetail/'+id).success(function(res) {
			 	console.log(res);
				 $scope.response = res;
				 $scope.statedetail=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 });
			 
			 	$scope.editState=function(statedetail){
			if (statedetail.state_name == '') {
			alert('Enter a state Name ');
		} else if(statedetail.state_location == ''){
		    alert('Enter state location  ');
		} else {		      
			$http.post(baseURL + 'updateState', statedetail).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$state.go("menu.manstate");
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
