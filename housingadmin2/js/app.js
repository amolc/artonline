'use strict';
angular.module('icefire', [ 'ngRoute','ui.router','simplePagination' ])

.config( function( $stateProvider, $urlRouterProvider ){
    $urlRouterProvider.otherwise('/adminlogin');

    $stateProvider
        .state('adminlogin', {
            url: "/adminlogin",
            templateUrl: "partials/housing_admin/adminlogin.html",
            controller : 'adminLoginController'
        })

$stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "partials/housing_admin/menus.html",
            controller : 'appController'
        })
        .state('app.home', {
            url: "/home",
            templateUrl: "partials/housing_admin/home.html",
            controller : 'profileController'
        })
        .state('app.terms', {
            url: "/terms",
            templateUrl: "partials/housing_admin/terms.html",
            controller : 'helpController'
        })
        .state('app.konto', {
            url: "/konto",
            templateUrl: "partials/housing_admin/konto.html",
            controller : 'accountdetailsController'
        })       //asdfdsgfdgdfghdfghdf 
        .state('app.konto.betalning', {
            url: "/betalning",
            templateUrl: "partials/housing_admin/betalning.html",
            controller : 'accountdetailsController'
        })
        .state('app.konto.pay', {
            url: "/pay",
            templateUrl: "partials/housing_admin/payment.html",
            controller : 'paypalController'
        })
        .state('app.konto.orders', {
            url: "/orders",
            templateUrl: "partials/housing_admin/orders.html",
            controller : 'paymentController'
        })
        .state('losenord', {
            url: "/losenord",
            templateUrl: "partials/housing_admin/losenord.html",
            controller : 'lostpasswordCtrl'
        })
        .state('app.news', {
            url: "/news",
            templateUrl: "partials/housing_admin/newsbasic.html",
            abstract : true
            
        })
        .state('app.news.list', {
            url: "/list",
            templateUrl: "partials/housing_admin/newsfeed.html",
            controller : 'newsfeedController'
        })
        .state('app.news.new', {
            url: "/new",
            templateUrl: "partials/housing_admin/addnewsfeed.html",
            controller : 'newsfeedController2'
            
        })
        
        
        .state('app.styrelsen', {
            url: "/styrelsen",
            templateUrl: "partials/housing_admin/styrelsen.html",
            controller : 'boardcontactController'
        })
        .state('app.kontakter', {
            url: "/kontakter",
            templateUrl: "partials/housing_admin/kontakter.html",
            controller:"contactController"

        })
        .state('app.kontakter.addcontact', {
            url: "/addcontact",
            templateUrl: "partials/housing_admin/addcontact.html",
            controller:"contactController"
        })
        .state('app.kontakter.Kontakter_styrelsen', {
            url: "/Kontakter_styrelsen",
            templateUrl: "partials/housing_admin/kontakter_styrelsen.html",
            controller:"contactsecondController"
        })
        .state('app.kontakter.newStyrelsen', {
            url: "/newStyrelsen",
            templateUrl: "partials/housing_admin/addstyrelsen.html",
            controller:"contactsecondController"
            
        })
        .state('app.help', {
            url: "/help",
            templateUrl: "partials/housing_admin/help.html",
            controller: "helpController"            
        })
        .state('app.help.helpdocs', {
            url: "/helpdocs",
            templateUrl: "partials/housing_admin/helpdocs.html"
        })
        .state('app.help.kontaktaoss', {
            url: "/kontaktaoss",
            templateUrl: "partials/housing_admin/kontaktaoss.html"
        })
        

})


.directive("hideMe", function ( $animate ) {
  return function (scope, element, attrs) {
    var clickClassName = 'off';
    scope.$watch( attrs.hideMe, function (newVal) {
      //element.hasClass(clickClassName) ? $animate.removeClass(element, clickClassName) : $animate.addClass(element, clickClassName);
        if( element.hasClass(clickClassName) ){
            $animate.removeClass(element, clickClassName)
        } else {
          //$animate.addClass(element, clickClassName);  
        } 
    /*if (newVal) {
        element.addClass(element, "fade");
    } else {
        element.removeClass(element, "fade");
    }*/            
    })
  }
}).directive('',function(angular){
    return 
})
.directive('fileModel', function ($parse) {
    return function(scope, element, attrs) {

            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                    console.log( element[0].files[0] );
                });
            });
        }
    
})
.directive('printDirective', function ($parse) {
    return  {
    restrict: 'A',
    link : function(scope, element, attrs) {
        element.bind('click', function () {
            var printSection = document.getElementById('printSection');
            var elemToPrint = document.getElementById(attrs.printElementId);
            if (elemToPrint) {
                var domClone = elemToPrint.cloneNode(true);
                $('#printSection').html('')
                printSection.appendChild(domClone );
                window.print();
            }
        });

        window.onafterprint = function () {
            // clean the print section before adding new content
            printSection.innerHTML = '';
        }
    }

 };   

    

})
.run(function( $http, $rootScope ){
    $rootScope.profile = function( housing_ass_id ){
        return $http.get(baseURL + 'profile/'+ housing_ass_id );
    }
});

angular.module('icefire').directive
  ( 'creditCardType'
  , function(){
      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(value){
              scope.orderDetail.type =
                (/^5[1-5]/.test(value)) ? "mastercard"
                : (/^4/.test(value)) ? "visa"
                : (/^3[47]/.test(value)) ? 'amex'
                : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'discover'
                : undefined
              ctrl.$setValidity('invalid',!!scope.orderDetail.type)
              return value
            })
          }
        }
      return directive
      }
    )

angular.module('icefire').directive
  ( 'cardExpiration'
  , function(){
      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            scope.$watch('[orderDetail.month,orderDetail.year]',function(value){
              ctrl.$setValidity('invalid',true)
              if ( scope.orderDetail.year == scope.currentYear
                   && scope.orderDetail.month <= scope.currentMonth
                 ) {
                ctrl.$setValidity('invalid',false)
              }
              return value
            },true)
          }
        }
      return directive
      }
    )

angular.module('icefire').filter
  ( 'range'
  , function() {
      var filter = 
        function(arr, lower, upper) {
          for (var i = lower; i <= upper; i++) arr.push(i)
          return arr
        }
      return filter
    }
  )

 