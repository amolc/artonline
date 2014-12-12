'use strict';

angular.module('myApp', ['ngAnimate','ngTouch','ui.router','ngCookies','myApp.controllers','simplePagination'])
   

   .config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/adminlogin");
      
      $stateProvider
        .state('adminlogin', {
            url: "/adminlogin",
            templateUrl: "partials/super_admin/adminlogin.html",
               controller: "adminLoginController" 
        })
     	$stateProvider
        .state('menu', {
            url: "/menu",
            templateUrl: "partials/super_admin/menu.html",
             controller: "menuCtrl"           
        })
          
		$stateProvider
        .state('menu.addstate', {
            url: "/addstate",
            templateUrl: "partials/super_admin/addState.html",
            controller:"adminstateController"
        })
        $stateProvider
        .state('menu.manstate', {
            url: "/manstate",
            templateUrl: "partials/super_admin/admin.html",
          controller:"adminstateController"
        })
        $stateProvider
        .state('menu.editstate', {
            url: "/editstate/:id",
            templateUrl: "partials/super_admin/editstate.html",
            controller:"admineditstateController"
        })

$stateProvider
        .state('menu.viewstate', {
            url: "/viewstate/:id",
            templateUrl: "partials/super_admin/viewstate.html",
            controller:"admineditstateController"
        })


        $stateProvider
        .state('menu.municipality', {
            url: "/municipality",
            templateUrl: "partials/super_admin/addmunicipality.html",
            controller:"adminmunicipalityController"
        })
        
        	$stateProvider
        .state('menu.adminmunicipality', {
            url: "/adminmunicipality",
            templateUrl: "partials/super_admin/adminMunicipality.html",
            controller:"adminmunicipalityController"
        })
        $stateProvider
        .state('menu.editmunicipality', {
            url: "/editmunicipality/:id",
            templateUrl: "partials/super_admin/editmunicipality.html",
            controller:"admineditmunController"
        })


            $stateProvider
        .state('menu.viewmunicipality', {
            url: "/viewmunicipality/:id",
            templateUrl: "partials/super_admin/viewmunicipality.html",
            controller:"admineditmunController"
        })


        	$stateProvider
        .state('menu.housingassociation', {
            url: "/housingassociation",
            templateUrl: "partials/super_admin/housingAssociation.html",
               controller:"housingAssController" 
        })
        	$stateProvider
           .state('menu.price', {
            url: "/price",
            templateUrl: "partials/super_admin/pricing.html",
            controller:"optionCtrl"
        })
           $stateProvider
           .state('menu.transaction', {
            url: "/transaction",
            templateUrl: "partials/super_admin/transaction.html",
            controller:"transactionCtrl"
        })


          
        
 /*        	$stateProvider
        .state('menu.Kontaktersidemenu.Kontakter', {
            url: "/Kontaktersidemenu.Kontakter",
            templateUrl: "partials/Kontakter.html"
        })
 
   	$stateProvider
        .state('menu.helpsidemenu', {
            url: "/helpsidemenu",
            templateUrl: "partials/helpsidemenu.html"
        })
        	$stateProvider
        .state('menu.helpsidemenu.help', {
            url: "/helpsidemenu.help",
            templateUrl: "partials/help.html"
        })
 
*/

 })









/*
angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices',
    'ngCookies',
    'simplePagination'
]).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/State', {templateUrl: 'partials/state.html'});
	$routeProvider.when('/Adminstate', {templateUrl: 'partials/super_admin/state.html'});
	$routeProvider.when('/Addstate', {templateUrl: 'partials/super_admin/addState.html'});
	$routeProvider.when('/Viewstate/:id', {templateUrl: 'partials/super_admin/viewstate.html'});
	$routeProvider.when('/Viewmunicipality/:id', {templateUrl: 'partials/super_admin/viewmunicipality.html'});
	$routeProvider.when('/Viewhousingass/:id', {templateUrl: 'partials/super_admin/viewhousigass.html'});
	
	$routeProvider.when('/Adminmunicipality', {templateUrl: 'partials/super_admin/adminMunicipality.html'});
	$routeProvider.when('/Addmunicipality', {templateUrl: 'partials/super_admin/addmunicipality.html'});
	$routeProvider.when('/AddHousingAss', {templateUrl: 'partials/super_admin/addhousingass.html'});
	
	$routeProvider.when('/Admin', {templateUrl: 'partials/super_admin/admin.html'});
	$routeProvider.when('/Price', {templateUrl: 'partials/super_admin/pricing.html'});
	$routeProvider.when('/Testlogin', {templateUrl: 'partials/super_admin/testlogin.html'});
	$routeProvider.when('/Editstate/:id', {templateUrl: 'partials/super_admin/editstate.html'});
	$routeProvider.when('/Editmunicipality/:id', {templateUrl: 'partials/super_admin/editmunicipality.html'});
	
	$routeProvider.when('/Edithousingass/:id', {templateUrl: 'partials/super_admin/editHousingAss.html'});
	
	$routeProvider.when('/HousingAssociation', {templateUrl: 'partials/super_admin/housingAssociation.html'});
	$routeProvider.when('/Adminlogin', {templateUrl: 'partials/super_admin/adminlogin.html'});
	$routeProvider.when('/LostPassword', {templateUrl: 'partials/super_admin/lostpassword.html',controller: 'lostPasswordCtrl'});
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/Adminlogin'});
    $routeProvider.when('/Municipality/:id', {templateUrl: 'partials/municipality.html'});
    $routeProvider.when('/Housing/:id', {templateUrl: 'partials/housingass.html'});
    $routeProvider.when('/Login', {templateUrl: 'partials/login.html',controller: 'loginController'});
}]);
*/

/*

.directive('myHome',function(){
	return{
		
		templateUrl:'partials/home.html'

	};

});

*/