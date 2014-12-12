// board contacts boardContact
function boardcontactController($rootScope,$scope, $location, $http) {
	if(window.localStorage.getItem('islogin')==='true'){
		$scope.logo = window.localStorage.getItem('logo'); 
	$('header,footer').show();
    $scope.adminusername = window.localStorage.getItem('username');
    $scope.housingid = window.localStorage.getItem('hid');
	//$scope.contact = {};
	$scope.animatesubmenu = function(){
			 $scope.addcontact.isMenu = !$scope.addnewsfeed.isMenu;
		};	
	
	$scope.addcontact = { isMenu : false }

	$scope.boardContact = {
		email :'',
		contact_name:'',
		hid:$scope.housingid		 
	};
		
	    $scope.data={hid:$scope.housingid};	 
		$http.post(baseURL + 'boardContact',$scope.data).success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
				} else {
					$scope.boardContact=res;
					console.log($scope.boardContact);
				}
			
		}).error(function() {
			alert("Please check your internet connection or data source..");
		});
		
		$scope.enableedit = function( boardContact ){
			$('#editprofilebtn').hide();
			$('#updateprofilebtn').show();
			jQuery('#boardcontactform input, #boardcontactform textarea, #boardcontactform select').prop('disabled', false);
		}

		$scope.edit = function( boardContact ){
			$('#boardcontactform input,#boardcontactform textarea, #boardcontactform select').prop('disabled', true );
			$('#editprofilebtn').show();
			$('#updateprofilebtn').hide();
			console.log( boardContact );
		 
			$http.post(baseURL + 'UpdateBoardContact/', boardContact ).success(function(res) {
				//$scope.response = res;
				
				if (res.status == 'false') {
				} else {
					//$scope.boardContact=res;
					//console.log(res);
				}
				
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		

		/*$scope.boardContact=function(boardContact){
			if (boardContact.contact_type == '') {
				alert('Enter a contact type');
			} else if(boardContact.email == ''){
			    alert('Enter email');
			}else if(boardContact.phone == ''){
			    alert('Enter phone number  ');
			}else if(boardContact.weblink == ''){
			    alert('Enter weblink ');
			    }else if(boardContact.description == ''){
			    alert('Enter description ');
			}else {		      
				$http.post(baseURL + 'addContact', boardContact ).success(function(res) {
					$scope.response = res;
					console.log(res);
					if (res.status == false) {
						alert(res.message);
					} else {
						$location.path("/Contact");
					}
				}).error(function() {
					alert("Please check your internet connection or data source..");
				});
			}
		};*/
		
		$scope.goto=function(page){
			$location.path(page);	
		};
				
   }
    else{
   	$location.path('Adminlogin');
   }
	
}
function contactsingleController($rootScope,$scope, $location, $http) {

}
// other contacts
function contactController($rootScope,$scope, $location, $http) {
	if(window.localStorage.getItem('islogin')==='true'){

		$('header,footer').show();
    $scope.adminusername=window.localStorage.getItem('username');
    $scope.housingid = window.localStorage.getItem('hid');
    $scope.logo = window.localStorage.getItem('logo'); 
	$scope.contact = {};
	$scope.selectedIndex = '';
	
	/*$scope.animatesubmenu = function(){
		 $scope.addcontact.isMenu = !$scope.addcontact.isMenu;
	};*/

	$scope.addcontact = {
		isMenu : false,
		 contact_type :'',
		 phone:'',
		 phone_x:'',
		 email :'',
		 email_x :'',
		 web_link_title:'',
		 weblink:'',
		 weblink_x:'',
		 name:'',
		 name_x:'',
		 type:0,
		 hid:$scope.housingid		
	};
		
	    $scope.data={hid:$scope.housingid};	 
		$http.post(baseURL + 'contact',$scope.data).success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
				} else {
					$scope.contact=res;					
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
		});

		$scope.viewContact = function( singleContact, index ){
			$scope.selectedIndex = index;
			jQuery('#contactform input').prop('disabled', true);
			angular.element(document.getElementById("contactform")).scope().singleContact = singleContact;
			angular.element(document.getElementById("contactform")).scope().index = index;
			$('#editcontact,#deletecontact,#contactform').show();
			$('#updatecontact').hide();
		};
			
		$scope.enableedit = function(){
			$('#editcontact,#deletecontact').hide();
			$('#updatecontact').show();
			jQuery('#contactform input').prop('disabled', false);
		};

		$scope.edit = function(singleContact, index ){
			
			if (singleContact.contact_name == '') {
			   alert('Enter Name ');
			} else if(singleContact.email == ''){
			    alert('Enter email');
			} else if(singleContact.phone_number == ''){
			    alert('Enter phone number  ');
			} else {		      
				$http.post(baseURL + 'UpdateContact', singleContact).success(function(res) {
					$scope.response = res;
					console.log(res);
					if (res.status == false) {
						alert(res.message);
					} else {
						$('#editcontact,#deletecontact').show();
						$('#updatecontact').hide();
						jQuery('#contactform input').prop('disabled', true);			
						$scope.contact[index] = singleContact;
					}
				}).error(function() {
					alert("Unable to update, please try later.");
				});
			}
			
		};
			
		$scope.shiftup = function( contact ){	
			console.log( 'Select = '+$scope.selectedIndex );
			if( $scope.selectedIndex > 0 ){
				var previndex = $scope.contact[ $scope.selectedIndex - 1 ];	
				$scope.contact[ $scope.selectedIndex - 1 ] = $scope.contact[ $scope.selectedIndex ];
				$scope.contact[ $scope.selectedIndex ] = previndex;
				$scope.selectedIndex = $scope.selectedIndex - 1;
				angular.element(document.getElementById("contactform")).scope().singleContact = $scope.contact[ $scope.selectedIndex ];
				angular.element(document.getElementById("contactform")).scope().index = $scope.selectedIndex;

				// update orderss
				$http.post( baseURL + 'reorderContacts', contact ).success(function(res) {
					$scope.response = res;
					if (res.status == false) {
						alert(res.message);
					} else {
						
					}
				}).error(function() {
					alert("Please check your internet connection or data source..");
				});
			}
			
		

		};

		$scope.deleteContact = function( singleContact, index ){
			$http.get(baseURL + 'deleteContact/'+ singleContact.id ).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					jQuery('#contactform input').prop('disabled', true);			
					jQuery('#contactform').hide();
					$scope.contact.splice(index, 1);    					
				}
			
			}).error(function() {
				alert("Unable to delete, please try again.");
			});
				
		};
			
		$scope.Addcontact = function( addcontact ){
			$http.post(baseURL + 'addContact', addcontact).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/Kontakter");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
		};
		
		

		
		$scope.goto=function(page){
			$location.path(page);	
		};
			
						
			

   }
    else{
   	$location.path('Adminlogin');
   }
	
}

