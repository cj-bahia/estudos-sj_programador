let pessoa = {
    nome: "Carlos",
    sobrenome: "Bahia",
    empresa: "Riot",
    cargo: "Desenvolvedor"
};

// console.log(pessoa);
// console.log(pessoa.cargo);



// DESCONSTRUINDO OBJETOS

// let nome = "TESTE";

// const { nome:nomePessoa, sobrenome, empresa, cargo } = pessoa;

// console.log("Nome da pessoa: " + nomePessoa);
// console.log(sobrenome);
// console.log(empresa);
// console.log(cargo);




// DESCONSTRUINDO ARRAYS

let nomes = ["Carlos", "Maria", "João", "Ana"];
console.log(nomes);

// forma 1
let { 0:carlos, 2:terceiraPessoa } = nomes;
console.log (carlos);
console.log (terceiraPessoa);

// forma 2
let [ primeiroNome, segundoNome ] = nomes;
console.log(primeiroNome);
console.log(segundoNome);