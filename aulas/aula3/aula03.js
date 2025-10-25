"use strict";
//Variáveis

//No JS, existem três formas principais de declarar variáveis: var, let e const.

var nome = "João";
let idade = 25;
const altura = 1.75;
console.log("Esse é o " + nome + ", ele tem " + idade + " anos e " + altura + " metros de altura.");

//Declaração múltipla
var a, b, c;

//Atribuição múltipla
a = 1;
b = 2;
c = a + b;
console.log(c); // 3
/*
Ao usar o var, a variavel pode ser redeclarada e atualizada dentro do mesmo escopo. Já o let não permite redeclaração no mesmo escopo, mas permite atualização. Ou seja, dentro de um bloco a variavel var pode ser declarada fora dele, enquanto o let não pode.O const é usado para declarar constantes, ou seja, valores que não podem ser alterados após a atribuição inicial.
*/