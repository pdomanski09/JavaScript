   'use strict';



//pętla for

for ( var i=10 ; i>0 ; i--) {
	console.log(i);
}

var tablica = ["Krystian", "Monika", "Danuta"];
for (var i=0; i<tablica.length; ++i) {
	console.log("Element z Indexem: " + i + "ma wartość " + tablica[i]);
}


//pętla foreach

tablica.forEach( function( element, index) {
	console.log( "Element z Indexem: " + index + " na wartość " + element);
});


//pętla while
var it = 0;
while ( it < 10 ) {
	console.log(it);
	it++;
}


////pętla do while
//var iter = 20;
//do {
//	console.log(iter);
//	iter++;
//	console.log(iter);
//}	while (iter < 10)
//	
	
//break przerywanie pętli
	
var a = 0;
while ( a < 10 ) {
	console.log(++a);
	if ( a == 5 ) {
		break;
	}
}

//przeskakiwanie do kolejnej iteracji
for (var b = 0; b < 10; ++b) {
	if (b==5) {
		continue;
	} else {
		console.log(b);
	}
	console.log("--");
}
