import { useState } from "react";

interface User { // Interface para tipagem
  nome?: string; // '?' significa que o campo pode ser nulo, sem ele os campos seriam obrigatórios
  idade?: number;
  email?: string;
}

function App(){

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [email, setEmail] = useState('');

  const [user, setUser] = useState<User>({}); // <User> significa que o estado user irá receber um objeto do tipo User (Interface criada acima)

  function handleRegister(event: React.SyntheticEvent<HTMLFormElement>){ // Função para lidar com o envio do formulário
    event.preventDefault();

    setUser({ // Atualizando o estado do componente
      nome: nome,
      idade: idade,
      email: email,
    });
  }

  return(
    <div>
      <form onSubmit={ handleRegister }>
        <h1>Cadastrando usuário</h1>

        <label>Nome:</label>
        <br />
        <input
          placeholder="Digite seu nome" 
          value={nome}
          onChange={ ( event ) => setNome(event.target.value)}    
        />
        <br />

        <label>Idade:</label>
        <br />
        <input
          type="number"
          placeholder="Digite sua idade"
          value={idade}
          onChange={ ( event ) => setIdade(Number(event.target.value))}  
        />
        <br />

        <label>Email:</label>
        <br />
        <input
          placeholder="Digite sua email"
          value={email}
          onChange={ ( event ) => setEmail(event.target.value)}    
        />
        <br />

        <button type="submit">Registrar</button>

        <br /><br />

        <div>

          <span>Bem vindo: {user.nome}</span>
          <br />
          
          <span>Idade: {user.idade}</span>
          <br />

          <span>Email: {user.email}</span>
          <br />

        </div>

      </form>

    </div>
  );
}

export default App;