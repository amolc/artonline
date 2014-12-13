
if (document.location.hostname == "localhost" || document.location.hostname == "icefire.in" ){
	var base = window.location.origin;
    var baseURL = base +"/api/";
    var logoURL = base +"/housingadmin2/logos/";
} else {
	var baseURL="http://node.fountaintechies.com:9000/api/";
	var logoURL = "http://node.fountaintechies.com:9000/housingadmin2/logos/";
} 
