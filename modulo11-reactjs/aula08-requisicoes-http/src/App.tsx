import { useEffect, useState } from "react";

import './App.css'

// API https://sujeitoprogramador.com/rn-api/?api=posts

interface Post {
  id: number;
  titulo: string;
  subtitulo: string;
  capa: string;
}


function App() {

  const [nutri, setNutri] = useState<Post[]>([]);

  useEffect(() => {

    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
        .then((resposta) => resposta.json())
        .then((json) => {
          setNutri(json);
        })
    }

    loadApi();

  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map(item => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">
              {item.subtitulo}
            </p>

            <a className="botao">Acessar</a>
          </article>
        )
      })}

    </div>
  );
}

export default App
