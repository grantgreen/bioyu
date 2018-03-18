'use strict';
var http = require('http');
var request = require('request');
var express = require('express');
var cheerio = require('cheerio');
var port = process.env.PORT || 1337;
var app = express();


var parse = function() {

    var url = 'https://www.lectio.dk/lectio/login_list.aspx';

    request(url, function (error, response, html) {
        if (!error) {
            var split = response.body.split("<div class=\"buttonHeader textLeft \">");
            for (var i = 1; i < split.length; i++) {
                var name = split[i].match(/>(.*)<\/a/);
                var id = split[i].match(/\d+\.?\d*/g);

                var school = { id: id[0], name: name[1] };
                request("https://www.lectio.dk/lectio/" + school.id + "/FindSkema.aspx?type=hold",
                    function (error, response, html) {
                        if (!error) {

                            var split = response.body.split("m_Content_listecontainer");
                            var last = split[split.length - 1];
                            var hold = last.split("<li>");
                            for (var j = 1; j < hold.length; j++) {
                                var match = hold[j].match(/span class='findskema-symbol'>(\w+)<\/span/);
                                if (match == null) continue;
                                var subject = match[1];
                                if (subject !== "BI") continue;

                                var url = hold[j].match(/'(.*)'></)[1];

                                request("https://www.lectio.dk" + url,
                                    function (error, response, html) {
                                        var schoolId = response.req._header.match(/\/lectio\/(.*)\/FindSkema/)[1];
                                        var split = response.body.split("m_Content_listecontainer");
                                        var last = split[split.length - 1];
                                        var team = last.split("<li>");
                                        for (var k = 1; k < team.length; k++) {
                                            var id = team[k].match(/holdelementid=(.*)'>(.*)<\/a/)[1];
                                            var name = team[k].match(/holdelementid=(.*)'>(.*)<\/a/)[2];

                                            var url = "https://www.lectio.dk/lectio/" + schoolId + "/studieplan/hold_undervisningsbeskrivelse.aspx?holdelementid=" + id;

                                            request(url, function (error, response, html) {
                                                var schoolId = response.req._header.match(/\/lectio\/(.*)\/studieplan/)[1];
                                                var hasYubio = response.body.toLowerCase().indexOf("yubio") > -1;
                                                console.log(schoolId + " has yubio " + hasYubio);
                                            });
                                        }
                                    });
                            }

                        }
                    }, school);
                if (i > 2) return;
                setTimeout(function () { }, 100);
            }
        }
    });
};