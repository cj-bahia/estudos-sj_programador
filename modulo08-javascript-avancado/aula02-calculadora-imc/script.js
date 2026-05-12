/*
abaixo de 17 - Muito abaixo do peso;
entre 17 e 18.49 - Abaixo do peso;
entre 18.5 e 24.99 - Peso normal;
entre 25 e 29.99 - Acima do peso;
*/

// peso / (altura ** 2)

var peso, altura, imc, resultado;

function calcularIMC(event){
    event.preventDefault(); // previne o comportamento padrão do formulário

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    console.log(peso, altura);

    imc = peso / (altura ** 2);

    console.log(imc);
    
    resultado = document.getElementById('resultado');

    if (imc < 17){
        resultado.innerHTML = '<br/>Muito abaixo do peso! <br/> IMC = ' + imc.toFixed(2);
    }else if (imc >= 17 && imc <= 18.49){
        resultado.innerHTML = '<br/>Abaixo do peso! <br/> IMC = ' + imc.toFixed(2);
    }else if (imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = '<br/>Peso normal! <br/> IMC = ' + imc.toFixed(2);
    }else if (imc >= 25 && imc <= 29.99){
        resultado.innerHTML = '<br/>Acima do peso! <br/> IMC = ' + imc.toFixed(2);
    }else if (imc >= 30){
        resultado.innerHTML = '<br/>Obesidade! <br/> IMC = ' + imc.toFixed(2);
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}