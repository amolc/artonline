function transactionCtrl($rootScope,$scope, $http, $cookieStore ){

    
	$scope.transction = {
		'id' : '',
		'start_date' : '',
		'end_date' : '',
		'amount' : '',
		'end_date' : '',
		'housing_id' : '',
		'status' : ''


	} 

	$http.get(baseURL + 'listAllOrders', { hid : 'id'} ).success(function(res) {$scope.options.flat_rate = res.value; });
	console.log(hid);
	//$http.post(baseURL + 'getransaction', { key : 'tax_rate'} ).success(function(res) {$scope.options.tax_rate = res.value; });
	//$http.post(baseURL + 'getransaction', { key : 'minimum_payment'} ).success(function(res) {$scope.options.minimum_payment = res.value; });

	




		};