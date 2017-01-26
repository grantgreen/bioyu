var https = require('https');
var http = require('http');
var fs = require('fs');

var retrieveInfo = function(options, callback) {

    var protocol = http;    
    if(options.port == 443) {
	protocol = https;
    }

    var req = protocol.request(options, function(res) {
	res.setEncoding('utf8');
	
	var body = "";
	res.on('data', function (chunk) {
	    //console.log('BODY: ' + chunk);
	    body += chunk;
	});
	
	res.on('end', function () {
	    callback(null, body, res.headers, res.statusCode);
	});
	
    });
    
    req.on('error', function(e) {
	callback('Problem with request: ' + e.message + " " + options.hostname + options.path);
    });

    if((options.method == "POST" || options.method == "PUT") && options.payload) {
	req.write(options.payload);
    }


    req.end();
}

exports.head = function(hostname, headers, path, callback) {
    retrieveInfo({
	hostname: hostname,
	headers: headers,
	port: 80,
	path: path,
	method: "HEAD"
    }, callback);
}

exports.shead = function(hostname, headers, path, callback) {
    retrieveInfo({
	hostname: hostname,
	headers: headers,
	port: 443,
	path: path,
	method: "HEAD"
    }, callback);
}

exports.get = function(hostname, headers, path, callback) {
    retrieveInfo({
	hostname: hostname,
	headers: headers,
	port: 80,
	path: path,
	method: "GET"
    }, callback);
}

exports.sget = function(hostname, headers, path, callback) {
    retrieveInfo({
	hostname: hostname,
	headers: headers,
	port: 443,
	path: path,
	method: "GET"
    }, callback);
}

exports.post = function(hostname, headers, path, postbody, callback) {
    retrieveInfo({
	hostname: hostname,
	headers: headers,
	port: 80,
	path: path,
	method: "POST",
	payload: postbody
    }, callback);
}

exports.spost = function(hostname, headers, path, postbody, callback) {
    retrieveInfo({
	hostname: hostname,
	headers: headers,
	port: 443,
	path: path,
	method: "POST",
	payload: postbody
    }, callback);
}

exports.delete = function(hostname, headers, path, postbody, callback) {
    retrieveInfo({
	hostname: hostname,
	headers: headers,
	port: 80,
	path: path,
	method: "DELETE"
    }, callback);
}

exports.sdelete = function(hostname, headers, path, postbody, callback) {
    retrieveInfo({
	hostname: hostname,
	headers: headers,
	port: 443,
	path: path,
	method: "DELETE"
    }, callback);
}


//spost("graph.facebook.com", {}, "/yubiodk/feed?message=HovHej%20fra%20nodejs&access_token=CAAHnjUIqZA98BAOG6ANwcJffuyhegPtiwVB8aY0xq3tS92PUyz5hgXisKgsMf6oFXyV6W9mBBF0f3BvnZB2vhGX7KG9zxwMeT4tQejqxIiIVThZBWmxU6AoCc6N8PMsNSujBPIRGw1ugteTQgLYTuAF5hESrwD7ryNuXgLZCR9JbwwZCk55BCYKnmxDQZAvZAsU8ZAuZBZCQhuBwZDZD", "", function(body, header) {
//    console.log(body);
//});


/*
retrieveInfo({
    hostname: 'www.lectio.dk',
    port: 443,
    path: '/lectio/login_list.aspx'
}, function(body) {
    var myRe = /lectio\/(\d+)\/.*lecafdeling=(\d+)'>(.*)<\/a/g;
    var myArray;
    var resultArray = [];

    while ((myArray = myRe.exec(body)) !== null)
    {
	resultArray.push({
	    'schoolId': myArray[1],
	    'lecDepId': myArray[2],
	    'schoolName': myArray[3]
	});
    }
    
    getClassInfo(resultArray);
});
*/
