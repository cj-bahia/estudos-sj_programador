// Include = Verifica se uma string contém outra string || Case Sensitive

let nomes = ["Carlos", "Maria", "João", "Ana"];

console.log(nomes.includes("Carlos")); // true

if(nomes.includes("Matheus")){
    console.log("Está na lista");
}else{
    console.log("Não está na lista");
}


// ------------------------------------------------


// StartsWith = Verifica se uma string começa com outra string || Case Sensitive

let nome = "Carlos";

console.log(nome.startsWith("Car")); // true
console.log(nome.startsWith("c")); // false


// ------------------------------------------------


// EndsWith = Verifica se uma string termina com outra string || Case Sensitive

let sobrenome = "Bahia";

console.log(sobrenome.endsWith("ia")); // true
console.log(sobrenome.endsWith("h")); // false