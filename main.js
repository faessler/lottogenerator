// EUROMILLIONS
// NUMBER
var emArrNr = []
while(emArrNr.length < 5){
    var randomnumber = Math.ceil(Math.random()*50);
    if(emArrNr.indexOf(randomnumber) > -1) continue;
    emArrNr[emArrNr.length] = randomnumber;
}
var emnumbers = document.getElementsByClassName("em__numbers__nr");
for(var i = 0; i < emnumbers.length; i++){
	var randomNr = emArrNr[i];
	emnumbers[i].innerHTML = randomNr;
}

// STARS
var emArrStar = []
while(emArrStar.length < 2){
    var randomnumber = Math.ceil(Math.random()*12);
    if(emArrStar.indexOf(randomnumber) > -1) continue;
    emArrStar[emArrStar.length] = randomnumber;
}
var emnumbers = document.getElementsByClassName("em__stars__wrap__nr");
for(var i = 0; i < emnumbers.length; i++){
	var randomNr = emArrStar[i];
	emnumbers[i].innerHTML = randomNr;
}



// SWISS LOTTO
// NUMBER
var slArrNr = []
while(slArrNr.length < 6){
    var randomnumber = Math.ceil(Math.random()*42);
    if(slArrNr.indexOf(randomnumber) > -1) continue;
    slArrNr[slArrNr.length] = randomnumber;
}
var emnumbers = document.getElementsByClassName("sl__numbers__nr");
for(var i = 0; i < emnumbers.length; i++){
	var randomNr = slArrNr[i];
	emnumbers[i].innerHTML = randomNr;
}

// STARS
var slArrExtra = []
while(slArrExtra.length < 1){
    var randomnumber = Math.ceil(Math.random()*12);
    if(slArrExtra.indexOf(randomnumber) > -1) continue;
    slArrExtra[slArrExtra.length] = randomnumber;
}
var emnumbers = document.getElementsByClassName("sl__extra__nr");
for(var i = 0; i < emnumbers.length; i++){
	var randomNr = slArrExtra[i];
	emnumbers[i].innerHTML = randomNr;
}
