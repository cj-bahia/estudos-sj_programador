let apostaNumeros;

function restricao(valor){
    return !isNaN(valor) && valor >= 6 && valor <= 9;
}

function sortear(){
    return Math.floor(Math.random() * 60) + 1;
}

function megaSena(aposta){
    const numeros = [];
    
    for(let i = 0; i < aposta; i++){
        let sorteio;
        
        do{
            sorteio = sortear();
        }while(numeros.includes(sorteio));
            
        numeros.push(sorteio);
    }
    
    console.log(numeros);
    alert(`Os numeros sorteados foram: ${numeros}`);
}

do{
    apostaNumeros = Number(prompt("Quantos números deseja apostar? (escolha entre 6 e 9)"));
}while(!restricao(apostaNumeros));

megaSena(apostaNumeros);