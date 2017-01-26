#!/usr/bin/env node

var REST = require('./REST.js');


var fs = require("fs");
var https = require('https');
var http = require('http');

var chapterCount = 30;
console.log('<html>')
console.log('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">');
console.log('<body>');


for (var i = 21; i <= chapterCount; i++) {
	var filePath = "../client/js/articles_data/articles_" + i +".js";
	//var filePath = "../client/js/links_data/links_" + i +".js";
    //var filePath = "../client/js/animations_data/animations_" + i + ".js";
    console.log(filePath + '<br />');
    (function (filePath) {
		fs.readFile(filePath, 'utf-8', function (err, fileContents) {
			if (err) throw err;
			var chapters = JSON.parse(fileContents.replace("var links = ", ""));

			for (var j in chapters) {
				chapters[j].forEach(function (link) {
					
					if (!/^pdfs/.test(link.link)) {
						var m = link.link.match(/(https?):\/\/(.+\.[a-zA-Z]+)(\/?.*)/);

						var params = {
							caption: link.caption,
							link: link.link,
							protocol: m[1],
							hostname: m[2],
							path: m[3]
						};

						//		    console.log(params.protocol);

						var GET = /youtube/.test(params.link) || /https/.test(params.protocol) ? REST.sget : REST.get;

						GET(params.hostname, {}, params.path, (function(index) {
							return function (err, body, headers, status) {

							var youtube_error = false;
							//			console.log(/youtube/.test(params.link));
							//			console.log(params.link);
							if (/youtube/.test(params.link)) {
								console.log('Youtube: <a href="' + params.protocol + '://' + params.hostname + params.path + '">' + params.caption + '</a><br />');
								youtube_error = /\<title\>YouTube\<\/title\>/.test(body);
							}

							if (youtube_error || (status != "200" && status != "301")) {
								console.log();
								console.log(index + " Status: " + status + " Youtube: " + youtube_error);
								console.log('<a href="' + params.protocol + '://' + params.hostname + params.path + '">' + params.caption + '</a><br />');
							}
						}})(j));

					}
				});
			}
		});
    })(filePath);
}
