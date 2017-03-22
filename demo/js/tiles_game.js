var categories = new Array();
var tiles = {};
var activeCategory = null;

var verticalCount = 3;
var horizontalCount = 3;
var level = "";
var mode = -1;

var permute = function(arr, fn, value) {
    var len = arr.length;
    if(len == 1) {
	value.push(arr[0]);
	fn(value);
	return;
    }
    for(var index = 0; index < len; index++) {
	var paramArr = arr.slice(index + 1, len).concat(arr.slice(0,index));
	permute(paramArr, fn, value.concat([arr[index]]));
    }
};

var initTilesGame = function(headerText, bookType) {

    var imageLib =  "../images";

    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "tiles_game_selector.html?topic=fit", imageLib + '/icons/yubio_fit_icon.svg');
    var mainYubio = imgButton("mainYubio", "index_tiles.html", imageLib + '/yubio_logo_pure.svg');


    // If game is loaded, the headerText is returned
    if(headerText != "undefined") {
	var headerContainer = $('#header');
	var header = $('<h2></h2>');
	header.html(headerText);
	headerContainer.append(header);
    }
    
    var submitTilesGameButton = $('#submitTilesGame');
    submitTilesGameButton.css('margin-bottom', '5px');
    submitTilesGameButton.css('height', '1.8em');
    submitTilesGameButton.prop('disabled', 'true');
}

/*
var showNameEntry = function(callback) {
    var overlay = $('<div id="overlay"></div>');
    overlay.css('text-align', 'center');
    overlay.appendTo(document.body);

    var headerDiv = $('<div><div>');
    headerDiv.css('margin-bottom', '1em');
    headerDiv.appendTo(overlay);
    var yubioLogo = $('<img src="images/yubio_logo_pure.svg"></img>');
    yubioLogo.css('height', '3em');
    yubioLogo.css('margin-right', '.2em');
    yubioLogo.appendTo(headerDiv);
    var playerNameLabel = $('<span>Indtast navn og skole for at gemme din score</span>');
    playerNameLabel.css('height', '3em');
    playerNameLabel.css('line-height', '3em');
    playerNameLabel.css('font-size', '2em');
    playerNameLabel.css('vertical-align', 'middle');
    playerNameLabel.appendTo(headerDiv);

    var playerName = jQuery('<input id="playerName" placeholder="Dit navn" type="text"> </input>');
    playerName.appendTo(overlay);

//    var schoolName = jQuery('<input id="schoolName" placeholder="Din skole" type="text"> </input>');

    var schoolName = jQuery('<select id="schoolName" placeholder="Din skole"></select>');
    for(var type in schools) {
	var optGroup = jQuery('<optgroup label="' + type +  '">');
	optGroup.appendTo(schoolName);
	var schoolList = schools[type];
	for(var i in schoolList) {
	    var school = schoolList[i];
	    var opt = jQuery('<option value="' + school + '">' + school + '</>');
	    opt.appendTo(optGroup);
	}
    }

    schoolName.appendTo(overlay);


    var submitBtn = $('<button id="submitBtn">Deltag</button>');
    submitBtn.click(function() {
	if(playerName.val() != "" && schoolName.val() != "") {
	    overlay.hide();
	    callback(playerName.val(), schoolName.val());
	}
	else {
	    alert('Indtast deltagernavn');
	}
    });

    $("#schoolName").keyup(function(event){
	if(event.which == 13){
            $("#submitBtn").click();
	}
    });

    submitBtn.appendTo(overlay);

    var cancelBtn = $('<button id="cancelBtn">Deltag ikke</button>');
    cancelBtn.click(function() {
	overlay.hide();
	callback(null);
    });

    cancelBtn.appendTo(overlay);

    playerName.focus();
}
*/

function clearCanvas(ctx, canvas) {
    // Store the current transformation matrix
    ctx.save();
    
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Restore the transform
    ctx.restore();
}

function writeMessage(messageLayer, text) {
    var canvas = messageLayer.getCanvas();
    var context = messageLayer.getContext();
    
    clearCanvas(context, canvas);

    //        context.drawImage(beachImg, 0, 0);
    context.font = "20pt Calibri";
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(text, canvas.width / 2, 20);
}

