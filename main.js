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
	slNumbers[i].innerHTML = selectedNumbers[i];
}

// STARS
var numbers = [];
for (var i = 0; i < 12; i++) {
	numbers[i] = i+1;
}
shuffle(numbers);

var slExtraNumber = document.getElementsByClassName("sl__extra__nr");
var selectedNumbers = [];
for (var i = 0; i < slExtraNumber.length; i++) {
	selectedNumbers[i] = numbers[i];
	slExtraNumber[i].innerHTML = selectedNumbers[i];
}
