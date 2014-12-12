function submitedinputController($rootScope,$scope, $location, $http,$cookieStore,$route) {
	if($cookieStore.get('islogin')==true){
    $scope.adminusername=$cookieStore.get('username');
    $scope.lastlogin=$cookieStore.get('lastlogin');
    console.log($scope.lastlogin);
	$scope.notification = {};
	$scope.noofrow={
		length:'0',
		housingname:$scope.adminusername
	};
		$scope.housingid = $cookieStore.get('hid');
	    $scope.data={hid:$scope.housingid};	 
	    
	     $scope.allnotif=function(){  		
		$http.post(baseURL + 'allnotification',$scope.data).success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
				} else {
					$scope.notification=res.row;
					$scope.noofrow.length=res.length;
				}			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			};
			
			 $scope.allnotif();
			$scope.unread=function(){
				$http.post(baseURL + 'unreadnotification',$scope.data).success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
				} else {
					$scope.notification=res.row;
					//$scope.noofrow.length=res.length;
				}			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			};
				
			$scope.del=function(id){
			$http.get(baseURL + 'deleteinput/'+id).success(function(res) {
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
			
		$scope.read=function(id){
				$location.path('/Readmessage/'+id);	
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


function readnotifController($rootScope,$scope, $location, $http,$routeParams,$cookieStore) {
	    if($cookieStore.get('islogin')==true){
        $scope.adminusername=$cookieStore.get('username');
		var id=$routeParams.id;				
			 $http.get(baseURL + 'messagedetail/'+id).success(function(res) {
				 $scope.response = res;
				 $scope.messagedetail=res;
				 console.log($scope.messagedetail);
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 });
		
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
