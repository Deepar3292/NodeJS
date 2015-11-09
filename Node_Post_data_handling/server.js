var http = require("http");                                          // gets the built-in http module shipped with nodejs 
var url = require("url");                                            // gets the built-in url module shipped with nodejs 


function start(route,handle) {                                       // function definition of start() with the parameters route (function) and handle (object) 
	http.createServer(function(request, response) {                      
		var postData = "";                                           // initializing the variable postData with empty string i.e creating a string object
		var pathname = url.parse(request.url).pathname;              // taking the url parsing it to retrieve the pathname
		
		console.log("Request for " + pathname + " received.");
		
		request.setEncoding("utf8");                                 // setting the encoding scheme to utf-8 
		
		request.addListener("data", function(postDataChunk) {        // registering an event (data) and the event handler(anonymous function). postDataChunck is predefined object which holds the data read fromt the user or file
			postData += postDataChunk;                               // storing the chunks of data into the postData string object to achieve non-blocking operation
			console.log("Received POST data chunk '"+                // displaying each chunk of data received in the console
			postDataChunk + "'.");
		});
		
		request.addListener("end", function() {                      // calling the event handler when the data is completely read 
		route(handle, pathname, response, postData);                     // calling the route function that is defined in router.js by passing the handle (object), pathname(variable storing the parsed pathname),response (object)											         // end the response
	
	})}).listen(8888);                                               // listen() is a method of http which listens to the requests from the port whose number is specified 
	
	console.log("Server has started");
}


exports.start = start;                                               // making the start function available to other modules i.e adding start function to the exports module of the nodejs