// Pegando os elementos do Index.html com o querySelector e armazenando em variáveis
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []; // Array para armazenar as tarefas

function renderizarTarefas(){

    listElement.innerHTML = ''; // Limpando a lista antes de renderizar

    tarefas.map((toDo) => { // Iterando sobre o array de tarefas usando o método map
        let liElement = document.createElement("li"); // Criando um elemento <li> para cada tarefa
        let tarefaText = document.createTextNode(toDo); // Criando um nó de texto com o conteúdo da tarefa

        let linkElement = document.createElement("a"); // Criando um elemento <a> para o link de exclusão
        linkElement.setAttribute("href", "#"); // Definindo o atributo href do link para "#" (pode ser ajustado conforme necessário)

        let linkText = document.createTextNode("Excluir"); // Criando um nó de texto para o link de exclusão
        linkElement.appendChild(linkText); // Adicionando o texto ao elemento <a>

        let posicao = tarefas.indexOf(toDo);

        linkElement.setAttribute("onclick", `deletarTarefas(${posicao})`); // Definindo o atributo onclick do link para chamar a função de exclusão (pode ser ajustado conforme necessário)

        liElement.appendChild(tarefaText); // Adicionando o texto da tarefa ao elemento <li>
        liElement.appendChild(linkElement); // Adicionando o link de exclusão ao elemento <li>
        listElement.appendChild(liElement); // Adicionando o elemento <li> à lista <ul>
    });

}

renderizarTarefas(); // Chamando a função para renderizar as tarefas inicialmente

function adicionarTarefas(){
    
    if (inputElement.value === ''){
        alert("Digite uma tarefa para adicionar!");
        return false;
    }else{
        let novaTarefa = inputElement.value; // Pegando o valor do input

        tarefas.push(novaTarefa); // Adicionando a nova tarefa ao array
        inputElement.value = ''; // Limpando o campo de input

        renderizarTarefas(); // Chamando a função para renderizar as tarefas atualizadas
        
        salvarDados(); // Chamando a função para salvar os dados no localStorage
    }

}

function deletarTarefas(posicao){
    tarefas.splice(posicao, 1); // Removendo a tarefa do array com base na posição
    renderizarTarefas(); // Chamando a função para renderizar as tarefas atualizadas
    
    salvarDados(); // Chamando a função para salvar os dados no localStorage
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas)); // Salvando o array de tarefas no localStorage como uma string JSON
}

buttonElement.onclick = adicionarTarefas; // Atribuindo a função ao evento de clique do botão