var REST = require('../tools/REST.js');

var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;
var FacebookProvider = require('./FacebookProvider').FacebookProvider;

QuestionProvider = function (db) {
    this.db = db;
    this.facebookProvider = new FacebookProvider(db);
}

//getCollection
QuestionProvider.prototype.getCollection = function (callback) {
    this.db.createCollection('questions', function (error, question_collection) {
		if (error) callback(error);
		else callback(null, question_collection);
    });
};


//getStoreCollection
QuestionProvider.prototype.getStoreCollection = function (callback) {
    this.db.createCollection('multiple_choice_game_store', function (error, multiple_choice_game_store_collection) {
		if (error) callback(error);
		else callback(null, multiple_choice_game_store_collection);
    });
};


//findAll
QuestionProvider.prototype.findAll = function (callback) {
    this.getCollection(function (error, question_collection) {
		if (error) callback(error);
		else {
            question_collection.find().toArray(function (error, results) {
				if (error) callback(error);
				else callback(null, results);
            });
		}
    });
};

//findRandom
QuestionProvider.prototype.findRandom = function (input, callback) {
    this.getCollection(function (err, question_collection) {
		if (err) callback(error, null);
		else {
			var mapf = function () {
				if (countSubset == 0) return;
				var prob = countSubset / countTotal;
				if (Math.random() <= prob) {
					emit(1, { "documents": [this] });
					countSubset--;
				}
				countTotal--;
			}

			var reducef = function (key, values) {
				var newArray = new Array();
				for (var i = 0; i < values.length; i++) {
					newArray = newArray.concat(values[i].documents);
				}

				return { "documents": newArray };
			}


			var chapters = input.chapters;
			console.log("map/reduce input: " + chapters);

			if (Object.prototype.toString.call(chapters) !== '[object Array]') {
				chapters = [chapters];
			}
			chapters = chapters.map(function (x) {
				return x.indexOf('.') == -1 ? new RegExp("^" + x + "\\..*") : new RegExp("^" + x + "(\\..*)?$");
			});

			question_collection.count({ "chapters": { $in: chapters } }, function (err, count) {
				for (var i in input) console.log(i + " " + input[i]);
				question_collection.mapReduce(mapf, reducef, { "query": { "chapters": { $in: chapters } }, "out": { "inline": 1 }, "scope": { "countTotal": count, "countSubset": input.randomCount } }, function (err, res) {
					if (err) callback(err, null);
					else {
						console.log("After mapReduce");
						var result = res[0] ? res[0].value : { "documents": [] };
						callback(null, result);
					}
				});
			});
		}
    });
};

//findCorrectAnswerCount
QuestionProvider.prototype.findCorrectAnswerCount = function (answers, callback) {
	var gameId = answers.gameId;
	delete answers.gameId;
	var ids = Object.keys(answers);
	ids = ids.map(function (id) {
		try {
			return new ObjectID(id);
		}
		catch (e) {
			console.log("QuestionProvider.findCorrectAnswerCount ID not valid: " + id);
		}
	});

	var calculateResult = function (error, result) {
		if (error) callback(error)
		else {
			if(result[0] && result[0].documents) {
				result = result[0].documents;
			}
			var count = 0;
			result.forEach(function (correct_answer) {
				if (answers[correct_answer._id] == correct_answer.correct_answer) {
					count++;
				}
			});
			callback(null, count);

		}
	}

	if (gameId) {
		this.getStoreCollection(function (error, store_collection) {
			if (error) callback(error)
			else {
				store_collection.find({ "_id": new ObjectID(gameId) }, { "documents": true }).toArray(calculateResult);
			}
		});
	}
	else {
		this.getCollection(function (error, question_collection) {
			if (error) callback(error)
			else {
				question_collection.find({ "_id": { $in: ids } }, { "correct_answer": true }).toArray(calculateResult);
			}
		});
	}
};


//findById
QuestionProvider.prototype.findById = function (id, callback) {
    this.getCollection(function (error, question_collection) {
		if (error) callback(error)
		else {
			question_collection.findOne({ _id: question_collection.db.bson_serializer.ObjectID.createFromHexString(id) }, function (error, result) {
				if (error) callback(error)
				else callback(null, result)
			});
		}
    });
};

