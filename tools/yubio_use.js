var https = require('https');
var fs = require('fs');

var retrieveInfo = function(options, callback) {

    var req = https.request(options, function(res) {
	console.log('STATUS: ' + res.statusCode);
	//console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');

	var body = "";
	res.on('data', function (chunk) {
	    //	console.log('BODY: ' + chunk);
	    body += chunk;
	});

	res.on('end', function () {
	    callback(body);
	});
	
    });
    
    req.on('error', function(e) {
	console.log('problem with request: ' + e.message);
    });

    req.end();
}

retrieveInfo({
    hostname: 'www.lectio.dk',
    port: 443,
    path: '/lectio/login_list.aspx'
}, function(body) {
    var myRe = /lectio\/(\d+)\/.*lecafdeling=(\d+)'>(.*)<\/a/g;
    var myArray;
    var resultArray = [];
	console.log('Match '+(myArray = myRe.exec(body) !== null));
    while ((myArray = myRe.exec(body)) !== null)
    {
		console.log('pushing');
	resultArray.push({
	    'schoolId': myArray[1],
	    'lecDepId': myArray[2],
	    'schoolName': myArray[3]
	});
    }
    
    getClassInfo(resultArray);
});

var getClassInfo = function(schoolsInfo) {
    var waitTime = 0;
console.log('getClassInfo');
    schoolsInfo.forEach(function(school) {
		console.log(school);
/*
	if(school.schoolId != 253) {
	    return;
	}
*/

	waitTime += 3000 + (Math.random() * 10000 >> 0);
//	waitTime = 100;
	school.waitTime = waitTime;
//	setTimeout(console.log, waitTime, school);
//	if(true)
//	    return;

	// 521 Biologi
	// 569 Bioteknologi
	// 538 Idræt
	// 564 Naturfag

	setTimeout(retrieveInfo, waitTime, {
	    hostname: 'www.lectio.dk',
	    port: 443,
	    path: '/lectio/' + school.schoolId + '/FindSkema.aspx?type=hold&fag=521&prevurl=FindSkema.aspx%3ftype%3dhold'	
	}, function(body) {
	    var myRe = /holdelementid=(\d+)/g;
	    var myArray;
	    var resultArray = [];
	    console.log(school.schoolName);
	    var waitEduTime = 0;
	    while ((myArray = myRe.exec(body)) !== null)
	    {
			console.log('School '+school);
		//		getMaterialInfo(school, myArray[1]);
		var waitGetEdu = function(school, classId) {
		    return function() {getEducationDescription(school, classId)};
		};

		fs.exists("undervisningsbeskrivelser/skole_" + school.schoolId + "-hold_" + myArray[1], function(school, classId) {
		    return function (exists) {
			if(exists) {
			    console.log("File: " + "undervisningsbeskrivelser/skole_" + school.schoolId + "-hold_" + classId + " exists")
			}
			else {
			    waitEduTime += 2000 + (Math.random() * 2000 >> 0);
			    setTimeout(waitGetEdu(school, classId), waitEduTime);
			}
		    }
		}(school, myArray[1]));

//		getEducationDescription(school, myArray[1]);
//		setTimeout(getEducationDescription, waitTime, school, myArray[1]);
	    }	    
	});
    });
}

var getMaterialInfo = function(schoolInfo, classId) {
    retrieveInfo({
	hostname: 'www.lectio.dk',
	port: 443,
	path: '/lectio/' + schoolInfo.schoolId + '/MaterialOverview.aspx?holdelement_id=' + classId
    }, function(body) {
	var myRe = /yubio/ig;
	var myArray;
	var resultArray = [];
	while ((myArray = myRe.exec(body)) !== null)
	{
	    console.log('Materialeinfo:' + schoolInfo.schoolName + ' ' + schoolInfo.schoolId + ' ' + classId + ' ' + myArray[0] + ' ' + 'https://www.lectio.dk/lectio/' + schoolInfo.schoolId + '/MaterialOverview.aspx?holdelement_id=' + classId);
	}
    });    
}


var writeToFile = function(dir, fileName, text) {
    fs.writeFile(dir + "/" + fileName, text, function(err) {
	if(err) {
            console.log(err);
	} else {
            console.log("The file " + dir + "/" + fileName + " was saved!");
	}
    }); 
}

var getEducationDescription = function(schoolInfo, classId) {
//    console.log('Undervisningsbeskrivelse ' + schoolInfo.schoolName, classId);
//    console.log('https://www.lectio.dk/lectio/' + schoolInfo.schoolId + '/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid=' + classId);

    retrieveInfo({
	hostname: 'www.lectio.dk',
	port: 443,
	path: '/lectio/' + schoolInfo.schoolId + '/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid=' + classId
    }, function(body) {
	writeToFile("undervisningsbeskrivelser", "skole_" + schoolInfo.schoolId + "-hold_" + classId, body);

/*
	var myRe = /yubio/ig;
	var myArray;
	var resultArray = [];
	while ((myArray = myRe.exec(body)) !== null)
	{
	    console.log('Undervisningsbeskrivelse ' + schoolInfo.schoolName + ' ' + schoolInfo.schoolId + ' ' + classId + ' ' + myArray[0] + ' ' + 'https://www.lectio.dk/lectio/' + schoolInfo.schoolId + '/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid=' + classId);
	}
*/
    });    
}


// https://www.lectio.dk/lectio/253/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid=5928348570
//https://www.lectio.dk/lectio/161/SkemaNy.aspx?type=holdelement&
