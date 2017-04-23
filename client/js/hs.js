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
    myHighScoreTable.css('float', 'right');
    myHighScoreTable.css('border-style', 'solid');
    myHighScoreTable.css('border-width', '0.1em');
    myHighScoreTable.css('border-color', '#ffffff');
    myHighScoreTable.css('width', '100%')


    var headerContainer = $('<thead></thead>')
    var header = $('<tr></tr>');
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Placering</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Navn</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Skole</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Rigtige</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Tid</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Dato</th>'));
    headerContainer.append(header);
    myHighScoreTable.append(headerContainer);


    result = result.sort(function (a, b) {
        var numAScore = Number(a.value);
        var numBScore = Number(b.value);
        if (numAScore > numBScore) return -1;
        else if (numAScore < numBScore) return 1;
        else { //(numAScore == numBScore) 
            var numATime = Number(a.duration);
            var numBTime = Number(b.duration);
            if (numATime < numBTime) return -1;
            else if (numATime > numBTime) return 1;
            else return 0; //(numATime == b.timeSpent)
        }
    });


    var bodyContainer = $('<tbody class="searchable"></tbody>')
    myHighScoreTable.append(bodyContainer);
    var found = false;
    for (var i = 0; i < result.length; i++) {
        var entry = $('<tr></tr>');
        var res = result[i];

        if (localScore && !found && localScore.value == res.value && localScore.duration == res.duration) {
            entry.css('color', '#EA661E');
            found = true;
        }

        entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + (i + 1) + '</td>'));
        entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + res.user + '</td>'));
        entry.append($('<td style="padding: 0.2em 1em; text-align: left ">' + res.school + '</td>'));
        entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.value + '</td>'));
        entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.duration + 's</td>'));
        var date = new Date(Number(res.date));
        var dateString = padZero(date.getDate()) + "." + padZero(date.getMonth() + 1) + "." + date.getFullYear() + "-" + padZero(date.getHours()) + ":" + padZero(date.getMinutes());
        entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + dateString + '</td>'));

        bodyContainer.append(entry);
    }

    var scoresContainer = $("#scoresContainer");
    scoresContainer.children().remove("#myHighScore");
    scoresContainer.children().remove("#filterContainer");

    // var resultContainer = $("#resultContainer");
    // var facebookLink = $('<div></div>');
    // facebookLink.html('<h3>Prøv kræfter med månedens quiz på <a target="_blank" href="https://www.facebook.com/yubiodk/">Facebook <img src="../images/yubiofb/FB-f-Logo__blue_29.png" alt="Yubio på Facebook"></img></a></h3>');
    // resultContainer.append(facebookLink);

    var filterContainer = $('<div id="filterContainer" class="input-group"> <span id="filterInfo" class="input-group-addon">Filter</span></div>');
    filterContainer.append('<input id="filter" autofocus type="text" class="form-control" placeholder="Filtrer...">');
    scoresContainer.append(filterContainer);

    $('#filterInfo').css('background', ' #EA661E')
    $('#filterInfo').css('color', ' #ffffff')
        $('#filter').keyup(function () {

        var rex = new RegExp($(this).val(), 'i');
        $('.searchable tr').hide();
        $('.searchable tr').filter(function () {
            return rex.test($(this).text());
        }).each(function(index, element) {
            var cell = $(element).find('td:first');
            if(cell) {
                cell[0].innerHTML = index+1;
            }
        }).show();

    });

    scoresContainer.append(myHighScoreTable);
}

var filter = function(){
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myHighScore");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++)
     {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) 
        {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1)
             {
                tr[i].style.display = "";
            } else 
            {
                tr[i].style.display = "none";
            }
        }          
    }
}
var  sortTable = function() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myHighScore");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
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
