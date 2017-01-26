var io = require('socket.io');
var server = require("./server");
var router = require("./router");
var RequestHandlers = require("./requestHandlers").RequestHandlers;
var FacebookHandlers = require("./controller/facebookHandlers").FacebookHandlers;
var TilesGameHandlers = require("./controller/tilesGameHandlers").TilesGameHandlers;
var FigureGameHandlers = require("./controller/figureGameHandlers").FigureGameHandlers;
var MultipleChoiceHandlers = require("./controller/multipleChoiceHandlers").MultipleChoiceHandlers;
var Sockets = require("./sockets").Sockets;

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://127.0.0.1:27017/yubio', function(err, db) {
    if(err) throw err;
    
    var db_b = db.db("yubio_b");
    var db_c = db.db("yubio_c");

    var handle = {};
    var srv = server.get(router.route, handle);
    io = io(srv);

    var sockets = new Sockets(db, db_b, db_c, io);
    handle = setupHandlers(db, handle, '/');
    handle = setupHandlers(db, handle, '/a/');
    handle = setupHandlers(db_b, handle, '/b/');
    handle = setupHandlers(db_c, handle, '/c/');

    srv.listen(8100)
});

process.on('exit', function (code) {
    console.log('About to exit with code:', code);
});

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});

/*
var db = new Db('yubio', new DbServer('localhost', 27017, {auto_reconnect: true}), {w: -1});
requestHandlers.db = db;
//facebookHandlers.db = db;
tilesGameHandlers.db = db;
*/

var setupHandlers = function(db, handle, urlPrefix) {
    var requestHandlers = new RequestHandlers(db);
    var tilesGameHandlers = new TilesGameHandlers(db);
    var figureGameHandlers = new FigureGameHandlers(db);
    var multipleChoiceHandlers = new MultipleChoiceHandlers(db);
    var facebookHandlers = new FacebookHandlers(db, tilesGameHandlers, multipleChoiceHandlers);

    handle[urlPrefix + "generic"] = {"obj": requestHandlers, "method": "generic"};
    //handle[urlPrefix + ""] = requestHandlers.login;
    handle[urlPrefix + "getQuestions.json"] = {"obj": multipleChoiceHandlers, "method": "getQuestionsJSON"};
    handle[urlPrefix + "loadQuestions.json"] = {"obj": multipleChoiceHandlers, "method": "loadQuestionsJSON"};
    handle[urlPrefix + "getCorrectAnswerCount.json"] = {"obj": multipleChoiceHandlers, "method": "getCorrectAnswerCountJSON"};
    handle[urlPrefix + "getHighScoresMC.json"] = {"obj": multipleChoiceHandlers, "method": "getHighScoresJSON"};

    handle[urlPrefix + "getChapterList.json"] = {"obj": requestHandlers, "method": "getChapterListJSON"};
    handle[urlPrefix + "getChapter.json"] = {"obj": requestHandlers, "method": "getChapterJSON"};
    handle[urlPrefix + "getFigures.json"] = {"obj": requestHandlers, "method": "getFiguresJSON"};

    handle[urlPrefix + "getHighScores.json"] = {"obj": requestHandlers, "method": "getHighScoresJSON"};
    handle[urlPrefix + "saveScore.json"] = {"obj": requestHandlers, "method": "saveScoreJSON"};
    handle[urlPrefix + "getTilesGameCategories.json"] = {"obj": tilesGameHandlers, "method": "getTilesGameCategoriesJSON"};
    handle[urlPrefix + "loadTilesGame.json"] = {"obj": tilesGameHandlers, "method": "loadTilesGameJSON"};

    handle[urlPrefix + "login"] = {"obj": requestHandlers, "method": "login"};
    handle[urlPrefix + "logout"] = {"obj": requestHandlers, "method": "logout"};
    handle[urlPrefix + "doLogin"] = {"obj": requestHandlers, "method": "doLogin"};
    handle[urlPrefix + "users"] = {"obj": requestHandlers, "method": "users"};
    handle[urlPrefix + "users.html"] = {"obj": requestHandlers, "method": "users"};
    handle[urlPrefix + "getUsers.json"] = {"obj": requestHandlers, "method": "getUsersJSON"};
    handle[urlPrefix + "saveUser.json"] = {"obj": requestHandlers, "method": "saveUserJSON"};
    
    handle[urlPrefix + "saveOrder.json"] = {"obj": requestHandlers, "method": "saveOrderJSON"};
    
    handle[urlPrefix + "getFiguresForChapter.json"] = {"obj": figureGameHandlers, "method": "getFiguresForChapterJSON"};


    handle[urlPrefix + "fbPageFeed.post.json"] = {"obj": facebookHandlers, "method": "pageFeed"};
    handle[urlPrefix + "fbPageAccessToken.get.json"] = {"obj": facebookHandlers, "method": "pageAccessToken"};

    handle[urlPrefix + "fbDeleteLastPost.delete.json"] = {"obj": facebookHandlers, "method": "deleteLastPost"};

    //handle[urlPrefix + "emailMe"] = requestHandlers.sendEmail;

    return handle;
}