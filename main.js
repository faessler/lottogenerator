// ============================== //
// SWITCHER //
// ============================== //
// SWITCHER FUNCTIONS
function euroMillions() {
	$("body").removeClass("swisslotto").addClass("euromillions");
}
function swissLotto() {
	$("body").removeClass("euromillions").addClass("swisslotto");
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
// SHUFFLE FUNCTION
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

// GETNUMBERS FUNCTION
function getNumbers(classListener, mainHighestNumber, mainNeededNumbers, extraHighestNumber, extraNeededNumbers) {
	// Main Numbers
	var numbers = [];
	for (var i = 0; i < mainHighestNumber; i++) {
		numbers[i] = i+1;
	}
	shuffle(numbers);
	console.log(numbers);

	// Fill in Numbers
	$("." + classListener + "__row").each(function(){
		var emNumbers = document.getElementsByClassName(classListener + "__numbers__nr");
		var selectedNumbers = [];
		for (var i = 0; i < emNumbers.length; i++) {
			selectedNumbers[i] = numbers[i];
		}
		selectedNumbers.sort(function(a, b){return a - b});
		for (var i = 0; i < selectedNumbers.length; i++) {
			emNumbers[i].innerHTML = selectedNumbers[i];
		}
	});


	// Extra Numbers
	var numbers = [];
	for (var i = 0; i < extraHighestNumber; i++) {
		numbers[i] = i+1;
	}
	shuffle(numbers);
	console.log(numbers);

	// Fill in Numbers
	$("." + classListener + "__row").each(function(){
		var emNumbers = document.getElementsByClassName(classListener + "__stars__wrap__nr");
		var selectedNumbers = [];
		for (var i = 0; i < emNumbers.length; i++) {
			selectedNumbers[i] = numbers[i];
		}
		selectedNumbers.sort(function(a, b){return a - b});
		for (var i = 0; i < selectedNumbers.length; i++) {
			emNumbers[i].innerHTML = selectedNumbers[i];
		}
	});

	// Fill in Numbers
	$("." + classListener + "__row").each(function(){
		var emNumbers = document.getElementsByClassName(classListener + "__extra__nr");
		var selectedNumbers = [];
		for (var i = 0; i < emNumbers.length; i++) {
			selectedNumbers[i] = numbers[i];
		}
		selectedNumbers.sort(function(a, b){return a - b});
		for (var i = 0; i < selectedNumbers.length; i++) {
			emNumbers[i].innerHTML = selectedNumbers[i];
		}
	});
}

// Call the Numbers
getNumbers('em', 50, 5, 12, 2);
getNumbers('sl', 42, 6, 6, 1);


// var emNumbers = document.getElementsByClassName("sl__numbers__nr");
// var selectedNumbers = [];
// for (var i = 0; i < emNumbers.length; i++) {
// 	selectedNumbers[i] = numbers[i];
// }
// selectedNumbers.sort(function(a, b){return a - b});
// for (var i = 0; i < selectedNumbers.length; i++) {
// 	emNumbers[i].innerHTML = selectedNumbers[i];
// }


// function shuffle() {
// 	// CREATE SHUFFLE FUNCTION
// 	function shuffle(a) {
// 	    var j, x, i;
// 	    for (i = a.length; i; i--) {
// 	        j = Math.floor(Math.random() * i);
// 	        x = a[i - 1];
// 	        a[i - 1] = a[j];
// 	        a[j] = x;
// 	    }
// 	}
//
// 	// EUROMILLIONS
// 	// NUMBER
// 	var numbers = [];
// 	for (var i = 0; i < 50; i++) {
// 		numbers[i] = i+1;
// 	}
// 	shuffle(numbers);
//
// 	var emNumbers = document.getElementsByClassName("em__numbers__nr");
// 	var selectedNumbers = [];
// 	for (var i = 0; i < emNumbers.length; i++) {
// 		selectedNumbers[i] = numbers[i];
// 	}
// 	selectedNumbers.sort(function(a, b){return a - b});
// 	for (var i = 0; i < selectedNumbers.length; i++) {
// 		emNumbers[i].innerHTML = selectedNumbers[i];
// 	}


// 	// STARS
// 	var numbers = [];
// 	for (var i = 0; i < 12; i++) {
// 		numbers[i] = i+1;
// 	}
// 	shuffle(numbers);
//
// 	var emStars = document.getElementsByClassName("em__stars__wrap__nr");
// 	var selectedNumbers = [];
// 	for (var i = 0; i < emStars.length; i++) {
// 		selectedNumbers[i] = numbers[i];
// 	}
// 	selectedNumbers.sort(function(a, b){return a - b});
// 	for (var i = 0; i < selectedNumbers.length; i++) {
// 		emStars[i].innerHTML = selectedNumbers[i];
// 	}
//
//
// 	// SWISS LOTTO
// 	// NUMBER
// 	var numbers = [];
// 	for (var i = 0; i < 42; i++) {
// 		numbers[i] = i+1;
// 	}
// 	shuffle(numbers);
//
// 	var slNumbers = document.getElementsByClassName("sl__numbers__nr");
// 	var selectedNumbers = [];
// 	for (var i = 0; i < slNumbers.length; i++) {
// 		selectedNumbers[i] = numbers[i];
// 	}
// 	selectedNumbers.sort(function(a, b){return a - b});
// 	for (var i = 0; i < selectedNumbers.length; i++) {
// 		slNumbers[i].innerHTML = selectedNumbers[i];
// 	}
//
//
// 	// EXTRA NUMBER
// 	var numbers = [];
// 	for (var i = 0; i < 6; i++) {
// 		numbers[i] = i+1;
// 	}
// 	shuffle(numbers);
//
// 	var slExtraNumber = document.getElementsByClassName("sl__extra__nr");
// 	var selectedNumbers = [];
// 	for (var i = 0; i < slExtraNumber.length; i++) {
// 		selectedNumbers[i] = numbers[i];
// 	}
// 	selectedNumbers.sort(function(a, b){return a - b});
// 	for (var i = 0; i < selectedNumbers.length; i++) {
// 		slExtraNumber[i].innerHTML = selectedNumbers[i];
// 	}
// }
// shuffle();



// ============================== //
// ADD NEW //
// ============================== //
function addNew() {
	var bodyClass = document.getElementsByTagName("body")[0].className;
	if (bodyClass == "euromillions") {
		$(".em__row__wrap").append("<div class='em__row'>\
		<div class='em__numbers'><span class='em__numbers__nr em__numbers__nr--1'>0</span>\
		<span class='em__numbers__nr em__numbers__nr--2'>0</span>\
		<span class='em__numbers__nr em__numbers__nr--3'>0</span>\
		<span class='em__numbers__nr em__numbers__nr--4'>0</span>\
		<span class='em__numbers__nr em__numbers__nr--5'>0</span>\
		</div>\
		<div class='em__stars'>\
		<span class='em__stars__wrap'>\
		<span class='em__stars__wrap__nr em__stars__wrap__nr--1'>0</span>\
		</span>\
		<span class='em__stars__wrap'>\
		<span class='em__stars__wrap__nr em__stars__wrap__nr--2'>0</span>\
		</span>\
		</div>\
		</div>");

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
