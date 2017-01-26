var getChapter = function (chapterNo, bookType) {
	$.ajax({
		url: "getChapter.json",
		data: { chapterno: chapterNo }
	}).done(function (chapter) {
		var chapterHeader = $('#chapter_header');

		var header = $('<h2></h2>');
		header.html(chapter.name);
		$('#headerText').val(chapter.name);
		chapterHeader.append(header);

		getFiguresForChapter(chapterNo, bookType);

	}).fail(function (jqXHR, textStatus) {
		alert("Request failed: " + textStatus);
	});
};

var getFiguresForChapter = function (chapterNo, bookType) {
	$.ajax({
		url: "getFiguresForChapter.json",
		data: { chapter: chapterNo, type: bookType == "a" ? "a" : "bc" }
	}).done(function (figures) {
		var sortFunc = function (a, b) {
			a = Number(a.figure.replace(/fig_(\d+)_(\d+)-?(\d*)_?(\d*)-?(\d*)_?(\d*)(\(\S+\))?\.svg/, "$1$2.$3$4$5$6"));
			b = Number(b.figure.replace(/fig_(\d+)_(\d+)-?(\d*)_?(\d*)-?(\d*)_?(\d*)(\(\S+\))?\.svg/, "$1$2.$3$4$5$6"));
			return a - b;
		};

		var allFigures = [];
		if (figures.standard) {
			figures.standard.forEach(function (figure) {
				allFigures.push({ "figure": figure, "type": "standard" });
			});
		}
		if (figures.special) {
			figures.special.forEach(function (figure) {
				allFigures.push({ "figure": figure, "type": "special" });
			});
		}

		allFigures = allFigures.sort(sortFunc);
		allFigures.forEach(function (figure) {
			addFigure(figure.figure, figure.type);
		});

	}).fail(function (jqXHR, textStatus) {
		alert("Request failed: " + textStatus);
	});
};

var addFigure = function (figure, figureType) {
	var parent = $('#figures');
	var cb = $('<input type="radio"></input>');
	cb.attr('name', 'figure');
	cb.attr('id', figure);
	cb.attr('value', figure);
	cb.data("figureType", figureType);
	parent.append(cb);

	var label = $('<label class="button"></label>');
	label.attr('for', figure);

	var labelText = figure.replace(/fig_(.*)\.svg/, "$1").replace(/_/g, '.')
	label.html(labelText);
	label.attr('title', figure);
	parent.append(label);
}

var initFigGame = function (chapter, topic, bookType) {
	if (chapter.indexOf("-") == -1) {
		getChapter(chapter, bookType);
	}

	$('#startButton').click(function (evt) {
		evt.preventDefault();
		var element = $('input[name=figure]:checked', '#figForm');
		var figName = element.val()
		var figType = element.data("figureType");
		startFigGame(figName, bookType, figType);

		$('#collapseSetup').collapse('hide');
		$('#collapseGame').collapse('show');

		var el = $('#mainDiv')[0];
		rfs = el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
            || el.msRequestFullscreen

		if(rfs) {
			rfs.call(el);
		}
	});

	var urlPrefix = bookType == 'a' ? '' : '/' + bookType;
	$('#highScoreButton').click(function (evt) {
		$('#figForm').prop("action", ".." + urlPrefix + "/hs.html");
	});


	var imageLib = "../../images";
	var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
	var mainTopic = imgButton("mainTopic", "figgame_selector.html", imageLib + '/icons/yubio_figgame_icon.svg');
	var mainYubio = imgButton("mainYubio", ".." + urlPrefix + "/index_tiles.html", imageLib + '/yubio_logo_pure.svg');
}
