var http = require("http");                                          // gets the built-in http module stored in nodejs package
var url = require("url");                                            // gets the built-in url module stored in nodejs package


function start(route,handle) {                                       // function definition of start() with the parameters route (function) and handle (object) 
http.createServer(function(request, response) {                      /* using built-in method property createSever() of the http object to start the server and definition of an anonymous function with request and response objects as parameters
                                                                         Here request and response are two pre-defined objects in nodejs where request stores the request from the client and response object is used to ouput the result onto the browser*/
	var pathname = url.parse(request.url).pathname;                  // getting the url input by the user and parsing the pathname and storing it in the variable "pathname"
	console.log("Request for the " + pathname + " received");        // displaying the message in the nodejs command line interpreter 
	route(handle, pathname, response);                               // calling the route function that is defined in router.js by passing the handle (object), pathname(variable storing the parsed pathname),response (object)											         // end the response
	}).listen(8888);                                                 // listen() is a method of http which listens to the requests from the port whose number is specified 
 console.log("Server has started");
};

exports.start = start;                                               // making the start function available to other modules i.e adding start function to the exports module of the nodejs
