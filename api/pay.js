var http = require('http');
var mysql = require('mysql');
var paypal_api = require('paypal-rest-sdk');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire2',
	password : 'ferrari4321',
    host :'localhost',
 });
 var CRUD = require('mysql-crud');
 var querystring = require('querystring');
 var request = require('request');
 var ipn = require('paypal-ipn');

var ordersCRUD = CRUD(db, 'tbl_orders');
var notificationCRUD = CRUD(db, 'tbl_notification');


// list order according to housing association
exports.listOrders = function(req, res) {
	var housingid = req.params.hid; 
	var query = "SELECT * FROM tbl_orders WHERE housingID='"+housingid+"' ORDER BY orderID DESC";  
	db.query( query, function (err, val) {	
	  	res.jsonp(val);
	  });    
};

exports.listAllOrders = function(req, res) {
    var housingid = req.params.hid; 
    var query = "SELECT * FROM tbl_orders ORDER BY orderID DESC";  
    db.query( query, function (err, val) {  
        res.jsonp(val);
      });    
};


// insert raw order for housing asociation
exports.addOrder = function(req, res) {

    var config_opts = {
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'client_id': 'AWvbThBxrele5uOAZHS6bsdr1Y-1py11ciYvfjkWjovmvtkdZVuSXlJaK6FC',
        'client_secret': 'EGHqbhBHS1sYhLRMGnFouuC0rSslUVwZVAE-H0dhEiSpRu5GqAq_NiRck4EW'
    };    

    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "credit_card",
            "funding_instruments": [{
                "credit_card": {
                    "type": "visa",
                    "number": req.body.number,
                    "expire_month": "11",
                    "expire_year": "2018",
                    "cvv2": "874",
                    "first_name": "Joe",
                    "last_name": "Shopper"
                    
                }
            }]
        },
        "transactions": [{
            "amount": {
                "total": "70",
                "currency": "USD"                    
            },
            "description": "This is the payment transaction description."
        }]
    };


    ordersCRUD.create({'start_date' :req.body.start_date,'end_date':req.body.end_date,'amount':req.body.amount,'housingID':req.body.hid,'status':'failed'}, function (err, val) {       
        if(err==null){
            console.log( val.insertId );
                    
               // paypal request 
            paypal_api.payment.create(create_payment_json, config_opts, function (err, response) {
            if (err) {
                console.log(err);
                var resdata={
                    status:true,
                    insertId : val.insertId,
                    message:' Payment failed'
                    
                   };
                     res.jsonp(resdata);     
                //throw err;
            }
            if ( response ) {
               console.log("--------------------------------");
                console.log( response );
                console.log("--------------------------------");
                console.log( response.id );
                ordersCRUD.update({'orderID' : val.insertId },{'paypal_id' :response.id, 'status':'success' }, function (err2, val2) {
                if( parseInt(val2.affectedRows) > 0 ){
                   var resdata={
                    status:true,
                    insertId : val.insertId,
                    message:' Payment successfully done.',
                    paypalId : response.id
                   };

                } else {
                   var resdata = {
                    status:true,
                    insertId : val.insertId,
                    message:' Payment successfully done, failed to update please contact admin.',
                    paypalId : response.id
                   };
                    
                }
                res.jsonp(resdata);
                
                });    
                    
                }
            
            });
            
        } else {
            var resdata = {
                status:false,
                message:err 
            };
            res.jsonp(resdata);    
        }   
        

    });    

 };

