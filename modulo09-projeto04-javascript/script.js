// Pegando os elementos do Index.html com o querySelector e armazenando em variáveis
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = []; // Array para armazenar as tarefas

function renderizarTarefas(){

    listElement.innerHTML = ''; // Limpando a lista antes de renderizar

    tarefas.map((toDo) => { // Iterando sobre o array de tarefas usando o método map
        let liElement = document.createElement("li"); // Criando um elemento <li> para cada tarefa
        let tarefaText = document.createTextNode(toDo); // Criando um nó de texto com o conteúdo da tarefa

        liElement.appendChild(tarefaText); // Adicionando o texto da tarefa ao elemento <li>
        listElement.appendChild(liElement); // Adicionando o elemento <li> à lista <ul>
    });

}

function adicionarTarefas(){
    
    if (inputElement.value === ''){
        alert("Digite uma tarefa para adicionar!");
        return false;
    }else{
        let novaTarefa = inputElement.value; // Pegando o valor do input

        tarefas.push(novaTarefa); // Adicionando a nova tarefa ao array
        inputElement.value = ''; // Limpando o campo de input

        renderizarTarefas(); // Chamando a função para renderizar as tarefas atualizadas
    }

}

buttonElement.onclick = adicionarTarefas; // Atribuindo a função ao evento de clique do botão