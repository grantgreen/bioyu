var categories = new Array();

function getCategoryVicinity(value, categories) {
    var v = value;
    var vicinity = {"isNear": false, "match": false};
    var found = categories.some(function(c) {
	if(v.attrs.x > c.attrs.x - 20 && v.attrs.x < c.attrs.x + 20 && v.attrs.y > c.attrs.y - 20 && v.attrs.y < c.attrs.y + 20) {
	    vicinity.x = c.attrs.x;
	    vicinity.y = c.attrs.y;
	    vicinity.isNear = true;
	    vicinity.match = value.attrs.bucket == c.attrs.bucket;
            return true;
	}
	else {
            return false;
	}	
    });

    return vicinity;
}

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


window.onload = function() {
    // Start time
    var startTime = Date.now();

    var totalMatches = 0;
    var totalTries = 0;
    var verticalCount = 3;
    var horizontalCount = 3;

    // Select three of five
    var neededCategories = 3;
    var possibleCategories = 5;

    var neededValues = verticalCount * horizontalCount;
    var possibleValues = 0;
    
    var chosenKeyValues = {};
    var chosenValues = new Array();
    var chosenKeys = new Array();
    for(var key in tilesData) {	
	if(Math.random() < (neededCategories / possibleCategories)) {
	    chosenKeyValues[key] = new Array();
	    chosenKeys.push(key);
	    possibleValues += tilesData[key].length;
	    neededCategories--;
	}
	possibleCategories--;
    }
    
    for(var key in chosenKeyValues) {
	for(var value in tilesData[key]) {
	    if(Math.random() < (neededValues / possibleValues)) {
//		chosenKeyValues[key].push({"text": tilesData[key][value], "bucket": key});
		chosenValues.push({"text": tilesData[key][value], "bucket": key});
		neededValues--;
	    }
	    possibleValues--;
	}
    }

    console.log(chosenKeyValues);

    function randOrd(){
	return (Math.round(Math.random())-0.5); 
    }
/*
    for(var key in chosenKeyValues) {
	chosenKeyValues[key].sort( randOrd );
    }
*/
    chosenValues.sort( randOrd );
    chosenKeys.sort( randOrd );

    var messageHeight = 40;

    var tileHeight = 90;
    var tileWidth = 150;

    var margin = 5;

    var stage = new Kinetic.Stage({
        container: "container",
        width: 800,
        height: 500
    });

    var tileLayer = new Kinetic.Layer();    
    var messageLayer = new Kinetic.Layer();

    stage.add(tileLayer);
    stage.add(messageLayer);

    for(var i = 0; i < horizontalCount; i++) {
	for(var j = 0; j < verticalCount; j++) {
	    var tile = new Kinetic.Group({
		x: (i + 1) * (tileWidth + margin),
		y: j * (tileHeight + margin) + messageHeight,
		draggable: true, 
		bucket: chosenValues[i * verticalCount + j].bucket
	    });

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
		fill: "#31366e"
	    });
	    
	    tile.add(tileBox);

	    tile.add(new Kinetic.Text({
		x: 10,
		y: 20,
		text: chosenValues[i * verticalCount + j].text,
		textFill: "white",
		fontStyle: "normal",
		fontSize: 8,
		fontFamily: "Verdana"
	    }));

	    tile.on("dragstart", function() {
		console.log(this.attrs.x + " " + this.attrs.y);
		this.moveToTop();
		tileLayer.draw();
            });

            tile.on("dragend", function() {
		console.log("Dragend " + this.attrs.x + " " + this.attrs.y);

		var vicinity = getCategoryVicinity(this,  categories)
		console.log("Vicinity " + vicinity.isNear);
		if(vicinity.isNear) {
                    this.attrs.x = vicinity.x;
                    this.attrs.y = vicinity.y;
		    this.moveToBottom();
                    tileLayer.draw();
                    // disable drag and drop
                    this.draggable(false);
		    var message = "Korrekte svar: ";
		    message += vicinity.match ? ++totalMatches : totalMatches;

		    if(++totalTries == (horizontalCount * verticalCount)) {
			// Stop time
			var timeSpend = ((Date.now() - startTime) / 1000) >> 0; 
			message += " på " + timeSpend + " sek.";
			
		    }
		    writeMessage(messageLayer, message);
		    console.log(vicinity.match);
		}

	    });

	    tileLayer.add(tile);
	}	
    }


    // Add categories
    for(var index in chosenKeys) {
	var category = new Kinetic.Group({
	    x: 0,
	    y: index * (tileHeight + margin) + messageHeight,
	    bucket: chosenKeys[index]
	});

	categories.push(category);

	category.add(new Kinetic.Rect({
	    x: 0,
	    y: 0,
	    width: tileWidth,
	    height: tileHeight,
	    fill: "#31863e"
	}));

	category.add(new Kinetic.Text({
	    x: 10,
	    y: 20,
	    text: chosenKeys[index],
	    textFill: "white",
	    fontStyle: "normal",
	    fontSize: 8,
	    fontFamily: "Verdana"
	}));
	      	    	    

	category.on("mouseover", function() {
	    console.log("mouseover: " + this.attrs.bucket);
        });
        category.on("mouseout", function() {
	    console.log("mouseout: " + this.attrs.bucket);
        });

	tileLayer.add(category);
    }

    tileLayer.draw();
    messageLayer.draw();

    /*
    var tile = new Kinetic.Group({
	x: 0,
	y: 0,
	draggable: true, 
	detectionType: "pixel",
	key1: "Danmark"
    });

    var testtile = new Kinetic.Rect({
	x: 100,
	y: 100,
	width: 30,
	height: 30,
	fill: "#ffffff",
	draggable: true 
    });

    tile.add(testtile);

    tile.on("mouseover", function() {
	document.body.style.cursor = "pointer";
    });
    tile.on("mouseout", function() {
	document.body.style.cursor = "default";
    });
    
    tile.on("dragstart", function() {		
	console.log(this.attrs.x + " " + this.attrs.y);
    });
    
    tile.on("dragend", function() {
	console.log("Dragend " + this.attrs.x + " " + this.attrs.y);
	testtile.saveData();
    });

    var testtileLayer = new Kinetic.Layer();    
    testtileLayer.add(tile);

    var stage = new Kinetic.Stage({
        container: "container",
        width: 800,
        height: 500
    });

    stage.add(testtileLayer);
    testtile.saveData();
*/    
};
