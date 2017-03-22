var os = require('os');
var fs = require('fs');
var url = require('url');
var textutils = require('./textutils');
var querystring = require('querystring');
var crypto = require('crypto');
var exec = require("child_process").exec;

var ContentProvider = require('./model/ContentProvider').ContentProvider;
var UserProvider = require('./model/UserProvider').UserProvider;
var ScoreProvider = require('./model/ScoreProvider').ScoreProvider;
var OrderProvider = require('./model/OrderProvider').OrderProvider;

var SID_STRING = 'SESSIONID';  
var TIMEOUT = 3*60*1000;  


RequestHandlers = function(db) {
    this.userProvider = new UserProvider(db);
    this.contentProvider = new ContentProvider(db);
    this.scoreProvider = new ScoreProvider(db);
    this.orderProvider = new OrderProvider(db);

    this.sessions = {};
}

var ip = "";
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    ip = add;
    console.log(ip);
})

RequestHandlers.prototype.login = function(request, response, data) {
    console.log("Request handler 'login' was called.");
  
  this.render('./client/views/index.html', request, response, data, 'text/html', 'utf-8');  
    data = {title: 'Login Yubio'};
    
    cookies = this.getCookies(request);
    sid = cookies[SID_STRING];
    
    this.render('./client/views/login.html', request, response, data, 'text/html', 'utf-8', sid);  
}

RequestHandlers.prototype.logout = function(request, response, data) {
    console.log("Request handler 'logout' was called.");
    cookies = this.getCookies(request);
    sid = cookies[SID_STRING];
    delete this.sessions[sid];
    this.redirect(request, response, 'login', null);
}

RequestHandlers.prototype.users = function(request, response, data) {
    //  console.log("Arguments callee name: " + arguments.callee.name);
    //  console.log("Request handler 'users' was called.");

    grantAccess(request, response, true, function(sid, err) {
	if(err) {
            console.log(err);
	}           
	else {
            data = {title: 'Yubio - Brugere'};
            type = 'text/html';
            encoding = 'utf-8';
            this.render('./client/views/users.html', request, response, data, 'text/html', 'utf-8', sid);
	}
    });
}

RequestHandlers.prototype.getUsersJSON = function(request, response, data) {
    this.grantAccess(request, response, true, function(sid, err) {
	if(err) {
            console.log(err);
	}           
	else {
            this.userProvider.findAll(function(error, result) {
		//              console.log('FindAll called');
		if( error ) console.log(error);
		else {
                    var type = 'application/json';
                    var encoding = 'utf-8';
                    var header = sid != null ? {'Set-Cookie': 'SESSIONID=' + sid, 'Content-Type': type} : {'Content-Type': type}; 
                    response.writeHead(200, header);
                    response.end(JSON.stringify(result), encoding);
		}
            });         
	}
    });
}

RequestHandlers.prototype.saveUserJSON = function(request, response, data) {
    this.grantAccess(request, response, true, function(sid, err) {
	if(err) {
            console.log(err);
	}           
	else {
            url_parts = querystring.parse(url.parse(request.url).query);    
            user = {
		'name': url_parts.name,
		'username': url_parts.username,
		'password': url_parts.password,
		'isadmin': url_parts.isadmin == 'on' ? true : false
            };
	    //          console.log(request.url);
	    //          console.log('saveUserJSON');
	    //          console.log(JSON.stringify(user));
            this.userProvider.save(user, function(err, users) {
		var type = 'application/json';
		var encoding = 'utf-8';
		var header = sid != null ? {'Set-Cookie': 'SESSIONID=' + sid, 'Content-Type': type} : {'Content-Type': type}; 
		response.writeHead(200, header);
		response.end(JSON.stringify(users), encoding);
            });
	}
    });
}

RequestHandlers.prototype.deleteUserJSON = function() {}

RequestHandlers.prototype.getHighScoresJSON = function(request, response, data) {
    /*
      grantAccess(request, response, false, function(sid, err) {
      if(err) {
      console.log(err);
      }           
      else {
    */
        url_parts = querystring.parse(url.parse(request.url).query);    
        var discipline = url_parts.discipline;
        var part =  url_parts.part;
        var count = url_parts.count;
	
        this.scoreProvider.getHighScores(discipline, part, count, function(error, result) {
	    //		  console.log('getHighScores called');
	    if( error ) console.log(error);
	    else {
                var type = 'application/json';
                var encoding = 'utf-8';
		//                      var header = sid != null ? {'Set-Cookie': 'SESSIONID=' + sid, 'Content-Type': type} : {'Content-Type': type}; 
                var header = {'Content-Type': type}; 
                response.writeHead(200, header);
                response.end(JSON.stringify(result), encoding);
	    }
        });         
}
/*
  });
  }
*/

