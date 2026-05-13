// map = percorrer um array e retornar um novo array com as mesmas quantidades de elementos, porém com os valores transformados

let lista = ["Matheus", "João", "Maria", "José"];

lista.map((item, index) => {
    console.log(`Passando: ${item} - Na posição: ${index}`);
});

// ------------------------------------

// Reduce = busca reduzir um array

let numeros = [5, 3, 2, 5];

let total = numeros.reduce ((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total ate o momento`);
    console.log(`${numero} - valor atual`);
    // console.log(`${indice} - indice atual`);
    // console.log(`${original} - array original`); 
    console.log('================================');

    return acumulador += numero;
})

console.log(`Total do reduce: ${total}`);