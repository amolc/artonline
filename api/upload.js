var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

exports.uploadimage = function(req, res) {
 	// we need the fs module for moving the uploaded files
var fs = require('fs');
    // get the temporary location of the file
    var tmp_path = req.files.thumbnail.path;
    // set where the file should actually exists - in this case it is in the "images" directory
    var target_path = './uploads/' + req.files.thumbnail.name;
    // move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
        fs.unlink(tmp_path, function() {
            if (err) throw err;
            res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
        });
    });	  
 }; 

 exports.uploadlogo = function(req, res) {
    // we need the fs module for moving the uploaded files
var fs = require('fs');
    // get the temporary location of the file
    var tmp_path = req.files.file.path;
    console.log( tmp_path );
    // set where the file should actually exists - in this case it is in the "images" directory
    var target_path = 'housingadmin2/logos/' + req.files.file.originalFilename;
    // move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        // delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
        fs.unlink(tmp_path, function() {
            if (err) throw err;
            res.send('File uploaded to: ' + target_path + ' - ' + req.files.file.size + ' bytes');
        });
    });   
 }; 