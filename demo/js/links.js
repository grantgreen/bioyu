var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]

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
