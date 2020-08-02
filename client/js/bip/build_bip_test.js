var fs = require('fs');
var os = require('os');
const csv = require('csv-parser');

console.log('Parsing biptest.csv...');
var allLinks = [];
var index = 0;
var EOL = "\n";
var json ="var levels = {"+EOL+"list:["+EOL;

fs.createReadStream('biptest.csv',{encoding:"utf8"})
.pipe(csv({separator:","}))
.on('headers', (headers) => {
    console.log(`First header: ${headers[0]}`)})
.on('data', function(data){
    try {
        if( data["Interval"] != "")
        {
        var entry = new Level(data["Interval"],data["Niveau"],data["Distance"],data["Tid"],data["Tidsinterval"], data["Hastighed"],data["Kondital"]);
        json+="{ interval:"+"\""+entry.interval+"\", niveau:"+"\""+entry.niveau+"\", distance:"+"\""+entry.distance+"\", time:"+"\""+entry.time+"\", time_interval:"+"\""+entry.time_interval+"\", speed:"+"\""+entry.speed+"\", kondital:"+"\""+entry.kondital+"\"},"+EOL;
        index++;
        allLinks.push(entry);
        }
        else
        {
        	console.log(data);
        }
    }
    catch(err) {
        console.log(err);
    }
})
.on('end',function(){
    json+="],"+EOL+"}";
    fs.writeFile("links.js",json,(err)=>{
            if(err)throw err;;       
            console.log("written links.js");
            });
       
});  

class Level  {
    constructor(interval, niveau, distance, time, time_interval, speed, kondital){
        this.interval = interval;
        this.niveau= niveau;
        this.distance = distance;
        this.time = time;
        this.time_interval = time_interval;
        this.speed = speed;
        this.kondital = kondital;
    }
}