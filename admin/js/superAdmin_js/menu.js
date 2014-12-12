function menuCtrl($rootScope,$scope,$state, $location, $http,$cookieStore,Pagination) {
       if($cookieStore.get('islogin')==true){ 	
    $scope.adminusername=$cookieStore.get('username');
	$scope.states = {};
	$scope.state={
		 statename :'',
		 statelocation :''
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
   	$state.go('adminlogin');
   }
	


}
