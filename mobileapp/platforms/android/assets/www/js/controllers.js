angular.module('starter.controllers', [])

.controller('DashCtrl', function( $rootScope, $scope, $http , $ionicLoading ) {
  $ionicLoading.hide();
  $scope.housingid = window.sessionStorage.getItem("housingid");
  $scope.association_details = JSON.parse( window.sessionStorage.getItem("association_details") );
  $scope.data = { hid: $scope.housingid };         
  
  $http.post(baseURL + 'newsFeed',$scope.data).success(function(res) {
    if (res.status == 'false') {
    } else {
      $scope.newsfeed=res;                
    }
  
  }).error(function() {
    alert("Please check your internet connection or data source..");
  });

  $scope.showFullDesc = function( $event ){
    console.log( $event.target );
    angular.element( $event.target ).toggleClass('on' );
  }

})

.controller('styrlenCtrl', function( $scope, $http, $state, $ionicLoading, $ionicPopup ) {
  $scope.association_details = JSON.parse( window.sessionStorage.getItem("association_details") );
  console.log( $scope.association_details ) ;
  $scope.FormDetails = {
    housingid : $scope.association_details.housing_ass_id,
    type: '',
    name : '',
    email : '',
    description : ''
  };
  
  $scope.styrelenFormSubmit = function( FormDetails ){
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      
      $scope.data = { hid: $scope.association_details.housing_ass_id };  
      $http.post(baseURL + 'boardContact',$scope.data).success(function(res) {
        if (res.status == 'false') {
          alert('Board Contact is empty.');
        } else {
          if(res.email ){
              FormDetails.sentto = res.email;
              $http.post(baseURL + 'styrelsenformsubmit', FormDetails ).success(function(res) {
                if (res.status == false) {
                  console.log( $scope.message )  ;
                  $ionicLoading.hide();          
                } else {
                  $ionicLoading.hide();          
                  $scope.showDisclaimer();
                }
              }).error(function() {
                alert("Please check your internet connection or data source..");
              });
          }
        }
        
      }).error(function() {
        alert("Please check your internet connection or data source..");
      });

  };

  // An alert dialog
   $scope.showDisclaimer = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Ska ditt meddelande till styrelsen!',
       templateUrl: 'templates/disclaimer.html',
       okText :'STANG'
     });
     alertPopup.then(function(res) {
        $state.go('tab.thankyou');
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

})

.controller('thankyouCtrl', function( $scope ) {
    $scope.housingid = window.sessionStorage.getItem("housingid");
    $scope.association_details = JSON.parse( window.sessionStorage.getItem("association_details") );
})


.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('contactsCtrl', function($scope, contacts ) {

  $scope.association_details = JSON.parse( window.sessionStorage.getItem("association_details") );
  $scope.data = { hid: $scope.association_details.housing_ass_id };         

  contacts.all( $scope.data ).success(function( allfriends ){
      $scope.friends = allfriends;
      console.log( $scope.friends );
  });

})
.controller('styrelsemedlemmarCtrl', function($scope, contacts ) {

  $scope.association_details = JSON.parse( window.sessionStorage.getItem("association_details") );
  $scope.data = { hid: $scope.association_details.housing_ass_id };         

  contacts.styreall( $scope.data ).success(function( allfriends ){
      $scope.friends = allfriends;
      console.log( $scope.friends );
  });

})


.controller('HomeCtrl', function($scope) {
})

.controller('RentedCtrl', function($scope) {
})


.controller('MuncipalityCtrl', function( $scope, $stateParams ,Muncipalities) {
	
  Muncipalities.get( $stateParams.Mid ).success(function( muncipalities ){
  	$scope.muncipalities = muncipalities;  	
  });

})

.controller('hassociationCtrl', function( $scope, $stateParams , HAssociation ) {
	$scope.muncipalty_id = $stateParams.Mid;
	HAssociation.get( $stateParams.Mid ).success(function( hasscoiations ){
		$scope.hasscoiations = hasscoiations;
    console.log( $scope.hasscoiations );
	});  
})

.controller('StateController', function($scope, States) {
	States.all().success(function( states ) {
    	$scope.allstates = states;
    	console.log( 'all sates controller' );
 	});

})
.controller('loginCtrl', function( $http, $scope, $stateParams, $state, $ionicLoading ){
      $scope.login = {
          password: '',
          housingid : $stateParams.Hid
      };

      $scope.LoginMe = function( login ){
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
          $http.post(baseURL + 'HousingAppLogin', login ).success(function(res) {
            
            if (res.status == false) {
              console.log( $scope.message )  ;
              alert('Wrong Password.');
              $ionicLoading.hide();
            } else {
              res.data[0].logo = logoURL+res.data[0].logo;
              window.sessionStorage.setItem( 'association_details', JSON.stringify( res.data[0] ) );
              window.sessionStorage.setItem("housingid", login.housingid );
              $state.go('tab.dash');
              }
          }).error(function() {
            alert("Please check your internet connection or data source..");
          });
      }

	     /*$scope.toggleLeft = function() {
          $ionicSideMenuDelegate.toggleLeft();
        };*/
});


function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}