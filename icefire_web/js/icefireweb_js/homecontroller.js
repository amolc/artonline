function signupController($rootScope,$scope, $location, $http, $routeParams,$cookieStore) {
    $scope.$on('$viewContentLoaded', function() {
        menumgmt();
    });

    $scope.goto = function(page) {
        $location.path(page);
    }
    $scope.user = {
        housename :'',
        org_number:'',
        apartment_count :'',
        county :'',
        m_id :'',
        address : '',
        zipcode:'',
        contact_name:'',
        role:'',
        telephone_no :'',
        email :'',
        password :'',
        confirm_password :''

    };

    $scope.signup = function(user) {
        if(user.housename == ''){
            alert('Enter Bostadsrättsförening.');
        } else if( user.org_number == '' ){    
            alert( 'Enter Org nummer' );
        } else if( user.apartment_count == '' ){    
            alert( 'Enter Antal lägenheter' );
        } else if( user.county == '' ){    
            alert( 'Enter Län' );
        } else if( user.m_id == '' ){    
            alert( 'Select Kommun' );
        } else if( user.address == '' ){    
            alert( 'Enter Adress 1' );
        } else if( user.zipcode == ''){    
            alert( 'Enter Address 2' );
        } else if( user.contact_name == '' ){    
            alert( 'Select Kontaktperson' );
        } else if(user.role == ''){
            alert('Enter Roll i styrelsen.');
        } else if(user.email == ''){
            alert('Enter Email id.');
        } else if( typeof user.email == 'undefined'){
            alert('Enter Valid Email id.');
        /*} else if(user.password == ''){
            alert('Enter Password.');
        } else if(user.confirm_password == ''){
            alert('Bekräfta lösenord.');
        } else if( user.password != user.confirm_password ){
            alert('Password doest not matches.');*/
        } else {     
            user.county_label = $('#county option:selected').text();
            user.m_id_label = $('#m_id option:selected').text();
            //console.log( user );
            $http.post( baseURL + 'createContact', user).success(function(res) {
                $scope.response = res;
                    if (res.status == false) {
                        alert(res.message);
                    } else {
                        $location.path("/Thanks");
                    }
                }).error(function() {
                     alert("Unable to signup, please try later.");
                });
        }
    };

    // get all states/lans

    $http.get(baseURL + 'state').success(function(res) {
        if (res.status == 'false') {
            console.log(res.message);
        } else {
            $scope.states=res;
            console.log( $scope.states );            
        }
    });

    $scope.loadkommuns = function( id ){
        $http.get(baseURL + 'municipality/'+id ).success(function(res) {
            if (res.status == 'false') {
                console.log(res.message);
            } else {
                $scope.muncies=res;
                console.log( $scope.muncies );            
            }
        });
    }
    
}
function helloController($rootScope,$scope, $location, $http, $routeParams,$cookieStore) {
    $scope.$on('$viewContentLoaded', function() {
        menumgmt();
    });

    $scope.guest = {
                email :''
            };
    $scope.subscribe = function(guest) {            
            
            if( guest.email == ''){
                alert('Enter Email.');
            } else {
             $('#subscribefrom').html('Subscribed Successfully!');
            console.log( guest );
            /*$http.post( baseURL + 'subscribe', guest).success(function(res) {
                $scope.response = res;
                if (res.status == false) {
                    alert(res.message);
                } else {
                    //$location.path("/Thanks");
                    alert('done');
                }
            }).error(function() {
                 alert("Unable to subscribe, please try again.");
            });*/
            } 
    };

    $scope.goto = function(page) {
        $location.path(page);
    };
}


function homeController($rootScope,$scope, $location, $http, $routeParams,$cookieStore) {

	$scope.$on('$viewContentLoaded', function() {
        menumgmt();
    });
    $scope.goto = function(page) {
		$location.path(page);
	};
    $scope.showlink = function(page) {
        
    };
}
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });

}
window.onload = init();

function menumgmt(){

    if( $(window).width() < 768 ){
        $('#mobilemenu').click(function(){
            $('.navigation_main').toggle('slow');
        });
        //$('.header_logo_nav_main').before('<span href="#">asasasas</span>');
        $('.header_login_main').remove();
        $('.navigation_main ul').append('<li><a href="/housingadmin2">Login</a></li><li><a href="#/sign-up">Signup</a></li>');
        /*$('.navigation_main ul').each(function() {
            
            var select = $(document.createElement('select')).insertBefore($(this).hide());
            $('>li a', this).each(function() {
                
                option = $(document.createElement('option')).appendTo(select).val(this.href).html($(this).html() ) ;
                var url = this.href;
                if( '#/'+url.split("#/")[1] == window.location.hash ){
                    //console.log( '#/'+url.split("#/")[1] +'=='+ window.location.hash );
                    option.attr("selected",true);
                }
            });
        });
        
        $('#headtop select').prepend('<option value="0">Menu</option>');
        $('#headtop select').change(function(){
            if( $(this).val() != 0 )
                window.location = $(this).val() ;
        });*/

    }
}