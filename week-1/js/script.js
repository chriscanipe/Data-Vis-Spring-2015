

var theData;

$(document).ready(function() {
    getData();
});


function getData() {

	//AJAX call to retreive our JSON data
	$.getJSON("js/baseballcard.json", function(data) {
		theData = data;
	});
}






