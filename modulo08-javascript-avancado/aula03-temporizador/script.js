// setInterval

function acao(){
    document.write("Executando... <br/>");
}
// setInterval(acao, 1000); | Chama a função a cada intervalo de tempo definido (em milissegundos)

// Função anônima
// var time = setInterval(() => {
//     document.write("Executando... <br/>");
// }, 1000);

// clearInterval(time); | para o setInterval

// ------------------------------

// setTimeout

// setTimeout(acao, 3000); | Chama a função apenas uma vez após o intervalo de tempo definido (em milissegundos)

// Função anônima
// setTimeout(() => {
//     document.write("Executando... <br/>");
// }, 3000);