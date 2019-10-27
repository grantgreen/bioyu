var fs = require('fs');
var os = require('os');
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

fs.readFile(myArgs[0], 'utf8', function(err, contents) {
    var obj = JSON.parse(contents);
    console.log('Parsing {0}',myArgs[0]);
});