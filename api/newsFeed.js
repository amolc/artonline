var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var newsFeedCRUD=CRUD(db, 'tbl_newscat');
 exports.newsFeed = function(req, res) {
 	var hid=req.body.hid;  
 	//console.log(hid); 
	 		 var query = "SELECT tbl_category_description.title,tbl_category_description.date,tbl_category_description.description,tbl_newscat.image,tbl_category_description.time,tbl_category_description.id,tbl_newscat.cat_name from tbl_category_description inner join tbl_newscat on tbl_category_description.type_id=tbl_newscat.type_id where housing_ass_id="+hid+" Order BY tbl_category_description.id DESC";
              db.query(query, function(err, rows){
              res.jsonp(rows);
            
   });
 }; 

var newsDetailCRUD=CRUD(db, 'tbl_category_description');
 exports.newsDetail = function(req, res) {
 	var id = parseInt(req.params.id);
 	  newsDetailCRUD.load({type_id:id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });    
 }; 
 
 var newscatCRUD=CRUD(db, 'tbl_newscat');
 exports.newstype = function(req, res) {
 	  newscatCRUD.load({}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });    
 }; 
 
 
 
  exports.Addnews = function(req, res) {
  	var date = req.body.date;
    var time=req.body.datetime;
  	var type=req.body.typeid;
  	var title=req.body.title;
  	var description=req.body.description;
  	var housingid=req.body.housingid;
 	  newsDetailCRUD.create({'type_id' :type,'title':title,'description':description,'housing_ass_id':housingid,'time':time, 'date':date}, function (err, val) {	
 	  	  console.log(err);
 	  	if(err==null){
 	  		var resdata={
 	  			status:true,
 	  			massage:'added successfuly'
 	  		   }; 	  	
 	  	 } else {
          var resdata={
          status:false,
          massage:'Failure'
           };       
       }

        res.jsonp(resdata);
 	  });    
 };
 
  exports.deletenewsfeed = function(req, res) {
  	  var id=parseInt(req.params.id);
 	  newsDetailCRUD.destroy({'id' :id}, function (err, val) {	  
 	  		if(parseInt(val.affectedRows)>0){
 	  		var resdata={
 	  			status:true,
 	  			massage:'deleted  successfuly'
 	  		   };
 	  		  }else{
 	  		  	var resdata={
 	  			status:false,
 	  			massage:'not found'
 	  		   };
 	  		  	
 	  		  }
 	  		res.jsonp(resdata);
 	  	
 	  });    
 }; 
 exports.updatenewsfeed = function(req, res) {
  	  var id=req.body.id;
      var title=req.body.title;
      var type_id=req.body.type_id;
  	  var description=req.body.description;
  	  var time=req.body.time;
      var date=req.body.date;

              var query = "UPDATE tbl_category_description SET type_id ="+type_id+",title ='"+title+"', description ='"+description+"' ,date='"+date+"',time="+time+" WHERE id="+id;
              db.query(query, function(err, rows){
         if(parseInt(rows.affectedRows)>0){
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
 };
 
 