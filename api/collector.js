var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'artonline',
     user : 'artonline',
	password : '3cXWOqeaf',
      
    host :'localhost',
 });
 var CRUD = require('mysql-crud');
var addcollectorCrud=CRUD(db, 'tbl_collector');

exports.addcollector= function (req,res){
console.log(req.body.fname);
addcollectorCrud.create({name: req.body.fname ,location: req.body.location ,mobileno:req.body.mobileno ,email:req.body.email ,interest:req.body.artdes}, function (err, vals){
 		console.log(vals);
 			
 			var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};


 			res.jsonp(resdata);		
 		});



};


exports.getcollector = function(req, res) {
    //var artistid = req.params.artistid; 
    //console.log( artistid );
    var query = "SELECT * FROM tbl_collector";  
    db.query( query, function (err, val) {  
        res.jsonp(val);
      });    
};



exports.collectordetails = function(req, res) {
    var id=parseInt(req.params.id);
    console.log(id);
      addcollectorCrud.load({id:id}, function (err, val) {   
        res.jsonp(val[0]);
      });  
 }; 

exports.updatecollector = function(req, res) {

   var id=req.body.id;
    console.log(id);
    console.log(req.body.name);
  addcollectorCrud.update({'id' : id}, {name: req.body.name ,location: req.body.location ,mobileno:req.body.mobileno ,email:req.body.email ,interest:req.body.interest}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
        var resdata={status:true,
              message:'artist successfully updated'};
        res.jsonp(resdata);
        }else{
             var resdata={status:false,
              message:'artist not updated'};
              res.jsonp(resdata);
             }
      });
   };
