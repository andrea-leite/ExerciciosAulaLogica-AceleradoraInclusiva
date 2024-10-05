// 4. Crie uma função que remova o primeiro número de um array e exiba o número
// removido e o array atualizado

function removerPrimeiroNumero(meuArray) {
  let numeroRemovido = meuArray.shift();
  
  return numeroRemovido;
}

let meuArray = [10, 20, 30, 40];

console.log("Número removido do array", removerPrimeiroNumero(meuArray));
console.log("Meu array atualizado:", meuArray);

