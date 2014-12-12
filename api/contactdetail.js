var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var contactCRUD = CRUD(db, 'contact');
 var boardContactCRUD = CRUD(db, 'tbl_board_contact');
 exports.contact = function(req, res) {
    var housingid=req.body.hid; 
    var query = "SELECT * FROM contact WHERE type = 0 and housing_ass_id='"+housingid+"' ORDER BY ordering,id";  
    db.query( query, function (err, val) {	
 	  	res.jsonp(val);
 	  });    
 };


 exports.contactsecond = function(req, res) {
    var housingid=req.body.hid; 
    var query = "SELECT * FROM contact WHERE type = 1 and   housing_ass_id ='"+housingid+"' ORDER BY ordering,id";  
    db.query( query, function (err, val) { 
      res.jsonp(val);
    });    
 };

exports.reorderContacts = function(req, res) {
    var allcontacts = req.body.contact; 
    var query = '';
    var rrr ='';
    for (index = 0; index < req.body.length; ++index) {
      var query = "UPDATE contact SET ordering ='"+index+"' WHERE id ="+req.body[index].id;  
      db.query( query, function (err, rows ) { 
        var rrr = rows;
      });    
      if( index + 1 == req.body.length ){
        res.jsonp(rrr );    
      }
    }
    

    

 };


 exports.contactdetail = function(req, res) {
 	var id = parseInt(req.params.id);
 	  contactCRUD.load({id:id}, function (err, val) {	  
 	  	res.jsonp(val[0]);
 	  });    
 }; 
 
 
 //  add contact 
 
  exports.AddContact = function(req, res) {
 	  contactCRUD.create({'contact_type' :req.body.contact_type,'phone_number':req.body.phone,'phone_number_x':req.body.phone_x,'email':req.body.email,'email_x':req.body.email_x,'web_link_title':req.body.web_link_title,'web_link':req.body.weblink,'web_link_x':req.body.weblink_x,'contact_name':req.body.name,'contact_name_x':req.body.name_x,'housing_ass_id':req.body.hid, 'type':req.body.type}, function (err, val) {	 	  
 	  	if(err==null){
 	  		var resdata={
 	  			status:true,
 	  			massage:' contact added successfuly'
 	  		   };
 	  		res.jsonp(resdata);
 	  	}
 	  });    
 }; 
      //delete contact
  exports.deleteContact = function(req, res) {
  	  var contact_id=parseInt(req.params.id);
 	  contactCRUD.destroy({'id' :contact_id}, function (err, val) {	  
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
 
 //update contact
 
 
  exports.updateContact = function(req, res) {
 	  contactCRUD.update({'id' :req.body.id},{'contact_type' :req.body.contact_type,'phone_number':req.body.phone_number,'phone_number_x':req.body.phone_number_x,'email':req.body.email,'email_x':req.body.email_x,'web_link_title':req.body.web_link_title,'web_link':req.body.web_link,'web_link_x':req.body.web_link_x,'contact_name':req.body.contact_name,'contact_name_x':req.body.contact_name_x}, function (err, val) {	  
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
 }; 
 
/*board contacts*/

exports.boardContact = function(req, res) {
    boardContactCRUD.load({housing_ass_id:req.body.hid}, function (err, val) {  
      res.jsonp(val[0]);
    });    
 }; 


  exports.updateBoardContact = function(req, res) {
  
    boardContactCRUD.update({'housing_ass_id' :req.body.housing_ass_id},{'email':req.body.email,'email1':req.body.email1, 'email2':req.body.email2, 'email3':req.body.email3, 'email4':req.body.email4, 'email5':req.body.email5, 'email6':req.body.email6, 'email7':req.body.email7, 'email8':req.body.email8, 'email9':req.body.email9}, function (err, val) {   
    console.log( err)    ;
    console.log( val)    ;
    if(parseInt(val.affectedRows)>0){
        var resdata={
          status:true,
          massage:'updated  successfuly'
           };
    } else {
        var resdata={
          status:false,
          massage:'not updated'
        };
    }
        res.jsonp(resdata);
    });    
 }; 