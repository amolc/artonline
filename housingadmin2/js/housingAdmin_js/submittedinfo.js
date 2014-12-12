function submitedinputController($rootScope,$scope, $location, $http ) {
	if(window.localStorage.getItem('islogin') === 'true'){

    $scope.adminusername=window.localStorage.getItem('username');
    $scope.lastlogin=window.localStorage.getItem('lastlogin');
    console.log($scope.lastlogin);
	$scope.notification = {};
	$scope.noofrow={
		length:'0',
		housingname:$scope.adminusername
	};
		$scope.housingid = window.localStorage.getItem('hid');
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


function readnotifController($rootScope,$scope, $location, $http,$routeParams ) {
	    if(window.localStorage.getItem('islogin')==true){
        $scope.adminusername=window.localStorage.getItem('username');
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
