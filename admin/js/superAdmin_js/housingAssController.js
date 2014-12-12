function housingAssController($rootScope,$scope, $location, $http,$cookieStore,Pagination) {
    if($cookieStore.get('islogin')==true){
    $scope.adminusername=$cookieStore.get('username');
     $rootScope.items = [];
		$scope.hous={
		 h_name :'',
		 m_ID :'',
		 address:'',
		 bPass:''
	};
	$scope.selectedItem='false';
		$http.get(baseURL + 'allHousingAss').success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.housingass=res;

			$scope.pagination = Pagination.getNew( 50 );
			$scope.pagination.numPages = Math.ceil( $scope.housingass.length/$scope.pagination.perPage);
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		
			//for getting municipality and their d to insert in add housing association
			
			 $http.get(baseURL + 'allmunicipality').success(function(res) {
				 $scope.response = res;
				 if (res.status == 'false') {
					 alert(res.message);
				 } else {
					 $scope.municipalitylist = res;
				 }


			
			


			 }).error(function() {
			 alert("Please check your internet connection or data source..");
			});
			
			$scope.del=function(id){
			$http.get(baseURL + 'deleteHousingAss/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				}else {
					$route.reload();			
         	        }
			
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
			$scope.AddHousingAss=function(){
			$scope.hous.m_ID=$scope.selectedItem.m_id;
			if ($scope.hous.h_name == '') {
			alert('Enter a Housing Association Name ');
		    } else if($scope.hous.m_ID == null){
		    alert('select state name ');
		  }
		    else if($scope.hous.address == ''){
		    alert('enter address ');
		} else if($scope.hous.bPass == ''){
		    alert('enter building password');
	 }	  else {  
			 $http.post(baseURL + 'addHousingAss',$scope.hous).success(function(res) {
				 $scope.response = res;
				 
				 if (res.status == false) {
					 alert(res.message);
				 } else {
					 alert(res.message);
					
				 }

			
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 });
		 }
		};
			
			$scope.goto=function(page){
				$location.path(page);	
			};
			$scope.edit=function(id){
				$location.path('/Edithousingass/'+id);	
			};
			$scope.view=function(id){
				$location.path('/Viewhousingass/'+id);	
			};
			$scope.logout=function(){
				$cookieStore.put('islogin',false);
				$location.path('/Adminlogin');	
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
   	$location.path('/Adminlogin');
   }
	
}

function adminedithousController($rootScope,$scope, $location, $http,$routeParams,$cookieStore) {
	   //for getting state and their d to insert in add housing association
	if($cookieStore.get('islogin')==true){
		$scope.adminusername = $cookieStore.get('username');	
	

		if( $routeParams.id > 0 ) {
			$http.get(baseURL + 'getAssdetail/'+$routeParams.id).success(function(res) {
				$scope.assdetail=res;
				if (res.status == 'false') {
				} else {

					// get states
					$http.get(baseURL + 'state').success(function(res) {
				        if (res.status == 'false') {
				            
				        } else {
				            $scope.states=res;
				            if( $scope.assdetail.county ){
				            	for(var i=0;i<$scope.states.length;i++)
						        {
					        		if( $scope.states[i].state_id == $scope.assdetail.county ){
					        			$scope.selectedCounty = $scope.states[i];  
					        		}
				 				}	
				            }
				            
				        }
				    });
				    // get muncipalties
					if( $scope.assdetail.county ){
						$scope.updatemumciplatiesciew( $scope.assdetail.county );
					}
				}	 	 
		 	});
		}		

		 	// get muncipalty list 
	    $scope.updatemumciplatiesciew = function( id ){
	    	
	    	$http.get(baseURL + 'municipality/'+id ).success(function(res) {
		        if (res.status == 'false') {
		            
		        } else {
		            $scope.muncies=res;
		            if( $scope.assdetail.m_id )
			        {    for(var i=0;i<$scope.muncies.length;i++)
				        {
			        		if( $scope.muncies[i].m_id==$scope.assdetail.m_id ){
			        			$scope.selectedMunci = $scope.muncies[i];  
			        		}
		 				}
		            }
		        }
		    });	
	    }
			
			

		$scope.edithou = function(assdetail){
			assdetail.county = $scope.selectedCounty.state_id;
			assdetail.m_id = $scope.selectedMunci.m_id;

			
			$http.post(baseURL + 'updateHousingAss', assdetail).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/HousingAssociation");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
		
		};
		
		$scope.goto=function(page){
				$location.path(page);	
			};
			$scope.logout=function(){
				$cookieStore.put('islogin',false);
				$location.path('/Adminlogin');	
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
   	$location.path('/Adminlogin');
   }
		}