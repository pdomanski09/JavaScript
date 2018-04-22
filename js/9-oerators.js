'use strict';

//operatoty

var liczba1 = 13, liczba2 = 5;
var wynik;

wynik = liczba1 % liczba2;
console.log(--wynik);

wynik = wynik + 3;
//ten sam zapis tylko skrócony
wynik += 3;
console.log(wynik);

//operatory porównania
if (wynik = 3) {
	console.log("PRAWDA");
} else {
	console.log("FAŁSZ");
}

//operator przyrównania
if ("2" === 2) {
	console.log("PRAWDA");
} else {
	console.log("Nie prawda");
}


//operatory logiczne
//! jest zaprzeczeniem
//&& jest iloczynem
if (!(("2" !== 2) && (8 < 4))) {
	document.write("Prawda");
} else {
	document.write("Fałsz");
}

//terrary
(3>2) ? console.log("prawda") : console.log("fałsz");