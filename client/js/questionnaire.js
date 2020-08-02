var answerTime = 0;
var timer = null;
var user = null;
var level = -1;
var chapters = "";
var mode = -1;
var stopWatch = null;
var gameId = null;
var noOfQuestions = -1;
var gameType = "";

var initView = function (pMode, pChapters, stopwatch, pUser, pLevel, pSubchapters, pCount, headerText, bookType) {
    chapters = pChapters;

    var headerContainer = $('#header');
    var header = $('<h2></h2>');
    if(headerText == 'undefined') {
	switch(pLevel) {
	case 'UCP': 
	    headerText = 'Ultimate Choice Fysiologi';
	    break;
	case 'UCB': 
	    headerText = 'Ultimate Choice Biokemi';
	    break;
	case 'UCG': 
	    headerText = 'Ultimate Choice Genetik';
	    break;
	case 'UCE': 
	    headerText = 'Ultimate Choice Økologi';
	    break;
	case 'UC': 
	    headerText = 'Ultimate Choice';
	    break;
	default:
	    headerText = '';
	}

    }
    header.html(headerText);
    headerContainer.append(header);


    if(!stopwatch) {
	$('#timer').hide();
    }
    else {
	$('#timer').css('fontFamily', 'digital, verdana');
    }

    stopWatch = new StopWatch('timer', '../images/stopwatch.png');

    user = pUser;
    mode = pMode;
    level = mode == "practice" ? mode : pLevel;
    noOfQuestions = pCount;

    if(pSubchapters) {
	var subchaptersString = pSubchapters.toString();

	return subchaptersString.replace(/,/g, "|");
    }
    else {
	if(pLevel == 'level1') {
	    return levels['MC' + chapters]["L1"];
	}
	else if(pLevel == 'level2') {
	    return levels['MC' + chapters]["L2"];
	}
	else if(pLevel == 'level3') {
	    return levels['MC' + chapters]["L3"];
	}
	else {
	    return chapters;
	}
    }

}

var startCounter = function() {
    stopWatch.start();
//    timer = setInterval(updateDisplay, 100); // every millisecond call updateDisplay
}

function updateDisplay() {
    var timerValue = $('#timer').text().replace('.', '');
    var value = parseInt(timerValue, 10);
    value++;
    value = ((value / 10) >> 0) + '.' + (value % 10);
    $('#timer').text(value);
}

var addSubmitButton = function() {
    /*
    var elQuestionListForm = new YAHOO.util.Element('questionList');

    var button = new YAHOO.widget.Button({ 
	label: "Indsend",
	id: "submit",
	onclick: { fn: getCorrectAnswerCount },
	container: "buttoncontainer"
    });
    */
}

var questions = []; 
var startQuestionnaire = function(chapters, count, bookType) {
    chapters = chapters.replace(/(\d+\.?\d*)-(\d+\.?\d*)/g, function(x, y, z) {
	var result = "";
	var inc = y.indexOf(".") != -1 ? 0.1 : 1;
	var decimals = y.indexOf(".") != -1 ? 1 : 0;
	for(i = Number(y); i < Number(z); i+=inc) {result += i.toFixed(decimals) + "|";}
	return result + z;
    });

    $.ajax({
	url: (bookType ? bookType : "") + "/getQuestions.json",
	data: { 
	    "randomcount": count,
	    "chapters": chapters.split('|')
	}
    }).done(function( o ) {	
	runGame(o, bookType);
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });

}


/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var isExpired = function(o) {
    var expires = o.expires ? eval(o.expires) : null;
    if(expires && expires > -1 && expires < (new Date()).getTime()) {
	var questionsElement = $('#questions');
    
	var expiredText = "Konkurrencen er udløbet"
	if(o.type == "facebook") {
	    expiredText += " - kig på vores <a href=\"https://www.facebook.com/yubiodk\">Facebook side</a> for at finde den nyeste quiz.";
	}
	
	var expiredTextElement = $('<div></div>');
	expiredTextElement.css('font-weight', '800');
	expiredTextElement.html(expiredText);
	expiredTextElement.appendTo(questionsElement);
	$('<br />').appendTo(questionsElement);
	return true;
    }
    return false;
} 

