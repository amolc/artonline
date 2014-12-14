var express = require('express'), path = require('path');
var app = express();

var querystring = require('querystring');
var request = require('request');


var ipn = require('paypal-ipn');

var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

adminlogin=require('./api/adminLogin');
login=require('./api/login');
/*updateoption = require('./api/option.js');
transaction=require('./api/transaction.js');
state = require('./api/state');
subscribe = require('./api/subscription');
getdetail = require('./api/getdetail');
municipality=require('./api/municipality');
housingAssociation=require('./api/housingAssociation');


newsFeed=require('./api/newsFeed');
contact=require('./api/contactdetail');
profile=require('./api/profile');
accountdetails = require('./api/accountdetails');
submitInput=require('./api/submitinput');
*/
addartist=require('./api/addartist');

//uploaddata=require('./api/submitinput');

// start housing admin
housingadminlogin=require('./api/H_adminlogin.js');
//services=require('./api/services.js');
//sendmail=require('./api/sendmail.js');
//notification=require('./api/notification.js');
//push=require('./api/pushnotification.js');
//uploaddata = require('./api/upload.js');
//end housing admin
//app.use(express.bodyParser());
app.use(express.bodyParser({uploadDir:'./uploads'}));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
 });
app.use(express.static(path.join(__dirname, 'public')));
app.use('/superadmin', express.static(__dirname + '/admin'));
app.use('/admin', express.static(__dirname + '/housingadmin2'));
app.use('/upload', express.static(__dirname + '/upload'));
app.use('/', express.static(__dirname + '/web'));


payPrcoess = require('./api/pay.js');
app.get('/api/listOrders/:hid', payPrcoess.listOrders);
app.get('/api/listAllOrders', payPrcoess.listAllOrders);
app.post('/api/addOrder', payPrcoess.addOrder);
app.post('/api/addpaypalOrder', payPrcoess.addpaypalOrder);
app.get('/ipn', payPrcoess.ipnProcess);

//app.post('/api/subscribe', subscribe.createSubscription );

/*
app.get('/api/state', state.findAllstate);
app.post('/api/addState', state.createNewState);
app.post('/api/addprice', updateoption.updateoption);
app.post('/api/getoptions', updateoption.getoptions);
app.post('/api/getransaction', transaction.gettransaction);
app.get('/api/deleteState/:id', state.deleteState);
app.post('/api/updateState', state.updateState);
app.get('/api/getdetail/:id', getdetail.statedetail);
app.get('/api/getmundetail/:id', getdetail.municipalitydetail);

app.get('/api/getAssdetail/:id', getdetail.housingAssdetail);

app.get('/api/municipality/:id', municipality.findMunicipality);
app.get('/api/allmunicipality', municipality.allMunicipality);
app.post('/api/addMunicipality', municipality.createNewMunicipality);
app.get('/api/deleteMunicipality/:id', municipality.deleteMunicipality);
app.post('/api/updateMunicipality', municipality.updateMunicipality);
app.get('/api/housingAssociation/:id', housingAssociation.findHousinnAss);

app.get('/api/abc', housingAssociation.abc);
app.get('/api/allHousingAss', housingAssociation.allHousingAss);
app.post('/api/addHousingAss', housingAssociation.createNewHousingAss);
app.get('/api/deleteHousingAss/:id', housingAssociation.deleteHousingAss);
app.post('/api/updateHousingAss', housingAssociation.updateHousingAss);

app.get('/api/getAssdetail/:id', housingAssociation.updateHousingAss);
*/

app.post('/api/login', login.login);

//app.post('/api/checktoken', login.checktokenid);

//app.post('/api/notification', notification.senddata);

//app.get('/api/newsdetail/:id', newsFeed.newsDetail);
//app.get('/api/deleteNews/:id', newsFeed.deletenewsfeed);

//app.post('/api/contact', contact.contact);
//app.post('/api/contactsecond', contact.contactsecond);

//app.post('/api/reorderContacts', contact.reorderContacts);

//app.post('/api/boardcontact', contact.boardContact);
//app.post('/api/UpdateBoardContact', contact.updateBoardContact);

//app.get('/api/contactdetail/:id', contact.contactdetail);
//app.post('/api/addContact', contact.AddContact);
//app.get('/api/deleteContact/:id', contact.deleteContact);
//app.post('/api/UpdateContact', contact.updateContact);

/* Profile*/
//app.get('/api/profile/:id', profile.profiledetail);
//app.all('/api/UpdateProfile', profile.updateProfile);

/* Accountdetails*/
//app.get('/api/accountdetails/:id', accountdetails.accountdetails);
//app.all('/api/UpdateAccountDetails', accountdetails.updateAccountdetails);
//app.all('/api/createContact', accountdetails.createNewContact);

//app.post('/api/styrelsenformsubmit', accountdetails.styrelsenFormApp);
//app.post('/api/lostpasswordformsubmit',accountdetails.lostpassform);


//app.post('/api/allnotification', submitInput.allnotification);
//app.post('/api/unreadnotification', submitInput.unreadnotification);
//app.get('/api/messagedetail/:id', submitInput.messagedetail);
//app.get('/api/deleteinput/:id', submitInput.deleteinput);

//app.post('/api/updatefile', submitInput.fileuploading);


//app.post('/api/addinput', submitInput.submitInput);
//app.post('/api/upload', uploaddata.uploadimage);
//app.post('/api/uploadlogo', uploaddata.uploadlogo);


app.post('/api/adminLogin', adminlogin.login);

// apu link for housing admin panel

app.post('/api/HousingAdminLogin', housingadminlogin.login);
app.post('/api/HousingAppLogin', housingadminlogin.apphousinglogin);
/*
app.get('/api/services', services.findAllervices);
app.post('/api/addservice', services.createNewservices);
app.get('/api/deleteService/:id', services.deleteService);
app.get('/api/Servicedetail/:id', getdetail.servicedetail);
app.post('/api/updateservices', services.updateServices);
app.post('/api/newsFeed', newsFeed.newsFeed);
app.get('/api/newsfeeddetail/:id', getdetail.newsfeeddetail);
app.get('/api/newstype', newsFeed.newstype);
app.post('/api/addNews', newsFeed.Addnews);
app.post('/api/updateNews', newsFeed.updatenewsfeed);
app.get('/api/send', sendmail.sendmail);
app.post('/api/pushnotification', push.iphonenotify);
*/
//art online


app.post('/api/addetails', addartist.addetails);
app.post('/api/addartwork', addartist.addartwork);
app.get('/api/getartwork',addartist.getartwork);
app.get('/api/getartists',addartist.getartists);

app.get('/api/artworkdetails/:id',addartist.artworkdetails);
app.post('/api/updateartwork', addartist.updateartwork);
app.post('/api/updateartist', addartist.updateartist);
app.get('/api/artistdetails/:id',addartist.artistdetails);
app.listen(9000);
console.log('Listening.. on port 9000...'); 
