var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });

var CRUD = require('mysql-crud');
var accountdetailsCRUD = CRUD(db, 'tbl_contact_detail');
var housingCRUD = CRUD(db, 'tbl_housing_association');
var boardcontactCRUD = CRUD(db, 'tbl_board_contact');

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'amolv@fountaintechies.com',
        pass: 'ferrari4321'
    }
});


exports.accountdetails = function(	req, res) {
 	var id = parseInt(req.params.id);
 	  accountdetailsCRUD.load({contact_id:id}, function (err, val) {	  
 	  	res.jsonp(val[0]);
 	  });    
}; 
 
	//update contact
	exports.updateAccountdetails = function(req, res) {
			
		  accountdetailsCRUD.update({'contact_id' :req.body.contact_id },{
		  	'password' :req.body.password,
		  	'contact_name':req.body.contact_name,
		  	'address1':req.body.address1,
		  	'address2':req.body.address2,
		  	'role' : req.body.role,
		  	'phone_no':req.body.phone_no,
		  	'email':req.body.email
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

	}; 
	exports.createNewContact = function(req, res) {	 	
			
	  	console.log( req );
		accountdetailsCRUD.load({ email: req.body.email }, function (err, val) {	  
 	  		if( val.length > 0 ){
 	  			var resdata = {
	  		 		status:false,
  		      		message:'Account Allready Exists.' };
	  	      		res.jsonp(resdata);
	  	    } else {
	  	     		
	  	    req.body.password = Math.random()               // Generate random number, eg: 0.123456
            		 				.toString(36)           // Convert  to base-36 : "0.4fzyo82mvyr"
                    		    	.slice(-8); 			// Cut off last 8 characters : "yo82mvyr"
            console.log( req.body.password );        		    	
	  accountdetailsCRUD.create({
	  							'password' : req.body.password,
	  							'email' : req.body.email,
	  							'contact_name': req.body.contact_name,
	  							'role': req.body.role  							

 							},
	  	function (err, vals) {

	  		//housingCRUD
	  		if(parseInt(vals.affectedRows)>0){
	  			housingCRUD.create({
	  							'contact_id' : vals.insertId,
	  							'housing_ass_name' : req.body.housename,
	  							'apartment_count' : req.body.apartment_count,
	  							'm_id' : req.body.m_id,
	  							'address' : req.body.address,
	  							'zipcode': req.body.zipcode,
	  							'county': req.body.county,
	  							'telephone_no' : req.body.telephone_no,
	  							'org_number'	: req.body.org_number	  						
	  							
	  			}, function( error, values ){
	  				console.log( error );
	  				console.log( values.insertId );
	  				if( parseInt(values.affectedRows)>0 ){

	  					boardcontactCRUD.create({ 'housing_ass_id' : values.insertId },function( errorb, valuesb ){
  							// send mail 
  							var mailOptions = {
							    from: 'Icefire<info@bostadsrattappen.se>', // sender address
							    to: 'amol.chawathe@fountaintechies.com, mats.isenberg@gmail.com', // list of receivers
							    subject: 'Ny medlem registreed ( via Bostadsrättappen )', // Subject line
							    text: 'Account succesfully created', // plaintext body
							    html: 'Dear Admin,<br/> \
							    A new user has just created an account on Bostadsrattapen App.<br/> \
							    The details are,<br/> \
							<b>Bostadsrättsförening:</b> '+req.body.housename+'<br/> \
							<b>Org.nummer:</b> '+req.body.org_number+'<br/> \
							<b>Antal lägenheter:</b> '+req.body.password+'<br/> \
							<b>Län:</b> '+req.body.county_label+'<br/> \
							<b>Kommun:</b> '+req.body.m_id_label+'<br/> \
							<b>Adress 1:</b> '+req.body.address+'<br/> \
							<b>Adress 2:</b> '+req.body.zipcode+'<br/> \
							<b>Kontaktperson:</b> '+req.body.contact_name+'<br/> \
							<b>Roll i styrelsen:</b> '+req.body.role+'<br/> \
							<b>Mobil:</b> '+req.body.telephone_no+'<br/><br/> \
							​You may approve and send the following details to him.<br/> \
						    <b>Email/Username:</b> '+req.body.email+' <br/> \
						    <b>Password:</b> '+req.body.password+'<br/> ' 
							};

							// send mail with defined transport object
							transporter.sendMail(mailOptions, function(error, info){
							    if(error){
							        console.log(error);
							    }else{
							        console.log('Message sent: ' + info.response);
							    }
							});

 						});

	  				} 
	  			});

	  			var resdata = {
	  				status:true,
	  		      	message:'Account successfully added' };
		  		res.jsonp(resdata);

		  	} else {
	  		 	var resdata = {
	  		 		status:false,
  		      		message:'Account not added ' };
	  	      		res.jsonp(resdata);
	  	     	}
	      });
	  	    }
 	  				
 	  	});    

    };
    exports.styrelsenFormApp = function(req, res) {
    			var a =	[req.body.sentto,req.body.sentto1,req.body.sentto2,req.body.sentto3,req.body.sentto4,req.body.sentto5,req.body.sentto6,req.body.sentto7,req.body.sentto8,req.body.sentto9];
    			
    			console.log(a);
    		

    	var mailOptions = {
		    from: 'Icefire<info@bostadsrattappen.se>', // sender address
		    to: a, // list of receivers
		    subject: 'Meddelande från en medlem (via Bostadsrättappen)', // Subject line
		    text: 'Styrelsen form submitted via Bostadsrättapen App', // plaintext body
		    html: 'Hej Styrelsen,<br/> \
		    Här kommer ett meddelande från en av medlemmarna i föreningen.<br/> \
		    The details are,<br/> \
		<b>Typ av meddelande:</b> '+req.body.type+'<br/> \
		<b>Namn:</b> '+req.body.name+'<br/> \
		<b>Email:</b> '+req.body.email+'<br/> \
		<b>Meddeland:</b> '+req.body.description+'<br/> ' 
		};

		if( req.body.attachment ){
			var attach = req.body.attachment;
			mailOptions.attachments = {
					filename: req.body.attachmentname,
					content: new Buffer( attach.split("base64,")[1], 'base64')
		        }
			
		}
		console.log( mailOptions );
	    transporter.sendMail( mailOptions, function(error, info ){
		    if(error){
		        console.log(error);
		        var resdata = {
	  				status:false,
	  		      	message:error 
	  		      };		  		
		    } else {
		        console.log('Message sent: ' + info.response);
		        var resdata = {
	  				status:true,
	  		      	message:'Mail Sent succesfully.' 
	  		      };		  		
		    }
		    res.jsonp(resdata);
		});
	}	

	exports.lostpassform = function(req,res){
					email=req.body.email;
					console.log(email);			
		 accountdetailsCRUD.load({email:email}, function (err, val) {  
     					
     			if(val.length>0){

     				var resdata ={
     					message:'success',	
     					status:true
     				};	
		        password=val[0].password;
 						res.jsonp(resdata);
     					var mailOptions = {
		    from: 'Icefire<info@bostadsrattappen.se >', // sender address
		    to: req.body.email, // list of receivers
		    subject: 'Request for password', // Subject line
		   // text: '', // plaintext body
		    html: 'Dear Admin,<br/> \
		    Your Password is ,<br/> \
		<b>Password:</b> '+password+'<br/>' 
		};

		if( req.body.attachment ){
			var attach = req.body.attachment;
			mailOptions.attachments = {
					filename: req.body.attachmentname,
					content: new Buffer( attach.split("base64,")[1], 'base64')
		        }
			
		}
		console.log( mailOptions );
	    transporter.sendMail( mailOptions, function(error, info ){
		    if(error){
		        console.log(error);
		        var resdata = {
	  				status:false,
	  		      	message:error 
	  		      };		  		
		    } else {
		        console.log('Message sent: ' + info.response);
		        var resdata = {
	  				status:true,
	  		      	message:'Mail Sent succesfully.' 
	  		      };		  		
		    }
	     });  
	
	  }		
	  		else{
	  				var resdata ={
	  					status:false
	  				};
	  				console.log("error");
	  				res.jsonp(resdata);
	  			}
	  			
    
	});

	}