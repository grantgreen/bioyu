var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;


LogProvider = function() {}

LogProvider.prototype.openDb = function(host, port, callback) {
    this.db = new Db('yubio', new Server(host, port, {auto_reconnect: true}), {});
    this.db.open(callback);
};

//getCollection
LogProvider.prototype.getCollection = function(callback) {
    this.db.createCollection('logs', function(error, log_collection) {
	if( error ) callback(error);
	else callback(null, log_collection);
    });
};

//findAll
LogProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, log_collection) {
	if( error ) callback(error);
	else {
            log_collection.find().toArray(function(error, results) {
		if( error ) callback(error);
		else callback(null, results);
            });
	}
    });
};


//findById
LogProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, log_collection) {
	if( error ) callback(error)
	else {
            log_collection.findOne({_id: log_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
		if( error ) callback(error)
		else callback(null, result)
            });
	}
    });
};

//findByFromDate
LogProvider.prototype.findFromDate = function(date, callback) {
    this.getCollection(function(error, log_collection) {
	if( error ) callback(error)
	else {
	    log_collection.find({logDate: {$gt: date}}).toArray(function(error, result) {
		if( error ) callback(error)
		else callback(null, result)
            });
	}
    });
}


//save
LogProvider.prototype.save = function(log, callback) {
    this.getCollection(function(error, log_collection) {
	if( error ) callback(error)
	else {
	    var logDate = Date.now();
            log_collection.insert({
		'path': log.path,
		'ip': log.ip,
		'user_agent': log.user_agent,
		'logDate': logDate
	    }, function(error) {
		if(error) {
		    callback(error);
		}
		else {		 
		    callback(null, log);
		}
            });
	}
    });
};

exports.LogProvider = LogProvider;