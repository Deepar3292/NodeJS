function route(pathname, handle, response) { 	//1                          
    console.log("About to route the request for " + pathname);  //2        

    if (typeof (handle[pathname]) === 'function') {    //3                 
    handle[pathname](response);                        //4       
    } else {                                           //5
			console.log("No request handler for " + pathname);           
			response.writeHead(400, {"Content-Type": "text/plain"});     
			response.write("404 not found");                             
			response.end("Retry");                                              
	}
}

exports.route = route;     

/*
1. Definition of route function with pathname, handle and response as parameters taken from the server module
2. Displaying the message on the command line
3. Checking whether the handle is a method function  
4. if true we tell the handle to handle the pathname by passing response object 
5. Else we output an error message onto console and browser

*/                                           