var fs = require('fs');
var os = require('os');
const csv = require('csv-parser');

console.log('Parsing links.csv...');
var allLinks = [];
var index = 0;
var EOL = "\n";
var content = "Øvelsesnummer,URL på youtube, URL på hjemmeside"+EOL; 
var json ="var links = {"+EOL+"list:["+EOL;

fs.createReadStream('links.csv',{encoding:"utf8"})
.pipe(csv({separator:","}))
.on('headers', (headers) => {
    console.log(`First header: ${headers[0]}`)})
.on('data', function(data){
    try {
        if( data["Øvelsesnummer"] != "")
        {
            console.log("Name: "+data["Øvelsesnummer"]+", Link: "+data["URL på hjemmeside"]+", ext. link: "+data["URL på youtube"]);
        // var entry = new Link(data["Øvelsesnummer"],data["URL på youtube"],"http://yubio.dk/booklinks.html?id="+index);
        var id =data["Øvelsesnummer"].split(".").join("_").split(" ").join("_")
        id = id.replace("æ","ae").replace("ø","oe").replace("å","aa");
        var entry = new Link(data["Øvelsesnummer"],data["URL på youtube"],"http://yubio.dk/booklinks.html?id="+id);
        
        content+=entry.name+","+entry.extUrl+","+entry.url+EOL;
        json+="{ id:"+"\""+id+"\", link:"+"\""+entry.extUrl+"\"},"+EOL;
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
    fs.writeFile("links_out.csv",content,(err)=>{
        if(err)throw err;;       
        console.log("written links_out.csv");
        });
    json+="],"+EOL+"}";
    fs.writeFile("links.js",json,(err)=>{
            if(err)throw err;;       
            console.log("written links.js");
            });
       
});  

class Link  {
    constructor(name, extUrl, url){
        this.name = name;
        this.extUrl= extUrl;
        this.url = url;
    }
}