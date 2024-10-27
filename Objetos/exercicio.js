let pessoa = {
    nome: ['Andréa', 'Leite'],
    idade: 49,
    filhos: ['Carlos', 'João', 'Vivian'],    
    filmesPreferidos: ['Supernatural', 'Grimm', 'Além da Vida', 'Cafundó'],
    livrosPreferidos: ['O advogado de Deus', 'Violetas na Janela', 'Nosso Lar'],
    resumo: function(){
        console.log('Meu nome é ' + this.nome[0] +' '+ this.nome[1]);
        console.log('Tenho ' + this.idade + ' anos');
        console.log('Três filhos maravilhosos ' + this.filhos[0] + ', ' + this.filhos[1] + ', ' + this.filhos[2]);
        console.log('Gosto muito de filmes, minha série preferida é ' + this.filmesPreferidos[0] + 'e meu livro de cabeceira é ' + this.livrosPreferidos[0]);
    }
}

console.log(pessoa.resumo());
