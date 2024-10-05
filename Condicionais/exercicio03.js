let operacao = "multiplicacao";

let num1 = 1018;
let num2 = 160;

let resultado;

switch(operacao) {
  case "adicao":
    resultado = num1 + num2;
    console.log("O resultado da Adição de " + num1 + " + " + num2 ,"é: " + resultado);
    break;
  case "subtracao":
    resultado = num1 - num2;
    console.log("O resultado da Subtração de " + num1 + " - " + num2 ,"é: " + resultado);
    break;
  case "multiplicacao":
    resultado = num1 * num2;
    console.log("O resultado da Multiplicação de " + num1 + " * " + num2 ,"é: " + resultado);
    break;
  case "divisao":
      resultado = num1 / num2;
      console.log("O resultado da Divisão de " + num1 + " / " + num2 ,"é: " + resultado);
      break;
  default:
    console.log("Operação inválida!");
}
