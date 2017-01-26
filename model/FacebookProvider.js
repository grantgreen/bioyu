var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;


FacebookProvider = function(db) {
    this.db = db;
}

//getCollection
FacebookProvider.prototype.getCollection = function(callback) {
    this.db.createCollection('facebook', function(error, facebook_collection) {
	if( error ) callback(error);
	else callback(null, facebook_collection);
    });
};

FacebookProvider.prototype.getPostsCollection = function(callback) {
    this.db.createCollection('facebook_posts', function(error, facebook_posts_collection) {
	if( error ) callback(error);
	else callback(null, facebook_posts_collection);
    });
};


//findAll
FacebookProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, facebook_collection) {
	if( error ) callback(error);
	else {
            facebook_collection.find().toArray(function(error, results) {
		if( error ) callback(error);
		else callback(null, results);
            });
	}
    });
};


//getPageAccessToken
FacebookProvider.prototype.getPageAccessToken = function(callback) {
    this.getCollection(function(error, facebook_collection) {
	if( error ) callback(error)
	else {
            facebook_collection.findOne({"type": "pageAccessToken"}, function(error, result) {
		if( error ) callback(error)
		else callback(null, result)
            });
	}
    });
};


//saveToken
FacebookProvider.prototype.savePageAccessToken = function(accessToken, callback) {
    this.getCollection(function(error, facebook_collection) {
	if( error ) callback(error)
	else {
            facebook_collection.update(
		{"type": "pageAccessToken"},
		{"value": accessToken,
		 "type": "pageAccessToken"},
		{"upsert": true}, 
		function(error) {
		    if(error) {
			callback(error);
		    }
		    else {
			callback(null, accessToken);
		    }
		});
	}
    });
};


//getPostID
FacebookProvider.prototype.getPostID = function(parameters, callback) {
    this.getPostsCollection(function(error, facebook_collection) {
	if( error ) callback(error)
	else {
            facebook_collection.findOne({"type": parameters.type, "yubioID": parameters.yubioID}, function(error, result) {
		if( error ) callback(error)
		else callback(null, result)
            });
	}
    });
};


/**
 * saveToken
 * Type can be one of
 * competition_announcement
 * competition_result
 */
FacebookProvider.prototype.savePostID = function(parameters, callback) {
    this.getPostsCollection(function(error, facebook_collection) {
	if( error ) callback(error)
	else {
            facebook_collection.update(
		{"type": parameters.type,
		 "yubioID": parameters.yubioID},
		{"type": parameters.type,
		 "postID": parameters.postID,
		 "yubioID": parameters.yubioID},
		{"upsert": true}, 
		function(error) {
		    if(error) {
			callback(error);
		    }
		    else {
			callback(null, parameters);
		    }
		});
	}
    });
};

exports.FacebookProvider = FacebookProvider;