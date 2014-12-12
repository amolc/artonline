
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });


 var CRUD = require('mysql-crud');
 var accountdetailsCRUD = CRUD(db, 'tbl_contact_detail');
 var housingAssociationCRUD = CRUD(db, 'tbl_housing_association');
 exports.findHousinnAss = function(req, res) {
 	     var id = parseInt(req.params.id);
 		 var query = "SELECT * from tbl_housing_association where m_id ="+id+" order by housing_ass_name";
 db.query(query, function(err, rows){
     res.jsonp(rows);
    }); 	    
 }; 
 
 
 exports.allHousingAss = function(req, res) {
 		 var query = "SELECT `tbl_housing_association`.housing_ass_id ,`tbl_housing_association`.`housing_ass_name`,`tbl_contact_detail`.`contact_name`,`tbl_housing_association`.`building_password`,tbl_municipality.m_name from `tbl_housing_association` LEFT join tbl_municipality on `tbl_housing_association`.m_id=tbl_municipality.m_id LEFT join tbl_contact_detail on `tbl_housing_association`.contact_id=tbl_contact_detail.contact_id";
db.query(query, function(err, rows){
    res.jsonp(rows);
   });
 }; 
 

/******************for create new municipality it inster value in to data base*****************/ 
 
 exports.createNewHousingAss = function(req, res) {
 	var hname=req.body.h_name;
 	var mid=req.body.m_ID;
 	var address=req.body.address;
 	var pass=req.body.bPass;
  housingAssociationCRUD.create({'housing_ass_name' :hname,'m_id' :mid ,'address' :address,'building_password' :pass}, function (err, vals) {
  	console.log(err);
  if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'housing association successfully added'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not added '};
	  	      res.jsonp(resdata);
	  	     }
     });
    };
     
 /******************  End create *****************/



/******************for  delete data from  data base*****************/

exports.deleteHousingAss = function(req, res) {
	var housing_ass_id=parseInt(req.params.id);
housingAssociationCRUD.destroy({'housing_ass_id' : housing_ass_id}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		      var resdata={status:true,
  		      message:'housing association successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found against it'};
	  	      res.jsonp(resdata);
	  	     }
	  	     console.log(resdata);
     });
    };
   
 /******************  End Delete *****************/

/******************for  update data in data base********/

exports.updateHousingAss = function(req, res) {
	hid=req.body. housing_ass_id;
 	hname=req.body.housing_ass_name;
 	mid=req.body.m_id;
 	password=req.body.building_password;
 housingAssociationCRUD.update({'housing_ass_id' : hid}, {
 		'housing_ass_name':hname,
 		'org_number':req.body.org_number,
 		'apartment_count':req.body.apartment_count,
 		'county':req.body.county,
 		'm_id':mid,
 		'building_password':password,
 		'description':req.body.description }, function (err, vals) {
 	console.log(vals.affectedRows);	
	if(parseInt(vals.affectedRows)>0){
		
		accountdetailsCRUD.update({'contact_id' :req.body.contact_id },{
		  	'password' :req.body.password,
		  	'contact_name':req.body.contact_name,
		  	'address1':req.body.address1,
		  	'address2':req.body.address2,
		  	'role' : req.body.role,
		  	'phone_no':req.body.phone_no,
		  	'email':req.body.email
		  }, function( errr, values ){

		  });

  		var resdata = { 
  				status:true,
  		      	message:'housing association successfully updated'
  		      };
	  		res.jsonp(resdata);

	  	} else {
	  		var resdata={
		  		status:false,
  		    	message:'record not updated ' 
  			};
	  	    res.jsonp(resdata);
	  	}

      });

   };
  
/******************  End Update *****************/

exports.abc = function(req, res) {
	 var query = "SELECT * FROM tbl_housing_association order by `housing_ass_name` ";
db.query(query, function(err, rows){
	console.log(rows);
	if(rows.length>0)
	{
		var resdata={
			status:true,
			message:'success',
			norows:rows
			
		};
		res.jsonp(resdata);
	}
   });
 };