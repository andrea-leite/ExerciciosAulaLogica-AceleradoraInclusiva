// 1. Contagem Regressiva (Fácil)
//    Enunciado: Escreva um programa que faça uma contagem regressiva de 10 até 0 usando o laço while.

let contagemRegressiva = 10;

while(contagemRegressiva >= 0) {
    console.log(contagemRegressiva)
    contagemRegressiva--;
}

// 2. Entrada de Usuário
//    Enunciado: Você tem uma lista de tentativas de senhas que foram feitas em um sistema. O programa deve verificar cada tentativa até encontrar a senha correta e, quando isso
//    ocorrer, exibir "Acesso concedido" e parar a verificação. 

let tentativasDeSenhas = ["senha1", "senha2", "senha3", "senha4", "senha5"];
let senhaCorreta = "senha";

let contador = 0;

while (contador < tentativasDeSenhas.length) {
  if (tentativasDeSenhas[contador] === senhaCorreta) {
    console.log("Acesso concedido!");
    break;
  }
  contador++;
  if (contador === tentativasDeSenhas.length) {
    console.log("Acesso Negado!");
  }
}

// 3. Calculadora Simples
//    Enunciado: Simule um conjunto de operações matemáticas que serão realizadas em sequência. O programa deve calcular a soma, subtração, multiplicação ou divisão de
//    dois números com base em uma lista de operações e parar quando todas as operações forem concluídas.

function calculadoraSimples(numero1, numero2){
  const operaçoes = ["+", "-", "*", "/"];
  let i = 0;

  while(i <= (operaçoes.length - 1)){
    switch(operaçoes[i]){
      case "+":
        console.log(numero1 + numero2);
        break;
      case "-":
        console.log(numero1 - numero2);
        break;
      case "*":
        console.log(numero1 * numero2);
        break;
      case "/":
        console.log(numero1 / numero2);
        break;
      default:
        console.log("opção invalida");
    }
    i++;
  }
}

calculadoraSimples(8, 20);