//verifyLogin
QuestionProvider.prototype.verifyLogin = function (questionname, password, callback) {
    this.getCollection(function (error, question_collection) {
		if (error) callback(error)
		else {
			question_collection.findOne({ 'questionname': questionname, 'password': password }, function (error, result) {
				if (error) callback(error)
				else callback(null, result)
			});
		}
    });
};


//save
QuestionProvider.prototype.save = function (questions, callback) {
    this.getCollection(function (error, question_collection) {
		if (error) callback(error)
		else {
            if (typeof (questions.length) == "undefined")
				questions = [questions];
	    
			/*
				for( var i =0;i< questions.length;i++ ) {
			questions = questions[i];
			question.created_at = new Date();
			if( question.comments === undefined ) question.comments = [];
			for(var j =0;j< question.comments.length; j++) {
				question.comments[j].created_at = new Date();
			}
				}
			*/
            question_collection.insert(questions, function () {
				callback(null, questions);
            });
		}
    });
};


//delete
QuestionProvider.prototype.remove = function (questionname, callback) {
    this.getCollection(function (error, question_collection) {
		if (error) callback(error)
		else {
			question_collection.update({ 'questionname': questionname }, {}, 'remove', function (err, count) {
				if (err) console.log(err);
				else callback(null, count);
			});
		}
    });
};


