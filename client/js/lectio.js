
function ParseLectio(callback) {
  $.ajax({
    url: "http://www.yubio.dk:10001/classes"
    }).done(function( myBooks ){
         callback(myBooks);
    }).fail(function(jqXHR, textStatus) {
    alert( "Request failed: " + textStatus );
    });

};