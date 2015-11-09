/* My first server app which demonstrates creation of server and listening to the port for requests and calling router to route the request to the
   requset handlers */
   
var http = require("http"); //1
var port = 8888;

function start(route) { 
	http.createServer(onRequest).listen(port,"0.0.0.0", function() {   //2
		console.log("Server is running at the port " + port);
	});	
	console.log("Server started at " + Date.now());  //3

	function onRequest(request, response) {  //4
		route(); // calling route function
		response.writeHead(200, {"content-type":"text/plain"}); //5
		response.write("Hello World" + "\n");  //6
		response.end("Server stopped responding" + "\n");  //7
	}
}

exports.start = start; //8

/*
1. Making built-in http module available in server file which is shipped with nodejs
2. using createServer() method that the http module offers to create a http server. This method returns an object which has a method called listen() which listens to the port whose number is specified for the requests.
   Here we are passing a function called "onRequest" which is a callback and gets trigerred whenever there is a request from the browser. It makes a mental note that whenever there is a request this callback should be executed and moves on with the next statement
3. Writing on to Standard output i.e nodejs command line that the server has started. Here, this message is printed on the node command line even though there is no request from the browser thus supporting the event driven asynchronous callback functionality of nodejs
4. Definition of the callback function "onRequest".
5. writing 200 (success status) to http response header
6. writing hello world onto the browser i.e http response body
7. end of the response
8. exporting the server module to make available to other modules 
*/
