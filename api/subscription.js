var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var subsCrud=CRUD(db, 'tbl_subscriptions');
 /******************for create new state it inster value in to data base*****************/ 
 
 exports.createSubscription = function(req, res) {
 	 var email = req.body.email;
   //req.body.email ;

  subsCrud.create({'email' : email }, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'Subscribed successfully.'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'Unable to subscribe, please try again.'};
	  	      res.jsonp(resdata);
	  	     }
       });
    };
     
 /******************  End create *****************/
