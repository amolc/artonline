var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });
 var CRUD = require('mysql-crud');
 var notificationCRUD=CRUD(db, 'tbl_notification');
 exports.senddata = function(req, res) { 
 	 var device=req.body.device;
 	 var token=req.body.token_id;	
 	 var hid=req.body.housing_id;  
 	  var query = "SELECT * from tbl_notification where token_id ='"+token+"'";
          db.query(query, function(err, rows){
          	
          	var resdata={status:false,
		  		      message:''};
      		if(rows.length==0){		
	        notificationCRUD.create({'device' :device,'token_id' : token,'housing_ass_id':hid}, function (err, vals) {
		  	
		  	if(parseInt(vals.affectedRows)>0){
		  		resdata.status=true;
		  		resdata.message='data successfully added';
			  	res.jsonp(resdata);
			  	}else{
			  		 resdata.status=false;
		  		      resdata.message='record not added ';
			  	      res.jsonp(resdata);
		  	     }
		      });

	 	  	}else{
	 	  	res.jsonp(resdata);
 	  	  } 	  	  
 	  	   
   		});
   		
    };