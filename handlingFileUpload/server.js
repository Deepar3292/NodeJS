var http = require("http");                                          // gets the built-in http module shipped with nodejs 
var url = require("url");                                            // gets the built-in url module shipped with nodejs 


function start(route,handle) {                                       // function definition of start() with the parameters route (function) and handle (object) 
	var port = 8888;
	http.createServer(function(request, response) {                      
		var pathname = url.parse(request.url).pathname;              // taking the url parsing it to retrieve the pathname

		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);                  // calling the route function that is defined in router.js by passing the handle (object), pathname(variable storing the parsed pathname),response (object),request(object)
	}).listen(port);
	
	console.log("Server running at " + port);	
}

exports.start = start;