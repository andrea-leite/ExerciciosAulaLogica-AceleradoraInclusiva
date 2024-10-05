// 3. Crie uma função que adicione uma fruta ao início de um array de frutas e exiba o
// array atualizado

function adicionarFruta(minhasFrutas, novaFruta) {
    minhasFrutas.unshift(novaFruta); 
    console.log(minhasFrutas); 
}

let frutas = ['maçã', 'banana', 'laranja'];
adicionarFruta(frutas, 'mirtilo');
