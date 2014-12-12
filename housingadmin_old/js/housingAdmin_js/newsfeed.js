function newsfeedController($rootScope,$scope, $location, $http,$route,$cookieStore) {
    if($cookieStore.get('islogin')==true){
    $scope.adminusername=$cookieStore.get('username');
	$scope.newsfeed = {};
	$scope.selectedItem=false;
	$scope.addnewsfeed={
		 typeid :'',
		 title:'',
		 description:'',
		 housingid:'',
	};
	
	$scope.housingid = $cookieStore.get('hid');
	    $scope.data={hid:$scope.housingid};	    		
		$http.post(baseURL + 'newsFeed',$scope.data).success(function(res) {
				$scope.response = res;
				console.log('res = '+res);
				if (res.status == 'false') {
				} else {
					$scope.newsfeed=res;
					console.log($scope.newsfeed);
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
				//for getting type of news and their id to insert
			$http.get(baseURL + 'newstype').success(function(res) {
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.typeitems=res;
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
			$scope.del=function(id){
			$http.get(baseURL + 'deleteNews/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					$route.reload();
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
		function nl2br(str, is_xhtml) {
		  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>'; // Adjust comment to avoid issue on phpjs.org display
		  return (str + '')
		    .replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }

			
			$scope.Addnewsfeed=function(addnewsfeed){
			$scope.addnewsfeed.typeid =$scope.selectedItem.type_id;
			$scope.addnewsfeed.housingid=$scope.housingid;
			//addnewsfeed.description=(nl2br(addnewsfeed.description));
			//alert(addnewsfeed.description);
			var timeStamp =Math.round((new Date()).getTime() / 1000);
			$scope.addnewsfeed.datetime=timeStamp;
			if (addnewsfeed.typeid == '') {
			alert('select type from list');
			} else if(addnewsfeed.title == ''){
			    alert('Enter title of news');
			}else if(addnewsfeed.description == ''){
			    alert('Enter  description of news ');
			}else if(addnewsfeed.housingid == ''){
			    alert('housing id not found');
			 }
			 else {	
			 		      
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
					console.log('housing id ==='+$scope.notifmessage.h_id);
					
					// $http.post(baseURL + 'pushnotification',$scope.notifmessage).success(function(res) {
							// $scope.response = res;
							// console.log(res);
						// }).error(function() {
							// alert("Please check your internet connection or data source..");
						// });
					$location.path("/Newsfeed");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		
		};
				$scope.edit=function(id){
				$location.path('/Editnewsfeed/'+id);	
			};
			$scope.view=function(id){
				$location.path('/Viewnewsfeed/'+id);	
			};
			
			$scope.goto=function(page){
				$location.path(page);	
			};
			
			$scope.logout=function(){
				$cookieStore.put('islogin',false);
				$location.path('/Adminlogin');	
			};
			
			
			
			  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
   };
   }
   else{
   	$location.path('/Adminlogin');
   }
}


function editnewsfeedController($rootScope,$scope, $location, $http,$routeParams,$cookieStore) {
	if($cookieStore.get('islogin')==true){
    $scope.adminusername=$cookieStore.get('username');
    	//for getting type of news and their id to insert
			$http.get(baseURL + 'newstype').success(function(res) {
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.typeitems=res;
					console.log($scope.typeitems);
				}
				 var id=$routeParams.id;				
			 $http.get(baseURL + 'newsfeeddetail/'+id).success(function(res) {
				  $scope.response = res;
				  $scope.newsfeeddetail=res;
				 
		 for(var i=0;i<$scope.typeitems.length;i++)
             {
        		if($scope.typeitems[i].type_id==$scope.newsfeeddetail.type_id){
       	    	$scope.selectedItem= $scope.typeitems[i];  
       	     }
      
         }
             }).error(function() {
				  alert("Please check your internet connection or data source..");
			  });
			 
				
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
		
			 
	 $scope.editnewsfeed=function(newsfeeddetail){
	 	$scope.newsfeeddetail.type_id =$scope.selectedItem.type_id;
	 	var timeStamp =Math.round((new Date()).getTime() / 1000);
		if (newsfeeddetail.type_id == '') {
			 alert('select type form list ');
		 } else if(newsfeeddetail.description == ''){
		     alert('Enter description');
		 } else if(newsfeeddetail.title == ''){
		     alert('Enter  title ');
		 }else {
		 	 $scope.newsfeeddetail.time=timeStamp;		      
			 $http.post(baseURL + 'updateNews', newsfeeddetail).success(function(res) {
				 $scope.response = res;
				 console.log(res);
				 if (res.status == false) {
					 alert(res.message);
				 } else {
					 $location.path("/Newsfeed");
				 }
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 });
		 }
		 };
		 
		 $scope.goto=function(page){
				 $location.path(page);	
			 };
			 
       $scope.logout=function(){
	    $cookieStore.put('islogin',false);
	    $location.path('/Adminlogin');	
		};
			
   $scope.showhide = function(id){
	 if(document.getElementById(id).style.display == 'none'){
     document.getElementById(id).style.display = 'block';
    }else{
   	 document.getElementById(id).style.display = 'none';
    }
    };
   }
    else{
   	$location.path('Adminlogin');
   }
   
  
   
}
