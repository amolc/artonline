"use strict";
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
 
 
 

var ordersCRUD = CRUD(db, 'tbl_orders');









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
    
                    
            // paypal request 
            paypal_api.payment.create( create_payment_json, function (err, response) {
            if (err) {
                console.log(err);
               
                throw err;
            }
            if ( response ) {
               console.log("--------------------------------");
                console.log( response );
                console.log("--------------------------------");
                
                }
            
            });
            
        
        

        



 