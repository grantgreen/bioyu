
var getChapterList = function(topic) {
    $.ajax({
	url: "/getChapterList.json"
    }).done(function( chapterList ) {
	for(var i = 0; i < chapterList.length; i++) {		    
	    $("#column" + (intdiv(i, 10) + 1)).append('<a style="display: block; padding: 15px 0px 15px 0px; color: white; text-decoration: none; font-weight: 800" href="?topic=' + topic + '&chapter=' + (i+1) + '">' + chapterList[i] + '</a>');
	}
	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });;
}

var getChapter = function(chapterNo, topic) {
    $.ajax({
	url: "/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var linkCount = 0;
	var subChapters = chapter.sub;
	for(var i = 0; i < subChapters.length; i++) {	
	    var linkChapter = chapterNo + '.' + (i+1);
	    $("#column" + (intdiv(linkCount, 18) + 1)).append('<a style="display: block; padding: 3px 0px 3px 0px; color: white; text-decoration: none; font-weight: 500" href="?topic=' + topic + '&chapter=' + linkChapter + '">' + subChapters[i].name + '</a>');
	    linkCount++;

	    var subSubChapters = chapter.sub[i].sub;
	    for(var j = 0; j < subSubChapters.length; j++) {	
		var linkChapter = chapterNo + '.' + (i+1) + '.' + (j+1);
		$("#column" + (intdiv(linkCount, 18) + 1)).append('<a style="display: block; padding: 3px 0px 3px 30px; color: white; text-decoration: none; font-weight: 500" href="?topic=' + topic + '&chapter=' + linkChapter + '">' + subSubChapters[j] + '</a>');
		linkCount++;
	    }

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