exports.addpaypalOrder = function(req, res) {

    paypal_api.configure ({
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'client_id': 'AWvbThBxrele5uOAZHS6bsdr1Y-1py11ciYvfjkWjovmvtkdZVuSXlJaK6FC',
        'client_secret': 'EGHqbhBHS1sYhLRMGnFouuC0rSslUVwZVAE-H0dhEiSpRu5GqAq_NiRck4EW'
    });    
    
    var create_payment_json = {
        "intent": "sale",
        "redirect_urls":{
                    "return_url":"http://localhost:9000/housingadmin2/#/app/konto/pay",
                    "cancel_url":"http://localhost:9000/housingadmin2/#/app/konto/pay"
                  },
        "payer": {
            "payment_method": "paypal"            
        },
        "transactions": [{
            "amount": {
                "total": "70",
                "currency": "USD"                    
            },
            "description": "This is the payment transaction description."
        }]
    };

    console.log( '-----------------------Paypal Try -------------------------------' );
    ordersCRUD.create({'start_date' :req.body.start_date,'end_date':req.body.end_date,'amount':req.body.amount,'housingID':req.body.hid,'status':'failed'}, function (err, val) {       
        if(err==null){
            console.log( val.insertId );
                    
            // paypal request 
            paypal_api.payment.create( create_payment_json, function (err, response) {
            if (err) {
                console.log(err);
                var resdata={
                    status:true,
                    insertId : val.insertId,
                    message:' Payment failed'
                    
                   };
                     //res.jsonp(resdata);     
                throw err;
            }
            if ( response ) {
               console.log("--------------------------------");
                console.log( response );
                console.log("--------------------------------");
                /*console.log( response.id );
                ordersCRUD.update({'orderID' : val.insertId },{'paypal_id' :response.id, 'status':'success' }, function (err2, val2) {
                if( parseInt(val2.affectedRows) > 0 ){
                   var resdata={
                    status:true,
                    insertId : val.insertId,
                    message:' Payment successfully done.',
                    paypalId : response.id
                   };

                } else {
                   var resdata = {
                    status:true,
                    insertId : val.insertId,
                    message:' Payment successfully done, failed to update please contact admin.',
                    paypalId : response.id
                   };
                    
                }
                res.jsonp(resdata);
                
                });    
                    */
                }
            
            });
            
        } else {
            var resdata = {
                status:false,
                message:err 
            };
            res.jsonp(resdata);    
        }   
        

    });    

 };


 exports.ipnProcess = function(req, res) {
 	console.error('prcoessing paymenst ');	
 	 // STEP 1: read POST data
    req.body = req.body || {};
    res.send(200, 'OK');
    res.end
    // var postreq = 'cmd=_notify-validate';
    var message = '';
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            var value = querystring.escape(req.body[key]);
            // postreq = postreq + "&" + key + "=" + value;
            if(message.lenght===0) {
              message = key + "=" + value;
              console.log('\n 1');
            } else {
              message = message + "&" + key + "=" + value;
            }
        }
    }
    // Step 2: POST IPN data back to PayPal to validate
    console.log('Posting back to paypal'.bold);
    console.log(message);
    console.log('\n\n');

    var params = querystring.parse(message);
    console.log('Last params');
    console.log('\n\n');
    console.log(params);
    ipn.verify(params, function callback(err, msg) {
       //Test for error
       // test.ok(err, msg);
       console.log('Response from Paypal: %s', msg);
       if (err) {
           console.error(msg);
       } else {
       //Do stuff with original params here
         if (params.payment_status == 'Completed') {
             //Payment has been confirmed as completed
             console.log('Success');
             
             // assign posted variables to local variables
            var item_name = req.body['item_name'];
            var item_number = req.body['item_number'];
            var payment_status = req.body['payment_status'];
            var payment_amount = req.body['mc_gross'];
            var payment_currency = req.body['mc_currency'];
            var txn_id = req.body['txn_id'];
            var receiver_email = req.body['receiver_email'];
            var payer_email = req.body['payer_email'];
            console.log('Payer EmailId = ' + payer_email);
         }
       }
     });

 	/*var name=req.body.username;
 	var password=req.body.buildingpass; 
 	  CRUD(db, 'tbl_housing_association').load({housing_ass_name : name,building_password : password }, function (err, val) {	 
 	  	var resdata={
 	  		status:false,
 	  		message :'err'
 	  	};
 	  	if(val.length>0){
 	  		resdata.status=true;
 	  		resdata.message='successfully login welcom to ..';  		
 	  	}else{
 	  		resdata.status=false;
 	  		resdata.message='fel lösenord ange en giltig';
 	  	}
 	  	  
 	  	res.jsonp(resdata);
 	  });*/
 }; 
 