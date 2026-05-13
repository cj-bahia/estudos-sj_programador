// Rest Operator: é representado por três pontos (...) e é utilizado para representar um número indefinido de argumentos como um array. Ele é muito útil quando queremos criar funções que podem receber um número variável de argumentos.

// function convidados(...nomes){
//     console.log("Seja bem vindo todos os convidados");
//     console.log(nomes);
// }

// convidados("Matheus", "Lucas", "Maria", "Ana Caroline");



function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numeroGerado]);
}

sorteador(1, 4, 5, 15, 25, 90, 55, 34);