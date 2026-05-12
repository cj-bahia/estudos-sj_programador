// Pegando os elementos do Index.html com o querySelector e armazenando em variáveis
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = []; // Array para armazenar as tarefas

function adicionarTarefas(){
    
    if (inputElement.value === ''){
        alert("Digite uma tarefa para adicionar!");
        return false;
    }else{
        let novaTarefa = inputElement.value; // Pegando o valor do input

        tarefas.push(novaTarefa); // Adicionando a nova tarefa ao array
        inputElement.value = ''; // Limpando o campo de input
    }

}

buttonElement.onclick = adicionarTarefas; // Atribuindo a função ao evento de clique do botão