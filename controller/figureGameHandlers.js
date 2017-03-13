var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

//var FigureGameProvider = require('../model/FigureGameProvider').TilesGameProvider;
var ContentProvider = require('../model/ContentProvider').ContentProvider;

FigureGameHandlers = function (db) {
	//this.figureGameProvider = new FigureGameProvider(db);
	this.contentProvider = new ContentProvider(db);
}

FigureGameHandlers.prototype.getFiguresForChapterJSON = function (request, response, data) {
	var url_parts;
	if (data) {
		url_parts = querystring.parse(data);
	}
	else {
		url_parts = querystring.parse(url.parse(request.url).query);
	}

	var chapter = url_parts["chapter"];
	var type = url_parts["type"];

	var sendResponse = function (response, result) {
		var type = 'application/json';
		var encoding = 'utf-8';
		var header = {
			'Content-Type': type,
			'charset': encoding,
			'Pragma': 'no-cache',
			'Cache-Control': 'no-cache',
			'Expires': -1
		};
		response.writeHead(200, header);
		response.end(JSON.stringify(result), encoding);
	}
console.log("requestHandlers: " + JSON.stringify(url_parts));
	fs.readdir("./client/views/figures/" + type + "/" + chapter + "/standard", function (err, standardfiles) {
		if (err) {
			sendResponse(response, {});
		}
		else {
			fs.readdir("./client/views/figures/" + type + "/" + chapter + "/special", function (err, specialfiles) {
				if (err) {
					sendResponse(response, {});
				}
				else {
					sendResponse(response, { "standard": standardfiles, "special": specialfiles });
				}
			});
		}
	});
}

exports.FigureGameHandlers = FigureGameHandlers;