var getCategories = function(parameters, bookType, callback) {
//    console.log(parameters);
    $.ajax({
	url: (bookType ? bookType : "") + "/getTilesGameCategories.json",
	data: parameters
    }).done(function( o ) {
	try {
//	    console.log(o);
	    callback(o, bookType);
	} 
	catch (x) { 
	    alert("JSON Parse failed!" + x); 
	    return; 
	} 
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
}

var runGame = function(tilesData, bookType) {    
    var headerContainer = $('#header');
    var header = $('<h2></h2>');
    header.html(tilesData.headerText);
    headerContainer.append(header);


    var totalTries = 0;
	
    var chosenValues = tilesData.matches;
    var chosenKeys = tilesData.categories;
    
    function randOrd(){
	return (Math.round(Math.random())-0.5); 
    }
    
    chosenValues.sort( randOrd );
    chosenKeys.sort( randOrd );
    
    var tileHeight = 120;
	var tileWidth = 180;

	var margin = 5;

    var totalHeight = (tileHeight + margin) * verticalCount 
    var totalWidth = (tileWidth + margin) * (horizontalCount + 1);


	var stopWatch = new StopWatch('stopWatchContainer', '../images/stopwatch.png');
	stopWatch.start();
	
	var stage = new Kinetic.Stage({
            container: "tilesGameContainer",
            width: totalWidth,
            height: totalHeight
	});

	
	var tileLayer = new Kinetic.Layer();    
//	var messageLayer = new Kinetic.Layer();
	
	stage.add(tileLayer);
//	stage.add(messageLayer);
	
	for(var i = 0; i < horizontalCount; i++) {
	    for(var j = 0; j < verticalCount; j++) {
		var tile = new Kinetic.Group({
		    x: (i + 1) * (tileWidth + margin),
		    // + 1 for border
		    y: j * (tileHeight + margin) + 1,
		    //		draggable: true, 
		bucket: chosenValues[i * verticalCount + j].bucket
		});
		
		if(tiles[tile.attrs.bucket] == undefined) {
		    tiles[tile.attrs.bucket] = new Array();
		}
		tiles[tile.attrs.bucket].push(tile);
		
		tile.on("mouseover", function() {
		    document.body.style.cursor = "pointer";
		});
		tile.on("mouseout", function() {
		    document.body.style.cursor = "default";
		});
		
		var tileBox = new Kinetic.Rect({
		    x: 0,
		    y: 0,
		    width: tileWidth,
		    height: tileHeight,
		    fill: "#202869",
		    stroke: "#202869",
		    strokeWidth: 2
		});
		
		tile.add(tileBox);
		
		tile.add(new Kinetic.Text({
		    x: 10,
		    y: 20,
		    width: tileWidth - 20,
		    height: tileHeight,
		    text: chosenValues[i * verticalCount + j].text,
		    fill: "white",
		    fontStyle: "normal",
		    fontSize: 14,
		    fontFamily: "Verdana"
		}));
		
		
 		tile.on("tap click", function(args) {
		    if(activeCategory != null) {
			var tile = args.target.parent;
			var selectedText = tile.children[2];
			tile.attrs.proposedBucket = activeCategory.attrs.bucket;
			if(selectedText != undefined) {
			    selectedText.remove();
			}
			else {
			    totalTries++;
			}
			var shape = tile.children[0];
			shape.setStroke(activeCategory.children[0].getFill());
			tile.add(new Kinetic.Text({
			    x: 10,
			    y: 60,
			    text: activeCategory.attrs.number,
			    fill: "white",
			    fontStyle: "normal",
			    fontSize: 18,
			    fontFamily: "Verdana"
			}));
			tileLayer.draw();
			
			if(totalTries == (horizontalCount * verticalCount)) {

			    var submitTilesGameButton = $('#submitTilesGame');
			    submitTilesGameButton.removeAttr('disabled');
			    submitTilesGameButton.click(
				{'stopWatch': stopWatch,
				 'tilesData': tilesData,
				 'tileLayer': tileLayer,
				 'tileWidth': tileWidth,
				 'bookType': bookType
				}, finishGame);
//			    writeMessage(messageLayer, message);	
			}
		    }
		});
	    
		tileLayer.add(tile);
	    }	
	}


	// Add categories
	for(var index in chosenKeys) {
	    var category = new Kinetic.Group({
		x: 1,
		y: index * (tileHeight + margin) + 1,
		number: (Number(index) + 1),
		bucket: chosenKeys[index]
	    });
	    
	    categories.push(category);
	    	    
	    var rect = new Kinetic.Rect({
		x: 0,
		y: 0,
		width: tileWidth,
		height: tileHeight,
		fill: '#5C6CAA',
		stroke: '#5C6CAA',
		strokeWidth: 2
		
	    });

	    
	    category.add(rect);

	    category.add(new Kinetic.Text({
		x: 10,
		y: 20,
		text: category.attrs.number,
		fill: "white",
		fontStyle: "normal",
		fontSize: 22,
		fontFamily: "Verdana"
	    }));
	    
	    if(tilesData.visibleCategories == 'visible') {
		category.add(new Kinetic.Text({
		    x: 10,
		    y: 50,
		    width: tileWidth - 20,
		    height: tileHeight,
		    text: category.attrs.bucket,
		    fill: "white",
		    fontStyle: "normal",
		    fontSize: 14,
		    fontFamily: "Verdana"
		}));
	    }


	    
	    category.on("mouseover", function() {
		document.body.style.cursor = "pointer";
	    });
            category.on("mouseout", function() {
		document.body.style.cursor = "default";
            });

 	    category.on("tap click", function(args) {
		if(activeCategory != null) {
		    var shape = activeCategory.children[0];
		    shape.setStroke(shape.getFill());
		}
		
		activeCategory = args.target.parent;
		var rect = activeCategory.children[0];
		rect.setStroke("#ffffff");
		rect.setStrokeWidth(2);
		
		tileLayer.draw();
	    });
	    
	    tileLayer.add(category);
	}

	tileLayer.draw();
//	messageLayer.draw();
}

var loadTilesGame = function(gameId, bookType) {
    level = "loaded";
    var parameters = {
	"gameId": gameId
    };
    
    $.ajax({
	url: (bookType ? bookType : "") + "/loadTilesGame.json",
	data: parameters
    }).done(function( o ) {
	try {
	    runGame(o, bookType);
	} 
	catch (x) { 
	    alert("JSON Parse failed!" + x); 
	    return; 
	} 
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });

//    test();
}

var test = function() {
      var socket = io();
      socket.emit('chat message', $('#m').val());
      $('#m').val('');

      socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
      });
}

