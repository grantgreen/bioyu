var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;


OrderProvider = function (db) {
    this.db = db;
}

//getCollection
OrderProvider.prototype.getCollection = function (callback) {
    this.db.createCollection('orders', function (error, order_collection) {
		if (error) callback(error);
		else callback(null, order_collection);
    });
};

//findAll
OrderProvider.prototype.findAll = function (callback) {
    this.getCollection(function (error, order_collection) {
		if (error) callback(error);
		else {
            order_collection.find().toArray(function (error, results) {
				if (error) callback(error);
				else callback(null, results);
            });
		}
    });
};


//findById
OrderProvider.prototype.findById = function (id, callback) {
    this.getCollection(function (error, order_collection) {
		if (error) callback(error)
		else {
            order_collection.findOne({ _id: order_collection.db.bson_serializer.ObjectID.createFromHexString(id) }, function (error, result) {
				if (error) callback(error)
				else callback(null, result)
            });
		}
    });
};

//findByFromDate
OrderProvider.prototype.findFromDate = function (date, callback) {
    this.getCollection(function (error, order_collection) {
		if (error) callback(error)
		else {
			order_collection.find({ orderDate: { $gt: date } }).toArray(function (error, result) {
				if (error) callback(error)
				else callback(null, result)
            });
		}
    });
}


//save
OrderProvider.prototype.save = function (order, callback) {
    if (!order.product || !order.EAN) {
        callback("Invalid order!");
    }
    this.getCollection(function (error, order_collection) {
		if (error) callback(error)
		else {
			var orderDate = Date.now();
            order_collection.insert({
				'product': order.product,
				'duration': order.duration,
				'license': order.license,
				'organization': order.organization,
				'address': order.address,
				'postalcode': order.postalcode,
				'EAN': order.EAN,
				'CVR': order.CVR,
				'email': order.email,
				'comments': order.comments,
				'teacherIssue': order.teacherIssue,
				'orderDate': orderDate
			}, function (error) {
				if (error) {
					callback(error);
				}
				else {

					var subject = "Ny yubio bestilling til " + order.organization;

					bodyHeader = "Hej yubio";
					bodyHeader += "\\n\\nJeg vil hermed gerne bestille yubio i nedenstående konfiguration:";
					body = "\\n\\nProdukt: " + order.product;

					if (order.teacherIssue == "false") {
						body += "\\nVarighed: " + order.duration;
						body += "\\nLicens: " + order.license;
					}

					body += "\\nUddannelsesinstitution: " + order.organization;
					body += "\\nAdresse: " + order.address;
					body += "\\nPostnr: " + order.postalcode;
					body += "\\nEAN-nummer: " + order.EAN;
					body += "\\nCVR-nummer: " + order.CVR;
					body += "\\nKontaktpersons email: " + order.email;

                    body += "\\nKommentarer: " + order.comments;
                    body += "\\nOrdredato: " + new Date(orderDate);

					var recipients = "frederikleth@gmail.com,kontakt.yubio@gmail.com";


					var sys = require('sys');

					var exec = require('child_process').exec;
					exec('/home/yubio/tools/sendordermail.sh "' + subject + '" "' + bodyHeader + body + '" "' + recipients + '"', function (error, stdout, stderr) {
						//		    exec('echo "' + body + '"', function(error, stdout, stderr) {
						if (error) {
							console.log("Fejl: " + stderr);
						}
						else {
							var subject = "Ordrebekræftelse Yubio";
							var ackBody = "Tak for din bestilling. Ordren vil blive ekspederet hurtigst muligt, og du hører nærmere.\\n\\n";
							ackBody += "Besvarelse af denne mail læses ikke. Men hvis der er behov for det, kan du kontakte os på tlf. 30252300 eller via mail til kontakt.yubio@gmail.com.\\n\\n";
							ackBody += "Dine oplysninger ses nedenfor: \\n\\n" + body;
							exec('/home/yubio/tools/sendordermail.sh "' + subject + '" "' + ackBody + '" "' + order.email + '"', function (error, stdout, stderr) {
								if (error) {
									console.log("Fejl: " + stderr);
								}
								else {
									console.log(stdout);
								}
							});


							console.log(stdout);
						}
					});


					callback(null, order);
				}
            });
		}
    });
};

exports.OrderProvider = OrderProvider;