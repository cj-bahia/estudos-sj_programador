//1 Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado

function verificarNumero(numeroAnalisado){ // Função para verificar o tipo do número
    if(numeroAnalisado < 0){
        return "Negativo";
    }else if(numeroAnalisado === 0){
        return "Zero";
    }else{
        return "Positivo";
    }
}

console.log(verificarNumero(2));



//2 Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números

function buscarNumero(listaNumero, numeroBuscado){
    console.log(listaNumero.includes(numeroBuscado)
        ? `O número ${numeroBuscado} foi encontrado na lista`
        : `O número ${numeroBuscado} não foi encontrado na lista`
    );
}

buscarNumero([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);



//3 Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

function buscarPreco(lista, valor){
    let encontrado = lista.find((item) => item.price === valor);

    console.log(encontrado
        ? `O produto ${encontrado.name} foi encontrado pelo valor de R$ ${encontrado.price}.`
        : `Produto não encontrado pelo valor de: ${valor}`
    );
}

buscarPreco(products, 20);



//3.1 Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8

function buscarPrecoMenor(lista, valor){
    let encontrados = lista.filter((item) => item.price < valor)

    if(encontrados.length > 0) {
        for(let item of encontrados){
            console.log(`O produto ${item.name} foi encontrado pelo valor de R$ ${item.price}. Menor que R$ ${valor}`);
        }
    }else{
        console.log(`Nenhum produto foi encontrado pelo valor de R$ ${valor}`);
    }
}

buscarPrecoMenor(products, 1);