var runGame = function( o, bookType ) {
    gameType = o.type;
    if(o.type != "facebook") {

	var imageLib =  "../images";

	var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
	var mainTopic = imgButton("mainTopic", "multiple_choice_selector.html", imageLib + '/icons/yubio_multiple_choice_icon.svg');
	var mainYubio = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');
    }

    if(isExpired(o)) return;

    var headerContainer = $('#header');
    var header = $('<h2></h2>');
    // Hack til Facebook spil - fjernes igen.
    if(gameId == "548dec790d4a1471679b5da3") {
	o.headerText = "Ultimate Choice";
    }
    header.html(o.headerText);
    headerContainer.append(header);
    
    try { 
	questions = o.documents;

	questions = shuffleArray(questions);
 
	//alert(o.responseText);
        for (var i = 0, len = questions.length; i < len; ++i) {
	    questions[i] = {
		"question": questions[i],
		"index": i
	    };
        }
	if(questions != null && questions.length > 0) {
	    addQuestion(questions[0], bookType);
	    //	    answerTime = (new Date).getTime();
	    startCounter();
	}
	else {
	    alert("Ingen spørgsmål fundet til dette område");
	}
    } 
    catch (x) { 
	alert("JSON Parse failed!" + x); 
	return; 
    } 
}

var getCorrectAnswerCount = function(bookType) {
    var formObject = document.getElementById('questionList');

    var answerData = {"gameId" : gameId};
    for (var i = 0; i < questions.length; i++) {
        console.log("TXT " + questions[i].question['_id']);
	answerData[questions[i].question['_id']] = questions[i].answer;
    }

    $.ajax({
	url: (bookType ? bookType : "") + "/getCorrectAnswerCount.json",
	data: answerData
    }).done(function( o ) {
	answerTime = stopWatch.stop() / 1000;
	clearInterval(timer);
        var correctAnswerCount = 0;
	try {
	    correctAnswerCount = o;

	    if(gameType != "facebook") {
		showCorrectAnswers();
	    }

	    if(mode != "practice") {
		showNameEntry(function (playerName, schoolName, playerInfo) {
		    if(gameId) {
			sendScore(gameId, correctAnswerCount, answerTime, playerName, schoolName, playerInfo, 'storeMultipleChoiceGameResult', bookType);
		    }
		    showResultDialog(correctAnswerCount, playerName, schoolName, bookType);
		}, gameType, bookType);
	    }
	    else {
		showResultDialog(correctAnswerCount);
	    }
	} 
	catch (x) { 
	    alert("JSON Parse failed!"); 
	    return; 
	} 
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
}

var showCorrectAnswers = function(answers) {
    var questionsElement = $('#questions');
    
    for(var i in questions) {
	var q = questions[i].question;
	var questionElement = $('<div></div>');
	if(q.correct_answer != questions[i].answer) {
	    questionElement.css('color', '#EA661E');
	}
	var questionText = $('<div></div>');
	questionText.css('font-weight', '800');
	questionText.html((Number(i) + 1) + ". " + q.text);
	questionText.appendTo(questionElement);

	var correctAnswerText = $('<div></div>');
	correctAnswerText.html('Korrekt svar: ' + q.answers[q.correct_answer]);
	correctAnswerText.appendTo(questionElement);

	var yourAnswerText = $('<div></div>');
	yourAnswerText.html('Dit svar: ' + q.answers[questions[i].answer]);
	yourAnswerText.appendTo(questionElement);
	
	$('<br />').appendTo(questionElement);
	questionElement.appendTo(questionsElement);
    }
}

var getHighScores = function(scoreData, callback, parameters, bookType) {
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


// Constraints are hardcoded in servercode.
var saveScore = function(scoreData, bookType, callback) {
    $.ajax({
	url: (bookType ? bookType : "") + "/saveScore.json",
	data: scoreData
    }).done(function( o ) {
	callback(null, o);
    }).fail(function(jqXHR, textStatus) {
	callback("Request failed: " + textStatus, null);
    });
}

/*
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


    var header = $('<thead></thead>');
    header.append($('<th>Placering</th>'));
    header.append($('<th>Navn</th>'));
    header.append($('<th>Rigtige</th>'));
    header.append($('<th>Tid</th>'));
    header.append($('<th>Dato</th>'));
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


	if(!found && localScore.value == res.value && localScore.duration == res.duration) {
	    entry.css('color', '#EA661E');
	    found = true;
	}


	entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + (i + 1) + '</td>'));
	entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.user + '</td>'));
	entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.value + '</td>'));
	entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.duration+ 's</td>'));
	var date = new Date(Number(res.date));
	var dateString = padZero(date.getDate()) + "." + padZero(date.getMonth()+1) + "." + date.getFullYear() + "-" + padZero(date.getHours()) + ":" + padZero(date.getMinutes()); 
	entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + dateString + '</td>'));
	
	myHighScoreTable.append(entry);
    }
    $('#scoresContainer').append(myHighScoreTable);
}
*/

var showResultDialog = function(score, userName, schoolName, bookType) {
    var scoresContainer = $('#scoresContainer');

    var resultContainer = $('#resultContainer');
    var getScore = function(percentCorrect) {
	if(percentCorrect >= 95) return "12";
	if(percentCorrect >= 80) return "10";
	if(percentCorrect >= 65) return "7";
	if(percentCorrect >= 50) return "4";
	if(percentCorrect >= 40) return "02";
	if(percentCorrect >= 10) return "00";
	return "-3";
    }

    var resultText = '';
    if(mode == 'practice') {
	resultText = '<h2>Træning</h2>';
    }
    else if(mode == 'loaded') {
	resultText = '<h2>Spil med flere deltagere</h2>';
    }
    else {
	resultText = '<h2>Niveau ' + level + '</h2>';
    }

    resultText += '<p>Du har svaret korrekt på ' + score + ' ud af ' + questions.length + ' spørgsmål!</p>';

    var percentCorrect = (100 * score / questions.length) >> 0;
    resultText += '<p>Karakter: ' + getScore(percentCorrect)  + ' (' + percentCorrect + '%)</p>';
    resultText += '<p>Det tog ' + answerTime + 'sek.</p>';
    
    resultContainer.html(resultText);

    scoresContainer.show();
    $('#collapseGame').collapse();
    $('#collapseResult').collapse();

    if(mode == 'practice' || mode == 'loaded') return;

    var discipline = "multiple_choice";
    var part = "level_" + chapters + "_" + level;

    var params = {
	'discipline': discipline,
	'part': part,
	'count': 100
    };

    if(userName != null && schoolName != null) {
	var score = {
            'discipline': discipline,
            'part': part,
            'user': userName,
	    'school': schoolName,
            'value': score,
            'duration': answerTime,
	    'noOfQuestions': noOfQuestions,
            'date': Date.now()
	}

	
	saveScore(score, bookType, function(err, result) {
	    if(err) {
		alert(err);
	    }
	    else {
		//getHighScores
		getHighScores(params, showHighScores, score, bookType);
	    }
	});
    }
    else {
	//getHighScores
	getHighScores(params, showHighScores,  score, bookType);
    }

    // Staying on the page, we must reinitialize the answerTime
}


var addQuestion = function(question, bookType) { 
    var elQuestionList = $('#questionList');
    var elDiv = $('<div></div>');
    var id = question.question['_id'];
    elDiv.attr('id', id);
    elQuestionList.append(elDiv);
    elDiv.css('width', '100%'); 
    elDiv.css('margin', '10px 0px 5px 0px'); 

    var questText = $('<div></div>');
    questText.css('margin-bottom', '20px');
    questText.css('padding', '5px');
//    questText.css('border-style', 'solid');
//    questText.css('border-width', '1px');
    questText.html((question.index + 1) + "/" + questions.length + " " + question.question['text']);
//    var questText = document.createTextNode(question['text']);
    elDiv.append(questText); 

    switch(question.question['type']) {
    case 'multiple':
	elAnswers = createMulti(question.question['answers'], question['_id']);
	elDiv.append(elAnswers);
	elAnswers.css('float', 'right'); 
	break;
    case 'multiple_text':
	elAnswers = createMultiText(question, bookType);
	elDiv.append(elAnswers);
	break;
    case 'yesno':
	elAnswers = createYesNo(question['answers'], question['_id']);
	elDiv.append(elAnswers);
	elAnswers.css('float', 'right'); 
	break;
    default:
	
    }
}

var createMulti = function(question) {
    var id = question.question['_id'];
    var answers = question.question['answers'];

    var elSelect = $('<select></select>');
    elSelect.attr('name', id);
    for(var i = 0; i < answers.length; i++) {
	var elOption = $('<option></option>');
	elOption.attr('value', i);
	elOption.html(answers[i]); 
	elSelect.append(elOption); 
    }

    return elSelect;
}

var showNext = function(question, bookType) {
    var elQuestionList = $('#questionList');
    elQuestionList.empty();
    var nextIndex = question.index + 1;
    if(nextIndex < questions.length) {
	addQuestion(questions[question.index + 1], bookType);
    }
    else {
	getCorrectAnswerCount(bookType);
    }
}


var createMultiText = function(question, bookType) {
    var id = question.question['_id'];
    var answers = question.question['answers'];
    var elDiv = $('<div></div>');

    //Shuffle answers
    answers = answers.map(function(element, index) {
	return {"index": Math.random(), "originalindex": index, "text": element};
    });
    
    answers = answers.sort(function(a1, a2) {
	return a1.index-a2.index;
    });

    for(var i = 0; i < answers.length; i++) {
	var elInput = $('<input></input>');
	elInput.attr('type', 'radio');
	elInput.attr('name', id);
	elInput.attr('id', id + i);
	elInput.attr('value', answers[i].originalindex);
	elInput.css('margin-top', '1em');
	elDiv.append(elInput); 

	elInput.change(function(evt) {
	    question.answer = $(evt.target).attr('value');
	    showNext(question, bookType);
	});
	var elLabel = $('<label></label>');
	elLabel.attr('for', id + i);
	elLabel.css('width', '400px');
	elLabel.html('&#x24' + (60 + i) + '; ' + answers[i].text); 
	elDiv.append(elLabel); 

	var elBreak = $('<br />');
	elDiv.append(elBreak); 

    }
    return elDiv;
}

var createYesNo = function(question) {
    var id = question.question['_id'];
    var answers = question.question['answers'];

    var elSpan = $('<span></span>');

    for(var i = 0; i < answers.length; i++) {
	var elLabel = $('<label></label>');
	elLabel.attr('for', id);
	elLabel.html(answers[i]); 
	elSpan.append(elLabel); 

	var elInput = $('<input></input>');
	elInput.attr('type', 'radio');
	elInput.attr('name', id);
	elInput.attr('value', i);
	elSpan.append(elInput); 
    }
    return elSpan;
}


// "text":"Hvor mange spillere er der pÃ¥ banen i 11-mands fodbold?","answers":[7,11,22],"type":"multiple","correct_answer":"2"}


var loadQuestionnaire = function(pGameId, bookType) {
    gameId = pGameId;
    mode = "loaded";
    level = pGameId;

    $('#timer').show();
    $('#timer').css('fontFamily', 'digital, verdana');


    var parameters = {
	"gameId": pGameId
    };
    
    $.ajax({
	url: (bookType ? bookType : "") + "/loadQuestions.json",
	data: parameters
    }).done(function( o ) {
	runGame(o, bookType);
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
}

var loadQuiz = function(bookId, id,  callback)
{
	$.ajax({
		url:"http://test.yubio.dk/list/"+bookId+"/"+id,
		}).done(function( link ) {
			runQuiz(link);
					callback(link);
					return;
		}).fail(function(jqXHR, textStatus) {
		alert( "Request failed: " + textStatus );
		});
}

var runQuiz = function( response) {
  
	var quiz = JSON.parse(response);
	var imageLib =  "../images";
	var bookType = "/idc";	
	var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
	var mainTopic = imgButton("mainTopic", "multiple_choice_selector.html", imageLib + '/icons/yubio_multiple_choice_icon.svg');
	var mainYubio = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');
    
    $('#timer').show();
    $('#timer').css('fontFamily', 'digital, verdana');
    // if(isExpired(o)) return;

    var headerContainer = $('#header');
    var header = $('<h2></h2>');
  
    header.html(quiz["name"]);
    headerContainer.append(header);
    
    try { 
	// questions = o.documents;

	// questions = shuffleArray(questions);
 	questions = quiz["questions"];
	//alert(o.responseText);
        for (var i = 0, len = questions.length; i < len; ++i) {
	    questions[i] = {
		"question": questions[i],
		"index": i
	    };
        }
	if(questions != null && questions.length > 0) {
	    addQuestion(questions[0], bookType);
	    //	    answerTime = (new Date).getTime();
	    startCounter();
	}
	else {
	    alert("Ingen spørgsmål fundet til dette område");
	}
    } 
    catch (x) { 
	alert("JSON Parse failed!" + x); 
	return; 
    } 
}
