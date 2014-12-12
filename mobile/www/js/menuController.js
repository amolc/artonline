function menuController($scope, $ionicSideMenuDelegate,$rootScope,$ionicLoading,$http,$location) {
	  $scope.goto = function(page){
     	$location.path(page);
   };
}