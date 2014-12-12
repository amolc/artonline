function newartistController( $rootScope, $scope, $http) {
	$scope.artist = {
		mobileno : ''		
	};
	$scope.addArtist = function(artist) {
		$http.post(baseURL + 'addetails', artist).success(function(res) {
	 	})
	};

}
function accountdetailsController( $rootScope, $scope, $http) {
	

	$scope.addArtwork = function(add1) {
		$http.post(baseURL + 'addartwork', add1).success(function(res) {
	 }) 
	};


}

function paymentController( $rootScope, $scope, $http) {

$scope.artists= {};

	$http.get(baseURL + 'getartwork').success(function(res) {
				$scope.artists = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					
				$scope.states=res;
					
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
}		







function artistController( $rootScope, $scope, $http) {

$scope.artistsd= {};

	$http.get(baseURL + 'getartists').success(function(res) {
				$scope.artistsd = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					
				$scope.states=res;
					
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
}		

function editartworkController( $rootScope, $scope, $http,$stateParams) {

			 
	$scope.artdetail={		
	};
		var id=$stateParams.id;		
		console.log(id);		
			 $http.get(baseURL + 'artworkdetails/'+id).success(function(res) {
			 	console.log(res);
				 $scope.response = res;
				 $scope.artdetail=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 }); 

								 
			 	$scope.editartwork=function(artdetail){

			$http.post(baseURL + 'updateartwork', artdetail).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					//$state.go("menu.manstate");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
		
   				



function editartistController( $rootScope, $scope, $http,$stateParams) {

			 
	$scope.art={		
	};
		var id=$stateParams.id;		
		console.log(id);		
			 $http.get(baseURL + 'artistdetails/'+id).success(function(res) {
			 	console.log(res);
				 $scope.response = res;
				 $scope.art=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 }); 

								 
			 	$scope.updateArtist=function(art){

			$http.post(baseURL + 'updateartist',art).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					//$state.go("menu.manstate");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};





