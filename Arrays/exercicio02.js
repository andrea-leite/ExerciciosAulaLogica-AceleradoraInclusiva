// 2. Crie uma função que remova o último número de um array e exiba o número
// removido e o array atualizado.

function removaUltimoNumero(meuArray) {
    let numeroRemovido = meuArray.pop();
    
    return numeroRemovido;
    
}

let meuArray = [4, 6, 8, 10, 23, 55];
console.log("Número removido do array", removaUltimoNumero(meuArray));
console.log(meuArray);