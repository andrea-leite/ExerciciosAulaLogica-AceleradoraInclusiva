// 8. Crie uma função que remova o último número de um array se houver mais de 3
// números, caso contrário, remova o primeiro número

function removerNumero(meuArray) {
    if(meuArray.length > 3) {
        meuArray.pop();
    
    } else {
        meuArray.shift();
    }
    
    return meuArray;
}
let numeros = [4,5, 10, 8];
console.log(removerNumero(numeros));



