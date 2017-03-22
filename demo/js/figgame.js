var d3url = "lib/d3js/d3.min.js";
var dataurl = "data.json";
var widget;
var didResize;
var figure;
var figureType;
var bookType;
var textElements;
var stopWatch;
var dx = 0, dy = 0;

var startFigGame = function (pFigure, pBookType, pFigureType) {
    figure = pFigure;
    bookType = pBookType;
    figureType = pFigureType
    var parts = figure.split('_');
    var prefix = 'a';
    if(bookType != 'a')
   {
       prefix = bookType == 'idc' ? 'idc': 'bc';  
    } 
  //  var prefix = bookType == 'a' ? 'a' : 'bc'; 
    init(prefix + '/' + parts[1] + '/' + figureType + '/' + figure);
    //    $('#infoBox').fadeIn(5000);
}

$('[id^=game]').click(function (evt) {
    var no = evt.target.id.replace('game', '');
    init("fig_" + no + ".svg");
});

var getClasses = function (element) {
    if (element.children('tspan').length) {
        return $(element.children('tspan')[0]).attr('class');
    }
    else {
        return element.attr('class');
    }
}

var setClasses = function (element, classes) {
    if (element.children('tspan').length) {
        element.children('tspan').each(function (no, subElement) {
            $(subElement).attr('class', classes);
        });
    }
    else {
        element.attr('class', classes);
    }
}

var init = function (figname) {
    $('svg').remove();
    //    d3.xml('../figures/' + figname, "image/svg+xml", function (error, xml) {
    d3.xml('../figures/' + figname, "image/svg+xml", function (error, xml) {
        if (error) throw error;
        $('#mainDiv').append(xml.documentElement);

//        document.getElementById("mainDiv").appendChild(xml.documentElement);

//        $('#mainDiv').html(xml.documentElement);
        // $('#mainDiv').append(xml.getElementsByTagName("svg")[0]);
        //        document.body.appendChild(xml.documentElement);


        if (figureType == "standard") {
            textElements = $('text');
        }
        else {
            textElements = $('.yText');
            textElements.each(function (index, element) {
                element = $(element);

                while (element.children('tspan').length) {
                    element = $(element.children('tspan')[element.children('tspan').length-1]);
                }
                $(element).text($(element).text() + "*");
            });
            //            textElements.css('stroke', '#000000');
        }

        stopWatch = new StopWatch(stopWatchContainer, '../images/stopwatch.png');
        stopWatch.start();
        DrawLabels();

        $('#mainDiv svg').append('<br />');
    });
}

var calculateScore = function () {
    var score = 0;
    textElements.each(function (index, element) {
        var myElement = $(element);
        var transform = element.transform.baseVal.getItem(0);
        var matrix = transform.matrix;

        var textElement = myElement;
        while (textElement.children('tspan').length) {
            textElement = $(textElement.children('tspan')[textElement.children('tspan').length-1]);
        }
        var originalText = textElement.text().replace(/\*$/, '');
        if (element.id == matrix.e + "_" + matrix.f) {
            score++;
            textElement.text(originalText);
        }
        else {
            textElement.text(originalText + "*");
        }
    });
    return score;
}

