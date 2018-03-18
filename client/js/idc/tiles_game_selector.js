var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]

var chap_1_7_color = "#26213B";
var chap_10_16_color = "#5E6BAF";
var chap_20_26_color = "#6BC2B8";
var chap_30_33_color = "#EC641C";

var getChapterList = function(topic, bookType) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getChapterList.json"
    }).done(function( chapterList ) {
	var colorIndex = (Math.random() * 6) >> 0;
	var color = colors[colorIndex];
      var r = /\d+/;
	for(var i = 0; i < chapterList.length; i++) {		    	    
  var index = parseInt(chapterList[i].match(r));
        var chapter = index;
        if(chapter >= 1 && chapter <=9)
            {
             color = chap_1_7_color;
         var contentButton = textButton("column1", 'tiles_game_mode.html?topic=' + topic + '&chapters=' + (index), '<br />' + chapterList[i].replace(': ', '<br />').replace('Kapitel', ''), color, "90X140");
         
             //continue;
         }
        if(chapter >=10 && chapter <= 16) { color = chap_10_16_color; }
        if( chapter >= 20 && chapter <= 26){ color = chap_20_26_color;}
        if( chapter >= 30 && chapter <= 33){ color = chap_30_33_color}
	    
         //var contentButton = textButton("column1", 'tiles_game_mode_coming.html?topic=' + topic + '&color='+color+'&chapters=' + (index), '<br />' + chapterList[i].replace(': ', '<br />').replace('Kapitel', ''), color, "90X140");
	}
	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });;
};

var intdiv = function(numerator, denominator) {
    return (numerator / denominator) >> 0;
}

var initializeTOC = function(chapter, topic, bookType) {

    if(chapter == undefined) {
	getChapterList(topic, bookType);
    }

    var imageLib =  "../images";

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "tiles_game_selector.html?topic=fit", imageLib + '/icons/yubio_fit_icon.svg');

    if(!bookType) {
	var mainUFPhysiology = textButton("mainUFPhysiology", "tiles_game_mode.html?topic=fit&chapters=1001&level=UFP", "<br />Ultimate<br />Fit<br />Fysiologi", colors[5], "70X80");
	var mainUFBiochemistry = textButton("mainUFBiochemistry", "tiles_game_mode.html?topic=fit&chapters=1002&level=UFB", "<br />Ultimate<br />Fit<br />Biokemi", colors[5], "70X80");
	var mainUFGenetics = textButton("mainUFGenetics", "tiles_game_mode.html?topic=fit&chapters=1003&level=UFG", "<br />Ultimate<br />Fit<br />Genetik", colors[5], "70X80");
	var mainUFEcology = textButton("mainUFEcology", "tiles_game_mode.html?topic=fit&chapters=1004&level=UFE", "<br />Ultimate<br />Fit<br />Økologi", colors[5], "70X80");
	var mainUF = textButton("mainUF", "tiles_game_mode.html?topic=fit&chapters=1005&level=UF", "<br />Ultimate<br />Fit", colors[5], "70X80");
    }
    var mainTopic = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');
    
}
