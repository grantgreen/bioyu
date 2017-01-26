var REST = require('../tools/REST.js');
var url = require('url');
var querystring = require('querystring');
var FacebookProvider = require('../model/FacebookProvider').FacebookProvider;

FacebookHandlers = function(db, pTilesGameHandlers, pMultipleChoiceHandlers) {
    this.facebookProvider = new FacebookProvider(db);
    this.tilesGameHandlers = pTilesGameHandlers;
    this.multipleChoiceHandlers = pMultipleChoiceHandlers;

    this.pageAccessToken = null;
}

FacebookHandlers.prototype.jsonResponse = function(str, response) {
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
    response.end(JSON.stringify(str), encoding);    
}


FacebookHandlers.prototype.pageAccessToken = function(request, response, data) {
    var url_parts = querystring.parse(url.parse(request.url).query);    
    var userAccessToken = url_parts.accessToken;

    var _this = this;

    REST.sget("graph.facebook.com", {}, "/oauth/access_token?client_id=536068863191007&client_secret=7fb1a7b01e241563e567ddee3b59e022&grant_type=fb_exchange_token&fb_exchange_token=" + userAccessToken, function(result, resultHeader) {
	var accessToken = result.split('&')[0].split('=')[1];
	
	REST.sget("graph.facebook.com", {}, "/me/accounts?access_token=" + accessToken, function(result, resultHeader) {
	    console.log(result);
	    result = eval('(' + result + ')');
	    var found = false, i = 0, accessItem = null;
	    while(!found && i < result.data.length) {
		var item = result.data[i++];
		if(item.name == "Yubio") {
		    accessItem = item;
		    found = true;
		}
	    }
	    
	    _this.pageAccessToken = accessItem.access_token;
	    _this.facebookProvider.savePageAccessToken(this.pageAccessToken, function(error, result){
		if(error) console.log(error);
		else {
		    _this.jsonResponse("Found access token for " + accessItem.name, response)
		}	    
	    });
	});	
    });
}


FacebookHandlers.prototype.pageFeed = function(request, response, data) {
    var data_parts = querystring.parse(data);
    var text = encodeURIComponent(data_parts.feedText);
    console.log(data_parts);
    
    // TODO: Parameters
    
    var chapters = "1-30".replace(/(\d+)-(\d+)/g, function(x, y, z) {
	var result = "";
	for(i = y; i < z; i++) {result += i + "|";}
	return result + z;
    });
    

//    tilesGameHandlers.getTilesGame(chapters.split('|'), 3, 9, 'visible', true, function(game) {

    var parameters = {
	"randomcount": 10,
	"chapters": chapters.split('|'),
	"store": true,
	"type": "facebook"
    };

    var _this = this;
    this.multipleChoiceHandlers.getMultipleChoiceGame(parameters, function(game) {
	var hostname = request.headers.host;		
	console.log(hostname);
	
//	var url = "http://" + hostname + "/tiles_game.html?gameId=" + game["_id"];
	var url = "http://" + hostname + "/questionnaire.html?gameId=" + game["_id"];
	
	console.log(url);
	var msg = encodeURIComponent("Denne uges Yubio konkurrence");

/*
	facebookProvider.getPageAccessToken(function(error, token) {
	    REST.spost("graph.facebook.com", {}, "/yubiodk/feed?message=" + msg + "&link=" + encodeURIComponent(url) + "&access_token=" + token.value, "", function(body, header) {
		console.log("After post: " + body);
		var body = eval('(' + body + ')');
		var parameters = {
		    "type": "competition_announcement",
		    "postID": body.id,
		    "yubioID": game["_id"]
		};
		facebookProvider.savePostID(parameters, function(error, result){
		    if(error) console.log(error);
		    else {
			jsonResponse("Posted message to page", response)
		    }	    
		});
	    });	    
	});
*/
	_this.jsonResponse("Posted message to page", response)    
    });
}

FacebookHandlers.prototype.deleteLastPost = function(request, response, data) {
//    var data_parts = querystring.parse(data);
//    var text = encodeURIComponent(data_parts.feedText);
//    console.log(data_parts);
    
    var _this = this;
    this.facebookProvider.getPostID(function(error, postID){
	if(error) console.log(error);
	else {
	    _this.facebookProvider.getPageAccessToken(function(error, token) {
		REST.sdelete("graph.facebook.com", {}, "/" + postID.value + "?access_token=" + token.value, "", function(body, header) {
		    console.log(body);
		    _this.jsonResponse("Deleted message from page", response)
		});
	    });

	}	    
    });
}

exports.FacebookHandlers = FacebookHandlers;
