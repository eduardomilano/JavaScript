"use strict";
//Operadores lógicos

// && -> E (AND)
// || -> OU (OR)
// ! -> NÃO (NOT)

/*
Para o (&&) ser verdadeiro, todos os valores devem ser verdadeiros.
Se algum valor for falso, o resultado será falso. já para o (||) ser verdadeiro, basta que apenas um dos valores seja verdadeiro.
Se todos os valores forem falsos, o resultado será falso.
*/

let a = 10;
let b = 5;
let c = 15;
let d = 20;

console.log((a > b) && (c < d));
console.log((a > b) || (c > d)); 
 