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
var addcollectionCrud=CRUD(db, 'tbl_collection');

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
exports.addcollection= function (req,res){

var title = req.body.title;
    var type = req.body.type;
    var size = req.body.size;
    var name = req.body.name;
    var fs = require('fs');
      
    var tmp_path = req.files.file.path;
    var artfilename = req.files.file.name ;
    console.log( 'path='+tmp_path );
console.log(type);
console.log(size);
console.log(title);
console.log(name);



 var target_path = './uploads/' + req.files.file.name;
    console.log(req.files.file.name);
    // move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
        fs.unlink(tmp_path, function() {
            if (err) throw err;
            //res.send('File uploaded to: ' + target_path + ' - ' + req.files.file.size + ' bytes');
        });
    });

addcollectionCrud.create({ name : artfilename , artistname:req.body.artist,title: title,type: type,size: size}, function (err, vals){
      //console.log(vals);
      if( err ){
        var resdata={
          status:false,
          message :'err'
          };
      } else {
        var resdata={
          status:true,          
        };  
      }     
      

      res.jsonp(resdata);   
    });

};
