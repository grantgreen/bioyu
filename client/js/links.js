var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
function spliceLinks(links)
{
	var colorIndex = 0;
	for(var i in links) {
		var link = links[i];
		if(link.color){	colorIndex = parseInt(i);	}
	}
	var animations = links.slice(0,colorIndex);
	for(var i in animations)
		{
		animations[i].color = "#EA661E";
		}
	var rest = links.slice(colorIndex+1);
	for(var i in rest)
		{
			rest[i].color = "#6DC0B4";
		}
	animations.sort(dynamicSort("caption"));
	rest.sort(dynamicSort("caption"));
  return animations.concat(rest);
}
var fetchLinks = function(chapterNo)
{
	$.ajax({url:  "/getChapter.json",data: { chapterno: chapterNo }
		}).done(function( chapter ) {
		var subChapters = chapter.sub;
		var linksContainer = $('#linksContainer');
	
		var chapterLinks = links[chapterNo];
		var spliced = spliceLinks(chapterLinks);
		var header = $('<h2></h2>');
		header.html(chapter.name);
		linksContainer.append(header);
		
		var body = $('<div></div>');
		linksContainer.append(body);
	
		var color = "#EA661E";
		if(spliced) {
			for(var i in spliced) {
			var chapterLink = spliced[i];
			
			var paragraph = $('<p></p>');		
			body.append(paragraph);
	
			var anchor = $('<a class="yubioLink" style="background: ' + chapterLink.color + '"></a>');
			anchor.html(chapterLink.caption);
			anchor.attr('href', chapterLink.link);
			paragraph.append(anchor);
			}
		}
		else {
			var paragraph = $('<p></p>');		
			body.append(paragraph);
			var span = $('<span style="margin-right: 10px;"></span>');
			span.html('Ingen');
			paragraph.append(span);
		}
		}).fail(function(jqXHR, textStatus) {
		alert( "Request failed: " + textStatus );
		});}

var getChapter = function(chapterNo, topic, bookType) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var subChapters = chapter.sub;
	var linksContainer = $('#linksContainer');

	var chapterLinks = links[chapterNo];
	
	var header = $('<h2></h2>');
	header.html(chapter.name);
	linksContainer.append(header);
	
	var body = $('<div></div>');
	linksContainer.append(body);

	var color = "#EA661E";
	if(chapterLinks) {
	    for(var i in chapterLinks) {
		var chapterLink = chapterLinks[i];
		if(chapterLink.color) {
		    color = chapterLink.color;
		    continue;
		}
		
		var paragraph = $('<p></p>');		
		body.append(paragraph);

		var anchor = $('<a class="yubioLink" style="background: ' + color + '"></a>');
		anchor.html(chapterLink.caption);
		anchor.attr('href', chapterLink.link);
		paragraph.append(anchor);
	    }
	}
	else {
	    var paragraph = $('<p></p>');		
	    body.append(paragraph);
	    var span = $('<span style="margin-right: 10px;"></span>');
	    span.html('Ingen');
	    paragraph.append(span);
	}
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
};


var initializePage = function(chapter, topic, bookType) {

    var imageLib =  "../images";

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "links_selector.html", imageLib + '/icons/yubio_links_icon.svg');
    var mainTopic = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');


    if(chapter == undefined) {
	getChapterList(topic);
    }
    else if(chapter[3] != undefined) {	
	alert("INDHOLD");
    }
    else if(chapter[1] != undefined) {
	getChapter(chapter[1], topic, bookType);
    }


//    $("#column2").append('<a href="">Hej 2</a>');
//    $("#column3").append('<a href="">Hej 3</a>');
}


var initializeNewPage = function(chapter, topic, bookType) {
	
		var imageLib =  "../images";
	
		var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
		var mainTopic = imgButton("mainTopic", "links_selector.html", imageLib + '/icons/yubio_links_icon.svg');
		var mainTopic = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');
	
	
		if(chapter == undefined) {
		getChapterList(topic);
		}
		else if(chapter[3] != undefined) {	
		alert("INDHOLD");
		}
		else if(chapter[1] != undefined) {
		fetchLinks(chapter[1]);
		}
	
	
	//    $("#column2").append('<a href="">Hej 2</a>');
	//    $("#column3").append('<a href="">Hej 3</a>');
	}