function route(handle, pathname, response, postData) {                           // defintion of the function route with specified parameters
    console.log("About to route the request for " + pathname);         // displaying the message in the nodejs command line interpreter

    if (typeof (handle[pathname]) === 'function') {                    // checking whether the handle object is a method/function property
    handle[pathname](response, postData);                              // if true handle object calls its assigned function in index.js
    } else {
		  console.log("No request handler for " + pathname);           // else writes the message on to console
          response.writeHead(400, {"Content-Type": "text/plain"});     // writes the response header
          response.write("404 not found");                             // writes the response message to the browser
          response.end();                                              // ends the respose
        }
}

exports.route = route;                                                 // adds the route function to the exports module i.e making route function available for other modules