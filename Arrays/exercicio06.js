// 6. Crie uma função que receba um número. Se o número for maior que 50, remova
// o último número do array. Caso contrário, adicione o número ao final do array

function manipularArray(numero, array) {
  if (numero > 50) {
    array.pop(numero);
  } else {
    array.push(numero);
  }
  return array;
}

let meuArray = [10, 20, 30, 40, 50];
console.log(manipularArray(55, meuArray));
console.log(manipularArray(25, meuArray));
