function NewsFeedController($rootScope,$scope, $location, $http, $stateParams,$sce) {
		$scope.newsfeed = {};
	    $scope.data={hid:$rootScope.housing_id}; 
	    console.log($scope.data);
	    function nl2br(str, is_xhtml) {
		  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display
		  return (str + '')
		    .replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        } 	
		$http.post(baseURL + 'newsFeed',$scope.data).success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
				} else {
						$scope.newsfeed=res;
					for(i=0;i<=$scope.newsfeed.length;i++)
					{
				  		$scope.newsfeed[i].description=nl2br($scope.newsfeed[i].description);	
				    }	
					}
			
		}).error(function() {
			alert("Please check your internet connection or data source..");
		});
		 $scope.backNevigation = function(){
		 $location.path('/Login/'+$rootScope.housing_name);
	};
	$scope.openRightMenu = function() {		
		$scope.sideMenuController.toggleRight();
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
	
	 $scope.goto = function(page){
	 	console.log(page);
     	$location.path(page);
   };
    
}