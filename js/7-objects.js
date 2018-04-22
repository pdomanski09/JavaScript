'use strict';

//deklarujemy zmienne do obiektu

var kaja = {
	imie: "Kaja",
	wzrost: 152,
	przedstawOsobe: function(){
		console.log("Ten obiekt ma na imię: " + this.imie);
	}
}

//this wskazuje na konkretny obiekt - pokazuje dokładnie "ten" "konkretny"

var krystian = {
	imie: "Krystian",
	wzrost: 180,
	przedstawOsobe: function() {
		console.log("Ten obiekt ma na imię: " + this.imie);
	}
}


//wywołanie funkcji

kaja.przedstawOsobe();
krystian.przedstawOsobe();


console.log(kaja.wzrost);
console.log(kaja);