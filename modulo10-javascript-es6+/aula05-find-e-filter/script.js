// Find = é utilizado para encontrar um item específico dentro de um array, retornando o primeiro item encontrado que atenda a condição especificada. Se nenhum item for encontrado, ele retorna undefined.

let listagem = [5, 3, "José", 2, "Matheus"];

let busca = listagem.find((item) => {
    // Condição
    if(item === "José"){
        return console.log(`ITEM ENCONTRADO COM SUCESSO`);
    }
});

console.log(busca);

// -------------------------------------

// Filter = é utilizado para filtrar um array, retornando um novo array com os itens que atendem a condição especificada. Se nenhum item for encontrado, ele retorna um array vazio.

let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador"];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(resultado);