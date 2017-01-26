var LogProvider = require('./model/LogProvider').LogProvider;
var logProvider;
var getLogProvider = function(callback)  {
  if( !logProvider ) {
      var userProvider;

      var tmpLogProvider = new LogProvider();
      tmpLogProvider.openDb('localhost', 27017, function(err, db) {
          if(err) console.log(err);
          else {
              logProvider = tmpLogProvider;
              callback(logProvider);
          }
      });
  }
  else {
      callback(logProvider);
  }
};


function route(handle, pathname, request, response, data) {
    getLogProvider(function(logProvider) {
	logProvider.save({
	    'path': pathname,
	    'ip': request.headers['x-forwarded-for'] || request.connection.remoteAddress,
	    'user_agent': request.headers['user-agent']
	}, function(error, log) {
	    if(error) {
		console.log("Logging failed " + error);
	    }
	});
    });

    if (typeof handle[pathname] === 'object') {
//	handle[pathname](request, response, data);
	var handleObj = handle[pathname];
	handleObj.obj[handleObj.method](request, response, data);
    } 
    else {
	if(/^(\/js)?\/c\//.test(pathname)) {
	    var handleObj = handle['/c/generic'];
	}
	else if(/^(\/js)?\/b\//.test(pathname)) {
	    var handleObj = handle['/b/generic'];
	}
	else {
	    var handleObj = handle['/generic'];
	}
	handleObj.obj[handleObj.method](request, response, data, pathname);
	// console.log(pathname);
	// console.log(handleObj.obj.userProvider.db.databaseName);
	//	handle['generic'](request, response, data, pathname);
    } 
}

exports.route = route;
