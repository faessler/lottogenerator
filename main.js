// ============================== //
// SWITCHER //
// ============================== //
// SWITCHER FUNCTIONS
function euroMillions() {
	$("body").removeClass().addClass("euromillions");
}
function swissLotto() {
	$("body").removeClass().addClass("swisslotto");
}
function legalNotice() {
	$("body").removeClass().addClass("legalnotice");
}

// HASH REQUEST
if(window.location.href.indexOf("#euromillions") > -1) {
   euroMillions();
}
euroMillions(); // default
if(window.location.href.indexOf("#swisslotto") > -1) {
   swissLotto();
}
if(window.location.href.indexOf("#legalnotice") > -1) {
   legalNotice();
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

	// Fill in Numbers
	$("." + classListener + "__row").each(function(){
		shuffle(numbers);
		var emNumbers = $(this).find("." + classListener + "__numbers__nr");
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

	// Fill in Numbers
	$("." + classListener + "__row").each(function(){
		shuffle(numbers);
		var emNumbers = $(this).find("." + classListener + "__stars__wrap__nr");
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
		shuffle(numbers);
		var emNumbers = $(this).find("." + classListener + "__extra__nr");
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



// ============================== //
// ADD NEW //
// ============================== //
function addNewNumbers(classListener, mainHighestNumber, mainNeededNumbers, extraHighestNumber, extraNeededNumbers) {

	// Euromillions
	if (classListener == "em") {
		$("." + classListener + "__row__wrap").append("\
		<div class='" + classListener + "__row'>\
			<div class='" + classListener + "__numbers'>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--1'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--2'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--3'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--4'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--5'>0</span>\
			</div>\
			<div class='" + classListener + "__stars'>\
				<span class='" + classListener + "__stars__wrap'>\
					<span class='" + classListener + "__stars__wrap__nr " + classListener + "__stars__wrap__nr--1'>0</span>\
				</span>\
				<span class='" + classListener + "__stars__wrap'>\
					<span class='" + classListener + "__stars__wrap__nr " + classListener + "__stars__wrap__nr--2'>0</span>\
				</span>\
			</div>\
		</div>\
		");

		// Main Numbers
		var numbers = [];
		for (var i = 0; i < mainHighestNumber; i++) {
			numbers[i] = i+1;
		}
		// Fill in Numbers
		var emNumbers = $("." + classListener + "__row:last").find("." + classListener + "__numbers__nr");
		shuffle(numbers);
		shuffle(numbers);
		var selectedNumbers = [];
		for (var i = 0; i < emNumbers.length; i++) {
			selectedNumbers[i] = numbers[i];
		}
		selectedNumbers.sort(function(a, b){return a - b});
		for (var i = 0; i < selectedNumbers.length; i++) {
			emNumbers[i].innerHTML = selectedNumbers[i];
		}

		// Extra Numbers
		var numbers = [];
		for (var i = 0; i < extraHighestNumber; i++) {
			numbers[i] = i+1;
		}
		// Fill in Numbers
		var emNumbers = $("." + classListener + "__row:last").find("." + classListener + "__stars__wrap__nr");
		shuffle(numbers);
		var selectedNumbers = [];
		for (var i = 0; i < emNumbers.length; i++) {
			selectedNumbers[i] = numbers[i];
		}
		selectedNumbers.sort(function(a, b){return a - b});
		for (var i = 0; i < selectedNumbers.length; i++) {
			emNumbers[i].innerHTML = selectedNumbers[i];
		}
	}

	// Swisslotto
	if (classListener == "sl") {
		$("." + classListener + "__row__wrap").append("\
		<div class='" + classListener + "__row'>\
			<div class='" + classListener + "__numbers'>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--1'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--2'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--3'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--4'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--5'>0</span>\
				<span class='" + classListener + "__numbers__nr " + classListener + "__numbers__nr--6'>0</span>\
			</div>\
			<div class='" + classListener + "__extra'>\
				<span class='" + classListener + "__extra__nr " + classListener + "__extra__nr--1'>0</span>\
			</div>\
		</div>\
		");

		// Main Numbers
		var numbers = [];
		for (var i = 0; i < mainHighestNumber; i++) {
			numbers[i] = i+1;
		}
		// Fill in Numbers
		var emNumbers = $("." + classListener + "__row:last").find("." + classListener + "__numbers__nr");
		shuffle(numbers);
		shuffle(numbers);
		var selectedNumbers = [];
		for (var i = 0; i < emNumbers.length; i++) {
			selectedNumbers[i] = numbers[i];
		}
		selectedNumbers.sort(function(a, b){return a - b});
		for (var i = 0; i < selectedNumbers.length; i++) {
			emNumbers[i].innerHTML = selectedNumbers[i];
		}

		// Extra Numbers
		var numbers = [];
		for (var i = 0; i < extraHighestNumber; i++) {
			numbers[i] = i+1;
		}
		// Fill in Numbers
		var emNumbers = $("." + classListener + "__row:last").find("." + classListener + "__extra__nr");
		shuffle(numbers);
		var selectedNumbers = [];
		for (var i = 0; i < emNumbers.length; i++) {
			selectedNumbers[i] = numbers[i];
		}
		selectedNumbers.sort(function(a, b){return a - b});
		for (var i = 0; i < selectedNumbers.length; i++) {
			emNumbers[i].innerHTML = selectedNumbers[i];
		}
	}
}
