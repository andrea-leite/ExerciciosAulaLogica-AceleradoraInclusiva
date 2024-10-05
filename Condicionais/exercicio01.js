function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            return "Triângulo Equilátero";
        }   
        else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return "Triângulo Isósceles";
        }
        else {
            return "Triângulo Escaleno";
        }
    } else {
        return "Os valores fornecidos não formam um triângulo válido.";
    }
}

let lado1 = 12;
let lado2 = 12;
let lado3 = 12;

console.log(tipoTriangulo(lado1, lado2, lado3));

//Equilátero: Todos os lados têm a mesma medida 
//Isósceles: Dois lados têm a mesma medida 
//Escaleno: Todos os lados têm medidas diferentes