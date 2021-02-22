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
	for(var i = 0; i < chapterList.length; i++) 
    {
          var index = parseInt(chapterList[i].match(r));
        var chapter = index;
        getQuestions(function(questions)
        {
            color = chap_1_7_color;
            var contentButton = textButton("column1", 'multiple_choice.html?topic=multiple_choice&chapters=' + (index), '<br />' + chapterList[i].replace(': ', '<br />').replace('Kapitel', ''), color, "90X140");
        });
        //if(chapter >= 1 && chapter <=9)
            {
            

            }
        // if(chapter >= 1 && chapter <=7)
        //     { 
        //         color = chap_1_7_color;
        //     }
        // if(chapter >=10 && chapter <= 16)
        //     {
        //         color = chap_10_16_color;
        //     }
        // if( chapter >= 20 && chapter <= 26){ 
        //     color = chap_20_26_color;
        // }
        // if( chapter >= 30 && chapter <= 33)
        //     {
        //      color = chap_30_33_color;
        //  }
	}
	
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });;
};

var getQuestions = function(chapter, callback)
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
var hasMC = function(chapter)
{
	if(!chapter){return false;}
	for (var i = 0; i < chapter.sub.length; i++)
	{
		if( chapter.sub[i].hasMC != null)
		{
			return chapter.sub[i].hasMC;
		}
	};
	return true;
}
var intdiv = function(numerator, denominator) {
    return (numerator / denominator) >> 0;
}

var initializeTOC = function(chapter, topic, bookType) {

    if(chapter == undefined) {
	getChapterList(topic, bookType);
    }

    
    var imageLib = "../images";
//    $("#column1").append($("<div></div>").attr('id', 'facebookQuiz'));
//   var facebookButton = imgButton("facebookQuiz", "https://www.facebook.com/yubiodk/", imageLib + '/fb_logo/FB-f-Logo__blue_50.png');
//  var facebookButton = imgButton("facebookQuiz", "https://www.facebook.com/yubiodk/", imageLib + '/yubiofb/FB-f-Logo__blue_50.png');


// Ultimate choice i fysiologi i C-bogen er MC fra kap. 1-6 (den virker vist).
// Ultimate choice i fysiologi i B-bogen er MC fra kapitel 1-6 + 11+12.
// Ultimate choice i genetik i både C og B bogen er MC fra kapitel 7 og 8.
// Ultimate choice i økologi i C-bogen er Mc fra kapitel 9+10.
// Ultimate choice i økologi i B-bogen er MC fra kapitel 9+10+15
// Ultimate choice i biokemi (ny) i er MC fra kapitel 13+14.

    var ucPhy = bookType == "/c" ? "1-6" : (bookType == "/b" ? "1-6|11|12" : "1-12");
    var ucGen = bookType == "/c" ? "7-8" : (bookType == "/b" ? "7-8" : "19-25");
    var ucEco = bookType == "/c" ? "9-10" : (bookType == "/b" ? "9|10|15" : "26-30");
    var uc = bookType == "/c" ? "1-10" : (bookType == "/b" ? "1-15" : "1-30");

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "multiple_choice_selector.html?topic=multiple_choice", imageLib + '/icons/yubio_multiple_choice_icon.svg');
    //var mainUCPhysiology = textButton("mainUCPhysiology", "questionnaire.html?chapters=" + ucPhy + "&count=10&stopwatch=true&level=UCP", "<br />Ultimate<br />Choice<br />Fysiologi", colors[5], "70X80");

  //  if(!bookType) {
	//var mainUCBiochemistry = textButton("mainUCBiochemistry", "questionnaire.html?chapters=13-18&count=10&stopwatch=true&level=UCB", "<br />Ultimate<br />Choice<br />Biokemi", colors[5], "70X80");
    //}
    //else if(bookType == "/b") {
	//var mainUCBiochemistry = textButton("mainUCBiochemistry", "questionnaire.html?chapters=13|14&count=10&stopwatch=true&level=UCB", "<br />Ultimate<br />Choice<br />Biokemi", colors[5], "70X80");
    //}
    //var mainUCGenetics = textButton("mainUCGenetics", "questionnaire.html?chapters=" + ucGen + "&count=10&stopwatch=true&level=UCG", "<br />Ultimate<br />Choice<br />Genetik", colors[5], "70X80");

  //  var mainUCEcology = textButton("mainUCEcology", "questionnaire.html?chapters=" + ucEco + "&count=10&stopwatch=true&level=UCE", "<br />Ultimate<br />Choice<br />Økologi", colors[5], "70X80");

  //  var mainUC = textButton("mainUC", "questionnaire.html?chapters=" + uc + "&count=10&stopwatch=true&level=UC", "<br />Ultimate<br />Choice", colors[5], "70X80");

    var mainTopic = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');
}
