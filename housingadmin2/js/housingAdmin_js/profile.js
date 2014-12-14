function accessController( $rootScope, $scope, $location, $http, $state ) {
	$scope.logout=function(){
		window.localStorage.setItem('islogin',false);
		//$location.path('/icefire_web');	
		$state.go('adminlogin');
	};		
}
function profileController( $rootScope, $scope, $location, $http ) {
	$scope.islogin = window.localStorage.getItem('islogin');
	if( $scope.islogin === 'true' ){
			
	    $scope.adminusername=window.localStorage.getItem('username');
	    $scope.housing_ass_id = window.localStorage.getItem('hid');
	    $scope.contact_id = window.localStorage.getItem('contact_id');
	    $scope.logo = window.localStorage.getItem('logo');

		//$scope.data={hid:$scope.housingid};
		

		
		$http.get(baseURL + 'profile/'+$scope.housing_ass_id ).success(function(res) {	
			if (res.status == 'false') {
			} else {
				$scope.profile=res;
				if( $scope.profile.logo == '' )
					$scope.profile.logo ='defaultlogo.jpg';
				// get muncipalties
				if( $scope.profile.county ){
					$scope.updatemumciplatiesciew( $scope.profile.county );
				}
				// get states
				$http.get(baseURL + 'state').success(function(res) {
			        if (res.status == 'false') {
			            //console.log(res.message);
			        } else {
			            $scope.states=res;
			            if( $scope.profile.county ){
			            	for(var i=0;i<$scope.states.length;i++)
					        {
				        		if( $scope.states[i].state_id==$scope.profile.county ){
				        			$scope.selectedCounty = $scope.states[i];  
				        		}
			 				}	
			            }
			            
			        }
			    });
			}
		
		}).error(function() {
			alert("Please check your internet connection or data source..");
		});
		
		
	    // get muncipalty list 
	    $scope.updatemumciplatiesciew = function( id ){
	    	console.log( id );
	    	$http.get(baseURL + 'municipality/'+id ).success(function(res) {
		        if (res.status == 'false') {
		            //console.log(res.message);
		        } else {
		            $scope.muncies=res;
		            console.log( $scope.profile.m_id );
		            if( $scope.profile.m_id )
			        {    for(var i=0;i<$scope.muncies.length;i++)
				        {
			        		if( $scope.muncies[i].m_id==$scope.profile.m_id ){
			        			$scope.selectedMunci = $scope.muncies[i];  
			        		}
		 				}
		            }
		        }
		    });	
	    }
	    
		$scope.enableedit = function( profile ){
			$('#editprofilebtn').hide();
			$('#updateprofilebtn').show();
			jQuery('#profileform input, #profileform textarea, #profileform select').prop('disabled', false);
		}
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

		$scope.edit = function( profile ){
			$('#profileform input,#profileform textarea, #profileform select').prop('disabled', true );
			$('#editprofilebtn').show();
			$('#updateprofilebtn').hide();
			profile.housing_ass_id = $scope.housing_ass_id;
			profile.county = $scope.selectedCounty.state_id;
			profile.m_id = $scope.selectedMunci.m_id;
			
			
			$http.post(baseURL + 'UpdateProfile/', profile ).success(function(res) {
				//$scope.response = res;
				
				if (res.status == 'false') {
				} else {
					//$scope.profile=res;
					//console.log(res);
				}
				
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		
			
   }
    else{
   	$location.path('Adminlogin');
   }
	$scope.goto=function(page){
				$location.path(page);	
	};	
	$scope.logout=function(){
		window.localStorage.setItem('islogin',false);
		$location.path('/adminlogin');	
	};
}
/*function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("assologo").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("associationlogo").src = oFREvent.target.result;
        document.getElementById("associationlogoinput").value = oFREvent.target.result;
    };
};*/