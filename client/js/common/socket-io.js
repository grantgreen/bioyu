var createTable = function() {
    var myHighScoreTable = $('<table></table>');
    myHighScoreTable.attr('id', 'myHighScore');
    myHighScoreTable.css('display', 'inline');
    myHighScoreTable.css('float', 'right');
    myHighScoreTable.css('border-style', 'solid');
    myHighScoreTable.css('border-width', '0.1em');
    myHighScoreTable.css('border-color', '#ffffff');

    var header = $('<thead></thead>');
    header.append($('<th>Placering</th>'));
    header.append($('<th>Navn</th>'));
    header.append($('<th>Skole</th>'));
    header.append($('<th>Rigtige</th>'));
    header.append($('<th>Tid</th>'));
    header.append($('<th>Dato</th>'));
    myHighScoreTable.append(header);

    return myHighScoreTable;
}

var sortScores = function(scores) {
    scores = scores.sort(function(a, b) {
	var numAScore = Number(a.score);
	var numBScore = Number(b.score);
	if(numAScore > numBScore) return -1;
	else if(numAScore < numBScore) return 1;
	else { //(numAScore == numBScore) 
	    var numATime = Number(a.timeSpent);
	    var numBTime = Number(b.timeSpent);
	    if(numATime < numBTime) return -1;
	    else if(numATime > numBTime) return 1;
	    else return 0; //(numATime == b.timeSpent)
	}
    });
    return scores;
}

var sendScore = function(gameId, score, timeSpent, playerName, schoolName, playerInfo, type, bookType) {
//    console.log(playerInfo);
    var runOnce = false;
    var socket = io();
    socket.emit('setRoom', {"gameId": gameId}, function(response) {

	if(!runOnce) {
	    runOnce = true;
	    
	    var data = { "gameId":  gameId,
			 "score": score,
			 "timeSpent": timeSpent,
			 "playerName": playerName,
			 "schoolName": schoolName,
			 "playerInfo": playerInfo,
			 "bookType": bookType, 
		         "date": Date.now()};
	    
	    
	    socket.emit(type, data, function(response) {
		var scoresElement = $('#scoresContainer');
		scoresElement.show();
		
		var myHighScoreTable = createTable();
		var scores = sortScores(response.scores);
		
		var found = false;
		for(var i = 0; i < scores.length; i++) {
		    var score = scores[i];
		    
		    var highlight = false;
		    if(data && !found && data.score == score.score && data.timeSpent == score.timeSpent) {
			found = true;
			highlight = true;
		    }
		    
		    var entry = addEntry(i, score, highlight);			
		    myHighScoreTable.append(entry);
		}
		scoresElement.append(myHighScoreTable);
	    });
	}
    });

    socket.on(gameId, function(msg, p, c){
	// Find entry point
	var rows = $('#myHighScore > tbody tr');
	var i = 0;
	while(i < rows.length) {
	    var row = rows[i];
	    // score
	    var rowScore = row.children[3].innerHTML;
//	    console.log(row);
//	    console.log(rowScore + " " + msg.score);
	    if(Number(rowScore) < Number(msg.score)) break;
	    if(Number(rowScore) == Number(msg.score)) {
		if(Number(row.children[4].innerHTML.replace('s', '')) > Number(msg.timeSpent)) break;
	    }
	    i++;
	}

	var j = i;
	while(j < rows.length) {
	    var row = rows[j];
	    // score
	    row.children[0].innerHTML = Number(row.children[0].innerHTML) + 1;
	    j++;
	}

	var entry = addEntry(i, msg, false);
	if(rows[i]) {
	    entry.insertBefore(rows[i]);
	}
	else {
	    entry.insertAfter(rows[i-1]);
	}
    });    
}


var padZero = function(value) {
    return ("0" + value).slice(-2);
}

var addEntry = function(index, score, highlight) {
    var entry = $('<tr></tr>');
    if(highlight) {
	entry.css('color', '#EA661E');
    }

    entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + (index+1) + '</td>'));
    entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + score.playerName + '</td>'));
    entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + score.schoolName + '</td>'));
    entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + score.score + '</td>'));
    entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + score.timeSpent + 's</td>'));

    var date = new Date(Number(score.date));
    var dateString = padZero(date.getDate()) + "." + padZero(date.getMonth()+1) + "." + date.getFullYear() + "-" + padZero(date.getHours()) + ":" + padZero(date.getMinutes()); 
    entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + dateString + '</td>'));

    return entry;
}
