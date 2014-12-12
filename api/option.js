var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var optionCrud=CRUD(db, 'tbl_option');

   exports.updateoption = function(req, res) {
 	var key=req.body.key;
 	var value=req.body.value;
 	
 				 	optionCrud.load({'key' : key }, function (err, vals){
 					console.log(vals);
 	
 						if (vals.length==0) {

 					 	optionCrud.create({'key' : key,'value' : value}, function (err, vals) {
					  	if(parseInt(vals.affectedRows)>0){
					  		var resdata={status:true,
					  		      message:' successfully added'};
						  	res.jsonp(resdata);
						  	}else{
						  		 var resdata={status:false,
					  		      message:'record not added some thing wrong  '};
						  	      res.jsonp(resdata);
						  	     }
					       });


 						}
 						else{
					 		
							optionCrud.update({'key' :key },{
							  	'key' :key,
							  	'value':value,
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
							  		}

 						});
};


    exports.getoptions= function (req,res){
    	//console.log( req.body.key );
    	optionCrud.load({ key: req.body.key }, function (err, vals){
 			res.jsonp(vals[0]);		
 						})
 					
    };