var MongoClient = require('mongodb').MongoClient
var REST = require('./REST.js');

var FacebookProvider = require('../model/FacebookProvider').FacebookProvider;
var facebookProvider;

MongoClient.connect('mongodb://127.0.0.1:27017/yubio', function(err, db) {
    if(err) throw err;

    facebookProvider = new FacebookProvider(db);
    facebookProvider.getPageAccessToken(function(error, token) {
	REST.sget("graph.facebook.com", {}, "/yubiodk/feed?access_token=" + token.value, function(err, body, header) {
	    if(err) console.log(err);
	    else {
		console.log(new Date());
		console.log(body);
		db.close();
	    }
	});
    });
});