var DrawLabels = function (container, labelData) {
    var selectedItem = null;
    var positionData = [];

    var svg = $('svg')[0];

    var rootElement = $(textElements[0]).parents('svg g')[0];


    // var jqRootElement = $(rootElement);
    // if (jqRootElement.attr('transform')) {
    //     var rootTransform = rootElement.transform.baseVal.getItem(0);
    //     var matrix = rootTransform.matrix;
    //     var pt = svg.createSVGPoint();
    //     var pos = pt.matrixTransform(matrix);
    //     dx = pos.x;
    //     dy = pos.y;        
    // }

    var rootTransformMatrix = {"e": 0, "f": 0};
    if(rootElement && rootElement.transform && rootElement.transform.baseVal && rootElement.transform.baseVal.length) {
        rootTransformMatrix = rootElement.transform.baseVal.getItem(0).matrix;
    }
    textElements.each(function (index, element) {
        var myElement = $(element);
        var transform = element.transform.baseVal.getItem(0);
        var matrix = transform.matrix;
        matrix.e += rootTransformMatrix.e; 
        matrix.f += rootTransformMatrix.f; 
        //        elementId = (matrix.e + dx) + "_" + (matrix.f + dy);
        elementId = matrix.e + "_" + matrix.f;
        var pt = svg.createSVGPoint();

        positionData.push({
            pos: pt.matrixTransform(matrix),
            id: elementId,
            classes: getClasses(myElement)
        });
        myElement.attr('id', elementId);
    }).promise().done(function () {
        // PRODUCTION
        var spliceCount = ((Math.random() * (positionData.length - 2)) >> 0) + 1;
        var removedElements = positionData.splice(0, spliceCount);
        positionData = positionData.concat(removedElements);
        // TEST
        // var tmp = positionData[3];
        // positionData[3] = positionData[2];
        // positionData[2] = tmp;

        textElements.each(function (index, element) {
            var myElement = $(element);
            var pt = positionData[index].pos;

            // To bring label to front            
            myElement.appendTo(svg);
            myElement.attr('transform', "matrix(1 0 0 1 " + pt.x + " " + pt.y + ")");
            //            myElement.attr('transform', "matrix(1 0 0 1 " + pt.x + " " + pt.y + ")");

            setClasses(myElement, positionData[index].classes);
        });

        var score = calculateScore();
        $('#score').html('<h4>score: ' + score + ' af ' + positionData.length + '</h4>');
    });


    // for(var i = 0; i < positionData.length-2; i++) {
    //     var index = Math.floor(Math.random() * (positionData.length - 2 - i)) + i + 1;
    //     var tmp = positionData[i];
    //     positionData[i] = positionData[i+index];
    //     positionData[i+index] = tmp;        
    // }



    // TODO:
    // Random positions
    // OK Swap selected
    // OK Deselect
    // OK Calculate score



    function getCursor(evt) {
        var svg = $('svg')[0];
        var pt = svg.createSVGPoint();
        pt.x = evt.clientX;
        pt.y = evt.clientY;
        return pt.matrixTransform(svg.getScreenCTM().inverse());
    }


    textElements.click(function (evt) {
        var element = $(evt.target);

        if (element.context.nodeName === 'tspan') {
            element = $(element.parent('text'));
        }

        if (!selectedItem) {
            element.css('font-weight', '900');
            selectedItem = element;
        }
        else if (selectedItem.attr('id') != element.attr('id')) {
            // Swap 
            var elementMatrix = element[0].transform.baseVal.getItem(0).matrix;
            var elementPt = {"x": elementMatrix.e, "y": elementMatrix.f};
            var selectedItemMatrix = selectedItem[0].transform.baseVal.getItem(0).matrix;
            var selectedItemPt = {"x": selectedItemMatrix.e, "y": selectedItemMatrix.f};



            selectedItem.attr('transform', "matrix(1 0 0 1 " + elementPt.x + " " + elementPt.y + ")");
            element.attr('transform', "matrix(1 0 0 1 " + selectedItemPt.x + " " + selectedItemPt.y + ")");

            var tmpClasses = getClasses(element);
            setClasses(element, getClasses(selectedItem));
            setClasses(selectedItem, tmpClasses);

            var score = calculateScore();
            $('#score').html('<h4>score: ' + score + ' af ' + positionData.length + '</h4>');


            if (score == textElements.length) {

                var timeSpent = (stopWatch.stop() / 1000);
                var timeElement = $('<h4></h4>');
                timeElement.html('Tid: ' + timeSpent + ' sek');
                $('#score').append(timeElement);

                var endBtn = $('<button class="btn btn-default">Afslut</button>')
                endBtn.click(function () {
                    var efs = document.exitFullscreen
                        || document.webkitExitFullscreen
                        || document.mozCancelFullScreen
                        || document.msExitFullscreen

                    if(efs) {
                        efs.call(document);
                    }

                    showNameEntry(function (playerName, schoolName, playerInfo) {
                        showResultDialog(score, timeSpent, playerName, schoolName, bookType);
                    }, null, bookType);
                });
                $('#score').append(endBtn);

                //                $('#infoBox').fadeIn(200);

            }
            else {
                //                $('#infoBox').fadeIn(200).delay(500).fadeOut(500);

            }


            selectedItem.css('font-weight', 'normal');
            selectedItem = null;
        }
        else {
            selectedItem.css('font-weight', 'normal');
            selectedItem = null;
        }
    });

    // On click - find closest spot and move label
    // $('svg').click(function(evt) {
    //     if (selectedItem) {
    //         var pt = getCursor(evt);
    //         var closest = Number.MAX_VALUE;
    //         var closestPt = null;
    //         positionData.forEach(function(position) {
    //             var x = Math.abs(position.pos.x - pt.x);
    //             var y = Math.abs(position.pos.y - pt.y);
    //             var dist = Math.sqrt(x * x + y * y);
    //             if (dist < closest) {
    //                 closest = dist;
    //                 closestPt = position.pos;
    //             }
    //         });
    //         $(selectedItem).attr('transform', "matrix(1 0 0 1 " + closestPt.x + " " + closestPt.y + ")");
    //     }
    // });



}

