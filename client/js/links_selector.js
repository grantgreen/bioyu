var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]

var getChapterList = function(topic, bookType) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getChapterList.json"
    }).done(function( chapterList ) {
	var colorIndex = (Math.random() * 6) >> 0;
	var color = colors[colorIndex];
	for(var i = 0; i < chapterList.length; i++) {		    
	    
	    var contentButton = textButton("buttonContainer", 'links.html?chapter=' + (i+1), '<br />' + chapterList[i].replace(': ', '<br />').replace('Kapitel', ''), color, "90X140");
	}
	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });;
};

var initializePage = function(chapter, topic, bookType) {

    var imageLib =  "../images";

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "links_selector.html", imageLib + '/icons/yubio_links_icon.svg');
    var mainTopic = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');

    if(chapter == undefined) {
	getChapterList(topic, bookType);
    }
    else if(chapter[3] != undefined) {	
	alert("INDHOLD");
    }
    else if(chapter[1] != undefined) {
	getChapter(chapter[1], topic);
    }
}
