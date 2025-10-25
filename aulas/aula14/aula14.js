//Arrays

/*
Array é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável (matriz).
Os elementos de um array podem ser acessados por meio de índices, que começam em 0.
*/

// Exemplo de Array
var frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas[0]); // Output: maçã
console.log(frutas[1]); // Output: banana
console.log(frutas[2]); // Output: laranja

// MÉTODOS DE ARRAYS
// Removendo o último elemento do array
var ultimaFruta = frutas.pop();
console.log(ultimaFruta);

// Adicionando um novo elemento ao final do array
frutas.push('uva');
console.log(frutas);

// Adicionando um novo elemento ao início do array
frutas.unshift('morango');
console.log(frutas);    

// Removendo o primeiro elemento do array
var primeiraFruta = frutas.shift();
console.log(primeiraFruta);
console.log(frutas);

// Adicionando elementos em uma posição específica
frutas.splice(1, 0, 'kiwi'); // Adiciona 'kiwi' na posição 1

// Pegar o maior valor de um array
var numeros = [10, 5, 8, 20, 3];
var maiorNumero = Math.max.apply(null, numeros);
console.log(maiorNumero); // Output: 20

// Pegar o menor valor de um array
var menorNumero = Math.min.apply(null, numeros);
console.log(menorNumero); // Output: 3
