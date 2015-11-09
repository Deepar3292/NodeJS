var server = require("./server");      			 	 // making server file available                
var router = require("./router");        			 // making router file available                
var requestHandler = require("./requestHandlers");   // making requestHandlers file available       

var handle = {};                                     // defining the handle object to handle different pathnames differently                            

handle["/"] = requestHandler.start;                  // assigning start handler if the pathname is "/"      
handle["/start"] = requestHandler.start;             // assigning start handler if the pathname is "/start"     
handle["/upload"] = requestHandler.upload;           // assigning upload handler if the pathname is "/upload"      

server.start(router.route, handle);                  // calling the start function by passing the route funciton and handle object    