var initializePage = function (chapter, topic) {
    var imageLib = '../images';
    var backButton = imgButton("mainBack", "javascript:history.back()", imageLib + '/icons/yubio_back_icon.svg');
    var mainTopic = imgButton("mainTopic", "figgame_selector.html", imageLib + '/icons/yubio_figgame_icon.svg');
    var mainTopic = imgButton("mainYubio", "../index_tiles.html", imageLib + '/yubio_logo_pure.svg');
}


$().ready(function () {
    $('#moveInfoBox').click(function (evt) {
        var infoBox = $('#infoBox');
        if (infoBox.css('left') == "0px" && infoBox.css('top') == "0px") {
            infoBox.css('left', 'auto');
            infoBox.css('right', 0);
        }
        else if (infoBox.css('right') == "0px" && infoBox.css('top') == "0px") {
            infoBox.css('top', 'auto');
            infoBox.css('bottom', 0);
        }
        else if (infoBox.css('right') == "0px" && infoBox.css('bottom') == "0px") {
            infoBox.css('right', 'auto');
            infoBox.css('left', 0);
        }
        else {
            infoBox.css('bottom', 'auto');
            infoBox.css('top', 0);
        }
    });
    //    initializePage();


    // $('#mainDiv').click(function(evt) {
    // 	var el = evt.target;
    //     el = this;
    //     rfs = el.requestFullScreen
    //     || el.webkitRequestFullScreen
    //     || el.mozRequestFullScreen
    //     || el.msRequestFullScreen

    //     rfs.call(el);
    // });

    //    $('#infoBox').fadeOut(0);

    //     init("fig_2_3.svg");
});

var showResultDialog = function (pScore, answerTime, userName, schoolName, bookType) {

    $('#collapseGame').collapse('hide');
    $('#collapseResult').collapse('show');

    var scoresContainer = $('#scoresContainer');
    var resultContainer = $("#resultContainer");

    var resultText = '<h2>' + figure.replace(/fig_(.*)\.svg/, "Figur $1").replace(/_/g, ".") + '</h2>';
    resultText += '<p>Det tog ' + answerTime + 'sek.</p>';

    resultContainer.html(resultText);

    scoresContainer.show();
    $('#collapseGame').collapse();
    $('#collapseResult').collapse();

    var discipline = "figgame";
    var part = "figure_" + figure;

    var params = {
        'discipline': discipline,
        'part': part,
        'count': 100
    };

    if (userName != null && schoolName != null) {
        var score = {
            'discipline': discipline,
            'part': part,
            'user': userName,
            'school': schoolName,
            'value': pScore,
            'duration': answerTime,
            'noOfQuestions': pScore,
            'date': Date.now()
        }


        saveScore(score, bookType, function (err, result) {
            if (err) {
                alert(err);
            }
            else {
                getHighScores(params, showHighScores, score, bookType);
            }
        });
    }
    else {
        getHighScores(params, showHighScores);
    }
}

var saveScore = function (scoreData, bookType, callback) {
    $.ajax({
        url: "saveScore.json",
        data: scoreData
    }).done(function (o) {
        callback(null, o);
    }).fail(function (jqXHR, textStatus) {
        callback("Request failed: " + textStatus, null);
    });
}

var getHighScores = function (scoreData, callback, parameters, bookType) {
    $.ajax({
        url: "getHighScores.json",
        cache: false,
        data: scoreData
    }).done(function (result) {
        callback(null, result, parameters);
    }).fail(function (jqXHR, textStatus) {
        callback("Request failed: " + textStatus, null);
    });
}