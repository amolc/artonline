function newsfeedController($rootScope,$scope, $location, $state, $http, Pagination) {
    if( window.localStorage.getItem('islogin') === 'true' ){
    $('header,footer').show();
    $scope.adminusername=window.localStorage.getItem('username');
	$scope.newsfeed = {};
	$scope.selectedItem = false;
	$scope.housingid = window.localStorage.getItem('hid');
	$scope.logo = window.localStorage.getItem('logo'); 



	var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);

		
	$scope.addnewsfeed={
		isMenu : false,
		 typeid :'',
		 title:'',
		 description:'',
		 housingid:'',
		 date: today
	};
	
	

	    $scope.data={hid:$scope.housingid};	    		
		$http.post(baseURL + 'newsFeed',$scope.data).success(function(res) {
				$scope.response = res;
		
				if (res.status == 'false') {
				} else {
					$scope.newsfeed=res;					
				}


			//start  pagination code
			
			//if( $scope.newsfeed.length > 10 ){
				$scope.pagination = Pagination.getNew(10);
				$scope.pagination.numPages = Math.ceil($scope.newsfeed.length/$scope.pagination.perPage);
			//}

			//end pagination
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		
			
			$scope.del=function(news){
				console.log( news.id );
			$http.get(baseURL + 'deleteNews/'+news.id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					//$route.reload();
				return news.id = ! news.id;  
				}


			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
		
		
		$scope.printNews=function( news ){
			$('#printNews').modal('show');
			console.log( news );
			angular.element(document.getElementById("printNews")).scope().singleNews = news;
		};

		
		  
   }
   else{
   	$state.go('/adminlogin');
   }
}

function newsfeedController2($rootScope,$scope, $location, $state, $http) {
    if( window.localStorage.getItem('islogin') === 'true' ){
    $('header,footer').show();
    $scope.adminusername=window.localStorage.getItem('username');
	
	$scope.selectedItem = false;
	$scope.housingid = window.localStorage.getItem('hid');
	$scope.logo = window.localStorage.getItem('logo'); 



	var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);

		
	$scope.addnewsfeed={
		isMenu : false,
		 typeid :'',
		 title:'',
		 description:'',
		 housingid:'',
		 date: today
	};
	
	

	    $scope.data={hid:$scope.housingid};	    		
		
				//for getting type of news and their id to insert
			$http.get(baseURL + 'newstype').success(function(res) {
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.typeitems=res;
				}
			
			});
			
			
			
		$scope.updateType=function( typeid ){
			console.log( typeid );
			$scope.addnewsfeed.typeid = typeid;
		};

		$scope.Addnewsfeed=function(addnewsfeed){
			
			$http.post(baseURL + 'addNews', addnewsfeed).success(function(res) {
					$scope.response = res;
					//console.log(res);
					if (res.status == false) {
						alert(res.message);
					} else {
						$scope.notifmessage={
							message:addnewsfeed.title+"  "+addnewsfeed.description,
							h_id:$scope.housingid
						};
						
						 $http.post(baseURL + 'pushnotification',$scope.notifmessage).success(function(res) {
							 $scope.response = res;
							 console.log(res);
							 }).error(function() {
								 alert("Please check your internet connection or data source..");
						 });
						$('#newsconfirmation').modal('hide');
						$scope.addnewsfeed.title= '';
						$scope.addnewsfeed.description= '';
						
						$('.modal-backdrop').remove();
						$state.go("app.news.list");	
							
						
						
					}
				}).error(function() {
					alert("Please check your internet connection or data source..");
				});
		};
		$scope.Validatenewsfeed=function(addnewsfeed){
			
			$scope.addnewsfeed.housingid=$scope.housingid;
			//addnewsfeed.description=(nl2br(addnewsfeed.description));
			//alert(addnewsfeed.description);
			var timeStamp =Math.round((new Date()).getTime() / 1000);
			$scope.addnewsfeed.datetime = timeStamp;
			console.log( $scope.addnewsfeed );

			if ( addnewsfeed.typeid == '' || addnewsfeed.typeid == 'undefined' ) {
				alert('select type from list');
			} else if(addnewsfeed.title == ''){
			    alert('Enter title of news');
			}else if(addnewsfeed.description == ''){
			    alert('Enter  description of news ');
			}else if(addnewsfeed.housingid == ''){
			    alert('housing id not found');
			 }
			else {	
				$('#newsconfirmation').modal('show');
				
				
			}
		
		};
		
		
   }
   else{
   	$state.go('/adminlogin');
   }
}





function nl2br(str, is_xhtml) {
		  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display
		  return (str + '')
		    .replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }
function helpController( $rootScope,$scope, $location, $http  ){
		$('header,footer').show();
	$scope.adminusername=window.localStorage.getItem('username');
	
	
	$scope.housingid = window.localStorage.getItem('hid');
	$scope.logo = window.localStorage.getItem('logo'); 		

}