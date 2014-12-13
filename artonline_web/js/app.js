'use strict';

angular.module('icefire', ['ngTouch','ngRoute','ngAnimate','ngCookies'])
		.config(['$routeProvider', function ($routeProvider) {    
	    	$routeProvider.when('/Home', {templateUrl: 'partials/home.html', controller : 'homeController' });
	        $routeProvider.when('/Help', {templateUrl: 'partials/Help.html', controller : 'homeController' });
	        $routeProvider.when('/Howitwork', {templateUrl: 'partials/How it works.html', controller : 'homeController' });
	        $routeProvider.when('/Map', {templateUrl: 'partials/Map.html', controller : 'homeController' });
	        $routeProvider.when('/Thanks', {templateUrl: 'partials/Thank You.html', controller : 'homeController' });
	        $routeProvider.when('/privacy-policy', {templateUrl: 'partials/privacy-policy.html', controller : 'homeController' });
	        $routeProvider.when('/sitemap', {templateUrl: 'partials/sitemap.html', controller : 'homeController' });
	        $routeProvider.when('/sign-up', {templateUrl: 'partials/sign-up.html', controller : 'signupController' });			
	        $routeProvider.when('/Hello', {templateUrl: 'partials/hello.html', controller : 'homeController' });			
	        $routeProvider.otherwise({redirectTo: '/Home'});
}]);

