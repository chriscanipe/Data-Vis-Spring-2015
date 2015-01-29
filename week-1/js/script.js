

var theData;

console.log(theData);

getData();

function getData() {

	//AJAX call to retreive our JSON data
	$.getJSON("js/baseballcard.json", function(data) {
		theData = data;

		console.log(theData);
	});
}






