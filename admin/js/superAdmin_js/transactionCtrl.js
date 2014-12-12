function transactionCtrl($rootScope,$scope, $http, $cookieStore ,Pagination){

    $scope.transactions = { };
 
 $http.get(baseURL + 'listAllOrders'  ).success(function(res) {
  
    console.log(res);
   $scope.transactions = res; 
   $scope.pagination = Pagination.getNew( 50 );
   $scope.pagination.numPages = Math.ceil( $scope.transactions.length/$scope.pagination.perPage);
   }).error(function() {
   alert("Please check your internet connection or data source..");
  });
 //console.log(id);
 //alert(id);

 //$http.post(baseURL + 'getransaction', { key : 'tax_rate'} ).success(function(res) {$scope.options.tax_rate = res.value; });
 //$http.post(baseURL + 'getransaction', { key : 'minimum_payment'} ).success(function(res) {$scope.options.minimum_payment = res.value; });

 
 



  };