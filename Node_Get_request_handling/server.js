var http = require("http");                                          // gets the built-in http module shipped with nodejs 
var url = require("url");                                            // gets the built-in url module shipped with nodejs package whose methods are used to extract the different parts of URL


function start(route, handle) {                                      
	http.createServer(function(request, response) {        //1                    
    var pathname = url.parse(request.url).pathname;        //2
	
	console.log("Request for " + pathname + " received.");
	route(pathname, handle, response);                      //3
	}).listen(8888);                                        //4
	
 console.log("Server has started at " + Date.now());        //5
}

// making the start function available for other modules
exports.start = start; 

/*
1. creates the http server with a callback which when fired executes the function body
2. extracting the url for pathname
3. calling route function of the route module by passing the extracted pathname, handle and response object
4. listens to the incoming request once the server has created
5. outputs the string onto the console        

*/                                      