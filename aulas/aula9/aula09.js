"use strict";
//Break e Continue

let n=1
let max=100

while(n<=max){
    console.log(n)
    if(n>50){
        break //interrompe o laço se a condição for verdadeira
    }
    n++
}

console.log("Fim do primeiro laço")

for(let i=n;i<=max;i++){
    if(i%2===0){
        continue //pula a iteração se a condição for verdadeira
    }
    console.log(i)
}

console.log("Fim do segundo laço")