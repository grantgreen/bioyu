var answerTime = 0;

var initView = function () {
    /*
    YAHOO.util.Event.addListener('addUser', "click", function(e) {
	currentStyle = YAHOO.util.Dom.getStyle('addUserBox', 'display');
	newStyle = currentStyle == 'none' ? displayStyle : 'none';
	YAHOO.util.Dom.setStyle('addUserBox', 'display', newStyle);
    });

    YAHOO.util.Event.addListener('addUser', "mouseover", function(e) {
	YAHOO.util.Dom.setStyle('addUser', 'cursor', 'pointer');
    });

    YAHOO.util.Event.addListener('doCreate', "click", function(e) {
	saveUser();
    });
    */
}

var addSubmitButton = function() {
    var elQuestionListForm = new YAHOO.util.Element('questionList');

    var button = new YAHOO.widget.Button({ 
	label: "Indsend",
	id: "submit",
	onclick: { fn: getCorrectAnswerCount },
	container: "buttoncontainer"
    }); 
//    elQuestionListForm.appendChild(elButton);

    /*
    var elButton = new YAHOO.util.Element(document.createElement('button')); 
    var elButtonText = new YAHOO.util.Element(document.createTextNode('Submit')); 
    elButton.appendChild(elButtonText);
    elQuestionListForm.appendChild(elButton);

    YAHOO.util.Event.addListener(elButton, "click", function(e) {
	alert('Hehe');
	getCorrectAnswerCount();
    });    
    */
}

var loadQuestions = function(chapter) {
    var mySuccessHandler = function(o) {
        var questions = []; 
	try { 
	    questions = YAHOO.lang.JSON.parse(o.responseText).documents; 
	    //alert(o.responseText);
            for (var i = 0, len = questions.length; i < len; ++i) {
		addQuestion(questions[i]);
            }
	    answerTime = (new Date).getTime();
	} 
	catch (x) { 
	    alert("JSON Parse failed!" + x); 
	    return; 
	} 
    };
    
    var myFailureHandler = function(o) {
	alert('Error fetching userdata');
    };
    
    var callback = {
        success : mySuccessHandler,
        failure : myFailureHandler
    };

    var chapterParts = chapter.split('.');
    var cObj = YAHOO.util.Connect.asyncRequest('GET', '/getQuestions.json?randomcount=4&chapter=' + chapterParts[0] + '&subchapter=' + chapterParts[1], callback);
}



var getCorrectAnswerCount = function() {
    var mySuccessHandler = function(o) {
	answerTime = (new Date).getTime() - answerTime;
        var correctAnswerCount = 0;
	try { 
	    correctAnswerCount = YAHOO.lang.JSON.parse(o.responseText); 
	    showResultDialog(correctAnswerCount);
	} 
	catch (x) { 
	    alert("JSON Parse failed!"); 
	    return; 
	} 
    };
    
    var myFailureHandler = function(o) {
	alert('Error fetching result');
    };
    
    var callback = {
        success : mySuccessHandler,
        failure : myFailureHandler
    };

    var formObject = document.getElementById('questionList');
    YAHOO.util.Connect.setForm(formObject);
    var cObj = YAHOO.util.Connect.asyncRequest('GET', '/getCorrectAnswerCount.json', callback);
}


var showResultDialog = function(count) {
    
    var mainDiv = new YAHOO.util.Element('mainDiv');
    var myDialogDiv = new YAHOO.util.Element(document.createElement('div'));
    myDialogDiv.set('id', 'myDialogDiv');
//    YAHOO.util.Dom.setStyle(myDialogDiv, 'background', 'white'); 

    var resultText = document.createTextNode('Du har svaret korrekt på ' + count + ' spørgsmål!');
    myDialogDiv.appendChild(resultText); 

    var elBreak = new YAHOO.util.Element(document.createElement('br'));
    myDialogDiv.appendChild(elBreak); 

    resultText = document.createTextNode('Det tog ' + answerTime / 1000 + 'sek.');
    myDialogDiv.appendChild(resultText);
    // Staying on the page, we must reinitialize the asnwerTime
    answerTime = (new Date).getTime();
    
    mainDiv.appendChild(myDialogDiv);

    var myDialog = new YAHOO.widget.Dialog('myDialogDiv', {modal: true, visible: false});

    var handleCancel = function() {
	this.destroy();
    };
    var myButtons = [
	{ text: "Fortsæt", handler: handleCancel }
    ];
    myDialog.cfg.queueProperty("buttons", myButtons);
    myDialog.render();
    myDialog.show();
}