var startTilesGame = function(chapters, categoriesVisibility, pMode, bookType) {

    mode = pMode;

    if(mode == "practice") {
	$('#stopWatchContainer').hide();
	level = "practice";
    }
    else {
	level = chapters;
	if(categoriesVisibility == 'hidden') {
	    level += "_hidden";
	}
    }
    
//    var chapters = "1|2|3-6|11|100-111";

    chapters = chapters.replace(/(\d+)-(\d+)/g, function(x, y, z) {
	var result = "";
	for(i = y; i < z; i++) {result += i + "|";}
	return result + z;
    });
    
    var parameters = {
	"chapters": chapters.split('|'),
	// Select three of five
	neededCategories : 3,
//	possibleCategories : 5,	
	neededValues : verticalCount * horizontalCount,
	visibleCategories: categoriesVisibility
    };

//    console.log(parameters);

    getCategories(parameters, bookType, runGame);
}




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

var showResultDialog = function(score, time, playerName, schoolName, bookType) {
    
    var message = "Korrekte svar: " + score + " på " + time + " sek.";
    $('#resultContainer').css('color', '#ffffff');
    //    $('#scoresContainer').css('fontSize', '20pt');
    $('#resultContainer').html(message);
    $('#scoresContainer').show();
    $('#collapseGame').collapse();
    $('#collapseResult').collapse();


    if(level == 'practice' || level == 'loaded') return;

    var discipline = "tiles_game";
    var part = "level_" + level;
    
    var params = {
	'discipline': discipline,
	'part': part,
	'count': 100
    };

    if(playerName != null && schoolName != null) {
	var score = {
            'discipline': discipline,
            'part': part,
            'user': playerName,
            'school': schoolName,
            'value': score,
            'duration': time,
            'date': Date.now(),
	}
    
	saveScore(score, bookType, function(err, result) {
	    if(err) {
		alert(err);
	    }
	    else {
		//getHighScores
		getHighScores(params, bookType, showHighScores, score);
	    }
	});
    }
    else {
	getHighScores(params, showHighScores);
    }
    // Staying on the page, we must reinitialize the answerTime
//    answerTime = (new Date).getTime();
}

