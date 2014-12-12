var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var stateCrud=CRUD(db, 'tbl_state');
 
 exports.statedetail = function(req, res) {
 	var id=parseInt(req.params.id);
 	  stateCrud.load({state_id:id}, function (err, val) {	
 	  	res.jsonp(val[0]);
 	  });  
 }; 
 
exports.servicedetail = function(req, res) {
	var servicesCrud=CRUD(db, 'tbl_services');
 	var id=parseInt(req.params.id);
 	  servicesCrud.load({services_id:id}, function (err, val) {	
 	  	res.jsonp(val[0]);
 	  });  
 };
 
 exports.municipalitydetail = function(req, res) {
	var id=parseInt(req.params.id);
	 		 var query = "SELECT tbl_municipality.m_id , tbl_municipality.m_name ,  tbl_state.state_name,tbl_state.state_id FROM tbl_municipality INNER JOIN tbl_state ON tbl_municipality.state_id = tbl_state.state_id where  tbl_municipality.m_id="+id;
              db.query(query, function(err, rows){
              res.jsonp(rows[0]);
   });
 };  
  exports.housingAssdetail = function(req, res) {
	var id=parseInt(req.params.id);
	 		 var query = "SELECT tbl_housing_association.*, tbl_contact_detail.*  from `tbl_housing_association` inner join tbl_municipality on `tbl_housing_association`.m_id=tbl_municipality.m_id LEFT join tbl_contact_detail on `tbl_housing_association`.contact_id=tbl_contact_detail.contact_id where  tbl_housing_association.housing_ass_id="+id;
              db.query(query, function(err, rows){
              res.jsonp(rows[0]);
   });
 };  
  exports.newsfeeddetail = function(req, res) {
	var id=parseInt(req.params.id);
	 		 var query = "SELECT tbl_category_description.title,tbl_category_description.date,tbl_category_description.type_id,tbl_category_description.description,tbl_category_description.time,tbl_category_description.id,tbl_newscat.cat_name from tbl_category_description inner join tbl_newscat on tbl_category_description.type_id=tbl_newscat.type_id where tbl_category_description.id="+id;
              db.query(query, function(err, rows){
              res.jsonp(rows[0]);
              console.log(rows);
   });
 };