var addQuestion = function(question) { 
    var elQuestionList = new YAHOO.util.Element('questionList');
    var elDiv = new YAHOO.util.Element(document.createElement('div'));
    var id = question['_id'];
    elDiv.set('id', id);
    elQuestionList.appendChild(elDiv);
    YAHOO.util.Dom.setStyle(id, 'width', '100%'); 
    YAHOO.util.Dom.setStyle(id, 'margin', '10px 0px 5px 0px'); 

    var questText = document.createElement('span');
    questText.innerHTML = question['text'];

//    var questText = document.createTextNode(question['text']);
    elDiv.appendChild(questText); 

    switch(question['type']) {
    case 'multiple':
	elAnswers = createMulti(question['answers'], question['_id']);
	elDiv.appendChild(elAnswers);
	YAHOO.util.Dom.setStyle(elAnswers, 'float', 'right'); 
	break;
    case 'multiple_text':
	elAnswers = createMultiText(question['answers'], question['_id']);
	elDiv.appendChild(elAnswers);
	break;
    case 'yesno':
	elAnswers = createYesNo(question['answers'], question['_id']);
	elDiv.appendChild(elAnswers);
	YAHOO.util.Dom.setStyle(elAnswers, 'float', 'right'); 
	break;
    default:
	
    }
}

var createMulti = function(answers, id) {
    var elSelect = new YAHOO.util.Element(document.createElement('select'));
    elSelect.set('name', id);
    for(var i = 0; i < answers.length; i++) {
	var elOption = new YAHOO.util.Element(document.createElement('option'));
	elOption.set('value', i);
	var cell_text = document.createTextNode(answers[i]);
	elOption.appendChild(cell_text); 
	elSelect.appendChild(elOption); 
    }

    return elSelect;
}

var createMultiText = function(answers, id) {
    var elDiv = new YAHOO.util.Element(document.createElement('div'));

    //Shuffle answers
    answers = answers.map(function(element, index) {
	return {"index": Math.random(), "originalindex": index, "text": element};
    });
    
    answers = answers.sort(function(a1, a2) {
	return a1.index-a2.index;
    });

    for(var i = 0; i < answers.length; i++) {
	var elInput = new YAHOO.util.Element(document.createElement('input'));
	elInput.set('type', 'radio');
	elInput.set('name', id);
	elInput.set('value', answers[i].originalindex);
	elDiv.appendChild(elInput); 

	var elLabel = new YAHOO.util.Element(document.createElement('label'));
	elLabel.set('for', id);

	var answerText = document.createElement('span');
	answerText.innerHTML = answers[i].text;
//	var answerText = document.createTextNode();
	elLabel.appendChild(answerText); 
	elDiv.appendChild(elLabel); 

	var elBreak = new YAHOO.util.Element(document.createElement('br'));
	elDiv.appendChild(elBreak); 

    }
    return elDiv;
}

var createYesNo = function(answers, id) {
    var elSpan = new YAHOO.util.Element(document.createElement('span'));

    for(var i = 0; i < answers.length; i++) {
	var elLabel = new YAHOO.util.Element(document.createElement('label'));
	elLabel.set('for', id);
	var answerText = document.createTextNode(answers[i]);
	elLabel.appendChild(answerText); 
	elSpan.appendChild(elLabel); 

	var elInput = new YAHOO.util.Element(document.createElement('input'));
	elInput.set('type', 'radio');
	elInput.set('name', id);
	elInput.set('value', i);
	elSpan.appendChild(elInput); 
    }
    return elSpan;
}


// "text":"Hvor mange spillere er der pÃ¥ banen i 11-mands fodbold?","answers":[7,11,22],"type":"multiple","correct_answer":"2"}