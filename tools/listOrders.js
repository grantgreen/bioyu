#!/usr/bin/env node

//var os = require('os');
//var fs = require('fs');

var MongoClient = require('mongodb').MongoClient

var OrderProvider = require('../model/OrderProvider').OrderProvider;

var sessions = {};  

var orderProvider;

MongoClient.connect('mongodb://127.0.0.1:27017/yubio', function(err, db) {
    if(err) throw err;
    orderProvider = new OrderProvider(db);
    listOrders(orderProvider);
});

var listOrders = function(orderProvider) {
    var days = process.argv[2];
    var date = Date.now() - (days * 24 * 60 * 60 * 1000);
    orderProvider.findFromDate(date, function(error, orders) {
        if(error) {
            console.log("Error when retrieving orders");
            process.exit(0);
        }
        else {
            var mailStr = '';
            orders.forEach(function(order, index, arr) {
                mailStr += "##########\\nOrdre nr.: " +  (index + 1);
                mailStr += "\\nProdukt: " +  order.product;
                mailStr += "\\nVarighed: " + order.duration;
                mailStr += "\\nLicens: " + order.license;
                mailStr += "\\nOrganisation: " + order.organization;
                mailStr += "\\nAdresse: " + order.address;
                mailStr += "\\nPostnr: " + order.postalcode;
                mailStr += "\\nEAN: " + order.EAN;
                mailStr += "\\nemail: " + order.email;
                mailStr += "\\nKommentater: " + order.comments;
                mailStr += "\\nOrdredato: " + new Date(order.orderDate);
                if(index < (arr.length-1)) {
                    mailStr += "\\n";
                }
            });
            console.log(mailStr);

            var sys = require('sys');
            var exec = require('child_process').exec;
            exec('/home/yubio/projects/yubio/tools/sendordermail.sh "' + mailStr + '"', function(error, stdout, stderr) {
                if(error) {
                    console.log("Fejl: " + stderr);
		    process.exit(0);
                }
                else {		
                    console.log("hej" + stdout);
		    process.exit(0);
                }
            });
	}
    });
}
