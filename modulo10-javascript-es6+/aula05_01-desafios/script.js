// Crie uma lista de produtos

// 1. A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(produtos);

// 2. Mostre no console quantos produtos tem nessa lista
console.log(`Quantidade de produtos: ${produtos.length + 1}`);

// 3. Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes
produtos.splice("Mouse", 1);

// 4. Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisão que o produto não foi encontrado 
let busca = produtos.find((item) => {
    if(item === undefined){
        return console.log(`Produto não foi encontrado`);
    }else{
        return console.log(`Produto encontrado | Produto: ${item}`);
    }
})

console.log(busca);

// 5. Remova o segundo item da sua lista
produtos.splice(1, 1);

console.log(produtos);



// ---------------------------------------------------------------------------------------



// Crie uma lista de apenas numeros 1, 3, 5, 7, 9

// 1. Ordene essa lista do menor para o maio
let numeros = [1, 3, 5, 7, 0, 9];

numeros = numeros.sort((a, b) => a - b);
console.log(numeros);

// 2. Retire o primeiro numero desta lista
numeros.splice(0, 1);


// 3. Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
numeros = numeros.sort((a, b) => b - a);
console.log(numeros);



// ---------------------------------------------------------------------------------------



// Crie uma string que contenhao dia de hoje

let data = new Date("07/20/2019");
console.log(data);

// 1. Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();

console.log(`Hoje é dia ${dia} do mês ${mes} do ano de ${ano}`);