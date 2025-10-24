"use strict";
//Condições

let a = 10;

if (a > 5 ){
  console.log(a + " é maior que 5");
}else if (a < 10){
  console.log(a + " é menor que 10");
}else{
    console.log(a + " é igual a 10");
}
console.log("Fim do programa");

let colocacao = 1;

// Usando switch case
switch (colocacao) {
    case 1:
        console.log("Primeiro lugar");
        break;
    case 2:
        console.log("Segundo lugar");
        break;
    case 3:
        console.log("Terceiro lugar");
        break;
    default:
        console.log("Colocação não premiada");
        break;
}