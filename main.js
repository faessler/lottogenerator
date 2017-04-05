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
