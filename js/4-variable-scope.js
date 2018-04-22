    'use strict';

//deklaracja zmiennej globalnej
var wiekSeweryna = 22;

function multiply(l1, l2, l3) {
	//deklaracja zmiennej lokalnej
	var result =  l1 * l2 * l3;
	
	var wiekSeweryna = 33;
	//cosole.log pobiera ze zmiennej lokalnej
	console.log(wiekSeweryna);
	
	return result;
}
var wynikMnozenia = multiply(3,4,5);

//console.log pobiera ze zmiennej globalnej
console.log(wiekSeweryna);












//przypisujemy zmienną parametr 4
var parametr4 = 10;

//piszemy funkcję
function multiply(parametr1, parametr2, parametr3) {
	
	var result;
	var parametr4 = 5;
	var parametr5 = 666;
	
	result = parametr1 * parametr2 * parametr3 * parametr4
}