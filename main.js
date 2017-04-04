// ============================== //
// SWITCHER //
// ============================== //
// SWITCHER FUNCTIONS
function euroMillions() {
	document.getElementsByTagName("body")[0].className = "euromillions";
}
function swissLotto() {
	document.getElementsByTagName("body")[0].className = "swisslotto";
}

// HASH REQUEST
if(window.location.href.indexOf("#euromillions") > -1) {
   euroMillions();
}
euroMillions(); // default
if(window.location.href.indexOf("#swisslotto") > -1) {
   swissLotto();
}



// ============================== //
// SHUFFLE //
// ============================== //
function shuffle() {
	// CREATE SHUFFLE FUNCTION
	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}

	// EUROMILLIONS
	// NUMBER
	var numbers = [];
	for (var i = 0; i < 50; i++) {
		numbers[i] = i+1;
	}
	shuffle(numbers);

	var emNumbers = document.getElementsByClassName("em__numbers__nr");
	var selectedNumbers = [];
	for (var i = 0; i < emNumbers.length; i++) {
		selectedNumbers[i] = numbers[i];
	}
	selectedNumbers.sort(function(a, b){return a - b});
	for (var i = 0; i < selectedNumbers.length; i++) {
		emNumbers[i].innerHTML = selectedNumbers[i];
	}


	// STARS
	var numbers = [];
	for (var i = 0; i < 12; i++) {
		numbers[i] = i+1;
	}
	shuffle(numbers);

	var emStars = document.getElementsByClassName("em__stars__wrap__nr");
	var selectedNumbers = [];
	for (var i = 0; i < emStars.length; i++) {
		selectedNumbers[i] = numbers[i];
	}
	selectedNumbers.sort(function(a, b){return a - b});
	for (var i = 0; i < selectedNumbers.length; i++) {
		emStars[i].innerHTML = selectedNumbers[i];
	}


	// SWISS LOTTO
	// NUMBER
	var numbers = [];
	for (var i = 0; i < 42; i++) {
		numbers[i] = i+1;
	}
	shuffle(numbers);

	var slNumbers = document.getElementsByClassName("sl__numbers__nr");
	var selectedNumbers = [];
	for (var i = 0; i < slNumbers.length; i++) {
		selectedNumbers[i] = numbers[i];
	}
	selectedNumbers.sort(function(a, b){return a - b});
	for (var i = 0; i < selectedNumbers.length; i++) {
		slNumbers[i].innerHTML = selectedNumbers[i];
	}


	// EXTRA NUMBER
	var numbers = [];
	for (var i = 0; i < 6; i++) {
		numbers[i] = i+1;
	}
	shuffle(numbers);

	var slExtraNumber = document.getElementsByClassName("sl__extra__nr");
	var selectedNumbers = [];
	for (var i = 0; i < slExtraNumber.length; i++) {
		selectedNumbers[i] = numbers[i];
	}
	selectedNumbers.sort(function(a, b){return a - b});
	for (var i = 0; i < selectedNumbers.length; i++) {
		slExtraNumber[i].innerHTML = selectedNumbers[i];
	}
}
shuffle();



// ============================== //
// ADD NEW //
// ============================== //
function addNew() {
	var bodyClass = document.getElementsByTagName("body")[0].className;
	if (bodyClass == "euromillions") {
		var createNew = document.createElement("DIV");
		var contentNew = document.createTextNode("Damn it CARL! -> euromillions");
		createNew.className = "em__row";
		createNew.appendChild(contentNew);

		document.body.appendChild(createNew);
		document.getElementsByClassName("em__row__wrap")[0].appendChild(createNew);
	}
	if (bodyClass == "swisslotto") {
		var createNew = document.createElement("DIV");
		var contentNew = document.createTextNode("Damn it CARL! -> swisslotto");
		createNew.className = "sl__row";
		createNew.appendChild(contentNew);

		document.body.appendChild(createNew);
		document.getElementsByClassName("sl__row__wrap")[0].appendChild(createNew);
	}
}















//
