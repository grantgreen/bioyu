var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]
var chap_1_7_color = "#0A0F41";
var chap_10_16_color = "#4A6BFA";
var chap_20_26_color = "#69ffa8";
var chap_30_33_color = "#ff4a0f";
var getChapterList = function(topic) {
    $.ajax({
	url: "/demo/getChapterList.json"
    }).done(function( chapterList ) {
	var colorIndex = (Math.random() * 6) >> 0;
	var color = colors[colorIndex];
       var r = /\d+/;
	for(var i = 0; i < chapterList.length; i++) {		    
	    
         var index = parseInt(chapterList[i].match(r));
        var chapter = index;
        if(chapter >= 1 && chapter <=7){ color = chap_1_7_color;}
        if(chapter >=10 && chapter <= 16){color = chap_10_16_color;}
        if( chapter >= 20 && chapter <= 26){ color = chap_20_26_color;}
        if( chapter >= 30 && chapter <= 33){ color = chap_30_33_color}
	    var contentButton = textButton("buttonContainer", 'sounds.html?chapter=' + (index), '<br />' + chapterList[i].replace(': ', '<br />').replace('Kapitel', ''), color, "90X140");
	}
	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });;
};

var initializePage = function(chapter, topic) {
    var backButton = imgButton("mainBack", "javascript:history.back()", '../images/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "sounds_selector.html", '../images/icons/yubio_sound_icon.svg');
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
