function addcollectorCtrl( $rootScope, $scope, $http) {
	
	$scope.addCollector = function(add) 
	{
	     console.log(add);	     
		$http.post(baseURL + 'addcollector', add).success(function(res) {
	 	}) 
	}

	};


	function listcollectorCtrl($rootScope,$scope,$http)
	{

	$scope.collectors= {};

	$http.get(baseURL + 'getcollector').success(function(res) {
				$scope.collectors = res;
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




	 function editcollectorCtrl($rootScope,$scope,$http,$state,$stateParams)
	 {
	 		$scope.collect={		
	};
		var id=$stateParams.id;		
		console.log(id);		
			 $http.get(baseURL + 'collectordetails/'+id).success(function(res) {
			 	console.log(res);
				 $scope.response = res;
				 $scope.collect=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 }); 

$scope.updateCollector=function(collect){
						console.log(collect);
			$http.post(baseURL + 'updatecollector',collect).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$state.go("app.collector.listcollector");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}



	 }





	 function addcollectionController($rootScope, $scope, $http, $state) {
	$scope.selectedcollector = { id : ''}
	$scope.collectors = {};
	$http.get(baseURL + 'getcollector').success(function(res) {
		console.log(res);
		//$scope.artists = res;
        if (res.status == 'false') {
            console.log(res.message);
        } else {
            $scope.collectors = res;
            console.log( $scope.collectors );
        }
    });

	$scope.changecollector = function( collector_id ) {
		$scope.selectedcollector.id = collector_id;				
	};


	$scope.addCollection = function( add ) {
		var formdata = new FormData();
		formdata.append('artist', $scope.selectedcollector.id);
		formdata.append('title', add.title );
		formdata.append('type', add.type );
		formdata.append('name', add.name );
		formdata.append('size', add.size );
		console.log( $scope.myFile );
		var file = $scope.myFile;
		console.log(formdata);
		if( file ){
			//artwork.file = file.name	
			formdata.append('file', file );
			console.log( formdata );

		}
	
		$http.post(baseURL + 'addcollection', formdata, { transformRequest: angular.identity,
		            	headers: {'Content-Type': undefined } } ).success(function(res) {
			
			/*if( res.status == true )
				$state.go('app.collection.collectionlist'); */
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



