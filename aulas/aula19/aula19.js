"use strict";

let n1 = parseInt(window.prompt("Digite um número:"))
let n2 = parseInt(window.prompt("Digite outro número:"))
let s = n1 + n2;
let m = n1 - n2;
let v = n1 * n2;
let d = n1 / n2;
let r = n1 % n2;
let e = n1 ** n2

alert("A soma é: " + s);
alert("A subtração é: " + m);
alert("A multiplicação é: " + v);
alert('A divisão è ' + d);
alert("E a média aritmética dos números são: " + s / 2);
alert(`O resto da divisão entre o numero ${n1} e o numero ${n2} é ${r}`);
alert(`O numero ${n1} elevado á ${n2} é ${e}`)