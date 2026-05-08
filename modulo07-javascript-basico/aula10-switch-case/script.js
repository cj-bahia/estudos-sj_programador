//Switch

function pedir(){
    var valor = Number(prompt("Escolha um item (1 a 4):"));

    switch(valor){
        case 1:
            alert("Você escolheu 1 = Suco");
            break;
        case 2:
            alert("Você escolheu 2 = Água gelada");
            break;
        case 3:
            alert("Você escolheu 3 = Sorvete");
            break;
        case 4:
            alert("Você chamou o garçom");
            break;
        default:
            alert("Escolha uma opção entre 1 a 4");
            break;
    }
}