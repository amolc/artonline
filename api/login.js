var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });
 var CRUD = require('mysql-crud');
 exports.login = function(req, res) {
 	var name=req.body.username;
 	var password=req.body.buildingpass; 
 	  CRUD(db, 'tbl_housing_association').load({housing_ass_name : name,building_password : password }, function (err, val) {	 
 	  	var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
 	  	if(val.length>0){
 	  		resdata.status=true;
 	  		resdata.message='successfully login welcom to ..';  		
 	  	}else{
 	  		resdata.status=false;
 	  		resdata.message='fel lösenord ange en giltig';
 	  	}
 	  	  
 	  	res.jsonp(resdata);
 	  });
 }; 
 exports.checktokenid = function(req, res) {
 	var token_id=req.body.token_id;
 	var hid=req.body.housing_id; 
 		var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
		 var query = "SELECT * from tbl_notification where token_id ='"+token_id+"'OR housing_ass_id="+hid;
          db.query(query, function(err, rows){
      		if(rows.length==0){
	        resdata.status=true;
	        resdata.message='';  		
	 	  	}else{
	 	  		console.log();
	 	  		resdata.status=false;
	 	  		resdata.message='wrong';
 	  	  } 	  	  
 	  	   res.jsonp(resdata);
   		});
 };