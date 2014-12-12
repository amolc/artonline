exports.iphonenotify = function(req, res) {
	var message=req.body.message;
	var hid=req.body.h_id;
	console.log('housing id= '+hid);
   var http = require('http');
    var apn = require('apn');
    var url = require('url');
    var mysql = require('mysql');
	var db = mysql.createPool({
		database : 'icefire',
	     user : 'icefire2',
		password : 'ferrari4321',
	    host :'localhost',
	 });
        
    var note = new apn.Notification();
    note.expiry = Math.floor(Date.now() / 1000) + 3600;
    note.badge = Number(1) || 0 ;
    note.sound = "notification-beep.wav";
    note.alert = { "body" : message, "action-loc-key" : "Play" , "launch-image" : "mysplash.png"};
    note.payload = {'messageFrom': 'admin'};
 
     
    var callback = function(errorNum, notification){
      console.log('Error is: %s', errorNum);
      console.log("Note " + notification);
    };
    var options = {
      gateway: 'gateway.sandbox.push.apple.com', // this URL is different for Apple's Production Servers and changes when you go to production
      errorCallback: callback,
      cert: '/home/node/icefire/assets/BostardCer.pem',                 
      key:  '/home/node/icefire/assets/BostardKey.pem',                 
      passphrase: 'ferrari1234',                 
      port: 2195,                       
      enhanced: true,                   
      cacheLength: 100                  
    };
    var totalrows={};
     var CRUD = require('mysql-crud');
     var notifCrud=CRUD(db, 'tbl_notification');
     
     notifCrud.load({'housing_ass_id':hid}, function (err, val) {	 	  	
 	  	  totalrows=val; 	
 	  	  console.log(totalrows.length);  	 
		  for(i=0;i<totalrows.length;i++){
		  	console.log(totalrows[i].token_id);
		    var myDevice = new apn.Device(totalrows[i].token_id);
		    note.device = myDevice;
		    var apnsConnection = new apn.Connection(options);
		    apnsConnection.pushNotification( note, myDevice );
		    }
		    	var resdata={
		    		status:true
		    	};
		 	res.jsonp(resdata);   	  
 	  }); 	  
};




