var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]


var getChapter = function(chapterNo, topic) {
    $.ajax({
	url: "/c/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var subChapters = chapter.sub;
	var linksContainer = $('#linksContainer');

	var header = $('<h2></h2>');
	header.html(chapter.name);
	linksContainer.append(header);

	// Links is in separate file (articles_n.js)
	var chapterLinks = links[chapterNo];
	
	var body = $('<div></div>');
	linksContainer.append(body);
	
	if(chapterLinks) {
	    for(var i in chapterLinks) {
		var paragraph = $('<p></p>');		
		body.append(paragraph);

		var chapterLink = chapterLinks[i];
		var anchor = $('<a class="yubioLink"></a>');
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
	
	linksContainer.append($('<br />'));

	    
	for(var i = 0; i < subChapters.length; i++) {
	    if(subChapters[i].name != 'Resume') {	
		var linkChapter = chapterNo + '.' + (i+1);
		var subchapterLinks = links[linkChapter];
		var header = $('<h3></h3>');
		header.html(subChapters[i].name);
		linksContainer.append(header);
		
		var body = $('<div></div>');
		linksContainer.append(body);
		
		if(subchapterLinks) {
		    for(var j in subchapterLinks) {
			var paragraph = $('<p></p>');		
			body.append(paragraph);
			var subchapterLink = subchapterLinks[j];
			var anchor = $('<a class="yubioLink"></a>');
			anchor.html(subchapterLink.caption);
			anchor.attr('href', subchapterLink.link);
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
		linksContainer.append($('<br />'));
	    }

//	    var contentButton = textButton("column1", '?topic=' + topic + '&chapter=' + linkChapter, '<br />' + subChapters[i].name, null, "90X300");
	}
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
};


var initializePage = function(chapter, topic) {

    var backButton = imgButton("mainBack", "javascript:history.back()", 'images/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "articles_selector.html", 'images/icons/yubio_docs_icon.svg');
    var mainTopic = imgButton("mainYubio", "index_tiles.html", 'images/yubio_logo_pure.svg');


    if(chapter == undefined) {
	getChapterList(topic);
    }
    else if(chapter[3] != undefined) {	
	alert("INDHOLD");
    }
    else if(chapter[1] != undefined) {
	getChapter(chapter[1], topic);
    }

//    $("#column2").append('<a href="">Hej 2</a>');
//    $("#column3").append('<a href="">Hej 3</a>');
}
