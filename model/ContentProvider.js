var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;


ContentProvider = function(db) {
    this.db = db;
}

//getCollection
ContentProvider.prototype.getCollection = function(callback) {
    this.db.createCollection('contents', function(error, content_collection) {
	if( error ) callback(error);
	else callback(null, content_collection);
    });
};

//findAll
ContentProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, content_collection) {
	if( error ) callback(error);
	else {
            content_collection.find().toArray(function(error, results) {
		if( error ) callback(error);
		else callback(null, results);
            });
	}
    });
};

//findById
ContentProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, content_collection) {
      if( error ) callback(error)
      else {
          console.log("ID: "+id);
        content_collection.findOne({_id: content_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};


//getChapterList
ContentProvider.prototype.getChapterList = function(includeSystemChapters, callback) {
    this.getCollection(function(error, content_collection) {
      if( error ) callback(error)
      else {
          content_collection.find().sort({"_id": 1}).toArray(function(error, results) {
	      if( error ) callback(error);

	      else {
		  if(!includeSystemChapters) {
		      results = results.filter(function(value) {
			  return !(/100\d/).test(value.name); 
		      });
		  }
		  callback(null, results.map(function(value) {return value.name}));
	      }
          });
      }
    });
};


//getChapter
ContentProvider.prototype.getChapter = function(chapterNo, callback) {
    this.getCollection(function(error, content_collection) {
      if( error ) callback(error)
      else {
        content_collection.findOne({name: { $regex : 'Kapitel ' + chapterNo + ':'}}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

exports.ContentProvider = ContentProvider;