var tileDown = function(event, element) {
    event.preventDefault();
    element.classList.remove('up');
    element.classList.add('down');
}

var tileUp = function(element) {
    element.classList.remove('down');
    element.classList.add('up');

//    createSVGButton(window.event);
}

var touchMove = function(event) {
    event.preventDefault();
}

var createSVGButton = function() {
//    evt.preventDefault();
//    var svgDocument = evt.target.ownerDocument;
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
//	shape.setAttributeNS(null, "text-anchor", "middle");
	shape.setAttributeNS(null, "fill", "#ffffff");
	shape.setAttributeNS(null,"font-size","13px");
	shape.setAttributeNS(null, "font-family", "sans-serif");
//	shape.textContent = "Hej, din gamle nisse";

	var textSpan = svgDocument.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textSpan.setAttributeNS(null, "x", "55px");
	textSpan.setAttributeNS(null, "y", "29px");
	textSpan.textContent = "Video";
	shape.appendChild(textSpan);
/*	textSpan = svgDocument.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textSpan.setAttributeNS(null, "x", "55px");
	textSpan.setAttributeNS(null, "y", "42px");
	textSpan.textContent = "le nisse";
	shape.appendChild(textSpan);
	textSpan = svgDocument.createElementNS("http://www.w3.org/2000/svg", "tspan");
	textSpan.setAttributeNS(null, "x", "55px");
	textSpan.setAttributeNS(null, "y", "55px");
	textSpan.textContent = "fdsfds dsadsa";
	shape.appendChild(textSpan);
*/
	rootSVG.appendChild(shape);
    }
}

//YAHOO.util.Event.onAvailable("second_link", createSVGButton); 