var fs = require('fs');
var os = require('os');
var path = require("path");

var dir = path.dirname(process.argv[1]);

fs.readdir(dir, (err, files) => {
  files.forEach(file =>
   {
   	if( path.extname(file) ==".js")
    {
    	var filename = path.basename(file);

    	var f = './'+filename;
    	var request = require(f);
    	if( typeof(request.links)  == "undefined")
    	{
    		console.log("Checking ",filename," was not ok");
    	}
    	else
    	{
    		console.log("Checking ",filename," was ok");
    	}
    }
  });
});


