   'use strict';

var wzrostOlgi = 190;
var wzrostMateusz = 190;
// warunek if

if ( wzrostOlgi < wzrostMateusz ) {
	console.log("Olga jest niższa");
} else {
	console.log("Olga jest wyższa");
}


//warunek if else if
if ( wzrostOlgi < wzrostMateusz ) {
	console.log("Olga jest wyższa");
} else if ( wzrostOlgi == wzrostMateusz) {
	console.log("Olga jest tak wysoka jak Mateusz")
} else {
	console.log("Olga jest wyższa");
}

//słicz

var kolor = "czerwony";

switch (kolor) {
	case 'czerwony':
		console.log("Kolor czerwony")
		break;
	case 'zielony':
		console.log("Kolor zielony")
		break;
	case 'niebieski':
		console.log('Kolor niebieski')
		break;
	default:
		console.log("Inny kolor")
}