var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'artonline',
     user : 'artonline',
	password : '3cXWOqeaf',
      
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var addartistCrud=CRUD(db, 'tbl_addartist');
 var addartworkCrud=CRUD(db, 'tbl_artwork');
 var updateartworkCrud=CRUD(db, 'tbl_artwork'); 	


exports.addetails= function (req,res){
    	
    	   var name=req.body.fname;
    	   var location=req.body.location;
    	   var mobileno=req.body.mobileno;
    	   var email=req.body.email;
    	    var artdes=req.body.artdes;

    	console.log(name);
    


    	addartistCrud.create({fname: name ,location: location ,mobileno:mobileno ,email:email ,desc:artdes}, function (err, vals){
 	    	console.log(vals)
 			
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
      var name = req.body.name;
      var fs = require('fs');
      
      var tmp_path = req.files.file.path;
      var artfilename = req.files.file.name ;
      console.log( 'path='+tmp_path );

    var target_path = './uploads/' + req.files.file.name;
    // move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
        fs.unlink(tmp_path, function() {
            if (err) throw err;
            //res.send('File uploaded to: ' + target_path + ' - ' + req.files.file.size + ' bytes');
        });
    });   

    addartworkCrud.create({ name : artfilename , artist:req.body.artist,title: title,type: type,size: size}, function (err, vals){
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

exports.getartworkbyid = function(req, res) {
    var artistid = req.params.artistid; 
    console.log( artistid );
    var query = "SELECT * FROM tbl_artwork WHERE artist="+artistid;  
    db.query( query, function (err, val) {  
        res.jsonp(val);
      });    
};

exports.getartwork = function(req, res) {
    var artistid = req.params.artistid; 
    console.log( artistid );
    var query = "SELECT * FROM tbl_artwork";  
    db.query( query, function (err, val) {  
        res.jsonp(val);
      });    
};

exports.getartists = function(req, res) {
  
    var query = "SELECT * FROM tbl_addartist";  
    db.query( query, function (err, val) {  
        res.jsonp(val);
      });    
};


exports.updateartwork = function(req, res) {

   var id=req.body.id;
    console.log(id);
    console.log(req.body.title);
  updateartworkCrud.update({'id' : id}, {title:req.body.title,type:req.body.type,size:req.body.size,name:req.body.name}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
        var resdata={status:true,
              message:'artwork successfully updated'};
        res.jsonp(resdata);
        }else{
             var resdata={status:false,
              message:'artwork not updated'};
              res.jsonp(resdata);
             }
      });
   };
 
exports.artworkdetails = function(req, res) {
    var id=parseInt(req.params.id);
    console.log(id);
      addartworkCrud.load({id:id}, function (err, val) {   
        res.jsonp(val[0]);
      });  
 }; 



exports.updateartist = function(req, res) {

   var id=req.body.id;
    console.log(id);
    console.log(req.body.fname);
 /* addartistCrud.update({'id' : id}, {fname:req.body.fname,location:req.body.location,mobileno:req.body.mobileno,desc:req.body.desc}, function (err, vals) {
    if(parseInt(vals.affectedRows)>0){
        var resdata={status:true,
              message:'artist successfully updated'};
        res.jsonp(resdata);
        }else{
             var resdata={status:false,
              message:'artist not updated'};
              res.jsonp(resdata);
             }
      });   */
   };


exports.artistdetails = function(req, res) {
    var id=parseInt(req.params.id);
    console.log(id);
      addartistCrud.load({id:id}, function (err, val) {   
        res.jsonp(val[0]);
      });  
 }; 


/*exports.cassie = function(req,res){
var query = " SELECT * FROM tbl_artwork WHERE artist = '19' ";

db.query( query, function (err, val) {  
        res.jsonp(val);
      });    
}
*/