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
	url: "/demo/getChapterList.json"
    }).done(function( chapterList ) {
	var page = "";
	if(topic == "figures") {
	    page = "figures.html";
	}
	else if(topic == "multiple_choice") {
	    page = "multiple_choice.html";
	}
	else if(topic == "fit") {
	    page = "tiles_game_mode.html";
	}

	var colorIndex = (Math.random() * 6) >> 0;
	var color = colors[colorIndex];
	for(var i = 0; i < chapterList.length; i++) {		    
	    
	    var contentButton = textButton("column1", page + '?topic=' + topic + '&chapter=' + (i+1), '<br />' + chapterList[i].replace(': ', '<br />').replace('Kapitel', ''), color, "90X140");
	    contentButton.attr("data-ajax", "false");
//	    $("#column" + (intdiv(i, 10) + 1)).append('<a style="display: block; padding: 15px 0px 15px 0px; color: white; text-decoration: none; font-weight: 800" href="' + page + '?topic=' + topic + '&chapter=' + (i+1) + '">' + chapterList[i] + '</a>');
	}
	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });;
};

var getChapter = function(chapterNo, topic) {
    $.ajax({
	url: "/demo/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var linkCount = 0;
	var subChapters = chapter.sub;
	for(var i = 0; i < subChapters.length; i++) {	
	    var linkChapter = chapterNo + '.' + (i+1);
	    var contentButton = textButton("column1", '?topic=' + topic + '&chapter=' + linkChapter, '<br />' + subChapters[i].name, null, "90X300");
//	    $("#column" + (intdiv(linkCount, 18) + 1)).append('<a style="display: block; padding: 3px 0px 3px 0px; color: white; text-decoration: none; font-weight: 500" href="?topic=' + topic + '&chapter=' + linkChapter + '">' + subChapters[i].name + '</a>');
	    linkCount++;

/*
	    var subSubChapters = chapter.sub[i].sub;
	    for(var j = 0; j < subSubChapters.length; j++) {	
		var linkChapter = chapterNo + '.' + (i+1) + '.' + (j+1);
		var contentButton = textButton("column1", '?topic=' + topic + '&chapter=' + linkChapter, '<br />' + subSubChapters[j], null, "90X300");
//		$("#column" + (intdiv(linkCount, 18) + 1)).append('<a style="display: block; padding: 3px 0px 3px 30px; color: white; text-decoration: none; font-weight: 500" href="?topic=' + topic + '&chapter=' + linkChapter + '">' + subSubChapters[j] + '</a>');
		linkCount++;
	    }
*/

	}
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
};

var getQuestionnaires = function(chapterNo) {
    $.ajax({
	url: "/demo/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var linkCount = 0;
	var subChapters = chapter.sub;
	for(var i = 0; i < subChapters.length; i++) {	
	    var linkChapter = chapterNo + '.' + (i+1);
	    $("#column" + (intdiv(linkCount, 3) + 1)).append('<a style="display: block; padding: 3px 0px 3px 0px; color: white; text-decoration: none; font-weight: 500" href="questionnaire.html?chapter=' + linkChapter + '">' + subChapters[i].name + '</a>');
	    linkCount++;

	}
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
}

var intdiv = function(numerator, denominator) {
    return (numerator / denominator) >> 0;
}

var initializeTOC = function(chapter, topic) {
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
