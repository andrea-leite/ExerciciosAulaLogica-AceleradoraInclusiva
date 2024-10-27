// . Contagem de Números Pares
// Enunciado:
// Crie um programa que exibe números pares a partir de um número inicial e continua até que um limite máximo seja atingido.
// O programa deve sempre exibir pelo menos um número, mesmo que o número inicial já seja maior que o limite.

function exibirPares(inicio, limite) {
  do {
    if (inicio % 2 === 0) {
      console.log(inicio);
    }
    inicio++;
  } while (inicio <= limite);
}

exibirPares(15, 10);
exibirPares(2, 10); 
exibirPares(3, 3); 
exibirPares(26,47)