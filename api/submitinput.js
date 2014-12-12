var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var submitCRUD=CRUD(db, 'tbl_submited_input');
 exports.submitInput = function(req, res) {
 	var hid=req.body.hid;
 	var name=req.body.name;
 	var type=req.body.type;
 	var email=req.body.email;
 	var description=req.body.description;
 	var image=req.body.image;
 	
 	var crypto = require('crypto');
 	
 	var dataimg = req.body.imageres;
 	 var base64Data = dataimg.replace(/^data:image\/png;base64,/, "");
 	 
 	 var base64Data = base64Data.replace(/^data:image\/jpeg;base64,/, "");
 	 var ext = 'png';
 	 if (dataimg.indexOf("png") !=-1) {
		    ext = 'png';
		}
	if (dataimg.indexOf("jpeg") !=-1) {
	   ext = 'jpg';
	}
	if (dataimg.indexOf("gif") !=-1) {
	   ext = 'gif';
	}
	if (dataimg.indexOf("jpg") !=-1) {
	   ext = 'jpg';
	}      
    var filename = 'foo'+crypto.randomBytes(4).readUInt32LE(0)+'bar';
        
require("fs").writeFile("mobile/uploads/"+filename+"."+ext, base64Data, 'base64', function(err) {
  console.log(err);
});
 	 console.log(filename+".png");
 	 
 	 var imagepath = filename+".png";
 	 submitCRUD.create({'name':name,'email':email,'phone':'03347268737','description':description,'image':imagepath,'type_of_input':type,'housing_ass_id':hid,'status':'unread'}, function (err, vals) {
  	 console.log(err);
  	 if(vals.affectedRows>0){
  	 		var resdata={
 	  		status:true,
 	  		message :' Thanks for submitting your input.'
 	  	};
 	  	 res.jsonp(resdata);
  	 }
       });
      
 };
  
 exports.allnotification=function(req,res){
 	     var hid=req.body.hid; 
 	     var query1="SELECT tbl_submited_input.id, tbl_submited_input.name, tbl_submited_input.email, tbl_submited_input.phone, tbl_submited_input.description, tbl_submited_input.image, tbl_submited_input.`type_of_input` , tbl_submited_input.date, tbl_submited_input.housing_ass_id, tbl_submited_input.status FROM tbl_submited_input, tbl_housing_admin WHERE tbl_submited_input.date > tbl_housing_admin.last_login and tbl_submited_input.housing_ass_id="+hid;
 		 var query = "SELECT * from  tbl_submited_input where housing_ass_id="+hid+" order by date DESC";
          var noofrow;
              db.query(query1, function(err, rows){
              	var noofrow=rows.length;
              	
              	    db.query(query, function(err, rows){
              	    	
              	var resdata={
              		row:rows,
              		length:noofrow
              	};
          var query2 = "UPDATE tbl_housing_admin SET last_login = CURRENT_TIMESTAMP WHERE housing_ass_id="+hid;
            db.query(query2, function(err, rows){
              });
              res.jsonp(resdata);   
   });
              	 });	
 };
 
  exports.messagedetail=function(req,res){
 	     var id=req.params.id; 
 		 var query = "SELECT * from  tbl_submited_input where id="+id;
 		 var query1 = "update tbl_submited_input set status='read' where id="+id;
 		  db.query(query1, function(err, rows){
             });
              db.query(query, function(err, rows){
              res.jsonp(rows[0]);    
   });
 };
 
 exports.deleteinput = function(req, res) {
   var id=parseInt(req.params.id);
   submitCRUD.destroy({'id' : id}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'input  successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found '};
	  	      res.jsonp(resdata);
	  	     }
       });
    };
    
    
     exports.unreadnotification=function(req,res){
 	     var hid=req.body.hid; 
 		 var query = "SELECT * from  tbl_submited_input where housing_ass_id="+hid+" and status='unread' order by date DESC";
              	    db.query(query, function(err, rows){
              	var resdata={
              		row:rows,
              		//length:noofrow
              	};       
              res.jsonp(resdata);   
              	 });	
 };
 
 exports.fileuploading=function(req,res){
 	
 	var crypto = require('crypto'); 	
 	var data = req.body.image;	
 	    var base64Data = data.replace(/^data:image\/png;base64,/, "");
        
        var filename = 'foo'+crypto.randomBytes(4).readUInt32LE(0)+'bar';
        
require("fs").writeFile("mobile/www/uploads/"+filename+".png", base64Data, 'base64', function(err) {
  console.log(err);
});

 };
 