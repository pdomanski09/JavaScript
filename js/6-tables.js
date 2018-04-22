'use strict'

//deklarujemy tablice
var imiona = ["Monika", "Krystian", "Łukasz"];

//indeksujemy
imiona[3] = "Tania";
imiona[2] = "Ela";

console.log(imiona);


//dodawania za pomocą push
imiona.push("Gerald");

console.log(imiona);


//metoda pop wycina elementy z tablicy
imiona.pop();
imiona.pop();

console.log(imiona);


//dodawanie i odejmowanie
//unshift dodaje przed pierwszą pozycją w tablicy
console.log(imiona.unshift("Robert"));
console.log(imiona);

//shift usuwa pierwszą pozycję w tablicy
console.log(imiona.shift());
console.log(imiona);


//pobiera długość tablicy
console.log(imiona.length);


//łaczenie wartości w tablicach
console.log(imiona.join(""));
console.log(imiona.join(" "));
console.log(imiona.join(" :) "));



//metoda reverse odwraca kolejność
console.log(imiona.reverse());


//sort - metoda sortująca
console.log(imiona.sort());
//przyklad:
var liczby = [22, 33, 1, 3, 54, 21];
console.log(liczby.sort());
//sortuje alfabetycznie
var liczby = ["jeden", "trzy", "osiem", "siedem"];
console.log(liczby.sort());
//najpierw sortuje a potem odwraca kolejnosc
var liczby = ["jeden", "trzy", "osiem", "siedem"];
console.log(liczby.sort().reverse());