// Spread Operator é representado por três pontos (...) e tem a função de expandir um iterável (como um array ou objeto) em elementos individuais. Ele é muito útil para criar cópias de arrays ou objetos, combinar arrays ou objetos, ou passar elementos de um array como argumentos para uma função.

// Em Array

// let primeiros = [1, 2, 3];

// let numeros = [...primeiros, 4, 5, 10];
// console.log(numeros);



// Em Objetos

// let pessoa = {
//     nome: "Carlos",
//     sobrenome: "Bahia",
//     empresa: "Riot",
//     cargo: "Desenvolvedor"
// };

// let novaPessoa = {
//     ...pessoa,
//     status: "Ativo",
//     cidade: "Manaus"
// };

// console.log(novaPessoa);



function novoUsuario(info){
    let dados = {
        ...info,
        status: "Ativo",
        cidade: "Manaus"
    }

    console.log(dados);
}

novoUsuario({
    nome: "Carlos",
    sobrenome: "Bahia",
    empresa: "Riot",
    cargo: "Desenvolvedor"
});