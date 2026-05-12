var data = new Date();

console.log(data);

data.getFullYear(); // retorna o ano atual
data.getMonth(); // retorna o mês atual (0-11, onde 0 é janeiro e 11 é dezembro)
data.getDate(); // retorna o dia do mês atual (1-31)
data.getDay(); // retorna o dia da semana atual (0-6, onde 0 é domingo e 6 é sábado)
data.getHours(); // retorna a hora atual
data.getMinutes(); // retorna os minutos atuais
data.getSeconds(); // retorna os segundos atuais
data.getMilliseconds(); // retorna os milissegundos atuais

data.setFullYear(); // define o ano
data.setMonth(); // define o mês
data.setDate(); // define o dia do mês
data.setHours(); // define a hora
data.setMinutes(); // define os minutos
data.setSeconds(); // define os segundos
data.setMilliseconds(); // define os milissegundos

data.getDate()+"/"+(data.getMonth() + 1)+"/"+data.getFullYear(); // retorna a data atual no formato dia/mês/ano

// ----------------------------------------------

var dataNova = new Date("March 10 2024");

console.log(dataNova);

console.log(Date.parse("March 10 2024")); // retorna os milissegundos desde 1 de janeiro de 1970 até a data especificada

var dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

console.log(dias[dataNova.getDay()]); // retorna o dia da semana correspondente à dataNova