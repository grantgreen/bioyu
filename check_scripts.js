var fs = require('fs');
var os = require('os');
var path = require("path");
var file = './'+path.basename(process.argv[2]);

console.log('file ',file);
var request = require(file);

console.log('{0}',request.links);
