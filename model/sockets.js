var TilesGameProvider = require('./model/TilesGameProvider').TilesGameProvider;
var QuestionProvider = require('./model/QuestionProvider').QuestionProvider;

Sockets = function(db, db_b, db_c, io) {
    this.questionProvider = new QuestionProvider(db);
    this.tilesGameProvider = new TilesGameProvider(db);
    this.bQuestionProvider = new QuestionProvider(db_b);
    this.bTilesGameProvider = new TilesGameProvider(db_b);
    this.cQuestionProvider = new QuestionProvider(db_c);
    this.cTilesGameProvider = new TilesGameProvider(db_c);

    var _this = this;

    io.on('connection', function (socket) {
	console.log('socket.js - connected');
	socket.on("setRoom", function(data, fn){
//	    console.log('setRoom ' + data.gameId + " " + fn);
	    fn({msg : "Hello " + data.gameId});	
	    socket.join(data.gameId);
	    socket.broadcast.to(data.gameId).json.send({ msg: "Connected to room: " + data.gameId });	

	    socket.on('chat message', function(msg){
//		console.log("message: " + msg);
		io.emit('chat message', msg);
	    });

	});
	
	socket.on('disconnect', function(){
	    console.log("disconnected");
	    //	socket.broadcast.to(data.gameId).json.send({ msg: "Disconnected"});	
	});
	
	socket.on('storeTilesGameResult', function (data, fn) {
	    console.log('storeTilesGameResult ' + data.gameId);
	    var gameId = data.gameId;
	    _this.saveTilesGameScore(data, function(error, result) {
		if(error) console.log(error);
		else {
		    socket.to(gameId).emit(gameId, data);
//		    console.log("socket store: " + gameId + " " + fn);
		    fn(result);
		}
	    });
	    //	console.log(data);
	});

	socket.on('storeMultipleChoiceGameResult', function (data, fn) {
	    //	console.log('storeMultipleChoiceGameResult ' + data.gameId);
	    var gameId = data.gameId;
	    _this.saveMultipleChoiceGameScore(data, function(error, result) {
		if(error) console.log(error);
		else {
		    socket.broadcast.to(gameId).emit(gameId, data);
		    //		console.log("socket: " + result.scores + " " + gameId);
		    fn(result);
		}
	    });
	    //	console.log(data);
	});

    });
} 


Sockets.prototype.saveTilesGameScore = function(data, callback) {
    var tgp = this.tilesGameProvider;
	if(data.bookType == "/b") {
		tgp = this.bTilesGameProvider
    }    
    else if(data.bookType == "/c") {
		tgp = this.cTilesGameProvider
    }    
    tgp.saveGameScore(data, function(error, result) {
	if( error ) callback(error);
	else {
	    callback(null, result);
	}
    });
}

Sockets.prototype.saveMultipleChoiceGameScore = function(data, callback) {
    var qp = this.questionProvider;
    if(data.bookType == "/b") {
		qp = this.bQuestionProvider
    }
    else if(data.bookType == "/c") {
		qp = this.cQuestionProvider
    }
    qp.saveGameScore(data, function(error, result) {
	if( error ) callback(error);
	else {
	    callback(null, result);
	}
    });
}


exports.Sockets = Sockets;
