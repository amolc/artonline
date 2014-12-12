
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var servicesCrud=CRUD(db, 'tbl_services');
	 exports.findAllervices = function(req, res) {
	 	  servicesCrud.load({}, function (err, val) {	 	  	
	 	  	res.jsonp(val);
	 	  });  
	 }; 
 
 /******************for create new state it inster value in to data base*****************/ 
  exports.createNewservices = function(req, res) {
 	 var servicename=req.body.servicesname;
 	 var email=req.body.email;
 	 var phone=req.body.phone;
 	 var weblink=req.body.weblink;
 	 
     servicesCrud.create({'Service_name' : servicename,'Email' : email,'phone_number' : phone,'web_address' :weblink}, function (err, vals) {
  	console.log(err);
  	 if(parseInt(vals.affectedRows)>0){
  		 var resdata={status:true,
  		       message:'Service successfully added'};
	  	 res.jsonp(resdata);
	  	  }else{
	  		 var resdata={status:false,
  		      message:'record not added some thing wrong  '};
	  	       res.jsonp(resdata);
	  	      }
        });
     };   
 /******************  End create *****************/

/******************for  delete data from  data base*****************/

exports.deleteService = function(req, res) {
	var service_id=parseInt(req.params.id);
  servicesCrud.destroy({'services_id' : service_id}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'services successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
   
 /******************  End Delete *****************/

/******************for  update data in data base********/

 exports.updateServices = function(req, res) {
 	Service_name=req.body.Service_name;
 	Email=req.body.Email;
 	phone_number=req.body.phone_number;
 	web_address=req.body.web_address;
 	services_id=req.body.services_id;
 	
 	
  servicesCrud.update({'services_id' : services_id}, {'Service_name':Service_name,'Email':Email,'phone_number':phone_number,'web_address':web_address}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'services successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated'};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
  
/******************  End Update *****************/
