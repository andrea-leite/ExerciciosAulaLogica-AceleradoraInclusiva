function calcularCredito(saldoMedio) {
    let credito = 0;

    if (saldoMedio >= 601) {
        credito = saldoMedio * 0.40;
    } else if (saldoMedio >= 401) {
        credito = saldoMedio * 0.30;
    } else if (saldoMedio >= 201) {
        credito = saldoMedio * 0.20;
    } else {
        credito = 0;
    }

    return credito;
}

function exibirResultado(saldoMedio) {
    let credito = calcularCredito(saldoMedio);
    console.log(`Saldo Médio: R$ ${saldoMedio.toFixed(2)}`);
    console.log(`Valor do Crédito: R$ ${credito.toFixed(2)}`);
}

let saldoMedioCliente = 300;
exibirResultado(saldoMedioCliente);
