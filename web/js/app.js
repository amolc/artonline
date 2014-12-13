'use strict';
angular.module('artonline', ['ui.router'])

.config( function( $stateProvider, $urlRouterProvider ){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html",
            controller : 'homeController'
        })
.state('artist', {
            url: "/artist",
            templateUrl: "partials/artist.html",
           // controller : 'adminLoginController'
        })

.state('collector', {
            url: "/collector",
            templateUrl: "partials/collector.html"
           // controller : 'adminLoginController'
        })


})