//load stored game
QuestionProvider.prototype.loadStoredGame = function (id, callback) {
    this.getStoreCollection(function (error, multiple_choice_game_store_collection) {
		if (error) callback(error)
		else {
			if (id.length != 24) {
				callback("QuestionProvider.loadStoredGame: id not correct length " + id);
			}
			else {
				multiple_choice_game_store_collection.findOne({ "_id": ObjectID(id) }, function (error, result) {
					if (error) {
						callback(error);
					}
					else {
						if (!result) {
							callback("QuestionProvider.loadStoredGame: null result on id: " + id);
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
QuestionProvider.prototype.storeGame = function (game, callback) {
    this.getStoreCollection(function (error, multiple_choice_game_store_collection) {
		if (error) callback(error);
		else {
			game['createdDate'] = Date.now();
			game['scores'] = [];
            multiple_choice_game_store_collection.insert(game, function () {
				callback(null, game);
            });
		}
    });
};

//store game score
QuestionProvider.prototype.saveGameScore = function (data, callback) {
    var me = this;
    this.getStoreCollection(function (error, multiple_choice_game_store_collection) {
		if (error) callback(error);
		else {
			var gameId = data.gameId;
			delete data.gameId;
			//console.log(data);
			if (data.playerName != null) {
				multiple_choice_game_store_collection.update({ _id: ObjectID(gameId) }, { $addToSet: { scores: data } }, function (error, result) {
					if (error) callback(error);
					else {
						//console.log("After update " + result + " " + gameId);
						multiple_choice_game_store_collection.findOne({ _id: ObjectID(gameId) }, function (error, result) {
							if (error) callback(error);
							else {
								if (!result) {
									callback("QuestionProvider.saveGameScore: null result on id: " + id);
								}
								else {
									if (result && result.type == "facebook") {
										me.publishFBHighscore(result);
									}
									callback(null, result);
								}
							}
						});
					}
				});
			}
			else {
				multiple_choice_game_store_collection.findOne({ _id: ObjectID(gameId) }, function (error, result) {
					if (error) callback(error);
					else callback(null, result);
				});
			}
		}
    });
};

QuestionProvider.prototype.publishFBHighscore = function (game) {
    // Get Highscore
    // Get accesstoken and last post id

	//    console.log("PublishFBHighScore: " + JSON.stringify(result));


    var msg = "Stilling i quizzen\n";
    var scores = game.scores;

    // Only show best score for each school 
    var schoolObj = {};
    for (var i = 0; i < scores.length; i++) {
		var score = scores[i];
		var key = score.schoolName.toLowerCase();
		var existingScore = schoolObj[key];
		if (existingScore == undefined ||
			Number(existingScore.score) < Number(score.score) ||
			(Number(existingScore.score) == Number(score.score) && Number(existingScore.timeSpent) > Number(score.timeSpent))) {
			schoolObj[key] = score;
		}
    }

    var filteredScores = [];
    for (var i in schoolObj) {
		filteredScores.push(schoolObj[i]);
    }

    filteredScores = filteredScores.sort(function (a, b) {
		var numAScore = Number(a.score);
		var numBScore = Number(b.score);
		if (numAScore > numBScore) return -1;
		else if (numAScore < numBScore) return 1;
		else { //(numAScore == numBScore) 
			var numATime = Number(a.timeSpent);
			var numBTime = Number(b.timeSpent);
			if (numATime < numBTime) return -1;
			else if (numATime > numBTime) return 1;
			else return 0; //(numATime == b.timeSpent)
		}
    });


    msg += "Skole ## Navn ## Rigtige ## Tid\n\n"
    for (var i = 0; i < filteredScores.length; i++) {
		var s = filteredScores[i];
		msg += "Nr. " + (i + 1) + ": ";
		msg += s.schoolName + " ## ";
		msg += s.playerName + " ## ";
		msg += s.score + " ## ";
		msg += s.timeSpent + " sek.";
		msg += "\n";
    }

    msg += "\n Deltagere: " + scores.length;

    var hostname = "yubio.dk";
    var url = "http://" + hostname + "/c/questionnaire.html?gameId=" + game["_id"];
    if (this.db.databaseName == "yubio") {
		url = url.replace('/c', '');
    }
    else if (this.db.databaseName == "yubio_b") {
		url = url.replace('/c', '/b');
    }
    console.log(msg);

    var publish = function (msg, token, game, scope) {
		REST.spost("graph.facebook.com", {}, "/yubiodk/feed?message=" + encodeURIComponent(msg) + "&access_token=" + token.value + "&link=" + encodeURIComponent(url) + "&picture=" + encodeURIComponent("http://yubio.dk/images/icons/Quizikon.jpg"), "", function (err, body, header) {
			if (err) console.log(err);
			else {
				console.log("After post: " + body);
				var body = eval('(' + body + ')');
				var parameters = {
					"type": "competition_result",
					"postID": body.id,
					"yubioID": game["_id"].toString()
				};
				scope.facebookProvider.savePostID(parameters, function (error, result) {
					if (error) console.log(error);
					else {
						console.log("Posted message to page")
					}
				});
			}
		});
    };

    var me = this;
    this.facebookProvider.getPageAccessToken(function (error, token) {
		// Remove post, if it exists
		var parameters = {
			"type": "competition_result",
			"yubioID": game["_id"].toString()
		};
		me.facebookProvider.getPostID(parameters, function (error, result) {
			if (error) console.log(error);
			else {
				if (result) {
					REST.sdelete("graph.facebook.com", {}, "/" + result.postID + "?access_token=" + token.value, "", function (err, body, header) {
						if (err) console.log(err);
						else {
							console.log("Deleted ###########: " + JSON.stringify(parameters) + JSON.stringify(result));
							console.log(body);
							publish(msg, token, game, me);
						}
					});
				}
				else {
					publish(msg, token, game, me);
				}
			}
		});
    });
}


//get game highscore
QuestionProvider.prototype.getHighScores = function (data, callback) {
    var me = this;
    this.getStoreCollection(function (error, multiple_choice_game_store_collection) {
		if (error) callback(error);
		else {
			var gameId = data.gameId;
			multiple_choice_game_store_collection.findOne({ _id: ObjectID(gameId) }, function (error, result) {
				if (error) callback(error);
				else {
					if (result) {
						result.scores = result.scores.sort(function (a, b) {
							var numAScore = Number(a.score);
							var numBScore = Number(b.score);
							if (numAScore > numBScore) return -1;
							else if (numAScore < numBScore) return 1;
							else { //(numAScore == numBScore) 
								var numATime = Number(a.timeSpent);
								var numBTime = Number(b.timeSpent);
								if (numATime < numBTime) return -1;
								else if (numATime > numBTime) return 1;
								else return 0; //(numATime == b.timeSpent)
							}
						});
					}
					else {
						result = { "scores": ["No result"] };
					}
					callback(null, result);
				}
			});
		}
    });
};


exports.QuestionProvider = QuestionProvider;
