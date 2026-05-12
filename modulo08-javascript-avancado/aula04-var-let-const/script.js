// Diferenças entre VAR, LET e CONST


// VAR
var nome = "Carlos"; // variável global ou local (dependendo do contexto)

if (nome === "Carlos"){
    var idade = 20;
    console.log(idade);
}

console.log(idade); // var tem escopo global ou local, mas não de bloco

// ----------------------------------------------

// LET

if (nome === "Carlos"){
    let curso = "JavaScript"; // variável local, só existe dentro do bloco onde foi declarada
    console.log(curso);
}

// console.log(curso);

// ----------------------------------------------

// CONST

const cargo = "Desenvolvedor"; // variável constante, não pode ser reatribuída
console.log(cargo);

cargo = "Analista"; // erro, não é possível reatribuir um valor a uma constante