// 9. Crie uma função que exiba uma mensagem indicando se o array de números tem
// mais ou menos de 5 elementos


function arrayNumeros(numeros) {

    if(numeros.length > 5) 
    {
        console.log("Mais de 5 elementos")
    } 
    else if(numeros.length == 5) 
    {
        console.log("Exatamente 5 elementos");
    }
    else {
        console.log("Menos de 5 elementos")
    } 
}

let numerosLista = [1, 2, 3, 4, 5, 6];
arrayNumeros(numerosLista)

