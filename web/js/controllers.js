function homeController( $rootScope, $scope, $http) {
	$scope.uploadUrl = uploadUrl;
	$scope.artwork= { };

	$http.get(baseURL + 'getartwork').success(function(res) {
		//$scope.artwork = res;
		console.log(res);
		if (res.status == 'false') {
			alert(res.message);
		} else {
			
		$scope.artwork=res;
			
		}
	
	}).error(function() {
		alert("Please check your internet connection or data source..");
	});
}		
function artworkController( $rootScope, $scope, $http) {

	$scope.artistdetail= {};
	$scope.uploadUrl = uploadUrl;
	$http.get(baseURL + 'getartists').success(function(res) {
		//$scope.artistdetail = res;
		if (res.status == 'false') {
			alert(res.message);
		} else {
			
		$scope.artistdetail = res;
			console.log( $scope.artistdetail );
			artistwork( $scope.artistdetail[0].id , $scope.artistdetail[0].fname );

		}
	
	}).error(function() {
		alert("Please check your internet connection or data source..");
	});

	$scope.artistwork = function( artistId, artistname  ){
		artistwork( artistId , artistname );
	}
	var artistwork = function( artistId, artistname  ){
		$http.get(baseURL + 'getartworkbyid/'+ artistId  ).success(function(res) {
			if (res.status == 'false') {
				alert(res.message);
			} else {
				angular.element(document.getElementById("artistartwork")).scope().artistname = artistname;
				angular.element(document.getElementById("artistartwork")).scope().artworks = res;
			}
		
		});
	}

}		




function artworkController( $rootScope, $scope, $http) {

	$scope.artistdetail= {};
	$scope.uploadUrl = uploadUrl;
	$http.get(baseURL + 'getartists').success(function(res) {
		//$scope.artistdetail = res;
		if (res.status == 'false') {
			alert(res.message);
		} else {
			
		$scope.artistdetail = res;
			console.log( $scope.artistdetail );
			artistwork( $scope.artistdetail[0].id , $scope.artistdetail[0].fname );

		}
	
	}).error(function() {
		alert("Please check your internet connection or data source..");
	});

	$scope.artistwork = function( artistId, artistname  ){
		artistwork( artistId , artistname );
	}
	var artistwork = function( artistId, artistname  ){
		$http.get(baseURL + 'getartworkbyid/'+ artistId  ).success(function(res) {
			if (res.status == 'false') {
				alert(res.message);
			} else {
				angular.element(document.getElementById("artistartwork")).scope().artistname = artistname;
				angular.element(document.getElementById("artistartwork")).scope().artworks = res;
			}
		
		});
	}

}		