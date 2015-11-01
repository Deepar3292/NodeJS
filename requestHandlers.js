var exec = require("child_process").exec;

function start(response) {                                             // getting response object as parameter
exec("find /", function (error, stdout, stderr) {
response.writeHead(200, {"Content-Type": "text/plain"});              // error is displayed saying cannot read property writeHead() of undefined 
response.write(stdout);
response.end();
});
}



function upload(response) {
console.log("Request for upload was called, can upload the file");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello Upload");
response.end();
}

function favicon() {
console.log("Response from favicon server");
}

exports.start = start;
exports.upload = upload;
exports.favicon = favicon;
