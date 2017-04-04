// EUROMILLIONS
// NUMBER
var emnumbers = document.getElementsByClassName("em__numbers__nr");
for(var i = 0; i < emnumbers.length; i++){
	var randomNr = Math.floor(Math.random() * 50) + 1;
	emnumbers[i].innerHTML = randomNr;
}

// STARS
var emnumbers = document.getElementsByClassName("em__stars__wrap__nr");
for(var i = 0; i < emnumbers.length; i++){
	var randomNr = Math.floor(Math.random() * 12) + 1;
	emnumbers[i].innerHTML = randomNr;
}
