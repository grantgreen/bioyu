var showNameEntry = function (callback, type, bookType) {
    // var overlay = $('<div id="overlay"></div>');
    // overlay.css('text-align', 'center');
    // overlay.appendTo(document.body);

    // var headerDiv = $('<div><div>');
    // headerDiv.css('margin-bottom', '1em');
    // headerDiv.appendTo(overlay);
    // var yubioLogo = $('<img src="../images/yubio_logo_pure.svg"></img>');
    // yubioLogo.css('height', '3em');
    // yubioLogo.css('margin-right', '.2em');
    // yubioLogo.appendTo(headerDiv);
    // var playerNameLabel = $('<span>Indtast navn og skole for at gemme din score</span>');
    // playerNameLabel.css('height', '3em');
    // playerNameLabel.css('line-height', '3em');
    // playerNameLabel.css('font-size', '2em');
    // playerNameLabel.css('vertical-align', 'middle');
    // playerNameLabel.appendTo(headerDiv);

    var overlay = $('#overlay');
    if (overlay.children().length == 1) {
        var source = $("#schools-template").html();
        var template = Handlebars.compile(source);
        overlay.append(template({ schools: schools }));

        $("#schoolName").keyup(function (event) {
            if (event.which == 13) {
                $("#submitBtn").click();
            }
        });

    }

    overlay.removeClass('hidden');
    overlay.show();

    var schoolName = $('#schoolName');
    var playerName = $('#playerName');

    playerInfo = "";
    if (type == "facebook") {
        playerName.attr("disabled", true);

        checkLoginState(function (err, response) {
            if (err) {
                var fbLoginBtn = $('<div><button class="btn btn-default" id="fbLoginBtn">Log ind på Facebook</button></div>');
                fbLoginBtn.click(function () {

                    FB.login(function (response) {
                        // Handle the response object, like in statusChangeCallback() in our demo
                        // code.
                        statusChangeCallback(response, function (err, response) {
                            playerName.val(response.name);
                            playerInfo = JSON.stringify(response);
                        });

                    });
                });

                fbLoginBtn.appendTo(overlay);
            }
            else {
                playerName.val(response.name);
                playerInfo = JSON.stringify(response);
            }
        });
    }

    //    var schoolName = jQuery('<input id="schoolName" placeholder="Din skole" type="text"> </input>');    
    // var schoolName = jQuery('<select id="schoolName" placeholder="Din skole"></select>');
    // var opt = jQuery('<option value="" disabled="true" selected="true">Vælg din skole</>');
    // opt.appendTo(schoolName);
    // for(var type in schools) {
    // var optGroup = jQuery('<optgroup label="' + type +  '">');
    // optGroup.appendTo(schoolName);
    // var schoolList = schools[type];
    // for(var i in schoolList) {
    //     var school = schoolList[i];
    //     var opt = jQuery('<option value="' + school + '">' + school + '</>');
    //     opt.appendTo(optGroup);
    // }
    // }

    // schoolName.appendTo(overlay);

    var submitBtn = $('#submitBtn');
    submitBtn.off('click');
    submitBtn.click(function () {
        var playerName = $('#playerName');
        var schoolName = $('#schoolName');
        if (playerName.val() && playerName.val() != "" && playerName.val() != "Log venligst ind på Facebook" && schoolName.val() && schoolName.val() != "") {
            overlay.hide();
            callback(playerName.val(), schoolName.val(), playerInfo);
        }
        else {
            alert('Indtast deltager- og skolenavn');
        }
    });

    var cancelBtn = $('#cancelBtn');
    cancelBtn.off('click');
    cancelBtn.click(function () {
        overlay.hide();
        callback(null);
    });

    playerName.focus();
}


var showHighScores = function (err, result, localScore) {
    var padZero = function (value) {
        return ("0" + value).slice(-2);
    }

    var myHighScoreTable = $('<table></table>');
    myHighScoreTable.attr('id', 'myHighScore');
    myHighScoreTable.css('display', 'inline');
    myHighScoreTable.css('float', 'right');
    myHighScoreTable.css('border-style', 'solid');
    myHighScoreTable.css('border-width', '0.1em');
    myHighScoreTable.css('border-color', '#ffffff');
    myHighScoreTable.css('width', '100%')


    var headerContainer = $('<thead></thead>')
    var header = $('<tr></tr>');
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Placering</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Navn</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Skole</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Rigtige</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Tid</th>'));
    header.append($('<th style="padding: 0.2em 1em; text-align: center">Dato</th>'));
    headerContainer.append(header);
    myHighScoreTable.append(headerContainer);


    result = result.sort(function (a, b) {
        var numAScore = Number(a.value);
        var numBScore = Number(b.value);
        if (numAScore > numBScore) return -1;
        else if (numAScore < numBScore) return 1;
        else { //(numAScore == numBScore) 
            var numATime = Number(a.duration);
            var numBTime = Number(b.duration);
            if (numATime < numBTime) return -1;
            else if (numATime > numBTime) return 1;
            else return 0; //(numATime == b.timeSpent)
        }
    });


    var bodyContainer = $('<tbody class="searchable"></tbody>')
    myHighScoreTable.append(bodyContainer);
    var found = false;
    for (var i = 0; i < result.length; i++) {
        var entry = $('<tr></tr>');
        var res = result[i];

        if (localScore && !found && localScore.value == res.value && localScore.duration == res.duration) {
            entry.css('color', '#EA661E');
            found = true;
        }

        entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + (i + 1) + '</td>'));
        entry.append($('<td style="padding: 0.2em 1em; text-align: left">' + res.user + '</td>'));
        entry.append($('<td style="padding: 0.2em 1em; text-align: left ">' + res.school + '</td>'));
        entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.value + '</td>'));
        entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + res.duration + 's</td>'));
        var date = new Date(Number(res.date));
        var dateString = padZero(date.getDate()) + "." + padZero(date.getMonth() + 1) + "." + date.getFullYear() + "-" + padZero(date.getHours()) + ":" + padZero(date.getMinutes());
        entry.append($('<td style="padding: 0.2em 1em; text-align: center">' + dateString + '</td>'));

        bodyContainer.append(entry);
    }

    var scoresContainer = $("#scoresContainer");
    scoresContainer.children().remove("#myHighScore");
    scoresContainer.children().remove("#filterContainer");

    // var resultContainer = $("#resultContainer");
    // var facebookLink = $('<div></div>');
    // facebookLink.html('<h3>Prøv kræfter med månedens quiz på <a target="_blank" href="https://www.facebook.com/yubiodk/">Facebook <img src="../images/yubiofb/FB-f-Logo__blue_29.png" alt="Yubio på Facebook"></img></a></h3>');
    // resultContainer.append(facebookLink);

    var filterContainer = $('<div id="filterContainer" class="input-group"> <span id="filterInfo" class="input-group-addon">Filter</span></div>');
    filterContainer.append('<input id="filter" type="text" class="form-control" placeholder="Filtrer...">');
    scoresContainer.append(filterContainer);

    $('#filterInfo').css('background', ' #EA661E')
    $('#filterInfo').css('color', ' #ffffff')
        $('#filter').keyup(function () {

        var rex = new RegExp($(this).val(), 'i');
        $('.searchable tr').hide();
        $('.searchable tr').filter(function () {
            return rex.test($(this).text());
        }).each(function(index, element) {
			var cell = $(element).find('td:first');
			if(cell) {
				cell[0].innerHTML = index+1;
            }
		}).show();

    });

    scoresContainer.append(myHighScoreTable);
}
