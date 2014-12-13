'use strict';
angular.module('artonline', ['ui.router'])

.config( function( $stateProvider, $urlRouterProvider ){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "partials/home.html",
           // controller : 'adminLoginController'
        })


})