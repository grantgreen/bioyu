var fs = require('fs');

var dataFile = process.argv[2];
fs.readFile(dataFile, 'utf8', function (err, data) {
    if (err) throw err;
    var dataArr = data.split('\n');
    for(var i = 0; i < dataArr.length; i++) {
	var line = dataArr[i];
	if(line.match(/^\d+\.\d* /)) {
	    console.log('{"name": "' + line + '",');
	    console.log(' "sub": [');
	    if(i+1 < dataArr.length && dataArr[i+1].match(/^\d+\.\d* /)) {
		console.log(']},');
	    }
	}
	else {
	    if(i+1 < dataArr.length && dataArr[i+1].match(/^\d+\.\d* /)) {
		console.log('"' + line +'"');   
		console.log(']},');   
	    }
	    else {
		console.log('"' + line +'",');   
	    }
	}
	if(i+1 == dataArr.length) {
	    console.log(']}');   
	}
    }
});

/*
	 {"name": "1.2 Prokaryoter",
	  "sub": [
	      "1.2.1 Generelt",
	      "1.2.2 Eubakterier",
	      "1.2.3 Arkæer",
	      "1.2.4 Gavnlige bakterier",
	      "1.2.5 Sygdomsfremkaldende bakterier",
	      "1.2.6 Antibiotika",
	      "1.2.7 Bakterievækst",
	      "1.2.8 Bakterieoptælling",
	      "1.2.9 Taxonomi"
	  ]},
*/