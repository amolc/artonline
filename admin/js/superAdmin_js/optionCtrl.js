function optionCtrl($rootScope,$scope, $location, $http, $cookieStore ){

    
	$scope.options = {
		'flat_rate' : '',
		'tax_rate' : '',
		'minimum_payment' : ''
	} 

	$http.post(baseURL + 'getoptions', { key : 'flat_rate'} ).success(function(res) {$scope.options.flat_rate = res.value; });
	$http.post(baseURL + 'getoptions', { key : 'tax_rate'} ).success(function(res) {$scope.options.tax_rate = res.value; });
	$http.post(baseURL + 'getoptions', { key : 'minimum_payment'} ).success(function(res) {$scope.options.minimum_payment = res.value; });

	$scope.addprice = function(options){
					console.log(options);

						          var keys = [];
						for(var k in options)   {
							
								var newoptions = {
									'key' : k,
									'value' : options[k]
        								}					
						
						$http.post(baseURL + 'addprice',newoptions).success(function(res) {
							$scope.response = res;
							console.log(res);
						/*	if (res.status == false) {
								alert(res.message);
							} else {
								alert(res.message);
							
							} */
						}).error(function() {
							alert("Please check your internet connection or data source..");
						});			
					};
					
			};


		$scope.goto=function(page){
				$location.path(page);	
			};
			
			$scope.edit=function(id){
				$location.path('/Editstate/'+id);	
			};
			
			$scope.statedata=function(id){
				$location.path('/Viewstate/'+id);	
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