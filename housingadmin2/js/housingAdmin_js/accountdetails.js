function accountdetailsController( $rootScope, $scope, $http) {
	$scope.addArtist = function(add) {
			console.log(add);
	$http.post(baseURL + 'addetails', add).success(function(res) {
 })
};


$scope.addArtwork = function(add1) {
			console.log(add1);
	$http.post(baseURL + 'addartwork', add1).success(function(res) {
 }) 
};


}
function paypalController( $rootScope, $scope, $http, Pagination, $locale ) {
	if(window.localStorage.getItem('islogin') === 'true' ){
		
	    $scope.adminusername= window.localStorage.getItem('username');
	    $scope.contact_id = window.localStorage.getItem('contact_id');
	    $scope.logo = window.localStorage.getItem('logo'); 
		
		$scope.housing_ass_id = window.localStorage.getItem('hid');

		$scope.orderDetail = {
			hid : $scope.housing_ass_id,
			start_date : '',
			end_date : '2014-11-28 00:00:00',
			amount : '10',
			firstname : 'Amol',
			lastname : 'Vhankalas',
			type:undefined ,
			number : 4417119669820331, 
			securityCode : 874,
			paymessage : '',
			apartment_count : 0
		}

		$http.get(baseURL + 'profile/'+$scope.housing_ass_id ).success(function(res) {	
			if (res.status == 'false') {
			} else {
				$scope.orderDetail.apartment_count = res.apartment_count;				
			}
		
		});

		$scope.account = { isMenu : false }
		$http.post(baseURL + 'getoptions', { key : 'flat_rate'} ).success(function(res) {
			$scope.orderDetail.flat_rate = res.value; 
		});
		$http.post(baseURL + 'getoptions', { key : 'tax_rate'} ).success(function(res) {
			$scope.orderDetail.tax_rate = res.value; 
		});
		$http.post(baseURL + 'getoptions', { key : 'minimum_payment'} ).success(function(res) {
			$scope.orderDetail.minimum_payment = res.value; 
		});

		$scope.currentYear = new Date().getFullYear()
      	$scope.currentMonth = new Date().getMonth() + 1
      	$scope.months = $locale.DATETIME_FORMATS.MONTH
      	
      	
      	$scope.save = function( orderDetail, paymentForm ){
 			if ($scope.paymentForm.$valid){
	          console.log( orderDetail ) // valid data saving stuff here
	          $scope.orderDetail.paymessage = 'Processing, please wait...';
	        	$http.post(baseURL + 'addOrder/', orderDetail ).success(function(res) {
					console.log( res );
					
					$scope.orderDetail.paymessage = res.message
				});	

	        }
      	}
		
      	$scope.gopaypal = function( orderDetail ){
 			  console.log( orderDetail ) // valid data saving stuff here	
	        /*$scope.orderDetail.paymessage = 'Processing, please wait...';
        	$http.post(baseURL + 'addpaypalOrder/', orderDetail ).success(function(res) {
				$scope.orderDetail.paymessage = res.message
			});	*/
	        simpleCart.empty();
	        simpleCart.add({ name : 'Subscription', price : 20, });
      	}

		
		
		
   }
    else{
   	$state.go('app');
   }
	
}
function paymentController( $rootScope, $scope, $http) {

$scope.artists= {};

	$http.get(baseURL + 'getartist').success(function(res) {
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