var url = require('url');
var querystring = require('querystring');

var QuestionProvider = require('../model/QuestionProvider').QuestionProvider;
var ContentProvider = require('../model/ContentProvider').ContentProvider;

MultipleChoiceHandlers = function(db) {
    this.questionProvider = new QuestionProvider(db);
    this.contentProvider = new ContentProvider(db);
} 

MultipleChoiceHandlers.prototype.getQuestionsJSON = function(request, response, data) {

    var _this = this;

    var url_parts;
    if(data) {
	url_parts = querystring.parse(data);
    }
    else {
	url_parts = querystring.parse(url.parse(request.url).query);    
    }

    var input = {
	'randomCount': url_parts.randomcount,
	'chapters': url_parts["chapters[]"],
	'store':  url_parts.store
    }

    //	console.log("requestHandlers: " + JSON.stringify(url_parts));
    this.getMultipleChoiceGame(input, function(game) {
	var sendResponse = function(response, result) {
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
	sendResponse(response, game);
    });

}

MultipleChoiceHandlers.prototype.getMultipleChoiceGame = function(input, callback) {

    console.log("Parameters: " + input.randomCount);
    var _this = this;
    this.questionProvider.findRandom(input, function(error, result) {
	//	    console.log('FindRandom called');
	if( error ) console.log(error);
	else {
	    
	    if(input.store) {
		result['chapters'] = input.chapters;
		result['type'] = input.type;
		result['expires'] = input.expires ? input.expires : -1;
		_this.questionProvider.storeGame(result, function(error, result) {
		    if(error) {
			console.log(error);
		    }
		    else {
			callback(result);
		    }
		});
	    }
	    else {
		callback(result);
	    }

	}
    });
}

MultipleChoiceHandlers.prototype.loadQuestionsJSON = function(request, response, data) {
    var url_parts = querystring.parse(url.parse(request.url).query);    
    //	console.log(url_parts);
    var _this = this;
    this.questionProvider.loadStoredGame(url_parts.gameId, function(error, result) {
	if( error ) console.log(error);
	else {
	    _this.contentProvider.getChapter(result.chapters, function(error, chapterInfo) {
		if( error ) console.log(error);
		else {
		    if(chapterInfo && chapterInfo.name) {
			result.headerText  = chapterInfo.name.replace(/Kapitel 100\d: /, '');
		    }
		    else {
			result.headerText  = "";
		    }
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
	    });
	}
    });
}



MultipleChoiceHandlers.prototype.getCorrectAnswerCountJSON = function(request, response, data) {
    var url_parts = querystring.parse(url.parse(request.url).query);    
    
    this.questionProvider.findCorrectAnswerCount(url_parts, function(error, result) {
	//	    console.log('FindCorrectAnswerCount called');
	if( error ) console.log(error);
	else {
	    var type = 'application/json';
	    var encoding = 'utf-8';
	    var header = {'Content-Type': type, 'charset': encoding}; 
	    response.writeHead(200, header);
	    response.end(JSON.stringify(result), encoding);
	}
    });
}

MultipleChoiceHandlers.prototype.getHighScoresJSON = function(request, response, data) {
    var url_parts = querystring.parse(url.parse(request.url).query);    
    this.questionProvider.getHighScores(url_parts, function(error, result) {
	if( error ) console.log(error);
	else {
	    var type = 'application/json';
	    var encoding = 'utf-8';
	    var header = {'Content-Type': type, 'charset': encoding}; 
	    response.writeHead(200, header);
	    response.end(JSON.stringify(result.scores), encoding);
	}
    });
}


exports.MultipleChoiceHandlers = MultipleChoiceHandlers;
