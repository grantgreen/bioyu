var url = require('url');
var querystring = require('querystring');

var TilesGameProvider = require('../model/TilesGameProvider').TilesGameProvider;
var ContentProvider = require('../model/ContentProvider').ContentProvider;

TilesGameHandlers = function(db) {
    this.tilesGameProvider = new TilesGameProvider(db);
    this.contentProvider = new ContentProvider(db);
} 

TilesGameHandlers.prototype.getTilesGameCategoriesJSON = function(request, response, data) {
    var url_parts;
    if(data) {
	url_parts = querystring.parse(data);
    }
    else {
	url_parts = querystring.parse(url.parse(request.url).query);    
    }

    var chapters = url_parts["chapters[]"];
    var neededCategories = url_parts.neededCategories;
    var neededValues = url_parts.neededValues;
    var visibleCategories = url_parts.visibleCategories;
    var store = url_parts.store;
    this.getTilesGame(chapters, neededCategories, neededValues, visibleCategories, store, function(game) {
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

TilesGameHandlers.prototype.getTilesGame = function(chapters, neededCategories, neededValues, visibleCategories, store, callback) {
    
    var _this = this;

    this.tilesGameProvider.findByChapter(chapters, function(error, result) {

	if( error ) console.log(error);
	else {
	    _this.tilesGameProvider.countCategories(chapters, function(error, possibleCategories) {
		if( error ) console.log(error);
		else {

		    neededCategories = Number(neededCategories);
		    
		    var chosenMatches = new Array();
		    var chosenCategories = new Array();
		    
		    var possibleValues = 0;

		    //			console.log(neededCategories + " " + possibleCategories);
		    for(var i in result) {	
			var categoryObj = result[i];
			if(Math.random() < (neededCategories / possibleCategories)) {
			    chosenCategories.push(categoryObj);
			    possibleValues += categoryObj.matches.length;
			    neededCategories--;
			    
			    if(neededCategories == 0) {
				break;
			    }				    
			}
			possibleCategories--;
		    }
		    
		    for(var i in chosenCategories) {
			var category = chosenCategories[i];
			for(var j in category.matches) {
			    if(Math.random() < (neededValues / possibleValues)) {
				chosenMatches.push({"text": category.matches[j], "bucket": category.category});
				neededValues--;
			    }
			    possibleValues--;
			}
		    }
		    
		    result = {
			"categories": chosenCategories.map(function(x) {
			    return x.category;
			}),
			"matches": chosenMatches,
			"visibleCategories": visibleCategories == 'visible' ? 'visible' : 'hidden'
		    };

//		    console.log(result);
		    
		    if(store) {
			result['chapters'] = chapters;

			_this.tilesGameProvider.storeGame(result, function(error, result) {
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
    });
}

TilesGameHandlers.prototype.loadTilesGameJSON = function(request, response, data) {

    var _this = this;

    var url_parts;
    if(data) {
	url_parts = querystring.parse(data);
    }
    else {
	url_parts = querystring.parse(url.parse(request.url).query);    
    }

    //	console.log(url_parts);
    _this.tilesGameProvider.loadStoredGame(url_parts.gameId, function(error, result) {
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

exports.TilesGameHandlers = TilesGameHandlers;
