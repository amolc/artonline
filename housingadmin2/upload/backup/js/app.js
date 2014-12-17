angular.module('up', [ 'ui.router'])

.config( function( $stateProvider, $urlRouterProvider ){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html",
            //controller : 'adminLoginController'
        })

})




angular.module('up',[])
.controller('uploader',['$scope','$http',function($scope,$http){
		function($scope,$http){
			$scope.upload=function(){
				$http.post(baseURL,$scope.files,
				{
					headers:{'Content-Type':'multipart/form-data'}
				})
					.success(function(d){
						console.log(d);
					})
			}
		}



}])