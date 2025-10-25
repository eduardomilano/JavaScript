// JSON

let carro1 = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020
};

// Convertendo objeto para JSON
let carroJson = JSON.stringify(carro1);
console.log(carroJson);

// Convertendo JSON para objeto
let carroObj = JSON.parse(carroJson);
console.log(carroObj);