// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
var storeApp =angular.module('icefire', ['ionic', 'ngTouch','ngSanitize','angular-carousel'])
	

    .config(function ($stateProvider, $urlRouterProvider) {
	
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
    
        $stateProvider
      	 	.state('Menu', {
                url: '/Menu',
                templateUrl: 'templates/menu.html'
           })
           .state('State', {
				url: '/State',
				templateUrl: 'templates/state.html'
			})
			.state('Municipality', {
				url: '/Municipality/:param',
				templateUrl: 'templates/municipality.html'
			})
			.state('Login', {
				url: '/Login/:name',
				templateUrl: 'templates/login.html'
			})
				.state('Newsfeed', {
				url: '/Newsfeed/:name',
				templateUrl: 'templates/news_feed.html'
			})
				.state('Notification', {
				url: '/Notification',
				templateUrl: 'templates/notification.html'
			})
			.state('Forgetpassword', {
				url: '/Forgetpassword',
				templateUrl: 'templates/forgetpassword.html'
			})
			.state('Contact', {
				url: '/Contact',
				templateUrl: 'templates/contactlist.html'
			})
			.state('Submit', {
				url: '/Submit',
				templateUrl: 'templates/submit.html'
			})
			.state('Disclaimer', {
				url: '/Disclaimer',
				templateUrl: 'templates/Disclaimer.html'
			})
			.state('Thanks', {
				url: '/Thanks',
				templateUrl: 'templates/thankyou.html'
			})
			.state('Housing', {
				url: '/Housing/:id',
				templateUrl: 'templates/housingass.html'
			});			
            
        $urlRouterProvider.otherwise('/State');
    })
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
    

