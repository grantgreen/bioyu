var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]

var getChapterList = function(topic) {
    $.ajax({
	url: "/c/getChapterList.json"
    }).done(function( chapterList ) {
	var colorIndex = (Math.random() * 6) >> 0;
	var color = colors[colorIndex];
	for(var i = 0; i < chapterList.length; i++) {		    
	    
	    var contentButton = textButton("buttonContainer", 'exercise_manuals.html?chapter=' + (i+1), '<br />' + chapterList[i].replace(': ', '<br />').replace('Kapitel', ''), color, "90X140");
	}
	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });;
};

var initializePage = function(chapter, topic) {
    var backButton = imgButton("mainBack", "javascript:history.back()", '../images/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "exercise_manuals_selector.html", '../images/icons/yubio_em_icon.svg');
    var mainTopic = imgButton("mainYubio", "index_tiles.html", '../images/yubio_logo_pure.svg');

    if(chapter == undefined) {
	getChapterList(topic);
    }
    else if(chapter[3] != undefined) {	
	alert("INDHOLD");
    }
    else if(chapter[1] != undefined) {
	getChapter(chapter[1], topic);
    }
}
