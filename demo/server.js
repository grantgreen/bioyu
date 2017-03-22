var http = require("http");
var url = require("url");


function get(route, handle) {
    function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;

	if(request.method == 'POST') {
	    var queryData = "";
	    request.addListener('data', function(chunk) {
		queryData += chunk;
		if(queryData.length > 1e6) {
		    queryData = "";
		    response.writeHead(413, {'Content-Type': 'text/plain'}).end();
		    request.connection.destroy();
		}
	    });
		    
	    request.addListener('error', function() {
		console.log("REQUEST ERROR");
	    });

	    request.addListener('end', function() {
		route(handle, pathname, this, response, queryData);
	    });
	}
	else {
	    request.addListener("end", function() {
		route(handle, pathname, this, response);
	    });
	}
	
	request.resume();
    }
    
    return http.createServer(onRequest);
    console.log("Server has started.");
}

exports.get = get;
