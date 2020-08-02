var getQuestions = function(parameters, bookType, callback) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getQuestions.json",
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

var getQuizQuestions = function(bookId, chapter, callback)
{
	$.ajax({
		url:"http://test.yubio.dk/getquestions/"+bookId+"?chapter="+chapter
		}).done(function( questions ) {
					callback(questions);
					return;
		}).fail(function(jqXHR, textStatus) {
		alert( "Request failed: " + textStatus );
		});
}
var addQuiz = function(bookId, name, description, chapters, numberOfQuestions,quizTimeout,showHighScore, callback)
{
	$.ajax({
		url:"http://test.yubio.dk/create/"+bookId+"/"+name+"?chapters="+chapters+"&description="+description+"&questions="+numberOfQuestions+"&timeout="+quizTimeout+"&publichighscore="+showHighScore,
		}).done(function( link ) {
					callback(link);
					return;
		}).fail(function(jqXHR, textStatus) {
		alert( "Request failed: " + textStatus );
		});
}
var addQuizByQuestions = function(bookId, name, description, questions, numberOfQuestions,quizTimeout,showHighScore, callback)
{
	$.ajax({
		url:"http://test.yubio.dk/create_by_ids/"+bookId+"/"+name+"?chapters="+questions+"&description="+description+"&questions="+numberOfQuestions+"&timeout="+quizTimeout+"&publichighscore="+showHighScore,
		}).done(function( link ) {
					callback(link);
					return;
		}).fail(function(jqXHR, textStatus) {
		alert( "Request failed: " + textStatus );
		});
}
var loadQuiz = function(bookId, id,  callback)
{
	$.ajax({
		url:"http://test.yubio.dk/list/"+bookId+"/"+id,
		}).done(function( link ) {
					callback(link);
					return;
		}).fail(function(jqXHR, textStatus) {
		alert( "Request failed: " + textStatus );
		});
}
var hasMC = function(chapterNo, bookType, callback)
{
 $.ajax({
	url: (bookType ? bookType : "") + "/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
    	for (var i = 0; i < chapter.sub.length; i++)
    	{
    		if( chapter.sub[i].hasMC != null)
    		{
    			callback(chapter.sub[i].hasMC,  chapter.sub[i].color);
    			return;
    		}
    	}
    	callback(true);
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
	header.html(chapter.name);
	$('#headerText').val(chapter.name);
	chapterHeader.append(header);

	addSubchapterCheckboxes(chapterNo, chapter.sub.length - 1, chapter); // Do not use resume
	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
};

var addSubchapterCheckboxes = function(chapter, subchapterCount, chp) {
    var parent = $('#subchapters');
    for(var i = 0; i < subchapterCount; i++) {
	if(chp.sub[i].hasQuestions == false) {
	    continue;
	}
	var subchapter = chapter + "." + (i+1);
	var cb = $('<input type="checkbox"></input>');
	cb.attr('name', 'subchapter');
	cb.attr('id', subchapter);
	cb.attr('value', subchapter);
	parent.append(cb);

	var label = $('<label class="button"></label>');
	label.attr('for', subchapter);
	label.html(subchapter);
	label.attr('title', chp.sub[i].name);
	parent.append(label);
    }
}


var initMCGame = function(chapters, topic, bookType) {
    if(chapters.indexOf("-") == -1) 
    {
    	var mc = hasMC(chapters,bookType, function(hasMC, color)
    	{
    		if( !hasMC)
    		{
    			$('#column1').hide();
    			$('#altColumn').show();
    			  document.getElementById("info").style.color = color;
    			 var imageLib = "../images";

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "multiple_choice_selector.html?topic=" + topic, imageLib + '/icons/yubio_multiple_choice_icon.svg');
    var mainYubio = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');	
    		}
    		if( hasMC)
    		{
    			//getChapter(chapters, bookType);
    			 $('#practiceMode').select();
    			 $('#altColumn').hide();
    $('#highScoreButton').hide();
    $('#subchapters').show();
    $('#questionCount').show();
    $('#participants').hide();
    $('#levelSet').hide();
    $('#emailInvitation').hide();
	$('#randomColumn').hide();
		$('#questionsColumn').hide();
		$('#quizModeSelector').hide();

    $('#levelSet').find('input[name="level"]').change(function() {
    });
    

//    $('.singlePlayer').hide();
//    $('.multiPlayer').hide();

    $('#practiceMode').change(function() {
	$('#highScoreButton').hide();
	$('#subchapters').show();
	$('#questionCount').show();
	$('#participants').hide();	
	$('#levelSet').hide();
	$('#randomColumn').hide();
	$('#questionsColumn').hide();
	$('#quizModeSelector').hide();
	$('#levelSet').find('input[name="level"]').removeAttr('checked');



	$('#startButton').show();
	$('#emailInvitation').hide();
	});

	$('#buildQuizMode').change(function() {
		$('#randomColumn').show();
		$('#questionsColumn').hide();
		$('#quizModeSelector').show();
		$('#highScoreButton').hide();
		$('#subchapters').hide();
		$('#questionCount').hide();
		$('#participants').hide();	
		$('#levelSet').hide();
		$('#levelSet').find('input[name="level"]').removeAttr('checked');
	
	
	
		$('#startButton').hide();
		$('#emailInvitation').hide();
		});

    $('#battleMode').change(function() {
	$('#highScoreButton').show();
	$('#subchapters').hide();
	$('#questionCount').hide();
	$('#count').val(10);
	$('#participants').show();
	$('#levelSet').show();
	$('#emailInvitation').hide();

	$('#randomColumn').hide();
		$('#questionsColumn').hide();
		$('#quizModeSelector').hide();
	$('#singlePlayer').click();

	$('#subchapters').find('input[name="subchapter"]').removeAttr('checked');
    });


    $('#singlePlayer').change(function() {
	$('#levelSet').show();
	$('#singlePlayerOptions').show();
	$('#emailInvitation').hide();
    });


    $('#multiPlayer').change(function() {
	$('#levelSet').hide();
	$('#singlePlayerOptions').hide();
	$('#emailInvitation').show();

	$('#levelSet').find('input[name="level"]').removeAttr('checked');
    });

    $('#highScoreButton').click(function() {
	$('#mcForm').prop("action", "hs.html");
    });

    $('#startButton').click(function() {
	$('#mcForm').prop("action", (bookType ? bookType : "") + "/questionnaire.html");
    });

    var imageLib = "../images";

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "multiple_choice_selector.html?topic=" + topic, imageLib + '/icons/yubio_multiple_choice_icon.svg');
    var mainYubio = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');


    if(chapters == '4' || chapters == '14' || chapters == '15') {
	$('#labelLevel3').hide();
    }

    $('#mailInvitation').click(function(event) {
	event.preventDefault();

	
	var subchapters = "";
	$('#subchapters').find('input[name="subchapter"]').each(
	    function(x, y) {
		var element = $(y);
		if(element.attr("checked")) {
		    subchapters += element.val() + "|";
		}
	    });


	if(subchapters != "") {
	    chapters = subchapters.substring(0, subchapters.length-1);
	}
	else {
	    chapters = chapters.replace(/(\d+)-(\d+)/g, function(x, y, z) {
		var result = "";
		for(i = y; i < z; i++) {result += i + "|";}
		return result + z;
	    });
	}

	var parameters = {
	    "randomcount": 10,
	    "chapters": chapters.split('|'),
	    store: true
	};

//	console.log(parameters);

	getQuestions(parameters, bookType, function(questionnaireData) {    

	    var url = "http://" + document.location.host + (bookType ? bookType : "") + "/questionnaire.html?gameId=" + questionnaireData["_id"];

	    var directLink = $('<a class="yubioBtn"></a>');
	    directLink.attr('href', url);
	    directLink.html('Start spillet');
	    directLink.css('margin-top', '20px');

	    $('#directLink').append(directLink);

	    url = encodeURIComponent(url);
	    var mailto = "mailto:?subject=Invitation fra Yubio til at deltage i en multiple choice kamp!&body=";
	    var body = "Hej\n\n";
	    body += "Du er blevet udfordret til en multiple choice kamp på biologisk viden!\n\n";
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
    	});
	
    }

//    addSubchapterCheckboxes(chapters);


   
}
