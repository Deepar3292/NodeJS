var exec = require("child_process").exec;	//1

function start(response) {                                     
	console.log("Request handler start was called"); 
	
	exec("DIR", function (error, stdout, stderr) {				//2
	response.writeHead(200, {"Content-Type": "text/plain"});    
	response.write(stdout);			//3
	response.end("\n" + "Hello World");
	});
}	
 


function upload(response) {            //4                     
	console.log("Request for upload was called, can upload the file");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");	   //5
	response.end();
}

// making start and upload functions available for other modules
exports.start = start;     
exports.upload = upload;   

/*
1. making child_process module available which is shipped with node in order to use the asynchronous method exec() which executes the shell commmands
2. exec() will execute the command 'DIR' and calls the anonymous callback function once the execution is completed
3. Writing the result of the exec() onto the browser
4. Definition of upload function which will be called if the url is /upload
5. Writing the string onto browser
Note: Since the exec() is a asynchronous method and a callback is registered, now the router can route different requests to different handler asynchronously without blocking
*/