"use strict";
//Tipos de saída

let nome = "João";
console.log(nome);

/*
No JavaScript, existe o modo extrito, onde nao é possivel utilizar variaveis sem declará-las previamente. Isso ajuda a evitar erros comuns e torna o código mais seguro. Para ativar o modo estrito, basta adicionar a linha "use strict"; no início do arquivo ou da função.

*/

alert("Olá, " + nome + "! Seja bem-vindo ao JavaScript."); //Caixa de alerta
console.log("Olá, " + nome + "! Seja bem-vindo ao JavaScript."); //Saída no console
document.getElementById("texto").innerHTML = "Olá, " + nome + "! Seja bem-vindo ao JavaScript."; //Escreve no HTML