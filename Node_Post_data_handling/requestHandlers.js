var querystring = require("querystring");    // making querystring module available in order to parse the postdata text

function start(response, postData) {                                            
	console.log("I entered start function"); 
	// the below tags creates a text box to take the input and a button in the browser and saves in the variable body  
	var body = '<html>'+                                                    // error: the html tags are only displayed instead of text box  
             '<head>'+
             '<meta http-equiv="Content-Type" content="text/html"' +
             'charset=UTF-8" />'+
             '</head>'+
             '<body>'+
             '<form action="/upload" method="post">'+
             '<textarea name="text" rows="20" cols="60"></textarea>'+
             '<input type="submit" value="Submit text" />'+
             '</form>'+
             '</body>'+
             '</html>';
			 
	response.writeHead(200, {"Content-Type": "text/plain"});              
	response.write(body);                                                            // displays an empty text area to obtain the input from the user         
	response.end();                                                    
}




function upload(response, postData) {                                  
	console.log("Request for upload was called, can upload the file");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent the text " + querystring.parse(postData).text);     // parses the postData and gets the individual fields that make up the POST data                          
	response.end();
}


exports.start = start;
exports.upload = upload;
