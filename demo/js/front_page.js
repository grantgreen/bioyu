var categories = new Array();
var tiles = {};
var activeCategory = null;



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

var addBox = function() {
}


window.onload = function() {
    var verticalCount = 3;
    var horizontalCount = 3;

    var messageHeight = 40;

    var tileHeight = 150;
    var tileWidth = 150;

    var margin = 10;

    var stage = new Kinetic.Stage({
        container: "container",
        width: 800,
        height: 800
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
		fill: "#31366e",
		stroke: "#31366e",
		strokeWidth: 2
	    });
	    
	    tile.add(tileBox);

	    tile.add(new Kinetic.Text({
		x: 10,
		y: 20,
		text: "AAA",
		textFill: "white",
		fontStyle: "normal",
		fontSize: 8,
		fontFamily: "Verdana"
	    }));


 	    tile.on("tap click", function(args) {
		var tile = args.shape.parent;
		var shape = tile.children[0];
//		shape.setStroke(activeCategory.children[0].getFill());
		tileLayer.draw();
	    });	    
	    tileLayer.add(tile);
	}	
    }


    tileLayer.draw();
    messageLayer.draw();
};
