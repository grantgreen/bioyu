var tileDown = function(event) {
    $(event.target).removeClass('up');
    $(event.target).addClass('down');
}

var tileUp = function(event) {
    $(event.target).removeClass('down');
    $(event.target).addClass('up');
}

var touchMove = function(event) {
    event.preventDefault();
}


var imgButton = function(parentId, href, image) {
    var button = $("<a></a>");
    button.attr('href', href);
    button.addClass("linkbox");
    button.addClass("linkbox_small");
    button.addClass("up");

    button.bind('mousedown', tileDown);
    button.bind('touchstart', tileDown);

    button.bind('mouseup', tileUp);
    button.bind('touchend', tileUp);

    button.css("background-image", "url('" + image + "')");
    $('#' + parentId).append(button);
}

// geometry : heightXwidth
var textButton = function(parentId, href, text, backgroundColor, geometry) {

    var height = 70;
    var width = 70;
    if(geometry != null) {
        var geomArr = geometry.split('X');
        height = geomArr[0];
        width = geomArr[1];
    }

    var button = $("<a></a>");
    button.attr('href', href);

    button.addClass("linkbox");
    button.addClass("linkbox_small");
    button.addClass("up");

    button.css('height', height + 'px');
    button.css('width', width + 'px');

    var textArr = text.split('<br />');
    var lineCount = textArr.length + 1;
    var lineHeight = height / lineCount;
    button.css('line-height', lineHeight + 'px');

    for(var i in textArr) {
	var line = $("<div></div>");	
	if(i == 0) {
	    line.css('margin-top', '10px');
	}
	line.html(textArr[i]);
	button.append(line);
    }

    if(backgroundColor != null) {
	button.css('background-color', backgroundColor);
    }

    $('#' + parentId).append(button);
    return button;
}

var textButton = function(parentId, href, text, backgroundColor, geometry, lineHeight) {

    var height = 70;
    var width = 70;
    if(geometry != null) {
        var geomArr = geometry.split('X');
        height = geomArr[0];
        width = geomArr[1];
    }

    var button = $("<a></a>");
    button.attr('href', href);

    button.addClass("linkbox");
    button.addClass("linkbox_small");
    button.addClass("up");

    button.css('height', height + 'px');
    button.css('width', width + 'px');

    var textArr = text.split('<br />');
    //var lineCount = textArr.length + 1;
    //var lineHeight = height / lineCount;
    button.css('line-height', lineHeight + 'px');

    for(var i in textArr) {
    var line = $("<div></div>");    
    if(i == 0) {
        line.css('margin-top', '10px');
    }
    line.html(textArr[i]);
    button.append(line);
    }

    if(backgroundColor != null) {
    button.css('background-color', backgroundColor);
    }

    $('#' + parentId).append(button);
    return button;
}



var createSVGButton = function() {
    var svgDocument = document;

    var tile = document.getElementById("second_link");
    if(tile.getElementsByTagName("svg").length == 0) {
	var rootSVG = svgDocument.createElementNS("http://www.w3.org/2000/svg", "svg");
	rootSVG.setAttributeNS(null, "height", 70);
	tile.appendChild(rootSVG);

	var shape = svgDocument.createElementNS("http://www.w3.org/2000/svg", "text");
	shape.setAttributeNS(null, "x", "55px");
	shape.setAttributeNS(null, "y", "35px");
	shape.setAttributeNS(null, "width", "100%");
	shape.setAttributeNS(null, "height", "100%");
	shape.setAttributeNS(null, "style", "dominant-baseline: central; text-anchor: middle");
	shape.setAttributeNS(null, "fill", "#ffffff");
	shape.setAttributeNS(null,"font-size","13px");
	shape.setAttributeNS(null, "font-family", "sans-serif");

	var textSpan = svgDocument.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textSpan.setAttributeNS(null, "x", "55px");
	textSpan.setAttributeNS(null, "y", "29px");
	textSpan.textContent = "Video";
	shape.appendChild(textSpan);
	rootSVG.appendChild(shape);
    }
}
