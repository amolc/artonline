var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'artonline',
     user : 'root',
	password : '',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var addartistCrud=CRUD(db, 'tbl_addartist');
 var addartworkCrud=CRUD(db, 'tbl_artwork'); 	


exports.addetails= function (req,res){
    	
    	   var name=req.body.fname;
    	   var location=req.body.location;
    	   var mobileno=req.body.mobileno;
    	   var email=req.body.email;
    	    var artdes=req.body.artdes;

    	console.log(name);
    	addartistCrud.create({fname: name ,location: location ,mobileno:mobileno ,email:email ,desc:artdes}, function (err, vals){
 		//	console.log(vals)
 			
 			var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};


 			res.jsonp(resdata);		
 		});

    };


    exports.addartwork= function (req,res){
    	var title = req.body.title;
	   	var type = req.body.type;
	   	var size = req.body.size;

	   	console.log(title);


addartworkCrud.create({title: title,type: type,size: size}, function (err, vals){
 		//	console.log(vals)
 			
 			var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};

 			res.jsonp(resdata);		
 		});
};


exports.getartist = function(req, res) {
    var housingid = req.params.hid; 
    var query = "SELECT * FROM tbl_artwork";  
    db.query( query, function (err, val) {  
        res.jsonp(val);
      });    
};