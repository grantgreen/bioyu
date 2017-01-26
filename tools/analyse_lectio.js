var fs = require('fs');

var dir = "tools/undervisningsbeskrivelser/2016";

var out = "<html><body>";

fs.readdir(dir, function(err, files) {
    if (err) throw err;
    var i = 1;
    files.forEach(function(file) {
	var data = fs.readFileSync(dir + "/" + file, {"encoding": "utf-8"});
//	var yubio = data.match(/(y.?o?u?.?b.?i.?o)/i);
//	var thomas = data.match(/(Thomas.*?Skadhede|skadhede.*?thomas)/i);
//	var kirsten = data.match(/(Kirsten.*?Selchau|selchau.*?kirsten)/i);

	var yubio = data.match(/(Biologiens FG)/i);
	var thomas = data.match(/(Biologiens ABC)/i);
	var kirsten = data.match(/(xxsxssxsxsxxsxssxs)/i);

	if(yubio || thomas || kirsten) {
	    var m = file.match(/skole_(\d+)-hold_(\d+)/);
	    var holdRef = "https://www.lectio.dk/lectio/" + m[1] + "/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid=" + m[2];

	    var caption = data.match(/s_m_HeaderContent_MainTitle\".*\>(.*?)\<\//);

		var descriptionMatch = data.match(/(\<table class=\"list\" style=\"width: 100%\"\>[\s\S]*?\<\/table>)/);
		var description = descriptionMatch ? descriptionMatch[1] : "";

	    out += "<p style=\"border-width: 1px; border-style: solid; border-color: #000000\">";
	    out += i++ + " " + caption[1] + "<br />";
		out += description;
		
//	    var inst = data.match(/s_m_Content_Content_holduvb_UvbHoldRepeater_ctl00_uvbCtrl_institutionLbl\"\>(.*?)\<\//);
	    // var inst = data.match(/meta name=\"application-name\" content="Lectio-(.*?)\"/)[1].trim();
//	    console.log(inst[1]);

	    // var fag = data.match(/s_m_Content_Content_holduvb_UvbHoldRepeater_ctl00_uvbCtrl_fag_og_niveau\"\>(.*?)\<\//);
	    
//	    console.log(fag[1]);

	    // var hold = data.match(/s_m_Content_Content_holduvb_UvbHoldRepeater_ctl00_uvbCtrl_holdNamesLbl\"\>(.*?)\<\//);
	    
//	    console.log(hold[1]);

//	    console.log((i++) + ": " +file);
           
	    // out += inst + " " + fag[1] + " " + hold[1] + "<br />";
	    out += "<a href=\"" + holdRef + "\">Link til hold</a><br />";
	    out += "Match: ";
		out += yubio ? yubio[1] + " " : "";
		out += thomas ? thomas[1] + " "  : "";
		out += kirsten ? kirsten[1] + " "  : "";
	    out += "</p>";
	}
    });

    out += "</body></html>";

//    fs.writeFile("client/views/yubio_uses_2016.html", out);
    fs.writeFile("client/views/biologiens_uses_2016.html", out);
    console.log(out);

});


//https://www.lectio.dk/lectio/253/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid=5928348570
