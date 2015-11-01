var http = require("http");  
var url = require("url");


function start(route, handle) {                                        // getting access to http module from node.js and making accessible through http variable
http.createServer(function(request, response) {
var pathname = url.parse(request.url).pathname; 
console.log("Request for the " + pathname + " received"); 
route(handle, pathname, response);                                             // calls the method that the http module offers. This returns an object which has method called listen() which listens the request from the specified port
response.writeHead(200, {"Content-Type": "text/plain"});                 // writes succes status to the http header
response.write(pathname + " tells Hello World");				                  // outputs the response to the client
response.end();												                          // end the response
}).listen(8888);  
console.log("Server has started");
}

exports.start = start;
