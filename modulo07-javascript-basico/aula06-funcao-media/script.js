function mediaAluno(nota1, nota2){ // Função para calcular a média do aluno
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Aluno aprovado com a média " + media);
    }else if(media < 7){
        console.log("Aluno reprovado com a média " + media);
    }
}

function aluno(nome, curso){ // Função para exibir uma mensagem de boas vindas ao aluno
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

    console.log(mensagem);
}