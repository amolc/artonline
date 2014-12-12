
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var optionCrud=CRUD(db, 'tbl_orders');


exports.gettransaction= function (req,res){
    	//console.log( req.body.key );
    	optionCrud.load({ orderID: req.body.orderID }, function (err, vals){
 			console.log(vals)
 			res.jsonp(vals[0]);		
 						})

    };
 	


