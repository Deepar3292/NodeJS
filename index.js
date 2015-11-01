var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandlers");

var handle = {}
/*
"/" : requestHandler.start,
"/start" : requestHandler.start,
"/upload" : requestHandler.upload
};
*/
handle["/hello"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/favicon"] = requestHandler.favicon;

server.start(router.route, handle);
