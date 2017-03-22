(function($) {
    $(document).ready(function () {
    });
})(jQuery);


var getCategories = function(parameters, bookType, callback) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getTilesGameCategories.json",
	data: parameters
    }).done(function( o ) {
	try {
	    callback(o);
	} 
	catch (x) { 
	    alert("JSON Parse failed!" + x); 
	    return; 
	} 
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
}


var getChapter = function(chapterNo, bookType) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var chapterHeader = $('#chapter_header');

	var header = $('<h2></h2>');
	// Fix for ultimate
	var headerText = chapter.name.replace(/Kapitel 100\d: /, '');
	header.html(headerText);
	$('#headerText').val(headerText);
	chapterHeader.append(header);	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
};


var initTilesGame = function(chapters, topic, bookType) {
    getChapter(chapters, bookType);

    $('.multiPlayer').hide();

    $('#practiceMode').change(function() {
	$('#participants').hide();
	$('#highScoreButton').hide();
	$('#singlePlayer').click();

    });

    $('#battleMode').change(function() {
	$('#participants').show();
	$('#highScoreButton').show();
    });


    
    $('#singlePlayer').change(function() {
	$('#singlePlayerOptions').show();
	$('.multiPlayer').hide();
    });


    $('#multiPlayer').change(function() {
	$('#singlePlayerOptions').hide();
	$('.multiPlayer').show();
    });


    $('#highScoreButton').click(function() {
	$('#tilesForm').prop("action", "hs.html");
    });

    $('#startButton').click(function() {
	$('#tilesForm').prop("action", (bookType ? bookType : "") + "/tiles_game.html");
    });

    var imageLib =  "../images";

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "tiles_game_selector.html?topic=" + topic, imageLib + '/icons/yubio_fit_icon.svg');
    var mainYubio = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');


    $('#mailInvitation').click(function(event) {
	event.preventDefault();

	chapters = chapters.replace(/(\d+)-(\d+)/g, function(x, y, z) {
	    var result = "";
	    for(i = y; i < z; i++) {result += i + "|";}
	    return result + z;
	});

	var visibleCategories = $('#visibleCategories:checked').length > 0 ? 'visible' : 'hidden';
	
	var parameters = {
	    "chapters": chapters.split('|'),
	    "neededCategories" : 3,
	    "neededValues" : 9,
	    "visibleCategories": visibleCategories,
	    "store": true
	};
	
//	console.log(parameters);

	getCategories(parameters, bookType, function(tilesData) {    

	    var url = "http://" + document.location.host + (bookType ? bookType : "") + "/tiles_game.html?gameId=" + tilesData["_id"];

	    var directLink = $('<a class="yubioBtn"></a>');
	    directLink.attr('href', url);
	    directLink.html('Start spillet');
	    directLink.css('margin-top', '20px');

	    $('#directLink').append(directLink);


	    url = encodeURIComponent(url);

	    var mailto = "mailto:?subject=Invitation fra Yubio til at deltage i en Fagligt Fit kamp!&body=";
	    var body = "Hej\n\n";
	    body += "Du er blevet udfordret til en Fagligt Fit kamp på biologisk viden!\n\n";
	    body += "Klik på dette link for at deltage: " + url + "\n\n";
	    body += "Med venlig hilsen\n";
	    body += "Yubio - http://www.yubio.dk"
	    mailto += body;
	    mailto = mailto.replace(/\n/g, "%0D%0A");
	    mailto = mailto.replace(' ', '%20');
	    document.location.href = mailto;
	});
    });
}