RequestHandlers.prototype.saveScoreJSON = function(request, response, data) {
    /*
      grantAccess(request, response, false, function(sid, err) {
      if(err) {
      console.log(err);
      }           
      else {
    */
        url_parts = querystring.parse(url.parse(request.url).query);    
	var score = {
	    'discipline': url_parts.discipline,
	    'part': url_parts.part,
	    'user': url_parts.user,
	    'school': url_parts.school,
	    'value': url_parts.value,
	    'duration': url_parts.duration,
	    'noOfQuestions': url_parts.noOfQuestions,
	    'date': url_parts.date,
	}
	//	      console.log(score);


	if(score.discipline == 'multiple_choice') {
	    var noOfQuestions = Number(score.noOfQuestions);
	    if(noOfQuestions == NaN || noOfQuestions != 10) {
		response.writeHead(422, {"Content-Type": "text/plain"});
		response.write("422 Unprocessable Entity");
		response.end();
		return;
	    }
	}
	this.scoreProvider.save(score, function(err, score) {
	    var type = 'application/json';
	    var encoding = 'utf-8';
	    //		  var header = sid != null ? {'Set-Cookie': 'SESSIONID=' + sid, 'Content-Type': type} : {'Content-Type': type}; 
	    var header = {'Content-Type': type}; 
	    response.writeHead(200, header);
	    response.end(JSON.stringify(score), encoding);
	});
}
/*
  });
  }
*/


RequestHandlers.prototype.doLogin = function(request, response, data) {
    //    console.log("Request handler 'doLogin' was called.");
    var url_parts = querystring.parse(url.parse(request.url).query);    
    var username = url_parts.username;
    var password = url_parts.password;

    this.userProvider.verifyLogin(username, password, function(error, result) {
	//        console.log('verifyLogin called');
        if( error || !result ) this.redirect(request, response, 'login', null);
        else {
            var sessionId = startSession(request, response, username);
	    //            console.log('Redirecting to main ' + result);
            var data = {title: 'Login Yubio'};
            this.redirect(request, response, 'index_tiles.html', sessionId);
        }
    });
};

RequestHandlers.prototype.redirect = function(request, response, pathname, sessionId) {
    var host = request.headers.host;
    var header = {'Location': 'http://' + host + '/'+ pathname}; 
    if(sessionId != null) header['Set-Cookie'] = 'SESSIONID=' + sessionId;
    response.writeHead(302, header);
    response.end();
};

RequestHandlers.prototype.grantAccess = function(request, response, requiresAdmin, callback) {
    var cookies = this.getCookies(request);
    var sid = cookies[SID_STRING];
    if(sid && this.sessions[sid] && this.sessions[sid]['__timeout'] && this.sessions[sid]['__timeout'] > Date.now()) {
	if(requiresAdmin) {
	    this.userProvider.isAdmin(this.sessions[sid]['__username'], function(error, result) {
		if(result) {
		    this.sessions[sid]['__timeout'] = Date.now() + TIMEOUT;  
		    callback(sid, null);
		}
		else {
		    this.redirect(request, response, 'login', null);
		    callback(null, 'Not authorized');          
		}
	    }); 
	}
	else {
	    this.sessions[sid]['__timeout'] = Date.now() + TIMEOUT;  
	    callback(sid, null);
	}
    }
    else {
	this.redirect(request, response, 'login', null);
	callback(null, 'Not a valid session');
    }
};

