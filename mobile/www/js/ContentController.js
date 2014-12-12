function ContentController($scope, $ionicSideMenuDelegate,$rootScope,$ionicLoading,$http,$location) {
  	 $scope.backNevigation = function(){
		$location.path('/Newsfeed/'+$rootScope.housing_name);
	};
	$scope.openRightMenu = function() {		
		$scope.sideMenuController.toggleRight();
	};
	$scope.show = function() {
	  $scope.loading = $ionicLoading.show({
	       content: 'Loading',
	       animation: 'fade-in',
	       showBackdrop: true,
	       maxWidth: 200,
	       showDelay: 2000
	     });
	 };
   $scope.hide = function(){
     $scope.loading.hide();
   };  
	$scope.contactlist = {};
	 $scope.data={hid:$rootScope.housing_id};
	$scope.show();
		$http.post(baseURL + 'contact',$scope.data).success(function(res) {			
				$scope.response = res;
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.contactlist=res;	
				}
				 $scope.hide();			
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
				
	 $scope.goto = function(page){
     	$location.path(page);
   }; 	
   
   $scope.showDetail= function(index) {
		 if(document.getElementById("subDetail"+index).style.display == 'none'){
             document.getElementById("subDetail"+index).style.display = 'block';
             document.getElementById("detailImg"+index).innerHTML='<img src="img/down_arrow.png" />';
         }else{
   	         document.getElementById("subDetail"+index).style.display = 'none';
   	          document.getElementById("detailImg"+index).innerHTML='<img src="img/go_icon.png" />';
         }
	};
		
}
