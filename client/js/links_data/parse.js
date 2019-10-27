var fs = require('fs');
var os = require('os');
console.log('Parsing schools_core.json...');
fs.readFile('newlinks_1.js', 'utf8', function(err, contents) {
    var obj = JSON.parse(contents);

});
 
console.log('Done!');
