import { useState } from "react";

function App(){

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState<string[]>([]); // Precisa do <string[]> para indicar que o array irá conter strings

  function handleRegister(event: React.SyntheticEvent<HTMLFormElement>){ // Função para lidar com o envio do formulário
    event.preventDefault();

    setTarefas([...tarefas, input]); // Adiciona a tarefa na lista
    setInput(''); // Limpa o input
  }

  return(
    <div>
      <form onSubmit={ handleRegister }>
        <h1>Cadastrando usuário</h1>

        <label>Nome da tarefa:</label>
        <br />
        <input
          placeholder="Digite uma tarefa" 
          value={input}
          onChange={ ( event ) => setInput(event.target.value)}    
        />
        <br />

        <button type="submit">Registrar</button>

        <br /><br />

        <ul>

          {tarefas.map(tarefa => ( // Mapeia as tarefas na lista
            <li key={tarefa}>{tarefa}</li> // Exibe cada tarefa, 'key' necessário para identificar cada tarefa
          ))}

        </ul>

      </form>

    </div>
  );
}

export default App;