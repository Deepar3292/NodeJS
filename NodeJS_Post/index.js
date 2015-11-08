var server = require("./server");                           // gets the server module stored in server.js
var router = require("./router");                           // gets the router module stored in router.js
var requestHandler = require("./requestHandlers");          // gets the requestHandlers module stored in requestHandler.js

var handle = {};                                            // creation of handle object

handle["/"] = requestHandler.start;                         // calls start function of the requestHandler module when the pathname starts with /
handle["/start"] = requestHandler.start;                    // calls start function of the requestHandler module when the pathname starts with /start
handle["/upload"] = requestHandler.upload;                  // calls upload function of the requestHandler module when the pathname starts with /upload


server.start(router.route, handle);                         // calling the start function of the server module by passing route function of the router module and handle object
