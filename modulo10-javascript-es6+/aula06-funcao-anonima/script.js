// Funções anonimas

/*

() => {

}

1 - Os parênteses, que é por onde a funcão revebe os argumentos (assim como na função tradicional);
2 - "seta" => - responsável pelo nome "arrow";
3 - As chaves é o bloco de código que representa o corpo da função.

*/

function somar1(a, b){
    let total = a + b;
    return console.log(total);
}

somar1(10, 30);



let somar2 = (a, b) => {
    let total = a + b;
    console.log(total);
}

somar2(50, 20);



let numeros = [1, 3, 5, 10];

numeros.map((item) => {
    //Aqui vai toda a lógica
    console.log(item);
})