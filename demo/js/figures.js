var currentTile = null;
var initOverlay = function() {
    var overlay = jQuery('<div id="overlay"> </div>');
    overlay.css('text-align', 'center');
    overlay.appendTo(document.body);
    
    var img = jQuery('<img id="figure"> </img>');
    img.appendTo(overlay);
    img.hide();

    var imgLoading = jQuery('<img id="loading-icon"> </img>');
    imgLoading.attr('src', 'images/loading-icon.gif');
    imgLoading.appendTo(overlay);

    overlay.hide();

    var closeBtn = $('<div id="closeBtn" class="figure_navigate">Luk</div>');
    closeBtn.css('top', 0);
    closeBtn.click(function() {
	overlay.hide();
	img.hide();
	imgLoading.show();
    });
    closeBtn.appendTo(overlay);


    var nextBtn = $('<div id="nextBtn" class="figure_navigate">Næste</div>');
    nextBtn.css('top', 30);
    nextBtn.click(function() {
	var obj = img.data().context.nextElementSibling;
	var ref = obj.href;
	showFigure(ref, obj);
    });
    nextBtn.appendTo(overlay);

    var prevBtn = $('<div id="prevBtn" class="figure_navigate">Forrige</div>');
    prevBtn.css('top', 60);
    prevBtn.click(function() {
	var obj = img.data().context.previousElementSibling;
	var ref = obj.href;

	showFigure(ref, obj);
    });
    prevBtn.appendTo(overlay);


    $(window).resize(function() {
        setSize();
    });

}

var setSize = function() {
    var img = $('#figure');
    var overlay = $('#overlay');
    var widthScale = img.width() / overlay.width();
    var heightScale = img.height() / overlay.height();
    
    var scale = Math.max(widthScale, heightScale);
    
    img.attr('height', img.height() / scale);
    img.attr('width' , img.width() / scale);
}

var showFigure = function(figure, tile) {
    var img = $('#figure');
    img.hide();
    var imgLoading = $('#loading-icon');
    imgLoading.show();
    var jTile = $(tile);
    $('#closeBtn').html('Luk ' + jTile.html().replace('<br>', ''));
    $('#overlay').show();

    img.attr('src', figure);
    img.data(jTile);
    img.load(function() {
        setSize();
	imgLoading.hide();
	img.show();
    });
}

var getFigures = function(chapterNo) {
    $.ajax({
	url: "/getFigures.json",
	data: { chapterno: chapterNo }
    }).done(function( figures ) {
	figures.sort(function(a, b) {
	    var getNumber = function(value) {   
		return Number(value.match(/\d\.\d+/)[0].replace('.', ''));
	    };
	    var aNumber = getNumber(a);
	    var bNumber = getNumber(b);
	    return aNumber > bNumber ? 1 : aNumber < bNumber ? -1 : 0;
	});

	for(var i = 0; i < figures.length; i++) {       	    
	    var figureName = figures[i].replace(/\.[a-z]+$/, '');
	    figureName = figureName.replace(/fig-/, 'Fig. ');
	    var figure = "figures/chapter_" + chapterNo + "/" + figures[i];

	    var figButton = textButton("column1", figure, '<br />' + figureName, null, "120X160");
	    figButton.attr('title', figureName);
	    figButton.addClass("yubio_figure");
	    figButton.css('text-decoration', 'none');

	    var closure = function(figure) {
		return function(event) {
		    event.preventDefault();
		    showFigure(figure, event.target);
		}
	    }

	    figButton.click(closure(figure));
	}

	/*
	$('a.lightbox').lightBox({
	    txtImage: 'Billede',
	    txtOf: 'af'
	}); // Select all links with lightbox class
	*/
    }).fail(function(jqXHR, textStatus) {
	alert( "Request failed: " + textStatus );
    });
};
