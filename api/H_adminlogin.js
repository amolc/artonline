var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });
 var CRUD = require('mysql-crud');
 var adduuidCRUD=CRUD(db, 'tbl_notification');
 
 
 exports.login = function(req, res) {
 	// var username=req.body.username;

 	var password=req.body.password; 
    var housingid=req.body.housingid; 
    
    var query = "SELECT tbl_contact_detail.contact_id, tbl_housing_association.logo,tbl_housing_association.housing_ass_id, tbl_housing_association.housing_ass_name FROM tbl_contact_detail, tbl_housing_association WHERE tbl_contact_detail.contact_id = tbl_housing_association.contact_id and tbl_contact_detail.password='"+password+"'and tbl_contact_detail.email='"+housingid+"'";
    console.log( "SELECT tbl_contact_detail.contact_id, tbl_housing_association.logo,tbl_housing_association.housing_ass_id, tbl_housing_association.housing_ass_name FROM tbl_contact_detail, tbl_housing_association WHERE tbl_contact_detail.contact_id = tbl_housing_association.contact_id and tbl_contact_detail.password='"+password+"'and tbl_contact_detail.email='"+housingid+"'")    ;
          db.query(query, function(err, rows){
    console.log( rows );        
 	  	var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
 	  	if(rows.length>0){
    


 	  		resdata.data=rows;
 	  		resdata.status=true;
 	  		resdata.message='successfully login welcome to admin panel.';  	
 	  	}else{
 	  	
 	  		resdata.status=false;
 	  		resdata.message='wrong username or password please enter a valid password ';
 	  	}  	
 	  	res.jsonp(resdata);
 	  });
 }; 

  exports.apphousinglogin = function(req, res) {
 	// var username=req.body.username;
 	var password=req.body.password; 
    var housingid=req.body.housingid; 
    var token = req.body.token_id; 
    var device = req.body.device; 
    var query = "SELECT * FROM tbl_housing_association WHERE building_password='"+password+"' and housing_ass_id='"+housingid+"'";
          db.query(query, function(err, rows){
          	console.log(query);	
 	  	var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
 	  	if(rows.length>0){
 	  		resdata.data=rows;
 	  		resdata.status=true;
 	  		resdata.message='successfully login welcome to admin panel.';  	
        adduuidCRUD.destroy({'device' : device },function (err, vals) { console.log(err ) });
        adduuidCRUD.create({'device' : device ,'token_id' : token,'housing_ass_id':housingid },function (err, vals) {
          console.log( err );
        } );

 	  	}else{
 	  	
 	  		resdata.status=false;
 	  		resdata.message='wrong username or password please enter a valid password ';
 	  	}  	
 	  	res.jsonp(resdata);
 	  });
 }; 