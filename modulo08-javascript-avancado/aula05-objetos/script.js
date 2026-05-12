let pessoa = {
    nome: "Carlos",
    idade: 19,
    altura: 1.69,
    cargo: "Desenvolvedor"
};

console.log(pessoa); // exibe o objeto completo
console.log(pessoa.nome); // Acessando as propriedades do objeto usando a notação de ponto
console.log(pessoa.idade);
console.log(pessoa.altura);
console.log(pessoa.cargo);

let carro = {
    nome: "Fusca",
    cor: "Azul",
    potencia: "1.6",
}

console.log(carro);
console.log(carro.nome);
console.log(carro.cor);
console.log(carro.potencia);

let usuarios = [
    {nome: "Carlos", cargo: "Desenvolvedor", status: "Ativo"},
    {nome: "Maria", cargo: "Analista", status: "Inativo"},
    {nome: "João", cargo: "Gerente", status: "Ativo"},
];

console.log(usuarios);
console.log(usuarios[0]); // Acessando o primeiro objeto do array
console.log(usuarios[1].cargo);
console.log(usuarios[2]);