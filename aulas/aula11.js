// Aula 11 - Selecionando elementos no DOM

// document.getElementById()
const dc1 = document.getElementById("c1"); //seleciona um elemento pelo ID
console.log(dc1);

// document.getElementsByTagName()
const colecaoHTML = document.getElementsByTagName("div");//seleciona varios elementos pela tag(div, p, h1, etc)
console.log(colecaoHTML);

// document.getElementsByClassName()
const colecaoArray = document.getElementsByClassName("cc");//seleciona varios elementos pela classe
console.log(colecaoArray);

// document.querySelector()
const ds1 = document.querySelector("#s1");//seleciona o primeiro elemento que corresponder ao seletor CSS
console.log(ds1);

// document.querySelectorAll()
const dcolecao = document.querySelectorAll(".cc");//seleciona todos os elementos que correspondem ao seletor CSS
console.log(dcolecao);