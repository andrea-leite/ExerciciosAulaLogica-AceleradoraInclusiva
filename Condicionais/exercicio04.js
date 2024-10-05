function classificarNadador(idade) {
    if (idade >= 5 && idade <= 7) {
        return "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        return "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        return "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        return "Juvenil B";
    } else if (idade >= 18) {
        return "Adulto";
    } else {
        return "Idade fora das categorias";
    }
}

let idade = 20;
console.log(`O nadador tem ${idade} anos e está na categoria: ${classificarNadador(idade)}`);
