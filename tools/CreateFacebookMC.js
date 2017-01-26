var MongoClient = require('mongodb').MongoClient
var REST = require('./REST.js');

var MultipleChoiceHandlers = require("../controller/multipleChoiceHandlers").MultipleChoiceHandlers;

var FacebookProvider = require('../model/FacebookProvider').FacebookProvider;
var facebookProvider;

var ContentProvider = require('../model/ContentProvider').ContentProvider;
var contentProvider;


MongoClient.connect('mongodb://127.0.0.1:27017/yubio', function(err, db) {
    if(err) throw err;

    var multipleChoiceHandlers = new MultipleChoiceHandlers(db);

    facebookProvider = new FacebookProvider(db);
    contentProvider = new ContentProvider(db);


    facebookProvider.getPageAccessToken(function(error, token) {
	var chapter = Math.ceil(Math.random()*30);
	chapter = 14;
	console.log(chapter);
	var chapters = [String(chapter)];

	/*
	var chapters = "1-30".replace(/(\d+)-(\d+)/g, function(x, y, z) {
	    var result = "";
	    for(i = y; i < z; i++) {result += i + "|";}
	    return result + z;
	});
	*/
	var d = new Date();
	// Make it work on saturdays too :-)
	var expireDate = d.getDate() + 6 - (d.getDay() % 6 - (d.getDay() / 6 >> 0));
	var expires = new Date(d.getFullYear(), d.getMonth(), expireDate).getTime();
	
	var parameters = {
	    "randomCount": 10,
	    "chapters": chapters,
	    "store": true,
	    "type": "facebook",
	    "expires": expires
	};

	multipleChoiceHandlers.getMultipleChoiceGame(parameters, function(game) {
	    // CHANGE
//	    var hostname = "localhost:8100";		
	    var hostname = "yubio.dk";		
	
	    var url = "http://" + hostname + "/questionnaire.html?gameId=" + game["_id"];
	
	    console.log(url);
	  
	    contentProvider.getChapter(chapter, function(error, result) {
		if( error ) console.log(error);
		else {
		    // Fjernes igen
//		    result.name = "Ultimate Choice";
		    var msg = encodeURIComponent("Denne uges Yubio konkurrence:\n" + result.name + ".\n Klik på linket nedenfor, for at starte");
		    facebookProvider.getPageAccessToken(function(error, token) {
			REST.spost("graph.facebook.com", {}, "/yubiodk/feed?message=" + msg + "&link=" + encodeURIComponent(url) + "&access_token=" + token.value + "&picture=" + encodeURIComponent("http://yubio.dk/images/icons/Quizikon.jpg"), "", function(err, body, header) {
			    if(err) console.log(err);
			    else {
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
					db.close();
					console.log("Posted message to page");
				    }	    
				});
			    }
			});	    
		    });
		}
	    });

	    // console.log("Posted message to page");
	});
    });
});


