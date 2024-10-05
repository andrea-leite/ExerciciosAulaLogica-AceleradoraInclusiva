// 10. Crie uma função que receba o nome de uma fruta. Se a fruta for "Morango",
// remova o primeiro item do array. Caso contrário, adicione essa fruta ao final do
// array.

let frutas = ["maça", "banana", "pera", "caju", "laranja"];

function addFruta(fruta) {
    if(fruta === "Morango") {
        frutas.shift();        
    } else {
        frutas.push(fruta)
    }
    return frutas;
}

console.log(addFruta("Abacaxi"));
console.log(addFruta("Morango"));

