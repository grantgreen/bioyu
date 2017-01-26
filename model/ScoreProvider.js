var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;


ScoreProvider = function(db) {
    this.db = db;
}


/*
Schema for scores document:

{
  'discipline' : string, // multiple_choice, tiles_game
  'part': string, // 1.1, 3.2 etc.
  'user': string,
  'score': number,
  'duration': duration,
  'date': date
}

*/

//getCollection
ScoreProvider.prototype.getCollection = function(callback) {
    this.db.createCollection('scores', function(error, score_collection) {
	if( error ) callback(error);
	else callback(null, score_collection);
    });
};

//findAll
ScoreProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, score_collection) {
	if( error ) callback(error);
	else {
            score_collection.find().toArray(function(error, results) {
		if( error ) callback(error);
		else callback(null, results);
            });
	}
    });
};


// Get highscores
ScoreProvider.prototype.getHighScores = function(discipline, part, count, callback) {
    this.getCollection(function(error, score_collection) {
	console.log("getHighscores");
      if( error ) callback(error)
      else {
	  console.log("Count:" + count);
          score_collection.find({$query: {"discipline": discipline, "part": part}, $orderby: {value: -1, duration: 1}}).limit(Number(count)).toArray(function(error, result) {
	      if( error ) callback(error)
              else {
		  for(var i in result) {
		      console.log(i + " Result: " + result[i]);
		  }
		  callback(null, result);		  
	      }
          });
      }
    });
};


//findById
ScoreProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, score_collection) {
      if( error ) callback(error)
      else {
        score_collection.findOne({_id: score_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

//save
ScoreProvider.prototype.save = function(score, callback) {
    this.getCollection(function(error, score_collection) {
	if( error ) callback(error)
	else {
            score_collection.insert({
		'discipline' : score.discipline,
		'part': score.part,
		'user': score.user,
		'school': score.school,
		'value': score.value,
		'duration': score.duration,
		'date': score.date 
	    }, function() {
		callback(null, score);
            });
	}
    });
};


//delete
ScoreProvider.prototype.remove = function(scorename, callback) {
    this.getCollection(function(error, score_collection) {
	if( error ) callback(error)
	else {
	    score_collection.update({'scorename': scorename}, {}, 'remove', function(err, count) {
		if( err ) console.log( err );
		else callback(null, count);
	    });
	}
    });
};


exports.ScoreProvider = ScoreProvider;