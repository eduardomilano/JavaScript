"use strict";
//Operadores Matemáticos

let a = 1;
let b = 2;
let c = 10;
let res = a + b + c;

console.log("Resultado da soma: " + res); //Soma
console.log("Resultado da subtração: " + (c - b)); //Subtração
console.log("Resultado da multiplicação: " + (b * c)); //Multiplicação
console.log("Resultado da divisão: " + (c / b)); //Divisão
console.log("Resto da divisão: " + (c % b)); //Módulo
console.log("O termo b acrescido de 1 é: " + (++b));//Incremento
console.log("O termo c decrementado de 1 é: " + (--c));//Decremento

//Precedência de operadores
res = a + b * c; //Multiplicação tem precedência sobre a soma
console.log("Resultado da expressão a + b * c é: " + res);
res = (a + b) * c; //Parênteses alteram a precedência
console.log("Resultado da expressão (a + b) * c é: " + res);