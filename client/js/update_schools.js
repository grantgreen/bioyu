var fs = require('fs');
var os = require('os');
console.log('Parsing schools_core.json...');
fs.readFile('schools_core.json', 'utf8', function(err, contents) {
    var obj = JSON.parse(contents);
    obj["Gymnasier"].sort(function (a, b) {
                var x = a.name.toLowerCase();
                var y = b.name.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });

    var EOL = "\n";
    
    var content = "var schools = {"+EOL+"\"Gymnasier\": ["+EOL;
   var  content1 ="var schools = {"+EOL+"\"Gymnasier\": ["+EOL;
       

    for(var exKey in obj["Gymnasier"]) {
	var entry = obj["Gymnasier"][exKey];
	content += "{"+EOL;
	content += "\"name\":\""+entry.name+"\","+EOL;
	content += "\"hasIdc\":\""+entry.hasIdc+"\","+EOL;
        content += "\"hasBio\":\""+entry.hasBio+"\""+EOL;
	content += "},"+EOL; 

	content1 += "\""+entry.name+"\","+EOL;
    }
    content += "],"+EOL;
    content1 += "],"+EOL;

    content  += "\"Seminarier\": ["+EOL;
    content1 += "\"Seminarier\": ["+EOL;

  for(var exKey in obj["Seminarier"]){
	var entry = obj["Seminarier"][exKey];
	content += "{"+EOL;
 	content += "\"name\":\""+entry.name+"\","+EOL;
	content += "\"hasIdc\":\""+entry.hasIdc+"\","+EOL;
	content += "\"hasBio\":\""+entry.hasBio+"\""+EOL;
	content += "},"+EOL;
	content1 += "\""+entry.name+"\","+EOL;
  }
	content += "]";
        content1 += "]"+EOL;

	content += "}";
content1 += "}";
console.log(content1);
fs.createReadStream('schools_full.js').pipe(fs.createWriteStream('schools_full.backup'));
fs.createReadStream('schools.js').pipe(fs.createWriteStream('school.backup'));

fs.writeFile("schools_full.js",content,(err)=>{
if(err)throw err;;
console.log("saved schools_full.js");
});
fs.writeFile('schools.js',content1,(err)=>{
if(err)throw err;
console.log("saved schools.js");
});

});
 
console.log('Done!');
