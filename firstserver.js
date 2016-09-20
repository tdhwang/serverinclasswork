var http = require ('http');

var goodPORT = 7000

var badPORT = 7500

function handleRequest (request, response) {
	response.end('You are so COOL and AMAZING. YOU CAN CONQUER ALL!' + request.url);
}
function handleHateRequest (request, response) {
	response.end('you suck bruh gtfo scrub' + request.url);
}

var server = http.createServer(handleRequest);
var servertwo = http.createServer(handleHateRequest);

server.listen(goodPORT, function() {
	console.log('server listening on: http://localhost:%', goodPORT);
});

servertwo.listen(badPORT, function() {
	console.log('server listening on: http://localhost:%', badPORT);
});