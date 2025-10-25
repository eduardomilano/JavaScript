"use strict";
//Funções

function soma() {
    let a = 2
    let b = 8
    console.log(a + b)
}

for (let i = 0; i < 5; i++) {
    soma()
}

//Função que retorna

function retorno(){
    return "Olá Mundo"
}
console.log(retorno())

//Função com parâmetros
function somaParametros(a, b){
    return a + b
}
console.log(somaParametros(5, 10))

//Função rest
function somaRest(...numeros){
    return numeros.length
}
console.log(somaRest(1, 2, 3, 4, 5))

//Função anônima
let funcaoAnonima = function(){
    return "Sou uma função anônima"
}
console.log(funcaoAnonima())

//Funcão arrow
let funcaoArrow = () => {
    return "Sou uma função arrow"
}
console.log(funcaoArrow())

//Função aninima 
const soma = (...numeros) => {
    const somar = val => {
        let res=0
        for(v of val){
            res += v
        }
        return res
    }
    return somar(numeros)
}
console.log(soma(1,2,3,4,5))