var finishGame = function(evt) {
    var stopWatch = evt.data.stopWatch;
    var tilesData = evt.data.tilesData;
    var tileLayer = evt.data.tileLayer;
    var tileWidth = evt.data.tileWidth;
    var bookType = evt.data.bookType;

    $('#submitTilesGame').attr('disabled', 'true');
    
    // Stop time
    var timeSpent = (stopWatch.stop() / 1000);
    var totalMatches = 0;
    
    
    var maxCatArr = null;
    var maxScore = -1;
    var maxScoreSum = -1;
    
    var countScores = function(arr) {
	var score = 0;
	var catIndex = -1;
	for (var key in tiles) {
	    
	    if(tilesData.visibleCategories != 'visible') {
		catIndex++;
	    }
	    else {
		for(var i = 0; i < arr.length; i++) {
		    if(arr[i].attrs.bucket == key) {
			catIndex = i;
			break;
		    }
		}
	    }
	    
	    for(var i = 0; i < tiles[key].length; i++) {
		score += arr[catIndex].attrs.bucket == tiles[key][i].attrs.proposedBucket ? 1 : 0;
	    }
	    
	}
	
	if(score > maxScore) {
	    maxScore = score;
	    maxCatArr = arr;
	}
    };
    
    
    if(tilesData.visibleCategories != 'visible') {
	permute(categories, countScores, []);
    }
    else {
	countScores(categories);
    }
    
    
    var catIndex = -1;
    for (var key in tiles) {				
	
	if(tilesData.visibleCategories != 'visible') {
	    catIndex++;
	}
	else {
	    for(var i = 0; i < maxCatArr.length; i++) {
		if(maxCatArr[i].attrs.bucket == key) {
		    catIndex = i;
		    break;
		}
	    }
	}
	
	for(var i = 0; i < tiles[key].length; i++) {
	    var resultText = "";
	    if(tilesData.visibleCategories != 'visible') {
		resultText = maxCatArr[catIndex].attrs.number + " " + tiles[key][i].attrs.bucket;
	    }
	    else {
		resultText = maxCatArr[catIndex].attrs.number + " " + maxCatArr[catIndex].attrs.bucket;
	    }
	    tiles[key][i].add(new Kinetic.Text({
		x: 10,
		y: 80,
		width: tileWidth - 20,
		text: resultText,
		fill: "white",
		fontStyle: "normal",
		fontSize: 14,
		fontFamily: "Verdana"
	    }));
	    
	    if(tiles[key][i].attrs.proposedBucket != maxCatArr[catIndex].attrs.bucket) {
		var shape = tiles[key][i].children[0];
		shape.setStroke('#EA661E');
		
	    }
	}
    }
    tileLayer.draw();
    
    if(mode != "practice") {
	showNameEntry(function (playerName, schoolName, playerInfo) {
	    if(tilesData["_id"]) {
		sendScore(tilesData["_id"], maxScore, timeSpent, playerName, schoolName, playerInfo, 'storeTilesGameResult', bookType);
	    }
	    showResultDialog(maxScore, timeSpent, playerName, schoolName, bookType);
	}, null, bookType);
    }
    else {
	showResultDialog(maxScore, timeSpent);
    }
}
