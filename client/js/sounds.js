var colors = [
    "#EA661E",
    "#1C203A",
    "#202869",
    "#374492",
    "#5C6CAA",
    "#6DC0B4"
]

var getChapter = function(chapterNo, topic, bookType) {
    $.ajax({
	url: (bookType ? bookType : "") + "/getChapter.json",
	data: { chapterno: chapterNo }
    }).done(function( chapter ) {
	var subChapters = chapter.sub;
	var linksContainer = $('#linksContainer');

	var header = $('<h2></h2>');
	header.html(chapter.name);
	linksContainer.append(header);

	var chapterLinks = links[chapterNo];
	
	var body = $('<div></div>');
	linksContainer.append(body);

	if(chapterLinks) {
	    for(var i in chapterLinks) {
		var paragraph = $('<p></p>');		
		body.append(paragraph);

		var chapterLink = chapterLinks[i];
		var anchor = $('<a class="yubioLink"></a>');
		anchor.html(chapterLink.caption + '&nbsp; &#x21d2;');
		anchor.attr('href', chapterLink.link);
		paragraph.append(anchor);
	    }
	}
	else {
		/*
	    var paragraph = $('<p></p>');		
	    body.append(paragraph);
	    var span = $('<span style="margin-right: 10px;"></span>');
	    span.html('Ingen');
	    paragraph.append(span);
*/
	}

	linksContainer.append($('<br />'));


	for(var i = 0; i < subChapters.length; i++) {	
	    if(subChapters[i].name != 'Resume') {
		var linkChapter = chapterNo + '.' + (i+1);
		
		var subchapterLinks = links[linkChapter];
		
		var header = $('<h3></h3>');
		header.html(subChapters[i].name);
		linksContainer.append(header);
		var body = $('<div></div>');
		linksContainer.append(body);
		
		
		if(subchapterLinks) {	
		    for(var j in subchapterLinks) {
			var paragraph = $('<p></p>');
			var subchapterValue = subchapterLinks[j];
			var subchapterSuffix = "";
			var linkSuffix = "";
			var isMp3 = true;
			var isNew = false;
			var link ="";
			if(typeof subchapterValue === 'object') {
				if( subchapterValue.id != null)
				{
				var subchapterLink = subchapterValue.id;
				subchapterSuffix = " " + subchapterValue.caption; 
				}
				else
				{
					if( subchapterValue.link != null)
					{
						link = subchapterValue.link;
						isNew = true;
						var subchapterLink = subchapterValue.chapter;
					}
					else
					{
						var subchapterLink = subchapterValue.chapter;
						isMp3 = subchapterValue.isMp4 == "false";
						subchapterSuffix = " " + subchapterValue.suffix; 
						if(subchapterValue.linkSuffix != null && subchapterValue.linkSuffix.length > 0)
						{
						linkSuffix = " "+subchapterValue.linkSuffix;
						}
					}
				}
			}
			else {
				var subchapterLink = subchapterValue;
			}
					
			var span = $('<span></span>');		
			span.css('font-size', '1.5em');
			span.css('width', '8em');
			span.css('display', 'inline-block');
			paragraph.append(span);

			
			span.html(subchapterLink.replace(/-/g, '.') + subchapterSuffix);

			body.append(paragraph);

			var addButton = function(paragraph, subchapterLink, isDownload, isMp3, isNew) {
				if( isNew)
					{
						url = subchapterLink;
						var anchor = $('<a class="yubioBtnSolid" style="text-align: center"></a>');
						
						var text = "Hør";
						anchor.html(text);
						anchor.attr('href', url);
						paragraph.append(anchor);
						return;
					}
			    var url = "";
			    if(bookType == "/b")
			     {
			     	if( isMp3){
					url = "https://dl.dropboxusercontent.com/u/15548501/Lydfiler%20C-bogen/Kapitel%20" + chapterNo + "/" + subchapterLink + ".mp3";
				}
				else{
					url = "https://dl.dropboxusercontent.com/u/15548501/Lydfiler%20C-bogen/Kapitel%20" + chapterNo + "/" + subchapterLink + linkSuffix+".mp4";
				}

			    }
			    else if(bookType == "/c")
			    {
			    	if(isMp3){
			    
				url = "https://dl.dropboxusercontent.com/u/15548501/Lydfiler%20C-bogen/Kapitel%20" + chapterNo + "/" + subchapterLink + ".mp3";
					}
					else
					{
						url = "https://dl.dropboxusercontent.com/u/15548501/Lydfiler%20C-bogen/Kapitel%20" + chapterNo + "/" + subchapterLink + linkSuffix+".mp4";
					}
			    }
			    else if(bookType == "/idc")
			    {
			    	url = "https://dl.dropboxusercontent.com/u/15548501/Idr%C3%A6t%20C/Lyd/Kapitel%20" + chapterNo + "/" + subchapterLink + ".mp4";
			    }
			    else {
			    	if(isMp3){
					url = "https://dl.dropboxusercontent.com/u/15548501/Lydfiler/Kapitel%20" +  chapterNo + "/" + subchapterLink + ".mp3";
				}
				else
				{
							url = "https://dl.dropboxusercontent.com/u/15548501/Lydfiler/Kapitel%20" +  chapterNo + "/" + subchapterLink +linkSuffix+ ".mp4";
				}

			    }

			    if(isDownload) {
				url += "?dl=1";
			    }
			    var anchor = $('<a class="yubioBtnSolid" style="text-align: center"></a>');

			    var text = isDownload ? "Hent" : "Hør";
			    anchor.html(text);
			    anchor.attr('href', url);
			    if(isDownload) {
				anchor.addClass('no_mobile');
				anchor.css('border-color', '#EA661E');
				anchor.css('background', '#EA661E');
			    }
			    paragraph.append(anchor);
			    	

			}
			if( isNew)
			{
				addButton(paragraph, link, false, isMp3,true);
			}
			else
			{
				addButton(paragraph, subchapterLink, false, isMp3, false);
				addButton(paragraph, subchapterLink, true, isMp3, false);	
			}
			


/*
	 'link': 'https://dl.dropboxusercontent.com/u/15548501/Lydfiler/Kapitel%201/1.1.mp3'},

	 'link': 'https://dl.dropboxusercontent.com/u/15548501/Lydfiler/Kapitel%201/1.1.mp3?dl=1'
*/

		    }
		}
		else {
		    var paragraph = $('<p></p>');		
		    body.append(paragraph);
		    var span = $('<span style="margin-right: 10px;"></span>');
		    span.html('Kommer snart');
		    paragraph.append(span);
		}
		linksContainer.append($('<br />'));		
	    }

//	    var contentButton = textButton("column1", '?topic=' + topic + '&chapter=' + linkChapter, '<br />' + subChapters[i].name, null, "90X300");
	}
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
};


var initializePage = function(chapter, topic, bookType) {

    var imageLib =  "../images";

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "sounds_selector.html", imageLib + '/icons/yubio_sound_icon.svg');
    var mainTopic = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');

    getChapter(chapter[1], topic, bookType);
}
