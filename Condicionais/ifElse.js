function temperatura() {
    let estaChovendo = true
    let naoEstaChovendo = false

    if(estaChovendo) {
        console.log('Está chovendo')
    } else {
        console.log('Não está chovendo')
    }
}

//Quero descobrir se a pessoa é maior de idade para poder dirigir

function idades() {
    let idade = 18;
    if(idade >= 18) {
        console.log('Pessoa pode dirigir')
    } else {
        console.log('Não pode dirigir')
    }
}

let notaDoAluno = 75
if(notaDoAluno > 70){
    console.log('Você passou de ano')
} else {
    console.log('Você reprovou de ano')
}

let acao = 'start'

switch(acao){
    case 'start':
    console.log('Iniciando o sistema...')
    break;
    case "stop":
    console.log('Parando o sistema')
    break;
    case 'pause':
        console.log('Pausando o sistema')
        break;

        default:
            console.log('Ação inválida')

}

let cor ='vermelho';

switch(cor) {
    case "vermelho":
        console.log("A cor é vermelho");
        break;
    case "azul":
        console.log("A cor é azul");
        break;
    case "amarelo":
        console.log("A cor é amarelo");
        break;

    default: {
        console.log("indefinido");
    }
}

// Quero saber se uma pessoa com 25 anos é uma criança, adolescente, adulto ou idoso

let idade = 61

switch(true) {
    case(idade > 0 && idade <= 12):
        console.log('É uma criança')
        break;
    case(idade > 12 && idade < 18):
        console.log('é adolescente')
        break;    
    case(idade >= 18 && idade < 60 ):
        console.log('É adulto')
        break;
    case(idade >= 60):
        console.log('É idoso')
        break;

    default :
        console.log('idade inválida')
        break;
}

let precoProduto1 = 5
let precoProduto2 = 10

if(precoProduto1 <= precoProduto1) {
    console.log("1");
} else {
    console.log('2');
}

let numero ="5";

if(numero != 5){
    console.log('valores diferentes');
} else {
    console.log("valores iguais");
}

if(numero !== 5) {
    console.log('valores ou tipos diferentes');
} else {
    console.log("iguais");
}
