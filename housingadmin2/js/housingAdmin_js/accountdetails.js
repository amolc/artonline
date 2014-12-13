function newartistController( $rootScope, $scope, $http) {
	$scope.artist = {
		mobileno : ''		
	};
	$scope.addArtist = function(artist) {
		$http.post(baseURL + 'addetails', artist).success(function(res) {
	 	})
	};

}
function addartworkController( $rootScope, $scope, $http, $state ) {
	$scope.selectedartist = { id : ''}
	$scope.artists = {};
	$http.get(baseURL + 'getartists').success(function(res) {
		//$scope.artists = res;
        if (res.status == 'false') {
            console.log(res.message);
        } else {
            $scope.artists = res;
            console.log( $scope.artists );
        }
    });

	$scope.changeartist = function( artist_id ) {
		$scope.selectedartist.id = artist_id;				
	};

	$scope.artwork = {};
	$scope.addArtwork = function( artwork ) {
		artwork.artist = $scope.selectedartist.id;
		$http.post(baseURL + 'addartwork', artwork).success(function(res) {
			if( res.status == true )
				$state.go('app.artist.artworklist');
	 	}) 
	};

	$scope.uploadupdatelogo = function(){
			var oFReader = new FileReader();
		    oFReader.readAsDataURL(document.getElementById("assologo").files[0]);

		    oFReader.onload = function (oFREvent) {
		    	document.getElementById("associationlogo").src = oFREvent.target.result;
		        //$scope.profile.logo = oFREvent.target.result;
		        //document.getElementById("associationlogoinput").value = oFREvent.target.result;
		        
		        var file = $scope.myFile;
				if( file ){
					window.localStorage.setItem('logo',file.name);
					$scope.logo = window.localStorage.getItem('logo');
					var fd = new FormData();
					fd.append('file', file );
	        		
		        	$http.post( baseURL + 'uploadlogo/', fd, { transformRequest: angular.identity,
		            	headers: {'Content-Type': undefined } } ).success(function(res) {
						
						if (res.status == 'false') {
						} else {
							$scope.profile.logo = file.name;
							$http.post(baseURL + 'UpdateProfile/', $scope.profile );
						}
						
					}).error(function() {
						alert("Upload Failed.");
					});
				}
		    };
			
		}
		
}

function artworkController( $rootScope, $scope, $http) {

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





