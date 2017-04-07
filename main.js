//  _    ___ _____ _____ ___    _  _ _   _ __  __ ___ ___ ___    ___ ___ _  _ ___ ___    _ _____ ___  ___
// | |  / _ \_   _|_   _/ _ \  | \| | | | |  \/  | _ ) __| _ \  / __| __| \| | __| _ \  /_\_   _/ _ \| _ \
// | |_| (_) || |   | || (_) | | .` | |_| | |\/| | _ \ _||   / | (_ | _|| .` | _||   / / _ \| || (_) |   /
// |____\___/_|_|  _|_| \___/_ |_|\_|\___/|_| _|_|___/___|_|_\  \___|___|_|\_|___|_|_\/_/ \_\_| \___/|_|_\
// | _ ) \ / /  _ | |/_\ | \| | | __(_)(_) __/ __| |  | __| _ \
// | _ \\ V /  | || / _ \| .` | | _| /--\\__ \__ \ |__| _||   /
// |___/ |_|    \__/_/ \_\_|\_| |_| /_/\_\___/___/____|___|_|_\
//


$('.lottoselect a, .legal a').click(function(e) {
	e.preventDefault();

	href = $(this).attr("href");

	// History Pushstate
	history.pushState('', 'New URL: '+href, href);




});



// ============================== //
// SWITCHER //
// ============================== //
// SWITCHER FUNCTIONS
function euroMillions() {
	$("body").removeClass().addClass("euromillions");

	// For Google-Analytics
	ga('set', 'page', '/#euromillions');
	ga('send', 'pageview');
}
function swissLotto() {
	$("body").removeClass().addClass("swisslotto");

	// For Google-Analytics
	ga('set', 'page', '/#swisslotto');
	ga('send', 'pageview');
}
function legalNotice() {
	$("body").removeClass().addClass("legalnotice");

	// For Google-Analytics
	ga('set', 'page', '/#impressum');
	ga('send', 'pageview');
}

// HASH REQUEST
if(window.location.href.indexOf("#euromillions") > -1) {
   euroMillions();
}
euroMillions(); // Default Function
if(window.location.hash == ''){
   window.location.hash = '#euromillions'; // Default Hash
}

// Default google-analytics
ga('set', 'page', '/#euromillions');
ga('send', 'pageview');

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
			<div class='" + classListener + "__remove remove'>\
				<button title='Zeile Entfernen'><span>&#10006;</span></button>\
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

		// Remove function for added rows
		$('.' + classListener + '__remove').click(function() {
			$(this).parent().remove();
		});

		// Scroll to bottom after click on the addnew button
		$(".container").scrollTop($('.' + classListener).height());
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
			<div class='" + classListener + "__remove remove'>\
				<button title='Zeile Entfernen'><span>&#10006;</span></button>\
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

		// Remove function for added rows
		$('.' + classListener + '__remove').click(function() {
			$(this).parent().remove();
		});

		// Scroll to bottom after click on the addnew button
		$(".container").scrollTop($('.' + classListener).height());
	}

	// Scroll to bottom of page after click on the addnew button
	$("html, body").scrollTop($(document).height());
}
