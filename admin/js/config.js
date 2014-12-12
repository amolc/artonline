if (document.location.hostname == "localhost"){
	var base = window.location.origin;
    var baseURL = base +"/api/";
    //var baseURL="http://localhost:5000/api/";
    var logoURL = base +"/housingadmin2/logos/";
} else {
	var baseURL="http://node.fountaintechies.com/api/";
}