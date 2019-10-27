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
	url: "/b/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var subChapters = chapter.sub;
	var linksContainer = $('#linksContainer');

	var header = $('<h2></h2>');
	header.html(chapter.name);
	linksContainer.append(header);

	var body = $('<div></div>');
	linksContainer.append(body);

	if(links && links.length > 0) {
	    for(var i in links) {
		var paragraph = $('<p></p>');		
		body.append(paragraph);

		var addButton = function(paragraph, link, isDownload) {
		    var url = link.link;
		    if(isDownload) {
			url += "?dl=1";
		    }
		    var anchor = $('<a class="yubioBtnSolid" style="text-align: center"></a>');
		    
		    var text = isDownload ? "Hent" : "Åbn";
		    anchor.html(text);
		    anchor.attr('href', url);
		    if(isDownload) {
			anchor.addClass('no_mobile');
			anchor.css('border-color', '#EA661E');
			anchor.css('background', '#EA661E');
		    }
		    paragraph.append(anchor);
		    
		}
		
		addButton(paragraph, links[i], false);
		var label = $('<span></span>');
		label.html(links[i].caption);
		paragraph.append(label);
	    }
	}
	else {
	    var paragraph = $('<p></p>');		
	    body.append(paragraph);
	    var span = $('<span style="margin-right: 10px; font-size: 20pt; font-style: italic"></span>');
	    span.html('Kommer snart');
	    paragraph.append(span);
	}
	
	linksContainer.append($('<br />'));
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
};


var initializePage = function(chapter, topic) {

    var backButton = imgButton("mainBack", "javascript:history.back()", '../images/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "exercise_manuals_selector.html", '../images/icons/yubio_em_icon.svg');
    var mainTopic = imgButton("mainYubio", "index_tiles.html", '../images/yubio_logo_pure.svg');

    getChapter(chapter[1], topic);
}
