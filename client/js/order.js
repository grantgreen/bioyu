var initOrder = function() {
    var elements = [
	$("#yubio_a"),
	$("#teacherA"),
	$("#yubio_b"),
	$("#teacherB"),
	$("#yubio_c"),
	$("#teacherC"),
	$("#sport")
    ];


    elements.forEach(function(changedElement) {
	changedElement.change(function(x) {
	    if(x.target.checked == true) {
		elements.forEach(function(e, index) {
		    if(e.selector == changedElement.selector) return;
		    e.prop('disabled', 'true');
		    e.removeAttr('checked');
		});

		if(changedElement.selector.indexOf("#teacher") != -1) {
		    $(".duration").prop('disabled', 'true');
		    $(".license").prop('disabled', 'true');
	    
		    $(".license").removeAttr('checked');
		    $(".duration").removeAttr('checked');
		}

		if(changedElement.selector == "#yubio_a" || changedElement.selector == "#sport") {
		    $(".licenseBC").prop('disabled', 'true');
		    $(".licenseBC").removeAttr('checked');
		    $(".licenseA").removeAttr('disabled');
		}
		else if(changedElement.selector == "#yubio_b" || changedElement.selector == "#yubio_c") {
		    $(".licenseBC").removeAttr('disabled');
		    $(".licenseA").prop('disabled', 'true');
		    $(".licenseA").removeAttr('checked');
		}
	    }
	    else {
		elements.forEach(function(e, index) {
		    if(e.selector == changedElement.selector) return;
		    e.removeAttr('disabled');
		    
		    if(changedElement.selector.indexOf("#teacher") != -1) {
			$(".duration").removeAttr('disabled');
			$(".license").removeAttr('disabled');
		    }
		});
	    }
	});
    });

    $("#accept").change(function(x) {
	if(x.target.checked == true) {
//	    $("#submit").removeAttr('disabled');
	    $("#submit").css('opacity', '1');
	    $("#submitnote").css('opacity', '1');
	}
	else {
//	    $("#submit").prop('disabled', 'true');
	    $("#submit").css('opacity', '0');
	    $("#submitnote").css('opacity', '0');
	}
    });

    $("#submit").bind("click", function(e) {
	// Do not submit
	e.preventDefault();

	$("#submit").attr('value', 'Bestiller...');

	var formValues = $('form').serializeArray();
	var formObject = {
	    'product': new Array(),
	    'duration': '',
	    'license': '',
	    'organization': '',
		'address': '',
		'postalcode': '',        
	    'EAN': '',
        'CVR': '',
	    'email': '',
	    'comments': '',
	    'teacherIssue': false
	};

	for(var i in formValues) {
	    switch(formValues[i].name) {
	    case "product":
		formObject.product.push(formValues[i].value);
		formObject.teacherIssue = formValues[i].value.indexOf('LÆREREKSEMPLAR') != -1;
		break;
	    case "duration":
		formObject.duration = formValues[i].value;
		break;
	    case "license":
		formObject.license = formValues[i].value;
		break;
	    case "organization":
		formObject.organization = formValues[i].value;
		break;
	    case "address":
		formObject.address = formValues[i].value;
		break;
	    case "postalcode":
		formObject.postalcode = formValues[i].value;
		break;
	    case "EAN":
		formObject.EAN = formValues[i].value;
		break;
	    case "CVR":
		formObject.CVR = formValues[i].value;
		break;
	    case "email":
		formObject.email = formValues[i].value;
		break;
	    case "comments":
		formObject.comments = formValues[i].value;
		break;		
	    }
	}

	var checkValidity = function(formObject, callback) {
	    var errorMsg = '';
	    if(formObject.product.length == 0) {
		errorMsg += "Produkt er ikke udfyldt\n";
	    }
	    if(!formObject.teacherIssue && formObject.duration == '') {
		errorMsg += "Varighed er ikke udfyldt\n";
	    }
	    if(!formObject.teacherIssue && formObject.license == '') {
		errorMsg += "Licenstype er ikke udfyldt\n";
	    }
	    if(formObject.organization == '') {
		errorMsg += "Uddannelsesinstitution er ikke udfyldt\n";
	    }
	    if(formObject.address == '') {
		errorMsg += "Adresse er ikke udfyldt\n";
	    }
	    if(formObject.postalcode == '') {
		errorMsg += "Postnr er ikke udfyldt\n";
	    }
	    if(formObject.email == '') {
		errorMsg += "Email er ikke udfyldt\n";
	    }
	    if(!(/.*@.*\..*/.test(formObject.email))) {
		errorMsg += "Email er ikke udfyldt korrekt\n";
	    }
	    if(errorMsg != '') {
		alert(errorMsg);
		$("#submit").attr('value', 'Bestil');
		callback("Some fields were not valid!")
	    }
	    else {
		callback();
	    }
	}

	checkValidity(formObject, function(error) {
	    if(error) {
		return;
	    }
	    else {
		//saveOrder(formObject, function(error, o) {
		//    if(error) {
		//	alert('Der er opstået en fejl. Prøv igen eller kontakt os på  tlf. 30252300 eller via mail til kontakt.yubio@gmail.com');
		//	$("#submit").attr('value', 'Fejl ved bestiling');
		//    }
		//    else {
		//	alert('Bestilling sendt');
		//	$("#submit").attr('value', 'Bestilt');
		//    }
		//});	    
	    }
	});

	var mailto = generateMail(formObject, function(result, mailto) {
	    
	    window.location.href = mailto;
	});

    });
}

var saveOrder = function(orderData, callback) {
    orderData.product = orderData.product.toString();
    $.ajax({
	url: "/saveOrder.json",
	data: orderData
    }).done(function( o ) {
	callback(null, o);
    }).fail(function(jqXHR, textStatus, errorThrown) {
	callback("Request failed: " + textStatus, null);
    });
}


var generateMail = function(formObject, callback) {
    var mailto = "mailto:kontakt.yubio@gmail.com?subject=Bestilling af yubio&body=";
    var body = "Hej yubio\n\n";
    body += "Jeg vil hermed gerne bestille yubio i nedenstående konfiguration:\n\n";
    body += "Produkt: " + formObject.product + "\n\n";
    
    if(!formObject.teacherIssue) {
	body += "Varighed: " + formObject.duration + "\n\n";
	body += "Licens: " + formObject.license + "\n\n";
    }
    
    body += "Uddannelsesinstitution: " + formObject.organization + "\n\n";
    body += "Adresse: " + formObject.address + "\n\n";
    body += "Postnr: " + formObject.postalcode + "\n\n";
    body += "EAN-nummer: " + formObject.EAN + "\n\n";
    body += "CVR-nummer: " + formObject.CVR + "\n\n";
    body += "Kontaktpersons email: " + formObject.email + "\n\n";
    body += "Jeg har læst og er indforstået med vilkårene, som findes her: http://www.yubio.dk/pdfs/vilkaar.pdf\n\n";
    
    body = encodeURIComponent(body);
    
    mailto += body;

    callback(null, mailto)
}
