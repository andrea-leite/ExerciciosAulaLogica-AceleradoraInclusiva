let pessoa = {
    nome: ["Jorge", "Santos"],
    idade: 31,
    genero: "Masculino",
    interesses:["Carros", "culinária", "Jogos"],
    biografia: function(){
        console.log(this.nome[0] + ' ' + 'está bem');
    },
    olaPessoal: function(){
        console.log('Eu gosto ' + this.interesses[1]);
    }
}
// console.log(pessoa.biografia())
// console.log(pessoa.nome[1])
// console.log(pessoa.olaPessoal())

for(let percorreObjeto in pessoa){
    console.log(percorreObjeto)
}