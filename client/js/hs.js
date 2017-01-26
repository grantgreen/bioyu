var getHighScores = function(scoreData, bookType, callback, parameters) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getHighScores.json",
    cache: false,
	data: scoreData
    }).done(function( result ) {
	callback(null, result, parameters);
    }).fail(function(jqXHR, textStatus) {
	callback("Request failed: " + textStatus, null );
    });
}

var showHighScores = function(err, result, localScore) {
    var padZero = function(value) {
	return ("0" + value).slice(-2);
    }
    
    var myHighScoreTable = $('<table></table>');
    myHighScoreTable.attr('id', 'myHighScore');
    myHighScoreTable.css('display', 'inline');
    myHighScoreTable.css('float', 'left');
    myHighScoreTable.css('border-style', 'solid');
    myHighScoreTable.css('border-width', '0.1em');
    myHighScoreTable.css('border-color', '#ffffff');
    
    
    var header = $('<tr></tr>');
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Placering</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Navn</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Skole</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Rigtige</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Tid</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Dato</th>'));
    myHighScoreTable.append(header);

    
    result = result.sort(function(a, b) {
	var numAScore = Number(a.value);
	var numBScore = Number(b.value);
	if(numAScore > numBScore) return -1;
	else if(numAScore < numBScore) return 1;
	else { //(numAScore == numBScore) 
	    var numATime = Number(a.duration);
	    var numBTime = Number(b.duration);
	    if(numATime < numBTime) return -1;
	    else if(numATime > numBTime) return 1;
	    else return 0; //(numATime == b.timeSpent)
	}
    });

    var found = false;
    for(var i = 0; i < result.length; i++) {
	var entry = $('<tr></tr>');
	var res = result[i];

	if(localScore && !found && localScore.value == res.value && localScore.duration == res.duration) {
	    entry.css('color', '#EA661E');
	    found = true;
	}

	entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + (i + 1) + '</td>'));
	entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + res.user + '</td>'));
	entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + res.school + '</td>'));
	entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.value + '</td>'));
	entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.duration+ 's</td>'));
	var date = new Date(Number(res.date));
	var dateString = padZero(date.getDate()) + "." + padZero(date.getMonth()+1) + "." + date.getFullYear() + "-" + padZero(date.getHours()) + ":" + padZero(date.getMinutes()); 
	entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + dateString + '</td>'));
	
	myHighScoreTable.append(entry);
    }
    $("#scoresContainer").append(myHighScoreTable);
}

var getChapter = function(chapterNo, bookType) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var chapterHeader = $('#header');

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

var initHS = function(chapter, mode, topic, level, bookType, figure) {
    getChapter(chapter, bookType);

    var imageLib =  "../images";

    var mainTopicUrl = "";
    var mainTopicIcon = "";
    var discipline = "";
    var part = "";
    switch(topic) {
    case "fit":
	mainTopicUrl = "tiles_game_selector.html?topic=" + topic;
	mainTopicIcon = imageLib + '/icons/yubio_fit_icon.svg';
	discipline = "tiles_game";
	part = "level_" + chapter + (mode == 'hidden' ? "_" + mode : "");
	break;
    case "multiple_choice":
	mainTopicUrl = "multiple_choice_selector.html?topic=" + topic;
	mainTopicIcon = imageLib + '/icons/yubio_multiple_choice_icon.svg';
	discipline = "multiple_choice";
	part = "level_" + chapter + "_" + level;
	break;
    case "figgame":
	bookType = !bookType ? "a" : bookType;
	mainTopicUrl = bookType + "/figgame_selector.html?topic=" + topic;
	mainTopicIcon = imageLib + '/icons/yubio_figgame_icon.svg';
	var discipline = "figgame";
    var part = "figure_" + figure;
	break;
    }

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", mainTopicUrl, mainTopicIcon);	
    var mainYubio = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');

    var params = {
	'discipline': discipline,
	'part': part,
	'count': 100
    };

    getHighScores(params, bookType, showHighScores);


}
