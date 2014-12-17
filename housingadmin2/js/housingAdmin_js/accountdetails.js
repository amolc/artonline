function newartistController( $rootScope, $scope, $http, $state) {
	$scope.artist = {
		mobileno : ''		
	};
	$scope.addArtist = function(artist) {
			var formdata = new FormData();
			formdata.append('fname',artist.fname);
			formdata.append('location',artist.location);
			formdata.append('mobileno',artist.mobileno);
			formdata.append('email',artist.email);				
			formdata.append('artdes',artist.artdes);
				$scope.myFile	

		$http.post(baseURL + 'addetails', formdata, { transformRequest: angular.identity,
		            	headers: {'Content-Type': undefined } } ).success(function(res){
	 				
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$state.go("app.artist.listartist");
				}

	 	}).error(function() {
				alert("Please check your internet connection or data source..");
			});
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
		var formdata = new FormData();
		formdata.append('artist', $scope.selectedartist.id );
		formdata.append('title', artwork.title );
		formdata.append('type', artwork.type );
		formdata.append('size', artwork.size );
		console.log($scope.myFile);
		var file = $scope.myFile;
		
		if( file ){
			//artwork.file = file.name	
			formdata.append('file', file );
			console.log(formdata);

		}
		
		$http.post(baseURL + 'addartwork', formdata, { transformRequest: angular.identity,
		            	headers: {'Content-Type': undefined } } ).success(function(res) {
			
			if( res.status == true )
				$state.go('app.artist.artworklist');
	 	}) 
	};

	$scope.uploadupdatelogo = function(){
			var oFReader = new FileReader();
		    oFReader.readAsDataURL(document.getElementById("assologo").files[0]);

		    oFReader.onload = function (oFREvent) {
		    	document.getElementById("associationlogo").src = oFREvent.target.result;
		        
		        
		        var file = $scope.myFile;
				if( file ){
					window.localStorage.setItem('logo',file.name);
					$scope.logo = window.localStorage.getItem('logo');
					var fd = new FormData();
					
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
		
   				



function editartistController( $rootScope, $scope, $http,$stateParams,$state) {

			 
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
					$state.go("app.artist.listartist");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};





