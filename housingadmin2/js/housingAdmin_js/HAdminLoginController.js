function appController( $scope, $location, $http ){
	$scope.isActive = function ( path ) { 
	
			if ( $location.path().substr(0, path.length) == path ) {
		      return "active"
		    } else {
		      return ""
		    }
	        //return viewLocation === $location.path();
	    }

	$scope.islogin = window.localStorage.getItem('islogin');
	if( $scope.islogin === 'true' ){
		
	} else {
   		$location.path('adminlogin');
    }

	$scope.logout=function(){
		window.localStorage.setItem('islogin',false);
		$location.path('/adminlogin');	
	};

}
function adminLoginController($scope, $location, $http, $state ) {
	$('#main_login').height( $(window).height() );
	//window.localStorage.setItem('islogin',false);
	$scope.islogin = window.localStorage.getItem('islogin');
	
	if( $scope.islogin === 'true' ){
		$state.go('app.artist.addartwork');
	}

	
	$scope.login = function(user) {
		if(user.email == ''){
		    alert('Enter Email id ');
		} else if(user.password == ''){
		    alert('Enter password');
		}else {		 
				console.log(user);     
			$http.post(baseURL + 'HousingAdminLogin', user).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					 //  alert(res.data[0].housing_ass_id);
		//			window.localStorage.setItem('email',res.data[0].user_email);
					//window.localStorage.setItem('hid',res.data[0].housing_ass_id);
					//window.localStorage.setItem('logo',res.data[0].logo);
					//window.localStorage.setItem('username',user.housingid);
					window.localStorage.setItem('islogin',true);
					$state.go("app.home");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
	};
	$scope.sendemail=function(){
    $http.get(baseURL + 'send').success(function(res) {
				alert('okkaa');
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		
	};
}


function lostpasswordCtrl($scope, $location)
{		$('#main_login').height( $(window).height() );
	$('header,footer').hide();
	window.localStorage.setItem('islogin',false);
	$scope.islogin = false;



	 $scope.FormDetails={
                email:''
}
 
        $scope.lostpassFormSubmit = function( FormDetails ){
         			
       FormDetails.sentto = FormDetails.res;
              console.log(FormDetails);
           //   $scope.view={
        	//		details:'If you have entered exact password then mail has been sent to your mail id successfully please click on Admin login'
        //}       
              $http.post(baseURL + 'lostpasswordformsubmit', FormDetails ).success(function(res) {
    
          			if(res.status==true)
            	{
            		    $scope.view={
            			details:  'Check ur mail id for password'
            		               }
            		
                }
            		     else
            		{
            			$scope.view={
            			details:'Incorrect mail id'
            				
            	                 	}	
            	     	$scope.FormDetails={
                        email:''
                                           }	
            		}
        		

              })  //.error(function() {
                //alert("Please check your internet connection or data source..");
            	//$scope.view={
            	//		details:' click on adminlogin'
            	//	}
            
             //});
          
        
        
    

  };

}  