function contactsecondController($rootScope,$scope, $location, $http) {
	if(window.localStorage.getItem('islogin')==='true'){

		$('header,footer').show();
    $scope.adminusername=window.localStorage.getItem('username');
    $scope.housingid = window.localStorage.getItem('hid');
    $scope.logo = window.localStorage.getItem('logo'); 
	$scope.contact = {};
	$scope.selectedIndex = '';
	
	

	$scope.addcontact = {
		 contact_type :'',
		 phone:'',
		 phone_x:'',
		 email :'',
		 email_x :'',
		 web_link_title:'',
		 weblink:'',
		 weblink_x:'',
		 name:'',
		 name_x:'',
		 type:1,
		 hid:$scope.housingid		
	};
		
	    $scope.data={hid:$scope.housingid};	 
		$http.post(baseURL + 'contactsecond',$scope.data).success(function(res) {
				$scope.response = res;
				if (res.status == 'false') {
				} else {
					$scope.contact=res;					
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
		});

		$scope.viewContact = function( singleContact, index ){
			$scope.selectedIndex = index;
			jQuery('#contactform input').prop('disabled', true);
			angular.element(document.getElementById("contactform")).scope().singleContact = singleContact;
			angular.element(document.getElementById("contactform")).scope().index = index;
			$('#editcontact,#deletecontact,#contactform').show();
			$('#updatecontact').hide();
		};
			
		$scope.enableedit = function(){
			$('#editcontact,#deletecontact').hide();
			$('#updatecontact').show();
			jQuery('#contactform input').prop('disabled', false);
		};

		$scope.edit = function(singleContact, index ){
			console.log( singleContact );
			if (singleContact.contact_name == '') {
			   alert('Enter Name ');
			} else if(singleContact.email == ''){
			    alert('Enter email');
			} else if(singleContact.phone_number == ''){
			    alert('Enter phone number  ');
			} else {		      
				$http.post(baseURL + 'UpdateContact', singleContact).success(function(res) {
					$scope.response = res;
					console.log(res);
					if (res.status == false) {
						alert(res.message);
					} else {
						$('#editcontact,#deletecontact').show();
						$('#updatecontact').hide();
						jQuery('#contactform input').prop('disabled', true);			
						$scope.contact[index] = singleContact;
					}
				}).error(function() {
					alert("Unable to update, please try later.");
				});
			}
			
		};
			

		$scope.deleteContact = function( singleContact, index ){
			$http.get(baseURL + 'deleteContact/'+ singleContact.id ).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					jQuery('#contactform input').prop('disabled', true);			
					jQuery('#contactform').hide();
					$scope.contact.splice(index, 1);    					
				}
			
			}).error(function() {
				alert("Unable to delete, please try again.");
			});
				
		};
			
		$scope.Addcontact=function(addcontact){
			    
				$http.post(baseURL + 'addContact', addcontact).success(function(res) {
					$scope.response = res;
					if (res.status == false) {
						alert(res.message);
					} else {
						$location.path("/Kontakter_styrelsen");
					}
				}).error(function() {
					alert("Please check your internet connection or data source..");
				});
		
		};
		
		$scope.shiftup = function( contact ){	
			
			if( $scope.selectedIndex > 0 ){
				var previndex = $scope.contact[ $scope.selectedIndex - 1 ];	
				$scope.contact[ $scope.selectedIndex - 1 ] = $scope.contact[ $scope.selectedIndex ];
				$scope.contact[ $scope.selectedIndex ] = previndex;
				$scope.selectedIndex = $scope.selectedIndex - 1;
				angular.element(document.getElementById("contactform")).scope().singleContact = $scope.contact[ $scope.selectedIndex ];
				angular.element(document.getElementById("contactform")).scope().index = $scope.selectedIndex;

				// update orderss
				$http.post( baseURL + 'reorderContacts', contact ).success(function(res) {
					$scope.response = res;
					if (res.status == false) {
						alert(res.message);
					} else {
						
					}
				}).error(function() {
					alert("Please check your internet connection or data source..");
				});

			}
			
		};

		$scope.goto=function(page){
			$location.path(page);	
		};
			
						
			

   }
    else{
   	$location.path('Adminlogin');
   }
	
}


