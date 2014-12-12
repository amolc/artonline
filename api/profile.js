var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var profileCRUD = CRUD(db, 'tbl_housing_association');

 
 exports.profiledetail = function(req, res) {
 	var id = parseInt(req.params.id);
 	  profileCRUD.load({housing_ass_id:id}, function (err, val) {	  
 	  	res.jsonp(val[0]);
 	  });    
 }; 
 
	//update contact
	exports.updateProfile = function(req, res) {
			
		  profileCRUD.update({'housing_ass_id' :req.body.housing_ass_id },{
		  	'housing_ass_name' :req.body.housing_ass_name,
		  	'apartment_count' : req.body.apartment_count,
		  	'org_number' : req.body.org_number,
		  	'county':req.body.county,
		  	'address':req.body.address,
		  	'zipcode':req.body.zipcode,
		  	'm_id' : req.body.m_id,
		  	'description':req.body.description,
		  	'building_password':req.body.building_password,
		  	'logo' : req.body.logo
		  }, function (err, val) {	  
		  if(parseInt(val.affectedRows)>0){
		  		var resdata={
		  			status:true,
		  			massage:'updated  successfuly'
		  		   };
		  		  }else{
		  		  	var resdata={
		  			status:false,
		  			massage:'not updated'
		  		   };
		  		  	
		  		  }
		  		res.jsonp(resdata);
		  });    

	}; 

 