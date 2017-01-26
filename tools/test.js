var MongoClient = require('mongodb').MongoClient
var REST = require('./REST.js');

var MultipleChoiceHandlers = require("../controller/multipleChoiceHandlers").MultipleChoiceHandlers;

var FacebookProvider = require('../model/FacebookProvider').FacebookProvider;
var facebookProvider;

var ContentProvider = require('../model/ContentProvider').ContentProvider;
var contentProvider;



MongoClient.connect('mongodb://127.0.0.1:27017/yubio', function(err, db) {
    if(err) throw err;
    contentProvider = new ContentProvider(db);

    contentProvider.getChapter(1005, function(error, result) {
	if( error ) console.log(error);
	else {
	    console.log(result.name);
	}
    });
});


