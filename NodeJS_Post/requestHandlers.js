
function start(response, postData) {                                            // defining the start function by taking response object
  console.log("I entered start function"); 
  // the below tags creates an text box to take the input and a button in the browser and saves in the variable body  
  var body = "";
  body = '<html>'+                                                      // in the browser the html tags are displayed instead of the text box
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
  response.write(body);                                               // writes the output of the html tags stored in variable body on to the browser
  response.end();                                                     // ends the response
}




function upload(response, postData) {                                  // definition of upload function when the pathname given by user is /upload
  console.log("Request for upload was called, can upload the file");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent: " + postData);                          // displaying the data read on to the browser
  response.end();
}


exports.start = start;
exports.upload = upload;
