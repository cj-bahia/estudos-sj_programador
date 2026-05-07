var area = document.getElementById("area"); //Pega o elemento HTML com o id "area" e armazena na variável area

function entrar(){
    var nome = prompt("Qual seu nome?");

    if(nome == "" || nome == null){ //Verifica se o nome é vazio ou nulo, se for, exibe um alerta e mantém a mensagem original
        alert("Ops, algo deu errado!");
        area.innerHTML = "Clique no botão para acessar..."
    }else{ //Se o nome for válido, exibe uma mensagem de boas-vindas e um botão para sair
        area.innerHTML = "Bem vindo " + nome + "! ";

        let botaoSair = document.createElement("button"); //Cria um elemento HTML do tipo "button" e armazena na variável botaoSair
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;

        area.appendChild(botaoSair);
    }

}

function sair(){ //Função para sair da conta, exibe um alerta e altera a mensagem na tela
    alert("Até mais!");
    area.innerHTML = "Você saiu!";
}