RequestHandlers.prototype.getCookies = function(request) {
    var cookies = {};
    request.headers.cookie && request.headers.cookie.split(';').forEach(function( cookie ) {
	var parts = cookie.split('=');
	cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    return cookies;
};

var startSession = function(request, response, username) {  
    var sid = this.createNew(request, username);

    return sid;
};

RequestHandlers.prototype.createNew = function(request, username) {  
    // MD5
    var md5Hash = crypto.createHash('MD5');
    md5Hash.update(request.connection.remoteAddress + "" + Date.now(), 'utf8');  
    var sid = md5Hash.digest('hex');  
    this.sessions[sid] = {'__timeout': Date.now() + TIMEOUT, '__username': username};  
    return sid;
}; 

RequestHandlers.prototype.endSession = function(request) {  
    delete this.sessions[this.getCookies(request)[SID_STRING]];  
};


RequestHandlers.prototype.getChapterListJSON = function(request, response, data) {
        var url_parts = querystring.parse(url.parse(request.url).query);    

	var includeSystemChapters = url_parts.includeSystemChapters ? url_parts.includeSystemChapters : false;
	this.contentProvider.getChapterList(includeSystemChapters, function(error, result) {
	    	    console.log("getChapterList called: " + JSON.stringify(url_parts));
	    if( error ) console.log(error);
	    else {
		var type = 'application/json';
		var encoding = 'utf-8';
		var header = {'Content-Type': type, 'charset': encoding}; 
		response.writeHead(200, header);
		response.end(JSON.stringify(result), encoding);
	    }
	});
}

RequestHandlers.prototype.getChapterJSON = function(request, response, data) {
	var url_parts = querystring.parse(url.parse(request.url).query);    
	var input = {
	    'chapterNo': url_parts.chapterno
	}
	
	this.contentProvider.getChapter(input.chapterNo, function(error, result) {
	    //	    console.log('getChapter called');
	    if( error ) console.log(error);
	    else {
		var type = 'application/json';
		var encoding = 'utf-8';
		var header = {'Content-Type': type, 'charset': encoding}; 
		response.writeHead(200, header);
		response.end(JSON.stringify(result), encoding);
	    }
	});
}

RequestHandlers.prototype.getFiguresJSON = function(request, response, data) {
	var url_parts = querystring.parse(url.parse(request.url).query);    
	var input = {
            'chapterNo': url_parts.chapterno
	};
	
	fs.readdir(process.cwd() + "/client/views/figures/chapter_" + input.chapterNo, function(err, files) {
	    //      console.log('getChapter called');
	    if( err ) console.log(err);
	    else {
		files = files.filter(function(x) {
		    return x.match("^fig");         
		});
		var type = 'application/json';
		var encoding = 'utf-8';
		var header = {'Content-Type': type, 'charset': encoding}; 
		response.writeHead(200, header);
		response.end(JSON.stringify(files), encoding);     
	    }
	});
};

RequestHandlers.prototype.parametersToJSON = function() {
    var url_parts = querystring.parse(url.parse(request.url).query);    
    if(url_parts.length == 0) return null;
    return url_parts;
}

RequestHandlers.prototype.generic = function(request, response, data, pathname) {
    //    console.log("Request handler 'generic' was called.");
    
    var type = '';
    var encoding = '';
    var sid = null;    

    if(pathname == '/') {
        pathname = '/index.html';
    }


    var url_parts;
    if(data) {
	url_parts = querystring.parse(data);
    }
    else {
	url_parts = querystring.parse(url.parse(request.url).query);    
    }
    //	console.log(url_parts);

    var suffix = pathname.match("\.[a-zA-Z]+$");
    suffix = suffix == null ?  ".html" : suffix[0].toLowerCase();
    if(suffix == '.html') {
	// Synchronous callback
	type = 'text/html';
	encoding = 'utf-8';

	if(pathname == '/topic.html') {
	    var topic = url_parts['topic'];
	    var chapter = url_parts['chapter'];	    
	    if(topic) {
		var newPages = {};
		if(!chapter) {
		    newPages = {
			'docs': '/articles_selector.html',
			'links': '/links_selector.html',
			'video': '/animations_selector.html',
			'video': '/sounds_selector.html',
			'multiple_choice': '/multiple_choice_selector.html',
			'fit': '/tiles_game_selector.html'
		    }
		}
		else {
		    newPages = {
			'docs': '/articles.html',
			'links': '/links.html',
			'video': '/animations.html',
			'sound': '/sounds.html',
			'multiple_choice': '/questionnaire.html',
			'fit': '/tiles_game.html'
		    }
		}

		pathname = newPages[topic];
	    }
	}
//	console.log(this);
	this.render("./client/views" + pathname, request, response, url_parts, type, encoding, sid);
    }
    else {
	switch(suffix) {
	case '.css':
	    type = 'text/css';
	    encoding = 'utf-8';
	    pathname = '/..' + pathname;
	    break;
	case '.js':
	    type = 'text/javascript';
	    encoding = 'utf-8';
	    pathname = '/..' + pathname;
	    break;
	case '.ico':
	    type = 'image/x-icon';
	    encoding = 'binary';
	    break;
	case '.png':
	    type = 'image/png';
	    encoding = 'binary';
	    break;
	case '.jpg':
	    type = 'image/jpeg';
	    encoding = 'binary';
	    break;
	case '.gif':
	    type = 'image/gif';
	    encoding = 'binary';
	    break;
	case '.svg':
	    type = 'image/svg+xml';
	    encoding = 'utf-8';
	    break;
	case '.pdf':
	    type = 'application/pdf';
	    encoding = 'binary';
	    break;
	default: 
	    type = 'text/html';
	    encoding = 'utf-8';
	}

	if(pathname.indexOf('/lib') == 0) {
	    this.render("./client" + pathname, request, response, null, type, encoding, sid);
	}
	else {
	    var dl = url_parts['dl'];
	    dl = dl && dl == 1 ? true : false;
	    this.render("./client/views" + pathname, request, response, null, type, encoding, sid, dl);
	}
    }
}

RequestHandlers.prototype.sendOutput = function(output, sessionId, type, response, encoding, download) {
    var header = sessionId != null ? {'Set-Cookie': 'SESSIONID=' + sessionId, 'Content-Type': type} : {'Content-Type': type}; 
    if(download) {
	header['Content-Disposition'] = "attachment";
    }
    response.writeHead(200, header);

    response.write(output, encoding);
    response.end();         
}

RequestHandlers.prototype.render = function(page, request, response, data, type, encoding, sessionId, download) {
    var _this = this;
    fs.readFile(page, encoding, function(err, template) {
	if (err) {
	    console.log("No request handler found for " + page);
	    response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("404 Not found");
	    response.end();
	}
	else {
	    if(page.match(/png$|jpg$|svg$|pdf$|ico$/)) {
		//		console.log("BINARY");
		_this.sendOutput(template, sessionId, type, response, encoding, download);
	    }
	    else {
		var grantRegEx = /^<!-- GRANT (\S+) -->\n/;
		template = template.replace(grantRegEx, function(match, authority) {
		    //		    console.log("render: " + authority);
		    var requiresAdmin = authority == 'ADMIN' ? true : false;
		    var requiresLogin = authority == null || authority == 'ALL' ? false : true;
		    //		    console.log(requiresLogin);
		    if(requiresLogin) {
			//		console.log("REQUIRESLOGIN");
			this.grantAccess(request, response, requiresAdmin, function(sid, err) {
			    if(err) {
				console.log(err);
				this.redirect(request, response, 'login', null);
			    }
			    else {
				sessionId = sid;
			    }
			});
		    }
		    return "";
		});

		if(_this.sessions[sessionId] != undefined) {
		    data['user'] = this.sessions[sessionId]['__username'];
		}
		
		if(data && request.headers.host) {
		    data['hostname'] = request.headers.host.replace(/:\d*$/, '');
		}		


		if(data) {
		    data['requestString'] = JSON.stringify(data);
		}

		var output = data != null ? textutils.getModifiedText(template, data) : template;
		_this.sendOutput(output, sessionId, type, response, encoding);
	    }
	}
    });
}


RequestHandlers.prototype.getCookies = function(request) {
    var cookies = {};
    request.headers.cookie && request.headers.cookie.split(';').forEach(function( cookie ) {
	var parts = cookie.split('=');
	cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    return cookies;
}

RequestHandlers.prototype.sendEmail = function(request, response, data) {
    var email = require('nodemailer');

    email.send(
	{
	    host : "localhost",              // smtp server hostname
	    port : "25",                     // smtp server port
	    domain : "localhost",            // domain used by client to identify itself to server
	    to : "tl@magus.dk",
	    from : "info@yubio.dk",
	    subject : "node_mailer test email",
	    body: "Hello! This is a test of the node_mailer.",
	    authentication : "login",        // auth login is supported; anything else is no auth
	    username : "eXViaW8K",       // Base64 encoded username
	    password : "bmlLeW89NzU1Cg=="        // Base64 encoded password
	},
	function(err, result){
	    if(err){ console.log(err); }
	});
}

RequestHandlers.prototype.saveOrderJSON = function(request, response, data) {
    var url_parts;
    if(data) {
	url_parts = querystring.parse(data);
    }
    else {
	url_parts = querystring.parse(url.parse(request.url).query);    
    }
    var order = {
	'product': url_parts.product,
	'duration': url_parts.duration,
	'license': url_parts.license,
	'organization': url_parts.organization,
	'address': url_parts.address,
	'postalcode': url_parts.postalcode,
	'EAN': url_parts.EAN,
	'CVR': url_parts.CVR,
	'email': url_parts.email,
	'comments': url_parts.comments,
	'teacherIssue': url_parts.teacherIssue
    };

    //	console.log("Saving order: " + order);
    this.orderProvider.save(order, function(err, order) {
	var type = 'application/json';
	var encoding = 'utf-8';
	var header = {'Content-Type': type}; 
	response.writeHead(200, header);
	response.end(JSON.stringify(order), encoding);
    });
}

exports.RequestHandlers = RequestHandlers;
