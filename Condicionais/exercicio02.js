let saldo = 300.00;

function realizarSaque(valorSaque) {
    if (valorSaque <= saldo) {
        saldo -= valorSaque;
        console.log(`Saque de R$ ${valorSaque.toFixed(2)} realizado com sucesso.`);
        console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
    } else {
        console.log('Saldo insuficiente para realizar o saque.');
    }
}

realizarSaque(300);
