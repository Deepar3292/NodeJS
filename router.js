
function route(handle, pathname, response) {
console.log("About to route the request for " + pathname);
if (typeof (handle[pathname]) === 'function') {
handle[pathname](response);
} else {
console.log("No request handler for " + pathname);
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("404 not found");
response.end();
}
}
exports.route = route;
