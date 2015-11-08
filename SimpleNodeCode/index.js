/* Placing all the code in one file is not a great idea and hence its a good practice to split the modules and place it in different files.
Here in index file we require the server file and call the start function of the server which in-turn creates and starts the server */

var server = require("./server");   // making server file available for index. Since the server is not a internal nodejs module we call it using ./
var router = require("./router");

server.start(router.route);         // passing route function of the router module to the start function