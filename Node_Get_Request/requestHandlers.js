var exec = require("child_process").exec;                               // getting the child_process module and its exec method; exec method is used to execute the commands specified as is parameter. Mostly used to write call back functions

function start(response) {                                              // defining the start function by taking response object
  console.log("I entered start function");                                          
  exec("DIR", { timeout: 200000, maxBuffer: 40000*1024 },                /* exec method executes the command "DIR" which is a windows command to list all the directories. Defining the event callback function with specified pre-defined parameters
                                                                           and adds a delay time around 10s */
  function (error, stdout, stderr) {
  response.writeHead(200, {"Content-Type": "text/plain"});              
  response.write(stdout);                                               // writes the output given by exec method on to the browser
  response.write("hello start");
  response.end();                                                       // ends the response
});
}



function upload(response) {                                              // definition of upload function when the pathname given by user is /upload
  console.log("Request for upload was called, can upload the file");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}


exports.start = start;
exports.upload = upload;
