// 1. Crie uma função que adicione um número ao final de um array de números e
// exiba o array atualizado

function adicionarNumero(meuArray, numero) {
    meuArray.push(numero);
    console.log(meuArray);
}
let numeros = [1, 2, 3, 18, 24, 26];
adicionarNumero(numeros, 12);

