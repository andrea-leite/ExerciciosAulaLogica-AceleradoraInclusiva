// Exercício 1: Contagem Simples
//  Enunciado: Escreva um programa que imprima os números de 1 a 10 usando um laço for.

function numeros() {
    for(let numero = 1; numero <= 10; numero++) {
        console.log(numero)
    }    
}
numeros()


// Exercício 2: Números Pares
// Enunciado: Crie um laço for que imprima apenas os números pares entre 1 e 20.

function numerosPares(){
    for(let numero = 1; numero <=20; numero++){
        if(numero % 2 == 0){
            console.log(numero)
        } 
    }
}
numerosPares()

// 3. Tabuada Personalizada
//  Enunciado: Escreva um programa que receba um número do usuário e exiba a tabuada desse número de 1 a 10 usando um laço for.

function gerarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

let numero = 8;

gerarTabuada(numero);