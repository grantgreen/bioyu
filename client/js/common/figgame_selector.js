var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]

var getChapterList = function() {
    $.ajax({
	url: "getChapterList.json"
    }).done(function( chapterList ) {
	var colorIndex = (Math.random() * 6) >> 0;
	var color = colors[colorIndex];
	for(var i = 0; i < chapterList.length; i++) {		    
	    
	    var contentButton = textButton("buttonContainer", 'figgame_setup.html?chapter=' + (i+1), '<br />' + chapterList[i].replace(': ', '<br />').replace('Kapitel', ''), color, "90X140");
	}
	
	assertBrowser();
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });;
};

var initializePage = function() {
    var backButton = imgButton("mainBack", "javascript:history.back()", '../images/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "figgame_selector.html", '../images/icons/yubio_figgame_icon.svg');
    var mainTopic = imgButton("mainYubio", "../index_tiles.html", '../images/yubio_logo_pure.svg');

	getChapterList();
}

var assertBrowser = function(){
	isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+
isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// Internet Explorer 6-11
isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
isBlink = (isChrome || isOpera) && !!window.CSS;
	if(isSafari|| isChrome )
    {
        document.getElementById('browserInfo').innerHTML = '';
        return;
    }

     document.getElementById('browserInfo').innerHTML = 'Optimeret til Chrome og Safari';
};