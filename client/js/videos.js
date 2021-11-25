
var fetchChapter = function(chapterNo,chaperName	) {
    $.ajax({
	url: "/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var linksContainer = $('#linksContainer');

	var chapterLinks = links;
	var body = $('<div></div>');
	linksContainer.append(body);

	for (var i in links.Videos	)
	{
			var link = links.Videos[i];
		if( link.chapter != chapterNo){continue;}
	
		var color = link.color ? link.color :  "#EA661E";
		var paragraph = $('<p></p>');		
	 	body.append(paragraph);
	 	var anchor = $('<a class="yubioLink" style="background: ' + color + '"></a>');
	 	anchor.html(chapter.name+" "+link.caption);
	 	anchor.attr('href', link.link);
	 	paragraph.append(anchor);
	}
	linksContainer.append($('<br />'))
      }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    })
};

var fetch = function(topic) {
		$.ajax({
		url: "/getChapterList.json"
		}).done(function( chapterList ) {
		var linksContainer = $('#linksContainer');
		var header = $('<h2></h2>');
		header.html("Animationer (flere følger)");
		linksContainer.append(header);
		var body = $('<div></div>');
	linksContainer.append(body);
	var chapterTable = {};
	for(var i = 0; i < chapterList.length; i++) {
		var chapter = chapterList[i].match(/Kapitel ([0-9]+):/)[1];
		chapterTable[chapter] = chapterList[i].match(/Kapitel ([0-9]+):/)[0];
	}
		for(var i = 0; i < links.Videos.length; i++) {		 
			//var chapter = chapterList[i].match(/Kapitel ([0-9]+):/)[1];
			var link = links.Videos[i];
			if(!link.link){continue;}   
			
			var color = link.color ? link.color :  "#EA661E";
			var textColor = "#ffffff";
			var header = chapterTable[parseInt(link.chapter)];//chapterList[parseInt(chapter)].match(/Kapitel ([0-9]+):/)[0];
		var paragraph = $('<p></p>');		
	 	body.append(paragraph);
	 	var anchor = $('<a class="yubioBoxedLink" style="background: ' + color + ';color: '+textColor+';"></a>');
		 anchor.html(header+" "+link.caption);
		anchor.attr('href', link.link);
	 	paragraph.append(anchor);
		}
		linksContainer.append($('<br />'))
		}).fail(function(jqXHR, textStatus) {
		alert( "Request failed: " + textStatus );
		});
};

var initializePage = function(chapter, topic, bookType) {

    var imageLib =  "../images";

     var backButton = imgButton("mainBack", "javascript:history.back()", imageLib+'/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "videos.html", imageLib+'/icons/yubio_video_icon.svg');
    var mainTopic = imgButton("mainYubio", "index_tiles.html", imageLib+'/yubio_logo_pure.svg');


    fetch();


//    $("#column2").append('<a href="">Hej 2</a>');
//    $("#column3").append('<a href="">Hej 3</a>');
}