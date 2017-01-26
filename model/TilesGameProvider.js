//var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
//var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectId = require('mongodb').ObjectID;


TilesGameProvider = function(db) {
    this.db = db;
}

exports.TilesGameProvider = TilesGameProvider;

/*
  TilesGameProvider.prototype.openDb = function(host, port, callback) {
  this.db = new Db('yubio', new Server(host, port, {auto_reconnect: true}), {w: -1});
  this.db.open(function(err, db) {
  console.log("HEJ");
  });
  };
*/


//getCollection
TilesGameProvider.prototype.getCollection = function(callback) {
    this.db.createCollection('tiles_game', function(error, tiles_game_collection) {
	if( error ) callback(error);
	else callback(null, tiles_game_collection);
    });
};

//getStoreCollection
TilesGameProvider.prototype.getStoreCollection = function(callback) {
    this.db.createCollection('tiles_game_store', function(error, tiles_game_store_collection) {
	if( error ) callback(error);
	else callback(null, tiles_game_store_collection);
    });
};

//findAll
TilesGameProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, tiles_game_collection) {
	if( error ) callback(error);
	else {
	    tiles_game_collection.find().toArray(function(error, results) {
		if( error ) callback(error);
		else callback(null, results);
	    });
	}
    });
};

//findByChapter
TilesGameProvider.prototype.findByChapter = function(chapters, callback) {
    this.getCollection(function(err, tiles_game_collection) {
	if( err ) callback(error, null);
	else {
	    
	    if(Object.prototype.toString.call(chapters) !== '[object Array]') {		
		chapters = [ chapters ];
	    }

	    chapters = chapters.map(function(x) {return Number(x)});
	    console.log(chapters);
	    tiles_game_collection.find({"chapter": { $in : chapters }}).toArray(function(err, res) {
		if( err ) callback(error, null);
		else {		   		    
		    callback(null, res);
		}
	    });
	}
    });
};

// Count categories
TilesGameProvider.prototype.countCategories = function(chapters, callback) {
    this.getCollection(function(err, tiles_game_collection) {
	if( err ) callback(error, null);
	else {
	    if(Object.prototype.toString.call(chapters) !== '[object Array]') {		
		chapters = [ chapters ];
	    }
	    chapters = chapters.map(function(x) {return Number(x)});
	    console.log(chapters);
	    tiles_game_collection.count({"chapter": { $in : chapters }}, function(err, count) {
		if( err ) callback(error, null);
		else {		   		    
		    callback(null, count);
		}
	    });
	}
    });
};

//findById
TilesGameProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, tiles_game_collection) {
	if( error ) callback(error)
	else {
	    tiles_game_collection.findOne({_id: ObjectId(id)}, function(error, result) {
		if( error ) callback(error)
		else callback(null, result)
	    });
	}
    });
};


//load stored game
TilesGameProvider.prototype.loadStoredGame = function(id, callback) {
    this.getStoreCollection(function(error, tiles_game_store_collection) {
	if( error ) callback(error)
	else {
	    if(id.length != 24) {
		callback("TilesProvider.loadStoredGame: id not correct length " + id);
	    }
	    else {
		tiles_game_store_collection.findOne({"_id": ObjectId(id)}, function(error, result) {
		    if( error ) {
			callback(error);
		    }
		    else {
			if(!result) {
			    callback("TilesGameProvider.loadStoredGame: null result on id: " + id);
			}
			else {
			    callback(null, result);
			}
		    }
		});
	    }
	}
    });
};


//store game
TilesGameProvider.prototype.storeGame = function(game, callback) {
    this.getStoreCollection(function(error, tiles_game_store_collection) {
	if( error ) callback(error);
	else {	    
	    game['createdDate'] = Date.now();
	    game['scores'] = [];
	    console.log("storeGame (tiles): " + game);
	    tiles_game_store_collection.insert(game, function() {
		callback(null, game);
	    });
	}
    });
};

//save game score
TilesGameProvider.prototype.saveGameScore = function(data, callback) {
    this.getStoreCollection(function(error, tiles_game_store_collection) {
	if( error ) callback(error);
	else {	    
	    var gameId = data.gameId;
	    delete data.gameId;
	    console.log(data);
	    if(data.playerName != null) {
		tiles_game_store_collection.update({_id: ObjectId(gameId)}, { $addToSet: {scores: data}}, function(error, result) {
		    if(error) callback(error);
		    else {
			console.log("After update " + result + " " + gameId);
			tiles_game_store_collection.findOne({_id: ObjectId(gameId)}, function(error, result) {		
			    if( error ) {
				callback(error);
			    }
			    else {
				callback(null, result);
			    }
			});
		    }
		});
	    }
	    else {
		tiles_game_store_collection.findOne({_id: ObjectId(gameId)}, function(error, result) {		
		    if( error ) callback(error);
		    else callback(null, result);
		});
	    }
	}
    });
};

